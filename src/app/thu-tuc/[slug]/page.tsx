import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist from "@/components/Checklist";
import { procedures } from "@/lib/data";

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = procedures.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = procedures.find((x) => x.slug === slug);
  if (!p) notFound();
  const rows: [string, string][] = [
    ["Đối tượng thực hiện", p.who], ["Cơ quan giải quyết", p.agency], ["Cách thức thực hiện", p.method],
    ["Thời hạn giải quyết", p.time], ["Phí, lệ phí", p.fee], ["Căn cứ pháp lý", p.law],
  ];
  return (
    <div className="wrap" style={{ padding: "32px 20px" }}>
      <Link href="/thu-tuc">← Tất cả thủ tục</Link>
      <h2 style={{ marginTop: 12 }}>{p.title}</h2>
      <p>{p.summary}</p>
      <table className="t"><tbody>{rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
      <h2 style={{ marginTop: 28 }}>Giấy tờ cần chuẩn bị</h2>
      <Checklist id={p.slug} items={p.docs} />
      <h2 style={{ marginTop: 28 }}>Trình tự thực hiện</h2>
      <ol>{p.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <h2 style={{ marginTop: 28 }}>Lưu ý để không bị trả hồ sơ</h2>
      <ul>{p.tips.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className="note">Thông tin tham khảo, quy định có thể thay đổi. Hãy đối chiếu với Cổng Dịch vụ công quốc gia hoặc cơ quan tiếp nhận.</div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={`/tro-ly?q=${encodeURIComponent(p.title)}`}>Hỏi trợ lý về thủ tục này</Link>
        <Link className="btn ghost" href="/ho-so">Điền tờ khai</Link>
      </div>
    </div>
  );
}
