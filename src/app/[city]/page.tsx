import cities from "@/data/cities.json";
import CityPage from "@/components/CityPage";

interface Params {
  city: string;
}

// ✅ Generate URL statis dari cities.json
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug, // contoh: "medan", "jakarta"
  }));
}

// ✅ Metadata per kota
export async function generateMetadata({ params }: { params: Params }) {
  const { city } = params;
  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    return {
      title: "Sewa Mobil - PT.VRN",
      description: "Sewa mobil murah di seluruh Indonesia",
    };
  }

  return {
    title: cityData.title,
    description: cityData.description,
  };
}

// ✅ Render halaman per kota
export default function Page({ params }: { params: Params }) {
  const { city } = params;
  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    return <div>Kota tidak ditemukan</div>;
  }

  return (
    <CityPage
      city={cityData.city}
      highlights={cityData.highlights}
      cars={cityData.cars}
      faq={cityData.faq}
    />
  );
}
