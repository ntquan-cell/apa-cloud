"use client";
import { useLocal } from "@/lib/useLocal";

type Profile = Record<string, string>;
const fields: [string, string, string, string?][] = [
  ["hoTen", "Họ và tên", "Viết IN HOA, có dấu, đúng như căn cước"],
  ["ngaySinh", "Ngày sinh", "Định dạng ngày/tháng/năm", "date"],
  ["gioiTinh", "Giới tính", ""],
  ["cccd", "Số định danh/CCCD", "12 chữ số"],
  ["ngayCap", "Ngày cấp", "", "date"],
  ["noiCap", "Nơi cấp", ""],
  ["diaChi", "Nơi cư trú", "Ghi đủ: số nhà, đường/thôn, xã, tỉnh"],
  ["sdt", "Số điện thoại", ""],
];

const fmtDate = (s?: string) => (s ? s.split("-").reverse().join("/") : "…/…/……");

export default function Page() {
  const [p, setP, ready] = useLocal<Profile>("apa-profile", {});
  const set = (k: string, v: string) => setP({ ...p, [k]: v });
  const v = (k: string, d = "………………") => (p[k] ? p[k] : d);

  return (
    <div className="wrap" style={{ padding: "32px 20px" }}>
      <div className="noprint">
        <h2>Hồ sơ cá nhân & tờ khai tự điền</h2>
        <p>Thông tin được lưu ngay trên máy của bạn (trình duyệt), không gửi lên máy chủ.</p>
        <div className="form2">
          {fields.map(([k, label, hint, type]) => (
            <div key={k}>
              <label>{label}</label>
              <input
                type={type === "date" ? "date" : "text"}
                value={p[k] ?? ""}
                onChange={(e) => set(k, k === "hoTen" ? e.target.value.toUpperCase() : e.target.value)}
              />
              {hint && <small style={{ color: "#5b6a85" }}>{hint}</small>}
            </div>
          ))}
        </div>
        <div className="chips" style={{ marginTop: 18 }}>
          <button className="btn" onClick={() => window.print()} disabled={!ready}>In tờ khai</button>
          <button className="btn ghost" onClick={() => confirm("Xóa toàn bộ hồ sơ đã lưu?") && setP({})}>Xóa hồ sơ</button>
        </div>
      </div>
      <div className="paper">
        <p style={{ textAlign: "center", margin: 0 }}><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br />Độc lập – Tự do – Hạnh phúc</p>
        <h3>Tờ khai thông tin cá nhân</h3>
        <p>Họ và tên: <span className="dots">{v("hoTen")}</span></p>
        <p>Ngày sinh: <span className="dots">{fmtDate(p.ngaySinh)}</span> Giới tính: <span className="dots">{v("gioiTinh", "……")}</span></p>
        <p>Số định danh/CCCD: <span className="dots">{v("cccd")}</span></p>
        <p>Ngày cấp: <span className="dots">{fmtDate(p.ngayCap)}</span> Nơi cấp: <span className="dots">{v("noiCap")}</span></p>
        <p>Nơi cư trú: <span className="dots">{v("diaChi")}</span></p>
        <p>Điện thoại: <span className="dots">{v("sdt")}</span></p>
        <p style={{ textAlign: "right" }}>Người khai ký, ghi rõ họ tên</p>
      </div>
      <div className="note noprint">Đây là mẫu tham khảo để chuẩn bị thông tin. Khi nộp hồ sơ, hãy dùng đúng biểu mẫu chính thức của từng thủ tục.</div>
    </div>
  );
}
