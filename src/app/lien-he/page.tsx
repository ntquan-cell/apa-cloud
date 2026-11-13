
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Liên hệ APA",
  description:
    "Liên hệ APA để được tư vấn giải pháp thủ tục hành chính số cho cá nhân, doanh nghiệp và tổ chức.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="contact-container hero-content">
          <span className="eyebrow">APA DIGITAL ASSISTANT</span>
          <h1>
            Chúng tôi luôn
            <br />
            <span>sẵn sàng hỗ trợ bạn</span>
          </h1>
          <p>
            Bạn cần hỗ trợ thủ tục hành chính, tư vấn giải pháp cho doanh
            nghiệp hay muốn hợp tác cùng APA? Hãy kết nối với chúng tôi.
          </p>

          <a href="#contact-form" className="hero-link">
            Gửi yêu cầu tư vấn <span>↓</span>
          </a>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="section-heading">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Kết nối với APA</h2>
            <p>
              Chọn kênh liên hệ phù hợp hoặc gửi thông tin qua biểu mẫu.
              Đội ngũ APA sẽ tiếp nhận và phản hồi bạn.
            </p>
          </div>

          <div className="contact-info-grid">
            <article className="contact-info-card">
              <div className="info-icon">☎</div>
              <span className="info-label">HOTLINE</span>
              <h3>Điện thoại</h3>
              <p>{SITE.phone}</p>
              <span className="info-caption">
                Liên hệ trực tiếp với APA
              </span>
            </article>

            <article className="contact-info-card">
              <div className="info-icon">✉</div>
              <span className="info-label">EMAIL</span>
              <h3>Thư điện tử</h3>
              <p>{SITE.email}</p>
              <span className="info-caption">
                Gửi yêu cầu và thông tin chi tiết
              </span>
            </article>

            <article className="contact-info-card">
              <div className="info-icon">◷</div>
              <span className="info-label">WORKING HOURS</span>
              <h3>Giờ làm việc</h3>
              <p>Thứ Hai – Thứ Sáu</p>
              <span className="info-caption">
                08:00 – 17:30
              </span>
            </article>
          </div>

          <div className="contact-form-layout" id="contact-form">
            <div className="form-intro">
              <span className="eyebrow">CONTACT FORM</span>
              <h2>Hãy cho chúng tôi biết bạn cần gì</h2>
              <p>
                Điền thông tin vào biểu mẫu bên cạnh. APA sẽ tiếp nhận
                yêu cầu và liên hệ lại trong vòng 1 ngày làm việc.
              </p>

              <div className="form-promise">
                <span>✓</span>
                Tiếp nhận yêu cầu trực tiếp
              </div>
              <div className="form-promise">
                <span>✓</span>
                Hỗ trợ cá nhân, doanh nghiệp và tổ chức
              </div>
              <div className="form-promise">
                <span>✓</span>
                Thông tin được sử dụng để phản hồi yêu cầu
              </div>

              <div className="response-note">
                <strong>Thời gian phản hồi dự kiến</strong>
                <span>Trong vòng 1 ngày làm việc</span>
              </div>
            </div>

            <div className="form-card">
              <ContactForm type="lien-he" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="contact-container">
          <Faq />
        </div>
      </section>

      <style>{`
        .contact-page {
          color: #142744;
          background: #f6f8fc;
          overflow: hidden;
        }

        .contact-container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .contact-hero {
          position: relative;
          overflow: hidden;
          padding: 95px 0 105px;
          color: white;
          background: linear-gradient(120deg, #071a38, #103d78 65%, #1767b5);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: contactRise .8s ease both;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #438bd5;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .contact-hero .eyebrow {
          color: #9bcaff;
        }

        .contact-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 62px);
          line-height: 1.14;
          letter-spacing: -1.8px;
          font-weight: 850;
        }

        .contact-hero h1 span {
          color: #79bbff;
        }

        .contact-hero p {
          max-width: 650px;
          margin: 22px 0 30px;
          color: #d4e3f6;
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-link {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 14px 21px;
          border-radius: 8px;
          color: #123d70;
          background: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: .25s;
        }

        .hero-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px #00152e55;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: #68b2ff;
          opacity: .12;
          filter: blur(2px);
        }

        .orb-one {
          width: 430px;
          height: 430px;
          top: -210px;
          right: -70px;
        }

        .orb-two {
          width: 250px;
          height: 250px;
          bottom: -180px;
          right: 28%;
        }

        .contact-main {
          padding: 80px 0 90px;
        }

        .section-heading {
          max-width: 680px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 0 0 13px;
          color: #11294d;
          font-size: clamp(28px, 4vw, 38px);
          letter-spacing: -.8px;
        }

        .section-heading p {
          margin: 0;
          color: #708097;
          line-height: 1.8;
          font-size: 14px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .contact-info-card {
          padding: 27px 25px;
          border: 1px solid #e4ebf4;
          border-radius: 15px;
          background: white;
          box-shadow: 0 8px 28px rgba(20, 55, 100, .045);
          transition: transform .3s, box-shadow .3s;
          animation: contactRise .7s ease both;
        }

        .contact-info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 17px 35px rgba(20, 55, 100, .1);
        }

        .info-icon {
          display: grid;
          place-items: center;
          width: 47px;
          height: 47px;
          margin-bottom: 20px;
          border-radius: 13px;
          color: #1769b7;
          background: #eaf4ff;
          font-size: 22px;
        }

        .info-label {
          color: #5890c8;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }

        .contact-info-card h3 {
          margin: 8px 0;
          color: #18375f;
          font-size: 19px;
        }

        .contact-info-card p {
          margin: 0;
          color: #174f91;
          font-size: 16px;
          font-weight: 750;
          overflow-wrap: anywhere;
        }

        .info-caption {
          display: block;
          margin-top: 9px;
          color: #8491a4;
          font-size: 12px;
        }

        .contact-form-layout {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 45px;
          align-items: start;
          margin-top: 75px;
          scroll-margin-top: 30px;
        }

        .form-intro {
          padding-top: 15px;
        }

        .form-intro h2 {
          margin: 0 0 17px;
          color: #10294e;
          font-size: clamp(27px, 3vw, 36px);
          line-height: 1.25;
          letter-spacing: -.7px;
        }

        .form-intro > p {
          margin: 0 0 25px;
          color: #718097;
          font-size: 14px;
          line-height: 1.85;
        }

        .form-promise {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin: 16px 0;
          color: #465a75;
          font-size: 13px;
          line-height: 1.6;
        }

        .form-promise span {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 21px;
          height: 21px;
          border-radius: 50%;
          color: #1769b7;
          background: #e4f1ff;
          font-size: 12px;
          font-weight: 900;
        }

        .response-note {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 30px;
          padding: 19px;
          border-left: 3px solid #2477c9;
          border-radius: 5px 10px 10px 5px;
          background: #eaf3fd;
        }

        .response-note strong {
          color: #17477c;
          font-size: 13px;
        }

        .response-note span {
          color: #647c98;
          font-size: 12px;
        }

        .form-card {
          min-width: 0;
          padding: 30px;
          border: 1px solid #e3eaf3;
          border-radius: 17px;
          background: white;
          box-shadow: 0 14px 40px rgba(20, 55, 100, .07);
        }

        .faq-section {
          padding: 65px 0;
          background: white;
        }

        @keyframes contactRise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 800px) {
          .contact-form-layout {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-top: 55px;
          }

          .contact-info-grid {
            gap: 13px;
          }

          .contact-info-card {
            padding: 22px 17px;
          }
        }

        @media (max-width: 600px) {
          .contact-hero {
            padding: 72px 0 80px;
          }

          .contact-hero h1 {
            letter-spacing: -1px;
          }

          .contact-main {
            padding: 60px 0;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-card {
            display: grid;
            grid-template-columns: 48px 1fr;
            column-gap: 14px;
            align-items: center;
          }

          .info-icon {
            grid-row: span 3;
            margin: 0;
          }

          .contact-info-card h3 {
            margin: 3px 0;
          }

          .info-caption {
            margin-top: 2px;
          }

          .form-card {
            padding: 20px 16px;
          }

          .faq-section {
            padding: 45px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
