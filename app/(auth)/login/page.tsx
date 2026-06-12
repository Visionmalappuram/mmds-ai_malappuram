
"use client";

import NeuralBackground from "@/components/NeuralBackground";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex min-h-screen">

        {/* Left Side */}
        <div className="relative hidden lg:flex w-1/2 flex-col justify-center px-16 overflow-hidden">

          {/* Neural Background only on left side */}
          <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
          }}
          >
        <NeuralBackground />
        </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-medium">
                  AI Ready Malappuram
                </span>
              </div>

              <h1 className="max-w-xl text-7xl font-bold leading-[0.9]">
                The Future
                <br />
                Starts{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Here.
                </span>
              </h1>

              <p className="mt-10 max-w-lg text-2xl leading-relaxed text-white/55">
                Discover opportunities, explore careers, connect with mentors
                and learn with AI.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-center p-6 relative">

          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />


          {/* Cyan Glow Behind Card */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/4 blur-[90px]" />

          {/* Static Accent Dots */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Around Card - Right Side */}
            <div className="absolute top-16 right-20 h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute top-24 right-40 h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />
            <div className="absolute top-36 right-10 h-2 w-2 rounded-full bg-cyan-400 opacity-25" />
            <div className="absolute top-52 right-32 h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-20" />

            <div className="absolute top-[22%] right-[24%] h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute top-[30%] right-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />
            <div className="absolute top-[42%] right-[14%] h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute top-[50%] right-[28%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />

            <div className="absolute bottom-[18%] right-[12%] h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute bottom-[28%] right-[22%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />
            <div className="absolute bottom-[12%] right-[30%] h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute bottom-[35%] right-[8%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />

            {/* Centre Transition Area */}
            <div className="absolute top-[18%] left-[52%] h-2 w-2 rounded-full bg-cyan-400 opacity-30" />
            <div className="absolute top-[32%] left-[58%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-25" />
            <div className="absolute top-[48%] left-[54%] h-2 w-2 rounded-full bg-cyan-400 opacity-20" />
            <div className="absolute top-[68%] left-[60%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-15" />

            {/* Left Side - Move Towards Centre */}
            <div className="absolute top-[10%] left-[28%] h-2 w-2 rounded-full bg-cyan-400 opacity-60" />
            <div className="absolute top-[18%] left-[32%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-50" />
            <div className="absolute top-[30%] left-[35%] h-2 w-2 rounded-full bg-cyan-400 opacity-55" />
            <div className="absolute top-[44%] left-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-45" />

            <div className="absolute top-[58%] left-[36%] h-2 w-2 rounded-full bg-cyan-400 opacity-55" />
            <div className="absolute top-[70%] left-[32%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-50" />
            <div className="absolute bottom-[12%] left-[28%] h-2 w-2 rounded-full bg-cyan-400 opacity-60" />
            <div className="absolute bottom-[22%] left-[34%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-45" />

          </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-2xl"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold">
                Continue Your Journey
              </h2>

              <p className="mt-3 text-white/60">
                Access opportunities, mentors, career guidance and AI Buddy.
              </p>
            </div>

            {/* Google */}
            <button
              className="
                mb-5
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                py-4
                font-medium
                transition-all
                hover:bg-white/[0.08]
              "
            >
              Continue with Google
            </button>

            {/* Divider */}
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-sm text-white/40">
                or continue with email
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    py-4
                    pl-12
                    pr-4
                    backdrop-blur-xl
                    outline-none
                    transition-all
                    focus:border-cyan-400/40
                    focus:bg-white/[0.08]
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  "
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="password"
                  placeholder="Password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    py-4
                    pl-12
                    pr-4
                    backdrop-blur-xl
                    outline-none
                    transition-all
                    focus:border-cyan-400/40
                    focus:bg-white/[0.08]
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  group
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-500
                  via-blue-500
                  to-cyan-500
                  py-4
                  font-semibold
                  transition-all
                  hover:scale-[1.02]
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                "
              >
                Continue

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 text-center text-white/60">
              New here?
              <Link
                href="/signup"
                className="ml-2 font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Create your account →
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

