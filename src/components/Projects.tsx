"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "MathPilot",
      description:
        "AI based Math learning platform with real-time evaluation and progress tracking.",
      tech: "Next.js, TypeScript, Tailwind, NestJS, PostgreSQL",
      link: "http://mathpilot-frontend-v2.eu-west-2.elasticbeanstalk.com/sign-in",
    },
    {
      title: "ILMINO",
      description:
        "AI based Ed-Tech platform for teaching students with real-time evaluation and progress tracking.",
      tech: "Next.js, TypeScript, Tailwind, NestJS, PostgreSQL",
      link: "http://ilm-ai-frontend-v2.eu-west-2.elasticbeanstalk.com/",
    },
    {
      title: "EdMate",
      description:
        "Ed-Tech platform to manage classes, schedules, and learning content.",
      tech: "React, TypeScript, NodeJS, PostgreSQL",
      link: "https://quiz.edmate.ai/question-bank",
    },
    {
      title: "Khamar Bondhu",
      description:
        "Designed for livestock farmers to access various services, including medical services from vets, disease information, livestock news, and guidelines for livestock well-being.",
      tech: "Node.js, React, TypeScript, PostgreSQL",
      link: "https://khamar-bandhu-front.mpower-social.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
