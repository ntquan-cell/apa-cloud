import Link from "next/link";
import { posts } from "@/lib/site";
export const metadata = { title: "Blog" };
export default function Page() {
  return (
    <div className="wrap" style={{ padding: "40px 20px" }}>
      <h2>Blog</h2>
      <p>Kinh nghiệm, hướng dẫn và cập nhật về thủ tục hành chính từ đội ngũ APA.</p>
      <div className="grid">{posts.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="card"><span className="tag">{p.date}</span><h3 style={{ marginTop: 8 }}>{p.title}</h3><p>{p.excerpt}</p></Link>
      ))}</div>
    </div>
  );
}
