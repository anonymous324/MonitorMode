import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Sarah M.", text: "I was worried about my teenager's online activities. This service gave me peace of mind without invading their privacy.", rating: 5, image: "/users/Sarah.jpg" },
  { name: "James K.", text: "Incredibly professional and discreet. The setup was seamless and the results were exactly what I needed.", rating: 4, image: "/users/james.jpg" },
  { name: "Linda P.", text: "I tried other services before but none worked as well as this. The customer support is outstanding.", rating: 5, image: "/users/linda.jpg" },
  { name: "Michael R.", text: "Worth every penny. I was able to protect my business from a data leak thanks to this monitoring tool.", rating: 5, image: "/users/michael.webp" },
  { name: "Emily T.", text: "The demo convinced me right away. Everything works exactly as they described. Highly recommend!", rating: 4, image: "/users/emily.jpg" },
  { name: "David W.", text: "Fast, reliable, and completely undetectable. My kids have no idea I can see their messages.", rating: 4, image: "/users/david.jpg" },
  { name: "Rebecca L.", text: "I was skeptical at first, but after the demo I was convinced. Best decision I've made this year.", rating: 5, image: "/users/Rebecca.jpg" },
  { name: "Chris B.", text: "The GPS tracking feature alone is worth it. I always know where my family members are.", rating: 5, image: "/users/chris.jpg" },
  { name: "Amanda S.", text: "Setup took less than 10 minutes and I was monitoring the next day. Incredible technology.", rating: 5, image: "/users/amanda.jpg" },
  { name: "Robert H.", text: "The team is very responsive and helpful. They guided me through every step of the process.", rating: 4, image: "/users/robert.jpg" },
  { name: "Jessica N.", text: "I can see everything — WhatsApp, Instagram, calls, location. It's exactly what I needed.", rating: 5, image: "/users/jessica.jpg" },
  { name: "Thomas G.", text: "Discreet, professional, and effective. I recommend this service to anyone who needs peace of mind.", rating: 4.5, image: "/users/thomas.jpg" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 overflow-hidden">
      <style>
        {`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker-infinite {
            display: flex;
            width: max-content;
            animation: ticker 40s linear infinite;
          }
          .animate-ticker-infinite:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
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
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative">
        {/* Optional: Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="animate-ticker-infinite gap-6 flex">
          {/* We render the list twice to create the infinite loop effect */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} className="border-border bg-card/50 backdrop-blur-sm shrink-0 w-[300px] sm:w-[350px]">
              <CardContent className="p-6">
                <div className="flex gap-0.5 text-primary text-sm mb-3">
                  {Array.from({ length: Math.floor(t.rating) }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-6 min-h-[60px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/20">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}