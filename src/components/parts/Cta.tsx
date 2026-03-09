"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface CtaProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

export function Cta({
  title,
  description,
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Contact Sales",
  className,
}: CtaProps) {
  return (
    <section className={`px-6 py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <Card className="relative overflow-hidden border border-border/50 bg-background/50 p-16 text-center backdrop-blur-xl md:p-24">
          <div className="absolute inset-0 bg-linear-to-br from-foreground/[0.02] to-transparent" />
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-foreground/[0.03] blur-3xl" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
            <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-8 text-base">
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
