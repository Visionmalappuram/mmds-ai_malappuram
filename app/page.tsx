"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Brain,
  Briefcase,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Lightbulb,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "purple";
};

const journeySteps: IconCard[] = [
  {
    title: "Build Your Future Passport",
    description: "Start by mapping your interests, hobbies, and learning styles. Orbit crafts a dynamic, living profile that highlights your true potential and evolves as you grow.",
    icon: BadgeCheck,
    accent: "cyan",
  },
  {
    title: "Uncover Strengths with AI",
    description: "Go beyond standard tests. Our AI companion analyzes your unique cognitive traits to reveal hidden talents, helping you understand where you naturally excel.",
    icon: Brain,
    accent: "purple",
  },
  {
    title: "Receive a Personalized Pathway",
    description: "Get tailored recommendations for future-proof careers, engaging project ideas, and essential skill-building modules, providing a clear roadmap from classroom to career.",
    icon: Bot,
    accent: "cyan",
  },
  {
    title: "Engage with Real Opportunities",
    description: "Turn ambition into action. Connect with curated scholarships, national competitions, early internships, and verified mentors matched perfectly to your profile.",
    icon: Rocket,
    accent: "purple",
  },
];

const opportunityCards: IconCard[] = [
  {
    title: "Scholarships",
    description: "Access targeted funding opportunities and financial support from leading global institutions.",
    icon: GraduationCap,
    accent: "cyan",
  },
  {
    title: "Competitions",
    description: "Participate in premier hackathons, design challenges, and contests to build your portfolio.",
    icon: Trophy,
    accent: "purple",
  },
  {
    title: "Projects",
    description: "Collaborate on real-world challenges that develop practical skills and critical thinking.",
    icon: Rocket,
    accent: "cyan",
  },
  {
    title: "Mentorship",
    description: "Engage with verified industry experts, academic alumni, and thought leaders for guided growth.",
    icon: Users,
    accent: "purple",
  },
  {
    title: "Internships",
    description: "Secure early industry exposure and hands-on experience in emerging, high-impact fields.",
    icon: Briefcase,
    accent: "cyan",
  },
];

const trustCards: IconCard[] = [
  {
    title: "Future-Ready Focus",
    description: "We equip students with skills for tomorrow's AI-driven world, preparing them for emerging industries rather than outdated paradigms.",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    title: "Every Learner is Unique",
    description: "Academics are just one facet. We actively nurture the next generation of designers, innovators, builders, and holistic leaders.",
    icon: Target,
    accent: "purple",
  },
  {
    title: "Equitable Opportunity",
    description: "Democratizing access to elite mentorship, vital knowledge, and career pathways regardless of a student's geography or background.",
    icon: Sparkles,
    accent: "cyan",
  },
];

const audienceCards = [
  {
    title: "For Students",
    bullets: [
      "Identify hidden talents and align them with ambitious future goals",
      "Explore emerging careers in a rapidly evolving, AI-driven landscape",
      "Access a curated network of mentors and real-world project opportunities",
    ],
  },
  {
    title: "For Parents",
    bullets: [
      "Gain transparent insights into your child's developmental progress",
      "Make informed educational decisions with data-driven, personalized guidance",
      "Nurture proactive skill-building to ensure long-term holistic success",
    ],
  },
  {
    title: "For Schools & Teachers",
    bullets: [
      "Deliver highly personalized career guidance seamlessly at scale",
      "Monitor aggregate future-readiness metrics across student cohorts",
      "Supplement academic curricula with actionable, modern career exploration",
    ],
  },
];

const faqItems = [
  {
    question: "What is Orbit's primary mission?",
    answer: "Orbit is a comprehensive future-readiness platform that helps students discover their true potential, develop critical cognitive skills, and connect with meaningful, real-world opportunities in an AI-powered era.",
  },
  {
    question: "How does Orbit differ from traditional ed-tech?",
    answer: "While traditional platforms focus primarily on academic scores and test preparation, Orbit emphasizes holistic growth, personality-driven career matching, and tangible future-readiness beyond the classroom.",
  },
  {
    question: "How are parents involved in the process?",
    answer: "Parents have access to transparent progress reports, personalized guidance insights, and collaborative tools to actively and safely support their child's developmental journey.",
  },
  {
    question: "Does the AI replace human mentorship?",
    answer: "Absolutely not. Our AI acts as a sophisticated facilitator—analyzing strengths and recommending pathways—while connecting students with real, verified human mentors and industry experts for actual guidance.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function OrbitGlow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-[-10rem] top-12 h-96 w-96 rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        
        {/* Slightly more visible technical grid for a premium futuristic feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>
    </>
  );
}

function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon, accent }: IconCard) {
  return (
    <GlassPanel className="h-full p-6">
      <div
        className={cn(
          "mb-5 inline-flex rounded-2xl border p-3",
          accent === "cyan"
            ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
            : "border-purple-400/30 bg-purple-500/10 text-purple-300",
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </GlassPanel>
  );
}

export default function OrbitLandingRecommendation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      <main className="relative isolate overflow-hidden">
        <OrbitGlow />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between py-5 md:py-7">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/orbit-icon.svg"
                alt="Orbit"
                width={52}
                height={52}
                priority
                className="drop-shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300"
              />
              <div>
                <div className="text-xl font-bold tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    ORBIT
                  </span>
                </div>
                <div className="text-xs text-slate-400">Future readiness for students</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#product" className="transition hover:text-white">Product</a>
              <a href="#journey" className="transition hover:text-white">How it works</a>
              <a href="#opportunities" className="transition hover:text-white">Opportunities</a>
              <a href="#trust" className="transition hover:text-white">Trust</a>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 md:inline-flex">
                Login
              </Link>
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] transition hover:scale-[1.02]">
                Create Passport
              </Link>
            </div>
          </header>

          {/* HERO SECTION */}
          <motion.section
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "show"}
            className="grid min-h-[calc(100vh-88px)] items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14"
          >
            <div>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                  <Sparkles className="h-4 w-4" />
                  Empowering the Next Generation
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]"
              >
                Education built for tomorrow.
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Discover who you are meant to become.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
              >
                Orbit is the AI-powered companion that helps students uncover their unique strengths, explore future-proof careers, and connect with real-world opportunities.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.24)] transition hover:translate-y-[-1px]"
                >
                  Create Free Future Passport
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#product"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-base font-medium text-white/90 transition hover:bg-white/10"
                >
                  <Play className="h-4 w-4" />
                  Learn More
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300"
              >
                {[
                  "Built for Students",
                  "Parent & Teacher Visibility",
                  "AI-Powered Guidance",
                  "Opportunity-Driven",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Premium Orbit Visual */}
            <motion.div
              variants={fadeUp}
              className="relative flex items-center justify-center min-h-[600px]"
            >
              {/* Core Glows */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
              <div className="absolute w-[650px] h-[650px] rounded-full bg-purple-500/10 blur-[180px]" />

              {/* Inner Orbit Ring with Particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute"
              >
                <div className="relative w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border border-cyan-400/20">
                  <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                </div>
              </motion.div>

              {/* Outer Orbit Ring with Particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                className="absolute"
              >
                <div className="relative w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] rounded-full border border-purple-400/15">
                  <div className="absolute top-1/2 -right-2 h-4 w-4 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                </div>
              </motion.div>

              {/* Center Logo Floating */}
              <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[60px]" />
                <Image
                  src="/orbit-logo.svg"
                  alt="Orbit Logo"
                  width={900}
                  height={900}
                  priority
                  className="relative z-10 w-[260px] sm:w-[340px] lg:w-[500px] drop-shadow-[0_0_100px_rgba(34,211,238,0.45)]"
                />
              </motion.div>
            </motion.div>
          </motion.section>

          {/* 4-column grid */}
          <section className="pb-10">
            <GlassPanel className="p-4 sm:p-5">
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["Self-Discovery", "Uncover your unique strengths & interests"],
                  ["Future Passport", "Build a dynamic profile of your potential"],
                  ["Skill Building", "Engage with projects, mentors & peers"],
                  ["Career Pathways", "Navigate a changing world with confidence"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{text}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </section>

          {/* WHY ORBIT EXISTS */}
          <section id="product" className="py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <motion.div
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <SectionHeading
                  eyebrow="Why Orbit Exists"
                  title={
                    <>
                      The world is evolving faster<br />than traditional education.
                    </>
                  }
                  description="Students are often pushed toward generic goals based purely on academics. Orbit bridges the gap between classroom learning and future readiness, guiding students toward careers and skills that will actually matter in an AI-driven economy."
                />

                <div className="mt-8 space-y-4">
                  {[
                    "Students need clarity amidst a sea of overwhelming career choices.",
                    "Parents seek transparent, actionable guidance to support their child's growth.",
                    "Schools require scalable, personalized frameworks to empower every learner.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                      <p className="text-slate-300">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="grid gap-5 sm:grid-cols-2"
              >
                {trustCards.map((card) => (
                  <motion.div key={card.title} variants={fadeUp}>
                    <FeatureCard {...card} />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="sm:col-span-2">
                  <GlassPanel className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-3 text-cyan-300">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Orbit's Core Philosophy</h3>
                        <p className="mt-3 leading-7 text-slate-300">
                          Future First • Every Learner is Unique • Equitable Opportunity • Action-Oriented Learning • AI as a Facilitator, Not a Replacement.
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* JOURNEY SECTION */}
          <section id="journey" className="py-20 md:py-28">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="How It Works"
                  title={
                    <>
                      From Self-Discovery<br />to Career Confidence
                    </>
                  }
                  description="Orbit transforms the traditional student journey—moving away from generic benchmarks and transitioning toward a dynamic, future-ready pathway tailored to the individual."
                  center
                />
              </motion.div>

              <div className="relative mx-auto mt-14 max-w-4xl">
                <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/40 to-transparent md:block" />
                <div className="space-y-6 md:space-y-8">
                  {journeySteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div key={step.title} variants={fadeUp}>
                        <GlassPanel className="p-5 md:p-6">
                          <div className="flex flex-col gap-5 md:flex-row md:items-start">
                            <div className="flex items-center gap-4 md:w-72 md:shrink-0">
                              <div
                                className={cn(
                                  "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
                                  step.accent === "cyan"
                                    ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                                    : "border-purple-400/30 bg-purple-500/10 text-purple-300",
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                  Phase {index + 1}
                                </div>
                                <h3 className="mt-1 text-xl font-semibold text-white">
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                            <p className="max-w-2xl leading-7 text-slate-300">
                              {step.description}
                            </p>
                          </div>
                        </GlassPanel>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>

          {/* FUTURE PASSPORT + DASHBOARD SECTION */}
          <section className="py-20 md:py-28">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="Interactive Dashboard"
                  title={
                    <>
                      A Centralized Hub<br />For Your Growth.
                    </>
                  }
                  description="Experience a unified dashboard that brings together AI-driven insights, actionable learning paths, and curated opportunities tailored specifically for you."
                  center
                />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-14">
                <GlassPanel className="overflow-hidden p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                        <div className="text-sm text-slate-300">Future Passport Strength</div>
                        <div className="mt-3 text-5xl font-semibold text-cyan-300">100%</div>
                        <div className="mt-3 text-sm text-slate-400">Interests, cognitive profile, and goals finalized.</div>
                      </div>
                      <div className="rounded-3xl border border-purple-400/20 bg-purple-500/10 p-5">
                        <div className="text-sm text-slate-300">Top Pathway Match</div>
                        <div className="mt-3 text-2xl font-semibold text-white">AI Product Manager</div>
                        <div className="mt-3 text-sm text-purple-200">87% cognitive alignment</div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="text-sm text-slate-300">Recommended Milestone</div>
                        <div className="mt-3 text-xl font-semibold text-white">Join a regional innovation challenge</div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="text-sm text-slate-300">Opportunity Alerts</div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                          <li>• 3 targeted scholarships open</li>
                          <li>• 2 aligned competitions detected</li>
                          <li>• 1 verified mentor match pending</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#0A1020]/80 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-400">AI Companion Insight</div>
                          <div className="mt-1 text-xl font-semibold text-white">Strategic Suggestion</div>
                        </div>
                        <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">Personalized</div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-500/5 p-4 text-slate-200">
                        Based on your cognitive profile and stated interests, product management aligns well with your strengths. We recommend initiating a foundational project to build practical experience.
                      </div>

                      <div className="mt-5 space-y-3">
                        {[
                          "Complete analytical strengths test",
                          "Review 3 scholarship matches",
                          "Schedule mentor introduction",
                          "Initiate 7-day leadership sprint",
                        ].map((item, idx) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                          >
                            <span className="text-sm text-slate-200">{item}</span>
                            <span className="text-xs text-slate-400">Task {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          </section>

          {/* OPPORTUNITIES SECTION */}
          <section id="opportunities" className="py-20 md:py-28">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="Tangible Advancement"
                  title={
                    <>
                      Beyond standard advice.<br />Real-world opportunities.
                    </>
                  }
                  description="Orbit seamlessly connects students with verified scholarships, premier competitions, impactful workshops, internships, and dynamic learning environments."
                  center
                />
              </motion.div>

              <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {opportunityCards.map((card) => (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                  >
                    <FeatureCard {...card} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* AUDIENCE SECTION */}
          <section className="py-20 md:py-28">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="Ecosystem Benefits"
                  title={
                    <>
                      A unified platform built to empower<br />the entire educational ecosystem.
                    </>
                  }
                  description="Orbit is meticulously designed to provide distinct, highly valuable tools and insights for students, parents, and academic institutions."
                  center
                />
              </motion.div>

              <div className="mt-14 grid gap-5 lg:grid-cols-3">
                {audienceCards.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <GlassPanel className="h-full p-6">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <ul className="mt-5 space-y-3">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-slate-300">
                            <Star className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* TRUST + FAQ SECTION */}
          <section id="trust" className="py-20 md:py-28">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="Trust & Security"
                  title={
                    <>
                      Built on a foundation of trust<br />and student safety.
                    </>
                  }
                  description="We prioritize the safety, privacy, and holistic development of every student within the Orbit ecosystem above all else."
                  center
                />
              </motion.div>

              <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div variants={fadeUp}>
                  <GlassPanel className="h-full p-6">
                    <h3 className="text-xl font-semibold text-white">Uncompromising standards for our community</h3>
                    <div className="mt-6 space-y-4">
                      {[
                        {
                          icon: ShieldCheck,
                          title: "Data Privacy & Safety",
                          text: "Enterprise-grade security ensuring strict data protection, complete parental visibility, and verified mentor screening.",
                        },
                        {
                          icon: Clock3,
                          title: "Immediate Actionability",
                          text: "Clear, structured onboarding that guides students to their first meaningful milestone within minutes.",
                        },
                        {
                          icon: CheckCircle2,
                          title: "Evidence-Based Growth",
                          text: "Trackable milestones, tangible skill acquisition, and real-world dashboard metrics available transparently.",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                          >
                            <div className="flex items-start gap-3">
                              <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-300">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium text-white">{item.title}</div>
                                <div className="mt-1 text-sm leading-6 text-slate-300">{item.text}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </GlassPanel>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-4">
                  {faqItems.map((item) => (
                    <GlassPanel key={item.question} className="p-6">
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
                    </GlassPanel>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* FINAL CTA */}
          <section className="pb-28 pt-10 md:pb-36">
            <GlassPanel className="overflow-hidden p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">Join The Movement</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                    Empowering every student to discover their true potential and thrive in an AI-powered future.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                    Bridge the gap between ambition and reality with personalized pathways, verified mentors, and real-world opportunities.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.24)] transition hover:translate-y-[-1px]"
                  >
                    Create Free Future Passport
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#journey"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-base font-medium text-white/90 transition hover:bg-white/10"
                  >
                    See how Orbit works
                  </a>
                </div>
              </div>
            </GlassPanel>
          </section>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-[#0B1020]/85 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-white">Unlock Your Potential</div>
                <div className="text-xs text-slate-400">Start your personalized journey</div>
              </div>
              <Link href="/signup" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white">
                Start
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}