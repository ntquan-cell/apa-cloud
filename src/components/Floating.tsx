"use client";

import { useState } from "react";

export default function Floating() {
  const [question, setQuestion] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = question.trim();
    if (!value) return;
    window.location.href = `/tro-ly?q=${encodeURIComponent(value)}`;
  }

  return (
    <aside className="float-ai" aria-label="Hỏi đáp nhanh với APA AI">
      <div className="float-ai-avatar" aria-hidden="true">✦</div>
      <div className="float-ai-copy">
        <strong>APA AI</strong>
        <span>Trợ lý hành chính số</span>
      </div>
      <form className="float-ai-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="float-ai-question">Nhập câu hỏi cho APA AI</label>
        <input
          id="float-ai-question"
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Bạn cần hỏi thủ tục gì?"
          maxLength={500}
        />
        <button type="submit" aria-label="Gửi câu hỏi cho APA AI">
          Hỏi ngay <span aria-hidden="true">➜</span>
        </button>
      </form>
    </aside>
  );
}
