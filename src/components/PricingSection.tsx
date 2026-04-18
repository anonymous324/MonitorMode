import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";

const features = [
  "All social media monitoring",
  "Call & message tracking",
  "GPS location tracking",
  "Stealth mode enabled",
  "24/7 Support",
  "No physical access needed",
  "Instant setup",
  "Personalized demo included",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-4xl font-extrabold">
            Customized & Affordable Plans
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            We tailor every package to your specific requirements. No surprise fees. Full transparency.
          </p>

        </div>

        <Card className="mx-auto max-w-lg border-primary/40 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <CardContent className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold">Custom Plan</h3>
              <p className="mt-2 text-muted-foreground">Tailored to your exact monitoring needs</p>
              <div className="mt-4"><span className="text-4xl font-heading font-bold text-foreground">Custom</span><span className="text-muted-foreground ml-2 text-sm">/ based on your needs</span></div>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="w-full gap-2 text-base font-bold animate-pulse-glow">
              <a href="https://api.whatsapp.com/send/?phone=13234438505&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Get Your Custom Quote
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
