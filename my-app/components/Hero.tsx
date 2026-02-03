"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 blur-[100px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Software Engineer & <br />
            <span className="text-gradient">Adjunct Lecturer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Blending industry experience with academic rigor to build better
            software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/CV_Md. Anonto Shuvo.pdf"
              download
              className="px-8 py-3 rounded-full border border-border bg-background hover:bg-muted font-medium transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
