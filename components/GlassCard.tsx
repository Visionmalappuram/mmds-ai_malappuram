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
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}