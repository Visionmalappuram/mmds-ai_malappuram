"use client";

import { useState } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data, error } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

      if (error) {
        throw error;
      }

      router.push("/onboarding");
    } catch (err: any) {
      setError(
        err.message || "Failed to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side */}
        <div className="relative hidden lg:flex w-1/2 flex-col justify-center px-16 overflow-hidden">
          <NeuralBackground />

          <div className="relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-medium text-cyan-300">
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

              <p className="mt-8 max-w-lg text-xl leading-relaxed text-white/60">
                Discover opportunities,
                explore careers, connect
                with mentors and learn
                with AI.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-1 items-center justify-center p-6">
          {/* Decorative Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({
              length: 30,
            }).map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-cyan-400/40"
                style={{
                  left: `${
                    (i * 13) % 100
                  }%`,
                  top: `${
                    (i * 17) % 100
                  }%`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-2xl"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold">
                Create Your Account
              </h2>

              <p className="mt-3 text-white/60">
                Join AI Malappuram and
                start your journey.
              </p>
            </div>

            <button
              type="button"
              className="mb-5 w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-medium transition-all hover:bg-white/[0.08]"
            >
              Continue with Google
            </button>

            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-sm text-white/40">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form
              onSubmit={handleSignup}
              className="space-y-4"
            >
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(
                      e.target.value
                    )
                  }
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 backdrop-blur-xl outline-none transition-all focus:border-cyan-400/40 focus:bg-white/[0.08]"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 backdrop-blur-xl outline-none transition-all focus:border-cyan-400/40 focus:bg-white/[0.08]"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 backdrop-blur-xl outline-none transition-all focus:border-cyan-400/40 focus:bg-white/[0.08]"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Confirm Password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 backdrop-blur-xl outline-none transition-all focus:border-cyan-400/40 focus:bg-white/[0.08]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 py-4 font-semibold transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 text-center text-white/60">
              Already have an account?
              <Link
                href="/login"
                className="ml-2 font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Sign In →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}