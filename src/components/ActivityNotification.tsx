"use client";

import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, X, CheckCircle2, Bell, LogIn, Download, MessageSquare, TrendingUp, Activity, UserPlus } from "lucide-react";

const names = [
  "James W.", "Sarah K.", "Michael L.", "Emily R.",
  "Robert P.", "David M.", "Linda S.", "Kevin B.",
  "Olivia T.", "Daniel H.", "Sophia G.", "Chris J.",
  "Ava N.", "Ethan C.", "Isabella F.", "Noah D.",
  "Mia V.", "Lucas Z.", "Amelia Q.", "Logan X."
];
const actions = [
  {
    type: "purchase",
    message: "just purchased the Premium Plan",
    icon: <ShoppingCart className="h-3 w-3 text-white" />
  },
  {
    type: "review",
    message: "gave a 5-star review: 'Excellent service!'",
    icon: <Star className="h-3 w-3 text-white" />
  },
  {
    type: "purchase",
    message: "started a new monitoring session",
    icon: <ShoppingCart className="h-3 w-3 text-white" />
  },
  {
    type: "signup",
    message: "just signed up for a free trial",
    icon: <UserPlus className="h-3 w-3 text-white" />
  },
  {
    type: "activity",
    message: "viewed live dashboard analytics",
    icon: <Activity className="h-3 w-3 text-white" />
  },
  {
    type: "upgrade",
    message: "upgraded to Pro Plan",
    icon: <TrendingUp className="h-3 w-3 text-white" />
  },
  {
    type: "review",
    message: "left feedback: 'Very easy to use!'",
    icon: <MessageSquare className="h-3 w-3 text-white" />
  },
  {
    type: "download",
    message: "downloaded monthly report",
    icon: <Download className="h-3 w-3 text-white" />
  },
  {
    type: "login",
    message: "logged in from a new device",
    icon: <LogIn className="h-3 w-3 text-white" />
  },
  {
    type: "alert",
    message: "received a real-time alert",
    icon: <Bell className="h-3 w-3 text-white" />
  }
];

export function ActivityNotification() {
  const [notification, setNotification] = useState<{ name: string; action: typeof actions[0] } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const triggerNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    setNotification({ name: randomName, action: randomAction });
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // FIX: Proper random interval between 20s and 45s
    const nextInterval = Math.floor(Math.random() * (20000 - 10000 + 1) + 20000);
    setTimeout(triggerNotification, nextInterval);
  };

  useEffect(() => {
    const timer = setTimeout(triggerNotification, 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`
        fixed z-[100] w-[95%] max-w-[380px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        /* Mobile: Top Centered */
        top-4 left-1/2 -translate-x-1/2 
        /* Desktop: Top Right */
        md:top-10 md:right-10 md:left-auto md:translate-x-0
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-20 opacity-0 scale-95"}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/60 to-blue-600/60 opacity-20 blur-md animate-pulse" />
      
      <Card className="relative overflow-hidden border-primary/20 bg-background/95 p-4 md:p-5 shadow-2xl backdrop-blur-xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-center gap-4 md:gap-5">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />
            <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-primary/10 relative">
              <AvatarFallback className="bg-primary/5 text-primary font-bold text-xs md:text-sm">
                {notification.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-2 ring-background">
              {notification.action.icon}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <p className="text-sm font-bold text-foreground truncate">
                {notification.name}
              </p>
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 fill-blue-500/10 flex-shrink-0" />
              <span className="hidden xs:inline-block text-[10px] font-bold text-blue-500 uppercase tracking-tighter">Verified</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-snug line-clamp-2">
              {notification.action.message}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <p className="text-[10px] text-green-600 font-bold uppercase tracking-[0.05em]">
                 Live Activity
               </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}