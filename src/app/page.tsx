import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import WhyTrichova from "@/components/sections/WhyTrichova";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Results />
      <WhyTrichova />
      <ConsultationCTA />
    </main>
  );
}
