"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="About Me"
            className="md:col-span-1"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="text-xl text-foreground/85 leading-relaxed">
              Software Engineer with 2 years of industry experience and over a
              year of teaching as an adjunct lecturer.
            </p>
            <p className="mt-6 text-foreground/70 leading-relaxed">
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
