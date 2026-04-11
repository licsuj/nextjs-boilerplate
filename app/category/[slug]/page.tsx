import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers, type ExplainerCategory } from "@/lib/explainers";

type Props = {
  params: Promise<{ slug: string }>;
};

const categoryConfig = {
  "ai-basics": {
    label: "AI Basics" as ExplainerCategory,
    title: "AI Basics explained simply",
    description:
      "Learn the core AI terms and concepts in plain English, including ChatGPT, LLMs, tokens, prompts, context windows, and more.",
    intro:
      "This category is the best place to start if you want to understand AI properly. It covers the basic terms, concepts, and building blocks that appear again and again in AI tools and conversations.",
    whyMatters:
      "Most people struggle with AI because they jump into tools before understanding the foundations. These pages help you build that base first.",
    faq: [
      {
        question: "What should I learn first in AI?",
        answer:
          "Start with the basics: ChatGPT, LLMs, prompts, tokens, and context windows. These concepts make the rest of AI much easier to understand.",
      },
      {
        question: "Is this category good for beginners?",
        answer:
          "Yes. AI Basics is designed for beginners and anyone who wants plain-English explanations instead of technical jargon.",
      },
      {
        question: "What comes after AI Basics?",
        answer:
          "After the basics, move into AI Tools, AI Workflows, and AI Comparisons to understand how concepts turn into real use cases.",
      },
    ],
  },
  "ai-tools": {
    label: "AI Tools" as ExplainerCategory,
    title: "AI Tools explained simply",
    description:
      "Understand popular AI tools and technical building blocks in plain English, including APIs, embeddings, vector databases, copilots, and more.",
    intro:
      "This category explains the tools, components, and systems people hear about when using or building with AI. It is for understanding what the tools actually do and how they connect.",
    whyMatters:
      "People often use AI tools without really understanding what sits underneath them. These explainers help bridge that gap.",
    faq: [
      {
        question: "What is included in AI Tools?",
        answer:
          "AI Tools covers practical concepts and systems such as APIs, embeddings, vector databases, copilots, and other tool-related topics.",
      },
      {
        question: "Do I need to be technical to understand these pages?",
        answer:
          "No. The goal is to explain tools in plain English so non-technical readers can still understand them clearly.",
      },
      {
        question: "Why should I learn about AI tools?",
        answer:
          "Understanding AI tools helps you make better decisions about what to use, what to trust, and how AI products actually work.",
      },
    ],
  },
  "ai-workflows": {
    label: "AI Workflows" as ExplainerCategory,
    title: "AI Workflows explained simply",
    description:
      "Learn how AI fits into real workflows through simple explanations of RAG, automation, agents, orchestration, fine-tuning, MCP, and more.",
    intro:
      "This category focuses on how AI works in practice. Instead of just defining tools, it explains how different pieces come together in useful real-world workflows.",
    whyMatters:
      "This is where AI becomes practical. Once you understand workflows, you start to see how AI can support research, support, writing, automation, and internal systems.",
    faq: [
      {
        question: "What is an AI workflow?",
        answer:
          "An AI workflow is a process where AI is used across one or more steps to help complete a task, such as searching documents, drafting text, or automating decisions.",
      },
      {
        question: "What should I read first in AI Workflows?",
        answer:
          "Start with RAG, AI automation, AI agents, and MCP. These topics explain how modern AI systems do more than just chat.",
      },
      {
        question: "Why are AI workflows important?",
        answer:
          "AI workflows are what turn AI from a demo into something useful for real work, products, and business operations.",
      },
    ],
  },
  "ai-comparisons": {
    label: "Comparisons" as ExplainerCategory,
    title: "AI Comparisons explained simply",
    description:
      "Compare popular AI tools and concepts in plain English so you can understand the differences without hype or jargon.",
    intro:
      "This category helps you compare AI tools and concepts side by side in a way that is simple, practical, and easy to follow.",
    whyMatters:
      "Comparison pages are where many people make decisions. They help users choose the right AI tool or understand the difference between similar concepts.",
    faq: [
      {
        question: "What kind of pages are in AI Comparisons?",
        answer:
          "This category includes plain-English comparisons such as ChatGPT vs Claude and ChatGPT vs Gemini.",
      },
      {
        question: "Who are comparison pages for?",
        answer:
          "They are for people trying to decide between tools, understand differences, or make more informed AI choices.",
      },
      {
        question: "Why do AI comparisons matter?",
        answer:
          "Comparisons help cut through hype and make it easier to choose the tool or model that fits your needs.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryConfig[slug as keyof typeof categoryConfig];

  if (!category) {
    return {
      title: "Category not found",
      description: "This category could not be found.",
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `https://eli5ai.co/category/${slug}`,
    },
    openGraph: {
      title: `${category.title} | ELI5AI.co`,
      description: category.description,
      url: `https://eli5ai.co/category/${slug}`,
      siteName: "ELI5AI.co",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | ELI5AI.co`,
      description: category.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryConfig).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryConfig[slug as keyof typeof categoryConfig];

  if (!category) notFound();

  const items = explainers.filter((item) => item.category === category.label);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://eli5ai.co/explain/${item.slug}`,
      name: item.title,
    })),
  };

  return (
    <>
      <Script
        id={`faq-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`itemlist-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              Category
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {category.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              {category.intro}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">
                  {items.length}
                </div>
                <div className="mt-1 text-sm text-white/55">Explainers in this category</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">Beginner friendly</div>
                <div className="mt-1 text-sm text-white/55">Written in plain English</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold tracking-tight">Built to connect</div>
                <div className="mt-1 text-sm text-white/55">Each page links to the next step</div>
              </div>
            </div>
          </header>

          <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why this category matters
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
              {category.whyMatters}
            </p>
          </section>

          <section className="mt-10">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Explainers
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  Learn this topic step by step
                </h2>
              </div>

              <Link
                href="/explore"
                className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Browse all explainers →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/explain/${item.slug}`}
                  className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/55">
                    {item.category}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {item.description}
                  </p>
                  <div className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                    Read explanation →
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
                Learn AI one clear concept at a time
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78">
                Join the ELI5AI newsletter for simple AI explanations, useful comparisons,
                and practical AI learning paths that actually help you understand the topic.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/newsletter"
                  className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
                >
                  Join the newsletter
                </Link>
                <Link
                  href="/about"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  About ELI5AI
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[28px] border border-violet-300/20 bg-violet-300/10 p-7 md:p-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-violet-200/85">
                Next step
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Want practical AI resources, not just explanations?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78">
                Visit SimpleAIApp.com for beginner-friendly AI tools, workflow packs,
                and practical resources that help turn understanding into action.
              </p>

              <div className="mt-6">
                <a
                  href="https://simpleaiapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-white/90"
                >
                  Visit SimpleAIApp.com
                </a>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                FAQ
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Common questions about {category.label}
              </h2>
            </div>

            <div className="space-y-4">
              {category.faq.map((item) => (
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
      </main>
    </>
  );
}
