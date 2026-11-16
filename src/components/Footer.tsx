
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="apa-footer">
      <div className="wrap">
        <div className="footer-contact-banner">
          <div>
            <span className="footer-kicker">APA DIGITAL ASSISTANT</span>
            <h2>Cần hỗ trợ? Hãy kết nối với APA.</h2>
            <p>Chúng tôi sẵn sàng tiếp nhận câu hỏi, nhu cầu tư vấn và đề xuất hợp tác của bạn.</p>
          </div>
          <Link href="/lien-he" className="footer-main-button">
            Liên hệ tư vấn <span>↗</span>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">APA<span>.</span></Link>
            <p className="footer-description">
              {SITE.full}
            </p>
            <p className="footer-mission">
              Giúp người dân, doanh nghiệp và tổ chức làm thủ tục nhanh,
              chuẩn, minh bạch.
            </p>

            <div className="footer-contact-list">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                <span className="footer-contact-icon">☎</span>
                <span>
                  <small>ĐIỆN THOẠI</small>
                  <strong>{SITE.phone}</strong>
                </span>
              </a>

              <a href={`mailto:${SITE.email}`}>
                <span className="footer-contact-icon">✉</span>
                <span>
                  <small>EMAIL</small>
                  <strong>{SITE.email}</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Sản phẩm</h3>
            <Link href="/thu-tuc">Thư viện thủ tục</Link>
            <Link href="/tro-ly">Trợ lý AI</Link>
            <Link href="/ho-so">Hồ sơ & biểu mẫu</Link>
            <Link href="/nhac-nho">Nhắc hạn giấy tờ</Link>
            <Link href="/co-quan">Tìm cơ quan gần nhất</Link>
            <Link href="/bang-gia">Bảng giá</Link>
          </div>

          <div className="footer-column">
            <h3>Về APA</h3>
            <Link href="/gioi-thieu">Giới thiệu</Link>
            <Link href="/giai-phap">Giải pháp</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tai-app">Tải ứng dụng</Link>
            <Link href="/dang-ky-demo">Đăng ký demo</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </div>

          <div className="footer-column footer-connect">
            <h3>Kết nối với APA</h3>
            <p>Theo dõi và liên hệ với chúng tôi qua các kênh dưới đây.</p>

            <a
              className="footer-social zalo"
              href={SITE.zalo}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-letter">Z</span>
              <span>Zalo</span>
              <span className="social-arrow">↗</span>
            </a>

            <a
              className="footer-social messenger"
              href={SITE.messenger}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-letter">M</span>
              <span>Messenger</span>
              <span className="social-arrow">↗</span>
            </a>

            <Link href="/lien-he" className="footer-social contact-link">
              <span className="social-letter">?</span>
              <span>Trung tâm hỗ trợ</span>
              <span className="social-arrow">↗</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Thông tin mang tính tham khảo. Vui lòng đối chiếu với Cổng Dịch vụ
            công quốc gia hoặc cơ quan có thẩm quyền trước khi nộp hồ sơ.
          </p>
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        </div>
      </div>

      <style>{`
        footer.apa-footer {
          margin-top: 65px;
          padding: 0;
          color: #d5e3f3;
          background:
            radial-gradient(ellipse at 85% 0%, #16477d 0%, transparent 38%),
            linear-gradient(135deg, #07172f, #0b2b52 65%, #102e58);
          border-top: 1px solid #294d78;
          overflow: hidden;
        }

        .apa-footer .footer-contact-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 35px 38px;
          margin-top: 35px;
          background: linear-gradient(110deg, #153b69, #174a80);
          border: 1px solid #5e8ab8;
          border-radius: 18px;
          box-shadow: 0 12px 35px #020d2040;
        }

        .footer-kicker {
          color: #8cdcff;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .apa-footer .footer-contact-banner h2 {
          margin: 10px 0 7px;
          color: #fff;
          font-size: clamp(22px, 3vw, 30px);
          letter-spacing: -.7px;
        }

        .apa-footer .footer-contact-banner p {
          max-width: 590px;
          margin: 0;
          color: #d5e5f7;
          font-size: 13px;
          line-height: 1.8;
        }

        .footer-main-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
          padding: 13px 20px;
          color: #08264a;
          background: linear-gradient(110deg, #9be5ff, #d4f4ff);
          border-radius: 9px;
          font-size: 13px;
          font-weight: 850;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s;
        }

        .footer-main-button:hover {
          color: #08264a;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px #56c5ff40;
        }

        .footer-main-button span {
          font-size: 18px;
        }

        .apa-footer .footer-grid {
          display: grid;
          grid-template-columns: 1.45fr .9fr .9fr 1.1fr;
          gap: 38px;
          padding-top: 55px;
          padding-bottom: 45px;
        }

        .footer-logo {
          display: inline-block;
          color: #fff;
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -2px;
          text-decoration: none;
        }

        .footer-logo:hover {
          color: #fff;
        }

        .footer-logo span {
          color: #54ceff;
        }

        .apa-footer .footer-description {
          margin: 10px 0;
          color: #fff;
          font-size: 13px;
          font-weight: 750;
          line-height: 1.7;
        }

        .apa-footer .footer-mission {
          max-width: 290px;
          margin: 0 0 21px;
          color: #b9cde4;
          font-size: 12px;
          line-height: 1.85;
        }

        .footer-contact-list {
          display: grid;
          gap: 13px;
        }

        .footer-contact-list a {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #fff;
          text-decoration: none;
        }

        .footer-contact-icon {
          display: grid;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          place-items: center;
          color: #a9e8ff;
          background: #ffffff12;
          border: 1px solid #ffffff25;
          border-radius: 10px;
        }

        .footer-contact-list small,
        .footer-contact-list strong {
          display: block;
        }

        .footer-contact-list small {
          margin-bottom: 3px;
          color: #9db9d7;
          font-size: 9px;
          letter-spacing: 1.2px;
        }

        .footer-contact-list strong {
          color: #fff;
          font-size: 12px;
          font-weight: 750;
          overflow-wrap: anywhere;
        }

        .apa-footer .footer-column h3 {
          margin: 7px 0 19px;
          color: #fff;
          font-size: 14px;
          font-weight: 850;
        }

        .apa-footer .footer-column > a:not(.footer-social) {
          display: block;
          width: fit-content;
          margin: 11px 0;
          color: #bed0e5;
          font-size: 12px;
          text-decoration: none;
          transition: color .2s, transform .2s;
        }

        .apa-footer .footer-column > a:not(.footer-social):hover {
          color: #7cdbff;
          transform: translateX(4px);
        }

        .apa-footer .footer-connect > p {
          margin: -5px 0 15px;
          color: #b9cde4;
          font-size: 11px;
          line-height: 1.75;
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          margin: 9px 0;
          padding: 9px 11px;
          color: #e9f4ff;
          background: #ffffff0b;
          border: 1px solid #ffffff20;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none;
          transition: background .2s, transform .2s, border-color .2s;
        }

        .footer-social:hover {
          color: #fff;
          background: #ffffff19;
          border-color: #6ecbff70;
          transform: translateY(-2px);
        }

        .social-letter {
          display: grid;
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          place-items: center;
          color: #fff;
          background: #0878df;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 900;
        }

        .messenger .social-letter {
          background: linear-gradient(135deg, #1688ff, #9255e8);
        }

        .contact-link .social-letter {
          background: #168c75;
        }

        .social-arrow {
          margin-left: auto;
          color: #9dccf4;
          font-size: 15px;
        }

        .apa-footer .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 20px 0 25px;
          border-top: 1px solid #ffffff20;
        }

        .apa-footer .footer-bottom p {
          max-width: 680px;
          margin: 0;
          color: #a9bfd8;
          font-size: 10px;
          line-height: 1.8;
        }

        .apa-footer .footer-bottom span {
          flex-shrink: 0;
          color: #9db5d1;
          font-size: 10px;
        }

        @media(max-width: 900px) {
          .apa-footer .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px 28px;
          }
        }

        @media(max-width: 600px) {
          footer.apa-footer {
            margin-top: 40px;
          }

          .apa-footer .footer-contact-banner {
            display: block;
            padding: 25px 20px;
            margin-top: 25px;
          }

          .apa-footer .footer-contact-banner h2 {
            font-size: 23px;
          }

          .footer-main-button {
            margin-top: 19px;
          }

          .apa-footer .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px 17px;
            padding-top: 38px;
            padding-bottom: 30px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .apa-footer .footer-column h3 {
            font-size: 13px;
          }

          .apa-footer .footer-column > a:not(.footer-social) {
            font-size: 11px;
          }

          .footer-social {
            font-size: 11px;
            padding: 8px;
          }

          .apa-footer .footer-bottom {
            display: block;
          }

          .apa-footer .footer-bottom span {
            display: block;
            margin-top: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
