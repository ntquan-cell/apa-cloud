"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };
const hints = ["Làm căn cước cần giấy tờ gì?", "Sang tên xe máy thế nào?", "Đăng ký hộ kinh doanh"];

export default function ChatBox({ initial }: { initial: string }) {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: "Xin chào! Mình là APA. Bạn muốn làm thủ tục gì?" }]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const send = async (t: string) => {
    if (!t.trim() || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: t }];
    setMsgs(next); setText(""); setBusy(true);
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const d = (await r.json()) as { reply: string };
      setMsgs([...next, { role: "assistant", content: d.reply }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Mất kết nối, vui lòng thử lại." }]);
    }
    setBusy(false);
  };

  useEffect(() => {
    if (initial && !started.current) { started.current = true; send(initial); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  return (
    <>
      <div className="chat">
        {msgs.map((m, i) => <div key={i} className={`msg ${m.role === "user" ? "u" : "a"}`}>{m.content}</div>)}
        {busy && <div className="msg a">Đang soạn câu trả lời…</div>}
        <div ref={end} />
      </div>
      <div className="chips">{hints.map((h) => <button key={h} className="chip" onClick={() => send(h)}>{h}</button>)}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={text} placeholder="Nhập câu hỏi…" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(text)} />
        <button className="btn" onClick={() => send(text)} disabled={busy}>Gửi</button>
      </div>
    </>
  );
}
