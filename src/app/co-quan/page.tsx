"use client";
import { useState } from "react";

const kinds = ["Bộ phận Một cửa UBND xã/phường", "Công an xã/phường (cư trú, căn cước)", "Phòng Quản lý xuất nhập cảnh", "Chi cục Thuế", "Bảo hiểm xã hội", "Văn phòng đăng ký đất đai", "Trung tâm đăng kiểm"];

export default function Page() {
  const [kind, setKind] = useState(kinds[0]);
  const [area, setArea] = useState("");
  const url = `https://www.google.com/maps/search/${encodeURIComponent(`${kind} ${area}`.trim())}`;
  return (
    <div className="wrap narrow" style={{ padding: "40px 20px" }}>
      <h2>Tìm cơ quan gần nhất</h2>
      <p>Chọn loại cơ quan và khu vực của bạn để xem địa điểm, đường đi và giờ làm việc trên bản đồ.</p>
      <div className="card" style={{ display: "grid", gap: 12 }}>
        <div><label>Loại cơ quan</label><select value={kind} onChange={(e) => setKind(e.target.value)}>{kinds.map((k) => <option key={k}>{k}</option>)}</select></div>
        <div><label>Khu vực (phường/xã, quận/huyện, tỉnh)</label><input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Ví dụ: Cầu Giấy, Hà Nội" /></div>
        <a className="btn pill" href={url} target="_blank" rel="noreferrer">Mở Google Maps</a>
      </div>
  );
}
