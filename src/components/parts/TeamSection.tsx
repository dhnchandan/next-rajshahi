"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { TeamMember } from "@/components/parts/types";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Sparkles, Twitter } from "lucide-react";
import { useState } from "react";

export interface TeamSectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  members: TeamMember[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  className?: string;
}

const socialIcons = [
  { key: "twitter", icon: Twitter, label: "Twitter" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "github", icon: Github, label: "GitHub" },
  { key: "email", icon: Mail, label: "Email" },
] as const;

function TeamMemberCard({
  member,
  variants,
}: {
  member: TeamMember;
  variants: { hidden: object; visible: object };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const gradient = member.gradient ?? "from-white/10 via-white/5 to-transparent";

  return (
    <motion.div variants={variants} className="perspective-1000">
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative"
      >
        <Card className="relative overflow-hidden rounded-3xl border border-border/60 bg-card backdrop-blur-xl">
          <div className="relative z-10 p-6">
            <div className="mb-4 flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border/60 bg-card/80 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <h3 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
                {member.name}
              </h3>
              <Badge
                variant="secondary"
                className="mb-2 bg-white/10 text-xs uppercase tracking-[0.28em] backdrop-blur"
              >
                {member.role}
              </Badge>

              <div className="mb-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{member.location}</span>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>

              <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border/60 bg-white/5 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-center gap-2">
                {socialIcons.map(({ key, icon: Icon, label }) => {
                  const href =
                    key === "email"
                      ? member.social.email
                        ? `mailto:${member.social.email}`
                        : undefined
                      : member.social[key];
                  if (!href) return null;
                  return (
                    <Button
                      key={key}
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-border/40 bg-white/5"
                      aria-label={label}
                      asChild
                    >
                      <a href={href}>
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function TeamSection({
  badge = "Our Dream Team",
  title = "Meet the people behind",
  titleHighlight = "our success",
  description,
  members,
  ctaTitle = "Join Our Amazing Team",
  ctaDescription = "We're always looking for talented people to join our mission",
  ctaButtonText = "View Open Positions",
  className,
}: TeamSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] as const },
    },
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-10 ${className ?? ""}`}
      aria-labelledby="team-section-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-6 gap-2 bg-white/10 backdrop-blur" variant="secondary">
            <Sparkles className="h-3 w-3" />
            {badge}
          </Badge>

          <h2
            id="team-section-heading"
            className="mb-6 text-5xl font-semibold tracking-tight md:text-6xl"
          >
            {title}
            <br />
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="inline-flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card/80 px-10 py-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">{ctaTitle}</h3>
            <p className="max-w-xl text-sm text-muted-foreground">{ctaDescription}</p>
            <Button size="lg" className="rounded-full">
              {ctaButtonText}
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
