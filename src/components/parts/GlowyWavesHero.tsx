"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export interface GlowyWavesHeroStat {
  label: string;
  value: string;
}

export interface GlowyWavesHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  pills?: string[];
  stats?: GlowyWavesHeroStat[];
  className?: string;
}

export function GlowyWavesHero({
  badge = "Reactive canvas hero",
  badgeIcon: BadgeIcon = Sparkles,
  title,
  titleHighlight,
  description,
  primaryButtonText = "Launch Studio",
  secondaryButtonText = "Explore stories",
  pills = ["Immersive visuals", "Responsive motion", "GPU friendly"],
  stats = [
    { label: "Live installations", value: "320+" },
    { label: "Latency", value: "8ms" },
    { label: "Teams onboarded", value: "120+" },
  ],
  className,
}: GlowyWavesHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resolveColor = (variables: string[], alpha = 1) => {
      const rootStyles = getComputedStyle(document.documentElement);
      const tempEl = document.createElement("div");
      tempEl.style.position = "absolute";
      tempEl.style.visibility = "hidden";
      tempEl.style.width = "1px";
      tempEl.style.height = "1px";
      document.body.appendChild(tempEl);

      let color = `rgba(255, 255, 255, ${alpha})`;
      for (const variable of variables) {
        const value = rootStyles.getPropertyValue(variable).trim();
        if (value) {
          tempEl.style.backgroundColor = `var(${variable})`;
          const computedColor = getComputedStyle(tempEl).backgroundColor;
          if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
            if (alpha < 1) {
              const rgbMatch = computedColor.match(
                /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
              );
              if (rgbMatch) {
                color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
              } else {
                color = computedColor;
              }
            } else {
              color = computedColor;
            }
            break;
          }
        }
      }
      document.body.removeChild(tempEl);
      return color;
    };

    let themeColors = {
      backgroundTop: resolveColor(["--background"], 1),
      backgroundBottom: resolveColor(["--muted", "--background"], 0.95),
      stroke: resolveColor(["--primary"], 0.3),
    };

    const updateTheme = () => {
      themeColors = {
        backgroundTop: resolveColor(["--background"], 1),
        backgroundBottom: resolveColor(["--muted", "--background"], 0.95),
        stroke: resolveColor(["--primary"], 0.3),
      };
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 1;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop);
      gradient.addColorStop(1, themeColors.backgroundBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = themeColors.stroke;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.003 + time * 0.002) * 70 +
          Math.sin(x * 0.0012 + time * 0.003) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  return (
    <section
      className={`relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background ${className ?? ""}`}
      role="region"
      aria-label="Glowing waves hero section"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            <BadgeIcon className="h-4 w-4 text-primary" />
            {badge}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="bg-linear-to-r from-primary via-primary/60 to-foreground/80 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-3xl text-lg md:text-2xl">
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group gap-2 rounded-full px-8 text-base uppercase tracking-[0.2em]">
              {primaryButtonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border/40 bg-background/60 px-8 text-base backdrop-blur"
            >
              {secondaryButtonText}
            </Button>
          </motion.div>

          {pills.length > 0 && (
            <motion.ul
              variants={itemVariants}
              className="mb-12 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em]"
            >
              {pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur"
                >
                  {pill}
                </li>
              ))}
            </motion.ul>
          )}

          {stats.length > 0 && (
            <motion.div
              variants={statsVariants}
              className="grid gap-4 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="space-y-1">
                  <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-semibold text-foreground">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
