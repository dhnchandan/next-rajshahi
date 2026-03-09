"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/** Animated link for blog articles */
export interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export function AnimatedLink({ href, children, external = false }: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
      aria-label={external ? `${children} (opens in new tab)` : `Navigate to ${children}`}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
      {external && <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />}
    </motion.a>
  );
}

/** Image card for blog articles */
export interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <motion.figure
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      role="figure"
      aria-label={caption ?? alt}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img src={src} alt={alt} className="object-cover" />
      </div>
      {caption && (
        <figcaption className="border-t border-border/20 p-4 text-sm text-foreground/70">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

/** Callout box for blog articles */
export interface CalloutProps {
  children: ReactNode;
  type?: "info" | "warning" | "success";
}

export function Callout({ children, type = "info" }: CalloutProps) {
  const colors = {
    info: "border-primary/30 bg-primary/10 text-foreground",
    warning: "border-amber-500/30 bg-amber-500/10 text-foreground",
    success: "border-emerald-500/30 bg-emerald-500/10 text-foreground",
  };

  return (
    <motion.aside
      variants={itemVariants}
      className={`rounded-xl border p-6 backdrop-blur ${colors[type]}`}
      role="note"
      aria-label={`${type} callout`}
    >
      <div className="text-sm leading-relaxed">{children}</div>
    </motion.aside>
  );
}

/** Section wrapper for blog article body - use for paragraphs, headings, lists */
export function BlogSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section variants={itemVariants} className={`space-y-4 ${className ?? ""}`}>
      {children}
    </motion.section>
  );
}

/** Article header for BlogTypography */
export interface BlogTypographyHeader {
  badge: string;
  title: string;
  intro?: string;
  date?: string;
  readTime?: string;
}

export interface BlogTypographyProps {
  header: BlogTypographyHeader;
  children: ReactNode;
  className?: string;
}

/** Article layout with AnimatedLink, ImageCard, Callout sub-components */
export function BlogTypography({ header, children, className }: BlogTypographyProps) {
  return (
    <main className={`relative min-h-screen overflow-hidden bg-background ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="relative px-6 py-12 lg:py-16">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl space-y-8"
          role="article"
          aria-label="Blog article"
        >
          <motion.header variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              {header.badge}
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                {header.title}
              </span>
            </h1>

            {header.intro && <p className="text-lg text-foreground/70">{header.intro}</p>}

            {(header.date ?? header.readTime) && (
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                {header.date && <time dateTime={header.date}>{header.date}</time>}
                {header.date && header.readTime && <span aria-hidden>•</span>}
                {header.readTime && <span>{header.readTime}</span>}
              </div>
            )}
          </motion.header>

          <div className="space-y-8">{children}</div>
        </motion.article>
      </div>
    </main>
  );
}
