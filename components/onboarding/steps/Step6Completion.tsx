"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ShieldCheck } from "lucide-react";
import { OnboardingData } from "../types";

interface CompletionScreenProps {
  data: OnboardingData;
  onGoToPassport: () => void;
}

const ONBOARDING_STORAGE_KEY = "future-passport";

function computeProfileStrength(d: OnboardingData): number {
  let score = 0;

  // Profile
  if (d.firstName.trim()) score += 10;
  if (d.lastName.trim()) score += 5;
  if (d.className.trim()) score += 5;
  if (d.school.trim()) score += 10;

  // Hobbies
  score += Math.min(d.hobbies.length / 8, 1) * 20;

  // Interests
  score += Math.min(d.interests.length / 7, 1) * 20;

  // Career Goals
  score += Math.min(d.careerGoals.length / 3, 1) * 15;

  // Dream Goal
  if (d.dreamGoal.length > 30) score += 10;

  // Learning Style
  if (d.learningStyle) score += 3;

  // Learning Barrier
  if (d.learningBarrier) score += 2;

  return Math.round(Math.min(score, 100));
}

function strengthLabel(score: number) {
  if (score >= 90)
    return {
      text: "Outstanding",
      color: "text-cyan-400",
    };

  if (score >= 75)
    return {
      text: "Strong",
      color: "text-emerald-400",
    };

  if (score >= 50)
    return {
      text: "Growing",
      color: "text-amber-400",
    };

  return {
    text: "Starter",
    color: "text-rose-400",
  };
}

function HighlightPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function Step6Completion({
  data,
  onGoToPassport,
}: CompletionScreenProps) {
  const [saved, setSaved] = useState(false);
  const [strength, setStrength] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const profileStrength =
      computeProfileStrength(data);

    setStrength(profileStrength);

    try {
      localStorage.setItem(
        ONBOARDING_STORAGE_KEY,
        JSON.stringify({
          ...data,
          completedAt: Date.now(),
          profileStrength,
        })
      );

      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [data]);

  useEffect(() => {
    if (strength === 0) return;

    let frame: number;

    const start = performance.now();
    const duration = 1000;

    const animate = (time: number) => {
      const progress = Math.min(
        (time - start) / duration,
        1
      );

      setAnimatedScore(
        Math.round(progress * strength)
      );

      if (progress < 1) {
        frame = requestAnimationFrame(
          animate
        );
      }
    };

    frame = requestAnimationFrame(
      animate
    );

    return () =>
      cancelAnimationFrame(frame);
  }, [strength]);

  const strengthInfo =
    strengthLabel(strength);

  const barColor =
    strength >= 90
      ? "bg-cyan-400"
      : strength >= 75
      ? "bg-emerald-400"
      : strength >= 50
      ? "bg-amber-400"
      : "bg-rose-400";
  
  const handleOpenPassport = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();


      if (!user) {
        alert("User not found");
        return;
      }

      const { error } = await supabase
        .from("student_profiles")
        .upsert({
          user_id: user.id,

          first_name: data.firstName,
          last_name: data.lastName,
          class_name: data.className,
          school: data.school,

          hobbies: data.hobbies,
          interests: data.interests,
          career_goals: data.careerGoals,

          dream_goal: data.dreamGoal,
          learning_style: data.learningStyle,
          learning_barrier: data.learningBarrier,

          profile_strength: strength,
          onboarding_completed: true,
        });

      if (error) {
        console.error("Student profile error:", error);
        alert(JSON.stringify(error, null, 2));
        return;
      }

      onGoToPassport();

    } catch (error: any) {
      console.error("Unexpected error in Step6Completion:", error);

      alert(`
    Code: ${error?.code}
    Message: ${error?.message}
    Details: ${error?.details}
    Hint: ${error?.hint}
    `);
    }
  };    

  return (
    <div className="space-y-6">

      {/* Hero */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">
          <ShieldCheck className="h-8 w-8 text-cyan-400" />
        </div>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Future Passport Ready
        </h2>

        <p className="mt-2 text-sm text-white/60">
          Great job {data.firstName}! Your
          personalized learning profile is ready.
        </p>
      </div>

      {/* Profile Strength */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-white/70">
            Profile Strength
          </span>

          <span
            className={`font-semibold ${strengthInfo.color}`}
          >
            {strengthInfo.text}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
            style={{
              width: `${animatedScore}%`,
            }}
          />
        </div>

        <div className="mt-2 flex justify-end">
          <span
            className={`font-bold ${strengthInfo.color}`}
          >
            {animatedScore}%
          </span>
        </div>
      </div>

      {/* Hobbies */}
      {data.hobbies.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            Hobbies
          </h3>

          <div className="flex flex-wrap gap-2">
            {data.hobbies.map((item) => (
              <HighlightPill key={item}>
                {item}
              </HighlightPill>
            ))}
          </div>
        </div>
      )}

      {/* Interests */}
      {data.interests.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            Interests
          </h3>

          <div className="flex flex-wrap gap-2">
            {data.interests.map((item) => (
              <HighlightPill key={item}>
                {item}
              </HighlightPill>
            ))}
          </div>
        </div>
      )}

      {/* Career Goals */}
      {data.careerGoals.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            Career Goals
          </h3>

          <div className="flex flex-wrap gap-2">
            {data.careerGoals.map((goal) => (
              <HighlightPill key={goal}>
                {goal}
              </HighlightPill>
            ))}
          </div>
        </div>
      )}

      {/* Learning Style */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
            Learning Style
          </p>

          <p className="text-white">
            {data.learningStyle || "Not selected"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
            Biggest Challenge
          </p>

          <p className="text-white">
            {data.learningBarrier || "Not selected"}
          </p>
        </div>
      </div>

      {/* Dream Goal */}
      {data.dreamGoal && (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="mb-2 text-xs uppercase tracking-wider text-cyan-300">
            Dream Goal
          </p>

          <p className="text-sm leading-relaxed text-white/80">
            {data.dreamGoal}
          </p>
        </div>
      )}

      {!saved && (
        <p className="text-center text-sm text-rose-400">
          Could not save profile locally.
        </p>
      )}

      <button
        onClick={handleOpenPassport}
        className="w-full rounded-xl bg-cyan-400 py-3 text-base font-semibold text-black transition hover:bg-cyan-300"
      >
        Open My Passport →
      </button>
    </div>
  );
}