import Link from "next/link";

export default function ExplorePage() {
  const topics = [
    { title: "What is inflation?", tag: "Money", href: "/explain/inflation" },
    { title: "What is an API?", tag: "Tech", href: "/explain/api" },
    { title: "What is ChatGPT?", tag: "AI", href: "/explain/chatgpt" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back home
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Explore simple explanations
        </h1>
        <p className="mt-4 max-w-2xl text-white/65">
          Start with the basics. Learn topics that actually matter in everyday
          life.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                {topic.tag}
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{topic.title}</h2>
              <div className="mt-5 text-sm font-semibold text-cyan-300">
                Open topic →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
