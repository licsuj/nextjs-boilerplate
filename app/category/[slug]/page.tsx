import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";
import { categories, categoryList } from "@/lib/categories";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type Props = {
  params: { slug: string };
};

function getCategory(slug: string) {
  return categories[slug];
}

export function generateStaticParams() {
  return categoryList.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: "Category not found",
      description: "This category could not be found.",
    };
  }

  const canonical = `https://www.eli5ai.co/category/${category.slug}`;

  return {
    title: `${category.title} | ELI5AI.co`,
    description: category.description,
    alternates: { canonical },
    openGraph: {
      title: `${category.title} | ELI5AI.co`,
      description: category.description,
      url: canonical,
      siteName: "ELI5AI.co",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | ELI5AI.co`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const items = explainers.filter((item) => item.category === category.label);
  const featured = category.startHere
    .map((slug) => explainers.find((item) => item.slug === slug))
    .filter((item): item is (typeof explainers)[number] => Boolean(item));

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/explore">Explore</Link>
          <span>/</span>
          <span className="text-white/75">{category.label}</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {category.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            {category.intro}
          </p>
        </header>

        {featured.length > 0 && (
          <section className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Start here
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featured.map((item) => (
                <Link
                  key={item.slug}
                  href={`/explain/${item.slug}`}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/explain/${item.slug}`}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/55">
                {item.category}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {item.description}
              </p>
            </Link>
          ))}
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
