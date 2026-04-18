import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, MapPin, EyeOff, Navigation } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Social Media & Chats",
    desc: "WhatsApp, Instagram, Snapchat, Telegram, Facebook, Viber, Skype & more.",
  },
  {
    icon: Phone,
    title: "Call Logs",
    desc: "Incoming & outgoing calls with contact names and duration.",
  },
  {
    icon: Mail,
    title: "Messages",
    desc: "Read sent, received, and even deleted texts from any app.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    desc: "GPS location history and custom alert zones in real-time.",
  },
  {
    icon: EyeOff,
    title: "Stealth Mode",
    desc: "Operates invisibly on the target device. No app icon displayed!",
  },
  {
    icon: Navigation,
    title: "Route Tracking",
    desc: "All GPS location history and routes. Get alerts about selected locations.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#05070b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest font-semibold mb-3">
            FEATURES
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-4xl">
            Here's What You Get to Monitor
          </h2>

          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive monitoring capabilities that cover every aspect of the target device.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
              <Card
                key={f.title}
                className="relative overflow-hidden bg-[#0b0f17] border border-white/10 rounded-xl group transition-all duration-500 hover:border-green-400/40"
              >
                {/* Glow Layer */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 blur-xl" />
              </div>
              <CardContent className="p-6 flex flex-col items-start gap-4">

                {/* ICON */}
                <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/20 group-hover:bg-green-500/20 transition">
                  <f.icon className="h-5 w-5 text-green-400" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white">
                  {f.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}