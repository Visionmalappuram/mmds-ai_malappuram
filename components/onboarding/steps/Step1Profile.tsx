"use client";

import { OnboardingData } from "../types";

interface Step1ProfileProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export default function Step1Profile({
  data,
  updateData,
}: Step1ProfileProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Who Are You?
        </h2>

        <p className="mt-2 text-white/60">
          Tell us a little about yourself so we can
          personalize your Future Passport.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) =>
            updateData({ firstName: e.target.value })
          }
          className="rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) =>
            updateData({ lastName: e.target.value })
          }
          className="rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
        />
      </div>

      <select
  value={data.className}
  onChange={(e) =>
    updateData({ className: e.target.value })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-[#13192f]
    p-4
    text-white
    outline-none
    focus:border-cyan-400
    focus:ring-1
    focus:ring-cyan-400
  "
>
  <option
    value=""
    className="bg-[#13192f] text-white"
  >
    Select Class
  </option>

  <option value="Class 5" className="bg-[#13192f] text-white">
    Class 5
  </option>

  <option value="Class 6" className="bg-[#13192f] text-white">
    Class 6
  </option>

  <option value="Class 7" className="bg-[#13192f] text-white">
    Class 7
  </option>

  <option value="Class 8" className="bg-[#13192f] text-white">
    Class 8
  </option>

  <option value="Class 9" className="bg-[#13192f] text-white">
    Class 9
  </option>

  <option value="Class 10" className="bg-[#13192f] text-white">
    Class 10
  </option>

  <option value="Class 11" className="bg-[#13192f] text-white">
    Class 11
  </option>

  <option value="Class 12" className="bg-[#13192f] text-white">
    Class 12
  </option>
</select>

      <input
        type="text"
        placeholder="School Name"
        value={data.school}
        onChange={(e) =>
          updateData({ school: e.target.value })
        }
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
      />

      <div>
        <p className="mb-3 text-sm text-white/70">
          Preferred Language
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              updateData({ language: "English" })
            }
            className={`rounded-xl px-4 py-3 ${
              data.language === "English"
                ? "bg-cyan-500 text-black"
                : "bg-white/5 text-white"
            }`}
          >
            English
          </button>

          {/* <button
            type="button"
            onClick={() =>
              updateData({ language: "Malayalam" })
            }
            className={`rounded-xl px-4 py-3 ${
              data.language === "Malayalam"
                ? "bg-cyan-500 text-black"
                : "bg-white/5 text-white"
            }`}
          >
            Malayalam
          </button> */}
        </div>
      </div>
    </div>
  );
}