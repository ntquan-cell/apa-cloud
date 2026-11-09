import OpenAI from "openai";
import { NextResponse } from "next/server";
import { searchProcedures, type Procedure } from "@/lib/data";

type Msg = { role: "user" | "assistant"; content: string };

const brief = (p: Procedure) =>
  `${p.title}\n- Cơ quan: ${p.agency}\n- Thời hạn: ${p.time}\n- Phí: ${p.fee}\n- Giấy tờ: ${p.docs.join("; ")}\n- Các bước: ${p.steps.join(" → ")}\n- Lưu ý: ${p.tips.join("; ")}\n- Căn cứ: ${p.law}`;

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Msg[] };
  const last = messages.filter((m) => m.role === "user").at(-1)?.content ?? "";
  const hits = searchProcedures(last, 3);
  const context = hits.map(brief).join("\n\n");

  if (!process.env.OPENAI_API_KEY) {
    const reply = hits.length
      ? `Mình tìm thấy thủ tục phù hợp nhất:\n\n${brief(hits[0])}\n\n(Chưa cấu hình OPENAI_API_KEY nên đây là câu trả lời từ dữ liệu có sẵn.)`
      : "Mình chưa có thủ tục phù hợp trong dữ liệu. Bạn thử nêu rõ hơn, ví dụ: “làm căn cước”, “sang tên xe máy”, “đăng ký hộ kinh doanh”.";
    return NextResponse.json({ reply });
  }

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const res = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "Bạn là APA – trợ lý hành chính số cho người dân Việt Nam. Trả lời bằng tiếng Việt, ngắn gọn, dễ hiểu, theo từng bước. " +
            "Ưu tiên dùng DỮ LIỆU THAM KHẢO bên dưới; nếu thiếu thông tin thì nói rõ và khuyên kiểm tra Cổng dịch vụ công quốc gia hoặc cơ quan tiếp nhận. " +
            "Không bịa số tiền, thời hạn, điều luật. Trường hợp phức tạp (tranh chấp, đất đai) khuyên gặp luật sư.\n\nDỮ LIỆU THAM KHẢO:\n" +
            (context || "(không có)"),
        },
        ...messages.slice(-10),
      ],
    });
    return NextResponse.json({ reply: res.choices[0]?.message?.content ?? "Xin lỗi, chưa có câu trả lời." });
  } catch {
    return NextResponse.json({ reply: "Trợ lý AI đang bận, vui lòng thử lại sau ít phút." }, { status: 200 });
  }
}
