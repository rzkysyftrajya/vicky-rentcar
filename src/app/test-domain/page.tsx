import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Testing - Multi-Domain Routing",
  description:
    "Halaman testing untuk verifikasi konfigurasi multi-domain routing",
};

export default function TestDomainPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Domain Testing Page
      </h1>
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">
          Multi-Domain Configuration
        </h2>
        <p className="mb-4">
          Halaman ini digunakan untuk testing konfigurasi multi-domain routing.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <strong>Domain yang diakses:</strong>
            <span className="ml-2 font-mono" id="current-domain">
              {typeof window !== "undefined"
                ? window.location.hostname
                : "Loading..."}
            </span>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <strong>URL Lengkap:</strong>
            <span className="ml-2 font-mono" id="current-url">
              {typeof window !== "undefined"
                ? window.location.href
                : "Loading..."}
            </span>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <strong>Path:</strong>
            <span className="ml-2 font-mono" id="current-path">
              {typeof window !== "undefined"
                ? window.location.pathname
                : "Loading..."}
            </span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <h3 className="font-semibold mb-2">Instruksi Testing:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <code>http://localhost:3000</code> → harus ke homepage utama
            </li>
            <li>
              <code>http://vickyrentcarnusantara.com:3000</code> → harus ke
              homepage utama
            </li>
            <li>
              <code>http://pt.vrnrentcarmedan.com:3000</code> → harus otomatis
              ke /medan
            </li>
            <li>
              <code>http://pt.vrnrentcarmedan.com:3000/about-us</code> → harus
              ke /medan/about-us
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
          <p className="text-sm">
            <strong>Catatan:</strong> Untuk testing lokal, tambahkan entries di
            file hosts:
          </p>
          <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
            {`127.0.0.1 vickyrentcarnusantara.com
127.0.0.1 pt.vrnrentcarmedan.com`}
          </pre>
        </div>
      </div>
    </div>
  );
}
