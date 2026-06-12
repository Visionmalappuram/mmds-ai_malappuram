"use client";

import { useEffect, useState, useRef } from "react";
import { GlassCard } from "@/components/GlassCard";

export default function ScrollTimeline({ timeline }: { timeline: any[] }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // We trigger the line based on a point 60% down the screen (slightly lower than the middle)
      const triggerPoint = windowHeight * 0.6; 
      const scrollPosition = triggerPoint - rect.top;
      let newProgress = scrollPosition / rect.height;

      // FIX: Check if the user has hit the absolute bottom of the webpage
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      if (isAtBottom) {
        newProgress = 1; // Force 100% completion
      }

      // Lock progress exactly between 0 (0%) and 1 (100%)
      if (newProgress < 0) newProgress = 0;
      if (newProgress > 1) newProgress = 1;

      setProgress(newProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run immediately on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative space-y-12 pb-12">
      
      {/* The Background Track */}
      <div className="absolute left-4 top-10 bottom-12 w-[2px] bg-cyan-500/20">
        
        {/* The Animated Progress Line */}
        <div
          className="absolute left-0 top-0 w-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      {timeline.map((step, index) => {
        // Calculate when this specific dot should light up
        const stepThreshold = (index / (timeline.length - 1)) * 100;
        const isActive = progress >= stepThreshold - 5; // The -5 makes it light up right before the line touches it

        return (
          <div key={index} className="relative pl-12">
            
            {/* Timeline Dot */}
            <div
              className={`
                absolute
                left-4
                top-10
                h-8
                w-8
                -translate-x-1/2 /* This centers the dot perfectly over the 2px line */
                rounded-full
                border-4
                border-[#0A0A0F]
                transition-all
                duration-500
                z-10 /* Keeps the dot rendering above the line */
                ${isActive
                  ? "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-110"
                  : "bg-slate-700 scale-100"
                }
              `}
            />

            <GlassCard className="p-8 relative z-0">
              <p className={`uppercase tracking-wider mb-3 transition-colors duration-500 ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                {step.year}
              </p>
              
              <h2 className="text-3xl font-bold mb-5">
                {step.stage}
              </h2>
              
              <ul className="space-y-3">
                {step.milestones.map((item: string, i: number) => (
                  <li key={i} className="text-slate-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
            
          </div>
        );
      })}
    </div>
  );
}