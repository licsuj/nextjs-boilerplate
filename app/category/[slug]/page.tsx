import { categories } from "@/lib/categories";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: Props) {
  const category = categories[params.slug];

  return (
    <main style={{ padding: 40 }}>
      <h1>Category debug</h1>
      <pre>{JSON.stringify({ slug: params.slug, found: !!category, category }, null, 2)}</pre>
    </main>
  );
}
