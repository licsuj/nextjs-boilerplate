import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const pageUrl = "https://www.eli5ai.co/about";

export const metadata: Metadata = {
  title: "About ELI5AI.co | Plain-English AI explanations for beginners",
  description:
    "Learn what ELI5AI.co is, who it helps, and how it explains AI concepts, tools, workflows, and comparisons in plain English.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About ELI5AI.co | Plain-English AI explanations for beginners",
    description:
      "Learn what ELI5AI.co is, who it helps, and how it explains AI concepts, tools, workflows, and comparisons in plain English.",
    url: pageUrl,
    siteName: "ELI5AI.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ELI5AI.co | Plain-English AI explanations for beginners",
    description:
      "Learn what ELI5AI.co is, who it helps, and how it explains AI concepts, tools, workflows, and comparisons in plain English.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ELI5AI.co",
    description:
      "Learn what ELI5AI.co is, who it helps, and how it explains AI in plain English.",
    url: pageUrl,
    mainEntity: {
      "@type": "Organization",
      name: "ELI5AI.co",
      url: "https://www.eli5ai.co",
      description:
        "ELI5AI.co explains AI concepts, tools, workflows, and comparisons in plain English for beginners and curious professionals.",
    },
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
        name: "About",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

        <SiteHeader />

        <div className="mx-auto max-w-4xl px-6 py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/75">About</span>
          </nav>

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              AI explained simply
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
              ELI5AI.co exists to make AI easier to understand without technical
              jargon, vague hype, or overcomplicated explanations.
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Why this site exists
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-white/72">
                <p>
                  AI is everywhere now, but many people still feel like the
                  explanations are either too technical or too shallow.
                </p>
                <p>
                  Some content is written mainly for engineers. Other content is
                  full of buzzwords but says very little. ELI5AI.co sits between
                  those two extremes.
                </p>
                <p>
                  The goal is simple: explain the ideas, tools, workflows, and
                  comparisons behind AI in a way normal people can understand and
                  actually use.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                What ELI5AI covers
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  "AI basics like LLMs, tokens, prompts, and context windows",
                  "Popular tools like ChatGPT, Claude, Gemini, embeddings, APIs, and vector databases",
                  "Practical workflows like RAG, automation, agents, MCP, system prompts, and fine-tuning",
                  "Clear comparisons that help people choose the right tools and concepts",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Who it is for
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-white/72">
                <p>
                  This site is for beginners, professionals, founders, creators,
                  marketers, operators, and curious people who want to
                  understand AI properly.
                </p>
                <p>
                  You do not need to be technical to use this site. The whole
                  point is to make complicated topics feel clear, practical, and
                  easy to follow.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                What makes this different
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Plain English",
                    desc: "The content is written to be understood quickly, not to sound impressive.",
                  },
                  {
                    title: "Practical focus",
                    desc: "The goal is not just definitions. It is helping people understand why each concept matters in the real world.",
                  },
                  {
                    title: "Structured learning",
                    desc: "Topics are linked together so readers can start simple and go deeper over time.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12),rgba(255,255,255,0.04))] p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Start here
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                If you are new to the site, start with the beginner learning
                path, browse the main categories, and join the newsletter for
                one useful AI explanation at a time.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-here"
                  className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
                >
                  Start learning AI
                </Link>
                <Link
                  href="/explore"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore AI topics
                </Link>
              </div>
            </section>
          </div>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
