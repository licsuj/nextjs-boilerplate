import type { ExplainerCategory } from "@/lib/explainers";

export type CategoryDefinition = {
  slug: string;
  label: ExplainerCategory;
  title: string;
  description: string;
  intro: string;
  whyMatters: string;
  startHere: string[];
  nextCategories: { title: string; href: string }[];
};

export const categories: Record<string, CategoryDefinition> = {
  "ai-basics": {
    slug: "ai-basics",
    label: "AI Basics",
    title: "AI Basics explained simply",
    description:
      "Learn the core AI terms and concepts in plain English, including ChatGPT, LLMs, tokens, prompts, context windows, and more.",
    intro:
      "This category is the best place to start if you want to understand AI properly. It covers the core terms, concepts, and building blocks that appear again and again in AI tools and conversations.",
    whyMatters:
      "Most people struggle with AI because they jump into tools before understanding the foundations. These pages help you build that base first.",
    startHere: [
      "what-is-chatgpt",
      "what-is-an-llm",
      "what-is-a-token-in-ai",
      "what-is-prompt-engineering",
    ],
    nextCategories: [
      { title: "AI Tools", href: "/category/ai-tools" },
      { title: "AI Workflows", href: "/category/ai-workflows" },
    ],
  },
  "ai-tools": {
    slug: "ai-tools",
    label: "AI Tools",
    title: "AI Tools explained simply",
    description:
      "Understand popular AI tools and technical building blocks in plain English, including APIs, embeddings, vector databases, and more.",
    intro:
      "This category explains the tools, components, and systems people hear about when using or building with AI.",
    whyMatters:
      "People often use AI tools without really understanding what sits underneath them. These explainers help bridge that gap.",
    startHere: [
      "what-is-an-api",
      "what-is-an-embedding",
      "what-is-a-vector-database",
      "what-is-inference-in-ai",
    ],
    nextCategories: [
      { title: "AI Workflows", href: "/category/ai-workflows" },
      { title: "Comparisons", href: "/category/ai-comparisons" },
    ],
  },
  "ai-workflows": {
    slug: "ai-workflows",
    label: "AI Workflows",
    title: "AI Workflows explained simply",
    description:
      "Learn how AI fits into real workflows through simple explanations of RAG, AI agents, automation, MCP, and more.",
    intro:
      "This category focuses on how AI works in practice. Instead of just defining tools, it explains how different pieces come together in useful real-world workflows.",
    whyMatters:
      "This is where AI becomes practical. Once you understand workflows, you start to see how AI can support research, support, writing, automation, and internal systems.",
    startHere: [
      "what-is-rag",
      "what-is-an-ai-agent",
      "what-is-ai-automation",
      "what-is-mcp",
    ],
    nextCategories: [
      { title: "AI Tools", href: "/category/ai-tools" },
      { title: "Comparisons", href: "/category/ai-comparisons" },
    ],
  },
  "ai-comparisons": {
    slug: "ai-comparisons",
    label: "Comparisons",
    title: "AI Comparisons explained simply",
    description:
      "Compare popular AI tools and concepts in plain English so you can understand the differences without hype or jargon.",
    intro:
      "This category helps you compare AI tools and concepts side by side in a way that is simple, practical, and easy to follow.",
    whyMatters:
      "Comparison pages help users choose the right AI tool or understand the difference between similar concepts.",
    startHere: [
      "chatgpt-vs-claude",
      "chatgpt-vs-gemini",
      "claude-vs-gemini",
      "ai-agent-vs-chatbot",
    ],
    nextCategories: [
      { title: "AI Basics", href: "/category/ai-basics" },
      { title: "AI Tools", href: "/category/ai-tools" },
    ],
  },
};

export const categoryList = Object.values(categories);
