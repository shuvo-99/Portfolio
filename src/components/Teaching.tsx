"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, FlaskConical, Code2, Building2 } from "lucide-react";

const courses = [
  "Software Engineering",
  "Data Structures & Algorithms",
  "Database Systems",
  "System Analysis & Design",
];

const stats = [
  { value: "100+", label: "Students per semester" },
  { value: String(courses.length), label: "Undergraduate courses" },
  { value: "2024", label: "Teaching since" },
];

const approach = [
  {
    icon: FlaskConical,
    title: "Theory + labs",
    text: "I run both theory and lab sessions, taking students from concepts to working implementations of real-world system designs.",
  },
  {
    icon: Code2,
    title: "Clean code & architecture",
    text: "I mentor students on clean code, problem-solving and architectural thinking, so they build strong foundations in computer science.",
  },
  {
    icon: Building2,
    title: "Industry in the classroom",
    text: "I bring lessons from production ed-tech work into class examples, so course material reflects how software is built today.",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-24 bg-muted/40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="03" eyebrow="Teaching" title="Teaching & Mentorship" />

        {/* Role card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Adjunct Lecturer
                </h3>
                <p className="font-semibold text-foreground/75">
                  BRAC University · 2024 — Present
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-3 divide-x divide-border md:min-w-[360px]">
              {stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0 md:first:pl-4">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight">
                    {s.value}
                  </dd>
                  <dd className="text-xs text-muted-foreground mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Courses I teach
            </p>
            <ul className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <li
                  key={c}
                  className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Approach */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {approach.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="w-5 h-5 text-primary mb-4" />
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-[15px] leading-relaxed text-foreground/75">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
