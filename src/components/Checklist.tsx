"use client";
import { useLocal } from "@/lib/useLocal";

export default function Checklist({ id, items }: { id: string; items: string[] }) {
  const [done, setDone] = useLocal<number[]>(`apa-chk-${id}`, []);
  const toggle = (i: number) => setDone(done.includes(i) ? done.filter((x) => x !== i) : [...done, i]);
  return (
    <div className="card">
      <p><b>{done.length}/{items.length}</b> giấy tờ đã chuẩn bị</p>
      {items.map((t, i) => (
        <label key={i} className={`chk ${done.includes(i) ? "done" : ""}`} style={{ fontWeight: 400 }}>
          <input type="checkbox" checked={done.includes(i)} onChange={() => toggle(i)} />
          <span>{t}</span>
        </label>
      ))}
    </div>
  );
}
