"use client";

type ScoreRingProps = {
  value: number;
};

export function ScoreRing({ value }: ScoreRingProps) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="relative h-40 w-40">
      <svg
        className="rotate-[-90deg]"
        width="160"
        height="160"
      >
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="10"
          fill="none"
        />

        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="url(#grad)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

        <defs>
          <linearGradient
            id="grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">
          {value}
        </div>

        <div className="mt-1 text-center text-[10px] leading-tight tracking-wide text-slate-400">
          AI
          <br />
          READINESS
        </div>
      </div>
    </div>
  );
}