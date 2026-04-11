import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the ELI5AI newsletter and get one clear AI explanation every week.",
  alternates: {
    canonical: "https://eli5ai.co/newsletter",
  },
  openGraph: {
    title: "ELI5AI Newsletter",
    description:
      "Subscribe to the ELI5AI newsletter and get one clear AI explanation every week.",
    url: "https://eli5ai.co/newsletter",
    siteName: "ELI5AI.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELI5AI Newsletter",
    description:
      "Subscribe to the ELI5AI newsletter and get one clear AI explanation every week.",
  },
};

const benefits = [
  {
    title: "One useful AI explanation at a time",
    desc: "Short, clear, plain-English breakdowns of AI concepts, tools, and workflows.",
  },
  {
    title: "Built for real people",
    desc: "Useful whether you are a beginner, professional, founder, or just curious about AI.",
  },
  {
    title: "No noise",
    desc: "No endless hype, no jargon-heavy posts, and no inbox flooding.",
  },
];

const topics = [
  "What AI terms actually mean",
  "How tools like ChatGPT, Claude, and Gemini differ",
  "Simple explanations of RAG, agents, prompts, APIs, and automation",
  "Practical AI ideas you can use at work",
];

export default function NewsletterPage() {
  return (
    <>
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Newsletter
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
                Get one clear AI explanation every week
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                The ELI5AI newsletter helps you understand AI step by step through
                short, useful explanations that are easy to read and actually make
                sense.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  What you will get
                </h2>
                <div className="mt-4 space-y-3">
                  {topics.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-white/45">
                  One useful email. No spam. Easy unsubscribe.
                </p>
              </section>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12),rgba(255,255,255,0.04))] p-6">
              <div className="rounded-[24px] border border-white/10 bg-neutral-950/55 p-4 backdrop-blur">
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

              <div className="mt-6 rounded-[20px] border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-semibold">Why subscribe now?</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Most people are hearing AI terms everywhere but still do not feel
                  like they truly understand them. This newsletter helps close that
                  gap one concept at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
