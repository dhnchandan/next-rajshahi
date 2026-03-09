"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NewsItem } from "@/components/parts/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Clock,
  Filter,
  MessageSquare,
  MoreHorizontal,
  Newspaper,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export interface NewsFeedProps {
  title?: string;
  description?: string;
  items: NewsItem[];
  categories: string[];
  searchPlaceholder?: string;
  emptyMessage?: string;
  loadMoreText?: string;
  className?: string;
}

export function NewsFeed({
  title = "Latest Updates",
  description = "Stay informed with the most recent news and insights.",
  items,
  categories,
  searchPlaceholder = "Search news...",
  emptyMessage = "No news found matching your criteria.",
  loadMoreText = "Load More Stories",
  className,
}: NewsFeedProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`w-full mx-auto space-y-8 min-h-[600px] ${className ?? ""}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              className="pl-9 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-5 backdrop-blur-sm hover:border-border/60 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-border/50">
                        <AvatarImage src={item.author.avatar} alt={item.author.name} />
                        <AvatarFallback>{item.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-xs font-medium text-foreground">{item.author.name}</span>
                        <span className="block text-[10px] text-muted-foreground">{item.author.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.trending && (
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 text-[10px]">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.publishedAt}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="shrink-0 text-[10px]">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/30">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                        <MessageSquare className="h-3.5 w-3.5" />
                        {item.comments}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                        <Share2 className="h-3.5 w-3.5" />
                        Share
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{item.readTime}</span>
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-full">
                        <Bookmark className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-full">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-3"
            >
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">{emptyMessage}</p>
              <Button
                variant="link"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {filteredItems.length > 0 && (
        <div className="flex justify-center pt-4">
          <Button variant="ghost" className="gap-2 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
            {loadMoreText}
          </Button>
        </div>
      )}
    </div>
  );
}
