"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { ContactInfoItem, FooterLinkSection, SocialLink } from "@/components/parts/types";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export interface FooterProps {
  linkSections: FooterLinkSection[];
  socialLinks: SocialLink[];
  brandName: string;
  brandTagline?: string;
  description: string;
  contactInfo: ContactInfoItem[];
  newsletterPlaceholder?: string;
  copyright: string;
  version?: string;
  className?: string;
}

export function Footer({
  linkSections,
  socialLinks,
  brandName,
  brandTagline = "Since 2018",
  description,
  contactInfo,
  newsletterPlaceholder = "Enter your email",
  copyright,
  version,
  className,
}: FooterProps) {
  const shouldReduceMotion = useReducedMotion();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      aria-labelledby="footer-heading"
      className={`relative w-full overflow-hidden border-t border-border bg-card/90 backdrop-blur-xl ${className ?? ""}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          animate={
            shouldReduceMotion ? undefined : { opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-flex items-center gap-3"
            >
              <Card className="rounded-2xl border border-border/60 bg-card/80 px-3 py-1 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {brandName}
              </Card>
              {brandTagline && (
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {brandTagline}
                </Badge>
              )}
            </motion.div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground">{description}</p>

            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-foreground">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  className="h-10 rounded-xl border-border/60 bg-background/60 backdrop-blur"
                />
                <Button size="sm" className="h-10 rounded-xl" aria-label="Subscribe">
                  <Mail className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {linkSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold text-foreground/90">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href ?? "#"}
                      whileHover={
                        shouldReduceMotion ? undefined : { x: 5, color: "hsl(var(--primary))" }
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-10 h-px bg-border/70"
        />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-2"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.6 + index * 0.05,
                  }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9 rounded-full border border-border/60 bg-white/5"
                    aria-label={social.label}
                    asChild
                  >
                    <a href={social.href}>
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>{copyright}</span>
            {version && (
              <Badge variant="outline" className="text-xs">
                {version}
              </Badge>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button size="icon" variant="outline" className="h-9 w-9 rounded-full" onClick={scrollToTop}>
              <ArrowUp className="h-4 w-4" aria-hidden />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
