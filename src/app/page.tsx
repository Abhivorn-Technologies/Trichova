import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import DHIFeature from "@/components/sections/DHIFeature";
import WhyTrichova from "@/components/sections/WhyTrichova";
import ClinicSection from "@/components/sections/ClinicSection";
import Comparison from "@/components/sections/Comparison";
import Journey from "@/components/sections/Journey";
import Results from "@/components/sections/Results";
import ConfidenceBanner from "@/components/sections/ConfidenceBanner";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <DHIFeature />
      <WhyTrichova />
      <ClinicSection />
      <Comparison />
      <Journey />
      <Results />
      <ConfidenceBanner />
      <Testimonials />
      <FAQ />
      <ConsultationCTA />
      <Footer />
      <BookingModal />
    </main>
  );
}

