"use client";

import { useEffect, useState } from "react";
import VrnLeadGate from "./VrnLeadGate";

export default function VrnLeadPilotMount({
  enabled,
}: {
  enabled: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const path = window.location.pathname.replace(/\/+$/, "");
    const isSurabayaLandingPage = path === "/rental-mobil-surabaya";
    const isTestMode = new URLSearchParams(window.location.search).get("rental_test") === "1";

    setVisible(isSurabayaLandingPage && isTestMode);
  }, [enabled]);

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-h-[80vh] max-w-lg overflow-y-auto rounded-xl border border-amber-300 bg-white p-5 text-slate-900 shadow-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-800">
        Form uji VRN — Preview saja
      </p>
      <VrnLeadGate
        businessNumber="6282363389893"
        message="Halo VRN Surabaya, saya ingin konsultasikan kebutuhan sewa mobil."
      />
    </aside>
  );
}
