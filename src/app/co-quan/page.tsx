"use client";

import { useState } from "react";

const kinds = [
  "Bộ phận Một cửa UBND xã/phường",
  "UBND xã/phường",
  "Công an xã/phường",
  "Phòng Quản lý xuất nhập cảnh",
  "Cơ quan Thuế",
  "Bảo hiểm xã hội",
  "Văn phòng đăng ký đất đai",
  "Trung tâm đăng kiểm",
];

type Coordinates = { latitude: number; longitude: number };

export default function Page() {
  const [kind, setKind] = useState(kinds[0]);
  const [area, setArea] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [locating, setLocating] = useState(false);
  const [message, setMessage] = useState("");

  const searchTerm = coordinates
    ? kind + " gần " + coordinates.latitude + "," + coordinates.longitude
    : [kind, area].filter(Boolean).join(" ");
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(searchTerm);

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setMessage("Trình duyệt chưa hỗ trợ định vị. Bạn có thể nhập địa chỉ để tìm kiếm.");
      return;
    }
    setLocating(true);
    setMessage("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setArea("");
        setMessage("Đã xác định vị trí. Mở bản đồ để xem các cơ quan ở gần.");
        setLocating(false);
      },
      () => {
        setMessage("Chưa thể truy cập vị trí. Hãy cấp quyền định vị hoặc nhập địa chỉ bên dưới.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }

  return (
    <main style={{ minHeight: "100vh", padding: "54px 18px 70px", background: "linear-gradient(180deg,#f1f6fd,#f9fbff)", color: "#173453" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <header style={{ maxWidth: 700, margin: "0 auto 34px", textAlign: "center" }}>
          <span style={{ display: "inline-block", padding: "9px 14px", border: "1px solid #d5e5f7", borderRadius: 30, background: "#fff", color: "#b42332", fontSize: 10, fontWeight: 800, letterSpacing: 1.2 }}>APA · ĐỊNH VỊ DỊCH VỤ CÔNG</span>
          <h1 style={{ margin: "22px 0 12px", color: "#122d4d", fontSize: "clamp(34px,6vw,54px)", lineHeight: 1.15, letterSpacing: -1.5 }}>Tìm cơ quan <span style={{ color: "#c52b3a" }}>gần bạn</span></h1>
          <p style={{ margin: 0, color: "#64778f", fontSize: 15, lineHeight: 1.85 }}>Chọn loại cơ quan và sử dụng vị trí hiện tại hoặc nhập địa chỉ. APA sẽ mở kết quả trên bản đồ để bạn lựa chọn điểm đến phù hợp.</p>
        </header>

        <section style={{ padding: "28px", border: "1px solid #dce7f4", borderRadius: 20, background: "#fff", boxShadow: "0 18px 50px rgba(27,67,111,.09)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 22, borderBottom: "1px solid #edf2f8" }}>
            <div style={{ display: "grid", width: 50, height: 50, placeItems: "center", borderRadius: 14, background: "#fff0f1", color: "#bf2938", fontSize: 27 }}>⌖</div>
            <div><span style={{ color: "#b42332", fontSize: 9, fontWeight: 800, letterSpacing: 1.3 }}>TÌM KIẾM ĐỊA ĐIỂM</span><h2 style={{ margin: "5px 0", color: "#173453", fontSize: 21 }}>Bạn cần đến cơ quan nào?</h2><p style={{ margin: 0, color: "#8291a4", fontSize: 12 }}>Thông tin càng cụ thể, kết quả càng phù hợp.</p></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 20, padding: "24px 0" }}>
            <label style={{ display: "grid", gap: 9, color: "#344e6b", fontSize: 12, fontWeight: 750 }}>1. Loại cơ quan
              <select value={kind} onChange={(event) => setKind(event.target.value)} style={{ width: "100%", minHeight: 49, padding: "0 13px", border: "1px solid #dce6f0", borderRadius: 10, background: "#fbfdff", color: "#24415f", fontSize: 13 }}>
                {kinds.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <div style={{ display: "grid", alignContent: "start", gap: 9, color: "#344e6b", fontSize: 12, fontWeight: 750 }}>2. Vị trí của bạn
              <button type="button" onClick={useCurrentLocation} disabled={locating} style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 66, padding: "10px 13px", border: coordinates ? "1px solid #a8dec9" : "1px solid #f0cbd0", borderRadius: 10, background: coordinates ? "#f0fbf6" : "#fff7f7", color: coordinates ? "#16805a" : "#b42332", textAlign: "left", cursor: locating ? "wait" : "pointer" }}>
                <span style={{ fontSize: 23 }}>◎</span><span style={{ flex: 1 }}><strong style={{ display: "block", fontSize: 12 }}>{locating ? "Đang xác định vị trí..." : coordinates ? "Đã dùng vị trí hiện tại" : "Sử dụng vị trí hiện tại"}</strong><small style={{ display: "block", marginTop: 4, color: "#8292a6", fontSize: 10, fontWeight: 400 }}>Cho phép trình duyệt truy cập vị trí thiết bị</small></span><span>→</span>
              </button>
            </div>
            <label style={{ display: "grid", gridColumn: "1 / -1", gap: 9, color: "#344e6b", fontSize: 12, fontWeight: 750 }}>Hoặc nhập địa chỉ / xã, phường / tỉnh, thành phố
              <input value={area} onChange={(event) => { setArea(event.target.value); setCoordinates(null); setMessage(""); }} placeholder="Ví dụ: Ba Vì, Hà Nội" autoComplete="street-address" style={{ width: "100%", minHeight: 49, boxSizing: "border-box", padding: "0 13px", border: "1px solid #dce6f0", borderRadius: 10, background: "#fbfdff", color: "#24415f", fontSize: 13 }} />
            </label>
          </div>

          {message && <p role="status" style={{ margin: "0 0 14px", color: coordinates ? "#16805a" : "#a7651c", fontSize: 12, lineHeight: 1.6 }}>{coordinates ? "✓ " : "ⓘ "}{message}</p>}
          <a href={mapsUrl} target="_blank" rel="noreferrer" onClick={(event) => { if (!coordinates && !area.trim()) { event.preventDefault(); setMessage("Hãy xác định vị trí hiện tại hoặc nhập địa chỉ trước khi tìm kiếm."); } }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, minHeight: 53, padding: "0 18px", borderRadius: 11, background: "linear-gradient(100deg,#b51f32,#d43b48)", color: "#fff", boxShadow: "0 9px 22px rgba(181,31,50,.22)", fontSize: 13, fontWeight: 800, textDecoration: "none" }}>
            <span style={{ fontSize: 20 }}>⌕</span> Tìm cơ quan trên Google Maps <b style={{ marginLeft: "auto", fontSize: 17 }}>↗</b>
          </a>
          <p style={{ margin: "12px 0 0", color: "#8b9aab", textAlign: "center", fontSize: 10, lineHeight: 1.6 }}>Vị trí chỉ được sử dụng để tạo tìm kiếm, APA không lưu tọa độ của bạn.</p>
        </section>

        <aside style={{ display: "flex", gap: 12, marginTop: 18, padding: "17px 19px", border: "1px solid #dce9f5", borderRadius: 14, background: "#f8fbff" }}>
          <span style={{ display: "grid", width: 25, height: 25, flexShrink: 0, placeItems: "center", borderRadius: "50%", background: "#fff0f1", color: "#b42332", fontWeight: 800 }}>i</span>
          <div><strong style={{ color: "#35516f", fontSize: 12 }}>Lưu ý trước khi đến cơ quan</strong><p style={{ margin: "5px 0 0", color: "#72849a", fontSize: 11, lineHeight: 1.75 }}>Kết quả bản đồ do Google Maps cung cấp, có thể chưa phản ánh đầy đủ giờ làm việc hoặc thay đổi địa chỉ. Bạn nên kiểm tra thông tin trên kênh chính thức của cơ quan trước khi đi.</p></div>
        </aside>
        <p style={{ marginTop: 25, textAlign: "center" }}><a href="/san-pham" style={{ color: "#a83240", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>← Quay lại hệ sinh thái sản phẩm APA</a></p>
      </div>
    </main>
  );
}