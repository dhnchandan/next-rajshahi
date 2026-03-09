"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ServiceItem } from "@/components/parts/types";
import { motion } from "framer-motion";

export interface ServicesGridProps {
  badge?: string;
  title: string;
  description: string;
  services: ServiceItem[];
  ctaText?: string;
  ctaSubtext?: string;
  className?: string;
}

export function ServicesGrid({
  badge = "What We Offer",
  title,
  description,
  services,
  ctaText = "Contact Our Team",
  ctaSubtext = "Need a custom solution?",
  className,
}: ServicesGridProps) {
  return (
    <section className={`w-full bg-background px-4 py-16 md:py-24 ${className ?? ""}`}>
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
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColor = service.bgColor ?? "bg-primary/10";
            const iconColor = service.iconColor ?? "text-primary";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-xl md:p-6">
                  <motion.div
                    className={`absolute inset-0 ${bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`w-fit rounded-xl ${bgColor} p-3`}>
                        <Icon className={`h-6 w-6 ${iconColor} md:h-7 md:w-7`} />
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold md:text-xl">{service.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>

                    {service.features && service.features.length > 0 && (
                      <ul className="mb-4 space-y-1.5">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    <Button variant="ghost" size="sm" className="w-full text-xs md:text-sm">
                      Learn More
                      <span className="ml-2">→</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-sm text-muted-foreground md:text-base">{ctaSubtext}</p>
          <Button size="lg">{ctaText}</Button>
        </motion.div>
      </div>
    </section>
  );
}
