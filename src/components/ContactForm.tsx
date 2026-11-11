"use client";
import { useState } from "react";

export default function ContactForm({ type }: { type: "lien-he" | "demo" }) {
  const [s, setS] = useState<"idle" | "busy" | "ok" | "err">("idle");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const body = { type, ...Object.fromEntries(new FormData(f).entries()) };
    setS("busy");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      setS(r.ok ? "ok" : "err");
      if (r.ok) f.reset();
    } catch { setS("err"); }
  };
  return (
    <form onSubmit={submit} className="card" style={{ display: "grid", gap: 12 }}>
      <div><label>Họ và tên *</label><input name="name" required /></div>
      <div className="form2">
        <div><label>Số điện thoại / Zalo *</label><input name="phone" required /></div>
        <div><label>Email</label><input name="email" type="email" /></div>
      </div>
      {type === "demo" && (
        <div><label>Bạn là</label>
          <select name="role"><option>Người dân</option><option>Doanh nghiệp</option><option>Tổ chức</option><option>Khác</option></select></div>
      )}
      <div><label>Nội dung</label><textarea name="message" rows={4} /></div>
      <button className="btn pill" disabled={s === "busy"}>{s === "busy" ? "Đang gửi…" : type === "demo" ? "Đăng ký demo" : "Gửi liên hệ"}</button>
      {s === "ok" && <p className="ok">Đã gửi thành công. Chúng tôi sẽ liên hệ sớm!</p>}
      {s === "err" && <p className="bad">Gửi chưa được, vui lòng thử lại hoặc gọi điện.</p>}
    </form>
  );
}
