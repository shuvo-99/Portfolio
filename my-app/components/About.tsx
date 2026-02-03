"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              I’m a software engineer with 2 years of industry experience and
              over a year of teaching as an adjunct lecturer. Teaching has
              shaped how I write code — clear, maintainable, and built with
              fundamentals in mind.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I specialize in building full-stack applications using modern
              technologies. My dual role as a developer and educator allows me
              to not only build robust solutions but also effectively
              communicate technical concepts and bridge the gap between complex
              logic and user-friendly experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
