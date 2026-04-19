"use client";

import React, { useEffect, useState, useRef } from "react";
import { Users, ShieldCheck, Globe, Zap } from "lucide-react";

// --- Types ---
interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

// --- Animation Hook ---
function useCountUp(endValue: number, duration: number = 2000, startAnimation: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutValue * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, startAnimation]);

  return count;
}

// --- Individual Stat Card Component ---
// --- Individual Stat Card Component ---
const StatCard = ({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2500, isVisible);

  return (
    <div className="flex flex-col items-center text-center space-y-3 group">
      <div className="p-3 rounded-2xl bg-background border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
        {/* We cast stat.icon to React.ReactElement to allow className injection */}
        {React.isValidElement(stat.icon) 
          ? React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { 
              className: "h-6 w-6 text-primary" 
            })
          : stat.icon
        }
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {count.toLocaleString()}{stat.suffix}
        </p>
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

// --- Main StatCounter Component ---
export function StatCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      label: "Active Users",
      value: 15400,
      suffix: "+",
      icon: <Users />,
    },
    {
      label: "Success Rate",
      value: 99,
      suffix: "%",
      icon: <Zap />,
    },
    {
      label: "Countries",
      value: 120,
      suffix: "+",
      icon: <Globe />,
    },
    {
      label: "Protection",
      value: 24,
      suffix: "/7",
      icon: <ShieldCheck />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12">
      {/* Container with matching glow/glass effect */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 px-6 py-12 backdrop-blur-md sm:px-12">
        
        {/* Subtle internal glow */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 bg-primary/10 blur-3xl" />
        
        <div className="relative grid grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-4 md:gap-x-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}