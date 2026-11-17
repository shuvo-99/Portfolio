"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-anonto-shuvo/",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/shuvo-99", icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 rounded-[2.5rem] px-6 py-14 md:p-20 border border-primary/10"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            06 · Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s build something together.
          </h2>
          <p className="text-lg md:text-xl text-foreground/75 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:anontoshuvo99@gmail.com"
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <div className="flex gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-4 rounded-full border border-border bg-background hover:bg-muted transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
