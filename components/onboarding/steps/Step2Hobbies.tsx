"use client";

import { useState, useRef } from "react";
import { OnboardingData } from "../types";
import {
  Pencil,
  Camera,
  PenLine,
  Music,
  Activity,
  Wrench,
  ChefHat,
  Sprout,
  Gamepad2,
  Book,
  Film,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

interface Step3HobbiesProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------
type HobbyItem = {
  label: string;
  icon: LucideIcon;
};

type HobbyGroup = {
  label: string;
  items: HobbyItem[];
};

// ---------------------------------------------------------------------------
// Hobby taxonomy — grouped by vibe, not academic category.
// ---------------------------------------------------------------------------
const HOBBY_GROUPS: HobbyGroup[] = [
  {
    label: "Creative",
    items: [
      { label: "Drawing", icon: Pencil },
      { label: "Photography", icon: Camera },
      { label: "Writing Stories", icon: PenLine },
      { label: "Music", icon: Music },
      { label: "Dance", icon: Activity },
    ],
  },
  {
    label: "Hands-On",
    items: [
      { label: "Building Things", icon: Wrench },
      { label: "Cooking", icon: ChefHat },
      { label: "Gardening", icon: Sprout },
      { label: "Gaming", icon: Gamepad2 },
    ],
  },
  {
    label: "Mind & World",
    items: [
      { label: "Reading", icon: Book },
      { label: "Watching Documentaries", icon: Film },
      { label: "Volunteering", icon: HeartHandshake },
    ],
  },
];

// Flat list for quick lookup
const ALL_PRESET_LABELS = HOBBY_GROUPS.flatMap((g) =>
  g.items.map((i) => i.label)
);

// ---------------------------------------------------------------------------
// Constants & Validation
// ---------------------------------------------------------------------------
const MAX_HOBBIES = 8; // soft cap — more than this and the signal gets noisy

// Normalise for duplicate detection — "chess" == "Chess" == " chess "
function normalise(s: string) {
  return s.trim().toLowerCase();
}

// Basic anti-gibberish validation
function isValidHobbyName(str: string) {
  const trimmed = str.trim();
  // Must be at least 2 characters
  if (trimmed.length < 2) return false;
  // Must not be entirely numbers
  if (/^\d+$/.test(trimmed)) return false;
  // Prevent 4 identical characters in a row (e.g., "aaaa", "1111")
  if (/(.)\1{3,}/.test(trimmed)) return false;
  // Allow letters, numbers, spaces, and safe characters (+, #, -, ', .) 
  // Supports things like "3D Printing", "C++", "D&D" (adding &)
  if (!/^[a-zA-Z0-9\s\-_'.+#&]+$/.test(trimmed)) return false;

  return true;
}

export default function Step3Hobbies({
  data,
  updateData,
}: Step3HobbiesProps) {
  const [customInput, setCustomInput] = useState("");
  const [duplicateWarning, setDuplicateWarning] = useState(false);
  const [gibberishWarning, setGibberishWarning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const count      = data.hobbies.length;
  const isAtMax    = count >= MAX_HOBBIES;
  const isValid    = count >= 1;

  // Custom hobbies = whatever's in data.hobbies that isn't a preset
  const customHobbies = data.hobbies.filter(
    (h) => !ALL_PRESET_LABELS.includes(h)
  );

  // ── Toggle a preset hobby on/off ──────────────────────────────────────────
  const toggleHobby = (label: string) => {
    const exists = data.hobbies.includes(label);
    if (exists) {
      updateData({ hobbies: data.hobbies.filter((h) => h !== label) });
    } else if (!isAtMax) {
      updateData({ hobbies: [...data.hobbies, label] });
    }
  };

  // ── Add a custom hobby ────────────────────────────────────────────────────
  const addCustomHobby = () => {
    const value = customInput.trim();
    if (!value) return;

    // Gibberish / Format check
    if (!isValidHobbyName(value)) {
      setGibberishWarning(true);
      setTimeout(() => setGibberishWarning(false), 2500);
      return;
    }

    // Duplicate check (case-insensitive)
    const alreadyExists = data.hobbies.some(
      (h) => normalise(h) === normalise(value)
    );
    if (alreadyExists) {
      setDuplicateWarning(true);
      setTimeout(() => setDuplicateWarning(false), 2500);
      return;
    }

    if (isAtMax) return;

    updateData({ hobbies: [...data.hobbies, value] });
    setCustomInput("");
    setDuplicateWarning(false);
    setGibberishWarning(false);
    inputRef.current?.focus();
  };

  // ── Remove any hobby (preset or custom) ──────────────────────────────────
  const removeHobby = (label: string) => {
    updateData({ hobbies: data.hobbies.filter((h) => h !== label) });
  };

  // ── Status bar ────────────────────────────────────────────────────────────
  const statusText = (() => {
    if (count === 0)   return "Select at least 1 hobby to continue";
    if (isAtMax)       return "You've hit the limit — remove one to add another";
    return `${count} selected`;
  })();

  const statusColor = isAtMax
    ? "text-rose-400"
    : isValid
    ? "text-violet-400"
    : "text-white/40";

  const barWidth = Math.min((count / MAX_HOBBIES) * 100, 100);
  const barColor = isAtMax ? "bg-rose-400" : isValid ? "bg-violet-400" : "bg-white/20";

  return (
    <div className="space-y-6">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div>
        <h2 className="text-3xl font-bold text-white">
          What Do You Do For Fun?
        </h2>
        <p className="mt-2 text-white/60">
          Pick hobbies from the list, or add ones we missed. Up to {MAX_HOBBIES} total.
        </p>
      </div>

      {/* ── Preset hobby groups ─────────────────────────────────────────────── */}
      <div className="space-y-5">
        {HOBBY_GROUPS.map((group) => (
          <div key={group.label}>

            {/* Group label */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">
              {group.label}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map(({ label, icon: Icon }) => {
                const selected  = data.hobbies.includes(label);
                const disabled  = !selected && isAtMax;

                return (
                  <button
                    key={label}
                    type="button"
                    disabled={disabled}
                    onClick={() => toggleHobby(label)}
                    aria-pressed={selected}
                    className={[
                      "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200",
                      selected
                        ? "bg-violet-500 text-white shadow-md shadow-violet-500/20 scale-105"
                        : disabled
                        ? "border border-white/5 bg-white/5 text-white/20 cursor-not-allowed"
                        : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95",
                    ].join(" ")}
                  >
                    <Icon
                      size={16}
                      className={
                        selected
                          ? "text-white"
                          : "text-violet-300"
                      }
                    />
                    {label}
                    {selected && (
                      <span className="ml-0.5 text-white/50" aria-hidden="true">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── Custom hobby input ───────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
        <p className="text-sm text-white/50">
          Something not on the list?
        </p>

        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="e.g. Chess, Football, 3D Printing…"
            value={customInput}
            maxLength={40}
            disabled={isAtMax}
            onChange={(e) => {
              setCustomInput(e.target.value);
              setDuplicateWarning(false);
              setGibberishWarning(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addCustomHobby();
              }
            }}
            className={[
              "flex-1 rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors",
              (duplicateWarning || gibberishWarning)
                ? "border-rose-500/50 focus:border-rose-400"
                : "border-white/10 focus:border-violet-400/50",
              isAtMax ? "opacity-40 cursor-not-allowed" : "",
            ].join(" ")}
          />

          <button
            type="button"
            onClick={addCustomHobby}
            disabled={!customInput.trim() || isAtMax}
            className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-violet-400 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>

        {/* Inline errors */}
        {duplicateWarning && (
          <p className="text-xs text-rose-400 animate-in fade-in slide-in-from-top-1">
            You've already added that hobby.
          </p>
        )}
        {gibberishWarning && (
          <p className="text-xs text-rose-400 animate-in fade-in slide-in-from-top-1">
            Please enter a valid, readable hobby name.
          </p>
        )}

        {/* Custom hobby tags — only shown if any exist */}
        {customHobbies.length > 0 && (
          <div className="pt-1">
            <p className="mb-2 text-xs text-white/30 uppercase tracking-widest font-semibold">
              Your custom hobbies
            </p>
            <div className="flex flex-wrap gap-2">
              {customHobbies.map((hobby) => (
                <button
                  key={hobby}
                  type="button"
                  onClick={() => removeHobby(hobby)}
                  aria-label={`Remove ${hobby}`}
                  className="flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-300 transition-all hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-300"
                >
                  {hobby}
                  <span aria-hidden="true" className="text-xs opacity-60">×</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Status bar ──────────────────────────────────────────────────────── */}
      <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
            style={{ width: `${barWidth}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className={`text-sm ${statusColor}`}>{statusText}</p>
          <p className="text-sm tabular-nums text-white/30">
            {count} / {MAX_HOBBIES}
          </p>
        </div>

        {/* Deselect hint — only after at least one selection */}
        {count > 0 && !isAtMax && (
          <p className="text-xs text-white/25">
            Tap any selected hobby to remove it.
          </p>
        )}
      </div>
    </div>
  );
}