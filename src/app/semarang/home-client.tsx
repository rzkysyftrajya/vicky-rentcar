 "use client";

import { HeroSection } from "@/components/semarang-site/home/hero-section";
import { AboutSummary } from "@/components/semarang-site/home/about-summary";
import { FeaturedCars } from "@/components/semarang-site/home/featured-cars";
import { WhyUs } from "@/components/semarang-site/home/why-us";
import { Testimonials } from "@/components/semarang-site/home/testimonials";
import { VisionMission } from "@/components/semarang-site/home/vision-mission";
import { CtaBanner } from "@/components/semarang-site/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <WhyUs />
      <FeaturedCars />
      <VisionMission />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
