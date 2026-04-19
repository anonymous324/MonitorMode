import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 my-16 pb-16 sm:pt-32 sm:pb-24">
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* GRID LAYOUT */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 mx-auto lg:mx-0 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 block w-fit">
              ✨ Introducing Mobile Spying
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Keep an eye on your loved one's{" "}
              <span className="text-primary">Phone activities</span>{" "}
              without installing anything
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-center lg:text-left text-muted-foreground sm:text-xl">
              No physical access. No software installation. Just peace of mind.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=13234438505&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 text-base font-bold px-8">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="https://t.me/SpyAppMonitor" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 text-base font-bold px-8 border-primary/40 hover:bg-primary/10">
                  <Send className="h-5 w-5" />
                  Chat on Telegram
                </Button>
              </a>
            </div>

            {/* TRUST */}
            <div className="mt-10 flex items-center gap-4 justify-center">
              <div className="flex -space-x-3">
                {[
                  "/assets/avatar1.avif",
                  "/assets/avatar2.avif",
                  "/assets/avatar3.avif",
                  "/assets/avatar4.webp",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`User ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold">500+ Happy Clients</p>
                <div className="text-primary text-xs">★★★★★</div>
              </div>
            </div>
          </div>

{/* RIGHT IMAGE / VISUAL */}
<div className="relative hidden lg:flex justify-center lg:justify-end">
  <div className="relative">
    
    {/* Glow behind image */}
    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

    {/* Image */}
    <img
      src="/hero.png"
      alt="Phone Monitoring"
      className="relative w-[300px] sm:w-[400px] lg:w-[450px] drop-shadow-2xl"
      style={{
        animation: "float 4s ease-in-out infinite",
      }}
    />

  </div>
</div>
        </div>
      </div>
    </section>
  );
}