"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { GlassCard } from "@/components/GlassCard";
import { ScoreRing } from "@/components/ScoreRing";

import {
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

export default function PassportPage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "future-passport"
    );

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Loading Passport...
      </div>
    );
  }

  const p = profile;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Future Passport
        </p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">
          Hello, {p.firstName}
        </h1>

        <p className="mt-3 text-slate-400">
          {p.school}
        </p>
      </motion.div>

      {/* Main Profile */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <GlassCard className="p-6 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {p.firstName} {p.lastName}
              </h2>

              <p className="text-slate-400">
                {p.className}
              </p>
            </div>

            <ScoreRing
              value={p.profileStrength || 0}
            />
          </div>
        </GlassCard>
      </motion.div>

      {/* Hobbies + Interests */}
      <motion.div
        variants={staggerContainer(0.06, 0.05)}
        initial="hidden"
        animate="show"
        className="mt-6 grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <GlassCard className="p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Hobbies
            </h3>

            <div className="flex flex-wrap gap-2">
              {p.hobbies?.map(
                (item: string) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlassCard className="p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Interests
            </h3>

            <div className="flex flex-wrap gap-2">
              {p.interests?.map(
                (item: string) => (
                  <span
                    key={item}
                    className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Career Goals */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <GlassCard className="mt-6 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            Career Goals
          </h3>

          <div className="flex flex-wrap gap-2">
            {p.careerGoals?.map(
              (goal: string) => (
                <span
                  key={goal}
                  className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                >
                  {goal}
                </span>
              )
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Learning Profile */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <GlassCard className="mt-6 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            Learning Profile
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-slate-500">
                Learning Style
              </p>

              <p className="mt-1">
                {p.learningStyle ||
                  "Not selected"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                Biggest Challenge
              </p>

              <p className="mt-1">
                {p.learningBarrier ||
                  "Not selected"}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Dream Goal */}
      {p.dreamGoal && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <GlassCard className="mt-6 p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Dream Goal
            </h3>

            <p className="text-slate-300">
              {p.dreamGoal}
            </p>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}