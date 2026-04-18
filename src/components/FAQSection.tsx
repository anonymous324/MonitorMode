import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is the monitoring app visible on the target device?", a: "No. The monitoring process is completely hidden. No app icon will be displayed on the target device." },
  { q: "How fast can I get started?", a: "Most clients are set up and monitoring instantly. Our team handles all the technical setup for you." },
  { q: "Do I need physical access to the device?", a: "No physical access or installation is required. Everything is done remotely by our team." },
  { q: "Which devices are supported?", a: "We support both android and iOS devices. Contact us to confirm compatibility with your specific device." },
  { q: "Is my information kept confidential?", a: "Absolutely. All communications are encrypted and your information is never shared with third parties." },
  { q: "What social media apps can i monitor?", a: "Whatsapp, Instagram, Snapchat, Telegram, Facebook, Viber, Skype and many more messaging platforms." },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-card/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest font-semibold mb-3">
            FAQ
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-4xl">
            Frequently Asked Questions
          </h2>


        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
