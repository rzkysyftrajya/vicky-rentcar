"use client";

import { useEffect } from "react";

interface Car {
  name: string;
  image: string;
  alt: string;
  type: string;
}

interface CityPageProps {
  city: string;
  province?: string;
  description: string;
  highlights: string[];
  cars: Car[];
  faq?: { question: string; answer: string }[];
}

export default function CityPage({
  city,
  province,
  description,
  highlights,
  cars,
  faq = [],
}: CityPageProps) {
  // ✅ Inject JSON-LD for SEO (Car + FAQ)
  useEffect(() => {
    const ldJson: any = {
      "@context": "https://schema.org",
      "@type": "CarRental",
      name: `Sewa Mobil ${city}${province ? `, ${province}` : ""}`,
      description: description,
      areaServed: city,
      provider: {
        "@type": "Organization",
        name: "PT. VRN",
      },
      makesOffer: cars.map((car) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: car.name,
          vehicleModelDate: "2024",
          bodyType: car.type,
          image: car.image,
        },
      })),
    };

    if (faq.length > 0) {
      ldJson.mainEntity = faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }));
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [city, province, description, cars, faq]);

  return (
    <article className="max-w-4xl mx-auto p-6">
      {/* ✅ H1 */}
      <h1 className="text-3xl font-bold mb-2">
        Sewa Mobil {city}, {province}
      </h1>

      {/* ✅ Intro */}
      <p className="text-lg mb-6">{description}</p>

      {/* ✅ Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Kenapa pilih kami di {city}?
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ✅ Cars */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Armada Tersedia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cars.map((car, idx) => (
            <figure
              key={idx}
              className="border rounded-lg shadow-sm p-4 flex flex-col items-center"
            >
              <img
                src={car.image}
                alt={car.alt}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <figcaption className="text-center">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.type}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ✅ FAQ */}
      {faq.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
