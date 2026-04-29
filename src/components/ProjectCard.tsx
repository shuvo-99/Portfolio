"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import CustomDialog from "./ui/customDialog";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  details,
}: {
  title: string;
  description: string;
  tech: string;
  link: string;
  details: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" /> */}
          <Link href={link} target="_blank">
            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </Link>
        </div>
      </div>
      <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>
      <div className="flex  justify-around">
        <div></div>
        <p className="px-3 py-1 text-center text-secondary-foreground text-xs font-medium bg-secondary rounded-full cursor-pointer">
          {/* <customDialog> */}
          <CustomDialog
            title={title}
            description={description}
            tech={tech}
            link={link}
            details={details}
          ></CustomDialog>
        </p>
        <div></div>
      </div>
      {/* <div className="flex flex-wrap gap-2">
        {tech.split(", ").map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div> */}
    </motion.div>
  );
}
