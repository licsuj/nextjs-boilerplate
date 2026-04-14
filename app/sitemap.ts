import type { MetadataRoute } from "next";

const BASE_URL = "https://www.eli5ai.co";

const EXPLAINERS = [
  "what-is-chatgpt",
  "what-is-an-llm",
  "what-is-a-token-in-ai",
  "what-is-context-window",
  "what-is-prompt-engineering",
  "what-is-an-api",
  "what-is-an-embedding",
  "what-is-a-vector-database",
  "what-is-inference-in-ai",
  "what-is-an-ai-agent",
  "what-is-rag",
  "what-is-mcp",
  "what-is-a-system-prompt",
  "what-is-fine-tuning",
  "what-is-ai-automation",
  "chatgpt-vs-claude",
  "chatgpt-vs-gemini",
  "claude-vs-gemini",
  "ai-agent-vs-chatbot",
  "rag-vs-fine-tuning",
];

const CATEGORIES = [
  "ai-basics",
  "ai-tools",
  "ai-workflows",
  "ai-comparisons",
];

const STATIC_PAGES = [
  "",           // homepage
  "explore",
  "start-here",
  "about",
  "newsletter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics = STATIC_PAGES.map((slug) => ({
    url: slug ? `${BASE_URL}/${slug}` : BASE_URL,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" ? 1.0 : 0.8,
  }));

  const categories = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/category/${cat}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const explainers = EXPLAINERS.map((slug) => ({
    url: `${BASE_URL}/explain/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...statics, ...categories, ...explainers];
}
