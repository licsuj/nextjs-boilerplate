import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

function categoryToSlug(category: string) {
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

function buildFallbackFaq(explainer: (typeof explainers)[number]) {
  const plainTitle = explainer.title.replace(/\?$/, "");

  if (plainTitle.toLowerCase().startsWith("what is ")) {
    const subject = plainTitle.replace(/^what is\s+/i, "");
    return [
      {
        question: `What is ${subject} in simple terms?`,
        answer: explainer.intro,
      },
      {
        question: `Why does ${subject} matter in AI?`,
        answer: explainer.whyItMatters,
      },
      {
        question: `What should I read after learning about ${subject}?`,
        answer:
          "The best next step is to continue with related explainers, browse the category page, or follow the beginner path to keep learning AI step by step.",
      },
    ];
  }

  return [
    {
      question: `${plainTitle} in simple terms`,
      answer: explainer.intro,
    },
    {
      question: `Why does ${plainTitle} matter?`,
      answer: explainer.whyItMatters,
    },
    {
      question: `What should I read after ${plainTitle}?`,
      answer:
        "The best next step is to continue with related explainers, browse the category page, or follow the beginner path to keep learning AI step by step.",
    },
  ];
}

export function generateStaticParams() {
  return explainers.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const explainer = explainers.find((item) => item.slug === params.slug);

  if (!explainer) {
    return {
      title: "Not found",
      description: "This explainer could not be found.",
    };
  }

  const canonical = `https://www.eli5ai.co/explain/${explainer.slug}`;

  return {
    title: explainer.title,
    description: explainer.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
      url: canonical,
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

export default function ExplainerPage({ params }: Props) {
  const explainer = explainers.find((item) => item.slug === params.slug);

  if (!explainer) {
    notFound();
  }

  const relatedPages = explainers.filter((item) =>
    explainer.related.includes(item.slug)
  );

  const categorySlug = categoryToSlug(explainer.category);
  const faq =
    explainer.faq && explainer.faq.length > 0
      ? explainer.faq
      : buildFallbackFaq(explainer);

  const canonical = `https://www.eli5ai.co/explain/${explainer.slug}`;

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: explainer.title,
    description: explainer.description,
    datePublished: explainer.publishedAt,
    dateModified: explainer.updatedAt ?? explainer.publishedAt,
    author: {
      "@type": "Organization",
      name: "ELI5AI.co",
    },
    publisher: {
      "@type": "Organization",
      name: "ELI5AI.co",
      url: "https://www.eli5ai.co",
    },
    mainEntityOfPage: canonical,
    articleSection: explainer.category,
    keywords: explainer.secondaryKeywords,
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
        name: explainer.category,
        item: `https://www.eli5ai.co/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: explainer.title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Script
        id={`article-schema-${explainer.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
        <SiteHeader />

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
              {explainer.updatedAt ? (
                <span className="text-xs text-white/35">
                  Updated {explainer.updatedAt}
                </span>
              ) : null}
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

          {relatedPages.length > 0 && (
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
          )}

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

        <SiteFooter />
      </main>
    </>
  );
}
