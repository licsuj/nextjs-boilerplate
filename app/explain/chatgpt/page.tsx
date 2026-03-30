import Link from "next/link";

export default function ChatGPTPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back home
        </Link>

        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          AI
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          What is ChatGPT?
        </h1>

        <p className="mt-4 text-lg leading-8 text-white/70">
          ChatGPT is an AI assistant that can understand prompts and generate useful
          answers in plain language.
        </p>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">ELI5</h2>
          <p className="mt-4 leading-8 text-white/75">
            Imagine a super-fast helper that has read a huge part of the internet
            and can respond to your questions in seconds. You ask, it answers.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Why it matters</h2>
          <p className="mt-4 leading-8 text-white/75">
            People use tools like ChatGPT for writing, research, brainstorming,
            coding, summarizing, and learning faster.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold">What to do next</h2>
          <p className="mt-4 leading-8 text-white/85">
            Learn prompts, AI workflows, and automation next if you want to use AI
            more effectively.
          </p>
          <Link
            href="/explore"
            className="mt-5 inline-block rounded-2xl border border-cyan-200/20 bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-200"
          >
            Explore more AI topics
          </Link>
        </section>
      </div>
    </main>
  );
}
