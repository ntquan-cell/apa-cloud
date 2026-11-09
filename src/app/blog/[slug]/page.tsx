import { notFound } from "next/navigation";
import { posts } from "@/lib/site";
export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article className="wrap narrow post" style={{ padding: "40px 20px" }}>
      <span className="tag">{p.date}</span><h1>{p.title}</h1>
      {p.body.map((t, i) => <p key={i}>{t}</p>)}
    </article>
  );
}
