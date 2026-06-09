import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="
  flex
  flex-col
  gap-4
  mb-8
  sm:flex-row
  sm:items-center
  sm:justify-between
">
      {/* Search Bar */}
      <div className="relative w-full sm:w-auto">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search students..."
          className="
            w-full sm:w-80
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            py-3
            pl-11
            pr-4
            text-white
            outline-none
          "
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button
          className="
            h-12
            w-12
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            flex items-center justify-center
          "
        >
          <Bell size={20} />
        </button>

        <div
          className="
            flex items-center gap-3
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            px-4
            py-2
          "
        >
          <div className="h-10 w-10 rounded-full bg-blue-500" />

          <div>
            <p className="font-medium">Dhanuj</p>
            <p className="text-xs text-slate-400">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}