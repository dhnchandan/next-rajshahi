"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactInfoItem } from "@/components/parts/types";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export interface WorkingHoursItem {
  days: string;
  hours: string;
}

export interface ContactProps {
  title: string;
  description: string;
  contactInfo: ContactInfoItem[];
  workingHours?: WorkingHoursItem[];
  workingHoursTitle?: string;
  submitButtonText?: string;
  className?: string;
}

export function Contact({
  title,
  description,
  contactInfo,
  workingHours = [],
  workingHoursTitle = "Working Hours",
  submitButtonText = "Send Message",
  className,
}: ContactProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-background px-4 py-12 sm:py-16 md:py-20 lg:py-24 ${className ?? ""}`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-50" />
              <form className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can I help you?" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none bg-background/50"
                  />
                </div>
                <Button type="submit" className="w-full gap-2 text-base">
                  {submitButtonText}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <Card className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 transition-all hover:border-foreground/20 hover:shadow-md hover:-translate-y-1 backdrop-blur-sm sm:p-6">
                      <a
                        href={info.href ?? "#"}
                        className="relative z-10 flex items-center gap-4"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">{info.label}</h3>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {workingHours.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Card className="rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {workingHoursTitle}
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
                    {workingHours.map((item, i) => (
                      <div
                        key={i}
                        className={`flex justify-between ${i < workingHours.length - 1 ? "border-b border-border/40 pb-2" : "pt-1"}`}
                      >
                        <span>{item.days}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
