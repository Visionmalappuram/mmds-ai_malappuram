"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../../../components/GlassCard";
import { connectStudents } from "../../../lib/connect";
import { fadeUp, staggerContainer } from "../../../lib/motion";

export default function ConnectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white px-5 py-8 md:px-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* Header */}
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-400">
          Connect
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.95] md:text-6xl">
          Build with people
          <br />
          who get it.
        </h1>

        <p className="mt-5 max-w-2xl text-slate-400 text-base md:text-lg">
          Find teammates, collaborators, designers, developers, creators,
          and future founders who share your vision.
        </p>

        {/* Requirement Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10"
        >
          <GlassCard>
            <h2 className="text-xl font-semibold">
              Post a Requirement
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Describe the kind of teammate you are looking for.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Need a Frontend Developer skilled in React"
                className="
                  w-full
                  flex-1
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400/50
                "
              />

              <button
                className="
                  w-full
                  sm:w-auto
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-500
                  px-8
                  py-4
                  font-semibold
                  shadow-[0_0_30px_rgba(34,211,238,0.25)]
                  transition
                  hover:scale-[1.02]
                "
              >
                Find Matches
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Section Header */}
        <div className="mt-12 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Matched Students
          </h2>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            {connectStudents.length} matches
          </span>
        </div>

        {/* Students Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.05)}
          initial="hidden"
          animate="show"
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {connectStudents.map((student) => (
            <motion.div
              key={student.name}
              variants={fadeUp}
              className="h-full"
            >
              <GlassCard className="h-full">
                <div className="flex flex-col gap-5">

                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex min-w-0 flex-1 gap-4">

                      <div
                        className="
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-cyan-500
                          to-purple-500
                          text-xl
                          font-bold
                          shadow-[0_0_25px_rgba(34,211,238,0.3)]
                        "
                      >
                        {student.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold leading-tight">
                          {student.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Open for collaboration
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-purple-500
                        px-4
                        py-2
                        text-sm
                        font-bold
                        shadow-[0_0_20px_rgba(34,211,238,0.35)]
                      "
                    >
                      {student.match}%
                    </div>
                  </div>

                  {/* Match Bar */}
                  <div>
                    <div className="mb-2 flex justify-between text-xs text-slate-400">
                      <span>Match Score</span>
                      <span>{student.match}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        style={{
                          width: `${student.match}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-cyan-500/20
                          bg-cyan-500/10
                          px-3
                          py-1
                          text-sm
                          text-cyan-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}