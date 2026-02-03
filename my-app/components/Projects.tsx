"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A premium personal portfolio built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations and responsive design.",
      tech: "Next.js, TypeScript, Tailwind, Framer Motion",
    },
    {
      title: "Educational Platform",
      description:
        "An interactive learning management system for computer science students. Includes real-time code evaluation and progress tracking.",
      tech: "React, Node.js, PostgreSQL, Docker",
    },
    {
      title: "Social Analytics Dashboard",
      description:
        "Real-time data visualization tool for social media metrics. Built with D3.js and WebSocket integration for live updates.",
      tech: "TypeScript, D3.js, React, WebSocket",
    },
    {
      title: "Developer Tools CLI",
      description:
        "A comprehensive command-line interface to automate repetitive development tasks and project bootstrapping.",
      tech: "Node.js, Commander, Inquirer",
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
