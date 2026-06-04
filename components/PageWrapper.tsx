"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/motion";

export function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="px-5 sm:px-8 lg:px-12 py-8"
    >
      {children}
    </motion.div>
  );
}