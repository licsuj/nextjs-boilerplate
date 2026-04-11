import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore AI topics | ELI5AI.co",
  description:
    "Browse simple AI explanations covering ChatGPT, AI agents, prompts, RAG, APIs, automation, and more.",
  alternates: {
    canonical: "https://eli5ai.co/explore",
  },
};

const explainers = [
  { title: "What is ChatGPT?", href: "/explain/what-is-chatgpt", category: "AI Basics" },
  { title: "What is an AI agent?", href: "/explain/what-is-an-ai-agent", category: "AI Basics" },
  { title: "What is RAG?", href: "/explain/what-is-rag", category: "AI Workflows" },
  { title: "What is prompt engineering?", href: "/explain/what-is-prompt-engineering", category: "AI Basics" },
  { title: "What is an API?", href: "/explain/what-is-an-api", category: "AI Tools" },
  { title: "What is an LLM?", href: "/explain/what-is-an-llm", category: "AI Basics" },
  { title: "What is a token in AI?", href: "/explain/what-is-a-token-in-ai", category: "AI Basics" },
  { title: "ChatGPT vs Claude", href: "/explain/chatgpt-vs-claude", category: "Comparisons" },
  { title: "ChatGPT vs Gemini", href: "/explain/chatgpt-vs-gemini", category: "Comparisons" },
  { title: "What is MCP?", href: "/explain/what-is-mcp", category: "AI Workflows" },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Explore</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Browse AI explainers
          </h1>
          <p className="mt-4 max-w-2xl text-white/65">
            Start with the basics, then move into tools, workflows, and comparisons.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {explainers.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {item.category}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h2>
              <div className="mt-5 text-sm font-semibold text-cyan-300">Read explanation →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
