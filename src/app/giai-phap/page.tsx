
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Giải pháp | APA - Trợ lý hành chính số",
  description:
    "Các giải pháp hành chính số của APA dành cho người dân, doanh nghiệp, tổ chức và người Việt ở nước ngoài.",
};

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

const processSteps = [
  {
    number: "01",
    icon: "🔎",
    title: "Tìm hiểu",
    description: "Tiếp cận thông tin và xác định thủ tục cần thực hiện.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Chuẩn bị",
    description: "Tham khảo hướng dẫn và chuẩn bị giấy tờ cần thiết.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Kết nối",
    description: "Định hướng liên hệ cơ quan hoặc đơn vị phù hợp.",
  },
  {
    number: "04",
    icon: "✨",
    title: "Chủ động",
    description: "Theo dõi công việc và quản lý thông tin thuận tiện hơn.",
  },
];

export default function GiaiPhapPage() {
  return (
    <main className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-glow glow-one" />
        <div className="solution-hero-glow glow-two" />
        <div className="solution-hero-ring" />

        <div className="solution-container hero-content">
          <div className="hero-label">
            <span className="label-dot" />
            APA – TRỢ LÝ HÀNH CHÍNH SỐ
          </div>

          <h1>
            Một nền tảng, nhiều giải pháp,
            <span> phục vụ mọi nhu cầu.</span>
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
            <div className="stat-item">
              <strong>04</strong>
              <span>Nhóm đối tượng</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>01</strong>
              <span>Nền tảng kết nối</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Chủ động tra cứu</span>
            </div>
          </div>
        </div>

        <div className="hero-assistant" aria-hidden="true">
          <div className="assistant-orbit orbit-one" />
          <div className="assistant-orbit orbit-two" />
          <div className="assistant-core">
            <span>APA</span>
            <small>ASSISTANT</small>
          </div>
          <div className="assistant-card">
            <span className="assistant-star">✦</span>
            <div>
              <strong>APA Assistant</strong>
              <small>Hỗ trợ hành chính số</small>
            </div>
            <span className="online-dot" />
          </div>
        </div>
      </section>

      <section className="solution-intro solution-container">
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
            className={`solution-card ${index % 2 === 1 ? "reverse" : ""}`}
            key={solution.id}
            style={
              {
                "--solution-color": solution.color,
                "--solution-bg": solution.background,
              } as CSSProperties
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
              <p className="solution-description">{solution.description}</p>

              <ul className="solution-feature-list">
                {solution.features.map((feature) => (
                  <li key={feature}>
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
        <div className="solution-container process-inner">
          <div className="process-heading">
            <span className="section-eyebrow">CÁCH APA ĐỒNG HÀNH</span>
            <h2>
              Đơn giản hóa từ
              <br />
              <span>những bước đầu tiên.</span>
            </h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-item" key={step.number}>
                <div className="process-number">{step.number}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-cta solution-container">
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

      <style>{`
        .solution-page {
          --solution-navy: #0b2850;
          --solution-blue: #1768e8;
          --solution-muted: #5b7089;
          width: 100%;
          overflow: hidden;
          color: #203b5d;
          background: #f5f8fd;
          font-family: Inter, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .solution-page,
        .solution-page * {
          box-sizing: border-box;
        }

        .solution-container {
          width: min(1160px, calc(100% - 48px));
          margin-right: auto;
          margin-left: auto;
        }

        .solution-page a {
          text-decoration: none;
        }

        /* HERO */

        .solution-hero {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 540px;
          padding: 76px 0 68px;
          overflow: hidden;
          color: #fff;
          background:
            radial-gradient(ellipse at 78% 30%, rgba(46, 130, 226, .32), transparent 38%),
            linear-gradient(120deg, #081d3b 0%, #103b70 58%, #1766a5 100%);
        }

        .solution-hero-glow {
          position: absolute;
          z-index: -1;
          border-radius: 50%;
          pointer-events: none;
        }

        .glow-one {
          top: -240px;
          right: 7%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(102, 187, 255, .24), transparent 70%);
        }

        .glow-two {
          right: 35%;
          bottom: -300px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(41, 132, 230, .2), transparent 70%);
        }

        .solution-hero-ring {
          position: absolute;
          z-index: -1;
          top: -390px;
          right: -160px;
          width: 720px;
          height: 720px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.025),
            0 0 0 90px rgba(255,255,255,.018);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1160px;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 23px;
          color: #c7e2ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .label-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 9px;
          border-radius: 50%;
          background: #65d8ce;
          box-shadow: 0 0 13px rgba(101,216,206,.7);
        }

        .solution-hero h1 {
          max-width: 850px;
          margin: 0;
          color: #fff;
          font-size: clamp(39px, 5.2vw, 64px);
          line-height: 1.17;
          font-weight: 850;
          letter-spacing: -1.8px;
        }

        .solution-hero h1 span {
          color: #a9d7ff;
        }

        .hero-description {
          max-width: 690px;
          margin: 23px 0 27px;
          color: #d8e8fa;
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 47px;
          padding: 0 20px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 800;
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .primary-button {
          color: #12477d !important;
          background: #fff;
          box-shadow: 0 8px 22px rgba(0,0,0,.12);
        }

        .primary-button:hover {
          color: #12477d !important;
          background: #e6f3ff;
          transform: translateY(-3px);
        }

        .primary-button span {
          font-size: 17px;
        }

        .secondary-button {
          color: #fff !important;
          border: 1px solid rgba(255,255,255,.5);
          background: rgba(255,255,255,.06);
        }

        .secondary-button:hover {
          color: #fff !important;
          background: rgba(255,255,255,.15);
          transform: translateY(-3px);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 48px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-item strong {
          color: #fff;
          font-size: 27px;
          line-height: 1.2;
          font-weight: 850;
        }

        .stat-item span {
          color: #c7dcef;
          font-size: 11px;
        }

        .stat-divider {
          width: 1px;
          height: 37px;
          background: rgba(255,255,255,.25);
        }

        /* HERO ASSISTANT VISUAL */

        .hero-assistant {
          position: absolute;
          top: 50%;
          right: max(5%, calc((100vw - 1160px) / 2));
          width: 330px;
          height: 330px;
          transform: translateY(-43%);
          pointer-events: none;
        }

        .assistant-orbit {
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(180,220,255,.22);
          border-radius: 50%;
        }

        .orbit-two {
          inset: 55px;
          border-style: dashed;
          border-color: rgba(180,220,255,.3);
        }

        .assistant-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 150px;
          height: 150px;
          border: 1px solid rgba(181,226,255,.8);
          border-radius: 50%;
          color: #fff;
          background: radial-gradient(circle at 35% 25%, #2872b5, #092449 75%);
          box-shadow: 0 0 0 13px rgba(71,165,255,.08), 0 0 55px rgba(63,164,255,.28);
          transform: translate(-50%, -50%);
        }

        .assistant-core span {
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .assistant-core small {
          color: #c8e5ff;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .assistant-card {
          position: absolute;
          right: -5px;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 12px;
          color: #183a61;
          background: #fff;
          box-shadow: 0 14px 35px rgba(0,0,0,.2);
        }

        .assistant-star {
          color: #1768e8;
          font-size: 23px;
        }

        .assistant-card strong,
        .assistant-card small {
          display: block;
        }

        .assistant-card strong {
          font-size: 12px;
        }

        .assistant-card small {
          color: #71839a;
          font-size: 10px;
        }

        .online-dot {
          width: 8px;
          height: 8px;
          margin-left: 8px;
          border-radius: 50%;
          background: #16b887;
        }

        /* INTRO */

        .solution-intro {
          padding-top: 86px;
          padding-bottom: 45px;
          text-align: center;
        }

        .section-eyebrow {
          display: inline-block;
          margin-bottom: 15px;
          color: #1768c5;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.8px;
        }

        .solution-intro h2,
        .process-heading h2,
        .cta-content h2 {
          margin: 0 0 17px;
          color: #102d50;
          font-size: clamp(30px, 3.5vw, 41px);
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: -1px;
        }

        .solution-intro h2 span,
        .process-heading h2 span,
        .cta-content h2 span {
          color: #2674bd;
        }

        .solution-intro > p {
          max-width: 760px;
          margin: 0 auto;
          color: #5b7089;
          font-size: 14px;
          line-height: 1.9;
        }

        /* SOLUTION CARDS */

        .solution-list {
          display: grid;
          gap: 28px;
          padding-top: 20px;
          padding-bottom: 85px;
        }

        .solution-card {
          display: grid;
          grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
          min-width: 0;
          overflow: hidden;
          border: 1px solid #e0e9f3;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 9px 30px rgba(17,48,84,.055);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 17px 38px rgba(17,48,84,.1);
        }

        .solution-card.reverse {
          grid-template-columns: minmax(0, 1.12fr) minmax(0, .88fr);
        }

        .solution-card.reverse .solution-visual {
          order: 2;
        }

        .solution-card.reverse .solution-information {
          order: 1;
        }

        .solution-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 390px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 48%, #fff 0%, var(--solution-bg) 65%);
        }

        .visual-number {
          position: absolute;
          top: 24px;
          left: 28px;
          color: var(--solution-color);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .visual-icon {
          position: relative;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 155px;
          height: 155px;
          border: 1px solid rgba(255,255,255,.9);
          border-radius: 38px;
          background: rgba(255,255,255,.78);
          box-shadow: 0 18px 45px rgba(24,65,110,.1);
          font-size: 76px;
          transform: rotate(-5deg);
        }

        .visual-caption {
          position: absolute;
          bottom: 27px;
          left: 28px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--solution-color);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .visual-caption-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--solution-color);
        }

        .visual-decoration {
          position: absolute;
          border: 1px solid color-mix(in srgb, var(--solution-color) 17%, transparent);
          border-radius: 50%;
        }

        .decoration-a {
          width: 260px;
          height: 260px;
        }

        .decoration-b {
          width: 330px;
          height: 330px;
        }

        .solution-information {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          min-width: 0;
          padding: 38px 42px;
        }

        .solution-index {
          display: inline-block;
          margin-bottom: 13px;
          color: var(--solution-color);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }

        .solution-information h3 {
          margin: 0 0 8px;
          color: #102d50;
          font-size: clamp(22px, 2.3vw, 28px);
          line-height: 1.35;
          font-weight: 850;
          letter-spacing: -.5px;
        }

        .solution-information h4 {
          margin: 0 0 14px;
          color: var(--solution-color);
          font-size: 14px;
          line-height: 1.6;
          font-weight: 750;
        }

        .solution-description {
          margin: 0 0 19px;
          color: #5a6f87;
          font-size: 13px;
          line-height: 1.85;
        }

        .solution-feature-list {
          display: grid;
          gap: 10px;
          width: 100%;
          padding: 0;
          margin: 0 0 23px;
          list-style: none;
        }

        .solution-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #354f6d;
          font-size: 12px;
          line-height: 1.7;
        }

        .check-icon {
          display: grid;
          place-items: center;
          flex: 0 0 20px;
          width: 20px;
          height: 20px;
          margin-top: 1px;
          border-radius: 50%;
          color: var(--solution-color);
          background: var(--solution-bg);
          font-size: 11px;
          font-weight: 900;
        }

        .solution-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          color: var(--solution-color) !important;
          font-size: 13px;
          font-weight: 850;
        }

        .solution-link span {
          font-size: 18px;
          transition: transform .2s ease;
        }

        .solution-link:hover span {
          transform: translateX(5px);
        }

        /* PROCESS */

        .solution-process {
          padding: 76px 0 82px;
          background:
            radial-gradient(ellipse at 50% 0%, #e5f1ff, transparent 65%),
            #edf4fc;
        }

        .process-heading {
          margin-bottom: 38px;
          text-align: center;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .process-item {
          position: relative;
          min-width: 0;
          padding: 25px 19px 26px;
          border: 1px solid #dce7f3;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 7px 22px rgba(20,55,95,.045);
          text-align: center;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .process-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(20,55,95,.09);
        }

        .process-number {
          color: #8ba6c4;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .process-icon {
          display: grid;
          place-items: center;
          width: 62px;
          height: 62px;
          margin: 16px auto;
          border-radius: 18px;
          background: #edf5ff;
          font-size: 28px;
        }

        .process-item h3 {
          margin: 0 0 8px;
          color: #163b67;
          font-size: 16px;
          font-weight: 850;
        }

        .process-item p {
          margin: 0;
          color: #647991;
          font-size: 12px;
          line-height: 1.75;
        }

        /* CTA */

        .solution-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          min-height: 300px;
          margin-top: 76px;
          margin-bottom: 80px;
          padding: 48px 55px;
          overflow: hidden;
          border-radius: 22px;
          color: #fff;
          background: linear-gradient(115deg, #0a2345, #155b9b);
          box-shadow: 0 16px 38px rgba(15,53,96,.13);
        }

        .solution-cta::before {
          position: absolute;
          top: -170px;
          right: 10%;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(106,190,255,.24), transparent 70%);
          content: "";
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 680px;
        }

        .cta-content .section-eyebrow {
          color: #b9dcff;
        }

        .cta-content h2 {
          color: #fff;
        }

        .cta-content h2 span {
          color: #a8d7ff;
        }

        .cta-content > p {
          max-width: 590px;
          margin: 0 0 23px;
          color: #d6e7f8;
          font-size: 13px;
          line-height: 1.85;
        }

        .cta-text-link {
          color: #fff !important;
          font-size: 13px;
          font-weight: 750;
        }

        .cta-text-link:hover {
          color: #a8d7ff !important;
        }

        .cta-symbol {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          color: rgba(255,255,255,.13);
          font-size: clamp(55px, 8vw, 105px);
          font-weight: 950;
          letter-spacing: -7px;
        }

        .cta-symbol span {
          color: rgba(147,211,255,.6);
        }

        /* TABLET */

        @media (max-width: 950px) {
          .hero-assistant {
            right: 2%;
            width: 260px;
            height: 260px;
            opacity: .55;
          }

          .assistant-core {
            width: 120px;
            height: 120px;
          }

          .assistant-card {
            right: 0;
            bottom: 5px;
          }

          .solution-information {
            padding: 30px 27px;
          }

          .solution-visual {
            min-height: 360px;
          }

          .process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .solution-container {
            width: calc(100% - 34px);
          }

          .solution-hero {
            min-height: auto;
            padding: 65px 0 43px;
          }

          .hero-content {
            width: calc(100% - 34px);
          }

          .solution-hero h1 {
            max-width: 100%;
            font-size: clamp(34px, 8.5vw, 43px);
            line-height: 1.2;
            letter-spacing: -1px;
          }

          .hero-description {
            max-width: 100%;
            font-size: 14px;
            line-height: 1.8;
          }

          .hero-assistant {
            display: none;
          }

          .hero-stats {
            justify-content: space-between;
            gap: 10px;
            margin-top: 36px;
          }

          .stat-item strong {
            font-size: 23px;
          }

          .stat-item span {
            font-size: 10px;
          }

          .stat-divider {
            height: 31px;
          }

          .solution-intro {
            padding-top: 58px;
            padding-bottom: 30px;
          }

          .solution-intro h2,
          .process-heading h2,
          .cta-content h2 {
            font-size: 29px;
            line-height: 1.32;
          }

          .solution-intro > p {
            font-size: 13px;
          }

          .solution-list {
            gap: 19px;
            padding-top: 12px;
            padding-bottom: 58px;
          }

          .solution-card,
          .solution-card.reverse {
            grid-template-columns: 1fr;
          }

          .solution-card.reverse .solution-visual,
          .solution-card.reverse .solution-information {
            order: initial;
          }

          .solution-visual {
            min-height: 230px;
          }

          .visual-icon {
            width: 110px;
            height: 110px;
            border-radius: 29px;
            font-size: 55px;
          }

          .visual-number {
            top: 17px;
            left: 19px;
          }

          .visual-caption {
            bottom: 17px;
            left: 19px;
          }

          .solution-information {
            padding: 25px 22px 27px;
          }

          .solution-information h3 {
            font-size: 23px;
          }

          .solution-description {
            font-size: 13px;
          }

          .solution-feature-list li {
            font-size: 12px;
          }

          .solution-process {
            padding: 55px 0;
          }

          .process-heading {
            margin-bottom: 27px;
          }

          .process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 11px;
          }

          .process-item {
            padding: 19px 12px;
          }

          .process-icon {
            width: 52px;
            height: 52px;
            margin: 12px auto;
            font-size: 24px;
          }

          .process-item h3 {
            font-size: 14px;
          }

          .process-item p {
            font-size: 11px;
          }

          .solution-cta {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
            min-height: auto;
            margin-top: 48px;
            margin-bottom: 55px;
            padding: 33px 23px;
          }

          .cta-symbol {
            align-self: flex-end;
            font-size: 54px;
          }

          .cta-content > p {
            font-size: 12px;
          }
        }

        @media (max-width: 380px) {
          .hero-stats {
            gap: 7px;
          }

          .stat-item strong {
            font-size: 20px;
          }

          .stat-item span {
            font-size: 9px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .hero-actions a {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solution-page *,
          .solution-page *::before,
          .solution-page *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
