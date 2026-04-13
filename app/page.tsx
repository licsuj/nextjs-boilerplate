import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "ELI5AI.co | AI explained simply",
  description:
    "Learn AI in plain English. Simple explanations of ChatGPT, AI agents, RAG, prompts, APIs, automation, and more.",
  alternates: {
    canonical: "https://www.eli5ai.co",
  },
  openGraph: {
    title: "ELI5AI.co | AI explained simply",
    description:
      "Simple AI explanations for beginners and professionals. Learn ChatGPT, AI agents, RAG, prompts, APIs, and automation in plain English.",
    url: "https://www.eli5ai.co",
    siteName: "ELI5AI.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELI5AI.co | AI explained simply",
    description:
      "Learn AI in plain English with short, clear explanations that actually make sense.",
  },
};

const featuredExplainers = [
  {
    title: "What is ChatGPT?",
    blurb:
      "A simple explanation of how ChatGPT works and what people actually use it for.",
    href: "/explain/what-is-chatgpt",
    category: "AI Basics",
  },
  {
    title: "What is an AI agent?",
    blurb: "The difference between a chatbot and an AI agent, explained simply.",
    href: "/explain/what-is-an-ai-agent",
    category: "AI Basics",
  },
  {
    title: "What is RAG?",
    blurb: "Why AI tools sometimes search your data before answering.",
    href: "/explain/what-is-rag",
    category: "AI Workflows",
  },
  {
    title: "What is prompt engineering?",
    blurb: "How better instructions create better AI outputs.",
    href: "/explain/what-is-prompt-engineering",
    category: "AI Basics",
  },
  {
    title: "ChatGPT vs Claude",
    blurb: "A plain-English comparison of two popular AI assistants.",
    href: "/explain/chatgpt-vs-claude",
    category: "Comparisons",
  },
  {
    title: "What is an API?",
    blurb: "The easiest way to understand how apps and AI tools connect.",
    href: "/explain/what-is-an-api",
    category: "AI Tools",
  },
];

const topicClusters = [
  {
    title: "AI Basics",
    desc: "Start here if you are new to AI. Learn the terms, concepts, and building blocks first.",
    href: "/category/ai-basics",
  },
  {
    title: "AI Tools",
    desc: "Understand ChatGPT, Claude, Gemini, APIs, copilots, and the tools people use every day.",
    href: "/category/ai-tools",
  },
  {
    title: "AI Workflows",
    desc: "Learn automation, RAG, agents, prompts, and how AI fits into real work.",
    href: "/category/ai-workflows",
  },
  {
    title: "AI Comparisons",
    desc: "Compare tools, models, and concepts without jargon or hype.",
    href: "/category/ai-comparisons",
  },
];

const benefits = [
  {
    title: "Plain English",
    desc: "No overcomplicated explanations, no technical waffle, and no unnecessary jargon.",
  },
  {
    title: "Built for search and learning",
    desc: "Every page answers one clear question so you can understand the topic quickly.",
  },
  {
    title: "Useful in real life",
    desc: "Learn the AI terms, tools, and workflows that actually matter at work and online.",
  },
];

const faq = [
  {
    question: "What is ELI5AI?",
    answer:
      "ELI5AI is a site that explains AI terms, tools, and concepts in plain English.",
  },
  {
    question: "Who is ELI5AI for?",
    answer:
      "It is for beginners, professionals, creators, and anyone who wants to understand AI without technical jargon.",
  },
  {
    question: "What topics does ELI5AI cover?",
    answer:
      "The site covers ChatGPT, AI agents, RAG, prompts, APIs, automation, comparisons, and practical AI workflows.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

        <SiteHeader />

        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              Plain-English AI learning
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl">
              AI explained
              <span className="block text-cyan-300">simply.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Learn ChatGPT, AI agents, prompts, RAG, APIs, automation, and more
              through short, clear explanations that actually make sense.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
              >
                Explore AI topics
              </Link>
              <a
                href="#newsletter"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Get weekly explanations
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">AI only</div>
                <div className="mt-1 text-sm text-white/55">
                  Focused topical authority
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">Short reads</div>
                <div className="mt-1 text-sm text-white/55">
                  Fast explanations, then deeper links
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">
                  Beginner friendly
                </div>
                <div className="mt-1 text-sm text-white/55">
                  No jargon unless it is explained
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
              <div className="rounded-[26px] border border-white/10 bg-neutral-900 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/45">Featured explainer</div>
                    <div className="mt-1 text-xl font-semibold tracking-tight">
                      What is an AI agent?
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    2 min read
                  </div>
                </div>

                <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                  <div className="flex h-full flex-col justify-between rounded-[18px] border border-white/10 bg-neutral-950 p-5">
                    <div>
                      <div className="inline-flex rounded-full bg-white/6 px-3 py-1 text-xs font-semibold tracking-wide text-white/60">
                        AI Basics • ELI5
                      </div>
                      <div className="mt-4 text-3xl font-black leading-[1.05] tracking-tight">
                        An AI agent is an AI system that does tasks, not just
                        replies.
                      </div>
                    </div>

                    <div className="mt-6 space-y-3 text-base leading-7 text-white/78">
                      <div>
                        Think of a normal chatbot like someone answering your
                        question.
                      </div>
                      <div>
                        An AI agent is more like an assistant that can take steps
                        for you.
                      </div>
                      <div className="font-semibold text-cyan-300">
                        It can read, decide, act, and sometimes use tools.
                      </div>
                      <div className="pt-2 text-lg font-semibold text-white">
                        That is why agents feel more useful than simple chat.
                      </div>
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/explain/what-is-an-ai-agent"
                        className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                      >
                        Read full explanation →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-4 md:py-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Why this exists
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Most AI content is either too technical or too vague.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                  ELI5AI makes AI easier to understand with short, practical,
                  plain-English explanations for real people.
                </p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Who this is for
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Beginners trying to understand AI properly",
                    "Professionals hearing AI terms at work",
                    "Creators, founders, and curious people",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Topic clusters
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Start with the right AI category.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {topicClusters.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
              >
                <div className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.desc}
                </p>
                <div className="mt-5 text-sm font-semibold text-cyan-300">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Featured explainers
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Learn the AI topics people actually search for.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Every page answers one clear question and links you to the next
              topic naturally.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredExplainers.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/55">
                  {item.category}
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {item.blurb}
                </p>
                <div className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  Read explanation →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/explore"
              className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View all explainers
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="mb-8">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Common questions about ELI5AI
              </h2>
            </div>

            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="newsletter"
          className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:pb-28"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12),rgba(255,255,255,0.04))] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/85">
                  Newsletter
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  Get one clear AI explanation every week.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Learn AI step by step with simple explanations of terms, tools,
                  and workflows that actually matter.
                </p>
                <p className="mt-4 text-sm text-white/45">
                  One useful email. No spam. Easy unsubscribe.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-neutral-950/55 p-4 backdrop-blur">
                <div className="overflow-hidden rounded-[20px] border border-white/10 bg-transparent">
                  <iframe
                    src="https://subscribe-forms.beehiiv.com/ba3c832d-c266-4c66-8f72-1795922e71ce"
                    className="beehiiv-embed"
                    data-test-id="beehiiv-embed"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                      width: "100%",
                      height: "327px",
                      margin: 0,
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      maxWidth: "100%",
                      display: "block",
                    }}
                    title="Beehiiv newsletter signup"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
