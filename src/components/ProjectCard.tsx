"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomDialog from "./ui/customDialog";
import { cn } from "@/lib/utils";

export interface Tech {
  title: string;
  iconName: string;
}

export interface Project {
  title: string;
  description: string;
  techs: Tech[];
  link: string;
  details: string[];
  image?: string;
  featured?: boolean;
}

function hostname(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link;
  }
}

function Preview({ title, link, image }: Pick<Project, "title" | "link" | "image">) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-card border-b border-border">
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="ml-2 truncate rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground font-mono">
          {hostname(link)}
        </span>
      </div>
      <div className="relative aspect-16/9">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-600 to-indigo-700">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[16px_16px]"
            />
            <span className="relative text-2xl md:text-3xl font-bold tracking-tight text-white/95 transition-transform duration-500 group-hover:scale-105">
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard(project: Project) {
  const { title, description, techs, link, details, image, featured } = project;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className={cn(
        "group h-full p-4 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300",
        featured
          ? "md:grid md:grid-cols-[1.3fr_1fr] md:gap-8 md:items-center"
          : "flex flex-col",
      )}
    >
      <Preview title={title} link={link} image={image} />

      <div
        className={cn("flex flex-1 flex-col px-2 pt-5 pb-2", featured && "md:pt-0")}
      >
        {featured && (
          <span className="mb-2 w-fit text-[11px] font-semibold uppercase tracking-wider text-primary">
            Featured project
          </span>
        )}
        <h3
          className={cn(
            "font-bold tracking-tight group-hover:text-primary transition-colors",
            featured ? "text-2xl" : "text-xl",
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-foreground/75 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {techs.map((t) => (
            <li
              key={t.title}
              title={t.title}
              className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/75"
            >
              <Icon icon={t.iconName} width="14" height="14" />
              {t.title}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Live site
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <CustomDialog
            title={title}
            description={description}
            techs={techs}
            link={link}
            details={details}
          />
        </div>
      </div>
    </motion.article>
  );
}
