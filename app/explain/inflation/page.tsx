import Link from "next/link";

export default function InflationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back home
        </Link>

        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          Money
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          What is inflation?
        </h1>

        <p className="mt-4 text-lg leading-8 text-white/70">
          Inflation means prices go up over time, so the same amount of money buys
          less than it used to.
        </p>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">ELI5</h2>
          <p className="mt-4 leading-8 text-white/75">
            Think of it like a pizza. A few years ago, €10 could buy a whole one.
            Now it might only buy a few slices. Your money stayed the same, but its
            buying power got smaller.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Why it matters</h2>
          <p className="mt-4 leading-8 text-white/75">
            Inflation affects your groceries, rent, savings, and salary. If your
            money grows slower than prices, you quietly lose purchasing power.
          </p>
        </section>

        <section className="mt-6 rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold">What to do next</h2>
          <p className="mt-4 leading-8 text-white/85">
            Learn how saving, investing, and interest rates help protect your money
            over time.
          </p>
          <Link
            href="/explore"
            className="mt-5 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-bold text-neutral-950"
          >
            Explore more money topics
          </Link>
        </section>
      </div>
    </main>
  );
}
