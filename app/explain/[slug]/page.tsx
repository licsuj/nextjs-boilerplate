import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";
import { categories } from "@/lib/categories";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type Props = {
  params: Promise<{ slug: string }>;
};

function getExplainer(slug: string) {
  return explainers.find((item) => item.slug === slug);
}

function getCategorySlug(categoryLabel: string) {
  const match = Object.values(categories).find(
    (category) => category.label === categoryLabel
  );
  return match?.slug ?? "ai-basics";
}

export function generateStaticParams() {
  return explainers.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const explainer = getExplainer(slug);

  if (!explainer) {
    return {
      title: "Not found",
      description: "This explainer could not be found.",
    };
  }

  const canonical = `https://www.eli5ai.co/explain/${explainer.slug}`;

  return {
    title: `${explainer.title} | ELI5AI.co`,
    description: explainer.description,
    alternates: { canonical },
    openGraph: {
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
      url: canonical,
      siteName: "ELI5AI.co",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
    },
  };
}

export default async function ExplainerPage({ params }: Props) {
  const { slug } = await params;
  const explainer = getExplainer(slug);

  if (!explainer) {
    notFound();
  }

  const categorySlug = getCategorySlug(explainer.category);
  const relatedPages = explainers.filter((item) =>
    explainer.related.includes(item.slug)
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/category/${categorySlug}`}>{explainer.category}</Link>
          <span>/</span>
          <span className="text-white/75">{explainer.title}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {explainer.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            {explainer.description}
          </p>
        </header>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            In simple terms
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            {explainer.intro}
          </p>

          <div className="mt-6 space-y-4">
            {explainer.eli5.map((item) => (
              <p key={item} className="text-base leading-8 text-white/75">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why it matters
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            {explainer.whyItMatters}
          </p>
        </section>

        {relatedPages.length > 0 && (
          <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Related explainers
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/explain/${item.slug}`}
                  className="rounded-[22px] border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
                >
                  <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                    {item.category}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
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
      </article>

      <SiteFooter />
    </main>
  );
}
