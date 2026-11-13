
import Link from "next/link";
import ChatBox from "./ChatBox";

export const metadata = {
  title: "Trợ lý AI APA | Hỏi đáp thủ tục hành chính",
  description:
    "Trợ lý APA hỗ trợ tìm hiểu thủ tục hành chính, giấy tờ cần chuẩn bị, trình tự thực hiện, thời hạn và lệ phí.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main className="apa-assistant-page">
      <style>{`
        .apa-assistant-page {
          --ai-navy: #102b50;
          --ai-blue: #1769d2;
          min-height: 100vh;
          padding: 30px 20px 65px;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 8% 12%, rgba(63, 139, 226, .09), transparent 32%),
            radial-gradient(ellipse at 95% 55%, rgba(68, 151, 239, .07), transparent 30%),
            #f5f8fd;
        }

        .apa-assistant-inner {
          width: 100%;
          max-width: 1060px;
          margin: 0 auto;
        }

        .apa-ai-breadcrumb {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 22px;
          color: #8999ac;
          font-size: 12px;
        }

        .apa-ai-breadcrumb a {
          color: #3978bd;
          font-weight: 650;
          text-decoration: none;
        }

        .apa-ai-breadcrumb a:hover {
          text-decoration: underline;
        }

        .apa-ai-hero {
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
          padding: clamp(26px, 5vw, 43px);
          border: 1px solid rgba(191, 216, 246, .4);
          border-radius: 24px;
          background: linear-gradient(115deg, #102b50 0%, #164b7d 58%, #1769b9 100%);
          box-shadow: 0 16px 42px rgba(16, 52, 94, .14);
        }

        .apa-ai-hero::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -100px;
          top: -190px;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 50%;
          box-shadow:
            0 0 0 30px rgba(255,255,255,.035),
            0 0 0 65px rgba(255,255,255,.025);
          animation: apaAiOrbit 12s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .apa-ai-hero::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          right: 15%;
          bottom: -220px;
          border-radius: 50%;
          background: rgba(87, 174, 255, .22);
          filter: blur(28px);
          animation: apaAiGlow 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes apaAiOrbit {
          from { transform: translate(0, 0) rotate(0deg); }
          to { transform: translate(-25px, 18px) rotate(13deg); }
        }

        @keyframes apaAiGlow {
          from { transform: translateX(0) scale(.9); }
          to { transform: translateX(-35px) scale(1.2); }
        }

        .apa-ai-hero-content {
          position: relative;
          z-index: 1;
          max-width: 710px;
        }

        .apa-ai-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          padding: 7px 12px;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          color: #dcecff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .apa-ai-eyebrow span {
          display: grid;
          place-items: center;
          width: 19px;
          height: 19px;
          border-radius: 6px;
          background: rgba(255,255,255,.17);
          color: white;
        }

        .apa-ai-hero h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(29px, 4.5vw, 42px);
          font-weight: 850;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .apa-ai-hero p {
          max-width: 650px;
          margin: 14px 0 0;
          color: #d6e7f8;
          font-size: 14px;
          line-height: 1.85;
        }

        .apa-ai-features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 0 0 25px;
        }

        .apa-ai-feature {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-width: 0;
          padding: 15px;
          border: 1px solid #e0e9f3;
          border-radius: 15px;
          background: rgba(255,255,255,.9);
          box-shadow: 0 5px 16px rgba(26, 62, 104, .035);
          transition: transform .2s, border-color .2s, box-shadow .2s;
        }

        .apa-ai-feature:hover {
          transform: translateY(-3px);
          border-color: #b6d1ef;
          box-shadow: 0 10px 22px rgba(26, 62, 104, .075);
        }

        .apa-ai-feature-icon {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 11px;
          background: #eaf3ff;
          color: #1769d2;
          font-size: 17px;
        }

        .apa-ai-feature strong {
          display: block;
          margin: 1px 0 4px;
          color: #1a3a5e;
          font-size: 12px;
          font-weight: 800;
        }

        .apa-ai-feature span {
          display: block;
          color: #75869a;
          font-size: 11px;
          line-height: 1.55;
        }

        .apa-ai-chat-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          margin: 0 0 13px;
        }

        .apa-ai-chat-heading h2 {
          margin: 0;
          color: #102b50;
          font-size: 21px;
          font-weight: 850;
          letter-spacing: -.4px;
        }

        .apa-ai-chat-heading p {
          margin: 5px 0 0;
          color: #77889d;
          font-size: 12px;
          line-height: 1.6;
        }

        .apa-ai-beta {
          flex: 0 0 auto;
          padding: 6px 10px;
          border: 1px solid #dce9f8;
          border-radius: 999px;
          background: #edf5ff;
          color: #3979bd;
          font-size: 10px;
          font-weight: 800;
        }

        .apa-ai-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 17px;
          padding: 15px 17px;
          border: 1px solid #dce8f6;
          border-radius: 13px;
          background: #fff;
          color: #687c94;
          font-size: 11px;
          line-height: 1.7;
        }

        .apa-ai-disclaimer span {
          flex: 0 0 auto;
          color: #3479c9;
          font-size: 16px;
        }

        .apa-ai-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 22px;
          color: #8795a7;
          font-size: 11px;
        }

        .apa-ai-bottom a {
          color: #3978bd;
          font-weight: 750;
          text-decoration: none;
        }

        .apa-ai-bottom a:hover {
          text-decoration: underline;
        }

        @media (max-width: 680px) {
          .apa-assistant-page {
            padding: 21px 13px 45px;
          }

          .apa-ai-hero {
            padding: 26px 19px;
            border-radius: 19px;
          }

          .apa-ai-hero h1 {
            letter-spacing: -.7px;
          }

          .apa-ai-hero p {
            font-size: 13px;
          }

          .apa-ai-features {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .apa-ai-feature {
            padding: 12px;
          }

          .apa-ai-chat-heading h2 {
            font-size: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-ai-hero::before,
          .apa-ai-hero::after {
            animation: none;
          }

          .apa-ai-feature {
            transition: none;
          }
        }
      `}</style>

      <div className="apa-assistant-inner">
        <nav className="apa-ai-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <span>Trợ lý APA</span>
        </nav>

        <section className="apa-ai-hero">
          <div className="apa-ai-hero-content">
            <div className="apa-ai-eyebrow">
              <span>✦</span>
              APA DIGITAL ASSISTANT
            </div>

            <h1>Thủ tục hành chính, đơn giản hơn cùng APA</h1>

            <p>
              Không biết bắt đầu từ đâu? Hãy đặt câu hỏi bằng ngôn ngữ
              hằng ngày. APA hỗ trợ bạn tìm hiểu giấy tờ cần chuẩn bị,
              các bước thực hiện và những thông tin cần lưu ý.
            </p>
          </div>
        </section>

        <section className="apa-ai-features">
          <div className="apa-ai-feature">
            <div className="apa-ai-feature-icon">📄</div>
            <div>
              <strong>Hồ sơ cần chuẩn bị</strong>
              <span>Tìm hiểu giấy tờ và thông tin cần có.</span>
            </div>
          </div>

          <div className="apa-ai-feature">
            <div className="apa-ai-feature-icon">🧭</div>
            <div>
              <strong>Hướng dẫn từng bước</strong>
              <span>Hiểu trình tự và cách thực hiện thủ tục.</span>
            </div>
          </div>

          <div className="apa-ai-feature">
            <div className="apa-ai-feature-icon">⏱️</div>
            <div>
              <strong>Thời hạn và lệ phí</strong>
              <span>Tìm hiểu thời gian và chi phí cần lưu ý.</span>
            </div>
          </div>
        </section>

        <section>
          <div className="apa-ai-chat-heading">
            <div>
              <h2>Bắt đầu trò chuyện</h2>
              <p>Nhập câu hỏi của bạn vào khung hội thoại bên dưới.</p>
            </div>
            <span className="apa-ai-beta">PHIÊN BẢN THỬ NGHIỆM</span>
          </div>

          <ChatBox initial={q ?? ""} />
        </section>

        <div className="apa-ai-disclaimer">
          <span>ⓘ</span>
          <div>
            <strong>Lưu ý:</strong> APA hiện đang trong giai đoạn thử nghiệm.
            Nội dung hướng dẫn có thể chưa bao quát mọi trường hợp và không
            thay thế văn bản pháp luật hoặc xác nhận của cơ quan có thẩm quyền.
            Hãy kiểm tra thông tin chính thức trước khi nộp hồ sơ.
          </div>
        </div>

        <div className="apa-ai-bottom">
          Bạn muốn tự tra cứu thủ tục?
          <Link href="/thu-tuc">Khám phá thư viện thủ tục APA →</Link>
        </div>
      </div>
    </main>
  );
}
