"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "ILM AI Ltd",
      period: "2025 - Present",
      description: [
        "Led end-to-end frontend development of an AI-driven ed-tech platform using Next.js and TypeScript, supporting hundreds of concurrent learning sessions with complex topic-based workflows.",
        "Designed and built a unified quiz & AI evaluation system supporting 8+ question types, real-time feedback, scoring visualization, and step-by-step structured solution analysis.",
        "Implemented advanced interactive canvas tooling (tldraw-based) for in-lesson writing, multi-page problem solving, dynamic resizing, and performance-optimized rendering—tailored for math-heavy workflows.",
        "Engineered AI-assisted answer evaluation pipelines, capturing handwritten and typed responses as images and generating structured, explainable feedback for learners.",
        "Modernized backend architecture and data layer by migrating Express → NestJS and MongoDB → PostgreSQL, redesigning relational schemas and optimizing queries for analytics-heavy dashboards and insights.",
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Software Engineer",
      company: "mPower Social Enterprise Ltd",
      period: "2024 - 2025",
      description: [
        "Developed teacher and admin dashboards for class scheduling, content management, user roles, and access control, supporting structured academic and operational workflows.",
        "Implemented quiz and assessment modules enabling admins to create MCQs and students to receive instant evaluation and results.",
        "Built scalable admin panels for content creation, notification scheduling, user management, feedback handling, and domain-specific data modules.",
        "Designed backend services using Domain-Driven Design (DDD) principles, with clean service layers that improved maintainability, scalability, and separation of concerns.",
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Adjunct Lecturer",
      company: "BRAC University",
      period: "2024 - Present",
      description: [
        "Teaching undergraduate courses in Software Engineering, Data Structures & Algorithms, Databases, and System Analysis & Design to 100+ students per semester.",
        "Delivering both theory and lab sessions, guiding students through real-world system design and implementation patterns.",
        "Mentoring students on clean code, problem-solving, and architectural thinking, strengthening foundational CS skills.",
      ],
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {exp.icon}
              </div>

              {/* Card content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-foreground">{exp.title}</h3>
                  <time className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </time>
                </div>
                <div className="text-sm font-semibold text-muted-foreground mb-4">
                  {exp.company}
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
