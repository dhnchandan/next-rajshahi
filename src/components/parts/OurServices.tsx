"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ServiceItem } from "@/components/parts/types";
import { motion } from "framer-motion";

export interface OurServicesProps {
  badge?: string;
  title: string;
  description: string;
  services: (ServiceItem & { badge?: string })[];
  learnMoreText?: string;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function OurServices({
  badge = "Our Services",
  title,
  description,
  services,
  learnMoreText = "Learn More",
  className,
}: OurServicesProps) {
  return (
    <section className={`bg-background px-4 py-20 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4">{badge}</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group relative h-full border-2 p-6 transition-all hover:border-primary hover:shadow-xl">
                  {service.badge && (
                    <Badge className="absolute -right-2 -top-2">{service.badge}</Badge>
                  )}
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <Button variant="ghost" size="sm" className="group/btn">
                    {learnMoreText}
                    <motion.span className="ml-1 inline-block" whileHover={{ x: 5 }}>
                      →
                    </motion.span>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
