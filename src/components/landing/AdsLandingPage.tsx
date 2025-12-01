
import Hero from './sections/Hero';
import ValueProposition from './sections/ValueProposition';
import Fleet from './sections/Fleet';
import BookingFlow from './sections/BookingFlow';
import CityHighlights from './sections/CityHighlights';
import Testimonials from './sections/Testimonials';
import Promo from './sections/Promo';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

interface CityData {
  city: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  valueProps: {
    title: string;
    description: string;
  }[];
  fleet: {
    name: string;
    category: string;
    features: string[];
    image: string;
  }[];
  bookingSteps: {
    title: string;
    description: string;
  }[];
  cityHighlights: {
    title: string;
    points: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
  testimonials: {
    name: string;
    origin: string;
    quote: string;
    avatar: string;
  }[];
  promo: {
    title: string;
    features: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  contact: {
    whatsapp: string;
    phone: string;
    hours: string;
    area: string;
  };
}

interface AdsLandingPageProps {
  cityData: CityData;
}

export default function AdsLandingPage({ cityData }: AdsLandingPageProps) {
  return (
    <main>
      <Hero
        city={cityData.city}
        title={cityData.hero.title}
        subtitle={cityData.hero.subtitle}
      />
      <ValueProposition items={cityData.valueProps} />
      <Fleet city={cityData.city} items={cityData.fleet} />
      <BookingFlow steps={cityData.bookingSteps} />
      <CityHighlights
        title={cityData.cityHighlights.title}
        points={cityData.cityHighlights.points}
      />
      <Testimonials items={cityData.testimonials} />
      <Promo title={cityData.promo.title} features={cityData.promo.features} />
      <Faq items={cityData.faq} />
      <Contact
        whatsapp={cityData.contact.whatsapp}
        phone={cityData.contact.phone}
        hours={cityData.contact.hours}
        area={cityData.contact.area}
      />
      <Footer />
    </main>
  );
}
