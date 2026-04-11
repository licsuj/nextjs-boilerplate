import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";

type Props = {
  params: Promise<{ slug: string }>;
};

function categoryToSlug(category: string): string {
  switch (category) {
    case "AI Basics":
      return "ai-basics";
    case "AI Tools":
      return "ai-tools";
    case "AI Workflows":
      return "ai-workflows";
    case "Comparisons":
      return "ai-comparisons";
    default:
      return "ai-basics";
  }
}

function buildFaq(explainer: (typeof explainers)[number]) {
  const cleanTitle = explainer.title.replace(/\?$/, "");
  return [
    {
      question: `${cleanTitle} in simple terms`,
      answer: explainer.intro,
    },
    {
      question: `Why does ${cleanTitle.replace(/^What is /i, "").replace(/^What is an /i, "").replace(/^What is a /i, "")} matter?`,
      answer: explainer.whyItMatters,
    },
    {
      question: `What should I read after ${cleanTitle}?`,
      answer:
        "The best next step is to continue with related explainers, browse the category page, or join the newsletter to keep learning AI step by step.",
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const explainer = explainers.find((item) => item.slug === slug);

  if (!explainer) {
    return {
      title: "Not found",
      description: "This explainer could not be found.",
    };
  }

  return {
    title: explainer.title,
    description: explainer.description,
    alternates: {
      canonical: `https://eli5ai.co/explain/${explainer.slug}`,
    },
    openGraph: {
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
      url: `https://eli5ai.co/explain/${explainer.slug}`,
      siteName: "ELI5AI.co",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
    },
  };
}

export async function generateStaticParams() {
  return explainers.map((item) => ({ slug: item.slug }));
}

export default async function ExplainerPage({ params }: Props) {
  const { slug } = await params;
  const explainer = explainers.find((item) => item.slug === slug);

  if (!explainer) notFound();

  const relatedPages = explainers.filter((item) =>
    explainer.related.includes(item.slug)
  );

  const categorySlug = categoryToSlug(explainer.category);
  const faq = buildFaq(explainer);

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://eli5ai.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: explainer.category,
        item: `https://eli5ai.co/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: explainer.title,
        item: `https://eli5ai.co/explain/${explainer.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id={`faq-schema-${explainer.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${explainer.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

        <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-neutral-950">
                E5
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight">ELI5AI.co</div>
                <div className="text-xs text-white/45">AI explained simply</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <Link href="/explore" className="transition hover:text-white">
                Explore
              </Link>
              <Link href="/category/ai-basics" className="transition hover:text-white">
                AI Basics
              </Link>
              <Link href="/category/ai-tools" className="transition hover:text-white">
                AI Tools
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/newsletter" className="transition hover:text-white">
                Newsletter
              </Link>
            </nav>

            <Link
              href="/newsletter"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Join free
            </Link>
          </div>
        </header>

        <article className="mx-auto max-w-4xl px-6 py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/category/${categorySlug}`}
              className="transition hover:text-white"
            >
              {explainer.category}
            </Link>
            <span>/</span>
            <span className="text-white/75">{explainer.title}</span>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/category/${categorySlug}`}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60 transition hover:bg-white/[0.08]"
              >
                {explainer.category}
              </Link>
              <span className="text-xs text-white/35">ELI5 explainer</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {explainer.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              {explainer.description}
            </p>
          </header>

          <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              In simple terms
            </h2>

            <p className="mt-4 text-base leading-8 text-white/75">
              {explainer.intro}
            </p>

            <div className="mt-6 space-y-4">
              {explainer.eli5.map((item) => (
                <p key={item} className="text-base leading-8 text-white/75">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why it matters
            </h2>

            <p className="mt-4 text-base leading-8 text-white/75">
              {explainer.whyItMatters}
            </p>
          </section>

          <section className="mt-8 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-7 md:p-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/85">
                Newsletter
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Keep learning AI the simple way
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78">
                Get one clear AI explanation every week, plus practical guides on
                tools, prompts, workflows, agents, and the ideas people hear about
                but rarely understand properly.
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
                  Explore more topics
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border border-violet-300/20 bg-violet-300/10 p-7 md:p-8">
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

          <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Related explainers
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Continue learning from here
                </h2>
              </div>

              <Link
                href={`/category/${categorySlug}`}
                className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                View all in {explainer.category} →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {relatedPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/explain/${item.slug}`}
                  className="rounded-[22px] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
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
                  <div className="mt-5 text-sm font-semibold text-cyan-300">
                    Read explanation →
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                FAQ
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Common questions
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
        </article>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold tracking-tight">ELI5AI.co</div>
              <div className="mt-1 text-sm text-white/45">AI explained simply</div>
            </div>

            <nav className="flex flex-wrap gap-5 text-sm text-white/65">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/explore" className="transition hover:text-white">
                Explore
              </Link>
              <Link href="/category/ai-basics" className="transition hover:text-white">
                AI Basics
              </Link>
              <Link href="/category/ai-tools" className="transition hover:text-white">
                AI Tools
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/newsletter" className="transition hover:text-white">
                Newsletter
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
