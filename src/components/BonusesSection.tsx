import { Card, CardContent } from "@/components/ui/card";
import { Video, Headphones, Monitor, Lock } from "lucide-react";

const bonuses = [
  { icon: Video, title: "Video Walkthrough", desc: "A complete video guide showing you how to use every feature of the monitoring dashboard." },
  { icon: Headphones, title: "24/7 Support", desc: "Our team is available around the clock to help you with any questions or technical issues." },
  { icon: Monitor, title: "Demo Account", desc: "Try the full monitoring dashboard with a demo account before making any commitment." },
  { icon: Lock, title: "100% Confidential Setup", desc: "Your privacy is our priority. All communication and data is fully encrypted and confidential." },
];

export function BonusesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            Bonuses
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-4xl font-extrabold">
            What's Included <span
  style={{
    background: "linear-gradient(135deg, hsl(142 72% 50%), hsl(160 72% 44%))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Free
</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b) => (
            <Card key={b.title} className="border-border bg-card hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
