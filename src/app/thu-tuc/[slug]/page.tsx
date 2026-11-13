
import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist from "@/components/Checklist";
import { procedures } from "@/lib/data";

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = procedures.find((x) => x.slug === slug);

  return p
    ? {
        title: `${p.title} | APA`,
        description: p.summary,
      }
    : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = procedures.find((x) => x.slug === slug);

  if (!p) notFound();

  const rows: [string, string][] = [
    ["Đối tượng thực hiện", p.who],
    ["Cơ quan giải quyết", p.agency],
    ["Cách thức thực hiện", p.method],
    ["Thời hạn giải quyết", p.time],
    ["Phí, lệ phí", p.fee],
    ["Căn cứ pháp lý", p.law],
  ];

  const sections = [
    { id: "thong-tin", label: "Thông tin thủ tục" },
    { id: "giay-to", label: "Giấy tờ cần chuẩn bị" },
    { id: "trinh-tu", label: "Trình tự thực hiện" },
    { id: "luu-y", label: "Những điều cần lưu ý" },
  ];

  return (
    <main className="procedure-detail">
      <div className="procedure-orb procedure-orb-one" />
      <div className="procedure-orb procedure-orb-two" />

      <div className="procedure-container">
        <div className="procedure-breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <Link href="/thu-tuc">Thư viện thủ tục</Link>
          <span>/</span>
          <strong>Chi tiết thủ tục</strong>
        </div>

        <header className="procedure-hero">
          <div className="procedure-label">
            <span className="procedure-status-dot" />
            THÔNG TIN THỦ TỤC HÀNH CHÍNH
          </div>

          <h1>{p.title}</h1>

          <p>{p.summary}</p>

          <div className="procedure-hero-meta">
            <span>📋 Hướng dẫn thực hiện</span>
            <span>✦ APA – Trợ lý hành chính số</span>
          </div>
        </header>

        <div className="procedure-layout">
          <article className="procedure-main">
            <section className="procedure-panel" id="thong-tin">
              <div className="procedure-section-heading">
                <div className="procedure-heading-icon">📑</div>
                <div>
                  <span>01 · TỔNG QUAN</span>
                  <h2>Thông tin thủ tục</h2>
                </div>
              </div>

              <div className="procedure-info-table">
                {rows.map(([key, value], index) => (
                  <div className="procedure-info-row" key={key}>
                    <div className="procedure-info-key">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {key}
                    </div>
                    <div className="procedure-info-value">
                      {value || "Chưa có thông tin"}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="procedure-panel" id="giay-to">
              <div className="procedure-section-heading">
                <div className="procedure-heading-icon">📂</div>
                <div>
                  <span>02 · CHUẨN BỊ HỒ SƠ</span>
                  <h2>Giấy tờ cần chuẩn bị</h2>
                </div>
              </div>

              <p className="procedure-section-desc">
                Kiểm tra và đánh dấu các giấy tờ đã chuẩn bị. Hãy rà soát
                thành phần hồ sơ trước khi nộp.
              </p>

              <div className="procedure-checklist">
                <Checklist id={p.slug} items={p.docs} />
              </div>
            </section>

            <section className="procedure-panel" id="trinh-tu">
              <div className="procedure-section-heading">
                <div className="procedure-heading-icon">🧭</div>
                <div>
                  <span>03 · CÁC BƯỚC THỰC HIỆN</span>
                  <h2>Trình tự thực hiện</h2>
                </div>
              </div>

              <div className="procedure-timeline">
                {p.steps.map((step, index) => (
                  <div className="procedure-step" key={`${index}-${step}`}>
                    <div className="procedure-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="procedure-step-content">
                      <span>BƯỚC {index + 1}</span>
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="procedure-panel" id="luu-y">
              <div className="procedure-section-heading">
                <div className="procedure-heading-icon">💡</div>
                <div>
                  <span>04 · KINH NGHIỆM</span>
                  <h2>Lưu ý để hạn chế bị trả hồ sơ</h2>
                </div>
              </div>

              <div className="procedure-tips">
                {p.tips.map((tip, index) => (
                  <div className="procedure-tip" key={`${index}-${tip}`}>
                    <span>✓</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="procedure-disclaimer">
              <span>ⓘ</span>
              <div>
                <strong>Thông tin cần được đối chiếu</strong>
                <p>
                  Nội dung trên APA có mục đích hỗ trợ tham khảo. Thành phần
                  hồ sơ, phí, thời hạn và quy trình có thể thay đổi theo quy
                  định hoặc địa phương. Hãy kiểm tra với cơ quan tiếp nhận
                  hoặc Cổng Dịch vụ công trước khi nộp.
                </p>
              </div>
            </div>
          </article>

          <aside className="procedure-sidebar">
            <div className="procedure-sidebar-card">
              <span className="sidebar-kicker">ĐIỀU HƯỚNG NHANH</span>
              <h3>Nội dung thủ tục</h3>

              <nav className="procedure-nav">
                {sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                ))}
              </nav>

              <div className="sidebar-divider" />

              <span className="sidebar-kicker">CÔNG CỤ HỖ TRỢ</span>
              <h3>Bạn cần trợ giúp?</h3>
              <p>
                Sử dụng các công cụ APA để hiểu thủ tục và chuẩn bị hồ sơ
                thuận tiện hơn.
              </p>

              <Link
                className="procedure-side-button"
                href={`/tro-ly?q=${encodeURIComponent(p.title)}`}
              >
                <span>🤖</span>
                <span>
                  <strong>Hỏi trợ lý AI</strong>
                  <small>Giải đáp về thủ tục này</small>
                </span>
                <b>→</b>
              </Link>

              <Link
                className="procedure-side-button secondary"
                href="/ho-so"
              >
                <span>✍️</span>
                <span>
                  <strong>Điền biểu mẫu</strong>
                  <small>Chuẩn bị thông tin hồ sơ</small>
                </span>
                <b>→</b>
              </Link>
            </div>

            <Link href="/thu-tuc" className="procedure-back">
              <span>←</span> Quay lại thư viện thủ tục
            </Link>
          </aside>
        </div>

        <section className="procedure-bottom-cta">
          <div>
            <span>APA · HỖ TRỢ BẠN</span>
            <h2>Đừng để thủ tục hành chính trở nên phức tạp.</h2>
            <p>
              Tra cứu thêm thông tin hoặc sử dụng trợ lý APA để được
              hướng dẫn chuẩn bị hồ sơ.
            </p>
          </div>

          <Link
            href={`/tro-ly?q=${encodeURIComponent(p.title)}`}
            className="procedure-cta-button"
          >
            Hỏi APA ngay <span>→</span>
          </Link>
        </section>

        <footer className="procedure-footer">
          <Link href="/thu-tuc">← Tất cả thủ tục</Link>
          <Link href="/">Trang chủ APA ↑</Link>
        </footer>
      </div>

      <style>{`
        .procedure-detail {
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow: hidden;
          padding: 30px 20px 45px;
          background: #f3f7fd;
          color: #172f50;
        }
        .procedure-orb {
          position: absolute;
          z-index: -1;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(85px);
          pointer-events: none;
          animation: procedureFloat 13s ease-in-out infinite alternate;
        }
        .procedure-orb-one {
          top: 120px;
          right: -190px;
          background: rgba(50,130,235,.14);
        }
        .procedure-orb-two {
          top: 1000px;
          left: -200px;
          background: rgba(38,174,192,.10);
          animation-delay: -6s;
        }
        .procedure-container {
          max-width: 1160px;
          margin: auto;
        }
        .procedure-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          margin-bottom: 30px;
          color: #91a0b4;
          font-size: 11px;
        }
        .procedure-breadcrumb a {
          color: #527596;
          text-decoration: none;
          transition: color .2s;
        }
        .procedure-breadcrumb a:hover {
          color: #176bc4;
        }
        .procedure-breadcrumb strong {
          color: #2873c4;
          font-weight: 750;
        }
        .procedure-hero {
          max-width: 850px;
          margin: 0 auto 45px;
          text-align: center;
        }
        .procedure-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 14px;
          border: 1px solid #d2e2f6;
          border-radius: 30px;
          background: white;
          color: #286fbd;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }
        .procedure-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #269b78;
          box-shadow: 0 0 0 4px rgba(38,155,120,.12);
          animation: procedurePulse 2s infinite;
        }
        .procedure-hero h1 {
          margin: 20px 0 14px;
          color: #122b4c;
          font-size: clamp(30px, 4.7vw, 48px);
          line-height: 1.2;
          letter-spacing: -1.3px;
        }
        .procedure-hero > p {
          max-width: 730px;
          margin: auto;
          color: #62748b;
          font-size: 15px;
          line-height: 1.9;
        }
        .procedure-hero-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 17px;
          margin-top: 19px;
          color: #8191a6;
          font-size: 11px;
        }
        .procedure-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 275px;
          align-items: start;
          gap: 22px;
        }
        .procedure-main {
          display: grid;
          gap: 18px;
          min-width: 0;
        }
        .procedure-panel {
          scroll-margin-top: 25px;
          padding: 27px;
          border: 1px solid #e0e8f2;
          border-radius: 17px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 8px 26px rgba(25,55,95,.045);
        }
        .procedure-section-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
        }
        .procedure-heading-icon {
          display: grid;
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #dceafb;
          border-radius: 13px;
          background: #edf5ff;
          font-size: 21px;
        }
        .procedure-section-heading > div:last-child > span {
          color: #337ac3;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.4px;
        }
        .procedure-section-heading h2 {
          margin: 5px 0 0;
          color: #183657;
          font-size: 21px;
          letter-spacing: -.4px;
        }
        .procedure-info-table {
          overflow: hidden;
          border: 1px solid #e7edf5;
          border-radius: 11px;
        }
        .procedure-info-row {
          display: grid;
          grid-template-columns: minmax(155px, .8fr) 1.5fr;
          border-bottom: 1px solid #eaf0f6;
        }
        .procedure-info-row:last-child {
          border-bottom: 0;
        }
        .procedure-info-key {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 13px;
          background: #f6f9fd;
          color: #405875;
          font-size: 12px;
          font-weight: 750;
        }
        .procedure-info-key span {
          color: #8ba2bd;
          font-size: 9px;
          font-weight: 850;
        }
        .procedure-info-value {
          padding: 15px;
          color: #596d85;
          font-size: 12px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }
        .procedure-section-desc {
          margin: -9px 0 18px;
          color: #78899e;
          font-size: 12px;
          line-height: 1.8;
        }
        .procedure-checklist {
          padding: 16px;
          border: 1px solid #e7edf5;
          border-radius: 11px;
          background: #fbfdff;
        }
        .procedure-timeline {
          display: grid;
          gap: 0;
        }
        .procedure-step {
          position: relative;
          display: flex;
          gap: 15px;
          padding-bottom: 23px;
        }
        .procedure-step:not(:last-child)::after {
          position: absolute;
          top: 43px;
          bottom: 0;
          left: 19px;
          width: 1px;
          background: #dce8f5;
          content: "";
        }
        .procedure-step-number {
          position: relative;
          z-index: 1;
          display: grid;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #d5e7fb;
          border-radius: 12px;
          background: #edf5ff;
          color: #2674c6;
          font-size: 11px;
          font-weight: 850;
        }
        .procedure-step-content {
          padding-top: 3px;
        }
        .procedure-step-content > span {
          color: #3480ca;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1px;
        }
        .procedure-step-content p {
          margin: 6px 0 0;
          color: #526982;
          font-size: 13px;
          line-height: 1.85;
        }
        .procedure-tips {
          display: grid;
          gap: 12px;
        }
        .procedure-tip {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 13px;
          border: 1px solid #e6f0ec;
          border-radius: 10px;
          background: #f7fcf9;
        }
        .procedure-tip > span {
          display: grid;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 50%;
          background: #e2f5eb;
          color: #21855e;
          font-size: 12px;
          font-weight: 900;
        }
        .procedure-tip p {
          margin: 2px 0 0;
          color: #536f65;
          font-size: 12px;
          line-height: 1.8;
        }
        .procedure-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 17px;
          border: 1px solid #f0dfb8;
          border-left: 4px solid #d69a32;
          border-radius: 11px;
          background: #fffaf0;
        }
        .procedure-disclaimer > span {
          color: #bd852b;
          font-size: 20px;
        }
        .procedure-disclaimer strong {
          color: #805c24;
          font-size: 12px;
        }
        .procedure-disclaimer p {
          margin: 6px 0 0;
          color: #806b4a;
          font-size: 11px;
          line-height: 1.8;
        }
        .procedure-sidebar {
          position: sticky;
          top: 20px;
        }
        .procedure-sidebar-card {
          padding: 21px 17px;
          border: 1px solid #e0e8f2;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 25px rgba(25,55,95,.05);
        }
        .sidebar-kicker {
          color: #3980c4;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }
        .procedure-sidebar-card h3 {
          margin: 7px 0 15px;
          color: #1b3859;
          font-size: 16px;
        }
        .procedure-nav {
          display: grid;
          gap: 5px;
        }
        .procedure-nav a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 8px;
          border-radius: 8px;
          color: #596e86;
          font-size: 11px;
          font-weight: 650;
          text-decoration: none;
          transition: background .2s, color .2s, transform .2s;
        }
        .procedure-nav a span {
          color: #91a5bc;
          font-size: 9px;
          font-weight: 850;
        }
        .procedure-nav a:hover {
          transform: translateX(3px);
          background: #edf5ff;
          color: #176bc4;
        }
        .sidebar-divider {
          height: 1px;
          margin: 19px 0;
          background: #eaf0f6;
        }
        .procedure-sidebar-card > p {
          margin: -7px 0 14px;
          color: #7b8ba0;
          font-size: 11px;
          line-height: 1.8;
        }
        .procedure-side-button {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 9px;
          padding: 11px 9px;
          border: 1px solid #dceafa;
          border-radius: 10px;
          background: #f2f7ff;
          color: #286eb9;
          text-decoration: none;
          transition: transform .2s, background .2s;
        }
        .procedure-side-button:hover {
          transform: translateY(-2px);
          background: #e8f2ff;
        }
        .procedure-side-button > span:first-child {
          font-size: 19px;
        }
        .procedure-side-button > span:nth-child(2) {
          flex: 1;
        }
        .procedure-side-button strong,
        .procedure-side-button small {
          display: block;
        }
        .procedure-side-button strong {
          font-size: 11px;
        }
        .procedure-side-button small {
          margin-top: 4px;
          color: #7c91a9;
          font-size: 9px;
        }
        .procedure-side-button > b {
          font-size: 15px;
        }
        .procedure-side-button.secondary {
          border-color: #e3eaf2;
          background: #f8fafc;
          color: #405b78;
        }
        .procedure-side-button.secondary:hover {
          background: #eff4f9;
        }
        .procedure-back {
          display: block;
          margin-top: 13px;
          padding: 12px;
          border: 1px solid #dce7f3;
          border-radius: 9px;
          background: rgba(255,255,255,.8);
          color: #52718f;
          font-size: 11px;
          font-weight: 750;
          text-align: center;
          text-decoration: none;
          transition: color .2s, background .2s;
        }
        .procedure-back:hover {
          background: white;
          color: #176bc4;
        }
        .procedure-bottom-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 35px;
          padding: 30px;
          border-radius: 17px;
          background: linear-gradient(110deg, #102b50, #164b83 65%, #176b9d);
          color: white;
        }
        .procedure-bottom-cta > div > span {
          color: #a9d3ff;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }
        .procedure-bottom-cta h2 {
          max-width: 590px;
          margin: 9px 0;
          font-size: 23px;
          line-height: 1.35;
        }
        .procedure-bottom-cta p {
          margin: 0;
          color: #d1e0ef;
          font-size: 11px;
          line-height: 1.8;
        }
        .procedure-cta-button {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 12px;
          padding: 13px 17px;
          border-radius: 9px;
          background: white;
          color: #185d9e;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          transition: transform .2s, background .2s;
        }
        .procedure-cta-button:hover {
          transform: translateY(-3px);
          background: #eaf4ff;
        }
        .procedure-footer {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 22px;
          padding: 12px 2px;
        }
        .procedure-footer a {
          color: #54718f;
          font-size: 11px;
          font-weight: 750;
          text-decoration: none;
        }
        .procedure-footer a:hover {
          color: #176bc4;
        }
        @keyframes procedureFloat {
          from { transform: translate3d(0,0,0) scale(1); }
          to { transform: translate3d(35px,45px,0) scale(1.12); }
        }
        @keyframes procedurePulse {
          50% { box-shadow: 0 0 0 7px rgba(38,155,120,.04); }
        }
        @media (max-width: 850px) {
          .procedure-layout {
            grid-template-columns: 1fr;
          }
          .procedure-sidebar {
            position: static;
          }
          .procedure-sidebar-card {
            padding: 22px;
          }
        }
        @media (max-width: 600px) {
          .procedure-detail { padding: 22px 13px 35px; }
          .procedure-breadcrumb { margin-bottom: 24px; font-size: 10px; }
          .procedure-hero { margin-bottom: 30px; }
          .procedure-hero h1 { font-size: 30px; }
          .procedure-hero > p { font-size: 13px; }
          .procedure-hero-meta { gap: 9px; font-size: 10px; }
          .procedure-panel { padding: 19px 15px; }
          .procedure-section-heading h2 { font-size: 18px; }
          .procedure-info-row {
            grid-template-columns: 1fr;
          }
          .procedure-info-key {
            padding: 10px 12px 5px;
            background: #fff;
          }
          .procedure-info-value {
            padding: 5px 12px 12px;
          }
          .procedure-checklist { padding: 10px; }
          .procedure-bottom-cta {
            align-items: flex-start;
            flex-direction: column;
            padding: 23px 19px;
          }
          .procedure-bottom-cta h2 { font-size: 20px; }
          .procedure-footer { flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          .procedure-detail *,
          .procedure-detail *::before,
          .procedure-detail *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
