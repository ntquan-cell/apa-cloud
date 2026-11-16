
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
            Một nền tảng, Nhiều giải pháp, Phục vụ mọi nhu cầu.
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
  font-family: Inter, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.solution-page * {
  font-family: inherit;
}

/* Tiêu đề Hero */
.solution-page .solution-hero h1 {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: clamp(38px, 4.8vw, 60px);
  line-height: 1.18;
  letter-spacing: -1.5px;
  font-weight: 800;
}

/* Nội dung giới thiệu Hero */
.solution-page .hero-description {
  font-size: 16px;
  line-height: 1.85;
  font-weight: 400;
}

/* Nhãn nhỏ trên Hero */
.solution-page .hero-label {
  font-size: 11px;
  line-height: 1.5;
  font-weight: 750;
  letter-spacing: 1.3px;
}

.solution-page .hero-stats strong {
  font-size: 26px;
  line-height: 1.25;
  font-weight: 800;
}

.solution-page .hero-stats span {
  font-size: 12px;
  line-height: 1.5;
}

/* Các tiêu đề lớn giữa trang */
.solution-page .solution-intro h2,
.solution-page .process-inner > h2,
.solution-page .cta-content h2 {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: clamp(30px, 3.5vw, 40px);
  line-height: 1.3;
  letter-spacing: -1px;
  font-weight: 800;
}

.solution-page .solution-intro > p {
  font-size: 15px;
  line-height: 1.85;
  font-weight: 400;
}

/* Nhãn section */
.solution-page .section-eyebrow {
  font-size: 11px;
  line-height: 1.5;
  font-weight: 800;
  letter-spacing: 1.6px;
}

/* Số thứ tự trên thẻ giải pháp */
.solution-page .visual-number,
.solution-page .solution-index {
  font-size: 11px;
  line-height: 1.5;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.solution-page .visual-caption {
  font-size: 10px;
  line-height: 1.5;
  font-weight: 800;
  letter-spacing: 1.2px;
}

/* Tiêu đề từng nhóm giải pháp */
.solution-page .solution-information h3 {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: clamp(23px, 2.3vw, 28px);
  line-height: 1.35;
  letter-spacing: -.5px;
  font-weight: 800;
}

.solution-page .solution-information h4 {
  font-size: 15px;
  line-height: 1.55;
  font-weight: 700;
}

/* Mô tả giải pháp */
.solution-page .solution-description {
  font-size: 14.5px;
  line-height: 1.85;
  font-weight: 400;
}

/* Danh sách tính năng */
.solution-page .feature-list {
  gap: 11px;
}

.solution-page .feature-list li {
  font-size: 14px;
  line-height: 1.75;
  font-weight: 400;
}

/* Nút và đường dẫn */
.solution-page .primary-button,
.solution-page .secondary-button {
  font-size: 13.5px;
  line-height: 1.4;
  font-weight: 750;
}

.solution-page .solution-link,
.solution-page .cta-text-link {
  font-size: 13.5px;
  line-height: 1.5;
  font-weight: 750;
}

/* Các bước đồng hành */
.solution-page .process-number {
  font-size: 11px;
  font-weight: 800;
}

.solution-page .process-icon {
  font-size: 28px;
}

.solution-page .process-item h3 {
  font-size: 16px;
  line-height: 1.45;
  font-weight: 800;
}

.solution-page .process-item p {
  font-size: 13px;
  line-height: 1.8;
  font-weight: 400;
}

.solution-page .cta-content > p {
  font-size: 14px;
  line-height: 1.85;
}

.solution-page .cta-content h2 {
  font-size: clamp(29px, 3.5vw, 40px);
}

.solution-page .cta-text-link {
  font-size: 13px;
}

/* =========================================
   TABLET
   ========================================= */

@media (max-width: 900px) {
  .solution-page .solution-hero h1 {
    font-size: clamp(36px, 5.4vw, 48px);
    line-height: 1.2;
  }

  .solution-page .solution-information h3 {
    font-size: 24px;
  }

  .solution-page .solution-description {
    font-size: 14px;
  }

  .solution-page .feature-list li {
    font-size: 13.5px;
  }
}

/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 650px) {
  .solution-page {
    font-size: 14px;
    line-height: 1.7;
  }

  .solution-page .solution-hero h1 {
    font-size: clamp(32px, 8.5vw, 37px);
    line-height: 1.22;
    letter-spacing: -.9px;
  }

  .solution-page .hero-label {
    font-size: 10px;
  }

  .solution-page .hero-description {
    font-size: 14px;
    line-height: 1.8;
  }

  .solution-page .hero-stats strong {
    font-size: 21px;
  }

  .solution-page .hero-stats span {
    font-size: 10.5px;
    line-height: 1.5;
  }

  .solution-page .solution-intro h2,
  .solution-page .process-inner > h2,
  .solution-page .cta-content h2 {
    font-size: 29px;
    line-height: 1.3;
    letter-spacing: -.6px;
  }

  .solution-page .solution-intro > p {
    font-size: 14px;
    line-height: 1.8;
  }

  .solution-page .solution-information h3 {
    font-size: 23px;
    line-height: 1.35;
  }

  .solution-page .solution-information h4 {
    font-size: 14px;
    line-height: 1.6;
  }

  .solution-page .solution-description {
    font-size: 13.5px;
    line-height: 1.85;
  }

  .solution-page .feature-list li {
    font-size: 13px;
    line-height: 1.75;
  }

  .solution-page .process-item h3 {
    font-size: 14px;
  }

  .solution-page .process-item p {
    font-size: 12px;
    line-height: 1.7;
  }

  .solution-page .primary-button,
  .solution-page .secondary-button {
    font-size: 13px;
  }

  .solution-page .cta-content > p {
    font-size: 13px;
    line-height: 1.8;
  }

  .solution-page .section-eyebrow {
    font-size: 10px;
    letter-spacing: 1.4px;
  }
}
      `}</style>
    </main>
  );
}
