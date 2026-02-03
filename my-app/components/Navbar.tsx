"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight text-gradient"
        >
          Shuvo.
        </motion.span>
        <div className="flex space-x-8 text-sm font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
