"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb } from "lucide-react";

export default function Teaching() {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Core Fundamentals",
      text: "Focusing on deep understanding of programming concepts and best practices.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Student Mentorship",
      text: "Guiding next generation of developers through hands-on project building.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Creative Learning",
      text: "Designing interactive curriculum that makes complex topics accessible.",
    },
  ];

  return (
    <section id="teaching" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Teaching & Mentorship</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <div className="mb-6 p-3 rounded-xl bg-primary/10 w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
