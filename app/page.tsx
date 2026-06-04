import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { GlassCard } from "../components/GlassCard";

export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="ml-64 min-h-screen bg-slate-950 text-white p-8 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <Navbar />

          <h1 className="text-5xl font-bold">
            Good Morning 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Welcome to AI Malappuram
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <GlassCard>
              <h2 className="text-lg text-slate-300">
                Future Readiness
              </h2>

              <p className="mt-4 text-6xl font-bold">
                82%
              </p>

              <p className="mt-2 text-green-400">
                +12% this month
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg text-slate-300">
                Opportunities
              </h2>

              <p className="mt-4 text-6xl font-bold">
                12
              </p>

              <p className="mt-2 text-blue-400">
                New opportunities
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg text-slate-300">
                Mentors
              </h2>

              <p className="mt-4 text-6xl font-bold">
                8
              </p>

              <p className="mt-2 text-purple-400">
                Available now
              </p>
            </GlassCard>
          </div>
        </div>
      </main>
    </>
  );
}