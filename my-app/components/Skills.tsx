"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        "Git",
        "Docker",
        "REST APIs",
        "PostgreSQL",
        "System Design",
        "Agile",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
