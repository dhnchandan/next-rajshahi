"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Infinity } from "lucide-react";

export interface LogoShowcaseProps {
  badge?: string;
  title: string;
  description: string;
  logos: { name: string; src: string }[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

const partnerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function LogoShowcase({
  badge = "partners trustline",
  title,
  description,
  logos,
  primaryButtonText = "Add your brand",
  secondaryButtonText = "Download kit",
  className,
}: LogoShowcaseProps) {
  return (
    <section className={`relative overflow-hidden px-6 py-24 lg:py-32 ${className ?? ""}`}>
      <div className="mx-auto grid">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-linear-to-br from-foreground/[0.05] via-transparent to-transparent" />
          <div className="relative space-y-8">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
            >
              <Infinity className="h-3.5 w-3.5" />
              {badge}
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {description}
            </p>
            <motion.div
              variants={partnerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 justify-center items-center"
            >
              {logos.map((logo) => (
                <motion.div key={logo.name} variants={partnerVariants}>
                  <div className="relative flex h-21 w-21 items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="object-contain opacity-60 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em]">
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-sm uppercase tracking-[0.2em] text-foreground/80"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
