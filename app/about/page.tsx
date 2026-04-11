import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what ELI5AI.co is, why it exists, and who it is built for.",
  alternates: {
    canonical: "https://eli5ai.co/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
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
                AI is everywhere now, but most people still feel like the
                explanations are either too technical or too shallow.
              </p>
              <p>
                On one side, you have content written for engineers. On the other,
                you have content that is full of buzzwords but says very little.
              </p>
              <p>
                ELI5AI sits in the middle. The goal is simple: explain the ideas,
                tools, and workflows behind AI in a way normal people can
                understand and actually use.
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
                "Popular tools like ChatGPT, Claude, Gemini, and copilots",
                "Practical workflows like RAG, automation, agents, and orchestration",
                "Clear comparisons that help people choose the right tools",
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
                marketers, operators, and curious people who want to understand AI
                properly.
              </p>
              <p>
                You do not need to be technical to use this site. The whole point
                is to make complicated topics feel clear, practical, and easy to
                follow.
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
                  desc: "The goal is not just definitions. It is helping people understand why the concept matters.",
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
              If you are new to the site, start with the basics, browse a few
              explainers, and join the newsletter for one useful AI explanation at
              a time.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
              >
                Explore AI topics
              </Link>
              <Link
                href="/newsletter"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Visit the newsletter page
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
