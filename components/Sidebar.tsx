"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  User,
  Rocket,
  Briefcase,
  Users,
  GraduationCap,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      name: "Passport",
      href: "/passport",
      icon: User,
    },
    {
      name: "Opportunities",
      href: "/opportunities",
      icon: Rocket,
    },
    {
      name: "Career",
      href: "/career/ai-engineer",
      icon: Briefcase,
    },
        {
      name: "Connect",
      href: "/connect",
      icon: Users,
    },
    {
      name: "Mentors",
      href: "/mentors",
      icon: GraduationCap,
    },
    {
      name: "AI Buddy",
      href: "/ai-buddy",
      icon: Bot,
    },
  ];

  return (
    <aside
      className="
        hidden lg:block
        fixed
        left-0
        top-0
        w-64
        h-screen
        border-r
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
      "
    >
      <h1 className="text-2xl font-bold text-white mb-10">
        AI Malappuram
      </h1>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3
                rounded-xl px-4 py-3
                transition-all
                ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}