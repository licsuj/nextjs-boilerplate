import Link from "next/link";
import { categoryList } from "@/lib/categories";

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

          {categoryList.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              {category.label}
            </Link>
          ))}

          <Link href="/about">About</Link>
          <Link href="/newsletter">Newsletter</Link>
        </nav>
      </div>
    </footer>
  );
}
