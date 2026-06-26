"use client";

import { OnboardingData } from "../types";
import {
  Brain,
  Code,
  Bot,
  Microscope,
  Calculator,
  Palette,
  Pencil,
  BookOpen,
  Mic,
  Rocket,
  Leaf,
  Trophy,
  LucideIcon,
} from "lucide-react";

interface Step2InterestsProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

// ---------------------------------------------------------------------------
// Type definitions for Interests
// ---------------------------------------------------------------------------
type InterestItem = {
  label: string;
  icon: LucideIcon;
};

type InterestGroup = {
  label: string;
  items: InterestItem[];
};

// ---------------------------------------------------------------------------
// Interest taxonomy — grouped by category for easier scanning on mobile
// Each group renders with a subtle label above its chips
// ---------------------------------------------------------------------------
const INTEREST_GROUPS: InterestGroup[] = [
  {
    label: "Technology & Science",
    items: [
      { label: "AI", icon: Brain },
      { label: "Coding", icon: Code },
      { label: "Robotics", icon: Bot },
      { label: "Science", icon: Microscope },
      { label: "Mathematics", icon: Calculator },
    ],
  },
  {
    label: "Creative & Expression",
    items: [
      { label: "Design", icon: Palette },
      { label: "Arts", icon: Pencil },
      { label: "Literature", icon: BookOpen },
      { label: "Public Speaking", icon: Mic },
    ],
  },
  {
    label: "World & Society",
    items: [
      { label: "Entrepreneurship", icon: Rocket },
      { label: "Environment", icon: Leaf },
      { label: "Sports", icon: Trophy },
    ],
  },
];

// Flatten for easy lookup — keeps the toggle logic simple
const ALL_INTERESTS = INTEREST_GROUPS.flatMap((g) => g.items);

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const MIN_SELECTIONS = 3;
const MAX_SELECTIONS = 7; // soft cap — keeps recommendation signal clean

export default function Step2Interests({
  data,
  updateData,
}: Step2InterestsProps) {
  const count = data.interests.length;
  const isUnderMin = count < MIN_SELECTIONS;
  const isAtMax = count >= MAX_SELECTIONS;
  const isValid = count >= MIN_SELECTIONS;

  // Toggle a single interest on/off
  const toggleInterest = (label: string) => {
    const exists = data.interests.includes(label);

    if (exists) {
      // Always allow deselection
      updateData({
        interests: data.interests.filter((i) => i !== label),
      });
    } else if (!isAtMax) {
      // Only add if under the max cap
      updateData({
        interests: [...data.interests, label],
      });
    }
  };

  // ---------------------------------------------------------------------------
  // Status bar helpers
  // ---------------------------------------------------------------------------
  const statusText = (() => {
    if (count === 0) return "Pick at least 3 to continue";
    if (count < MIN_SELECTIONS) return `${MIN_SELECTIONS - count} more to go`;
    if (count === MAX_SELECTIONS) return "Maximum reached — deselect one to change";
    return `${count} selected — you're good!`;
  })();

  const statusColor = (() => {
    if (!isValid) return "text-amber-400";
    if (isAtMax) return "text-rose-400";
    return "text-emerald-400";
  })();

  const barWidth = Math.min((count / MAX_SELECTIONS) * 100, 100);
  const barColor = (() => {
    if (!isValid) return "bg-amber-400";
    if (isAtMax) return "bg-rose-400";
    return "bg-emerald-400";
  })();

  return (
    <div className="space-y-6">

      {/* ── Header ── */}
      <div>
        <h2 className="text-3xl font-bold text-white">What Excites You?</h2>
        <p className="mt-2 text-white/60">
          Pick 3–7 interests. We'll use these to suggest exams, events, and competitions for you.
        </p>
      </div>

      {/* ── Interest groups ── */}
      <div className="space-y-5">
        {INTEREST_GROUPS.map((group) => (
          <div key={group.label}>

            {/* Group label */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">
              {group.label}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {group.items.map(({ label, icon: Icon }) => {
                const selected = data.interests.includes(label);
                const disabled = !selected && isAtMax;

                return (
                  <button
                    key={label}
                    type="button"
                    disabled={disabled}
                    onClick={() => toggleInterest(label)}
                    aria-pressed={selected}
                    className={[
                      "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200",
                      selected
                        ? // Selected state — cyan accent
                          "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 scale-105"
                        : disabled
                        ? // Greyed out when max reached and not selected
                          "border border-white/5 bg-white/5 text-white/25 cursor-not-allowed"
                        : // Default unselected
                          "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95",
                    ].join(" ")}
                  >
                    <Icon
                      size={16}
                      className={
                        selected
                          ? "text-black"
                          : "text-cyan-300"
                      }
                    />
                    {label}
                    {selected && (
                      <span className="ml-0.5 text-black/60">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Status bar ── */}
      <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">

        {/* Progress track */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
            style={{ width: `${barWidth}%` }}
          />
        </div>

        {/* Status text + counter */}
        <div className="flex items-center justify-between">
          <p className={`text-sm ${statusColor}`}>{statusText}</p>
          <p className="text-sm tabular-nums text-white/40">
            {count} / {MAX_SELECTIONS}
          </p>
        </div>

        {/* Deselect hint — only show once something is picked */}
        {count > 0 && (
          <p className="text-xs text-white/30">
            Tap a selected interest again to remove it.
          </p>
        )}
      </div>
    </div>
  );
}