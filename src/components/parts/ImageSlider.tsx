"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { SliderSlide } from "@/components/parts/types";

export interface ImageSliderProps {
  slides: SliderSlide[];
  ariaLabel?: string;
  className?: string;
}

export function ImageSlider({
  slides,
  ariaLabel = "Image carousel",
  className,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const headingId = `slider-heading-${Math.random().toString(36).slice(2)}`;
  const descriptionId = `slider-desc-${Math.random().toString(36).slice(2)}`;

  const imageVariants = useMemo((): Variants => {
    if (shouldReduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      enter: { opacity: 0, scale: 0.98 },
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    };
  }, [shouldReduceMotion]);

  const slideCount = slides.length;

  const paginate = (direction: number) => {
    setCurrentIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return slideCount - 1;
      if (next >= slideCount) return 0;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        paginate(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        paginate(1);
        break;
      case "Home":
        e.preventDefault();
        goToSlide(0);
        break;
      case "End":
        e.preventDefault();
        goToSlide(slideCount - 1);
        break;
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      className={`rounded-2xl w-full max-w-3xl bg-card border border-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      aria-live="polite"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-96 bg-muted overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {currentSlide && (
            <motion.img
              key={currentIndex}
              src={currentSlide.image}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: "easeInOut",
              }}
              className="absolute w-full h-full object-cover"
              alt={currentSlide.title}
              aria-describedby={descriptionId}
              aria-labelledby={headingId}
            />
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border flex items-center justify-center hover:bg-muted rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border flex items-center justify-center hover:bg-muted rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <span className="sr-only" role="status">
          Slide {currentIndex + 1} of {slideCount}
        </span>
      </div>

      <div className="p-8 border-t border-border" role="tablist">
        <AnimatePresence mode="wait" initial={false}>
          {currentSlide && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              role="tabpanel"
            >
              <h2
                id={headingId}
                className="text-2xl font-semibold text-foreground mb-2"
              >
                {currentSlide.title}
              </h2>
              <p
                id={descriptionId}
                className="text-muted-foreground leading-relaxed"
              >
                {currentSlide.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-6">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-full h-1.5 transition-all duration-300 ${
                  isActive ? "w-8 bg-primary" : "w-1.5 bg-muted hover:bg-muted/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
