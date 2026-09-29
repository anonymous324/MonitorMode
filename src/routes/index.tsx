import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatCounter } from "@/components/StatCounter";
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
import { ActivityNotification } from "@/components/ActivityNotification";
import { Footer } from "@/components/Footer";

// GA4 Measurement ID for each domain
const GA_MEASUREMENT_IDS: Record<string, string> = {
  "925615.com": "G-XC3045LYD5",
  "www.925615.com": "G-XC3045LYD5",

  "csg-us88.com": "G-4BMXL5ENYS",
  "www.csg-us88.com": "G-4BMXL5ENYS",

  "bokepae.com": "G-C21055FY4E",
  "www.bokepae.com": "G-C21055FY4E",

  "bokeppo.com": "G-36E740ZXSG",
  "www.bokeppo.com": "G-36E740ZXSG",

  "hippodrome-us.com": "G-EL4C6Q8GBQ",
  "www.hippodrome-us.com": "G-EL4C6Q8GBQ",

  "66waji.com": "G-46YWJ2X1C0",
  "www.66waji.com": "G-46YWJ2X1C0",

  "mobilespying.com": "G-30GY5WQW01",
  "www.mobilespying.com": "G-30GY5WQW01",
};

const hostname =
  typeof window !== "undefined" ? window.location.hostname : "";

const GA_MEASUREMENT_ID = GA_MEASUREMENT_IDS[hostname];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "MobileSpying — Remote Phone Monitoring Service",
      },
      {
        name: "description",
        content:
          "Monitor any phone remotely without installing anything. Track calls, messages, social media, GPS location and more. 100% undetectable.",
      },
      {
        property: "og:title",
        content: "MobileSpying — Remote Phone Monitoring",
      },
      {
        property: "og:description",
        content:
          "Keep an eye on your loved one's phone activities without installing anything. No physical access needed.",
      },
    ],

    scripts: GA_MEASUREMENT_ID
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
            async: true,
          },
          {
            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          },
        ]
      : [],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatCounter />
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
      <ActivityNotification />
      <FloatingWhatsApp />
    </div>
  );
}