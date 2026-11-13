
"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: "⚖️",
    title: "Chính xác và minh bạch",
    text: "Thông tin rõ ràng, quy trình dễ hiểu và luôn hướng người dùng đến nguồn thông tin chính thức.",
  },
  {
    icon: "🤝",
    title: "Lấy con người làm trung tâm",
    text: "Mỗi tính năng đều hướng đến việc giảm bớt khó khăn, tiết kiệm thời gian và công sức cho người dân.",
  },
  {
    icon: "🔐",
    title: "An toàn và tin cậy",
    text: "Đề cao quyền riêng tư, bảo vệ thông tin cá nhân và hướng đến trải nghiệm sử dụng an toàn.",
  },
  {
    icon: "🚀",
    title: "Đổi mới bằng công nghệ",
    text: "Ứng dụng AI và tự động hóa để việc tìm hiểu, chuẩn bị và thực hiện thủ tục trở nên thuận tiện hơn.",
  },
];

const audiences = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Người dân",
    text: "Hiểu rõ thủ tục, biết cần chuẩn bị giấy tờ gì và thực hiện từng bước chủ động hơn.",
  },
  {
    icon: "🏢",
    title: "Doanh nghiệp",
    text: "Hỗ trợ tìm hiểu thủ tục pháp lý, thuế, giấy phép và các công việc hành chính thường gặp.",
  },
  {
    icon: "🏛️",
    title: "Cơ quan, tổ chức",
    text: "Góp phần chuẩn hóa thông tin hướng dẫn, hỗ trợ công tác tư vấn và nâng cao trải nghiệm phục vụ.",
  },
];

export default function Page() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("apa-show");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(".apa-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      style={{
        background: "#f4f8ff",
        color: "#172b4d",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes apa-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes apa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(96,165,250,.15); }
          50% { box-shadow: 0 0 0 16px rgba(96,165,250,0); }
        }

        @keyframes apa-glow {
          0%, 100% { opacity: .45; }
          50% { opacity: 1; }
        }

        @keyframes apa-enter {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .apa-hero {
          background:
            radial-gradient(circle at 85% 15%, rgba(56,189,248,.20), transparent 30%),
            radial-gradient(circle at 10% 90%, rgba(59,130,246,.18), transparent 35%),
            linear-gradient(135deg, #071b3a, #102e59 65%, #164e83);
          color: white;
          padding: 82px 20px 90px;
          position: relative;
        }

        .apa-hero-inner {
          max-width: 1080px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 42px;
          align-items: center;
        }

        .apa-kicker {
          display: inline-block;
          border: 1px solid rgba(147,197,253,.4);
          background: rgba(59,130,246,.15);
          color: #bfdbfe;
          border-radius: 30px;
          padding: 8px 15px;
          font-size: 13px;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .apa-hero h1 {
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.18;
          margin: 0 0 22px;
          font-weight: 800;
        }

        .apa-hero p {
          font-size: 17px;
          line-height: 1.9;
          color: #dbeafe;
          max-width: 680px;
        }

        .apa-orbit {
          width: 250px;
          height: 250px;
          margin: auto;
          border: 1px solid rgba(147,197,253,.45);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: apa-float 5s ease-in-out infinite;
        }

        .apa-orbit:before, .apa-orbit:after {
          content: "";
          position: absolute;
          border: 1px solid rgba(147,197,253,.25);
          border-radius: 50%;
        }

        .apa-orbit:before { inset: 22px; }
        .apa-orbit:after { inset: -18px; }

        .apa-core {
          width: 145px;
          height: 145px;
          background: linear-gradient(145deg, #fff, #dbeafe);
          color: #103568;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: apa-pulse 3s infinite;
          box-shadow: 0 15px 45px rgba(0,0,0,.25);
        }

        .apa-core strong {
          font-size: 40px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .apa-core span {
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .apa-section {
          max-width: 1080px;
          margin: auto;
          padding: 76px 20px;
        }

        .apa-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 42px;
        }

        .apa-heading h2 {
          color: #102e59;
          font-size: clamp(27px, 4vw, 36px);
          margin: 0 0 14px;
        }

        .apa-heading p {
          color: #64748b;
          line-height: 1.8;
          font-size: 16px;
        }

        .apa-intro {
          background: white;
          border: 1px solid #e2eaf5;
          border-radius: 22px;
          padding: 34px;
          box-shadow: 0 12px 35px rgba(15,42,80,.05);
        }

        .apa-intro p {
          color: #475569;
          line-height: 1.95;
          font-size: 16px;
          margin: 0;
        }

        .apa-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .apa-card {
          background: white;
          border: 1px solid #e2eaf5;
          border-radius: 18px;
          padding: 27px;
          transition: transform .3s ease, box-shadow .3s ease;
          box-shadow: 0 8px 24px rgba(15,42,80,.04);
        }

        .apa-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 35px rgba(15,42,80,.10);
        }

        .apa-icon {
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          background: #eff6ff;
          border-radius: 15px;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .apa-card h3 {
          color: #153968;
          font-size: 19px;
          margin: 0 0 10px;
        }

        .apa-card p {
          color: #64748b;
          line-height: 1.8;
          margin: 0;
          font-size: 15px;
        }

        .apa-vision {
          background: linear-gradient(135deg, #0b2346, #164e83);
          color: white;
          border-radius: 24px;
          padding: 46px 35px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .apa-vision h2 {
          font-size: 30px;
          margin: 0 0 18px;
        }

        .apa-vision p {
          max-width: 780px;
          margin: auto;
          color: #dbeafe;
          line-height: 1.95;
          font-size: 17px;
        }

        .apa-quote {
          border-left: 4px solid #38bdf8;
          padding: 20px 25px;
          background: #eaf4ff;
          border-radius: 0 15px 15px 0;
          color: #164276;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.7;
        }

        .apa-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity .7s ease, transform .7s ease;
        }

        .apa-reveal.apa-show {
          opacity: 1;
          transform: translateY(0);
        }

        .apa-delay-1 { transition-delay: .1s; }
        .apa-delay-2 { transition-delay: .2s; }
        .apa-delay-3 { transition-delay: .3s; }

        @media (max-width: 700px) {
          .apa-hero { padding: 58px 20px; }
          .apa-hero-inner { grid-template-columns: 1fr; text-align: center; }
          .apa-hero p { margin-left: auto; margin-right: auto; }
          .apa-orbit { width: 200px; height: 200px; margin-top: 10px; }
          .apa-core { width: 120px; height: 120px; }
          .apa-core strong { font-size: 32px; }
          .apa-grid { grid-template-columns: 1fr; }
          .apa-section { padding: 55px 18px; }
          .apa-intro { padding: 24px; }
          .apa-vision { padding: 35px 22px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-reveal { opacity: 1; transform: none; transition: none; }
          .apa-orbit, .apa-core { animation: none; }
          .apa-card { transition: none; }
        }
      `}</style>

      <section className="apa-hero">
        <div className="apa-hero-inner">
          <div style={{
            animation: visible ? "apa-enter .8s ease both" : "none"
          }}>
            <span className="apa-kicker">
              ADMINISTRATIVE PROCEDURE ASSISTANT
            </span>
            <h1>
              APA – Đồng hành cùng bạn
              <br />
              trên hành trình số hóa
            </h1>
            <p>
              Chúng tôi tin rằng thủ tục hành chính không nên là rào cản.
              APA ra đời với mong muốn đưa công nghệ đến gần hơn với mỗi
              người dân, doanh nghiệp và tổ chức – để mọi quy trình trở nên
              dễ hiểu, dễ tiếp cận và thuận tiện hơn.
            </p>
          </div>

          <div className="apa-orbit">
            <div className="apa-core">
              <strong>APA</strong>
              <span>TRỢ LÝ SỐ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="apa-section">
        <div className="apa-heading apa-reveal">
          <h2>APA là gì?</h2>
          <p>
            Một người bạn đồng hành số, giúp bạn hiểu đúng thông tin,
            chuẩn bị tốt hơn và chủ động hơn khi thực hiện thủ tục hành chính.
          </p>
        </div>

        <div className="apa-intro apa-reveal">
          <p>
            APA (Administrative Procedure Assistant) là nền tảng trợ lý
            hành chính số ứng dụng trí tuệ nhân tạo và công nghệ tự động hóa,
            hướng đến việc hỗ trợ người dân, doanh nghiệp và tổ chức tiếp cận
            thông tin, tìm hiểu quy trình và chuẩn bị hồ sơ hành chính một
            cách thuận tiện hơn. Thay vì phải mất nhiều thời gian tìm kiếm
            thông tin ở nhiều nơi, người dùng có thể bắt đầu từ một điểm
            truy cập tập trung, đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận
            hướng dẫn theo từng bước. APA hướng tới vai trò hỗ trợ, không
            thay thế cơ quan có thẩm quyền hay các nguồn thông tin pháp lý
            chính thức.
          </p>
        </div>
      </section>

      <section className="apa-section" style={{ paddingTop: 15 }}>
        <div className="apa-heading apa-reveal">
          <h2>Giá trị chúng tôi theo đuổi</h2>
          <p>
            Công nghệ chỉ thực sự có ý nghĩa khi tạo ra giá trị thiết thực
            cho con người.
          </p>
        </div>

        <div className="apa-grid">
          {values.map((item, index) => (
            <article
              className={`apa-card apa-reveal apa-delay-${(index % 3) + 1}`}
              key={item.title}
            >
              <div className="apa-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="apa-section" style={{ paddingTop: 10 }}>
        <div className="apa-vision apa-reveal">
          <h2>Tầm nhìn của APA</h2>
          <p>
            Hướng tới một môi trường hành chính số thân thiện, nơi mỗi người
            đều có thể tiếp cận thông tin và thực hiện thủ tục một cách chủ
            động, bình đẳng và thuận tiện. APA mong muốn góp một phần nhỏ
            vào hành trình xây dựng nền hành chính hiện đại, minh bạch và
            lấy người dân làm trung tâm.
          </p>
        </div>
      </section>

      <section className="apa-section" style={{ paddingTop: 10 }}>
        <div className="apa-heading apa-reveal">
          <h2>APA đồng hành cùng ai?</h2>
          <p>
            Mỗi nhóm người dùng có nhu cầu khác nhau. APA hướng đến việc
            hỗ trợ phù hợp với từng hành trình.
          </p>
        </div>

        <div className="apa-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
          {audiences.map((item) => (
            <article className="apa-card apa-reveal" key={item.title}>
              <div className="apa-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="apa-section" style={{ paddingTop: 0 }}>
        <div className="apa-quote apa-reveal">
          “Đơn giản hóa thủ tục – Minh bạch thông tin – Đưa công nghệ
          đến gần hơn với mọi người.”
        </div>
      </section>
    </main>
  );
}
