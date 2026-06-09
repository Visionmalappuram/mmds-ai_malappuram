"use client";

import { useState } from "react";
import { GlassCard } from "../../components/GlassCard";
import { GlowButton } from "../../components/GlowButton";
import {
  suggestedCareers,
  industries,
} from "../../lib/careerData";

export default function CareerPage() {
  const [search, setSearch] = useState("");

const filteredCareers = suggestedCareers.filter(
  (career) =>
    career.title.toLowerCase().includes(search.toLowerCase()) ||
    career.industry.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 pt-6">

        {/* Header */}

        <div className="mb-10">

          <p className="uppercase tracking-[0.2em] text-slate-500 text-xs md:text-sm mb-3">
            CAREER
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-tight
              font-bold
            "
          >
            Build your future.
          </h1>

          <p
            className="
              mt-4
              text-base
              md:text-lg
              text-slate-400
              max-w-2xl
            "
          >
            Discover careers that match your interests,
            skills and future goals.
          </p>

        </div>

        {/* Search */}

        <GlassCard className="mb-10 p-5">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search careers, industries, skills..."
            className="
              w-full
              bg-transparent
              outline-none
              text-base
              md:text-lg
              text-white
              placeholder:text-slate-500
            "
          />

        </GlassCard>

        {/* Suggested Careers */}

        <div className="mb-12">

          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Suggested For You
          </h2>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >

            {filteredCareers.map((career) => (
              <GlassCard
                key={career.title}
                className="p-6 md:p-8"
              >

                <p className="text-slate-400 text-sm mb-2">
                  {career.industry}
                </p>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {career.title}
                </h3>

                <div
                  className="
                    inline-flex
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-400/20
                    px-3
                    py-1
                    text-cyan-300
                    text-sm
                    mb-6
                  "
                >
                  {career.match}% Match
                </div>

                <GlowButton className="w-full">
                  Explore Career
                </GlowButton>

              </GlassCard>
            ))}

          </div>

        </div>

        {/* Industries */}

        <div className="mb-12">

          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Explore Industries
          </h2>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-4
            "
          >

            {industries.map((industry) => (
              <GlassCard
                key={industry}
                className="
                  text-center
                  py-6
                  md:py-8
                "
              >
                <h3 className="font-semibold">
                  {industry}
                </h3>
              </GlassCard>
            ))}

          </div>

        </div>

        {/* AI Era Mode */}

        <GlassCard className="p-6 md:p-8">

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-6
            "
          >

            <div>

              <p className="uppercase tracking-[0.2em] text-slate-500 text-xs mb-2">
                FUTURE OF WORK
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                AI Era Mode
              </h2>

              <p className="text-slate-400 max-w-xl">
                See how careers evolve when AI becomes
                part of everyday work. Compare traditional
                career paths with future AI-powered paths.
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span className="text-slate-400">
                Coming Soon
              </span>

              <button
                disabled
                className="
                  relative
                  h-8
                  w-16
                  rounded-full
                  bg-slate-700
                  cursor-not-allowed
                "
              >
                <span
                  className="
                    absolute
                    left-1
                    top-1
                    h-6
                    w-6
                    rounded-full
                    bg-white
                  "
                />
              </button>

            </div>

          </div>

        </GlassCard>

      </div>

    </main>
  );
}