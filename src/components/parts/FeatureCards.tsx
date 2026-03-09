"use client";

import { Card } from "@/components/ui/card";
import type { FeatureItem } from "@/components/parts/types";
import { motion } from "framer-motion";

export interface FeatureCardsProps {
  title: string;
  description: string;
  features: FeatureItem[];
  className?: string;
}

export function FeatureCards({
  title,
  description,
  features,
  className,
}: FeatureCardsProps) {
  return (
    <section className={`px-6 py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group cursor-pointer border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/[0.08]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
