import { explainers } from "@/lib/explainers";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return explainers.map((item) => ({ slug: item.slug }));
}

export default function ExplainerPage({ params }: Props) {
  const explainer = explainers.find((item) => item.slug === params.slug);

  return (
    <main style={{ padding: 40 }}>
      <h1>Explainer debug</h1>
      <pre>{JSON.stringify({ slug: params.slug, found: !!explainer, explainer }, null, 2)}</pre>
    </main>
  );
}
