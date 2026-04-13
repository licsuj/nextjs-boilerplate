import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="font-semibold">ELI5AI.co</div>
        <div className="mt-1 text-sm text-white/55">AI explained simply</div>

        <nav className="mt-4 flex flex-wrap gap-4 text-sm text-white/75">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/start-here">Start here</Link>
          <Link href="/category/ai-basics">AI Basics</Link>
          <Link href="/category/ai-tools">AI Tools</Link>
          <Link href="/category/ai-workflows">AI Workflows</Link>
          <Link href="/category/ai-comparisons">Comparisons</Link>
          <Link href="/about">About</Link>
          <Link href="/newsletter">Newsletter</Link>
        </nav>
      </div>
    </footer>
  );
}
