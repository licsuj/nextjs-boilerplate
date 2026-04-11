import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { explainers } from "@/lib/explainers";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const explainer = explainers.find((item) => item.slug === slug);

  if (!explainer) {
    return {
      title: "Not found | ELI5AI.co",
    };
  }

  return {
    title: `${explainer.title} | ELI5AI.co`,
    description: explainer.description,
    alternates: {
      canonical: `https://eli5ai.co/explain/${explainer.slug}`,
    },
    openGraph: {
      title: `${explainer.title} | ELI5AI.co`,
      description: explainer.description,
      url: `https://eli5ai.co/explain/${explainer.slug}`,
      siteName: "ELI5AI.co",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return explainers.map((item) => ({ slug: item.slug }));
}

export default async function ExplainerPage({ params }: Props) {
  const { slug } = await params;
  const explainer = explainers.find((item) => item.slug === slug);

  if (!explainer) notFound();

  const relatedPages = explainers.filter((item) => explainer.related.includes(item.slug));

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
            {explainer.category}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {explainer.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/65">{explainer.description}</p>
        </div>

        <section className="rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">In simple terms</h2>
          <p className="mt-4 text-base leading-8 text-white/75">{explainer.intro}</p>

          <div className="mt-6 space-y-4">
            {explainer.eli5.map((item) => (
              <p key={item} className="text-base leading-8 text-white/75">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Why it matters</h2>
          <p className="mt-4 text-base leading-8 text-white/75">{explainer.whyItMatters}</p>
        </section>

        <section className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Related explainers</h2>
          <div className="mt-4 grid gap-3">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/explain/${item.slug}`}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-black/30"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
