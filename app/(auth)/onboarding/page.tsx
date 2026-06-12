"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
return ( 
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white"> 
      <div className="mx-auto max-w-4xl">


    {/* Header */}
    <div className="mb-10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-sm font-medium text-cyan-300">
          Future Passport Setup
        </span>
      </div>

      <h1 className="text-5xl font-bold">
        Let's build your
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          {" "}Future Passport
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-white/60">
        Help us personalize opportunities, career guidance,
        mentors and AI recommendations for you.
      </p>
    </div>

    <p className="mb-4 text-cyan-400">
      Current Step: {step}
    </p>

    {/* Progress */}
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between text-sm text-white/60">
        <span>Step 1 of 3</span>
        <span>33% Complete</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500" />
      </div>
    </div>

    {/* Main Card */}
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-2xl">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Basic Information
        </h2>

        <p className="mt-2 text-white/60">
          Tell us a little about yourself.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          type="text"
          placeholder="First Name"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            outline-none
            transition-all
            focus:border-cyan-400/40
            focus:bg-white/[0.08]
          "
        />

        <input
          type="text"
          placeholder="Last Name"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            outline-none
            transition-all
            focus:border-cyan-400/40
            focus:bg-white/[0.08]
          "
        />

        <input
          type="text"
          placeholder="Class"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            outline-none
            transition-all
            focus:border-cyan-400/40
            focus:bg-white/[0.08]
          "
        />

        <input
          type="text"
          placeholder="School"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            outline-none
            transition-all
            focus:border-cyan-400/40
            focus:bg-white/[0.08]
          "
        />

      </div>

      <button
        onClick={() => setStep(step + 1)}
        className="
          mt-8
          flex
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          from-violet-500
          via-blue-500
          to-cyan-500
          px-8
          py-4
          font-semibold
          transition-all
          hover:scale-[1.02]
          hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
        "
      >
        Continue
      </button>

    </div>
  </div>
</div>


);
}
