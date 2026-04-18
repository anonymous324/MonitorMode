import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { BonusesSection } from "@/components/BonusesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MonitorRemotely — Remote Phone Monitoring Service" },
      { name: "description", content: "Monitor any phone remotely without installing anything. Track calls, messages, social media, GPS location and more. 100% undetectable." },
      { property: "og:title", content: "MonitorRemotely — Remote Phone Monitoring" },
      { property: "og:description", content: "Keep an eye on your loved one's phone activities without installing anything. No physical access needed." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <BonusesSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
