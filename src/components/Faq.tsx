import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section className="s wrap narrow" style={{ paddingTop: 20 }}>
      <h2>Câu hỏi thường gặp</h2>
      {faqs.map(([q, a]) => (
        <details key={q} className="card" style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, color: "var(--navy)" }}>{q}</summary>
          <p style={{ marginTop: 8 }}>{a}</p>
        </details>
      ))}
    </section>
  );
}
