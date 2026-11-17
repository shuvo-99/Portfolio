"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const stats = [
  { value: "2+", label: "Years in industry" },
  { value: "100+", label: "Students / semester" },
  { value: "4", label: "Products shipped" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Soft background glow — radial gradients fade out on their own, so no hard edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(40rem_28rem_at_20%_10%,rgb(96_165_250/0.18),transparent_70%),radial-gradient(36rem_26rem_at_85%_45%,rgb(129_140_248/0.16),transparent_70%)]"
      />

      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.45fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently at ILM AI · BRAC University
          </motion.div>

          <motion.p
            {...fadeUp(0.05)}
            className="text-lg font-medium text-foreground/80 mb-3"
          >
            Hi, I&apos;m Md. Anonto Shuvo 👋
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-6xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.05] mb-6"
          >
            Software Engineer &amp;{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Educator</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="text-lg text-foreground/75 leading-relaxed mb-10 max-w-xl"
          >
            Full-stack engineer building AI-powered ed-tech with Next.js, NestJS
            and PostgreSQL, and teaching software engineering at BRAC
            University.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:opacity-90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Md-Anonto-Shuvo-CV.pdf"
              download="Md-Anonto-Shuvo-CV.pdf"
              className="px-7 py-3 rounded-full border border-border bg-background hover:bg-muted font-medium transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.dl
            {...fadeUp(0.3)}
            className="mt-12 grid grid-cols-3 max-w-md divide-x divide-border"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight">{s.value}</dd>
                <dd className="text-xs text-muted-foreground mt-1">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}

function CodeCard() {
  const k = "text-violet-400";
  const s = "text-emerald-300";
  const p = "text-sky-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="hidden lg:block relative"
    >
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-blue-500/20 to-indigo-500/20 blur-2xl" />
      <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-900/30 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs text-slate-500 font-mono">
            shuvo.ts
          </span>
        </div>
        <pre className="p-5 text-[13px] leading-6 font-mono text-slate-300 overflow-x-auto">
          <code>
            <span className={k}>const</span> <span className={p}>shuvo</span>{" "}
            = {"{"}
            {"\n"}
            {"  "}role: <span className={s}>&quot;Full Stack Engineer&quot;</span>,
            {"\n"}
            {"  "}company: <span className={s}>&quot;ILM AI&quot;</span>,
            {"\n"}
            {"  "}teaches: <span className={s}>&quot;SWE @ BRAC University&quot;</span>,
            {"\n"}
            {"  "}stack: [<span className={s}>&quot;Next.js&quot;</span>,{" "}
            <span className={s}>&quot;NestJS&quot;</span>,{" "}
            <span className={s}>&quot;PostgreSQL&quot;</span>],
            {"\n"}
            {"  "}focus: <span className={s}>&quot;AI-powered ed-tech&quot;</span>,
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
