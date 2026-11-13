
import Link from "next/link";

export const metadata = {
  title: "Bảng giá | APA - Trợ lý hành chính số",
  description:
    "Các gói dịch vụ APA dành cho cá nhân và doanh nghiệp.",
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
      <section className="hero">
        <div className="hero-background">
          <div className="light light-one" />
          <div className="light light-two" />
          <div className="light light-three" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            APA DIGITAL ASSISTANT
          </span>

          <h1>
            Chi phí hợp lý,
            <br />
            <span>hành chính đơn giản hơn</span>
          </h1>

          <p>
            Tiết kiệm thời gian, giảm thao tác giấy tờ và quản lý
            thủ tục hành chính hiệu quả với APA.
          </p>

          <a href="#plans" className="hero-button">
            Khám phá các gói dịch vụ
            <span className="button-arrow">↓</span>
          </a>

          <div className="hero-bottom">
            <span>Đơn giản hóa thủ tục</span>
            <span className="hero-separator" />
            <span>Tối ưu thời gian</span>
            <span className="hero-separator" />
            <span>Đồng hành cùng bạn</span>
          </div>
        </div>
      </section>

      <section className="plans-section" id="plans">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">BẢNG GIÁ DỊCH VỤ</span>
            <h2>
              Một lựa chọn phù hợp,
              <br />
              nhiều giá trị thiết thực
            </h2>
            <p>
              APA cung cấp các gói dịch vụ dành cho cá nhân và
              doanh nghiệp với mức phí minh bạch.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article
                className={`plan-card ${plan.hot ? "featured" : ""}`}
                key={plan.name}
                style={{ "--card-index": index } as React.CSSProperties}
              >
                {plan.hot && (
                  <div className="popular-tag">
                    <span>✦</span> LỰA CHỌN DOANH NGHIỆP
                  </div>
                )}

                <div className="plan-top">
                  <span className="plan-label">{plan.label}</span>
                  <h3>{plan.name}</h3>
                  <p className="plan-description">
                    {plan.description}
                  </p>
                </div>

                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <div className="plan-divider" />

                <p className="feature-heading">
                  TÍNH NĂNG BAO GỒM
                </p>

                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="plan-button">
                  {plan.cta}
                  <span>→</span>
                </Link>

                <div className="card-decoration" />
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Giá dịch vụ được tính theo tháng. Các dịch vụ tư vấn
            chuyên sâu, bảo trì, hỗ trợ kỹ thuật và triển khai
            theo quy mô riêng có thể được báo giá riêng.
          </p>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-light" />

        <div className="container closing-content">
          <div className="closing-text">
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

          <div className="closing-actions">
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
          --navy: #102b50;
          --blue: #1769b7;
          --muted: #687b94;
          color: var(--navy);
          background: #f6f8fc;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .pricing-page * {
          box-sizing: border-box;
        }

        .container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 100px 0 55px;
          color: white;
          background: linear-gradient(
            115deg,
            #071a37 0%,
            #0c2d5b 50%,
            #124c88 100%
          );
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image:
            linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to right, transparent, black);
        }

        .light {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          pointer-events: none;
        }

        .light-one {
          width: 420px;
          height: 420px;
          top: -220px;
          right: 5%;
          background: rgba(67, 161, 255, .28);
          animation: floatOne 9s ease-in-out infinite alternate;
        }

        .light-two {
          width: 280px;
          height: 280px;
          bottom: -200px;
          right: 36%;
          background: rgba(31, 120, 220, .24);
          animation: floatTwo 11s ease-in-out infinite alternate;
        }

        .light-three {
          width: 170px;
          height: 170px;
          top: 30%;
          right: 15%;
          background: rgba(125, 195, 255, .16);
          animation: floatThree 7s ease-in-out infinite alternate;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 23px;
          color: #b1d5ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #65b4ff;
          box-shadow: 0 0 14px #65b4ff;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 5.6vw, 65px);
          line-height: 1.2;
          letter-spacing: -2px;
          font-weight: 800;
          color: #fff;
        }

        .hero h1 span {
          color: #83c3ff;
          background: linear-gradient(90deg, #83c3ff, #c4e3ff, #83c3ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 6s linear infinite;
        }

        .hero-content > p {
          max-width: 620px;
          margin: 23px 0 30px;
          color: #d0e0f3;
          font-size: 16px;
          line-height: 1.85;
          font-weight: 400;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          padding: 15px 22px;
          border: 1px solid rgba(255,255,255,.6);
          border-radius: 9px;
          background: white;
          color: #103b78;
          text-decoration: none;
          font-size: 14px;
          font-weight: 750;
          transition: transform .3s, box-shadow .3s;
        }

        .hero-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px #00132e55;
        }

        .button-arrow {
          display: inline-block;
          animation: arrowMove 1.5s ease-in-out infinite;
        }

        .hero-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 17px;
          margin-top: 62px;
          color: #b6cde8;
          font-size: 12px;
          font-weight: 600;
        }

        .hero-separator {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #70baff;
        }

        /* PRICING */

        .plans-section {
          padding: 88px 0 80px;
        }

        .section-heading {
          max-width: 690px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 17px;
          color: #2878c5;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 0 0 15px;
          color: #10294e;
          font-size: clamp(29px, 4vw, 41px);
          line-height: 1.3;
          letter-spacing: -1px;
          font-weight: 800;
        }

        .section-heading p {
          max-width: 580px;
          margin: 0 auto;
          color: #718198;
          font-size: 14px;
          line-height: 1.85;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 27px;
          max-width: 920px;
          margin: 0 auto;
          align-items: stretch;
        }

        .plan-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 35px;
          overflow: hidden;
          border: 1px solid #e0e8f2;
          border-radius: 19px;
          background: #fff;
          box-shadow: 0 10px 35px rgba(24,54,94,.055);
          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            box-shadow .35s,
            border-color .35s;
        }

        .plan-card:hover {
          transform: translateY(-8px);
          border-color: #9cc5ec;
          box-shadow: 0 23px 50px rgba(24,54,94,.13);
        }

        .plan-card.featured {
          border: 2px solid #2778d0;
          box-shadow: 0 15px 45px rgba(39,120,208,.12);
        }

        .plan-card.featured:hover {
          border-color: #145ca9;
          box-shadow: 0 24px 55px rgba(39,120,208,.2);
        }

        .popular-tag {
          position: absolute;
          top: 0;
          right: 23px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 0 0 9px 9px;
          color: white;
          background: #2477d1;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .5px;
        }

        .popular-tag span {
          color: #c7e6ff;
        }

        .plan-top {
          position: relative;
          z-index: 1;
        }

        .plan-label {
          color: #4385c9;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .plan-top h3 {
          margin: 13px 0 12px;
          color: #10294e;
          font-size: 27px;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -.5px;
        }

        .plan-description {
          min-height: 75px;
          margin: 0;
          color: #718097;
          font-size: 14px;
          line-height: 1.8;
        }

        .price {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px;
          margin: 27px 0 23px;
        }

        .price strong {
          color: #1457a0;
          font-size: clamp(32px, 4vw, 41px);
          line-height: 1.2;
          font-weight: 850;
          letter-spacing: -1.4px;
          transition: color .3s;
        }

        .plan-card:hover .price strong {
          color: #2685df;
        }

        .price span {
          color: #8290a3;
          font-size: 13px;
          font-weight: 500;
        }

        .plan-divider {
          height: 1px;
          margin-bottom: 23px;
          background: #e8edf4;
        }

        .feature-heading {
          margin: 0 0 15px;
          color: #7d8ba0;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .feature-list {
          display: grid;
          gap: 16px;
          padding: 0;
          margin: 0 0 30px;
          list-style: none;
          flex: 1;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #40516b;
          font-size: 13px;
          line-height: 1.7;
        }

        .check {
          display: inline-grid;
          place-items: center;
          flex-shrink: 0;
          width: 21px;
          height: 21px;
          margin-top: 1px;
          border-radius: 50%;
          color: #1670c8;
          background: #e9f3ff;
          font-size: 12px;
          font-weight: 900;
          transition: transform .3s, background .3s;
        }

        .plan-card:hover .check {
          transform: rotate(360deg);
          background: #d9ecff;
        }

        .plan-button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          width: 100%;
          padding: 15px;
          border: 1px solid #cbd9e9;
          border-radius: 9px;
          color: #174f8d;
          background: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .3s;
        }

        .plan-button span {
          display: inline-block;
          transition: transform .3s;
        }

        .plan-button:hover span {
          transform: translateX(5px);
        }

        .featured .plan-button {
          border-color: #1768b9;
          background: #1768b9;
          color: white;
        }

        .plan-button:hover {
          border-color: #0d4f91;
          background: #0d4f91;
          color: white;
        }

        .card-decoration {
          position: absolute;
          right: -65px;
          bottom: 60px;
          width: 150px;
          height: 150px;
          border: 1px solid rgba(55,135,211,.08);
          border-radius: 50%;
          pointer-events: none;
          transition: transform .5s;
        }

        .card-decoration::after {
          position: absolute;
          content: "";
          inset: 17px;
          border: 1px solid rgba(55,135,211,.08);
          border-radius: 50%;
        }

        .plan-card:hover .card-decoration {
          transform: scale(1.25) rotate(25deg);
        }

        .pricing-note {
          max-width: 780px;
          margin: 28px auto 0;
          color: #8290a3;
          text-align: center;
          font-size: 12px;
          line-height: 1.8;
        }

        /* CLOSING */

        .closing-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 68px 0;
          color: white;
          background: linear-gradient(110deg, #0a2348, #145ba4);
        }

        .closing-light {
          position: absolute;
          z-index: -1;
          top: -160px;
          right: 15%;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(91,174,255,.2);
          filter: blur(4px);
          animation: floatOne 10s ease-in-out infinite alternate;
        }

        .closing-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .closing-label {
          display: inline-block;
          margin-bottom: 16px;
          color: #a8d1ff;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.8px;
        }

        .closing-content h2 {
          max-width: 620px;
          margin: 0 0 13px;
          font-size: clamp(26px, 4vw, 37px);
          line-height: 1.35;
          letter-spacing: -.8px;
          font-weight: 800;
        }

        .closing-content p {
          max-width: 600px;
          margin: 0;
          color: #d0e0f4;
          font-size: 14px;
          line-height: 1.8;
        }

        .closing-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          flex-shrink: 0;
        }

        .closing-actions a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 14px 19px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: transform .3s, background .3s;
        }

        .closing-primary {
          color: #10427a;
          background: white;
        }

        .closing-secondary {
          color: white;
          border: 1px solid #ffffff70;
        }

        .closing-actions a:hover {
          transform: translateY(-4px);
        }

        .closing-primary:hover {
          background: #dceeff;
        }

        .closing-secondary:hover {
          background: rgba(255,255,255,.12);
        }

        /* CONTINUOUS MOTION */

        @keyframes floatOne {
          from { transform: translate3d(-15px, 0, 0); }
          to { transform: translate3d(25px, 35px, 0); }
        }

        @keyframes floatTwo {
          from { transform: translate3d(0, 15px, 0); }
          to { transform: translate3d(-25px, -25px, 0); }
        }

        @keyframes floatThree {
          from { transform: translate3d(0, -12px, 0) scale(.95); }
          to { transform: translate3d(15px, 18px, 0) scale(1.08); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #65b4ff; }
          50% { opacity: .55; box-shadow: 0 0 20px #65b4ff; }
        }

        @keyframes textShimmer {
          from { background-position: 0% center; }
          to { background-position: 200% center; }
        }

        @keyframes arrowMove {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {
          .extra-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .closing-content {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .container {
            width: min(100% - 32px, 1120px);
          }

          .hero {
            padding: 75px 0 38px;
          }

          .hero h1 {
            font-size: clamp(34px, 9vw, 46px);
            letter-spacing: -1.2px;
          }

          .hero-content > p {
            font-size: 14px;
          }

          .hero-bottom {
            gap: 10px;
            margin-top: 42px;
            font-size: 10px;
          }

          .plans-section {
            padding: 62px 0;
          }

          .section-heading {
            margin-bottom: 34px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .plan-card {
            padding: 28px 23px;
          }

          .plan-description {
            min-height: 0;
          }

          .price {
            margin: 23px 0;
          }

          .price strong {
            font-size: 37px;
          }

          .closing-section {
            padding: 50px 0;
          }

          .closing-actions {
            width: 100%;
          }

          .closing-actions a {
            flex: 1;
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
