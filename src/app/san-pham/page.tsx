
import Link from "next/link";

export const metadata = {
  title: "Sản phẩm | APA – Trợ lý hành chính số",
  description:
    "Khám phá hệ sinh thái công cụ APA: tra cứu thủ tục, trợ lý AI, hồ sơ biểu mẫu, nhắc hạn giấy tờ và tìm kiếm cơ quan hành chính.",
};

const items = [
  {
    number: "01",
    icon: "📚",
    title: "Thư viện thủ tục",
    subtitle: "TRA CỨU & TÌM HIỂU",
    description:
      "Tra cứu thủ tục hành chính theo từng lĩnh vực, với thông tin về cơ quan tiếp nhận, thành phần hồ sơ, thời hạn, lệ phí và căn cứ pháp lý.",
    features: ["Thông tin thủ tục", "Thành phần hồ sơ", "Thời hạn & lệ phí"],
    href: "/thu-tuc",
    color: "blue",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Trợ lý AI",
    subtitle: "HỖ TRỢ THÔNG MINH",
    description:
      "Đặt câu hỏi bằng ngôn ngữ tự nhiên, nhận hướng dẫn dễ hiểu và từng bước chuẩn bị hồ sơ hành chính.",
    features: ["Hỏi đáp tự nhiên", "Hướng dẫn từng bước", "Giải thích dễ hiểu"],
    href: "/tro-ly",
    color: "purple",
  },
  {
    number: "03",
    icon: "✍️",
    title: "Hồ sơ & biểu mẫu",
    subtitle: "TẠO HỒ SƠ NHANH",
    description:
      "Lưu thông tin cá nhân một lần, sử dụng lại khi điền biểu mẫu, xem trước và in hồ sơ để hoàn thiện.",
    features: ["Lưu thông tin cá nhân", "Hỗ trợ điền biểu mẫu", "Xem trước & in"],
    href: "/ho-so",
    color: "cyan",
  },
  {
    number: "04",
    icon: "⏰",
    title: "Nhắc hạn giấy tờ",
    subtitle: "QUẢN LÝ THỜI HẠN",
    description:
      "Theo dõi thời hạn giấy tờ quan trọng, quản lý các mốc cần gia hạn và chủ động chuẩn bị trước khi hết hạn.",
    features: ["Theo dõi ngày hết hạn", "Cảnh báo sắp đến hạn", "Quản lý hồ sơ"],
    href: "/nhac-han",
    color: "orange",
  },
  {
    number: "05",
    icon: "📍",
    title: "Cơ quan gần nhất",
    subtitle: "KẾT NỐI DỊCH VỤ CÔNG",
    description:
      "Hỗ trợ tìm kiếm cơ quan hành chính, xác định địa điểm tiếp nhận và tìm hiểu thông tin liên hệ trước khi đến làm thủ tục.",
    features: ["Tìm địa điểm", "Thông tin liên hệ", "Hỗ trợ tìm nơi nộp"],
    href: "/co-quan",
    color: "green",
  },
];

export default function Page() {
  return (
    <main className="products-page">
      <div className="products-orb orb-one" />
      <div className="products-orb orb-two" />
      <div className="products-orb orb-three" />

      <div className="products-container">
        <header className="products-hero">
          <div className="products-eyebrow">
            <span className="eyebrow-dot" />
            HỆ SINH THÁI SẢN PHẨM APA
          </div>

          <h1>
            Mọi thủ tục hành chính,
            <br />
            <span>đơn giản hơn cùng APA.</span>
          </h1>

          <p>
            Một hệ sinh thái công cụ số hỗ trợ bạn tra cứu, chuẩn bị,
            quản lý và theo dõi thủ tục hành chính trên cùng một nền tảng.
          </p>

          <div className="products-hero-actions">
            <Link href="/thu-tuc" className="products-primary-btn">
              Khám phá thủ tục <span>→</span>
            </Link>
            <Link href="/tro-ly" className="products-secondary-btn">
              Trải nghiệm trợ lý AI
            </Link>
          </div>

          <div className="products-hero-note">
            <span>✦</span> Tập trung vào trải nghiệm đơn giản, dễ sử dụng
          </div>
        </header>

        <section className="products-section">
          <div className="products-section-heading">
            <div>
              <span className="section-kicker">CÔNG CỤ CỦA APA</span>
              <h2>Một nền tảng, nhiều giải pháp</h2>
              <p>
                Chọn công cụ phù hợp với nhu cầu của bạn và bắt đầu sử dụng.
              </p>
            </div>
            <span className="products-count">05 SẢN PHẨM</span>
          </div>

          <div className="products-grid">
            {items.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className={`product-card ${item.color}`}
              >
                <div className="product-card-top">
                  <div className="product-icon">{item.icon}</div>
                  <span className="product-number">{item.number}</span>
                </div>

                <span className="product-subtitle">{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p className="product-description">{item.description}</p>

                <div className="product-features">
                  {item.features.map((feature) => (
                    <span key={feature}>
                      <i>✓</i> {feature}
                    </span>
                  ))}
                </div>

                <div className="product-card-bottom">
                  <span>Khám phá sản phẩm</span>
                  <span className="product-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="products-process">
          <div className="process-heading">
            <span className="section-kicker">CÁCH APA HỖ TRỢ BẠN</span>
            <h2>Từ tìm hiểu đến hoàn thiện hồ sơ</h2>
            <p>
              Các công cụ được thiết kế để hỗ trợ người dùng theo một quy
              trình liền mạch.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span className="process-icon">01</span>
              <h3>Tìm hiểu</h3>
              <p>Tra cứu thủ tục và xác định giấy tờ cần chuẩn bị.</p>
            </div>
            <div className="process-connector">→</div>
            <div className="process-item">
              <span className="process-icon">02</span>
              <h3>Chuẩn bị</h3>
              <p>Sử dụng trợ lý AI và công cụ hỗ trợ biểu mẫu.</p>
            </div>
            <div className="process-connector">→</div>
            <div className="process-item">
              <span className="process-icon">03</span>
              <h3>Quản lý</h3>
              <p>Theo dõi giấy tờ và chủ động quản lý thời hạn.</p>
            </div>
          </div>
        </section>

        <section className="products-cta">
          <div className="cta-decoration">APA</div>
          <span className="section-kicker">BẮT ĐẦU CÙNG APA</span>
          <h2>Đơn giản hóa hành chính, bắt đầu từ hôm nay.</h2>
          <p>
            Khám phá các công cụ và lựa chọn giải pháp phù hợp với nhu cầu
            của bạn.
          </p>
          <Link href="/thu-tuc" className="products-primary-btn">
            Bắt đầu khám phá <span>→</span>
          </Link>
        </section>
      </div>

      <style>{`
        .products-page {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 100vh;
          padding: 55px 20px 65px;
          background: #f3f7fd;
          color: #142b4b;
        }
        .products-orb {
          position: absolute;
          z-index: -1;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          filter: blur(85px);
          pointer-events: none;
          animation: productOrb 13s ease-in-out infinite alternate;
        }
        .orb-one {
          top: 0;
          right: -180px;
          background: rgba(61, 133, 255, .17);
        }
        .orb-two {
          top: 900px;
          left: -200px;
          background: rgba(87, 113, 230, .11);
          animation-delay: -5s;
        }
        .orb-three {
          bottom: 0;
          right: 5%;
          background: rgba(52, 196, 209, .10);
          animation-delay: -8s;
        }
        .products-container {
          width: 100%;
          max-width: 1160px;
          margin: auto;
        }
        .products-hero {
          max-width: 850px;
          margin: 0 auto 75px;
          text-align: center;
        }
        .products-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 16px;
          border: 1px solid #d1e1f8;
          border-radius: 30px;
          background: rgba(255,255,255,.8);
          color: #286bc0;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }
        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2485eb;
          box-shadow: 0 0 0 4px rgba(36,133,235,.12);
          animation: productPulse 2s ease-in-out infinite;
        }
        .products-hero h1 {
          margin: 26px 0 18px;
          color: #102746;
          font-size: clamp(36px, 5.5vw, 61px);
          font-weight: 850;
          line-height: 1.16;
          letter-spacing: -2px;
        }
        .products-hero h1 span {
          color: #2475d1;
          background: linear-gradient(100deg, #1765bd, #438eea, #15a6bd, #1765bd);
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: productGradient 7s linear infinite;
        }
        .products-hero > p {
          max-width: 680px;
          margin: auto;
          color: #596b83;
          font-size: 16px;
          line-height: 1.9;
        }
        .products-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
        }
        .products-primary-btn,
        .products-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          min-height: 48px;
          padding: 0 21px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          transition: transform .22s, box-shadow .22s, background .22s;
        }
        .products-primary-btn {
          background: #176ac7;
          color: #fff;
          box-shadow: 0 9px 22px rgba(23,106,199,.2);
        }
        .products-primary-btn:hover {
          transform: translateY(-3px);
          background: #1057a8;
          box-shadow: 0 13px 27px rgba(23,106,199,.27);
        }
        .products-primary-btn span {
          font-size: 19px;
          transition: transform .2s;
        }
        .products-primary-btn:hover span {
          transform: translateX(4px);
        }
        .products-secondary-btn {
          border: 1px solid #d5e1ef;
          background: rgba(255,255,255,.8);
          color: #294867;
        }
        .products-secondary-btn:hover {
          transform: translateY(-3px);
          background: #fff;
          box-shadow: 0 9px 22px rgba(25,55,95,.08);
        }
        .products-hero-note {
          margin-top: 21px;
          color: #8291a6;
          font-size: 12px;
        }
        .products-hero-note span {
          color: #2786d8;
          margin-right: 5px;
        }
        .products-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }
        .section-kicker {
          color: #2874c6;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.6px;
        }
        .products-section-heading h2,
        .process-heading h2 {
          margin: 9px 0 7px;
          color: #152f50;
          font-size: clamp(24px, 3.2vw, 33px);
          letter-spacing: -.8px;
        }
        .products-section-heading p,
        .process-heading > p {
          margin: 0;
          color: #718198;
          font-size: 14px;
          line-height: 1.7;
        }
        .products-count {
          flex-shrink: 0;
          padding: 9px 13px;
          border: 1px solid #d8e5f4;
          border-radius: 8px;
          background: #fff;
          color: #52708f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }
        .product-card {
          position: relative;
          display: flex;
          min-width: 0;
          flex-direction: column;
          min-height: 335px;
          padding: 24px;
          overflow: hidden;
          border: 1px solid #e0e8f2;
          border-radius: 17px;
          background: rgba(255,255,255,.95);
          box-shadow: 0 8px 25px rgba(25,55,95,.045);
          color: inherit;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }
        .product-card::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          content: "";
          background: var(--accent);
          transform: scaleX(.2);
          transform-origin: left;
          transition: transform .3s;
        }
        .product-card:hover {
          transform: translateY(-7px);
          border-color: var(--accent-border);
          box-shadow: 0 19px 38px rgba(25,55,95,.11);
        }
        .product-card:hover::before {
          transform: scaleX(1);
        }
        .product-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .product-icon {
          display: grid;
          width: 55px;
          height: 55px;
          place-items: center;
          border: 1px solid var(--accent-border);
          border-radius: 15px;
          background: var(--soft);
          font-size: 27px;
          transition: transform .25s;
        }
        .product-card:hover .product-icon {
          transform: rotate(-7deg) scale(1.08);
        }
        .product-number {
          color: #a0aec0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .product-subtitle {
          color: var(--accent);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.4px;
        }
        .product-card h3 {
          margin: 8px 0 10px;
          color: #183454;
          font-size: 20px;
          letter-spacing: -.4px;
        }
        .product-description {
          margin: 0;
          color: #64758b;
          font-size: 12px;
          line-height: 1.85;
        }
        .product-features {
          display: grid;
          gap: 8px;
          margin-top: 18px;
          padding-top: 15px;
          border-top: 1px solid #edf1f6;
        }
        .product-features span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #536981;
          font-size: 11px;
        }
        .product-features i {
          display: grid;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 50%;
          background: var(--soft);
          color: var(--accent);
          font-size: 10px;
          font-style: normal;
          font-weight: 900;
        }
        .product-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 19px;
          color: var(--accent);
          font-size: 11px;
          font-weight: 800;
        }
        .product-arrow {
          display: grid;
          width: 29px;
          height: 29px;
          place-items: center;
          border-radius: 50%;
          background: var(--soft);
          font-size: 16px;
          transition: transform .2s;
        }
        .product-card:hover .product-arrow {
          transform: translate(3px, -3px);
        }
        .product-card.blue {
          --accent: #2675cc;
          --soft: #edf5ff;
          --accent-border: #d1e5fc;
        }
        .product-card.purple {
          --accent: #7959c7;
          --soft: #f3efff;
          --accent-border: #e2d8ff;
        }
        .product-card.cyan {
          --accent: #168ca7;
          --soft: #e9f8fb;
          --accent-border: #ccecf2;
        }
        .product-card.orange {
          --accent: #c77a24;
          --soft: #fff5e9;
          --accent-border: #f4dfc4;
        }
        .product-card.green {
          --accent: #23916d;
          --soft: #eaf8f2;
          --accent-border: #cdebdc;
        }
        .products-process {
          margin-top: 85px;
          padding: 43px 35px;
          border: 1px solid #dfe9f5;
          border-radius: 20px;
          background: rgba(255,255,255,.8);
        }
        .process-heading {
          text-align: center;
        }
        .process-grid {
          display: grid;
          grid-template-columns: 1fr 30px 1fr 30px 1fr;
          align-items: center;
          gap: 13px;
          max-width: 850px;
          margin: 35px auto 0;
        }
        .process-item {
          text-align: center;
        }
        .process-icon {
          display: grid;
          width: 53px;
          height: 53px;
          margin: 0 auto 13px;
          place-items: center;
          border: 1px solid #d6e6fa;
          border-radius: 15px;
          background: #edf5ff;
          color: #2776ca;
          font-size: 15px;
          font-weight: 850;
        }
        .process-item h3 {
          margin: 0 0 7px;
          color: #1b385b;
          font-size: 16px;
        }
        .process-item p {
          max-width: 220px;
          margin: auto;
          color: #74839a;
          font-size: 12px;
          line-height: 1.7;
        }
        .process-connector {
          color: #8eacd0;
          font-size: 22px;
          text-align: center;
        }
        .products-cta {
          position: relative;
          overflow: hidden;
          margin-top: 65px;
          padding: 48px 25px;
          border-radius: 21px;
          background: linear-gradient(115deg, #102b50, #164b83 60%, #176c9d);
          text-align: center;
          color: white;
        }
        .products-cta::after {
          position: absolute;
          top: -130px;
          right: -90px;
          width: 310px;
          height: 310px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 50%;
          box-shadow: 0 0 0 35px rgba(255,255,255,.035),
            0 0 0 75px rgba(255,255,255,.025);
          content: "";
          animation: productRing 16s linear infinite;
          pointer-events: none;
        }
        .cta-decoration {
          position: absolute;
          right: 25px;
          bottom: -37px;
          color: rgba(255,255,255,.055);
          font-size: 145px;
          font-weight: 900;
          letter-spacing: -12px;
          pointer-events: none;
        }
        .products-cta .section-kicker {
          color: #a9d3ff;
        }
        .products-cta h2 {
          position: relative;
          z-index: 1;
          max-width: 650px;
          margin: 12px auto;
          font-size: clamp(24px, 3.5vw, 35px);
          line-height: 1.3;
        }
        .products-cta p {
          position: relative;
          z-index: 1;
          margin: 0 auto 22px;
          color: #d0e0f1;
          font-size: 13px;
          line-height: 1.8;
        }
        .products-cta .products-primary-btn {
          position: relative;
          z-index: 2;
          background: white;
          color: #175b9e;
          box-shadow: none;
        }
        .products-cta .products-primary-btn:hover {
          background: #eaf4ff;
        }
        @keyframes productOrb {
          from { transform: translate3d(0,0,0) scale(1); }
          to { transform: translate3d(35px,45px,0) scale(1.12); }
        }
        @keyframes productGradient {
          to { background-position: 250% center; }
        }
        @keyframes productPulse {
          50% { box-shadow: 0 0 0 7px rgba(36,133,235,.04); }
        }
        @keyframes productRing {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .product-card:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 600px) {
          .products-page { padding: 38px 14px 40px; }
          .products-hero { margin-bottom: 52px; }
          .products-hero h1 { letter-spacing: -1.2px; }
          .products-hero > p { font-size: 14px; }
          .products-hero-actions { flex-direction: column; }
          .products-hero-actions a { width: 100%; }
          .products-section-heading {
            align-items: start;
            flex-direction: column;
          }
          .products-grid { grid-template-columns: 1fr; }
          .product-card,
          .product-card:last-child {
            grid-column: auto;
            min-height: 315px;
          }
          .products-process {
            margin-top: 55px;
            padding: 30px 18px;
          }
          .process-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .process-connector {
            transform: rotate(90deg);
          }
          .products-cta { margin-top: 45px; padding: 38px 20px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .products-page *,
          .products-page *::before,
          .products-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
