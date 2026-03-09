"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BookOpen, ChevronDown, Clock, Quote } from "lucide-react";
import { useState } from "react";
import type {
  NotionCadenceItem,
  NotionGalleryImage,
  NotionToggleSection,
} from "./types";

export interface NotionBlogPageProps {
  heroImage: string;
  heroAlt: string;
  heroBadge: string;
  heroBadgeIcon?: LucideIcon;
  meta?: {
    tag: string;
    tagIcon?: LucideIcon;
    readTime?: string;
    updatedDate?: string;
  };
  title: string;
  description: string;
  articleParagraphs: string[];
  articleImageBlock?: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  articleQuoteBlock?: {
    quote: string;
    attribution?: string;
  };
  toggleSections: NotionToggleSection[];
  sidebar: {
    cadence: NotionCadenceItem[];
    cadenceTitle?: string;
    readingList: string[];
    readingListTitle?: string;
    gallery: NotionGalleryImage[];
  };
  footer: {
    title: string;
    items: string[];
    closingParagraph?: string;
  };
  defaultOpenToggle?: number | null;
  className?: string;
}

export function NotionBlogPage({
  heroImage,
  heroAlt,
  heroBadge,
  heroBadgeIcon: HeroBadgeIcon = BookOpen,
  meta,
  title,
  description,
  articleParagraphs,
  articleImageBlock,
  articleQuoteBlock,
  toggleSections,
  sidebar,
  footer,
  defaultOpenToggle = 0,
  className,
}: NotionBlogPageProps) {
  const [openToggle, setOpenToggle] = useState<number | null>(defaultOpenToggle ?? 0);
  const TagIcon = meta?.tagIcon ?? BookOpen;

  const handleToggle = (index: number) => {
    setOpenToggle((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`w-full bg-muted/30 px-4 py-16 md:py-24 ${className ?? ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/40 bg-background shadow-xl shadow-black/5"
      >
        <div className="relative h-56 w-full bg-linear-to-br from-amber-100 via-white to-slate-100 md:h-64">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <img src={heroImage} alt={heroAlt} className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur"
          >
            <HeroBadgeIcon className="h-4 w-4 text-primary" />
            {heroBadge}
          </motion.div>
        </div>

        <div className="space-y-12 px-6 py-10 md:px-12 md:py-16">
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            {meta && (
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1 font-medium">
                  <TagIcon className="h-4 w-4 text-primary" />
                  {meta.tag}
                </span>
                {meta.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground/70" />
                    {meta.readTime}
                  </div>
                )}
                {meta.updatedDate && <span>Updated {meta.updatedDate}</span>}
              </div>
            )}
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">{title}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          </motion.header>

          <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8 text-base leading-relaxed text-muted-foreground"
            >
              {articleParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              {articleImageBlock && (
                <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/30 p-6 md:flex-row">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-muted md:w-1/2">
                    <img
                      src={articleImageBlock.image}
                      alt={articleImageBlock.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{articleImageBlock.title}</h3>
                    <p className="text-sm text-muted-foreground">{articleImageBlock.description}</p>
                  </div>
                </div>
              )}

              {articleQuoteBlock && (
                <div className="space-y-4 rounded-2xl border-l-4 border-primary/60 bg-primary/5 p-6 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="text-base font-medium text-foreground">{articleQuoteBlock.quote}</p>
                      {articleQuoteBlock.attribution && (
                        <p className="mt-2 text-sm">{articleQuoteBlock.attribution}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {toggleSections.map((section, index) => (
                  <div key={section.title} className="overflow-hidden rounded-xl border border-border/50 bg-background">
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/40"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{section.title}</p>
                        <p className="text-sm text-muted-foreground">{section.summary}</p>
                      </div>
                      <motion.span
                        animate={{ rotate: openToggle === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openToggle === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-4 pb-4"
                        >
                          <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                            {section.content.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                  {sidebar.cadenceTitle ?? "Weekly cadence"}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {sidebar.cadence.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start justify-between gap-4 rounded-lg bg-background/80 px-3 py-2"
                    >
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-right text-muted-foreground/80">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                  {sidebar.readingListTitle ?? "Reading stack"}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {sidebar.readingList.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {sidebar.gallery.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-border/50 bg-background"
                  >
                    <div className="relative h-40 w-full">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    </div>
                    <p className="px-4 py-3 text-sm text-muted-foreground">{image.caption}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>

          <motion.footer
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-6 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6 text-sm text-muted-foreground"
          >
            <h3 className="text-base font-semibold text-foreground">{footer.title}</h3>
            <ul className="space-y-2">
              {footer.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {footer.closingParagraph && <p>{footer.closingParagraph}</p>}
          </motion.footer>
        </div>
      </motion.div>
    </section>
  );
}
