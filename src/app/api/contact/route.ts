import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const b = (await req.json()) as Record<string, string>;
  if (!b.name?.trim() || !b.phone?.trim()) return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  const row = {
    type: String(b.type ?? "lien-he").slice(0, 20), name: b.name.slice(0, 120), phone: b.phone.slice(0, 30),
    email: (b.email ?? "").slice(0, 120), role: (b.role ?? "").slice(0, 40), message: (b.message ?? "").slice(0, 2000),
  };
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from("leads").insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    console.log("[lead]", row); // Chưa cấu hình Supabase: chỉ ghi log máy chủ
  }
  return NextResponse.json({ ok: true });
}
