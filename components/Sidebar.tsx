import {
  Home,
  User,
  Rocket,
  Users,
  GraduationCap,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl">

      <h1 className="text-2xl font-bold text-white mb-10">
        AI Malappuram
      </h1>

      <nav className="flex flex-col gap-4">

        <div className="flex items-center gap-3 text-white">
          <Home size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <User size={20} />
          Passport
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <Rocket size={20} />
          Opportunities
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <Users size={20} />
          Connect
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <GraduationCap size={20} />
          Mentors
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <Bot size={20} />
          AI Buddy
        </div>

      </nav>

    </aside>
  );
}