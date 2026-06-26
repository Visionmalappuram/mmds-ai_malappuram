"use client";

import OnboardingWizard from "@/components/onboarding/OnboardingWizard";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function OnboardingPage() {

  useEffect(() => {
  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

  }

  checkUser();
}, []);

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
            Let's build your{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Future Passport
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Help us personalize opportunities, career guidance,
            competitions, and AI-powered learning paths for you.
          </p>
        </div>

        <OnboardingWizard />
      </div>
    </div>
  );
}