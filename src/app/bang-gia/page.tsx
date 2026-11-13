
import Link from "next/link";

export const metadata = {
  title: "Bảng giá | APA - Trợ lý hành chính số",
  description:
    "Các gói dịch vụ APA dành cho cá nhân và doanh nghiệp.",
};

const plans = [
  {
    name: "APA Cá nhân",
    label: "Dành cho người dân",
    price: "29.000đ",
    period: "/ tháng",
    description:
      "Trợ lý hành chính cá nhân giúp chuẩn bị hồ sơ và theo dõi công việc hành chính thuận tiện hơn.",
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
    label: "Dành cho doanh nghiệp",
    price: "199.000đ",
    period: "/ tháng",
    description:
      "Giải pháp hỗ trợ doanh nghiệp xử lý các công việc hành chính và thủ tục pháp lý thường gặp.",
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

const extraServices = [
  {
    number: "01",
    title: "Kết nối luật sư và chuyên gia",
    description:
      "APA kết nối người dùng với luật sư, chuyên gia phù hợp và nhận hoa hồng khi phát sinh giao dịch thành công.",
  },
  {
    number: "02",
    title: "Affiliate Marketing",
    description:
      "Nhận hoa hồng từ việc giới thiệu khách hàng sử dụng sản phẩm và dịch vụ của các đối tác phù hợp.",
  },
  {
    number: "03",
    title: "Bảo trì và cập nhật dữ liệu",
    description:
      "Dịch vụ bảo trì hệ thống, cập nhật dữ liệu thủ tục hành chính và hỗ trợ kỹ thuật.",
  },
  {
    number: "04",
    title: "Dịch vụ mở rộng",
    description:
      "Tùy chỉnh gói dịch vụ theo số lượng người dùng, quy mô doanh nghiệp và nhu cầu triển khai thực tế.",
  },
];

export default function BangGiaPage() {
  return (
    <main className="pricing-page">
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-content">
          <span className="eyebrow">APA SERVICE PLANS</span>
          <h1>
            Chi phí hợp lý,
            <br />
            <span>hành chính đơn giản hơn</span>
          </h1>
          <p>
            Lựa chọn gói dịch vụ phù hợp để tiết kiệm thời gian,
            giảm thao tác giấy tờ và quản lý thủ tục hiệu quả.
          </p>
          <a href="#plans" className="hero-button">
            Khám phá các gói dịch vụ <span>↓</span>
          </a>
        </div>
      </section>

      <section className="plans-section" id="plans">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">BẢNG GIÁ DỊCH VỤ</span>
            <h2>Chọn gói phù hợp với bạn</h2>
            <p>
              Hai gói dịch vụ chính dành cho cá nhân và doanh nghiệp.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.hot ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.hot && (
                  <div className="popular-tag">DÀNH CHO DOANH NGHIỆP</div>
                )}

                <div className="plan-top">
                  <span className="plan-label">{plan.label}</span>
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <div className="plan-divider" />

                <p className="feature-heading">TÍNH NĂNG BAO GỒM</p>
                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="plan-button">
                  {plan.cta} <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Giá trên là mức phí theo tháng. Các dịch vụ tư vấn chuyên sâu,
            bảo trì, hỗ trợ kỹ thuật và triển khai theo quy mô riêng có thể
            được báo giá riêng.
          </p>
        </div>
      </section>

      <section className="revenue-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">APA ECOSYSTEM</span>
            <h2>Hệ sinh thái dịch vụ mở rộng</h2>
            <p>
              Bên cạnh các gói thuê bao, APA phát triển thêm các dịch vụ
              kết nối và hỗ trợ theo nhu cầu thực tế.
            </p>
          </div>

          <div className="extra-grid">
            {extraServices.map((service) => (
              <article className="extra-card" key={service.number}>
                <span className="extra-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-content">
          <div>
            <span className="eyebrow">BẮT ĐẦU CÙNG APA</span>
            <h2>Sẵn sàng đơn giản hóa thủ tục hành chính?</h2>
            <p>
              Chọn gói dịch vụ phù hợp hoặc liên hệ APA để được tư vấn
              giải pháp cho doanh nghiệp.
            </p>
          </div>
          <div className="closing-actions">
            <Link href="/dang-ky" className="closing-primary">
              Đăng ký ngay
            </Link>
            <Link href="/lien-he" className="closing-secondary">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .pricing-page {
          color: #14233f;
          background: #f6f8fc;
          overflow: hidden;
        }

        .container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 100px 0 110px;
          color: white;
          background: linear-gradient(125deg, #071a3b, #103b78 65%, #1765b5);
        }

        .hero-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          right: -100px;
          top: -200px;
          border-radius: 50%;
          background: rgba(91, 174, 255, .22);
          filter: blur(5px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          animation: rise .8s ease both;
        }

        .eyebrow {
          display: inline-block;
          color: #4d9df5;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .hero .eyebrow {
          color: #9ccaff;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 66px);
          line-height: 1.12;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .hero h1 span {
          color: #76b9ff;
        }

        .hero-content > p {
          max-width: 620px;
          margin: 24px 0 30px;
          color: #d2e2f8;
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 14px 22px;
          border-radius: 9px;
          background: white;
          color: #103b78;
          text-decoration: none;
          font-weight: 750;
          transition: .25s;
        }

        .hero-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px #00132e55;
        }

        .plans-section {
          padding: 85px 0 75px;
        }

        .section-heading {
          max-width: 680px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 0 0 12px;
          color: #10264a;
          font-size: clamp(27px, 4vw, 39px);
          letter-spacing: -.8px;
        }

        .section-heading p {
          color: #687991;
          line-height: 1.7;
          margin: 0;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          max-width: 900px;
          margin: 0 auto;
          align-items: stretch;
        }

        .plan-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 34px;
          border: 1px solid #e0e7f1;
          border-radius: 19px;
          background: white;
          box-shadow: 0 12px 40px rgba(24, 54, 94, .06);
          transition: transform .3s, box-shadow .3s;
          animation: rise .7s ease both;
        }

        .plan-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 48px rgba(24, 54, 94, .12);
        }

        .plan-card.featured {
          border: 2px solid #2778d0;
          box-shadow: 0 15px 45px rgba(39, 120, 208, .13);
        }

        .popular-tag {
          position: absolute;
          top: -13px;
          right: 24px;
          padding: 7px 13px;
          border-radius: 30px;
          color: white;
          background: #2477d1;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .plan-label {
          color: #4385c9;
          font-size: 12px;
          font-weight: 750;
        }

        .plan-top h3 {
          margin: 10px 0;
          color: #10264a;
          font-size: 27px;
        }

        .plan-description {
          min-height: 72px;
          margin: 0;
          color: #718097;
          font-size: 14px;
          line-height: 1.7;
        }

        .price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin: 27px 0 22px;
        }

        .price strong {
          color: #1457a0;
          font-size: 39px;
          letter-spacing: -1.5px;
        }

        .price span {
          color: #8290a3;
          font-size: 14px;
        }

        .plan-divider {
          height: 1px;
          background: #e8edf4;
          margin-bottom: 22px;
        }

        .feature-heading {
          color: #7d8ba0;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .feature-list {
          display: grid;
          gap: 15px;
          padding: 0;
          margin: 10px 0 28px;
          list-style: none;
          flex: 1;
        }

        .feature-list li {
          display: flex;
          gap: 11px;
          color: #40516b;
          font-size: 14px;
          line-height: 1.5;
        }

        .check {
          flex-shrink: 0;
          display: inline-grid;
          place-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          color: #1670c8;
          background: #e9f3ff;
          font-size: 12px;
          font-weight: 900;
        }

        .plan-button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 15px;
          border: 1px solid #cbd9e9;
          border-radius: 9px;
          color: #174f8d;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: .25s;
        }

        .featured .plan-button {
          border-color: #1768b9;
          background: #1768b9;
          color: white;
        }

        .plan-button:hover {
          transform: translateY(-2px);
          background: #0d4f91;
          color: white;
        }

        .pricing-note {
          max-width: 780px;
          margin: 28px auto 0;
          color: #8290a3;
          text-align: center;
          font-size: 12px;
          line-height: 1.7;
        }

        .revenue-section {
          padding: 80px 0;
          background: white;
        }

        .extra-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .extra-card {
          padding: 25px 21px;
          border: 1px solid #e6edf6;
          border-radius: 14px;
          background: #fbfcff;
          transition: .3s;
        }

        .extra-card:hover {
          transform: translateY(-5px);
          border-color: #9bc5ee;
          box-shadow: 0 12px 28px rgba(20, 65, 115, .08);
        }

        .extra-number {
          color: #4b91d5;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .extra-card h3 {
          margin: 17px 0 10px;
          color: #17365f;
          font-size: 17px;
          line-height: 1.4;
        }

        .extra-card p {
          margin: 0;
          color: #718097;
          font-size: 13px;
          line-height: 1.75;
        }

        .closing-section {
          padding: 65px 0;
          color: white;
          background: linear-gradient(110deg, #0a2348, #145ba4);
        }

        .closing-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .closing-content .eyebrow {
          color: #9bcaff;
        }

        .closing-content h2 {
          max-width: 620px;
          margin: 0 0 12px;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.25;
        }

        .closing-content p {
          max-width: 600px;
          margin: 0;
          color: #d0e0f4;
          line-height: 1.7;
          font-size: 14px;
        }

        .closing-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          flex-shrink: 0;
        }

        .closing-actions a {
          padding: 14px 19px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .25s;
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
          transform: translateY(-3px);
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
          .hero {
            padding: 75px 0 80px;
          }

          .hero h1 {
            letter-spacing: -1px;
          }

          .plans-section,
          .revenue-section {
            padding: 60px 0;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .plan-card {
            padding: 27px 23px;
          }

          .extra-grid {
            grid-template-columns: 1fr;
          }

          .closing-section {
            padding: 50px 0;
          }

          .closing-actions {
            width: 100%;
          }

          .closing-actions a {
            text-align: center;
            flex: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
