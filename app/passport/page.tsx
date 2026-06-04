import { GlassCard } from "../../components/GlassCard";
import { ScoreRing } from "../../components/ScoreRing";
import { studentProfile } from "../../lib/mock";

export default function PassportPage() {
  const p = studentProfile;

  return (
    <main className="ml-64 min-h-screen bg-slate-950 text-white p-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Future Passport
        </p>

        <h1 className="mt-2 text-6xl font-bold">
          Hello, {p.name.split(" ")[0]}.
        </h1>
      </div>

      <GlassCard className="p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-2xl font-bold">
              {p.avatar}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {p.name}
              </h2>

              <p className="text-slate-400">
                {p.school} · {p.grade}
              </p>
            </div>
          </div>

          <ScoreRing value={p.score} />
        </div>
      </GlassCard>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 text-xl font-semibold">
            Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {p.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="mt-8 mb-4 text-xl font-semibold">
            Interests
          </h3>

          <div className="flex flex-wrap gap-2">
            {p.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 text-xl font-semibold">
            Achievements
          </h3>

          <ul className="space-y-3">
            {p.achievements.map((achievement) => (
              <li
                key={achievement}
                className="text-slate-300"
              >
                • {achievement}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <GlassCard className="mt-6">
        <h3 className="mb-6 text-xl font-semibold">
          Future Goals
        </h3>

        <div className="space-y-6">
          {p.goals.map((goal) => (
            <div key={goal.label}>
              <div className="mb-2 flex justify-between">
                <span>{goal.label}</span>
                <span>{goal.progress}%</span>
              </div>

              <div className="h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  style={{
                    width: `${goal.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </main>
  );
}