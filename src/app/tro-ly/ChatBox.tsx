
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

const hints = [
  { icon: "🪪", text: "Làm căn cước cần giấy tờ gì?" },
  { icon: "🏍️", text: "Sang tên xe máy thế nào?" },
  { icon: "🏪", text: "Đăng ký hộ kinh doanh" },
  { icon: "🏠", text: "Thủ tục đăng ký thường trú" },
];

function getLocalReply(question: string) {
  const q = question.toLowerCase();

  if (
    q.includes("căn cước") ||
    q.includes("cccd") ||
    q.includes("chứng minh nhân dân")
  ) {
    return `Về thủ tục cấp hoặc đổi thẻ căn cước, APA có thể hướng dẫn bạn theo các bước cơ bản:

**1. Chuẩn bị**
• Thông tin định danh cá nhân.
• Thẻ căn cước hiện có nếu thực hiện cấp đổi.
• Giấy tờ liên quan nếu thông tin cá nhân cần được điều chỉnh.

**2. Thực hiện**
• Tra cứu địa điểm tiếp nhận hồ sơ.
• Đến cơ quan có thẩm quyền để thực hiện thủ tục và thu nhận thông tin sinh trắc học khi được yêu cầu.
• Nhận giấy hẹn và theo dõi kết quả.

**3. Lưu ý**
Thành phần hồ sơ và cách thực hiện phụ thuộc vào trường hợp cấp mới, cấp đổi hay cấp lại.

Bạn đang muốn **làm căn cước lần đầu, đổi thẻ hay cấp lại do mất**?`;
  }

  if (
    q.includes("sang tên xe") ||
    q.includes("xe máy") ||
    q.includes("ô tô") ||
    q.includes("oto")
  ) {
    return `Để sang tên xe, bạn cần thực hiện các bước cơ bản sau:

**1. Chuẩn bị hồ sơ**
• Giấy tờ của chủ xe theo quy định.
• Giấy tờ chứng minh việc chuyển quyền sở hữu.
• Giấy chứng nhận đăng ký xe và biển số xe theo trường hợp cụ thể.

**2. Thực hiện thủ tục**
• Làm thủ tục thu hồi đăng ký, biển số khi thuộc trường hợp phải thu hồi.
• Thực hiện nghĩa vụ tài chính theo quy định.
• Đăng ký sang tên tại cơ quan đăng ký xe có thẩm quyền.

**3. Lưu ý**
Thủ tục có thể khác nhau tùy xe mua cùng tỉnh hay khác tỉnh, xe đã qua nhiều lần mua bán hoặc xe thiếu giấy tờ.

Bạn mua xe **cùng tỉnh hay khác tỉnh**?`;
  }

  if (
    q.includes("hộ kinh doanh") ||
    q.includes("kinh doanh cá thể") ||
    q.includes("mở cửa hàng")
  ) {
    return `Để đăng ký hộ kinh doanh, bạn có thể tham khảo quy trình sau:

**1. Chuẩn bị thông tin**
• Tên hộ kinh doanh dự kiến.
• Địa chỉ địa điểm kinh doanh.
• Ngành, nghề kinh doanh.
• Thông tin chủ hộ và các thành viên đăng ký (nếu có).

**2. Nộp hồ sơ**
• Chuẩn bị giấy đề nghị đăng ký hộ kinh doanh và các giấy tờ liên quan.
• Nộp tại cơ quan đăng ký kinh doanh cấp xã có thẩm quyền hoặc qua phương thức trực tuyến nếu được hỗ trợ.

**3. Sau khi đăng ký**
• Thực hiện nghĩa vụ thuế.
• Tìm hiểu các giấy phép, điều kiện chuyên ngành nếu ngành nghề kinh doanh có yêu cầu.

Bạn dự định mở hộ kinh doanh trong lĩnh vực nào và ở tỉnh/thành phố nào?`;
  }

  if (
    q.includes("thường trú") ||
    q.includes("tạm trú") ||
    q.includes("cư trú") ||
    q.includes("chuyển khẩu")
  ) {
    return `Về thủ tục cư trú, trước tiên cần xác định bạn muốn đăng ký thường trú, đăng ký tạm trú hay điều chỉnh thông tin cư trú.

**Thông tin thường cần chuẩn bị**
• Thông tin định danh cá nhân.
• Thông tin về chỗ ở hợp pháp.
• Giấy tờ chứng minh chỗ ở hợp pháp hoặc quan hệ với chủ hộ nếu thuộc trường hợp cần chứng minh.

**Cách thực hiện**
• Nộp hồ sơ tại cơ quan đăng ký cư trú có thẩm quyền hoặc qua dịch vụ công trực tuyến.
• Cung cấp thông tin và giấy tờ theo yêu cầu.
• Theo dõi kết quả giải quyết.

Bạn đang muốn **đăng ký thường trú, tạm trú hay chuyển nơi cư trú**?`;
  }

  if (
    q.includes("đất") ||
    q.includes("sổ đỏ") ||
    q.includes("sổ hồng") ||
    q.includes("sang tên đất")
  ) {
    return `Các thủ tục về đất đai có nhiều trường hợp khác nhau, ví dụ cấp giấy chứng nhận, chuyển nhượng, đăng ký biến động hoặc cấp đổi giấy chứng nhận.

Để hướng dẫn đúng trường hợp, cần xác định:

**1. Loại thủ tục**
• Làm sổ đỏ lần đầu.
• Sang tên khi mua bán, tặng cho hoặc thừa kế.
• Đính chính hoặc cấp đổi giấy chứng nhận.
• Đăng ký biến động đất đai.

**2. Thông tin cần làm rõ**
• Đất ở hay đất nông nghiệp?
• Đã có giấy chứng nhận chưa?
• Thửa đất ở địa phương nào?

Bạn đang cần thực hiện thủ tục đất đai nào?`;
  }

  if (
    q.includes("bảo hiểm") ||
    q.includes("bhyt") ||
    q.includes("bhxh") ||
    q.includes("bảo hiểm xã hội")
  ) {
    return `APA có thể hỗ trợ bạn tìm hiểu các thủ tục bảo hiểm phổ biến:

• Tham gia bảo hiểm y tế.
• Cấp lại thẻ bảo hiểm y tế.
• Tham gia hoặc điều chỉnh thông tin bảo hiểm xã hội.
• Hưởng chế độ bảo hiểm xã hội.
• Giải quyết chế độ thai sản, ốm đau hoặc thất nghiệp.

Mỗi thủ tục có thành phần hồ sơ và điều kiện riêng.

Bạn đang muốn làm **bảo hiểm y tế, bảo hiểm xã hội hay giải quyết chế độ**?`;
  }

  if (
    q.includes("hộ chiếu") ||
    q.includes("passport") ||
    q.includes("xuất cảnh")
  ) {
    return `Đối với thủ tục cấp hộ chiếu, bạn cần xác định mình làm cấp mới, cấp lại hay đổi hộ chiếu.

**Các bước tham khảo**
1. Chuẩn bị thông tin định danh và ảnh theo yêu cầu.
2. Khai thông tin đề nghị cấp hộ chiếu.
3. Nộp hồ sơ theo phương thức được cơ quan có thẩm quyền hỗ trợ.
4. Thanh toán lệ phí và theo dõi kết quả.

Bạn đang làm hộ chiếu **lần đầu, cấp lại do mất hay đổi hộ chiếu hết hạn**?`;
  }

  if (
    q.includes("thuế") ||
    q.includes("nộp thuế") ||
    q.includes("mã số thuế")
  ) {
    return `Về thủ tục thuế, APA có thể hỗ trợ bạn xác định loại nghĩa vụ cần thực hiện.

Một số trường hợp phổ biến:
• Đăng ký thuế và mã số thuế.
• Kê khai và nộp thuế.
• Điều chỉnh thông tin đăng ký thuế.
• Quyết toán thuế thu nhập cá nhân.
• Nghĩa vụ thuế của hộ kinh doanh.

Để hướng dẫn chính xác, bạn cho APA biết mình là **cá nhân, người lao động hay hộ kinh doanh/doanh nghiệp** nhé.`;
  }

  return `Mình đã nhận được câu hỏi của bạn.

Để hướng dẫn đúng thủ tục, APA cần xác định rõ hơn trường hợp bạn đang gặp.

Bạn có thể cho mình biết:
• Bạn muốn làm thủ tục gì?
• Bạn thực hiện cho cá nhân, doanh nghiệp hay tổ chức?
• Hồ sơ được thực hiện tại tỉnh/thành phố nào?

Bạn cũng có thể chọn một câu hỏi gợi ý bên dưới để bắt đầu.

*Lưu ý: Hiện APA đang ở chế độ hỗ trợ thử nghiệm. Nội dung trả lời tự động cần được đối chiếu với quy định và cơ quan có thẩm quyền trước khi thực hiện.*`;
}

export default function ChatBox({ initial }: { initial: string }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Xin chào! Mình là APA – Trợ lý hành chính số. 👋\n\nMình có thể giúp bạn tìm hiểu thủ tục, giấy tờ cần chuẩn bị, trình tự thực hiện và những lưu ý khi nộp hồ sơ.\n\nHôm nay bạn cần APA hỗ trợ việc gì?",
    },
  ]);

  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null);

  const end = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const send = useCallback(
    async (value: string) => {
      const question = value.trim();

      if (!question || busy) return;

      const next: Msg[] = [
        ...msgs,
        { role: "user", content: question },
      ];

      setMsgs(next);
      setText("");
      setBusy(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
        });

        if (!response.ok) {
          throw new Error("API chưa sẵn sàng");
        }

        const data = (await response.json()) as {
          reply?: string;
        };

        if (!data.reply?.trim()) {
          throw new Error("Không nhận được nội dung trả lời");
        }

        setApiAvailable(true);
        setMsgs([
          ...next,
          { role: "assistant", content: data.reply },
        ]);
      } catch {
        setApiAvailable(false);

        setMsgs([
          ...next,
          {
            role: "assistant",
            content: getLocalReply(question),
          },
        ]);
      } finally {
        setBusy(false);
      }
    },
    [busy, msgs]
  );

  useEffect(() => {
    if (initial && !started.current) {
      started.current = true;
      void send(initial);
    }
  }, [initial, send]);

  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, busy]);

  return (
    <section className="apa-chat-assistant">
      <style>{`
        .apa-chat-assistant {
          --chat-navy: #102b50;
          --chat-blue: #1769d2;
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid #e0e9f3;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(21, 55, 95, .09);
          color: #203850;
        }

        .apa-chat-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          overflow: hidden;
          padding: 19px 22px;
          background: linear-gradient(110deg, #102b50, #14528b 70%, #1769b9);
          color: white;
        }

        .apa-chat-header::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -70px;
          top: -115px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
          box-shadow: 0 0 0 25px rgba(255,255,255,.035);
          animation: apaChatOrbit 10s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes apaChatOrbit {
          from { transform: translate(0, 0); }
          to { transform: translate(-18px, 20px); }
        }

        .apa-chat-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .apa-chat-avatar {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 45px;
          height: 45px;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 14px;
          background: rgba(255,255,255,.13);
          color: white;
          font-size: 23px;
        }

        .apa-chat-brand h2 {
          margin: 0;
          color: #fff;
          font-size: 16px;
          font-weight: 850;
          letter-spacing: .1px;
        }

        .apa-chat-brand p {
          margin: 4px 0 0;
          color: #d3e7fb;
          font-size: 11px;
        }

        .apa-chat-status {
          position: relative;
          z-index: 1;
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 7px;
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          color: #e5f5ff;
          font-size: 10px;
          font-weight: 700;
        }

        .apa-chat-status i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #70e2ae;
          box-shadow: 0 0 9px rgba(112,226,174,.8);
        }

        .apa-chat-notice {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 11px 18px;
          border-bottom: 1px solid #e9eff6;
          background: #f4f8fd;
          color: #667b93;
          font-size: 11px;
          line-height: 1.6;
        }

        .apa-chat-notice span {
          flex: 0 0 auto;
          color: #347ac7;
        }

        .apa-chat-body {
          height: min(54vh, 510px);
          min-height: 320px;
          overflow-y: auto;
          padding: 23px 20px;
          background:
            radial-gradient(ellipse at 0% 0%, rgba(56, 126, 206, .045), transparent 40%),
            #f8fafd;
          scroll-behavior: smooth;
        }

        .apa-chat-row {
          display: flex;
          align-items: flex-end;
          gap: 9px;
          margin-bottom: 17px;
        }

        .apa-chat-row.user {
          justify-content: flex-end;
        }

        .apa-mini-avatar {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 29px;
          height: 29px;
          border: 1px solid #dce8f6;
          border-radius: 10px;
          background: #fff;
          color: #2369b3;
          font-size: 15px;
        }

        .apa-chat-message {
          max-width: min(82%, 620px);
          padding: 13px 15px;
          border: 1px solid #e1e9f2;
          border-radius: 16px 16px 16px 5px;
          background: #fff;
          color: #344b65;
          box-shadow: 0 3px 10px rgba(30, 60, 95, .035);
          font-size: 13px;
          line-height: 1.75;
          overflow-wrap: anywhere;
        }

        .apa-chat-message.user {
          border-color: #1769d2;
          border-radius: 16px 16px 5px 16px;
          background: linear-gradient(135deg, #1769d2, #2459b0);
          color: #fff;
        }

        .apa-chat-message strong {
          color: #173e68;
          font-weight: 800;
        }

        .apa-chat-message.user strong {
          color: #fff;
        }

        .apa-chat-message p {
          margin: 0 0 8px;
        }

        .apa-chat-message p:last-child {
          margin-bottom: 0;
        }

        .apa-chat-message ul {
          margin: 5px 0 9px;
          padding-left: 19px;
        }

        .apa-chat-message li {
          margin: 3px 0;
        }

        .apa-chat-message .apa-chat-line {
          min-height: 5px;
        }

        .apa-chat-time {
          margin-top: 5px;
          color: #9aa8b8;
          font-size: 9px;
        }

        .apa-chat-row.user .apa-chat-time {
          text-align: right;
        }

        .apa-typing {
          display: flex;
          align-items: center;
          gap: 5px;
          width: fit-content;
          padding: 13px 15px;
          border: 1px solid #e1e9f2;
          border-radius: 15px 15px 15px 5px;
          background: white;
        }

        .apa-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4388d3;
          animation: apaTyping 1s ease-in-out infinite alternate;
        }

        .apa-typing span:nth-child(2) { animation-delay: .2s; }
        .apa-typing span:nth-child(3) { animation-delay: .4s; }

        @keyframes apaTyping {
          from { transform: translateY(2px); opacity: .45; }
          to { transform: translateY(-3px); opacity: 1; }
        }

        .apa-chat-suggestions {
          padding: 15px 18px 12px;
          border-top: 1px solid #e9eff6;
          background: #fff;
        }

        .apa-suggestion-title {
          margin: 0 0 10px;
          color: #657990;
          font-size: 11px;
          font-weight: 750;
        }

        .apa-suggestion-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .apa-suggestion {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 34px;
          padding: 7px 11px;
          border: 1px solid #dce7f3;
          border-radius: 999px;
          background: #f8fbff;
          color: #38658f;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
          transition: background .2s, border-color .2s, transform .2s;
        }

        .apa-suggestion:hover:not(:disabled) {
          transform: translateY(-2px);
          border-color: #9fc3ec;
          background: #edf5ff;
        }

        .apa-suggestion:disabled {
          cursor: not-allowed;
          opacity: .55;
        }

        .apa-chat-compose {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px 16px 16px;
          border-top: 1px solid #edf1f6;
          background: #fff;
        }

        .apa-chat-input-wrap {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
          min-height: 47px;
          padding: 0 13px;
          border: 1px solid #dce5ef;
          border-radius: 13px;
          background: #f9fbfe;
          transition: border-color .2s, box-shadow .2s;
        }

        .apa-chat-input-wrap:focus-within {
          border-color: #4389e8;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(49,125,224,.1);
        }

        .apa-chat-input-wrap input {
          width: 100%;
          min-width: 0;
          height: 44px;
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #1d3856;
          font-size: 13px;
          box-shadow: none;
        }

        .apa-chat-input-wrap input::placeholder {
          color: #9aa9b9;
        }

        .apa-chat-send {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 47px;
          height: 47px;
          border: 0;
          border-radius: 13px;
          background: linear-gradient(135deg, #1769d2, #1455ac);
          color: white;
          font-size: 20px;
          cursor: pointer;
          box-shadow: 0 5px 13px rgba(23,105,210,.2);
          transition: transform .2s, box-shadow .2s, opacity .2s;
        }

        .apa-chat-send:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 17px rgba(23,105,210,.25);
        }

        .apa-chat-send:disabled {
          cursor: not-allowed;
          opacity: .45;
          box-shadow: none;
        }

        .apa-chat-footer {
          padding: 0 18px 15px;
          background: #fff;
          color: #9aa7b6;
          font-size: 10px;
          text-align: center;
        }

        @media (max-width: 600px) {
          .apa-chat-assistant {
            border-radius: 17px;
          }

          .apa-chat-header {
            padding: 15px;
          }

          .apa-chat-avatar {
            width: 40px;
            height: 40px;
          }

          .apa-chat-brand h2 {
            font-size: 14px;
          }

          .apa-chat-status {
            padding: 6px 8px;
            font-size: 9px;
          }

          .apa-chat-body {
            min-height: 340px;
            height: 52vh;
            padding: 17px 12px;
          }

          .apa-chat-message {
            max-width: 88%;
            padding: 11px 12px;
            font-size: 12px;
          }

          .apa-chat-suggestions {
            padding: 13px 12px 10px;
          }

          .apa-suggestion-list {
            gap: 7px;
          }

          .apa-suggestion {
            font-size: 10px;
          }

          .apa-chat-compose {
            padding: 11px 12px 13px;
          }

          .apa-chat-send {
            width: 44px;
            height: 44px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-chat-header::after,
          .apa-typing span {
            animation: none;
          }

          .apa-suggestion,
          .apa-chat-send {
            transition: none;
          }
        }
      `}</style>

      <header className="apa-chat-header">
        <div className="apa-chat-brand">
          <div className="apa-chat-avatar">✦</div>
          <div>
            <h2>APA – Trợ lý hành chính số</h2>
            <p>Đồng hành cùng bạn trong các thủ tục hành chính</p>
          </div>
        </div>

        <div className="apa-chat-status">
          <i />
          Trợ lý trực tuyến
        </div>
      </header>

      <div className="apa-chat-notice">
        <span>ⓘ</span>
        <div>
          APA đang ở phiên bản thử nghiệm. Hãy kiểm tra lại thông tin pháp lý
          với cơ quan có thẩm quyền trước khi nộp hồ sơ.
        </div>
      </div>

      <div className="apa-chat-body" aria-live="polite">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`apa-chat-row ${m.role === "user" ? "user" : ""}`}
          >
            {m.role === "assistant" && (
              <div className="apa-mini-avatar">✦</div>
            )}

            <div>
              <div
                className={`apa-chat-message ${
                  m.role === "user" ? "user" : ""
                }`}
              >
                {m.content.split("\n").map((line, index) => {
                  const trimmed = line.trim();

                  if (!trimmed) {
                    return <div className="apa-chat-line" key={index} />;
                  }

                  if (trimmed.startsWith("•")) {
                    return (
                      <p key={index}>
                        • {trimmed.slice(1).trim()}
                      </p>
                    );
                  }

                  const parts = trimmed.split(/(\*\*.*?\*\*)/g);

                  return (
                    <p key={index}>
                      {parts.map((part, partIndex) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={partIndex}>
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          <span key={partIndex}>{part}</span>
                        )
                      )}
                    </p>
                  );
                })}
              </div>
              <div className="apa-chat-time">
                {m.role === "assistant" ? "APA" : "Bạn"}
              </div>
            </div>
          </div>
        ))}

        {busy && (
          <div className="apa-chat-row">
            <div className="apa-mini-avatar">✦</div>
            <div>
              <div className="apa-typing" aria-label="Đang xử lý">
                <span />
                <span />
                <span />
              </div>
              <div className="apa-chat-time">APA đang xử lý câu hỏi...</div>
            </div>
          </div>
        )}

        <div ref={end} />
      </div>

      <div className="apa-chat-suggestions">
        <p className="apa-suggestion-title">GỢI Ý CÂU HỎI</p>
        <div className="apa-suggestion-list">
          {hints.map((hint) => (
            <button
              type="button"
              key={hint.text}
              className="apa-suggestion"
              disabled={busy}
              onClick={() => void send(hint.text)}
            >
              <span>{hint.icon}</span>
              {hint.text}
            </button>
          ))}
        </div>
      </div>

      <form
        className="apa-chat-compose"
        onSubmit={(e) => {
          e.preventDefault();
          void send(text);
        }}
      >
        <div className="apa-chat-input-wrap">
          <input
            ref={inputRef}
            value={text}
            placeholder="Nhập câu hỏi về thủ tục hành chính..."
            onChange={(e) => setText(e.target.value)}
            aria-label="Nhập câu hỏi cho APA"
          />
        </div>

        <button
          type="submit"
          className="apa-chat-send"
          disabled={busy || !text.trim()}
          aria-label="Gửi câu hỏi"
        >
          ➤
        </button>
      </form>

      <div className="apa-chat-footer">
        APA hỗ trợ tra cứu và hướng dẫn thủ tục · Thông tin cần được đối chiếu
        với nguồn chính thức
      </div>
    </section>
  );
}
