"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CalendarDays, Leaf, Sigma } from "lucide-react";
import ProjectCard, { type Project } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "ILMINO",
      description:
        "AI based Ed-Tech platform for teaching students with real-time evaluation and progress tracking.",
      techs: [
        { title: "Next JS", iconName: "logos:nextjs-icon" },
        { title: "TypeScript", iconName: "logos:typescript-icon" },
        { title: "Tailwind", iconName: "logos:tailwindcss-icon" },
        { title: "NestJS", iconName: "skill-icons:nestjs-dark" },
        { title: "PostgreSQL", iconName: "logos:postgresql" },
      ],
      link: "https://ilmino.com/",
      image: "/projects/ilmino.jpg",
      featured: true,
      details: [
        "Led frontend development for dashboards and topic-based learning workflows using Next.js and TypeScript, supporting hundreds+ active learning sessions.",
        "Designed and implemented a unified quiz and AI-based evaluation system supporting 8+ question types with real-time feedback and scoring visualization.",
        "Integrated and customized interactive canvas functionality (tldraw-based) to enable in-lesson writing and structured, step-by-step problem-solving.",
        "Built AI-assisted evaluation pipelines where handwritten or typed answers are captured as images and evaluated with structured feedback.",
        "Migrated backend services from Express.js to NestJS, improving modularity, scalability, and maintainability.",
        "Executed a MongoDB → PostgreSQL migration, redesigning relational schemas and optimizing queries for analytics-heavy workloads.",
        "Integrated custom simulations and animations (PhET-like) to improve conceptual understanding in complex topics.",
      ],
    },
    {
      title: "MathPilot",
      description:
        "AI based Math learning platform with real-time evaluation and progress tracking.",
      techs: [
        { title: "Next JS", iconName: "logos:nextjs-icon" },
        { title: "TypeScript", iconName: "logos:typescript-icon" },
        { title: "Tailwind", iconName: "logos:tailwindcss-icon" },
        { title: "NestJS", iconName: "skill-icons:nestjs-dark" },
        { title: "PostgreSQL", iconName: "logos:postgresql" },
      ],
      link: "https://mathpilot.org/",
      tint: "violet",
      icon: Sigma,
      details: [
        "Developed a structured learning flow allowing users to select subjects, modules, papers, and topics, each containing step-wise descriptive questions",
        "Designed and implemented a custom three-column problem-solving layout (question, canvas, navigation) optimized for mathematical workflows.",
        "Built a custom canvas system supporting dynamic sizing, multi-page workflows, and improved rendering performance.",
        "Implemented an AI evaluation pipeline providing step-by-step structured feedback for student solutions.",
        "Developed student analytics dashboards for subject-wise progress tracking, exam history, marks breakdown, and performance insights.",
      ],
    },
    {
      title: "EdMate",
      description:
        "Ed-Tech platform to manage classes, schedules, and learning content.",
      techs: [
        { title: "React", iconName: "material-icon-theme:react" },
        { title: "TypeScript", iconName: "logos:typescript-icon" },
        { title: "Tailwind", iconName: "logos:tailwindcss-icon" },
        { title: "Node JS", iconName: "logos:nodejs-icon-alt" },
        { title: "PostgreSQL", iconName: "logos:postgresql" },
      ],
      link: "https://quiz.edmate.ai/question-bank",
      tint: "sky",
      icon: CalendarDays,
      details: [
        "Developed teacher and admin dashboards for class scheduling, content management, and role-based access control.",
        "Implemented quiz and question modules allowing admins to create MCQs and students to view instant results.",
        "Built backend services following Domain-Driven Design (DDD) principles, improving separation of concerns and long-term maintainability.",
      ],
    },
    {
      title: "Khamar Bondhu",
      description:
        "Designed for livestock farmers to access various services, including medical services from vets, disease information, livestock news, and guidelines for livestock well-being.",
      techs: [
        { title: "React", iconName: "material-icon-theme:react" },
        { title: "TypeScript", iconName: "logos:typescript-icon" },
        { title: "Tailwind", iconName: "logos:tailwindcss-icon" },
        { title: "Node JS", iconName: "logos:nodejs-icon-alt" },
        { title: "PostgreSQL", iconName: "logos:postgresql" },
      ],
      link: "https://khamar-bandhu-front.mpower-social.com/",
      tint: "emerald",
      icon: Leaf,
      details: [
        "Built admin panels for content creation, notification scheduling, and user management.",
        "Implemented feedback systems and managed livestock disease and information modules.",
        "Designed backend features using DDD-aligned service layers to support scalable content and user workflows.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="04" eyebrow="Projects" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.featured ? "md:col-span-2 lg:col-span-3" : ""}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
