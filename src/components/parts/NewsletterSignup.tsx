"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Check, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export interface NewsletterSignupProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title?: string;
  description?: string;
  features?: string[];
  placeholder?: string;
  submitText?: string;
  successTitle?: string;
  successMessage?: string;
  privacyText?: string;
  trustText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export function NewsletterSignup({
  badge = "Stay Updated",
  badgeIcon: BadgeIcon = Sparkles,
  title = "Join our newsletter",
  description = "Get the latest updates, articles, and resources delivered directly to your inbox every week. No spam, unsubscribe anytime.",
  features = ["Weekly updates", "Exclusive content", "Early access"],
  placeholder = "Enter your email",
  submitText = "Subscribe",
  successTitle = "You're all set!",
  successMessage = "Check your inbox to confirm your subscription",
  privacyText = "By subscribing, you agree to our Privacy Policy",
  trustText,
  onSubmit,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit?.(email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      className={`relative w-full overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 px-4 py-16 ${className ?? ""}`}
    >
      <div className="relative mx-auto max-w-4xl">
        <Card className="overflow-hidden border-border/50 bg-card/50 shadow-xl backdrop-blur-sm">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <Badge className="mb-4 w-fit" variant="secondary">
                <BadgeIcon className="mr-1 h-3 w-3" />
                {badge}
              </Badge>

              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
              <p className="mb-6 text-muted-foreground">{description}</p>

              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Badge variant="outline" className="gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      {feature}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder={placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={!email}>
                      <span>{submitText}</span>
                      <Send className="ml-2 h-4 w-4" />
                    </Button>

                    {privacyText && (
                      <p className="text-center text-xs text-muted-foreground">{privacyText}</p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center space-y-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                    >
                      <Check className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="mb-2 text-xl font-semibold">{successTitle}</h3>
                      <p className="text-sm text-muted-foreground">{successMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Card>

        {trustText && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            {trustText}
          </motion.p>
        )}
      </div>
    </section>
  );
}
