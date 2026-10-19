"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type FormEvent,
  type ReactNode,
} from "react";

const GCLID_STORAGE_KEY = "vrn-surabaya-gclid";
const GCLID_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const GCLID_PATTERN = /^[A-Za-z0-9_.~-]{8,500}$/;

type ActiveLead = {
  href: string;
  gclid: string | null;
  storageUnavailable: boolean;
};

type MatchingContextValue = {
  enabled: boolean;
  openForm: (href: string) => void;
};

type StoredGclid = {
  value: string;
  expiresAt: number;
};

type LeadAttempt = {
  controller: AbortController;
  popup: Window | null;
  cancelled: boolean;
};

const MatchingContext = createContext<MatchingContextValue | null>(null);

function readGclid(): { value: string | null; storageUnavailable: boolean } {
  const queryGclid = new URLSearchParams(window.location.search).get("gclid");
  if (queryGclid !== null && !GCLID_PATTERN.test(queryGclid)) {
    try {
      window.sessionStorage.removeItem(GCLID_STORAGE_KEY);
    } catch {
      return { value: null, storageUnavailable: true };
    }
    return { value: null, storageUnavailable: false };
  }

  if (queryGclid) {
    try {
      const previous = window.sessionStorage.getItem(GCLID_STORAGE_KEY);
      if (previous) {
        const stored: StoredGclid = JSON.parse(previous);
        if (
          stored.value === queryGclid &&
          typeof stored.expiresAt === "number" &&
          stored.expiresAt > Date.now()
        ) {
          return { value: queryGclid, storageUnavailable: false };
        }
      }
      const stored: StoredGclid = {
        value: queryGclid,
        expiresAt: Date.now() + GCLID_MAX_AGE_MS,
      };
      window.sessionStorage.setItem(GCLID_STORAGE_KEY, JSON.stringify(stored));
      return { value: queryGclid, storageUnavailable: false };
    } catch {
      return { value: queryGclid, storageUnavailable: true };
    }
  }

  try {
    const raw = window.sessionStorage.getItem(GCLID_STORAGE_KEY);
    if (!raw) return { value: null, storageUnavailable: false };

    const stored: StoredGclid = JSON.parse(raw);
    if (
      typeof stored.value !== "string" ||
      !GCLID_PATTERN.test(stored.value) ||
      typeof stored.expiresAt !== "number" ||
      stored.expiresAt <= Date.now()
    ) {
      window.sessionStorage.removeItem(GCLID_STORAGE_KEY);
      return { value: null, storageUnavailable: false };
    }
    return { value: stored.value, storageUnavailable: false };
  } catch {
    return { value: null, storageUnavailable: true };
  }
}

function emitWhatsAppConversion() {
  window.dispatchEvent(new Event("vrn:sby-wa-click"));
}

export function VrnLeadProvider({
  enabled,
  children,
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  const [activeLead, setActiveLead] = useState<ActiveLead | null>(null);
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const busyRef = useRef(false);
  const attemptRef = useRef<LeadAttempt | null>(null);
  const phoneInputId = "vrn-lead-phone";

  useEffect(() => {
    if (enabled) readGclid();
  }, [enabled]);

  function openForm(href: string) {
    const attribution = readGclid();
    setPhone("");
    setConsent(false);
    setNotice(
      attribution.storageUnavailable
        ? "ID iklan hanya dapat digunakan selama halaman ini terbuka karena penyimpanan sesi tidak tersedia."
        : "",
    );
    setActiveLead({
      href,
      gclid: attribution.value,
      storageUnavailable: attribution.storageUnavailable,
    });
  }

  function closeForm() {
    const attempt = attemptRef.current;
    if (attempt) {
      attempt.cancelled = true;
      attempt.controller.abort();
      if (attempt.popup && !attempt.popup.closed) attempt.popup.close();
      attemptRef.current = null;
    }
    busyRef.current = false;
    setBusy(false);
    setActiveLead(null);
    setNotice("");
  }

  function openWhatsApp(href: string, popup: Window | null) {
    if (popup) {
      if (popup.closed) return false;
      popup.location.href = href;
      emitWhatsAppConversion();
      return true;
    }

    const newWindow = window.open(href, "_blank");
    if (newWindow) {
      newWindow.opener = null;
      emitWhatsAppConversion();
      return true;
    }

    emitWhatsAppConversion();
    window.location.assign(href);
    return true;
  }

  function bypassMatching() {
    if (!activeLead || busyRef.current) return;
    const opened = openWhatsApp(activeLead.href, null);
    if (opened) setActiveLead(null);
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeLead || !activeLead.gclid || busyRef.current) return;
    if (!phone.trim() || !consent) {
      setNotice("Masukkan nomor WhatsApp dan setujui pencocokan sebelum melanjutkan.");
      return;
    }

    busyRef.current = true;
    setBusy(true);
    setNotice("");

    const popup = window.open("about:blank", "_blank");
    if (popup) popup.opener = null;
    const controller = new AbortController();
    const attempt: LeadAttempt = { controller, popup, cancelled: false };
    attemptRef.current = attempt;
    let matched = false;

    try {
      const response = await fetch("/api/vrn-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          gclid: activeLead.gclid,
          city: "Surabaya",
          consent: true,
        }),
        signal: controller.signal,
      });
      if (response.ok) {
        const result: { ok?: unknown } = await response.json();
        matched = result.ok === true;
      }
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) {
        setNotice("Pencocokan tidak terkonfirmasi; WhatsApp tetap dapat dibuka.");
      }
    } finally {
      if (!attempt.cancelled) {
        const opened = openWhatsApp(activeLead.href, attempt.popup);
        if (opened) {
          setNotice(
            matched
              ? "Pencocokan tersimpan. WhatsApp telah dibuka."
              : "Pencocokan tidak terkonfirmasi; WhatsApp dibuka tanpa menghambat konsultasi.",
          );
          setActiveLead(null);
        } else {
          setNotice("Tab WhatsApp ditutup sebelum percakapan dibuka; tidak ada konversi yang dicatat.");
          setActiveLead(null);
        }
      }
      if (attemptRef.current === attempt) {
        attemptRef.current = null;
        busyRef.current = false;
        setBusy(false);
      }
    }
  }

  return (
    <MatchingContext.Provider value={{ enabled, openForm }}>
      {children}
      {activeLead && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeForm();
          }}
        >
          <section
            aria-labelledby="vrn-lead-title"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-slate-900 shadow-2xl"
            role="dialog"
          >
            <h2 className="text-xl font-bold" id="vrn-lead-title">
              Konsultasi rental mobil Surabaya
            </h2>
            {activeLead.gclid ? (
              <>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Masukkan nomor WhatsApp dan berikan persetujuan agar nomor
                  Anda dapat dicocokkan dengan sumber iklan. ID iklan hanya
                  disimpan di sesi browser ini, maksimal 30 hari, dan hanya
                  dikirim setelah Anda menyetujui.
                </p>
                {activeLead.storageUnavailable && (
                  <p className="mt-2 text-sm text-amber-800" role="status">
                    ID iklan tidak dapat disimpan untuk halaman berikutnya.
                    Pencocokan tetap dapat dilakukan dari halaman ini.
                  </p>
                )}
                <form className="mt-5 space-y-4" onSubmit={submitLead}>
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor={phoneInputId}>
                      Nomor WhatsApp
                    </label>
                    <input
                      autoComplete="tel"
                      className="w-full rounded-md border border-slate-300 px-3 py-2"
                      id={phoneInputId}
                      inputMode="tel"
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="08xxxxxxxxxx"
                      required
                      type="tel"
                      value={phone}
                    />
                  </div>
                  <label className="flex items-start gap-2 text-sm leading-6">
                    <input
                      checked={consent}
                      className="mt-1"
                      onChange={(event) => setConsent(event.target.checked)}
                      required
                      type="checkbox"
                    />
                    <span>
                      Saya setuju nomor saya digunakan untuk mencocokkan
                      permintaan sewa dengan sumber iklan sesuai kebijakan
                      privasi.
                    </span>
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      className="flex-1 rounded-md bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700 disabled:opacity-60"
                      disabled={busy}
                      type="submit"
                    >
                      {busy ? "Memproses..." : "Setuju dan lanjut WhatsApp"}
                    </button>
                    <button
                      className="rounded-md border border-slate-300 px-4 py-2 text-sm"
                      onClick={closeForm}
                      type="button"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  ID iklan tidak tersedia di sesi ini. Nomor Anda tidak akan
                  dikirim untuk pencocokan.
                </p>
                {activeLead.storageUnavailable && (
                  <p className="mt-2 text-sm text-amber-800" role="status">
                    Penyimpanan sesi browser tidak tersedia sehingga ID iklan
                    dari halaman sebelumnya tidak dapat digunakan.
                  </p>
                )}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button
                    className="flex-1 rounded-md bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700"
                    onClick={bypassMatching}
                    type="button"
                  >
                    Langsung WhatsApp tanpa pencocokan
                  </button>
                  <button
                    className="rounded-md border border-slate-300 px-4 py-2 text-sm"
                    onClick={closeForm}
                    type="button"
                  >
                    Batal
                  </button>
                </div>
              </>
            )}
            {notice && (
              <p className="mt-3 text-sm text-slate-600" role="status">
                {notice}
              </p>
            )}
          </section>
        </div>
      )}
      {!activeLead && notice && (
        <p
          className="fixed bottom-4 left-4 z-[110] max-w-lg rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-lg"
          role="status"
        >
          {notice}
        </p>
      )}
    </MatchingContext.Provider>
  );
}

type VrnLeadWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const VrnLeadWhatsAppLink = forwardRef<
  HTMLAnchorElement,
  VrnLeadWhatsAppLinkProps
>(function VrnLeadWhatsAppLink({ href, onClick, ...props }, ref) {
  const matching = useContext(MatchingContext);

  return (
    <a
      {...props}
      data-vrn-lead-trigger={matching?.enabled ? "true" : undefined}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          !matching?.enabled ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        matching.openForm(href);
      }}
      ref={ref}
    />
  );
});
