import {
  ArrowRight,
  Gift,
  Snowflake,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";

interface NataruHomeBannerProps {
  city: string;
  description: string;
  href: string;
}

export function NataruSnowfall() {
  return (
    <div className="nataru-page-snowfall" aria-hidden="true">
      {Array.from({ length: 10 }, (_, index) => (
        <Snowflake
          key={index}
          className={`nataru-page-flake nataru-page-flake-${index + 1}`}
        />
      ))}
    </div>
  );
}

export function NataruHomeBanner({
  city,
  description,
  href,
}: NataruHomeBannerProps) {
  const headingId = `nataru-${city.toLowerCase()}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="nataru-home-promo px-4 py-8 sm:px-6 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="nataru-home-banner">
          <div className="nataru-home-lights" aria-hidden="true" />
          <div className="nataru-home-banner-tree" aria-hidden="true">
            <Star className="nataru-home-tree-star" />
            <TreePine className="nataru-home-tree-icon" />
            <span className="nataru-home-tree-ornament ornament-red" />
            <span className="nataru-home-tree-ornament ornament-gold" />
            <span className="nataru-home-tree-ornament ornament-blue" />
            <Gift className="nataru-home-gift" />
          </div>
          <div className="nataru-home-banner-content">
            <div className="nataru-home-banner-copy">
              <p className="nataru-home-badge">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                Spesial Libur Natal &amp; Tahun Baru
              </p>
              <h2 id={headingId}>Liburan Natal &amp; Tahun Baru di {city}</h2>
              <p className="nataru-home-greeting">
                Merry Christmas &amp; Happy New Year!
              </p>
              <p className="nataru-home-description">{description}</p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="nataru-home-cta"
            >
              <Gift aria-hidden="true" className="h-5 w-5" />
              Rencanakan Liburan
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
