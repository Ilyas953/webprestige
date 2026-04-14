


import {
  DevHeader,
  DevHero,
  DevServices,
  DevWhy,
  DevPricing,
  DevPortfolio,
  DevTestimonials,
  DevCTA,
  ContactForm,
  DevFooter
} from "./all-components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white *:Px-[92px]">
      <DevHeader />
      <main>
        <DevHero />
        <DevServices />
        <DevWhy />
        <DevPricing />
        <DevPortfolio />
        <DevTestimonials />
        <DevCTA />
      </main>
      <DevFooter />
    </div>
  );
}
