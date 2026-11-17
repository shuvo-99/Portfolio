"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  icon: string;
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Python", icon: "logos:python" },
      { name: "Java", icon: "logos:java" },
      { name: "SQL", icon: "tabler:database" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "shadcn/ui", icon: "simple-icons:shadcnui" },
      { name: "TanStack Query", icon: "logos:react-query-icon" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Flask", icon: "simple-icons:flask" },
      { name: "SQLAlchemy", icon: "simple-icons:sqlalchemy" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Django", icon: "simple-icons:django" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "BigQuery", icon: "logos:google-cloud" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "pandas", icon: "simple-icons:pandas" },
    ],
  },
  {
    title: "Architecture & Tools",
    skills: [
      { name: "RESTful APIs", icon: "tabler:api" },
      { name: "Domain-Driven Design", icon: "tabler:hierarchy-2" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "unittest", icon: "tabler:test-pipe" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud", icon: "logos:google-cloud" },
      { name: "AWS Cognito", icon: "logos:aws-cognito" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Sentry", icon: "simple-icons:sentry" },
      { name: "CI/CD basics", icon: "tabler:refresh" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="05" eyebrow="Skills" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card text-sm font-medium border border-border hover:border-primary/40 transition-colors"
                  >
                    <Icon icon={skill.icon} width="16" height="16" aria-hidden />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
