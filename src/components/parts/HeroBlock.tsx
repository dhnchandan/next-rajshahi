"use client";

import { Button } from "@/components/ui/button";
import type { SocialLink } from "@/components/parts/types";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export interface HeroBlockProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  socialLinks?: SocialLink[];
  avatarSrc?: string;
  showScrollIndicator?: boolean;
  className?: string;
}

export function HeroBlock({
  title,
  description,
  primaryButtonText = "Get in Touch",
  secondaryButtonText = "View Projects",
  socialLinks,
  avatarSrc,
  showScrollIndicator = true,
  className,
}: HeroBlockProps) {
  return (
    <section
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-background w-full ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt=""
                className="mx-auto h-24 w-24 rounded-full border-4 border-background object-cover shadow-lg"
              />
            ) : (
              <div className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-linear-to-br from-primary to-muted shadow-lg" />
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="gap-2">
              {primaryButtonText}
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              {secondaryButtonText}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          {socialLinks && socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>

      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      )}
    </section>
  );
}
