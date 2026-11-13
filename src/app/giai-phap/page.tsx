
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "nguoi-dan",
    number: "01",
    icon: "👨‍👩‍👧‍👦",
    title: "Giải pháp cho người dân",
    subtitle: "Chủ động hơn trong mọi thủ tục hành chính",
    description:
      "APA đồng hành cùng mỗi người dân trong quá trình tìm hiểu và thực hiện thủ tục hành chính. Từ việc tra cứu thông tin đến chuẩn bị giấy tờ, mọi hướng dẫn đều được trình bày rõ ràng, dễ hiểu và thuận tiện.",
    features: [
      "Tra cứu thủ tục và thành phần hồ sơ cần chuẩn bị.",
      "Checklist giấy tờ, hạn chế thiếu sót khi nộp hồ sơ.",
      "Hướng dẫn điền biểu mẫu theo từng bước.",
      "Giao diện thân thiện, chữ dễ đọc, hỗ trợ người cao tuổi.",
      "Hỗ trợ giải đáp những câu hỏi hành chính thường gặp.",
    ],
    link: "/thu-tuc",
    linkText: "Tra cứu thủ tục",
    color: "#2563eb",
    background: "#eff6ff",
  },
  {
    id: "doanh-nghiep",
    number: "02",
    icon: "🏢",
    title: "Giải pháp cho doanh nghiệp",
    subtitle: "Tối ưu công việc, chủ động tuân thủ",
    description:
      "Đồng hành cùng doanh nghiệp trong việc tìm hiểu các quy định và thủ tục liên quan đến hoạt động kinh doanh. APA hướng đến việc giúp doanh nghiệp tiết kiệm thời gian, giảm áp lực giấy tờ và quản lý công việc hành chính hiệu quả hơn.",
    features: [
      "Tra cứu thủ tục đăng ký và hoạt động doanh nghiệp.",
      "Hỗ trợ tìm hiểu hồ sơ thuế, bảo hiểm và giấy phép.",
      "Nhắc việc và theo dõi các mốc thời hạn quan trọng.",
      "Hỗ trợ rà soát thông tin, nhận diện vấn đề cần lưu ý trong hồ sơ và hợp đồng.",
      "Kết nối dịch vụ tư vấn chuyên môn khi có nhu cầu.",
    ],
    link: "/bang-gia",
    linkText: "Khám phá dịch vụ",
    color: "#0891b2",
    background: "#ecfeff",
  },
  {
    id: "to-chuc",
    number: "03",
    icon: "🤝",
    title: "Giải pháp cho tổ chức",
    subtitle: "Kết nối thông tin, nâng cao hiệu quả vận hành",
    description:
      "APA hỗ trợ các tổ chức, đơn vị, hội nhóm và tổ chức xã hội trong việc tiếp cận thông tin hành chính, quản lý nhu cầu giấy tờ và hướng dẫn thành viên thực hiện các thủ tục cần thiết một cách thống nhất, thuận tiện.",
    features: [
      "Tra cứu và tổng hợp thông tin thủ tục theo nhu cầu tổ chức.",
      "Hướng dẫn chuẩn bị hồ sơ cho thành viên và người liên quan.",
      "Hỗ trợ chuẩn hóa nội dung hướng dẫn và quy trình nội bộ.",
      "Tư vấn, kết nối chuyên gia khi phát sinh vấn đề pháp lý.",
      "Hướng đến quản lý thông tin tập trung và tiết kiệm nguồn lực.",
    ],
    link: "/lien-he",
    linkText: "Trao đổi nhu cầu",
    color: "#7c3aed",
    background: "#f5f3ff",
  },
  {
    id: "nuoc-ngoai",
    number: "04",
    icon: "🌏",
    title: "Giải pháp cho người Việt ở nước ngoài",
    subtitle: "Dù ở đâu, vẫn dễ dàng tìm hiểu thủ tục tại Việt Nam",
    description:
      "APA giúp người Việt đang sinh sống, học tập và làm việc ở nước ngoài tiếp cận thông tin về các thủ tục liên quan đến Việt Nam, hiểu rõ giấy tờ cần chuẩn bị và định hướng liên hệ đúng cơ quan có thẩm quyền.",
    features: [
      "Tra cứu thông tin về hộ chiếu và giấy tờ cá nhân.",
      "Tìm hiểu thủ tục xác nhận tư pháp.",
      "Hướng dẫn về hợp pháp hóa lãnh sự và chứng nhận giấy tờ.",
      "Tìm hiểu thủ tục liên quan đến visa và xuất nhập cảnh.",
      "Định hướng liên hệ cơ quan đại diện Việt Nam phù hợp.",
    ],
    link: "/lien-he",
    linkText: "Nhận tư vấn",
    color: "#0f766e",
    background: "#f0fdfa",
  },
];

export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("solution-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".solution-reveal");

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={sectionRef} className="solution-page">
      <style>{`
        .solution-page {
          background: #f4f8ff;
          color: #172b4d;
          min-height: 100vh;
          overflow: hidden;
        }

        .solution-hero {
          position: relative;
          padding: 78px 20px 86px;
          color: white;
          background:
            radial-gradient(circle at 85% 20%, rgba(56,189,248,.22), transparent 28%),
            radial-gradient(circle at 10% 90%, rgba(59,130,246,.16), transparent 35%),
            linear-gradient(135deg, #071b3a, #102e59 65%, #164e83);
        }

        .solution-hero-inner {
          max-width: 1050px;
          margin: auto;
          text-align: center;
        }

        .solution-label {
          display: inline-block;
          padding: 8px 17px;
          border: 1px solid rgba(191,219,254,.4);
          background: rgba(59,130,246,.15);
          color: #bfdbfe;
          border-radius: 30px;
          font-size: 12px;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .solution-hero h1 {
          font-size: clamp(32px, 5vw, 49px);
          line-height: 1.2;
          margin: 0 0 20px;
          font-weight: 800;
        }

        .solution-hero p {
          max-width: 760px;
          margin: auto;
          color: #dbeafe;
          font-size: 17px;
          line-height: 1.9;
        }

        .solution-container {
          max-width: 1080px;
          margin: auto;
          padding: 65px 20px 80px;
        }

        .solution-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 42px;
        }

        .solution-heading h2 {
          color: #102e59;
          font-size: clamp(26px, 4vw, 34px);
          margin: 0 0 12px;
        }

        .solution-heading p {
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .solution-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 35px;
          align-items: center;
          padding: 34px;
          margin-bottom: 25px;
          background: white;
          border: 1px solid #e2eaf5;
          border-radius: 23px;
          box-shadow: 0 10px 30px rgba(15,42,80,.045);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .solution-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 42px rgba(15,42,80,.10);
        }

        .solution-card:nth-child(even) {
          grid-template-columns: 1.35fr 1fr;
        }

        .solution-card:nth-child(even) .solution-info {
          order: 2;
        }

        .solution-card:nth-child(even) .solution-features {
          order: 1;
        }

        .solution-number {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #64748b;
          margin-bottom: 15px;
        }

        .solution-icon {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          border-radius: 19px;
          font-size: 31px;
          margin-bottom: 20px;
        }

        .solution-info h2 {
          color: #153968;
          font-size: 24px;
          line-height: 1.4;
          margin: 0 0 8px;
        }

        .solution-subtitle {
          color: #2563eb;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .solution-info p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.9;
          margin: 0 0 22px;
        }

        .solution-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 19px;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: filter .2s ease, transform .2s ease;
        }

        .solution-link:hover {
          filter: brightness(1.12);
          transform: translateX(4px);
        }

        .solution-features {
          padding: 25px;
          border-radius: 18px;
          background: #f6f9ff;
        }

        .solution-features h3 {
          color: #153968;
          font-size: 16px;
          margin: 0 0 17px;
        }

        .solution-feature {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          color: #475569;
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 13px;
        }

        .solution-check {
          color: #0d9488;
          font-weight: 900;
          flex-shrink: 0;
        }

        .solution-bottom {
          padding: 42px 30px;
          color: white;
          text-align: center;
          border-radius: 24px;
          background:
            radial-gradient(circle at 85% 20%, rgba(56,189,248,.18), transparent 30%),
            linear-gradient(135deg, #0b2346, #164e83);
        }

        .solution-bottom h2 {
          font-size: 27px;
          margin: 0 0 13px;
        }

        .solution-bottom p {
          max-width: 680px;
          margin: 0 auto 23px;
          color: #dbeafe;
          line-height: 1.8;
        }

        .solution-bottom a {
          display: inline-block;
          background: white;
          color: #123967;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 800;
          transition: transform .2s ease;
        }

        .solution-bottom a:hover {
          transform: translateY(-3px);
        }

        .solution-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity .7s ease, transform .7s ease;
        }

        .solution-reveal.solution-show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 760px) {
          .solution-hero {
            padding: 58px 20px;
          }

          .solution-card,
          .solution-card:nth-child(even) {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 23px;
          }

          .solution-card:nth-child(even) .solution-info,
          .solution-card:nth-child(even) .solution-features {
            order: initial;
          }

          .solution-container {
            padding: 48px 16px 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solution-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .solution-card,
          .solution-link,
          .solution-bottom a {
            transition: none;
          }
        }
      `}</style>

      <section className="solution-hero">
        <div className="solution-hero-inner">
          <span className="solution-label">
            APA – ADMINISTRATIVE PROCEDURE ASSISTANT
          </span>

          <h1>
            Giải pháp hành chính số
            <br />
            dành cho mọi hành trình
          </h1>

          <p>
            Mỗi cá nhân, doanh nghiệp và tổ chức đều có những nhu cầu
            hành chính khác nhau. APA hướng đến việc kết nối công nghệ,
            thông tin và sự hỗ trợ cần thiết để mỗi hành trình trở nên
            đơn giản, chủ động và thuận tiện hơn.
          </p>
        </div>
      </section>

      <section className="solution-container">
        <div className="solution-heading solution-reveal">
          <h2>Một nền tảng – Nhiều giải pháp</h2>
          <p>
            Khám phá những cách APA có thể đồng hành cùng bạn trong
            từng nhu cầu cụ thể.
          </p>
        </div>

        {solutions.map((solution) => (
          <article
            key={solution.id}
            id={solution.id}
            className="solution-card solution-reveal"
            style={{
              scrollMarginTop: 100,
            }}
          >
            <div className="solution-info">
              <span className="solution-number">
                GIẢI PHÁP {solution.number}
              </span>

              <div
                className="solution-icon"
                style={{ background: solution.background }}
              >
                {solution.icon}
              </div>

              <h2>{solution.title}</h2>

              <div
                className="solution-subtitle"
                style={{ color: solution.color }}
              >
                {solution.subtitle}
              </div>

              <p>{solution.description}</p>

              <Link
                className="solution-link"
                href={solution.link}
                style={{ background: solution.color }}
              >
                {solution.linkText}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="solution-features">
              <h3>APA hỗ trợ bạn</h3>

              {solution.features.map((feature) => (
                <div className="solution-feature" key={feature}>
                  <span className="solution-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </article>
        ))}

        <div className="solution-bottom solution-reveal">
          <h2>Bắt đầu hành trình cùng APA</h2>
          <p>
            Bạn đang cần tìm hiểu một thủ tục hay muốn trao đổi về
            giải pháp phù hợp với nhu cầu của mình? APA luôn sẵn sàng
            đồng hành và hỗ trợ bạn tìm đúng hướng.
          </p>
          <Link href="/lien-he">
            Liên hệ với APA →
          </Link>
        </div>
      </section>
    </main>
  );
}
