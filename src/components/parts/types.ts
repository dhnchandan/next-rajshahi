import type { LucideIcon } from "lucide-react";

/** Footer link section */
export interface FooterLinkSection {
  title: string;
  links: { label: string; href?: string }[];
}

/** Social link with icon */
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  handle?: string;
  href: string;
}

/** Contact info item */
export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

/** Timeline event */
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

/** Metric item for stats/metrics blocks */
export interface MetricItem {
  label: string;
  value: string;
  delta?: string;
  description?: string;
}

/** Portfolio highlight */
export interface PortfolioHighlight {
  title: string;
  description: string;
}

/** Launch timeline step */
export interface LaunchTimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
  time: string;
}

/** Stat with counter animation */
export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
}

/** Feature card */
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Service item with optional badge */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  features?: string[];
  iconColor?: string;
  bgColor?: string;
}

/** Testimonial */
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating?: number;
  avatar?: string;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Team member */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  skills: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
  /** Optional gradient class for card overlay (e.g. "from-white/10 via-white/5 to-transparent") */
  gradient?: string;
}

/** Project card data */
export interface ProjectCardData {
  title: string;
  description: string;
  tags?: string[];
  image: string;
  links?: { demo?: string; github?: string };
}

/** Blog card data */
export interface BlogCardData {
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar: string };
  date: string;
  readTime?: string;
  tags?: string[];
}

/** Gallery image */
export interface GalleryImage {
  id: string | number;
  url: string;
  title: string;
  category: string;
}

/** Slider slide */
export interface SliderSlide {
  id: string | number;
  image: string;
  title: string;
  description: string;
}

/** Product update item */
export interface ProductUpdateItem {
  title: string;
  description: string;
  status: "shipped" | "beta" | "preview";
}

/** News feed item */
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: { name: string; avatar: string; role: string };
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: number;
  trending?: boolean;
  image?: string;
}

/** Bento grid metric */
export interface BentoMetric {
  label: string;
  value: string;
  caption: string;
}

/** Bento grid process step */
export interface BentoProcessStep {
  label: string;
  progress: number;
}

/** Bento grid card - case study variant */
export interface BentoCaseStudyCard {
  type: "case-study";
  badge: string;
  title: string;
  description: string;
  avatars: { src: string; alt: string }[];
  ctaText: string;
}

/** Bento grid card - metrics variant */
export interface BentoMetricsCard {
  type: "metrics";
  badge: string;
  metrics: BentoMetric[];
}

/** Bento grid card - image overlay variant */
export interface BentoImageCard {
  type: "image-overlay";
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

/** Bento grid card - process variant */
export interface BentoProcessCard {
  type: "process";
  badge: string;
  title: string;
  description: string;
  steps: BentoProcessStep[];
  playText: string;
}

/** Bento grid card - showcase video variant */
export interface BentoShowcaseCard {
  type: "showcase";
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  stats: string[];
  watchText: string;
}

/** Bento grid card - gallery variant */
export interface BentoGalleryCard {
  type: "gallery";
  badge: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  archiveText: string;
}

export type BentoCard =
  | BentoCaseStudyCard
  | BentoMetricsCard
  | BentoImageCard
  | BentoProcessCard
  | BentoShowcaseCard
  | BentoGalleryCard;

/** Notion blog page - toggle section */
export interface NotionToggleSection {
  title: string;
  summary: string;
  content: string[];
}

/** Notion blog page - cadence item */
export interface NotionCadenceItem {
  label: string;
  detail: string;
}

/** Notion blog page - mini gallery image */
export interface NotionGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

/** Notion blog page - image block in article */
export interface NotionImageBlock {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

/** Notion blog page - quote block */
export interface NotionQuoteBlock {
  quote: string;
  attribution?: string;
}

/** Log entry for logs table */
export interface LogEntry {
  id: string;
  timestamp: string;
  level: "info" | "warning" | "error";
  service: string;
  message: string;
  duration: string;
  status: string;
  tags: string[];
}
