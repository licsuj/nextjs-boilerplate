import Link from "next/link";
import { notFound } from "next/navigation";
import { explainers } from "@/lib/explainers";

const categoryMap = {
  "ai-basics": "AI Basics",
  "ai-tools": "AI Tools",
  "ai-workflows": "AI Workflows",
  "ai-comparisons": "Comparisons",
} as const;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryMap[slug as keyof typeof categoryMap];

  if (!category) notFound();

  const items = explainers.filter((item) => item.category === category);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{category}</h1>
        <p className="mt-4 max-w-2xl text-white/65">
          Browse simple explainers in the {category.toLowerCase()} category.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/explain/${item.slug}`}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/58">{item.description}</p>
              <div className="mt-5 text-sm font-semibold text-cyan-300">Read explanation →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
