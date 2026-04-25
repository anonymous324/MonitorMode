import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-primary/5" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px]" />
      <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-neon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-8 h-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
          Your Peace of Mind is Just a <span className="text-primary">Call Away</span>
          
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Get in touch now. We tailor every package to your specific requirements. No surprise fees. Full transparency.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 text-base font-bold px-8 animate-pulse-glow">
            <a href="https://api.whatsapp.com/send/?phone=13234438505&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 text-base font-bold px-8 border-primary/40 hover:bg-primary/10">
            <a href="https://t.me/SpyAppMonitor" target="_blank" rel="noopener noreferrer">
              <Send className="h-5 w-5" />
              Chat on Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
