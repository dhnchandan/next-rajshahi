"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageSquare } from "lucide-react";

export interface CtaBlockProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryIcon?: LucideIcon;
  secondaryIcon?: LucideIcon;
  footerItems?: { text: string; showPulse?: boolean }[];
  className?: string;
}

export function CtaBlock({
  title,
  description,
  primaryButtonText = "Start a Conversation",
  secondaryButtonText = "View My Work",
  primaryIcon: PrimaryIcon = MessageSquare,
  secondaryIcon: SecondaryIcon = ArrowRight,
  footerItems = [
    { text: "Available for new projects", showPulse: true },
    { text: "Response time: <24 hours", showPulse: false },
  ],
  className,
}: CtaBlockProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-border bg-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative z-10 p-8 text-center md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  {title}
                </h2>

                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  {description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col justify-center gap-4 sm:flex-row"
                >
                  <Button size="lg" className="group w-full gap-2 sm:w-auto">
                    {primaryButtonText}
                    <PrimaryIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                  <Button size="lg" variant="outline" className="group w-full gap-2 sm:w-auto">
                    {secondaryButtonText}
                    <SecondaryIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                {footerItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8"
                  >
                    {footerItems.map((item) => (
                      <div key={item.text} className="flex items-center gap-2">
                        {item.showPulse && (
                          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        )}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
