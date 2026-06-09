"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
