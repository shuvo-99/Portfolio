"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Job {
  title: string;
  company: string;
  /** Public company page, if any. */
  companyUrl?: string;
  /** Product worked on, shown under the company name. */
  product?: string;
  period: string;
  tags: string[];
  highlights: string[];
}

// Current role shows more up front; past roles stay compact.
const VISIBLE_BULLETS = { current: 3, past: 2 };

const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "The Product Dev",
    companyUrl: "https://theproductdev.com/",
    product: "Acctuate: financial analytics & reporting",
    period: "Jun 2026 — Present",
    tags: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "BigQuery",
      "GCP",
      "AWS Cognito",
      "Docker",
      "Sentry",
    ],
    highlights: [
      "Build and maintain REST endpoints for Acctuate's financial analytics API, covering ARR, cohort retention, deferred revenue, cash flow, balance sheet, AR/AP aging, headcount and sales pipeline. Delivered 100+ tickets (~530 commits) in 5 months.",
      "Built the ARR analytics endpoints on BigQuery views: customer movement (new, expansion, contraction, churn, winback), customer waterfall, up-for-renewal share of total ARR, cohort drill-downs and product filtering.",
      "Delivered the customer deposits module end to end (database model and migration, BigQuery loader, schedule builder and API), plus the data loaders that sync BigQuery into Cloud SQL.",
      "Improved production reliability: fixed a database connection leak, added Sentry error logging, fixed Decimal-to-float serialization in financial outputs, fixed auth ordering in the AWS Cognito delegated login, and hardened bulk date-range updates with row locking and fiscal-period rollover.",
      "Grew the unittest suite (now 54 test files) alongside new features, wrote the team's Data API QC guideline, and kept the API documentation up to date.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "ILM AI Ltd",
    period: "2025 — 2026",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "tldraw"],
    highlights: [
      "Led end-to-end frontend development of an AI-driven ed-tech platform using Next.js and TypeScript, supporting hundreds of concurrent learning sessions with complex topic-based workflows.",
      "Designed and built a unified quiz & AI evaluation system supporting 8+ question types, real-time feedback, scoring visualization, and step-by-step structured solution analysis.",
      "Engineered AI-assisted answer evaluation pipelines, capturing handwritten and typed responses as images and generating structured, explainable feedback for learners.",
      "Implemented advanced interactive canvas tooling (tldraw-based) for in-lesson writing, multi-page problem solving, dynamic resizing, and performance-optimized rendering, tailored for math-heavy workflows.",
      "Modernized backend architecture and data layer by migrating Express → NestJS and MongoDB → PostgreSQL, redesigning relational schemas and optimizing queries for analytics-heavy dashboards.",
    ],
  },
  {
    title: "Software Engineer",
    company: "mPower Social Enterprise Ltd",
    period: "2024 — 2025",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "DDD"],
    highlights: [
      "Developed teacher and admin dashboards for class scheduling, content management, user roles, and access control, supporting structured academic and operational workflows.",
      "Implemented quiz and assessment modules enabling admins to create MCQs and students to receive instant evaluation and results.",
      "Designed backend services using Domain-Driven Design (DDD) principles, with clean service layers that improved maintainability, scalability, and separation of concerns.",
      "Built scalable admin panels for content creation, notification scheduling, user management, feedback handling, and domain-specific data modules.",
    ],
  },
];

function JobEntry({ job, index }: { job: Job; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isCurrent = job.period.includes("Present");
  const limit = isCurrent ? VISIBLE_BULLETS.current : VISIBLE_BULLETS.past;
  const visible = job.highlights.slice(0, limit);
  const extra = job.highlights.slice(limit);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid md:grid-cols-[200px_1fr] gap-x-10 gap-y-3"
    >
      {/* Meta column */}
      <div className="md:pt-1">
        <p className="text-sm font-medium text-muted-foreground tabular-nums">
          {job.period}
        </p>
        <p className="mt-1 font-semibold text-foreground">
          {job.companyUrl ? (
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              {job.company}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          ) : (
            job.company
          )}
        </p>
        {job.product && (
          <p className="mt-1 text-sm text-muted-foreground">{job.product}</p>
        )}
      </div>

      {/* Content column with timeline rail */}
      <div className="relative md:border-l md:border-border md:pl-10 pb-2">
        <span
          aria-hidden
          className={`hidden md:block absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-background ring-1 ${
            isCurrent ? "bg-primary ring-primary/40" : "bg-muted-foreground/40 ring-border"
          }`}
        />
        <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>

        <ul className="mt-4 space-y-3">
          {visible.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              extra.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <BulletBody>{item}</BulletBody>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {extra.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4 cursor-pointer"
          >
            {expanded ? "Show less" : `Show ${extra.length} more`}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies"
        >
          {job.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>

      </div>
    </motion.li>
  );
}

function BulletBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-[15px] leading-relaxed text-foreground/75">
      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <BulletBody>{children}</BulletBody>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="02" eyebrow="Experience" title="Professional Experience" />

        <ol className="space-y-14">
          {jobs.map((job, i) => (
            <JobEntry key={job.company} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
