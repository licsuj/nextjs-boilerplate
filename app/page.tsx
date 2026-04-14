import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { explainers } from "@/lib/explainers";
import { categoryList } from "@/lib/categories";

export const metadata: Metadata = {
  title: "ELI5AI.co | AI explained simply",
  description:
    "Learn AI in plain English. Simple explanations of ChatGPT, AI agents, RAG, prompts, APIs, automation, and more.",
  alternates: {
    canonical: "https://www.eli5ai.co",
  },
};

const featuredSlugs = [
  "what-is-chatgpt",
  "what-is-an-ai-agent",
  "what-is-rag",
  "what-is-prompt-engineering",
];

const featuredExplainers = featuredSlugs
  .map((slug) => explainers.find((item) => item.slug === slug))
  .filter((item): item is (typeof explainers)[number] => Boolean(item));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Understand AI without jargon
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            Plain-English AI explanations for beginners and curious professionals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start-here"
              className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950"
            >
              Start learning AI
            </Link>
            <Link
              href="/explore"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white"
            >
              Explore all topics
            </Link>
          </div>
        </header>

        <section className="mb-12 grid gap-4 md:grid-cols-4">
          {categoryList.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {category.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {category.description}
              </p>
            </Link>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredExplainers.map((item) => (
            <Link
              key={item.slug}
              href={`/explain/${item.slug}`}
              className="rounded-[24px] border border-white/10 bg-black/20 p-5"
            >
              <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {item.category}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.description}
              </p>
            </Link>
          ))}
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
