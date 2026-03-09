"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Play, Sparkles, Zap } from "lucide-react";

export interface CtaHeroStats {
  label: string;
  value: string;
}

export interface CtaHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  description: string;
  emailPlaceholder?: string;
  primaryButtonText?: string;
  benefits?: string[];
  stats?: CtaHeroStats[];
  socialProofCount?: string;
  socialProofLabel?: string;
  onEmailSubmit?: (email: string) => void;
  className?: string;
}

export function CtaHero({
  badge = "Limited Time Offer",
  badgeIcon: BadgeIcon = Sparkles,
  title,
  titleHighlight = "Today",
  description,
  emailPlaceholder = "Enter your email",
  primaryButtonText = "Get Started",
  benefits = ["No credit card required", "Cancel anytime", "Free 14-day trial"],
  stats = [
    { label: "Users", value: "50K+" },
    { label: "Rating", value: "4.9★" },
    { label: "Countries", value: "120+" },
  ],
  socialProofCount = "10,000+",
  socialProofLabel = "happy customers",
  onEmailSubmit,
  className,
}: CtaHeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
    if (email) onEmailSubmit?.(email);
  };

  return (
    <section
      className={`relative w-full overflow-hidden bg-linear-to-b from-primary/5 via-background to-background px-4 py-16 md:py-24 lg:py-32 ${className ?? ""}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl md:h-[600px] md:w-[600px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl md:h-[600px] md:w-[600px]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 md:mb-6" variant="secondary">
              <BadgeIcon className="mr-1 h-3 w-3" />
              {badge}
            </Badge>

            <motion.h1
              className="mb-4 text-4xl font-bold tracking-tight md:mb-6 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title}{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 flex flex-col gap-3 sm:flex-row md:mb-8"
            >
              <Input
                name="email"
                type="email"
                placeholder={emailPlaceholder}
                className="h-12 flex-1 md:h-14"
                required
              />
              <Button type="submit" size="lg" className="h-12 md:h-14">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>

            {benefits.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 md:gap-6"
              >
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground md:text-base">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4 md:mt-12"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{socialProofCount}</span>
                <span className="text-muted-foreground"> {socialProofLabel}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <Card className="relative w-full max-w-lg overflow-hidden border-border/50 p-4 shadow-2xl md:p-6">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-linear-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/10 to-purple-500/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg md:h-20 md:w-20">
                    <Play className="ml-1 h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
                  </div>
                </div>
                <motion.div
                  className="absolute right-4 top-4 rounded-lg bg-background/80 p-2 shadow-lg backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="h-4 w-4 text-primary md:h-5 md:w-5" />
                </motion.div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-muted/50 p-2 text-center backdrop-blur-sm md:p-3"
                  >
                    <div className="text-base font-bold md:text-lg">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
