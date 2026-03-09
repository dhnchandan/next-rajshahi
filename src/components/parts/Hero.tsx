"use client";

import { Button } from "@/components/ui/button";
import type { SocialLink } from "@/components/parts/types";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export interface HeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  stats?: { value: string; label: string }[];
  socialLinks?: SocialLink[];
  className?: string;
}

export function Hero({
  badge = "Welcome to the Future",
  badgeIcon: BadgeIcon = Sparkles,
  title,
  titleHighlight,
  description,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Watch Demo",
  stats,
  socialLinks,
  className,
}: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      className={`relative overflow-hidden bg-linear-to-br from-background via-background to-primary/5 px-4 py-20 md:py-32 w-full ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BadgeIcon className="h-4 w-4" />
              {badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group gap-2">
              {primaryButtonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group gap-2">
              <Play className="h-4 w-4" />
              {secondaryButtonText}
            </Button>
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="h-8 w-px bg-border" />}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div>{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {socialLinks && socialLinks.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
