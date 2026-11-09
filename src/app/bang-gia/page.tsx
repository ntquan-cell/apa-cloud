import Link from "next/link";
import { plans } from "@/lib/site";
export const metadata = { title: "Bảng giá" };
export default function Page() {
  return (
    <div className="wrap" style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center" }}>Bảng giá</h2>
      <div className="grid">
        {plans.map((p) => (
          <div key={p.name} className={`card price ${p.hot ? "hot" : ""}`}>
            <h3>{p.name}</h3>
            <div className="p">{p.price} <small style={{ fontSize: ".9rem", fontWeight: 400 }}>{p.note}</small></div>
            <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <Link className={`btn ${p.hot ? "pill" : "ghost"}`} href={p.href}>{p.cta}</Link>
          </div>
        ))}
      </div>
      <div className="note">Dịch vụ làm hộ trọn gói và tư vấn 1-1 với luật sư đối tác được báo phí riêng theo từng vụ việc. Giá và tính năng có thể thay đổi.</div>
    </div>
  );
}
