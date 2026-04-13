import type { MetadataRoute } from "next";
import { explainers } from "@/lib/explainers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.eli5ai.co";
  const now = new Date();

  const staticPages = [
    "",
    "/explore",
    "/about",
    "/newsletter",
    "/start-here",
    "/category/ai-basics",
    "/category/ai-tools",
    "/category/ai-workflows",
    "/category/ai-comparisons",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const explainerPages = explainers.map((item) => ({
    url: `${baseUrl}/explain/${item.slug}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...explainerPages];
}
