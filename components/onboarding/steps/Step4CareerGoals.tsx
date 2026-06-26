"use client";

import { OnboardingData } from "../types";
import {
  Cpu,
  FlaskConical,
  Briefcase,
  Stethoscope,
  GraduationCap,
  Landmark,
  Palette,
  Users,
  Compass,
} from "lucide-react";

interface Step4CareerGoalsProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

type CareerGoal = {
  label: string;
  icon: React.ElementType;
};

type CareerGroup = {
  label: string;
  items: CareerGoal[];
};

const CAREER_GROUPS: CareerGroup[] = [
  {
    label: "Technology & Innovation",
    items: [
      { label: "Engineer", icon: Cpu },
      { label: "Scientist", icon: FlaskConical },
      { label: "Researcher", icon: FlaskConical },
    ],
  },
  {
    label: "Business & Leadership",
    items: [
      { label: "Entrepreneur", icon: Briefcase },
    ],
  },
  {
    label: "Public Service",
    items: [
      { label: "Doctor", icon: Stethoscope },
      { label: "Teacher", icon: GraduationCap },
      { label: "Government Service", icon: Landmark },
      { label: "Social Worker", icon: Users },
    ],
  },
  {
    label: "Creative Careers",
    items: [
      { label: "Designer", icon: Palette },
      { label: "Artist / Creator", icon: Palette },
    ],
  },
  {
    label: "Still Exploring",
    items: [
      { label: "Not Sure Yet", icon: Compass },
    ],
  },
];

const MIN_SELECTIONS = 1;
const MAX_SELECTIONS = 3;

export default function Step4CareerGoals({
  data,
  updateData,
}: Step4CareerGoalsProps) {
  const count = data.careerGoals.length;

  const isAtMax = count >= MAX_SELECTIONS;

  const toggleGoal = (goal: string) => {
    const exists = data.careerGoals.includes(goal);

    if (exists) {
      updateData({
        careerGoals: data.careerGoals.filter(
          (item) => item !== goal
        ),
      });
    } else if (!isAtMax) {
      updateData({
        careerGoals: [...data.careerGoals, goal],
      });
    }
  };

  const statusText = (() => {
    if (count === 0) {
      return "Select at least 1 career goal";
    }

    if (count === MAX_SELECTIONS) {
      return "Maximum reached";
    }

    return `${count} selected`;
  })();

  const progressWidth = Math.min(
    (count / MAX_SELECTIONS) * 100,
    100
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white">
          What Do You Want To Become?
        </h2>

        <p className="mt-2 text-white/60">
          Choose up to 3 paths that interest you.
          Don't worry — you can change these later.
        </p>
      </div>

      {/* Career Groups */}
      <div className="space-y-5">
        {CAREER_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">
              {group.label}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map(({ label, icon: Icon }) => {
                const selected =
                  data.careerGoals.includes(label);

                const disabled =
                  !selected && isAtMax;

                return (
                  <button
                    key={label}
                    type="button"
                    disabled={disabled}
                    onClick={() =>
                      toggleGoal(label)
                    }
                    className={[
                      "flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200",
                      selected
                        ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 scale-105"
                        : disabled
                        ? "border border-white/5 bg-white/5 text-white/25 cursor-not-allowed"
                        : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 hover:scale-105",
                    ].join(" ")}
                  >
                    <Icon size={18} />

                    {label}

                    {selected && (
                      <span className="text-black/60">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Status Card */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-300"
            style={{
              width: `${progressWidth}%`,
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-cyan-300">
            {statusText}
          </p>

          <p className="text-sm text-white/40">
            {count}/{MAX_SELECTIONS}
          </p>
        </div>

        {count > 0 && (
          <p className="mt-2 text-xs text-white/30">
            Tap a selected goal again to remove it.
          </p>
        )}
      </div>
    </div>
  );
}