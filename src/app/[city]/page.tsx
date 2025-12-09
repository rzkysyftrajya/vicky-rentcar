import cities from "@/data/cities.json";
import CityPage from "@/components/CityPage";

// ✅ Generate URL statis dari cities.json
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug, // contoh: "medan", "jakarta"
  }));
}

// ✅ Metadata per kota
export async function generateMetadata({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] }>;
}) {
  const { city } = await params;
  const citySlug = Array.isArray(city) ? city[0] : city;
  const cityData = cities.find((c) => c.slug === citySlug);

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
export default async function Page({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] }>;
}) {
  const { city } = await params;
  const citySlug = Array.isArray(city) ? city[0] : city;
  const cityData = cities.find((c) => c.slug === citySlug);

  if (!cityData) {
    return <div>Kota tidak ditemukan</div>;
  }

  return (
    <CityPage
      city={cityData.city}
      province={cityData.province}
      description={cityData.description}
      highlights={cityData.highlights}
      cars={cityData.cars}
      faq={cityData.faq?.map((item) => ({
        question: item.q,
        answer: item.a,
      }))}
    />
  );
}
