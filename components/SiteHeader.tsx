import Link from "next/link";

type SiteHeaderProps = {
  showCategoryLinks?: boolean;
};

export default function SiteHeader({
  showCategoryLinks = true,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-neutral-950">
            E5
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">ELI5AI.co</div>
            <div className="text-xs text-white/45">AI explained simply</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="/explore" className="transition hover:text-white">
            Explore
          </Link>

          {showCategoryLinks && (
            <>
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
            </>
          )}

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/newsletter" className="transition hover:text-white">
            Newsletter
          </Link>
        </nav>

        <Link
          href="/newsletter"
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Join free
        </Link>
      </div>
    </header>
  );
}
