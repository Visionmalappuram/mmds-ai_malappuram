"use client";

import { OnboardingData } from "../types";
import {
  Video,
  BookOpen,
  Hammer,
  Users,
  Target,
  Compass,
  Clock,
  Smartphone,
  HelpCircle,
  BatteryLow,
} from "lucide-react";

interface Step5DreamGoalProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const LEARNING_STYLES = [
  {
    label: "Watching Videos",
    icon: Video,
  },
  {
    label: "Reading",
    icon: BookOpen,
  },
  {
    label: "Building Projects",
    icon: Hammer,
  },
  {
    label: "Learning With Friends",
    icon: Users,
  },
  {
    label: "Learning By Doing",
    icon: Target,
  },
];

const LEARNING_BARRIERS = [
  {
    label: "Don't Know Where To Start",
    icon: Compass,
  },
  {
    label: "Not Enough Time",
    icon: Clock,
  },
  {
    label: "Get Distracted Easily",
    icon: Smartphone,
  },
  {
    label: "No One To Help Me",
    icon: HelpCircle,
  },
  {
    label: "Lose Motivation",
    icon: BatteryLow,
  },
];

export default function Step5DreamGoal({
  data,
  updateData,
}: Step5DreamGoalProps) {
  return (
    <div className="space-y-8">
      {/* Dream Goal */}
      <div>
        <h2 className="text-3xl font-bold text-white">
          What's Your Biggest Dream?
        </h2>

        <p className="mt-2 text-white/60">
          Tell us about a future you'd love to create.
        </p>

        <textarea
          value={data.dreamGoal}
          onChange={(e) =>
            updateData({
              dreamGoal: e.target.value,
            })
          }
          placeholder="I want to become a doctor so that I can help people in my community..."
          rows={5}
          className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/30"
        />
      </div>

      {/* Learning Style */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-white">
          How Do You Learn Best?
        </h3>

        <div className="flex flex-wrap gap-3">
          {LEARNING_STYLES.map(
            ({ label, icon: Icon }) => {
              const selected =
                (data as any).learningStyle === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    updateData({
                      learningStyle: label,
                    } as any)
                  }
                  className={`flex items-center gap-2 rounded-full px-5 py-3 transition-all ${
                    selected
                      ? "bg-cyan-500 text-black"
                      : "border border-white/10 bg-white/5 text-white"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Learning Barrier */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-white">
          What Usually Stops You?
        </h3>

        <div className="flex flex-wrap gap-3">
          {LEARNING_BARRIERS.map(
            ({ label, icon: Icon }) => {
              const selected =
                (data as any).learningBarrier ===
                label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    updateData({
                      learningBarrier: label,
                    } as any)
                  }
                  className={`flex items-center gap-2 rounded-full px-5 py-3 transition-all ${
                    selected
                      ? "bg-violet-500 text-white"
                      : "border border-white/10 bg-white/5 text-white"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}