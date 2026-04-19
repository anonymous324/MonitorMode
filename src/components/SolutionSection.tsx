import { Wifi, Lock, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Wifi,
    text: "100% Remote — No physical access needed",
  },
  {
    icon: Lock,
    text: "Completely invisible — No app icon displayed",
  },
  {
    icon: Zap,
    text: "Instant setup — Start monitoring right away",
  },
  {
    icon: CheckCircle,
    text: "Works on all devices — Android & iPhone",
  },
];

const liveData = [
  { label: "WhatsApp Messages", stat: "18.7k", unit: "delivered" },
  { label: "Instagram DMs", stat: "1.6k", unit: "intercepted" },
  { label: "Call Logs", stat: "320", unit: "incoming" },
  { label: "GPS Location", stat: "24/7", unit: "tracking" },
  { label: "Snapchat Stories", stat: "Live", unit: "captured" },
];

export function SolutionSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#05070b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* GRID */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <p className="text-primary text-xs tracking-widest font-semibold mb-4">
              THE SOLUTION
            </p>

            {/* HEADING */}
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-4xl leading-tight">
              Mobile Spying —{" "}
              <span className="text-primary">
                Without Touching the Device
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Our advanced technology allows you to monitor any phone remotely.
              No installations, no downloads, no physical access required.
              Just contact us, and we handle everything.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-4">
                  
                  <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>

                  <p className="text-white font-medium">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0b0f17] p-6 shadow-xl">
              
              {/* LIVE TAG */}
              <div className="absolute top-4 right-4 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                LIVE
              </div>

              {/* ITEMS */}
              <div className="space-y-4 mt-2">
                {liveData.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg bg-black/30 px-4 py-3 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      <span className="text-sm text-white font-medium">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-xs text-green-400 font-bold">
                      {item.stat} {item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}