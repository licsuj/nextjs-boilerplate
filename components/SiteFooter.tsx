import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold tracking-tight">ELI5AI.co</div>
          <div className="mt-1 text-sm text-white/45">AI explained simply</div>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-white/65">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/explore" className="transition hover:text-white">
            Explore
          </Link>
          <Link href="/category/ai-basics" className="transition hover:text-white">
            AI Basics
          </Link>
          <Link href="/category/ai-tools" className="transition hover:text-white">
            AI Tools
          </Link>
          <Link href="/category/ai-workflows" className="transition hover:text-white">
            AI Workflows
          </Link>
          <Link href="/category/ai-comparisons" className="transition hover:text-white">
            Comparisons
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/newsletter" className="transition hover:text-white">
            Newsletter
          </Link>
        </nav>
      </div>
    </footer>
  );
}
