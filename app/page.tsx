import Link from "next/link";

const BEEHIIV_PUBLIC_URL = "https://eli5ai.beehiiv.com";
const BEEHIIV_SUBSCRIBE_URL = "https://eli5ai.beehiiv.com/subscribe";

export default function ELI5AILandingPage() {
  const examples = [
    {
      title: "What is inflation?",
      blurb: "Why the same money buys less over time.",
      tag: "Money",
      href: "/explain/inflation",
    },
    {
      title: "What is an API?",
      blurb: "How apps talk to each other behind the scenes.",
      tag: "Tech",
      href: "/explain/api",
    },
    {
      title: "What is dopamine?",
      blurb: "Why your brain keeps chasing rewards.",
      tag: "Psychology",
      href: "/explore",
    },
    {
      title: "What is ChatGPT?",
      blurb: "A simple way to understand AI assistants.",
      tag: "AI",
      href: "/explain/chatgpt",
    },
    {
      title: "What is SaaS?",
      blurb: "Why some software is paid monthly instead of once.",
      tag: "Business",
      href: "/explore",
    },
    {
      title: "What is cloud computing?",
      blurb: "Why your files and apps can live on the internet.",
      tag: "Tech",
      href: "/explore",
    },
  ];

  const categories = [
    {
      title: "Money",
      desc: "Inflation, debt, investing, taxes, and the basics that affect your day-to-day life.",
      accent: "from-emerald-400/20 to-emerald-500/5",
    },
    {
      title: "AI",
      desc: "ChatGPT, prompts, automation, and how modern AI tools actually work.",
      accent: "from-cyan-400/20 to-cyan-500/5",
    },
    {
      title: "Psychology",
      desc: "Dopamine, habits, focus, motivation, and why your brain does what it does.",
      accent: "from-violet-400/20 to-violet-500/5",
    },
    {
      title: "Tech",
      desc: "APIs, cloud, databases, backend systems, and the tech you use every day.",
      accent: "from-amber-400/20 to-amber-500/5",
    },
  ];

  const stats = [
    { value: "15 sec", label: "Average explanation" },
    { value: "4", label: "Main categories" },
    { value: "100+", label: "Topics to explore next" },
  ];

  const benefits = [
    {
      title: "Easy to understand",
      desc: "Clear explanations without jargon, waffle, or confusing language.",
    },
    {
      title: "Useful in real life",
      desc: "Learn topics that affect your money, work, habits, and everyday decisions.",
    },
    {
      title: "Fast to read",
      desc: "Get the main idea in seconds, then go deeper only if you want to.",
    },
  ];

  const audience = [
    "People who want to understand money better",
    "People learning AI, business, and tech",
    "People who hate overcomplicated explanations",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300 selection:text-neutral-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-neutral-950">
              E5
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">ELI5AI.co</div>
              <div className="text-xs text-white/45">
                Complex topics, explained simply.
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#examples" className="transition hover:text-white">
              Examples
            </a>
            <a href="#categories" className="transition hover:text-white">
              Categories
            </a>
            <a href="#newsletter" className="transition hover:text-white">
              Newsletter
            </a>
          </nav>

          <a
            href={BEEHIIV_SUBSCRIBE_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Join free
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              Learn faster without the jargon
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl">
              Understand
              <span className="block text-cyan-300">anything faster.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              ELI5AI breaks down confusing topics into short, memorable explanations
              that are actually easy to understand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BEEHIIV_SUBSCRIBE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
              >
                Get weekly explanations
              </a>
              <Link
                href="/explore"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore topics
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/55">{stat.label}</div>
                </div>
              ))}
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
                      What is inflation?
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    15 sec read
                  </div>
                </div>

                <div className="aspect-[9/16] rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                  <div className="flex h-full flex-col justify-between rounded-[18px] border border-white/10 bg-neutral-950 p-5">
                    <div>
                      <div className="inline-flex rounded-full bg-white/6 px-3 py-1 text-xs font-semibold tracking-wide text-white/60">
                        Money • ELI5
                      </div>
                      <div className="mt-4 text-3xl font-black leading-[1.05] tracking-tight">
                        Inflation means prices go up over time.
                      </div>
                    </div>

                    <div className="space-y-3 text-base leading-7 text-white/78">
                      <div>Think of it like a pizza.</div>
                      <div>
                        Five years ago, €10 got you a whole one. Today, maybe just
                        three slices.
                      </div>
                      <div className="font-semibold text-cyan-300">
                        Your €10 did not change. What it buys did.
                      </div>
                      <div className="pt-2 text-lg font-semibold text-white">
                        That is inflation.
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs text-white/40">
                      <span>@eli5ai</span>
                      <span>Start with the basics</span>
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
                  Most things are explained in a complicated way.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                  ELI5AI exists to make money, AI, psychology, and tech easier to
                  understand for normal people.
                </p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  Who this is for
                </div>
                <div className="mt-4 space-y-3">
                  {audience.map((item) => (
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

        <section id="examples" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Examples
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Topics people actually want explained.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Start with the basics, then explore the topics that affect your work,
              money, and everyday life.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {examples.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/55">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.blurb}</p>
                <div className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  Read explanation →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-6xl px-6 py-4 md:py-8">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Categories
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Topics you should actually understand.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <div
                key={item.title}
                className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${item.accent} p-6`}
              >
                <div className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.desc}</p>
              </div>
            ))}
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
                <p className="mt-3 text-sm leading-6 text-white/58">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:pb-28">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(168,85,247,0.12),rgba(255,255,255,0.04))] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/85">
                  Newsletter
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  Get one clear explanation every week.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Simple takes on money, AI, psychology, and tech — sent to your
                  inbox without the jargon.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-neutral-950/55 p-4 backdrop-blur">
                <div className="flex flex-col gap-3">
                  <a
                    href={BEEHIIV_SUBSCRIBE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-neutral-950 transition hover:bg-cyan-100"
                  >
                    Join the newsletter
                  </a>
                  <a
                    href={BEEHIIV_PUBLIC_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View publication
                  </a>
                  <div className="px-1 text-xs text-white/40">
                    One useful email. No spam. Easy unsubscribe.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
