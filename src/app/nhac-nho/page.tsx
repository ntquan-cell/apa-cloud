"use client";
import { useState } from "react";
import { useLocal } from "@/lib/useLocal";

type Item = { id: number; name: string; date: string };
const presets = ["Căn cước", "Hộ chiếu", "Giấy phép lái xe", "Thẻ BHYT", "Đăng kiểm xe", "Hạn nộp thuế"];

export default function Page() {
  const [items, setItems] = useLocal<Item[]>("apa-reminders", []);
  const [name, setName] = useState(presets[0]);
  const [date, setDate] = useState("");
  const days = (d: string) => Math.ceil((new Date(d).getTime() - Date.now()) / 86400000);
  const add = () => date && setItems([...items, { id: Date.now(), name, date }].sort((a, b) => a.date.localeCompare(b.date)));

  return (
    <div className="wrap narrow" style={{ padding: "40px 20px" }}>
      <h2>Nhắc hạn giấy tờ</h2>
      <p>Lưu ngày hết hạn của căn cước, hộ chiếu, bằng lái, BHYT, đăng kiểm… để biết còn bao nhiêu ngày và làm thủ tục kịp thời. Nên làm trước 30–60 ngày.</p>
      <div className="card form2" style={{ alignItems: "end" }}>
        <div><label>Loại giấy tờ</label><select value={name} onChange={(e) => setName(e.target.value)}>{presets.map((p) => <option key={p}>{p}</option>)}</select></div>
        <div><label>Ngày hết hạn</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
        <button className="btn pill" onClick={add}>Thêm</button>
      </div>
      <div style={{ marginTop: 16 }}>
        {items.map((i) => {
          const d = days(i.date);
          const cls = d < 0 ? "bad" : d <= 60 ? "warn" : "ok";
          return (
            <div key={i.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div><b>{i.name}</b><br />{i.date.split("-").reverse().join("/")}</div>
              <span className={cls}>{d < 0 ? `Quá hạn ${-d} ngày` : `Còn ${d} ngày`}</span>
              <button className="btn ghost" onClick={() => setItems(items.filter((x) => x.id !== i.id))}>Xóa</button>
            </div>
          );
        })}
        {!items.length && <p>Chưa có mục nào. Dữ liệu được lưu trên trình duyệt của bạn.</p>}
      </div>
    </div>
  );
}
