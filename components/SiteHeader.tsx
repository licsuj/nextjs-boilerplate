import Link from "next/link";

type SiteHeaderProps = {
  showCategoryLinks?: boolean;
};

export default function SiteHeader({
  showCategoryLinks = true,
}: SiteHeaderProps) {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-sm font-bold">E5</div>
          <div>
            <div className="font-semibold">ELI5AI.co</div>
            <div className="text-xs text-white/55">AI explained simply</div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/75">
          <Link href="/explore" className="hover:text-white">
            Explore
          </Link>
          <Link href="/start-here" className="hover:text-white">
            Start here
          </Link>
          {showCategoryLinks && (
            <>
              <Link href="/category/ai-basics" className="hover:text-white">
                AI Basics
              </Link>
              <Link href="/category/ai-tools" className="hover:text-white">
                AI Tools
              </Link>
              <Link href="/category/ai-workflows" className="hover:text-white">
                AI Workflows
              </Link>
              <Link href="/category/ai-comparisons" className="hover:text-white">
                Comparisons
              </Link>
            </>
          )}
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/newsletter" className="hover:text-white">
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
