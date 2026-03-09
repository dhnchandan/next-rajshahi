"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { GalleryImage } from "@/components/parts/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export interface GalleryGridProps {
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  images: GalleryImage[];
  categories?: string[];
  className?: string;
}

export function GalleryGrid({
  badge = "Gallery",
  badgeIcon: BadgeIcon = Grid,
  title,
  description,
  images,
  categories,
  className,
}: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const allCategories = categories ?? [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const selectedImage = images.find((img) => img.id === selectedId);
  const selectedIndex = selectedId != null ? images.findIndex((img) => img.id === selectedId) : -1;

  const handleNext = () => {
    if (selectedIndex >= 0 && selectedIndex < images.length - 1) {
      setSelectedId(images[selectedIndex + 1].id);
    } else if (selectedIndex === images.length - 1) {
      setSelectedId(images[0].id);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedId(images[selectedIndex - 1].id);
    } else if (selectedIndex === 0) {
      setSelectedId(images[images.length - 1].id);
    }
  };

  return (
    <section
      className={`w-full bg-background px-4 py-16 ${className ?? ""}`}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            <BadgeIcon className="mr-1 h-3 w-3" />
            {badge}
          </Badge>
          <h2 id="gallery-heading" className="mb-4 text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {allCategories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  className="group relative cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-xl"
                  onClick={() => setSelectedId(image.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(image.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.title}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                      <ZoomIn className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h3 className="mb-1 text-center text-lg font-semibold text-muted-foreground">
                        {image.title}
                      </h3>
                      <Badge variant="secondary">{image.category}</Badge>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedId(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-12 top-0 text-muted-foreground hover:bg-white/10"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto rounded-lg"
                />
                <div className="mt-4 text-center text-muted-foreground">
                  <h3 className="mb-2 text-xl font-semibold">{selectedImage.title}</h3>
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
