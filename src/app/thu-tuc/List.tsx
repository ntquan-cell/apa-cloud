"use client";
import Link from "next/link";
import { useState } from "react";
import { groups, norm, procedures } from "@/lib/data";

export default function List({ initialGroup }: { initialGroup: string }) {
  const [g, setG] = useState(initialGroup);
  const [q, setQ] = useState("");
  const items = procedures.filter(
    (p) => (!g || p.group === g) && (!q || norm(p.title + p.summary).includes(norm(q)))
  );
  return (
    <>
      <input placeholder="Tìm thủ tục… (ví dụ: căn cước, sang tên xe)" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="chips">
        <button className={`chip ${!g ? "on" : ""}`} onClick={() => setG("")}>Tất cả</button>
        {groups.map((x) => (
          <button key={x.id} className={`chip ${g === x.id ? "on" : ""}`} onClick={() => setG(x.id)}>{x.icon} {x.name}</button>
        ))}
      </div>
      <div className="grid">
        {items.map((p) => (
          <Link key={p.slug} href={`/thu-tuc/${p.slug}`} className="card">
            <span className="tag">{groups.find((x) => x.id === p.group)?.name}</span>
            <h3 style={{ marginTop: 8 }}>{p.title}</h3>
            <p>{p.summary}</p>
          </Link>
        ))}
        {!items.length && <p>Chưa tìm thấy thủ tục phù hợp. Thử hỏi trợ lý AI.</p>}
      </div>
    </>
  );
}
