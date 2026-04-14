import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers, type ExplainerCategory } from "@/lib/explainers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// export const dynamicParams = false;

type Props = {
  params: { slug: string };
};

type CategoryPageConfig = {
  label: ExplainerCategory;
  title: string;
  description: string;
  intro: string;
  whyMatters: string;
  whatYouWillLearn: readonly string[];
  whoItsFor: string;
  commonMistakes: readonly string[];
  startHere: readonly string[];
  nextCategories: readonly {
    title: string;
    href: string;
  }[];
  faq: readonly {
    question: string;
    answer: string;
  }[];
};

const categoryConfig = {
  "ai-basics": {
    label: "AI Basics",
    title: "AI Basics explained simply",
    description:
      "Learn the core AI terms and concepts in plain English, including ChatGPT, LLMs, tokens, prompts, context windows, and more.",
    intro:
      "This category is the best place to start if you want to understand AI properly. It covers the core terms, concepts, and building blocks that appear again and again in AI tools and conversations.",
    whyMatters:
      "Most people struggle with AI because they jump into tools before understanding the foundations. These pages help you build that base first.",
    whatYouWillLearn: [
      "How tools like ChatGPT are connected to LLMs and prompts",
      "Why tokens and context windows affect what AI can do",
      "Which beginner AI concepts matter most in practice",
      "How core ideas fit together before you move into tools and workflows",
    ],
    whoItsFor:
      "This category is ideal for complete beginners, curious professionals, and anyone who wants to understand AI fundamentals before going deeper.",
    commonMistakes: [
      "Jumping straight into tools without understanding the basics",
      "Confusing hype terms with actual concepts",
      "Assuming AI understands text exactly like a human does",
    ],
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
    label: "AI Tools",
    title: "AI Tools explained simply",
    description:
      "Understand popular AI tools and technical building blocks in plain English, including APIs, embeddings, vector databases, copilots, and more.",
    intro:
      "This category explains the tools, components, and systems people hear about when using or building with AI. It is for understanding what the tools actually do and how they connect.",
    whyMatters:
      "People often use AI tools without really understanding what sits underneath them. These explainers help bridge that gap.",
    whatYouWillLearn: [
      "How AI tools connect to apps, data, and systems",
      "What embeddings and vector databases do",
      "What inference means when a model generates output",
      "Which tool concepts matter most in real AI products",
    ],
    whoItsFor:
      "This category is for readers who already know the basics and want to understand how AI tools and technical building blocks work in plain English.",
    commonMistakes: [
      "Treating every AI product like it works the same way",
      "Using technical terms without understanding their role",
      "Confusing tools, models, and workflows as if they were the same thing",
    ],
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
    faq: [
      {
        question: "What is included in AI Tools?",
        answer:
          "AI Tools covers practical concepts and systems such as APIs, embeddings, vector databases, inference, and other tool-related topics.",
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
    label: "AI Workflows",
    title: "AI Workflows explained simply",
    description:
      "Learn how AI fits into real workflows through simple explanations of RAG, AI agents, automation, system prompts, fine-tuning, MCP, and more.",
    intro:
      "This category focuses on how AI works in practice. Instead of just defining tools, it explains how different pieces come together in useful real-world workflows.",
    whyMatters:
      "This is where AI becomes practical. Once you understand workflows, you start to see how AI can support research, support, writing, automation, and internal systems.",
    whatYouWillLearn: [
      "How RAG helps AI use external information",
      "How agents, automation, and system prompts fit into workflows",
      "Where MCP and fine-tuning sit in practical AI systems",
      "Why workflow design matters as much as the model itself",
    ],
    whoItsFor:
      "This category is for readers who want to move beyond definitions and understand how AI is actually used in products, teams, and business operations.",
    commonMistakes: [
      "Assuming the model alone is the whole system",
      "Using terms like agent, RAG, and automation interchangeably",
      "Ignoring workflow design and focusing only on prompts",
    ],
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
    label: "Comparisons",
    title: "AI Comparisons explained simply",
    description:
      "Compare popular AI tools and concepts in plain English so you can understand the differences without hype or jargon.",
    intro:
      "This category helps you compare AI tools and concepts side by side in a way that is simple, practical, and easy to follow.",
    whyMatters:
      "Comparison pages are where many people make decisions. They help users choose the right AI tool or understand the difference between similar concepts.",
    whatYouWillLearn: [
      "How major AI assistants differ in practice",
      "When two AI concepts are actually solving different problems",
      "Which comparison questions matter most before choosing a tool",
      "How to think more clearly about tradeoffs instead of hype",
    ],
    whoItsFor:
      "This category is for people trying to choose between tools, understand tradeoffs, or compare similar AI concepts without getting lost in marketing language.",
    commonMistakes: [
      "Looking for one universal winner instead of the best fit",
      "Comparing tools without knowing the task or workflow",
      "Treating related concepts like they are interchangeable",
    ],
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
    faq: [
      {
        question: "What kind of pages are in AI Comparisons?",
        answer:
          "This category includes plain-English comparisons such as ChatGPT vs Claude, ChatGPT vs Gemini, Claude vs Gemini, and concept comparisons like AI agent vs chatbot.",
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
} satisfies Record<string, CategoryPageConfig>;

export function generateStaticParams() {
  return Object.keys(categoryConfig).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = categoryConfig[params.slug as keyof typeof categoryConfig];

  if (!category) {
    return {
      title: "Category not found",
      description: "This category could not be found.",
    };
  }

  const canonical = `https://www.eli5ai.co/category/${params.slug}`;

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${category.title} | ELI5AI.co`,
      description: category.description,
      url: canonical,
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

export default function CategoryPage({ params }: Props) {
  const category = categoryConfig[params.slug as keyof typeof categoryConfig];

  if (!category) {
    notFound();
  }

  const items = explainers.filter((item) => item.category === category.label);

  const featuredStartHere = category.startHere.reduce<(typeof explainers)[number][]>(
    (acc, featuredSlug) => {
      const found = explainers.find((item) => item.slug === featuredSlug);
      if (found) acc.push(found);
      return acc;
    },
    []
  );

  const canonical = `https://www.eli5ai.co/category/${params.slug}`;

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
      url: `https://www.eli5ai.co/explain/${item.slug}`,
      name: item.title,
    })),
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
    url: canonical,
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
        item: "https://www.eli5ai.co/explore",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.label,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Script
        id={`category-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <Script
        id={`faq-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`itemlist-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <Link href="/explore" className="transition hover:text-white">
              Explore
            </Link>
            <span>/</span>
            <span className="text-white/75">{category.label}</span>
          </nav>

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
          </header>

          {featuredStartHere.length > 0 && (
            <section className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
              <div className="mb-6">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Start here
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                  Best first pages in {category.label}
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featuredStartHere.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/explain/${item.slug}`}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
                  >
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-cyan-300">
                      Read first →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

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
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
