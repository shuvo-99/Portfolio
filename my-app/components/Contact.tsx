"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 rounded-[3rem] p-12 md:p-24 border border-primary/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s work together.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:your@email.com"
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-4 rounded-full border border-border bg-background hover:bg-muted transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 rounded-full border border-border bg-background hover:bg-muted transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
