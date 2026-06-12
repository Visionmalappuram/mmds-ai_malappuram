"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

import { PageWrapper } from "../../../components/PageWrapper";
import { GlassCard } from "../../../components/GlassCard";

import { opportunities } from "@/lib/opportunities";
import {
  fadeUp,
  staggerContainer,
  easeOutExpo,
} from "@/lib/motion";

const categories = [
  "All",
  "Course",
  "Competition",
  "Fellowship",
  "Hackathon",
  "Mentorship",
];

function MatchRing({ value }: { value: number }) {
  const R = 18;
  const C = 2 * Math.PI * R;

  return (
    <div className="relative h-12 w-12 flex items-center justify-center">
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r={R}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3"
          fill="none"
        />

        <motion.circle
          cx="24"
          cy="24"
          r={R}
          stroke="url(#ring-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{
            strokeDashoffset:
              C - (C * value) / 100,
          }}
          transition={{
            duration: 1.2,
            ease: easeOutExpo,
          }}
        />

        <defs>
          <linearGradient
            id="ring-grad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#8B5CF6"
            />
            <stop
              offset="100%"
              stopColor="#06B6D4"
            />
          </linearGradient>
        </defs>
      </svg>

      <span className="text-[11px] font-semibold">
        {value}%
      </span>
    </div>
  );
}

export default function OpportunitiesPage() {
  const [filter, setFilter] = useState("All");

  const list =
    filter === "All"
      ? opportunities
      : opportunities.filter(
          (o) => o.category === filter
        );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <PageWrapper>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Opportunities
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Built for what's next.
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-300 ${
                filter === c
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer(
            0.05,
            0.05
          )}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((o) => (
            <motion.div
              key={o.title}
              variants={fadeUp}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-slate-400">
                    {o.category}
                  </span>

                  <MatchRing value={o.match} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {o.title}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    Deadline · {o.deadline}
                  </span>
                </div>

                <button className="mt-6 inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300">
                  Apply

                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </PageWrapper>
    </main>
  );
}