"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { LaunchTimelineStep } from "@/components/parts/types";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CalendarDays } from "lucide-react";

export interface LaunchTimelineProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  description: string;
  steps: LaunchTimelineStep[];
  ctaText?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" as const, duration: 0.55 },
  },
};

export function LaunchTimeline({
  badge = "launch timeline",
  badgeIcon: BadgeIcon = CalendarDays,
  title,
  description,
  steps,
  ctaText = "Book a session",
  className,
}: LaunchTimelineProps) {
  return (
    <section className={`relative overflow-hidden px-6 py-24 lg:py-32 ${className ?? ""}`}>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-linear-to-br from-foreground/[0.04] via-transparent to-transparent" />
          <div className="relative">
            <Badge
              variant="outline"
              className="mb-6 inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <BadgeIcon className="h-3.5 w-3.5" />
              {badge}
            </Badge>

            <div className="space-y-5">
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                {description}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-sm uppercase tracking-[0.2em]"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative flex flex-col gap-4"
        >
          <div className="pointer-events-none absolute left-[22px] top-4 bottom-4 hidden w-px bg-linear-to-b from-foreground/10 via-foreground/5 to-transparent lg:block" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border/70"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/40 bg-background/70 text-foreground/80">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-border/40 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
                        {step.time}
                      </span>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
