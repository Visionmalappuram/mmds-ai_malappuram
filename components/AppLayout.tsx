"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Image from "next/image";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-3 backdrop-blur-xl">
        <button
          onClick={() => setOpen(true)}
          className="text-white"
        >
          <Menu size={28} />
        </button>

        <div className="flex justify-center">
          <Image
            src="/orbit-logo.svg"
            alt="Orbit"
            width={140}
            height={42}
            style={{ height: "auto" }}
            priority
          />
        </div>

        <div className="w-7" />
      </div>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-slate-950 p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                ORBIT
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-5 text-slate-300">
              <a href="/passport">Passport</a>
              <a href="/opportunities">Opportunities</a>
              <a href="/career/ai-engineer">Career</a>
              <a href="/connect">Connect</a>
              <a href="/mentors">Mentors</a>
              <a href="/ai-buddy">AI Buddy</a>
              <a href="/about">About Orbit</a>
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main
        className="
          min-h-screen
          bg-slate-950
          text-white
          p-4
          md:p-6
          lg:p-8
          lg:ml-64
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

         <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      </div>
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </main>
    </>
  );
}