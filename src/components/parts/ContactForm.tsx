"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export interface ContactInfoItemForm {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormProps {
  eyebrow?: string;
  title: string;
  description: string;
  contactInfo?: ContactInfoItemForm[];
  formIntro?: string;
  formIntroDetail?: string;
  onSubmit?: (data: { name: string; email: string; phone: string; message: string }) => void;
  className?: string;
}

export function ContactForm({
  eyebrow = "Contact",
  title,
  description,
  contactInfo = [],
  formIntro = "Tell us about your project",
  formIntroDetail,
  onSubmit,
  className,
}: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "",
    };
    onSubmit?.(data);
  };

  return (
    <section
      className={`relative overflow-hidden bg-background px-6 py-24 sm:px-8 md:py-28 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.03] blur-[130px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-foreground/70">{description}</p>
        </motion.div>

        <Card className="group relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-0 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative grid gap-10 px-6 py-8 md:grid-cols-2 md:px-10 md:py-12"
            aria-label="Contact form"
          >
            <div className="space-y-8 text-left text-foreground/70">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                Response within 24 hours
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{formIntro}</h3>
                {formIntroDetail && (
                  <p className="text-sm text-foreground/70">{formIntroDetail}</p>
                )}
              </div>

              {contactInfo.length > 0 && (
                <div className="grid gap-4 text-sm text-foreground/70">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.label}
                        className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3"
                      >
                        <Icon className="mt-0.5 h-4 w-4 text-foreground/60" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="hover:text-primary">
                              {info.value}
                            </a>
                          ) : (
                            <p>{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Alex Johnson"
                    className="rounded-xl border-border/40 bg-background/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@studio.com"
                      className="pl-10 rounded-xl border-border/40 bg-background/40"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10 rounded-xl border-border/40 bg-background/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Message
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your vision, timeline, and deliverables."
                    className="min-h-[140px] pl-10 rounded-xl border-border/40 bg-background/40"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 rounded-xl"
              >
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.form>
        </Card>
      </div>
    </section>
  );
}
