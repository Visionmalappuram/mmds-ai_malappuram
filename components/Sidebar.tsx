"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  User,
  Rocket,
  Briefcase,
  Users,
  GraduationCap,
  Bot,
  Info,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
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


    {
      name: "About Orbit",
      href: "/about",
      icon: Info,
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
        bg-slate-950/90
        backdrop-blur-xl
        p-6
      "
    >
      {/* Logo */}
<div className="relative mb-6">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl rounded-full" />

  <div className="relative flex flex-col">
    <Image
      src="/orbit-logo.svg"
      alt="Orbit"
      width={180}
      height={60}
      className="mb-3"
    />
      <p className="mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-slate-500">
        Future Readiness Platform
      </p>
  </div>
</div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.name}
              whileHover={{ x: 6 }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href={item.href}
                className={`
                  relative
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="
                      absolute
                      left-0
                      top-2
                      bottom-2
                      w-1
                      rounded-full
                      bg-gradient-to-b
                      from-cyan-400
                      to-purple-500
                    "
                  />
                )}

                <Icon size={20} />

                <span>{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}