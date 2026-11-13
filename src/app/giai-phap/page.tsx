
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
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="solution-page" ref={sectionRef}>
      <section className="solution-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="solution-container hero-content">
          <div className="hero-label">
            <span className="label-dot" />
            APA – TRỢ LÝ HÀNH CHÍNH SỐ
          </div>

          <h1>
            Một nền tảng.
            <br />
            <span>Nhiều giải pháp.</span>
            <br />
            Phục vụ mọi nhu cầu.
          </h1>

          <p className="hero-description">
            APA hướng đến việc đơn giản hóa thông tin và quy trình hành chính,
            giúp người dân, doanh nghiệp và tổ chức chủ động hơn trong từng
            công việc.
          </p>

          <div className="hero-actions">
            <Link href="/thu-tuc" className="primary-button">
              Khám phá thủ tục <span>→</span>
            </Link>
            <Link href="/lien-he" className="secondary-button">
              Liên hệ APA
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>04</strong>
              <span>Nhóm đối tượng</span>
            </div>
            <div className="stat-divider" />
            <div>
              <strong>01</strong>
              <span>Nền tảng kết nối</span>
            </div>
            <div className="stat-divider" />
            <div>
              <strong>24/7</strong>
              <span>Chủ động tra cứu</span>
            </div>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-circle circle-one" />
          <div className="decoration-circle circle-two" />
          <div className="decoration-circle circle-three" />
          <div className="decoration-card">
            <span>✦</span>
            <div>
              <strong>APA Assistant</strong>
              <small>Hỗ trợ hành chính số</small>
            </div>
            <span className="online-dot" />
          </div>
        </div>
      </section>

      <section className="solution-intro solution-container reveal">
        <span className="section-eyebrow">GIẢI PHÁP CỦA APA</span>
        <h2>
          Hành chính dễ hiểu hơn,
          <br />
          <span>cuộc sống thuận tiện hơn.</span>
        </h2>
        <p>
          Mỗi nhóm đối tượng có những nhu cầu khác nhau. APA xây dựng các
          hướng tiếp cận phù hợp, tập trung vào thông tin rõ ràng, quy trình
          thuận tiện và khả năng tiếp cận dễ dàng.
        </p>
      </section>

      <section className="solution-list solution-container">
        {solutions.map((solution, index) => (
          <article
            className={`solution-card reveal ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={solution.id}
            style={
              {
                "--solution-color": solution.color,
                "--solution-bg": solution.background,
                "--card-index": index,
              } as React.CSSProperties
            }
          >
            <div className="solution-visual">
              <div className="visual-number">{solution.number}</div>
              <div className="visual-icon">{solution.icon}</div>
              <div className="visual-caption">
                <span className="visual-caption-dot" />
                GIẢI PHÁP APA
              </div>
              <div className="visual-decoration decoration-a" />
              <div className="visual-decoration decoration-b" />
            </div>

            <div className="solution-information">
              <span className="solution-index">
                GIẢI PHÁP {solution.number}
              </span>

              <h3>{solution.title}</h3>
              <h4>{solution.subtitle}</h4>
              <p className="solution-description">
                {solution.description}
              </p>

              <ul className="feature-list">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={solution.link} className="solution-link">
                {solution.linkText}
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="solution-process">
        <div className="solution-container process-inner reveal">
          <span className="section-eyebrow">CÁCH APA ĐỒNG HÀNH</span>
          <h2>
            Đơn giản hóa từ
            <br />
            <span>những bước đầu tiên.</span>
          </h2>

          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">01</div>
              <div className="process-icon">🔎</div>
              <h3>Tìm hiểu</h3>
              <p>Tiếp cận thông tin và xác định thủ tục cần thực hiện.</p>
            </div>

            <div className="process-item">
              <div className="process-number">02</div>
              <div className="process-icon">📋</div>
              <h3>Chuẩn bị</h3>
              <p>Tham khảo hướng dẫn và chuẩn bị giấy tờ cần thiết.</p>
            </div>

            <div className="process-item">
              <div className="process-number">03</div>
              <div className="process-icon">🤝</div>
              <h3>Kết nối</h3>
              <p>Định hướng liên hệ cơ quan hoặc đơn vị phù hợp.</p>
            </div>

            <div className="process-item">
              <div className="process-number">04</div>
              <div className="process-icon">✨</div>
              <h3>Chủ động</h3>
              <p>Theo dõi công việc và quản lý thông tin thuận tiện hơn.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-cta solution-container reveal">
        <div className="cta-content">
          <span className="section-eyebrow">BẮT ĐẦU CÙNG APA</span>
          <h2>
            Bạn đang cần
            <br />
            <span>một giải pháp phù hợp?</span>
          </h2>
          <p>
            Hãy chia sẻ nhu cầu của bạn. APA sẽ giúp bạn tìm hiểu hướng tiếp
            cận và thông tin cần thiết.
          </p>
          <div className="cta-actions">
            <Link href="/lien-he" className="primary-button">
              Liên hệ với APA <span>→</span>
            </Link>
            <Link href="/gioi-thieu" className="cta-text-link">
              Tìm hiểu về APA
            </Link>
          </div>
        </div>
        <div className="cta-symbol" aria-hidden="true">
          APA<span>+</span>
        </div>
      </section>

      <style jsx global>{`
        .solution-page {
          --navy: #10264b;
          --blue: #2563eb;
          color: #172b4d;
          background: #fff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .solution-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .solution-page a {
          text-decoration: none;
        }

        .solution-hero {
          min-height: 610px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: linear-gradient(120deg, #0b1d3a 0%, #12366b 58%, #1760a8 100%);
          color: white;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 75px;
          padding-bottom: 75px;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 15px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.08);
          color: #dbeafe;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .label-dot,
        .online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 12px rgba(74, 222, 128, 0.8);
        }

        .solution-hero h1 {
          max-width: 700px;
          margin: 30px 0 20px;
          color: white;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.12;
          letter-spacing: -2px;
          font-weight: 800;
        }

        .solution-hero h1 span {
          color: #79b8ff;
        }

        .hero-description {
          max-width: 610px;
          color: #d4e4f8;
          font-size: 17px;
          line-height: 1.85;
          margin: 0;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-top: 30px;
        }

        .primary-button,
        .secondary-button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 0 22px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .primary-button {
          color: #12366b;
          background: white;
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.16);
        }

        .primary-button span,
        .solution-link span {
          font-size: 20px;
          transition: transform 0.25s ease;
        }

        .primary-button:hover span,
        .solution-link:hover span {
          transform: translateX(5px);
        }

        .secondary-button {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 55px;
        }

        .hero-stats div:not(.stat-divider) {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hero-stats strong {
          color: white;
          font-size: 27px;
        }

        .hero-stats span {
          color: #c4d7ef;
          font-size: 12px;
        }

        .stat-divider {
          width: 1px;
          height: 38px;
          background: rgba(255, 255, 255, 0.25);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 420px;
          height: 420px;
          right: 8%;
          top: -180px;
          background: rgba(59, 130, 246, 0.17);
        }

        .hero-glow-two {
          width: 350px;
          height: 350px;
          right: -100px;
          bottom: -180px;
          background: rgba(34, 211, 238, 0.13);
        }

        .hero-decoration {
          position: absolute;
          right: 9%;
          top: 50%;
          width: 310px;
          height: 310px;
          transform: translateY(-50%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: slow-rotate 24s linear infinite;
        }

        .decoration-circle {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 50%;
        }

        .circle-one {
          inset: 35px;
        }

        .circle-two {
          inset: 75px;
        }

        .circle-three {
          inset: 115px;
          background: rgba(255, 255, 255, 0.07);
        }

        .decoration-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 255px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.13);
          backdrop-filter: blur(15px);
          transform: translate(-50%, -50%) rotate(-7deg);
          animation: card-float 5s ease-in-out infinite;
        }

        .decoration-card > span:first-child {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: white;
          color: #2563eb;
          font-size: 23px;
        }

        .decoration-card div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
        }

        .decoration-card strong {
          color: white;
          font-size: 14px;
        }

        .decoration-card small {
          color: #d4e4f8;
          font-size: 11px;
        }

        .solution-intro {
          padding-top: 105px;
          padding-bottom: 65px;
          text-align: center;
        }

        .section-eyebrow {
          color: #2563eb;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .solution-intro h2,
        .process-inner > h2,
        .cta-content h2 {
          margin: 18px 0;
          color: #10264b;
          font-size: clamp(31px, 4vw, 43px);
          line-height: 1.25;
          letter-spacing: -1px;
        }

        .solution-intro h2 span,
        .process-inner > h2 span,
        .cta-content h2 span {
          color: #2563eb;
        }

        .solution-intro > p {
          max-width: 700px;
          margin: 0 auto;
          color: #64748b;
          font-size: 16px;
          line-height: 1.8;
        }

        .solution-list {
          display: flex;
          flex-direction: column;
          gap: 35px;
          padding-bottom: 100px;
        }

        .solution-card {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 55px;
          align-items: center;
          padding: 38px;
          border: 1px solid #e7edf5;
          border-radius: 22px;
          background: white;
          box-shadow: 0 12px 35px rgba(15, 35, 70, 0.045);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(15, 35, 70, 0.09);
        }

        .solution-card.reverse .solution-visual {
          order: 2;
        }

        .solution-card.reverse .solution-information {
          order: 1;
        }

        .solution-visual {
          min-height: 340px;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: var(--solution-bg);
        }

        .visual-number {
          position: absolute;
          top: 22px;
          left: 25px;
          color: var(--solution-color);
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .visual-icon {
          position: relative;
          z-index: 2;
          width: 155px;
          height: 155px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 42px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 20px 45px rgba(30, 64, 120, 0.1);
          font-size: 76px;
          animation: icon-float 5s ease-in-out infinite;
        }

        .visual-caption {
          position: absolute;
          bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--solution-color);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .visual-caption-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--solution-color);
        }

        .visual-decoration {
          position: absolute;
          border: 1px solid var(--solution-color);
          border-radius: 50%;
          opacity: 0.12;
        }

        .decoration-a {
          width: 240px;
          height: 240px;
        }

        .decoration-b {
          width: 310px;
          height: 310px;
        }

        .solution-information {
          padding: 10px 0;
        }

        .solution-index {
          color: var(--solution-color);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .solution-information h3 {
          margin: 13px 0 8px;
          color: #10264b;
          font-size: clamp(24px, 3vw, 30px);
          line-height: 1.3;
          letter-spacing: -0.6px;
        }

        .solution-information h4 {
          margin: 0 0 17px;
          color: var(--solution-color);
          font-size: 15px;
          font-weight: 700;
        }

        .solution-description {
          margin: 0 0 22px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.85;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #334155;
          font-size: 13px;
          line-height: 1.65;
        }

        .check-icon {
          flex: 0 0 20px;
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--solution-bg);
          color: var(--solution-color);
          font-size: 12px;
          font-weight: 800;
        }

        .solution-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 25px;
          color: var(--solution-color);
          font-size: 14px;
          font-weight: 800;
        }

        .solution-process {
          padding: 95px 0 105px;
          background: #f5f8fc;
          text-align: center;
        }

        .process-inner > h2 {
          margin-bottom: 55px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          text-align: left;
        }

        .process-item {
          position: relative;
          min-height: 220px;
          padding: 25px 22px;
          border: 1px solid #e5ebf4;
          border-radius: 16px;
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .process-item:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 30px rgba(15, 35, 70, 0.08);
        }

        .process-number {
          color: #93a8c5;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .process-icon {
          margin: 22px 0 13px;
          font-size: 30px;
        }

        .process-item h3 {
          margin: 0 0 9px;
          color: #10264b;
          font-size: 17px;
        }

        .process-item p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .solution-cta {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 340px;
          margin-top: 90px;
          margin-bottom: 90px;
          padding: 55px 65px;
          border-radius: 24px;
          background: linear-gradient(115deg, #10264b, #174b91);
          color: white;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 620px;
        }

        .cta-content .section-eyebrow {
          color: #93c5fd;
        }

        .cta-content h2 {
          color: white;
        }

        .cta-content h2 span {
          color: #93c5fd;
        }

        .cta-content > p {
          max-width: 520px;
          color: #d4e4f8;
          font-size: 14px;
          line-height: 1.8;
        }

        .cta-text-link {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        .cta-symbol {
          position: absolute;
          right: 8%;
          color: rgba(255, 255, 255, 0.08);
          font-size: clamp(100px, 17vw, 190px);
          font-weight: 900;
          letter-spacing: -12px;
          user-select: none;
        }

        .cta-symbol span {
          color: rgba(147, 197, 253, 0.35);
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .solution-card.reveal {
          transition-delay: calc(var(--card-index) * 80ms);
        }

        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes card-float {
          0%, 100% {
            margin-top: 0;
          }
          50% {
            margin-top: -15px;
          }
        }

        @keyframes slow-rotate {
          from {
            rotate: 0deg;
          }
          to {
            rotate: 360deg;
          }
        }

        @media (max-width: 900px) {
          .hero-decoration {
            right: -130px;
            opacity: 0.45;
          }

          .solution-card {
            gap: 30px;
            padding: 25px;
          }

          .solution-visual {
            min-height: 300px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .solution-container {
            width: min(100% - 32px, 520px);
          }

          .solution-hero {
            min-height: auto;
          }

          .hero-content {
            padding-top: 75px;
            padding-bottom: 65px;
          }

          .solution-hero h1 {
            font-size: 43px;
            letter-spacing: -1.5px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-decoration {
            right: -220px;
            opacity: 0.2;
          }

          .hero-stats {
            gap: 14px;
            margin-top: 40px;
          }

          .hero-stats strong {
            font-size: 22px;
          }

          .hero-stats span {
            font-size: 10px;
          }

          .stat-divider {
            height: 30px;
          }

          .solution-intro {
            padding-top: 75px;
            padding-bottom: 45px;
          }

          .solution-intro h2,
          .process-inner > h2,
          .cta-content h2 {
            font-size: 32px;
          }

          .solution-intro > p {
            font-size: 14px;
          }

          .solution-list {
            gap: 22px;
            padding-bottom: 70px;
          }

          .solution-card {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 17px;
            border-radius: 17px;
          }

          .solution-card.reverse .solution-visual,
          .solution-card.reverse .solution-information {
            order: initial;
          }

          .solution-visual {
            min-height: 235px;
          }

          .visual-icon {
            width: 120px;
            height: 120px;
            border-radius: 32px;
            font-size: 60px;
          }

          .solution-information {
            padding: 5px 3px 12px;
          }

          .solution-information h3 {
            font-size: 25px;
          }

          .solution-description {
            font-size: 13px;
          }

          .feature-list li {
            font-size: 13px;
          }

          .solution-process {
            padding: 70px 0;
          }

          .process-inner > h2 {
            margin-bottom: 35px;
          }

          .process-grid {
            gap: 12px;
          }

          .process-item {
            min-height: 205px;
            padding: 18px 15px;
          }

          .process-item h3 {
            font-size: 15px;
          }

          .process-item p {
            font-size: 12px;
          }

          .solution-cta {
            min-height: 0;
            margin-top: 60px;
            margin-bottom: 60px;
            padding: 35px 24px;
            border-radius: 18px;
          }

          .cta-symbol {
            right: -15px;
            bottom: -10px;
            font-size: 110px;
          }

          .cta-content > p {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solution-page *,
          .solution-page *::before,
          .solution-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
