"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";

export interface GlassmorphismHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

export function GlassmorphismHero({
  badge = "Introducing our new platform",
  badgeIcon: BadgeIcon = Sparkles,
  titleLine1,
  titleLine2,
  description,
  primaryButtonText = "Get Started",
  secondaryButtonText = "View Demo",
  className,
}: GlassmorphismHeroProps) {
  return (
    <section
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 ${className ?? ""}`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-foreground/[0.03] blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-foreground/[0.03] blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl space-y-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground/70 backdrop-blur-xl">
          <BadgeIcon className="h-3.5 w-3.5" />
          <span>{badge}</span>
        </div>

        <h1 className="text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
          <span className="block">{titleLine1}</span>
          <span className="mt-4 block">{titleLine2}</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>

        <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
          <Button size="lg" className="group h-12 rounded-full px-8 text-base">
            {primaryButtonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
