
import Link from "next/link";

export const metadata = {
  title: "Bảng giá | APA - Trợ lý hành chính số",
  description: "Các gói dịch vụ APA dành cho cá nhân và doanh nghiệp.",
};

const plans = [
  {
    name: "APA Cá nhân",
    label: "DÀNH CHO NGƯỜI DÂN",
    price: "29.000đ",
    period: "/ tháng",
    description:
      "Trợ lý hành chính cá nhân giúp bạn chuẩn bị hồ sơ, tự động hóa biểu mẫu và quản lý công việc hành chính.",
    features: [
      "Kiểm tra và rà soát hồ sơ",
      "Tự động điền thông tin vào biểu mẫu",
      "Quản lý hồ sơ cá nhân",
      "Nhắc lịch và thời hạn xử lý",
      "Tra cứu và hướng dẫn thủ tục",
    ],
    href: "/dang-ky",
    cta: "Đăng ký gói cá nhân",
    hot: false,
  },
  {
    name: "APA Business",
    label: "DÀNH CHO DOANH NGHIỆP",
    price: "199.000đ",
    period: "/ tháng",
    description:
      "Giải pháp hỗ trợ doanh nghiệp quản lý hồ sơ và xử lý các thủ tục hành chính thường gặp.",
    features: [
      "Các tính năng của gói Cá nhân",
      "Hỗ trợ thủ tục đăng ký doanh nghiệp",
      "Hỗ trợ thủ tục thuế",
      "Hướng dẫn thủ tục giấy phép con",
      "Quản lý hồ sơ và thông tin doanh nghiệp",
      "Hỗ trợ mở rộng theo nhu cầu",
    ],
    href: "/lien-he",
    cta: "Đăng ký APA Business",
    hot: true,
  },
];

export default function BangGiaPage() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="hero-decoration">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-line" />
        </div>

        <div className="pricing-container hero-inner">
          <div className="eyebrow">
            <span className="live-dot" />
            APA DIGITAL ASSISTANT
          </div>

          <h1>
            Chi phí hợp lý,
            <br />
            <span>hành chính đơn giản hơn</span>
          </h1>

          <p>
            Tiết kiệm thời gian, giảm thao tác giấy tờ và quản lý
            thủ tục hành chính hiệu quả với APA.
          </p>

          <a href="#plans" className="hero-cta">
            Khám phá các gói dịch vụ
            <span>↓</span>
          </a>

          <div className="hero-benefits">
            <span>Đơn giản hóa thủ tục</span>
            <i />
            <span>Tối ưu thời gian</span>
            <i />
            <span>Đồng hành cùng bạn</span>
          </div>
        </div>
      </section>

      <section className="pricing-main" id="plans">
        <div className="pricing-container">
          <div className="section-heading">
            <span className="section-label">BẢNG GIÁ DỊCH VỤ</span>
            <h2>
              Một lựa chọn phù hợp,
              <br />
              <span>nhiều giá trị thiết thực</span>
            </h2>
            <p>
              Các gói dịch vụ được thiết kế cho nhu cầu của cá nhân
              và doanh nghiệp, với mức phí rõ ràng.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.hot ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.hot && (
                  <div className="popular-tag">
                    <span>✦</span> GÓI DOANH NGHIỆP
                  </div>
                )}

                <div className="plan-top">
                  <span className="plan-label">{plan.label}</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>

                <div className="price-area">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <div className="plan-divider" />

                <div className="feature-title">
                  <span className="feature-title-icon">✓</span>
                  TÍNH NĂNG BAO GỒM
                </div>

                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="check-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="plan-button">
                  {plan.cta}
                  <span className="button-arrow">→</span>
                </Link>

                <div className="card-orbit" />
              </article>
            ))}
          </div>

          <div className="pricing-note">
            <span className="note-icon">i</span>
            <p>
              Giá dịch vụ được tính theo tháng. Các dịch vụ tư vấn
              chuyên sâu, bảo trì, hỗ trợ kỹ thuật và triển khai
              theo quy mô riêng có thể được báo giá riêng.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-closing">
        <div className="closing-decoration" />

        <div className="pricing-container closing-inner">
          <div>
            <span className="closing-label">BẮT ĐẦU CÙNG APA</span>
            <h2>
              Sẵn sàng đơn giản hóa
              <br />
              thủ tục hành chính?
            </h2>
            <p>
              Lựa chọn gói dịch vụ phù hợp và trải nghiệm cách
              làm thủ tục hành chính thuận tiện hơn.
            </p>
          </div>

          <div className="closing-buttons">
            <Link href="/dang-ky" className="closing-primary">
              Đăng ký ngay <span>→</span>
            </Link>
            <Link href="/lien-he" className="closing-secondary">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .pricing-page {
          --apa-navy: #102d50;
          --apa-blue: #1769b7;
          --apa-text: #263f5c;
          --apa-muted: #647991;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          color: var(--apa-text);
          background: #f5f8fc;
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .pricing-page,
        .pricing-page * {
          box-sizing: border-box;
        }

        .pricing-container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .pricing-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 94px 0 48px;
          color: #fff;
          background: linear-gradient(
            115deg,
            #081c38 0%,
            #103c6e 55%,
            #1769a9 100%
          );
        }

        .hero-decoration {
          position: absolute;
          z-index: -1;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glow-one {
          width: 420px;
          height: 420px;
          top: -240px;
          right: 8%;
          background: radial-gradient(
            circle,
            rgba(98, 181, 255, .33),
            rgba(98, 181, 255, 0) 70%
          );
          animation: glowDrift 10s ease-in-out infinite alternate;
        }

        .glow-two {
          width: 370px;
          height: 370px;
          bottom: -240px;
          right: 36%;
          background: radial-gradient(
            circle,
            rgba(39, 141, 231, .3),
            rgba(39, 141, 231, 0) 70%
          );
          animation: glowDriftTwo 13s ease-in-out infinite alternate;
        }

        .hero-line {
          position: absolute;
          width: 700px;
          height: 700px;
          right: -280px;
          top: -410px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.025),
            0 0 0 90px rgba(255,255,255,.02);
          animation: lineRotate 45s linear infinite;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #c5e1ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.3px;
        }

        .live-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 9px;
          border-radius: 50%;
          background: #65d8ce;
          box-shadow: 0 0 12px rgba(101,216,206,.75);
          animation: dotPulse 2s ease-in-out infinite;
        }

        .pricing-hero h1 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(38px, 5.5vw, 62px);
          line-height: 1.2;
          letter-spacing: -1.8px;
          font-weight: 800;
        }

        .pricing-hero h1 span {
          color: #a8d7ff;
          background: linear-gradient(
            90deg,
            #8ecbff,
            #ffffff,
            #8ecbff
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textFlow 6s linear infinite;
        }

        .pricing-hero p {
          max-width: 620px;
          margin: 21px 0 28px;
          color: #e0edfa;
          font-size: 15px;
          line-height: 1.9;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          padding: 14px 21px;
          border-radius: 9px;
          color: #143e70;
          background: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 7px 20px rgba(0,0,0,.12);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 13px 27px rgba(0,0,0,.2);
        }

        .hero-cta span {
          font-size: 18px;
          animation: arrowBounce 1.6s ease-in-out infinite;
        }

        .hero-benefits {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 54px;
          color: #d1e4f8;
          font-size: 11px;
          font-weight: 600;
        }

        .hero-benefits i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #79c5ff;
        }

        /* MAIN */

        .pricing-main {
          padding: 82px 0 78px;
          background:
            radial-gradient(ellipse at 50% 0%, #eaf3ff 0%, transparent 55%),
            #f5f8fc;
        }

        .section-heading {
          max-width: 700px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 15px;
          color: #1769b7;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 0 0 15px;
          color: #102d50;
          font-size: clamp(29px, 4vw, 40px);
          line-height: 1.32;
          font-weight: 800;
          letter-spacing: -.9px;
        }

        .section-heading h2 span {
          color: #246eb3;
        }

        .section-heading p {
          max-width: 590px;
          margin: 0 auto;
          color: #5f748e;
          font-size: 14px;
          line-height: 1.85;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: 25px;
          max-width: 920px;
          margin: 0 auto;
        }

        .plan-card {
          position: relative;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 34px;
          overflow: hidden;
          border: 1px solid #dce6f1;
          border-radius: 19px;
          background: #ffffff;
          box-shadow: 0 9px 30px rgba(20,52,88,.065);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .plan-card:hover {
          transform: translateY(-7px);
          border-color: #8cbce8;
          box-shadow: 0 20px 42px rgba(20,52,88,.13);
        }

        .plan-card.featured {
          border: 2px solid #2778c9;
          box-shadow: 0 12px 38px rgba(39,120,201,.13);
        }

        .plan-card.featured:hover {
          border-color: #145ca9;
          box-shadow: 0 23px 48px rgba(39,120,201,.2);
        }

        .popular-tag {
          position: absolute;
          top: 0;
          right: 22px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 0 0 9px 9px;
          color: #ffffff;
          background: #1769b7;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .5px;
        }

        .popular-tag span {
          color: #d6edff;
        }

        .plan-top,
        .price-area,
        .plan-divider,
        .feature-title,
        .feature-list,
        .plan-button {
          position: relative;
          z-index: 1;
        }

        .plan-label {
          display: inline-block;
          color: #226eaf;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.2px;
        }

        .plan-top h3 {
          margin: 13px 0 12px;
          color: #102d50;
          font-size: 27px;
          line-height: 1.3;
          font-weight: 800;
        }

        .plan-top p {
          min-height: 74px;
          margin: 0;
          color: #526981;
          font-size: 13px;
          line-height: 1.85;
        }

        .price-area {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px;
          margin: 26px 0 23px;
        }

        .price-area strong {
          color: #145da8;
          font-size: clamp(33px, 4vw, 41px);
          font-weight: 850;
          line-height: 1.2;
          letter-spacing: -1.2px;
          transition: color .25s ease;
        }

        .plan-card:hover .price-area strong {
          color: #2686d5;
        }

        .price-area > span {
          color: #647991;
          font-size: 13px;
        }

        .plan-divider {
          height: 1px;
          margin-bottom: 22px;
          background: #e3ebf4;
        }

        .feature-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 17px;
          color: #526981;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.1px;
        }

        .feature-title-icon {
          display: grid;
          place-items: center;
          width: 23px;
          height: 23px;
          border-radius: 7px;
          color: #1769b7;
          background: #e8f3ff;
          font-size: 12px;
        }

        .feature-list {
          display: grid;
          gap: 15px;
          flex: 1;
          padding: 0;
          margin: 0 0 29px;
          list-style: none;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #334d69;
          font-size: 12px;
          line-height: 1.75;
        }

        .check-icon {
          display: grid;
          place-items: center;
          flex: 0 0 21px;
          width: 21px;
          height: 21px;
          margin-top: 1px;
          border-radius: 50%;
          color: #1769b7;
          background: #eaf4ff;
          font-size: 11px;
          font-weight: 900;
          transition: transform .35s ease;
        }

        .plan-card:hover .check-icon {
          transform: rotate(360deg);
        }

        .plan-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          width: 100%;
          min-height: 48px;
          padding: 12px 15px;
          border: 1px solid #b9cfe5;
          border-radius: 9px;
          color: #174f87;
          background: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition:
            color .25s ease,
            background .25s ease,
            border-color .25s ease;
        }

        .plan-button:hover {
          color: #ffffff;
          background: #145da8;
          border-color: #145da8;
        }

        .featured .plan-button {
          color: #ffffff;
          background: #1769b7;
          border-color: #1769b7;
        }

        .featured .plan-button:hover {
          background: #104d8a;
          border-color: #104d8a;
        }

        .button-arrow {
          display: inline-block;
          font-size: 16px;
          transition: transform .25s ease;
        }

        .plan-button:hover .button-arrow {
          transform: translateX(5px);
        }

        .card-orbit {
          position: absolute;
          z-index: 0;
          right: -90px;
          bottom: 65px;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(45,125,195,.08);
          border-radius: 50%;
          pointer-events: none;
          transition: transform .5s ease;
        }

        .card-orbit::after {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(45,125,195,.08);
          border-radius: 50%;
        }

        .plan-card:hover .card-orbit {
          transform: scale(1.25) rotate(20deg);
        }

        .pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          max-width: 790px;
          margin: 26px auto 0;
          padding: 15px 18px;
          border: 1px solid #dce8f4;
          border-radius: 11px;
          background: #ffffff;
        }

        .note-icon {
          display: grid;
          place-items: center;
          flex: 0 0 22px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: #1769b7;
          background: #eaf3ff;
          font-size: 12px;
          font-weight: 800;
        }

        .pricing-note p {
          margin: 0;
          color: #536b83;
          font-size: 11px;
          line-height: 1.8;
        }

        /* CLOSING */

        .pricing-closing {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 65px 0;
          color: #ffffff;
          background: linear-gradient(110deg, #0a2345, #155d9f);
        }

        .closing-decoration {
          position: absolute;
          z-index: -1;
          top: -190px;
          right: 10%;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(102,183,255,.28),
            transparent 70%
          );
          animation: glowDrift 11s ease-in-out infinite alternate;
        }

        .closing-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .closing-label {
          display: inline-block;
          margin-bottom: 15px;
          color: #b7dcff;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.8px;
        }

        .closing-inner h2 {
          margin: 0 0 13px;
          color: #ffffff;
          font-size: clamp(26px, 4vw, 36px);
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: -.7px;
        }

        .closing-inner p {
          max-width: 580px;
          margin: 0;
          color: #dceafa;
          font-size: 13px;
          line-height: 1.8;
        }

        .closing-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          flex-shrink: 0;
        }

        .closing-buttons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: transform .25s ease, background .25s ease;
        }

        .closing-primary {
          color: #12477c;
          background: #ffffff;
        }

        .closing-secondary {
          color: #ffffff;
          border: 1px solid rgba(255,255,255,.55);
        }

        .closing-buttons a:hover {
          transform: translateY(-3px);
        }

        .closing-primary:hover {
          background: #dceeff;
        }

        .closing-secondary:hover {
          background: rgba(255,255,255,.13);
        }

        /* CONTINUOUS ANIMATIONS */

        @keyframes glowDrift {
          from { transform: translate3d(-15px, 0, 0); }
          to { transform: translate3d(30px, 30px, 0); }
        }

        @keyframes glowDriftTwo {
          from { transform: translate3d(0, 15px, 0); }
          to { transform: translate3d(-25px, -20px, 0); }
        }

        @keyframes lineRotate {
          to { transform: rotate(360deg); }
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 7px rgba(101,216,206,.7); }
          50% { box-shadow: 0 0 18px rgba(101,216,206,1); }
        }

        @keyframes textFlow {
          to { background-position: 200% center; }
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {
          .closing-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .pricing-container {
            width: calc(100% - 32px);
          }

          .pricing-hero {
            padding: 69px 0 37px;
          }

          .pricing-hero h1 {
            font-size: clamp(34px, 9vw, 45px);
            letter-spacing: -1px;
          }

          .pricing-hero p {
            font-size: 13px;
          }

          .hero-benefits {
            gap: 9px;
            margin-top: 38px;
            font-size: 9px;
          }

          .pricing-main {
            padding: 58px 0;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .section-heading h2 {
            font-size: 29px;
          }

          .section-heading p {
            font-size: 12px;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .plan-card {
            padding: 27px 22px;
          }

          .plan-top p {
            min-height: 0;
          }

          .price-area {
            margin: 22px 0;
          }

          .price-area strong {
            font-size: 36px;
          }

          .pricing-note {
            padding: 13px;
          }

          .pricing-closing {
            padding: 48px 0;
          }

          .closing-buttons {
            width: 100%;
          }

          .closing-buttons a {
            flex: 1;
            padding: 0 10px;
            text-align: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-page *,
          .pricing-page *::before,
          .pricing-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
