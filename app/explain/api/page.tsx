import Link from "next/link";

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back home
        </Link>

        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          Tech
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          What is an API?
        </h1>

        <p className="mt-4 text-lg leading-8 text-white/70">
          An API lets two pieces of software talk to each other in a structured way.
        </p>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">ELI5</h2>
          <p className="mt-4 leading-8 text-white/75">
            An API is like a waiter in a restaurant. You tell the waiter what you
            want, the waiter goes to the kitchen, and then brings back the result.
            You do not need to go into the kitchen yourself.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Why it matters</h2>
          <p className="mt-4 leading-8 text-white/75">
            APIs power logins, payments, weather apps, maps, AI tools, and most
            modern websites. Once you understand APIs, tech becomes much less
            mysterious.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold">What to do next</h2>
          <p className="mt-4 leading-8 text-white/85">
            Explore backend, cloud, and app basics next to understand how modern
            software fits together.
          </p>
          <Link
            href="/explore"
            className="mt-5 inline-block rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-200"
          >
            Explore more tech topics
          </Link>
        </section>
      </div>
    </main>
  );
}
