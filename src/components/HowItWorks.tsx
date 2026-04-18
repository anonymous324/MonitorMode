import { MessageCircle, Monitor, Zap } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contact Us",
    desc: "Contact us for a confidential setup — no installations or access required.",
  },
  {
    icon: Monitor,
    step: "02",
    title: "Get a Demo",
    desc: "Our team provides personalized support, video walkthroughs, and demo account access.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Start Monitoring",
    desc: "Receive your secure login and start monitoring right away.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28 bg-background overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            See It In Action
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-4xl font-extrabold">
            Watch How It <span className="text-primary">Works</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Get a quick walkthrough of our monitoring dashboard and see just how easy it is to get started.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex justify-center items-center w-full mb-6">
          
          {/* 🎥 Video Section */}
          <div className="relative group w-full max-w-4xl">
            
            <div className="rounded-2xl mb-16 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-card-custom glow-neon aspect-video bg-card">
                
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>

          </div>

        </div>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-4xl font-extrabold">
            Easy to Start with 3 Simple Steps
          </h2>

        </div>
        {/* 📌 Steps */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-primary/20"></div>

          <div className="grid md:grid-cols-3 gap-10 text-center relative">

            {steps.map((s, i) => (
              <div key={s.step} className="relative group flex flex-col items-center">

                {/* Step Number Badge */}
        {/* Step Number Badge */}
        <div className="absolute -top-3 z-20 
          right-[calc(50%-40px)] 
          md:right-auto md:left-[calc(50%+30px)]">

          <div className="h-8 w-8 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center shadow-md">
            {s.step}
          </div>
        </div>

                {/* Icon Box */}
                <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-primary/40 transition shadow-lg">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                  {s.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}