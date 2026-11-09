import ChatBox from "./ChatBox";

export const metadata = { title: "Hỏi trợ lý AI", description: "Hỏi đáp thủ tục hành chính với trợ lý AI APA: giấy tờ cần chuẩn bị, trình tự, thời hạn, lệ phí." };

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  return (
    <div className="wrap" style={{ padding: "32px 20px", maxWidth: 760 }}>
      <h2>Hỏi trợ lý AI</h2>
      <p>Hỏi về giấy tờ cần chuẩn bị, các bước thực hiện, nơi nộp hồ sơ, thời hạn và lệ phí của hơn 30 thủ tục. Trợ lý trả lời bằng tiếng Việt đời thường, từng bước một.</p>
      <ChatBox initial={q ?? ""} />
      <div className="note">Trợ lý chỉ mang tính hướng dẫn tham khảo, không thay thế tư vấn pháp lý.</div>
    </div>
  );
}
