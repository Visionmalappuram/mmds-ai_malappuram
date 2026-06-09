"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({
  children,
  className,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        `
        relative
        overflow-hidden
        rounded-[28px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        p-6

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/[0.08]
        before:via-transparent
        before:to-transparent
        before:pointer-events-none

        after:absolute
        after:inset-0
        after:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_40%)]
        after:pointer-events-none
        `,
        className
      )}
    >
      {children}
    </motion.div>
  );
}