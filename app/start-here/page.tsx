import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Start here",
  description:
    "The best beginner path to start learning AI step by step in plain English.",
  alternates: {
    canonical: "https://eli5ai.co/start-here",
  },
  openGraph: {
    title: "Start here | ELI5AI.co",
    description:
      "The best beginner path to start learning AI step by step in plain English.",
    url: "https://eli5ai.co/start-here",
    siteName: "ELI5AI.co",
    type: "website",
  },
};

const learningPath = [
  {
    title: "What is ChatGPT?",
    href: "/explain/what-is-chatgpt",
    desc: "Start with the AI tool most people have already heard about.",
  },
  {
    title: "What is an LLM?",
    href: "/explain/what-is-an-llm",
    desc: "Understand the model behind many modern AI assistants.",
  },
  {
    title: "What is a token in AI?",
    href: "/explain/what-is-a-token-in-ai",
    desc: "Learn how AI systems measure and process text.",
  },
  {
    title: "What is a context window?",
    href: "/explain/what-is-context-window",
    desc: "See how much information AI can work with at one time.",
  },
  {
    title: "What is prompt engineering?",
    href: "/explain/what-is-prompt-engineering",
    desc: "Learn how better instructions improve AI results.",
  },
  {
    title: "What is an API?",
    href: "/explain/what-is-an-api",
    desc: "Understand how apps and AI systems connect to each other.",
  },
  {
    title: "What is RAG?",
    href: "/explain/what-is-rag",
    desc: "See how AI tools use external information before answering.",
  },
  {
    title: "What is an AI agent?",
    href: "/explain/what-is-an-ai-agent",
    desc: "Finish with one of the most important workflow concepts in modern AI.",
  },
];

export default function StartHerePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
            Start here
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Your beginner path into AI
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            This page gives you the best order for learning AI basics without
            getting lost in hype or technical jargon.
          </p>
        </header>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
          <div className="mb-6">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Learning path
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Follow this order
            </h2>
          </div>

          <div className="grid gap-4">
            {learningPath.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[24px] border border-white/10 bg-black/20 p-6 transition hover:bg-black/30"
              >
                <div className="text-sm font-semibold text-cyan-300">
                  Step {index + 1}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.desc}
                </p>
                <div className="mt-4 text-sm font-semibold text-cyan-300">
                  Start this step →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-7 md:p-8">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/85">
              Newsletter
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Learn one concept at a time
            </h2>
            <p className="mt-4 text-base leading-7 text-white/78">
              Join the newsletter if you want simple AI explanations sent to you
              step by step instead of trying to learn everything at once.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/newsletter"
                className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
              >
                Join the newsletter
              </Link>
              <Link
                href="/explore"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore all topics
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
