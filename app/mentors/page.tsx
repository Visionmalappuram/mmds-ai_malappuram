"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

import { PageWrapper } from "../../components/PageWrapper";
import { GlassCard } from "../../components/GlassCard";

import { mentors } from "../../lib/mentors";
import {
  fadeUp,
  staggerContainer,
} from "../../lib/motion";

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <PageWrapper>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Mentors
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Real people. Real shortcuts.
          </h1>
        </div>

        <motion.div
          variants={staggerContainer(
            0.06,
            0.05
          )}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              variants={fadeUp}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-lg font-bold">
                    {mentor.avatar}
                  </div>

                  <div>
                    <p className="text-lg font-semibold">
                      {mentor.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {mentor.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>{mentor.avail}</span>
                </div>

                <button className="mt-5 rounded-xl px-4 py-2.5 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                  Book Session
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </PageWrapper>
    </main>
  );
}