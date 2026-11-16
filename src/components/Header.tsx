
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="apa-header">
      <div className="apa-header-inner">
        <Link href="/" className="apa-brand" aria-label="APA - Trang chủ">
          <Logo />
          <span>APA</span>
        </Link>

        <nav className="apa-nav" aria-label="Menu chính">
          <details className="apa-menu">
            <summary>
              Sản phẩm <span className="apa-chevron">⌄</span>
            </summary>
            <div className="apa-dropdown">
              <Link href="/thu-tuc">Thư viện thủ tục</Link>
              <Link href="/tro-ly">Trợ lý AI</Link>
              <Link href="/ho-so">Hồ sơ & biểu mẫu</Link>
              <Link href="/nhac-nho">Nhắc hạn giấy tờ</Link>
              <Link href="/co-quan">Tìm cơ quan gần nhất</Link>
            </div>
          </details>

          <details className="apa-menu">
            <summary>
              Giải pháp <span className="apa-chevron">⌄</span>
            </summary>
            <div className="apa-dropdown">
              <Link href="/giai-phap#nguoi-dan">Cho người dân</Link>
              <Link href="/giai-phap#doanh-nghiep">Cho doanh nghiệp</Link>
              <Link href="/giai-phap#co-quan">Cho cơ quan nhà nước</Link>
              <Link href="/giai-phap#nuoc-ngoai">
                Cho người Việt ở nước ngoài
              </Link>
            </div>
          </details>

          <Link href="/bang-gia">Bảng giá</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tai-app">Tải app</Link>
          <Link href="/gioi-thieu">Giới thiệu</Link>
        </nav>

        <div className="apa-header-actions">
          <Link href="/dang-nhap" className="apa-login">
            Đăng nhập <span>↗</span>
          </Link>
        </div>
      </div>

      <style>{`
        .apa-header {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(255, 255, 255, .96);
          border-bottom: 1px solid #e2eaf4;
          box-shadow: 0 3px 18px rgba(10, 39, 77, .055);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          font-family: Inter, ui-sans-serif, system-ui,
            -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .apa-header,
        .apa-header * {
          box-sizing: border-box;
        }

        .apa-header-inner {
          width: 100%;
          max-width: 1240px;
          min-height: 76px;
          margin: 0 auto;
          padding: 10px 25px;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 25px;
        }

        /* Logo */

        .apa-brand {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 9px;
          flex-shrink: 0;
          color: #102d54;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -1px;
          text-decoration: none;
          white-space: nowrap;
        }

        .apa-brand:hover {
          color: #1768e8;
        }

        .apa-brand img {
          display: block;
          width: auto;
          max-width: 42px;
          max-height: 42px;
          object-fit: contain;
        }

        /* Navigation */

        .apa-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(12px, 1.8vw, 24px);
          min-width: 0;
        }

        .apa-nav > a,
        .apa-menu > summary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 11px 0;
          color: #263f5f;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.4;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: color .2s ease;
        }

        .apa-nav > a::after,
        .apa-menu > summary::after {
          position: absolute;
          right: 0;
          bottom: 4px;
          left: 0;
          height: 2px;
          content: "";
          background: #1768e8;
          border-radius: 5px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .22s ease;
        }

        .apa-nav > a:hover,
        .apa-menu > summary:hover,
        .apa-menu[open] > summary {
          color: #1768e8;
        }

        .apa-nav > a:hover::after,
        .apa-menu[open] > summary::after {
          transform: scaleX(1);
        }

        .apa-menu {
          position: relative;
        }

        .apa-menu > summary {
          list-style: none;
          outline: none;
        }

        .apa-menu > summary::-webkit-details-marker {
          display: none;
        }

        .apa-chevron {
          display: inline-block;
          color: #71849e;
          font-size: 15px;
          transition: transform .2s ease;
        }

        .apa-menu[open] .apa-chevron {
          color: #1768e8;
          transform: rotate(180deg);
        }

        /* Dropdown */

        .apa-dropdown {
          position: absolute;
          top: calc(100% + 7px);
          left: -13px;
          z-index: 110;
          display: grid;
          width: max-content;
          min-width: 235px;
          max-width: min(290px, calc(100vw - 30px));
          gap: 3px;
          padding: 9px;
          background: #fff;
          border: 1px solid #e0e9f4;
          border-radius: 13px;
          box-shadow: 0 15px 38px rgba(9, 36, 74, .14);
        }

        .apa-dropdown a {
          display: block;
          padding: 10px 12px;
          color: #304965;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 550;
          line-height: 1.5;
          text-decoration: none;
          white-space: normal;
          transition: color .18s ease, background .18s ease;
        }

        .apa-dropdown a:hover {
          color: #145fc5;
          background: #edf5ff;
        }

        /* Login */

        .apa-header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .apa-login {
          display: inline-flex;
          min-height: 41px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 19px;
          color: #fff;
          background: linear-gradient(110deg, #1768e8, #287df0);
          border: 1px solid #1768e8;
          border-radius: 999px;
          box-shadow: 0 5px 15px rgba(23, 104, 232, .17);
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: transform .2s ease, box-shadow .2s ease,
            background .2s ease;
        }

        .apa-login:hover {
          color: #fff;
          background: linear-gradient(110deg, #1055c2, #1768e8);
          box-shadow: 0 8px 20px rgba(23, 104, 232, .25);
          transform: translateY(-2px);
        }

        .apa-login span {
          font-size: 16px;
        }

        .apa-brand:focus-visible,
        .apa-nav a:focus-visible,
        .apa-menu summary:focus-visible,
        .apa-login:focus-visible {
          outline: 3px solid #70b8ff;
          outline-offset: 4px;
          border-radius: 6px;
        }

        /* Tablet */

        @media (max-width: 1020px) {
          .apa-header-inner {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 5px 15px;
            padding-top: 10px;
            padding-bottom: 7px;
          }

          .apa-brand {
            grid-column: 1;
            grid-row: 1;
          }

          .apa-header-actions {
            grid-column: 2;
            grid-row: 1;
          }

          .apa-nav {
            grid-column: 1 / -1;
            grid-row: 2;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 2px 20px;
            padding-top: 5px;
            border-top: 1px solid #edf1f7;
          }

          .apa-nav > a,
          .apa-menu > summary {
            font-size: 12px;
          }
        }

        /* Mobile */

        @media (max-width: 600px) {
          .apa-header-inner {
            padding: 9px 15px 7px;
            gap: 5px 10px;
          }

          .apa-brand {
            gap: 6px;
            font-size: 19px;
          }

          .apa-brand img {
            max-width: 35px;
            max-height: 35px;
          }

          .apa-login {
            min-height: 36px;
            padding: 0 14px;
            font-size: 12px;
          }

          .apa-nav {
            gap: 0 16px;
            padding-top: 5px;
          }

          .apa-nav > a,
          .apa-menu > summary {
            padding: 8px 0;
            font-size: 11.5px;
          }

          .apa-dropdown {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            min-width: 220px;
            max-width: calc(100vw - 30px);
            padding: 7px;
          }

          .apa-dropdown a {
            padding: 10px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-header *,
          .apa-header *::before,
          .apa-header *::after {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
