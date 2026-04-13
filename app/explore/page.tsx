import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pageUrl = "https://www.eli5ai.co/explore";

export const metadata: Metadata = {
  title:
    "Explore AI topics | Simple guides to ChatGPT, RAG, prompts, agents, APIs",
  description:
    "Browse simple AI explanations covering ChatGPT, LLMs, AI agents, prompts, RAG, APIs, automation, comparisons, and more.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Explore AI topics | Simple guides to ChatGPT, RAG, prompts, agents, APIs",
    description:
      "Browse simple AI explanations covering ChatGPT, LLMs, AI agents, prompts, RAG, APIs, automation, comparisons, and more.",
    url: pageUrl,
    siteName: "ELI5AI.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Explore AI topics | Simple guides to ChatGPT, RAG, prompts, agents, APIs",
    description:
      "Browse simple AI explanations covering ChatGPT, LLMs, AI agents, prompts, RAG, APIs, automation, comparisons, and more.",
  },
};

const categorySections = [
  {
    slug: "ai-basics",
    title: "AI Basics",
    description:
      "Start here if you want to understand the core AI concepts before diving into tools and workflows.",
    filter: "AI Basics",
  },
  {
    slug: "ai-tools",
    title: "AI Tools",
    description:
      "Learn what common AI tools and technical building blocks actually do in plain English.",
    filter: "AI Tools",
  },
  {
    slug: "ai-workflows",
    title: "AI Workflows",
    description:
      "Understand how AI fits into real processes such as RAG, agents, automation, and orchestration.",
    filter: "AI Workflows",
  },
  {
    slug: "ai-comparisons",
    title: "Comparisons",
    description:
      "Compare tools and concepts without hype so you can make better decisions.",
    filter: "Comparisons",
  },
] as const;

export default function ExplorePage() {
  const faq = [
    {
      question: "What should I start with if I am new to AI?",
      answer:
        "Start with AI Basics. That category covers the core ideas that make the rest of AI much easier to understand.",
    },
    {
      question: "Does ELI5AI only cover beginner topics?",
      answer:
        "No. The site starts with beginner-friendly explanations but also covers practical workflows, tools, and comparisons.",
    },
    {
      question: "How should I use the Explore page?",
      answer:
        "Use it as a hub. Pick a category, read a few explainers, then move into related topics and follow the learning path to keep improving your understanding.",
    },
  ];

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

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Explore AI topics",
    description:
      "Browse simple AI explanations covering ChatGPT, LLMs, AI agents, prompts, RAG, APIs, automation, comparisons, and more.",
    url: pageUrl,
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ELI5AI topic explorer",
    itemListElement: explainers.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.eli5ai.co/explain/${item.slug}`,
      name: item.title,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.eli5ai.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Explore",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="explore-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <Script
        id="explore-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="explore-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="explore-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/75">Explore</span>
          </nav>

          <header className="mb-12">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              Explore
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Browse AI explainers
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              Explore simple AI explanations by topic. Start with the basics,
              move into tools and workflows, and compare popular assistants
              without jargon.
            </p>
          </header>

          <section className="grid gap-4 md:grid-cols-4">
            {categorySections.map((section) => (
              <Link
                key={section.slug}
                href={`/category/${section.slug}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
              >
                <div className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {section.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-cyan-300">
                  Explore →
                </div>
              </Link>
            ))}
          </section>

          <div className="mt-12 space-y-12">
            {categorySections.map((section) => {
              const items = explainers.filter(
                (item) => item.category === section.filter
              );

              return (
                <section key={section.slug}>
                  <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                        {section.title}
                      </div>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        {section.title} explainers
                      </h2>
                    </div>

                    <Link
                      href={`/category/${section.slug}`}
                      className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      View category →
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/explain/${item.slug}`}
                        className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
                      >
                        <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                          {item.category}
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/58">
                          {item.description}
                        </p>
                        <div className="mt-5 text-sm font-semibold text-cyan-300">
                          Read explanation →
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-12 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-7 md:p-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/85">
                Newsletter
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Get one clear AI explanation every week
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78">
                Join the newsletter for plain-English AI learning, practical
                concepts, and useful comparisons delivered one step at a time.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/newsletter"
                  className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
                >
                  Join the newsletter
                </Link>
                <Link
                  href="/start-here"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Follow the beginner path
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                FAQ
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Common questions about exploring ELI5AI
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
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
