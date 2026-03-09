"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Sparkles } from "lucide-react";
import type {
  BentoCard,
  BentoCaseStudyCard,
  BentoGalleryCard,
  BentoImageCard,
  BentoMetricsCard,
  BentoProcessCard,
  BentoShowcaseCard,
} from "./types";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const gridVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export interface BentoGridProps {
  badge?: string;
  title: string;
  description: string;
  cards: BentoCard[];
  className?: string;
}

function CaseStudyCard({ card }: { card: BentoCaseStudyCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative col-span-1 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:row-span-2"
      role="article"
    >
      <div className="absolute inset-0 bg-linear-to-br from-foreground/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit rounded-full border-border/40 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
            {card.badge}
          </Badge>
          <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">{card.title}</h3>
          <p className="text-sm text-foreground/70 md:text-base">{card.description}</p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex -space-x-3" role="list" aria-label="Project team avatars">
            {card.avatars.map((profile) => (
              <div
                key={profile.src}
                role="listitem"
                className="relative h-11 w-11 overflow-hidden rounded-full border border-border/50 bg-background/80 transition-transform duration-300 group-hover:scale-[1.04]"
              >
                <img src={profile.src} alt={profile.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <Button variant="ghost" className="group/cta gap-2 rounded-lg bg-background/70 px-4 py-2 text-sm text-foreground hover:bg-background/80">
            {card.ctaText}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function MetricsCard({ card }: { card: BentoMetricsCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2"
      role="article"
    >
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
          {card.badge}
        </Badge>
        <motion.div animate={{ rotate: [0, -6, 0, 6, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}>
          <Sparkles className="h-5 w-5 text-primary" aria-hidden />
        </motion.div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {card.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{metric.value}</p>
            <p className="mt-1 inline-flex items-center gap-2 px-2 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">{metric.caption}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function ImageOverlayCard({ card }: { card: BentoImageCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative col-span-1 overflow-hidden rounded-2xl border border-border/40 bg-background/70 backdrop-blur hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:row-span-3"
      role="article"
    >
      <div className="absolute inset-0">
        <img src={card.image} alt={card.imageAlt} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="relative flex h-full flex-col justify-end space-y-4 p-6 md:p-8">
        <Badge variant="outline" className="w-fit rounded-full border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
          {card.badge}
        </Badge>
        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{card.title}</h3>
        <p className="max-w-sm text-sm text-foreground/70 md:text-base">{card.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {card.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border/40 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProcessCard({ card }: { card: BentoProcessCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2 lg:row-span-2"
      role="article"
    >
      <div className="space-y-4">
        <Badge variant="outline" className="w-fit rounded-full border-primary/50 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
          {card.badge}
        </Badge>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
        <p className="text-sm text-foreground/70 md:text-base">{card.description}</p>
      </div>
      <div className="mt-6 space-y-4">
        {card.steps.map((step, index) => (
          <div key={step.label} className="space-y-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-foreground/60">
              <span>{step.label}</span>
              <span aria-label={`${step.progress}% complete`}>{step.progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${step.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const, delay: index * 0.1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="mt-8 w-fit gap-2 px-0 text-sm text-primary hover:text-primary/90" aria-label="Play walkthrough video">
        <PlayCircle className="h-4 w-4" aria-hidden />
        {card.playText}
      </Button>
    </motion.article>
  );
}

function ShowcaseCard({ card }: { card: BentoShowcaseCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group col-span-1 flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-linear-to-br from-primary/15 via-background/70 to-background/90 p-0 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2"
      role="article"
    >
      <div className="relative h-full">
        <img src={card.image} alt={card.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40" />
        <div className="relative flex h-full flex-col justify-between bg-linear-to-br from-background/90 via-background/70 to-transparent p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="w-fit rounded-full border-border/50 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
                {card.badge}
              </Badge>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }} className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
                <PlayCircle className="h-4 w-4 text-primary" aria-hidden />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{card.title}</h3>
            <p className="max-w-md text-sm text-foreground/70 md:text-base">{card.description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 text-xs text-foreground/60">
            <div className="flex flex-wrap gap-2">
              {card.stats.map((stat) => (
                <span key={stat} className="rounded-full bg-background/80 px-3 py-1 uppercase tracking-[0.18em]">
                  {stat}
                </span>
              ))}
            </div>
            <Button size="sm" className="gap-2">
              {card.watchText}
              <PlayCircle className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function GalleryCard({ card }: { card: BentoGalleryCard }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group col-span-1 flex h-full flex-col rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg sm:col-span-2"
      role="article"
    >
      <div className="space-y-3">
        <Badge variant="outline" className="w-fit rounded-full border-border/50 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/60">
          {card.badge}
        </Badge>
        <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">{card.title}</h3>
        <p className="text-sm text-foreground/70 md:text-base">{card.description}</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {card.images.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/30 bg-background/60">
            <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ))}
      </div>
      <Button variant="ghost" className="mt-6 w-fit gap-2 px-0 text-sm text-primary hover:text-primary/90" aria-label="Open inspiration archive">
        {card.archiveText}
        <ArrowUpRight className="h-4" aria-hidden />
      </Button>
    </motion.article>
  );
}

function BentoCardItem({ card }: { card: BentoCard }) {
  switch (card.type) {
    case "case-study":
      return <CaseStudyCard card={card} />;
    case "metrics":
      return <MetricsCard card={card} />;
    case "image-overlay":
      return <ImageOverlayCard card={card} />;
    case "process":
      return <ProcessCard card={card} />;
    case "showcase":
      return <ShowcaseCard card={card} />;
    case "gallery":
      return <GalleryCard card={card} />;
  }
}

export function BentoGrid({
  badge = "UI TripleD",
  title = "Bento storytelling built for modern motion systems",
  description = "Pair narrative, metrics, and cinematic visuals inside a responsive layout designed around Framer Motion micro-interactions and accessible navigation.",
  cards,
  className,
}: BentoGridProps) {
  return (
    <section className={`relative w-full overflow-hidden bg-background ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.035] blur-[120px]" />
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-foreground/[0.02] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant="outline" className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
            {badge}
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-2xl text-base text-foreground/70 md:text-lg">{description}</p>
        </motion.header>

        <motion.div
          className="mt-12 grid auto-rows-[minmax(200px,auto)] gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
        >
          {cards.map((card, index) => (
            <BentoCardItem key={index} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
