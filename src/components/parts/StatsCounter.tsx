"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { StatItem } from "@/components/parts/types";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface StatsCounterProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  stats: StatItem[];
  quote?: { text: string; author: string };
  className?: string;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter({
  badge = "Our Impact",
  title,
  titleHighlight = "For Themselves",
  description,
  stats,
  quote,
  className,
}: StatsCounterProps) {
  return (
    <section
      className={`w-full bg-linear-to-b from-background to-primary/5 px-4 py-16 md:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            {badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const bgColor = stat.bgColor ?? "bg-blue-500/10";
            const iconColor = stat.iconColor ?? "text-blue-500";

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-2xl md:p-8">
                  <motion.div
                    className={`absolute inset-0 ${bgColor} opacity-50`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${bgColor} opacity-50 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`w-fit rounded-xl ${bgColor} p-3`}>
                        <Icon className={`h-6 w-6 ${iconColor} md:h-8 md:w-8`} />
                      </div>
                    </div>

                    <motion.div
                      className="mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </motion.div>

                    <h3 className="mb-1 text-base font-semibold md:text-lg">{stat.label}</h3>

                    <p className="text-xs text-muted-foreground md:text-sm">{stat.description}</p>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${iconColor.replace("text-", "bg-")}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 text-center md:mt-16"
          >
            <blockquote className="mx-auto max-w-2xl">
              <p className="mb-4 text-lg font-medium italic text-muted-foreground md:text-xl">
                &quot;{quote.text}&quot;
              </p>
              <footer className="text-sm font-semibold">- {quote.author}</footer>
            </blockquote>
          </motion.div>
        )}
      </div>
    </section>
  );
}
