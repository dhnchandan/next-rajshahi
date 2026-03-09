"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FaqItem } from "@/components/parts/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

export interface FaqProps {
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  faqs: FaqItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  defaultOpenIndex?: number | null;
  className?: string;
}

export function Faq({
  badge = "FAQ",
  badgeIcon: BadgeIcon = HelpCircle,
  title = "Frequently Asked Questions",
  description = "Have a question? We've got answers. If you don't find what you're looking for, feel free to contact us.",
  faqs,
  ctaTitle = "Still have questions?",
  ctaDescription = "Our team is here to help. Get in touch and we'll respond as soon as possible.",
  primaryCtaText = "Contact Support",
  secondaryCtaText = "View Documentation",
  defaultOpenIndex = 0,
  className,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <section
      className={`w-full bg-linear-to-b from-background to-muted/30 px-4 py-16 md:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-4xl">
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md">
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6"
                  >
                    <span className="pr-4 text-base font-semibold md:text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 p-4 md:p-6">
                          <p className="text-sm text-muted-foreground md:text-base">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center md:mt-16"
        >
          <Card className="border-border/50 bg-linear-to-br from-card to-muted/30 p-6 md:p-8">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold md:text-2xl">{ctaTitle}</h3>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">{ctaDescription}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg">{primaryCtaText}</Button>
              <Button size="lg" variant="outline">
                {secondaryCtaText}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
