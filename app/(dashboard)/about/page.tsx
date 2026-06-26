"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Compass,
  Briefcase,
  Rocket,
  Users,
  Bot,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Discover Yourself",
    description:
      "Understand your interests, strengths, hobbies, learning style, and future aspirations.",
  },
  {
    icon: Briefcase,
    title: "Explore Careers",
    description:
      "Learn about emerging careers, industries, and pathways aligned with your goals.",
  },
  {
    icon: Rocket,
    title: "Find Opportunities",
    description:
      "Access competitions, projects, scholarships, internships, and programs that match your profile.",
  },
  {
    icon: Users,
    title: "Connect With Mentors",
    description:
      "Learn from experienced professionals, educators, and industry experts.",
  },
  {
    icon: Bot,
    title: "Learn With AI",
    description:
      "Receive personalized recommendations and future-readiness insights powered by AI.",
  },
  {
    icon: Target,
    title: "Build Your Future",
    description:
      "Create a roadmap that helps you grow, learn, and achieve your goals.",
  },
];

const steps = [
  {
    title: "Create your Future Passport",
    content:
      "Your Future Passport is your personal profile inside Orbit. It helps Orbit understand your interests, hobbies, strengths, and future goals.",
  },
  {
    title: "Discover your strengths and interests",
    content:
      "Orbit helps students identify what they enjoy learning and doing, allowing the platform to provide better guidance.",
  },
  {
    title: "Receive personalized recommendations",
    content:
      "Get opportunities, projects, competitions, mentors, and career suggestions tailored to your profile.",
  },
  {
    title: "Explore opportunities and careers",
    content:
      "Discover new paths, learn about careers, and explore opportunities that match your interests.",
  },
  {
    title: "Connect with mentors and peers",
    content:
      "Build meaningful connections with students, mentors, and professionals who can help you grow.",
  },
  {
    title: "Continue growing and learning",
    content:
      "Orbit continuously adapts to your interests and goals, helping you progress throughout your journey.",
  },
];

export default function AboutPage() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900 to-cyan-500/10 p-10 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.15),transparent_40%)]" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">
              About Orbit
            </span>
          </div>

          <h1 className="text-5xl font-bold md:text-7xl">
            ORBIT
          </h1>

          <p className="mt-4 max-w-3xl text-2xl font-medium text-white/90 md:text-3xl">
            Education built for tomorrow.
            <br />
            Discover who you are meant to become.
          </p>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Orbit is a future-readiness platform that helps
            students discover their strengths, explore
            meaningful careers, connect with mentors, and
            access real-world opportunities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          Our Mission
        </h2>

        <p className="mt-4 max-w-4xl text-slate-300">
          Orbit exists to help every student understand
          their potential and prepare for a rapidly
          changing future.
        </p>

        <p className="mt-4 max-w-4xl text-slate-400">
          We believe education should not stop at
          academics. Students deserve access to guidance,
          opportunities, mentors, and tools that help them
          build successful and fulfilling futures.
        </p>
      </section>

      {/* Features */}
      <section className="mt-8">
        <h2 className="mb-6 text-3xl font-bold">
          What Orbit Helps You Do
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 p-3">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Orbit */}
      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          Why Orbit
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300">
              Future-Ready Focus
            </h3>

            <p className="mt-3 text-slate-400">
              Preparing students for an AI-driven world
              and the careers of tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-violet-300">
              Every Student Is Unique
            </h3>

            <p className="mt-3 text-slate-400">
              Success is not defined by marks alone.
              Every learner has unique talents,
              strengths, and ambitions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-300">
              Equal Access to Opportunity
            </h3>

            <p className="mt-3 text-slate-400">
              Helping students discover opportunities
              regardless of geography, background, or
              circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-bold">
          How Orbit Works
        </h2>

        <div className="mt-8 grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/5
                bg-white/[0.03]
                transition-all
                duration-300
                hover:border-cyan-500/30
                hover:bg-white/[0.05]
              "
            >
              <button
                onClick={() =>
                  setOpenStep(openStep === index ? null : index)
                }
                onMouseEnter={() => setOpenStep(index)}
                onMouseLeave={() => setOpenStep(null)}
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  p-4
                  text-left
                  transition-all
                  duration-300
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 font-bold">
                  {index + 1}
                </div>

                <span className="text-slate-200">
                  {step.title}
                </span>

                <div className="ml-auto">
                  {openStep === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  )}
                </div>
                  </button>

              <AnimatePresence>
                {openStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <p className="leading-relaxed text-slate-400">
                        {step.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="mt-8 mb-12 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-10 text-center">
        <h2 className="text-3xl font-bold">
          Our Vision
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-lg text-slate-300">
          To create a future where every student has
          access to the guidance, opportunities, and
          support needed to achieve their full potential.
        </p>

        <p className="mt-8 text-cyan-300">
          The future belongs to those who prepare for it.
          Orbit helps students take the first step.
        </p>
      </section>
    </div>
  );
}