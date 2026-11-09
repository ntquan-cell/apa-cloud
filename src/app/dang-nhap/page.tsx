"use client";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function Page() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const sb = getSupabase();

  const go = async () => {
    if (!sb) return setMsg("Chưa cấu hình Supabase (xem README).");
    const { error } = mode === "in" ? await sb.auth.signInWithPassword({ email, password: pw }) : await sb.auth.signUp({ email, password: pw });
    setMsg(error ? error.message : mode === "in" ? "Đăng nhập thành công!" : "Đã đăng ký. Hãy kiểm tra email để xác nhận (nếu bật xác nhận).");
  };
  return (
    <div className="wrap narrow" style={{ padding: "40px 20px" }}>
      <h2>{mode === "in" ? "Đăng nhập" : "Tạo tài khoản"}</h2>
      <p>Tài khoản giúp bạn quản lý hồ sơ và nhận hỗ trợ tốt hơn. Bạn vẫn có thể dùng thư viện thủ tục, trợ lý AI và nhắc hạn mà không cần đăng nhập.</p>
      <ul style={{ color: "#41506b" }}>
        <li>Quản lý thông tin cá nhân an toàn.</li>
        <li>Đồng bộ hồ sơ giữa các thiết bị (đang phát triển).</li>
        <li>Nhận tư vấn và theo dõi yêu cầu hỗ trợ.</li>
      </ul>
      <div className="card" style={{ display: "grid", gap: 12 }}>
        <div><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div><label>Mật khẩu</label><input type="password" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
        <button className="btn pill" onClick={go}>{mode === "in" ? "Đăng nhập" : "Đăng ký"}</button>
        <button className="btn ghost" onClick={() => setMode(mode === "in" ? "up" : "in")}>{mode === "in" ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}</button>
        {msg && <p className="warn">{msg}</p>}
      </div>
    </div>
  );
}
