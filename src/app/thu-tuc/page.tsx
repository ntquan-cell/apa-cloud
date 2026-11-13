
import List from "./List";

export const metadata = {
  title: "Danh mục thủ tục hành chính | APA",
  description:
    "Tra cứu thủ tục hành chính về cư trú, giấy tờ cá nhân, đất đai, doanh nghiệp, bảo hiểm và phương tiện. Tìm hiểu hồ sơ, lệ phí và trình tự thực hiện.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ nhom?: string }>;
}) {
  const { nhom } = await searchParams;

  return (
    <main className="apa-directory">
      <style>{`
        .apa-directory {
          --apa-navy: #102b50;
          --apa-blue: #1769d2;
          --apa-text: #243b56;
          --apa-muted: #687d96;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 34px 20px 76px;
          background:
            radial-gradient(ellipse at 8% 8%, rgba(73, 145, 239, .09), transparent 32%),
            radial-gradient(ellipse at 95% 40%, rgba(52, 130, 222, .06), transparent 30%),
            #f6f9fd;
        }

        .apa-directory-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        }

        .apa-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 23px;
          color: #8797aa;
          font-size: 12px;
        }

        .apa-breadcrumb a {
          color: #3976bb;
          text-decoration: none;
          font-weight: 650;
        }

        .apa-breadcrumb a:hover {
          color: #1056b3;
          text-decoration: underline;
        }

        .apa-directory-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(27px, 5vw, 48px);
          border: 1px solid rgba(190, 215, 245, .45);
          border-radius: 25px;
          background: linear-gradient(115deg, #102b50 0%, #164779 56%, #1769b9 100%);
          box-shadow: 0 18px 45px rgba(16, 52, 94, .16);
        }

        .apa-directory-hero::before,
        .apa-directory-hero::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
        }

        .apa-directory-hero::before {
          width: 360px;
          height: 360px;
          right: -100px;
          top: -210px;
          border: 1px solid rgba(255,255,255,.15);
          box-shadow:
            0 0 0 35px rgba(255,255,255,.035),
            0 0 0 75px rgba(255,255,255,.025);
          animation: apaHeroOrbit 12s ease-in-out infinite alternate;
        }

        .apa-directory-hero::after {
          width: 240px;
          height: 240px;
          right: 16%;
          bottom: -205px;
          background: rgba(81, 167, 255, .22);
          filter: blur(25px);
          animation: apaHeroGlow 8s ease-in-out infinite alternate;
        }

        @keyframes apaHeroOrbit {
          from { transform: translate(0, 0) rotate(0deg); }
          to { transform: translate(-24px, 18px) rotate(14deg); }
        }

        @keyframes apaHeroGlow {
          from { transform: translateX(0) scale(.9); }
          to { transform: translateX(-35px) scale(1.2); }
        }

        .apa-hero-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
        }

        .apa-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 17px;
          padding: 7px 12px;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          color: #dcecff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }

        .apa-hero-label span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #65d8b0;
          box-shadow: 0 0 12px rgba(101,216,176,.8);
        }

        .apa-directory-hero h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(28px, 4.5vw, 43px);
          font-weight: 850;
          line-height: 1.2;
          letter-spacing: -1.2px;
        }

        .apa-directory-hero p {
          max-width: 650px;
          margin: 15px 0 0;
          color: #d4e5f8;
          font-size: 15px;
          line-height: 1.8;
        }

        .apa-hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 23px;
        }

        .apa-hero-point {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f0f7ff;
          font-size: 12px;
          font-weight: 650;
        }

        .apa-hero-point span {
          display: grid;
          place-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(139, 203, 255, .19);
          color: #a9d7ff;
          font-size: 12px;
        }

        .apa-directory-content {
          margin-top: 30px;
        }

        .apa-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 17px;
        }

        .apa-section-heading h2 {
          margin: 0;
          color: var(--apa-navy);
          font-size: clamp(20px, 3vw, 25px);
          font-weight: 850;
          letter-spacing: -.5px;
        }

        .apa-section-heading p {
          margin: 6px 0 0;
          color: var(--apa-muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .apa-directory-tip {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 25px;
          padding: 17px 19px;
          border: 1px solid #dbe8f7;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 5px 18px rgba(25, 65, 115, .035);
        }

        .apa-tip-icon {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #eaf3ff;
          color: #1769d2;
          font-size: 17px;
        }

        .apa-directory-tip strong {
          display: block;
          margin-bottom: 4px;
          color: #1b3d62;
          font-size: 13px;
        }

        .apa-directory-tip p {
          margin: 0;
          color: #718198;
          font-size: 12px;
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .apa-directory {
            padding: 22px 14px 48px;
          }

          .apa-directory-hero {
            padding: 27px 20px;
            border-radius: 19px;
          }

          .apa-directory-hero h1 {
            letter-spacing: -.7px;
          }

          .apa-directory-hero p {
            font-size: 13px;
          }

          .apa-hero-points {
            gap: 11px 15px;
          }

          .apa-hero-point {
            font-size: 11px;
          }

          .apa-directory-content {
            margin-top: 25px;
          }

          .apa-directory-tip {
            padding: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-directory-hero::before,
          .apa-directory-hero::after {
            animation: none;
          }
        }
      `}</style>

      <div className="apa-directory-inner">
        <nav className="apa-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Trang chủ</a>
          <span>/</span>
          <span>Thủ tục hành chính</span>
        </nav>

        <section className="apa-directory-hero">
          <div className="apa-hero-content">
            <div className="apa-hero-label">
              <span />
              APA · TRỢ LÝ HÀNH CHÍNH SỐ
            </div>

            <h1>Tra cứu thủ tục hành chính</h1>

            <p>
              Tìm hiểu các thủ tục hành chính dành cho cá nhân, doanh nghiệp
              và tổ chức. Nắm rõ thành phần hồ sơ, cơ quan giải quyết, thời
              hạn, lệ phí và trình tự thực hiện trước khi nộp.
            </p>

            <div className="apa-hero-points">
              <div className="apa-hero-point">
                <span>✓</span>
                Hướng dẫn từng bước
              </div>
              <div className="apa-hero-point">
                <span>✓</span>
                Thông tin hồ sơ rõ ràng
              </div>
              <div className="apa-hero-point">
                <span>✓</span>
                Tra cứu thuận tiện
              </div>
            </div>
          </div>
        </section>

        <section className="apa-directory-content">
          <div className="apa-section-heading">
            <div>
              <h2>Thư viện thủ tục</h2>
              <p>
                Tìm kiếm theo tên thủ tục hoặc chọn danh mục phù hợp bên dưới.
              </p>
            </div>
          </div>

          <List initialGroup={nhom ?? ""} />

          <div className="apa-directory-tip">
            <div className="apa-tip-icon" aria-hidden="true">ⓘ</div>
            <div>
              <strong>Lưu ý khi tra cứu</strong>
              <p>
                Thành phần hồ sơ, mức phí và thời hạn có thể thay đổi theo
                quy định hoặc địa phương. Hãy đối chiếu với cơ quan có thẩm
                quyền trước khi thực hiện. APA cung cấp thông tin tham khảo,
                không thay thế xác nhận của cơ quan tiếp nhận.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
