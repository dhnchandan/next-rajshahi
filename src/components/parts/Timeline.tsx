"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { TimelineEvent } from "@/components/parts/types";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export interface TimelineProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  description: string;
  events: TimelineEvent[];
  futureText?: string;
  className?: string;
}

export function Timeline({
  badge = "Our Journey",
  badgeIcon: BadgeIcon = Calendar,
  title,
  description,
  events,
  futureText = "And the journey continues...",
  className,
}: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className={`w-full bg-background px-4 py-16 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            <BadgeIcon className="mr-1 h-3 w-3" />
            {badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-primary via-primary/50 to-primary/20 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon ?? CheckCircle2;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </motion.div>
                  </div>

                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="relative overflow-hidden border-border/50 bg-card p-4 shadow-lg md:p-6">
                        <div className="relative z-10">
                          <Badge className="mb-3" variant="outline">
                            {event.year}
                          </Badge>
                          <h3 className="mb-2 text-lg font-bold md:text-xl">{event.title}</h3>
                          <p className="text-sm text-muted-foreground md:text-base">
                            {event.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: events.length * 0.2 + 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-primary"
            />
            <span className="text-sm font-medium">{futureText}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
