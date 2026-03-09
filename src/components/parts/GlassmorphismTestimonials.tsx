"use client";

import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/components/parts/types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface GlassmorphismTestimonialsProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  className?: string;
}

export function GlassmorphismTestimonials({
  title = "Loved by teams everywhere",
  description = "See what our customers have to say",
  testimonials,
  className,
}: GlassmorphismTestimonialsProps) {
  return (
    <section className={`bg-foreground/[0.02] px-6 py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-5 text-center"
        >
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border">
                {(testimonial.rating ?? 0) > 0 && (
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-foreground" />
                    ))}
                  </div>
                )}
                <p className="mb-8 text-base leading-relaxed text-foreground/80">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
