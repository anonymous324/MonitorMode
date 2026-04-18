import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Sarah M.", text: "I was worried about my teenager's online activities. This service gave me peace of mind without invading their privacy.", rating: 5 },
  { name: "James K.", text: "Incredibly professional and discreet. The setup was seamless and the results were exactly what I needed.", rating: 5 },
  { name: "Linda P.", text: "I tried other services before but none worked as well as this. The customer support is outstanding.", rating: 5 },
  { name: "Michael R.", text: "Worth every penny. I was able to protect my business from a data leak thanks to this monitoring tool.", rating: 5 },
  { name: "Emily T.", text: "The demo convinced me right away. Everything works exactly as they described. Highly recommend!", rating: 5 },
  { name: "David W.", text: "Fast, reliable, and completely undetectable. My kids have no idea I can see their messages.", rating: 5 },
  { name: "Rebecca L.", text: "I was skeptical at first, but after the demo I was convinced. Best decision I've made this year.", rating: 5 },
  { name: "Chris B.", text: "The GPS tracking feature alone is worth it. I always know where my family members are.", rating: 5 },
  { name: "Amanda S.", text: "Setup took less than 10 minutes and I was monitoring the next day. Incredible technology.", rating: 5 },
  { name: "Robert H.", text: "The team is very responsive and helpful. They guided me through every step of the process.", rating: 5 },
  { name: "Jessica N.", text: "I can see everything — WhatsApp, Instagram, calls, location. It's exactly what I needed.", rating: 5 },
  { name: "Thomas G.", text: "Discreet, professional, and effective. I recommend this service to anyone who needs peace of mind.", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-4xl font-extrabold">
            Customer Reviews
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            What our clients are saying about us
          </p>

        </div>

        {/* Second row scrolling */}
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-ticker gap-6">
            {[...testimonials.slice(6), ...testimonials.slice(6)].map((t, i) => (
              <Card key={i} className="border-border bg-card shrink-0 w-[350px]">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 text-primary text-sm mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-sm">{t.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
