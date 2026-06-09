"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { fadeUp, staggerContainer } from "../lib/motion";

// --- ROCK-SOLID PREMIUM COUNTER ANIMATION ---
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // This physically forces React to update the number on screen every frame
    const controls = animate(0, value, {
      duration: 2, // 2 seconds for a deliberate, high-end spin-up
      ease: [0.16, 1, 0.3, 1], // Snappy start, buttery smooth deceleration
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      }
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden flex flex-col justify-center py-20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container - Forcing perfect left alignment with max-w */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* Hero Section */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]"
          >
            The Future <br /> Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Here.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-400 max-w-xl"
          >
            Discover opportunities. Build projects. Learn AI. Shape your future.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Start Journey →
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
              Explore Opportunities
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Grid Section */}
        <motion.div
  variants={staggerContainer(0.08, 0.2)}
  initial="hidden"
  animate="show"
  className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
>
  {[
    { title: "AI READINESS", value: 78, suffix: "%" },
    { title: "OPPORTUNITIES", value: 42, suffix: "" },
    { title: "PROJECTS", value: 6, suffix: "" },
    { title: "MENTORS", value: 12, suffix: "" },
    { title: "STUDENTS", value: 348, suffix: "" },
  ].map((stat) => (
    <motion.div
      key={stat.title}
      variants={fadeUp}
      className="h-full"
    >
      <GlassCard className="h-[170px] p-6 flex flex-col items-center justify-center text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-slate-500 font-medium whitespace-nowrap">
          {stat.title}
        </p>

        
          <h3 className="text-6xl font-bold leading-none">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
            />
          </h3>
        
      </GlassCard>
    </motion.div>
  ))}
</motion.div>

      </div>
    </div>
  );
}