import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, EyeOff, Shield, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Worried about your child's online activity?",
    desc: "Children are exposed to harmful content, cyberbullying, and predators online.",
  },
  {
    icon: EyeOff,
    title: "Suspect your partner is hiding something?",
    desc: "Unanswered calls, secret chats, and suspicious behavior leave you in the dark.",
  },
  {
    icon: Shield,
    title: "Need to protect your business data?",
    desc: "Employees may leak sensitive information or misuse company devices.",
  },
  {
    icon: HelpCircle,
    title: "Can't access the target device?",
    desc: "Traditional apps require physical access — but not ours.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#05070b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest font-semibold mb-3">
            THE PROBLEM
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Do Any of These <span className="text-primary">Sound Familiar?</span>
          </h2>
        </div>

        {/* GRID (2x2 like image) */}
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          {problems.map((p) => (
            <Card
              key={p.title}
              className="group bg-[#0b0f17] border border-red-500/20 hover:border-green-500/40 transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-6 flex flex-col items-start gap-4">

                {/* ICON */}
                <div className="rounded-lg p-3 border border-red-500/20 group-hover:border-green-500/40 group-hover:bg-green-500/10 transition">
                  <p.icon className="h-5 w-5 text-red-500 group-hover:text-green-500 transition" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white">
                  {p.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}