"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  className = "mb-14",
}: {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
        <span>{index}</span>
        <span aria-hidden className="h-px w-8 bg-primary/40" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  );
}
