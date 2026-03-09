"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ProductUpdateItem } from "@/components/parts/types";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Check, Github, Zap } from "lucide-react";

export interface ProductUpdateProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  description: string;
  updates: ProductUpdateItem[];
  footerText?: string;
  footerButtonText?: string;
  changelogButtonText?: string;
  className?: string;
}

const statusStyles: Record<string, string> = {
  shipped: "bg-emerald-400/10 text-emerald-400 border-emerald-400/40",
  beta: "bg-sky-400/10 text-sky-400 border-sky-400/40",
  preview: "bg-amber-400/10 text-amber-400 border-amber-400/40",
};

export function ProductUpdate({
  badge = "product updates",
  badgeIcon: BadgeIcon = Zap,
  title,
  description,
  updates,
  footerText = "synced with github releases",
  footerButtonText = "Subscribe via RSS",
  changelogButtonText = "View changelog",
  className,
}: ProductUpdateProps) {
  return (
    <section className={`relative overflow-hidden px-6 py-24 lg:py-32 ${className ?? ""}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-[380px] w-[380px] rounded-full bg-foreground/[0.03] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-foreground/[0.025] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
          >
            <BadgeIcon className="h-3.5 w-3.5" />
            {badge}
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid gap-4"
        >
          {updates.map((update) => (
            <motion.div
              key={update.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-linear-to-br from-foreground/[0.04] via-transparent to-transparent" />
                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${statusStyles[update.status] ?? ""}`}
                      >
                        {update.status}
                      </span>
                      <span className="hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/50 sm:inline-flex">
                        <Check className="h-3.5 w-3.5" />
                        release notes
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {update.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
                      {update.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="h-11 rounded-full border border-border/40 bg-background/60 px-5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
                  >
                    {changelogButtonText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/40 bg-background/40 px-6 py-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-foreground/60">
            <Github className="h-4 w-4" />
            {footerText}
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-9 rounded-full border-border/40 px-4 text-xs uppercase tracking-[0.2em] text-foreground/60"
          >
            {footerButtonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
