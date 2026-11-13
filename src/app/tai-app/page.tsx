
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Tải ứng dụng APA | Trợ lý hành chính số",
  description:
    "Sử dụng APA trên điện thoại và máy tính. Hướng dẫn thêm APA vào màn hình chính để truy cập nhanh như một ứng dụng.",
};

export default function Page() {
  return (
    <main className="app-page">
      <div className="app-orb app-orb-one" />
      <div className="app-orb app-orb-two" />

      <div className="app-container">
        <section className="app-hero">
          <div className="app-hero-content">
            <span className="app-eyebrow">
              <span className="app-live-dot" />
              APA · TRỢ LÝ HÀNH CHÍNH SỐ
            </span>

            <h1>
              APA luôn bên bạn,
              <br />
              <span>mọi lúc, mọi nơi.</span>
            </h1>

            <p>
              Tra cứu thủ tục, chuẩn bị hồ sơ và quản lý giấy tờ ngay trên
              điện thoại. Không cần cài đặt ứng dụng nặng, chỉ cần mở APA
              trên trình duyệt và bắt đầu sử dụng.
            </p>

            <div className="app-actions">
              <Link href="/tro-ly" className="app-main-btn">
                <span>✦</span> Trải nghiệm APA ngay <span>→</span>
              </Link>

              <a
                className="app-zalo-btn"
                href={SITE.zalo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kết nối Zalo ↗
              </a>
            </div>

            <div className="app-trust">
              <span>✓</span> Sử dụng trực tiếp trên trình duyệt
              <span className="app-trust-separator">·</span>
              <span>✓</span> Hỗ trợ điện thoại và máy tính
            </div>
          </div>

          <div className="app-visual">
            <div className="app-visual-glow" />
            <div className="app-ring app-ring-one" />
            <div className="app-ring app-ring-two" />

            <div className="app-phone">
              <div className="phone-speaker" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>APA</span>
                  <span>● ● ●</span>
                </div>

                <div className="phone-logo">A</div>
                <div className="phone-title">Xin chào!</div>
                <div className="phone-subtitle">
                  Hôm nay APA có thể giúp gì cho bạn?
                </div>

                <div className="phone-search">
                  <span>⌕</span> Tìm kiếm thủ tục...
                </div>

                <div className="phone-feature-title">Khám phá APA</div>

                <div className="phone-features">
                  <div className="phone-feature">
                    <span>📚</span>
                    <small>Thủ tục</small>
                  </div>
                  <div className="phone-feature">
                    <span>🤖</span>
                    <small>Trợ lý AI</small>
                  </div>
                  <div className="phone-feature">
                    <span>✍️</span>
                    <small>Biểu mẫu</small>
                  </div>
                  <div className="phone-feature">
                    <span>⏰</span>
                    <small>Nhắc hạn</small>
                  </div>
                </div>

                <div className="phone-bottom">
                  <span>⌂</span>
                  <span>⌕</span>
                  <span>▤</span>
                  <span>◎</span>
                </div>
              </div>
            </div>

            <div className="app-floating-card floating-card-one">
              <span>📄</span>
              <div>
                <strong>Hồ sơ của bạn</strong>
                <small>Quản lý thuận tiện</small>
              </div>
            </div>

            <div className="app-floating-card floating-card-two">
              <span>⏰</span>
              <div>
                <strong>Nhắc hạn giấy tờ</strong>
                <small>Chủ động theo dõi</small>
              </div>
            </div>
          </div>
        </section>

        <section className="app-benefits">
          <div className="app-section-heading">
            <span className="app-section-kicker">TRẢI NGHIỆM APA</span>
            <h2>Một chạm, nhiều tiện ích</h2>
            <p>
              Truy cập nhanh các công cụ hỗ trợ hành chính ngay trên thiết bị
              bạn đang sử dụng.
            </p>
          </div>

          <div className="app-benefit-grid">
            <div className="app-benefit-card">
              <span className="benefit-icon">⚡</span>
              <h3>Truy cập nhanh</h3>
              <p>
                Thêm biểu tượng APA vào màn hình chính để mở trang web
                thuận tiện hơn.
              </p>
            </div>

            <div className="app-benefit-card">
              <span className="benefit-icon">📱</span>
              <h3>Thân thiện di động</h3>
              <p>
                Giao diện được thiết kế để sử dụng trên điện thoại,
                máy tính bảng và máy tính.
              </p>
            </div>

            <div className="app-benefit-card">
              <span className="benefit-icon">🔄</span>
              <h3>Luôn cập nhật</h3>
              <p>
                Truy cập phiên bản APA mới nhất trực tiếp trên trình duyệt,
                không cần tự cài đặt bản cập nhật.
              </p>
            </div>
          </div>
        </section>

        <section className="app-install">
          <div className="app-section-heading">
            <span className="app-section-kicker">HƯỚNG DẪN SỬ DỤNG</span>
            <h2>Đưa APA lên màn hình chính</h2>
            <p>
              Chỉ với vài thao tác, bạn có thể tạo lối tắt APA trên điện thoại.
            </p>
          </div>

          <div className="app-install-grid">
            <div className="install-card">
              <div className="install-card-heading">
                <span className="install-device"></span>
                <div>
                  <h3>iPhone / iPad</h3>
                  <p>Sử dụng trình duyệt Safari</p>
                </div>
              </div>

              <div className="install-steps">
                <div className="install-step">
                  <span>01</span>
                  <p>Mở trang APA bằng trình duyệt Safari.</p>
                </div>
                <div className="install-step">
                  <span>02</span>
                  <p>Nhấn nút Chia sẻ ở thanh công cụ trình duyệt.</p>
                </div>
                <div className="install-step">
                  <span>03</span>
                  <p>Chọn “Thêm vào Màn hình chính”.</p>
                </div>
                <div className="install-step">
                  <span>04</span>
                  <p>Nhấn “Thêm” để hoàn tất.</p>
                </div>
              </div>

              <div className="install-tip">
                <span>💡</span>
                Nếu không thấy lựa chọn, hãy kiểm tra menu Chia sẻ của Safari.
              </div>
            </div>

            <div className="install-card">
              <div className="install-card-heading">
                <span className="install-device android-icon">◈</span>
                <div>
                  <h3>Android</h3>
                  <p>Sử dụng trình duyệt Chrome</p>
                </div>
              </div>

              <div className="install-steps">
                <div className="install-step">
                  <span>01</span>
                  <p>Mở trang APA bằng trình duyệt Chrome.</p>
                </div>
                <div className="install-step">
                  <span>02</span>
                  <p>Nhấn biểu tượng ba chấm ở góc trình duyệt.</p>
                </div>
                <div className="install-step">
                  <span>03</span>
                  <p>Chọn “Thêm vào màn hình chính” hoặc “Cài đặt ứng dụng” nếu được hỗ trợ.</p>
                </div>
                <div className="install-step">
                  <span>04</span>
                  <p>Xác nhận thêm hoặc cài đặt để hoàn tất.</p>
                </div>
              </div>

              <div className="install-tip">
                <span>💡</span>
                Tên tùy chọn có thể khác nhau tùy thiết bị và phiên bản Chrome.
              </div>
            </div>
          </div>
        </section>

        <section className="app-zalo-section">
          <div className="zalo-content">
            <span className="app-section-kicker">MỞ RỘNG HỆ SINH THÁI</span>
            <h2>Kết nối APA qua Zalo</h2>
            <p>
              APA định hướng phát triển trải nghiệm thuận tiện hơn thông qua
              Zalo Mini App. Phiên bản này sẽ được giới thiệu khi hoàn thiện.
            </p>
            <a
              href={SITE.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="zalo-button"
            >
              Kết nối Zalo <span>↗</span>
            </a>
          </div>
          <div className="zalo-symbol">Z</div>
        </section>

        <section className="app-final-cta">
          <span className="app-section-kicker">BẮT ĐẦU NGAY HÔM NAY</span>
          <h2>Hành chính đơn giản hơn cùng APA.</h2>
          <p>
            Mở APA trên trình duyệt và khám phá các công cụ hỗ trợ dành cho bạn.
          </p>
          <Link href="/tro-ly" className="app-main-btn">
            Khám phá APA <span>→</span>
          </Link>
        </section>

        <footer className="app-footer">
          <span>APA – Trợ lý hành chính số</span>
          <Link href="/">Về trang chủ ↑</Link>
        </footer>
      </div>

      <style>{`
        .app-page {
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow: hidden;
          padding: 55px 20px 35px;
          background: #f3f7fd;
          color: #142d4d;
        }
        .app-orb {
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(85px);
          pointer-events: none;
          animation: appOrb 13s ease-in-out infinite alternate;
        }
        .app-orb-one {
          top: 40px;
          right: -200px;
          background: rgba(47,126,235,.17);
        }
        .app-orb-two {
          top: 850px;
          left: -200px;
          background: rgba(32,176,197,.11);
          animation-delay: -6s;
        }
        .app-container {
          max-width: 1120px;
          margin: auto;
        }
        .app-hero {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 35px;
          min-height: 510px;
          margin-bottom: 80px;
        }
        .app-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border: 1px solid #d2e2f7;
          border-radius: 30px;
          background: white;
          color: #286ec0;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }
        .app-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22a77b;
          box-shadow: 0 0 0 4px rgba(34,167,123,.12);
          animation: appPulse 2s infinite;
        }
        .app-hero h1 {
          margin: 23px 0 17px;
          color: #112b4c;
          font-size: clamp(37px, 5vw, 57px);
          font-weight: 850;
          line-height: 1.17;
          letter-spacing: -1.8px;
        }
        .app-hero h1 span {
          background: linear-gradient(100deg, #1769c4, #3997e5, #14a4b8, #1769c4);
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: appGradient 7s linear infinite;
        }
        .app-hero-content > p {
          max-width: 550px;
          color: #596c84;
          font-size: 15px;
          line-height: 1.9;
        }
        .app-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }
        .app-main-btn,
        .app-zalo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 49px;
          padding: 0 19px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .app-main-btn {
          background: #176ac7;
          color: white;
          box-shadow: 0 9px 22px rgba(23,106,199,.2);
        }
        .app-main-btn:hover {
          transform: translateY(-3px);
          background: #1056a7;
          box-shadow: 0 13px 25px rgba(23,106,199,.25);
        }
        .app-zalo-btn {
          border: 1px solid #d4e1f0;
          background: white;
          color: #265276;
        }
        .app-zalo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(25,55,95,.08);
        }
        .app-trust {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: 23px;
          color: #75869b;
          font-size: 11px;
        }
        .app-trust > span:first-child,
        .app-trust > span:nth-of-type(2) {
          color: #269775;
          font-weight: 900;
        }
        .app-trust-separator { color: #b1bfce; }
        .app-visual {
          position: relative;
          display: grid;
          min-height: 470px;
          place-items: center;
        }
        .app-visual-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(69,151,245,.24), rgba(69,151,245,0) 70%);
          animation: appGlow 5s ease-in-out infinite alternate;
        }
        .app-ring {
          position: absolute;
          width: 340px;
          height: 340px;
          border: 1px solid rgba(49,127,208,.17);
          border-radius: 50%;
          animation: appRotate 25s linear infinite;
        }
        .app-ring-two {
          width: 410px;
          height: 410px;
          border-style: dashed;
          border-color: rgba(49,127,208,.12);
          animation-direction: reverse;
          animation-duration: 40s;
        }
        .app-phone {
          position: relative;
          z-index: 2;
          width: 228px;
          height: 425px;
          padding: 9px;
          border: 5px solid #203c5d;
          border-radius: 34px;
          background: #203c5d;
          box-shadow: 0 30px 65px rgba(20,52,91,.23);
          transform: rotate(-5deg);
          transition: transform .35s;
        }
        .app-visual:hover .app-phone {
          transform: rotate(0deg) translateY(-6px);
        }
        .phone-speaker {
          position: absolute;
          z-index: 3;
          top: 12px;
          left: 50%;
          width: 62px;
          height: 13px;
          border-radius: 20px;
          background: #203c5d;
          transform: translateX(-50%);
        }
        .phone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          padding: 20px 13px 12px;
          border-radius: 22px;
          background: linear-gradient(180deg, #f7fbff, #edf5ff);
        }
        .phone-status {
          display: flex;
          justify-content: space-between;
          color: #58708e;
          font-size: 9px;
          font-weight: 800;
        }
        .phone-logo {
          display: grid;
          width: 47px;
          height: 47px;
          margin: 26px auto 12px;
          place-items: center;
          border-radius: 15px;
          background: linear-gradient(135deg, #1559a5, #3795e5);
          box-shadow: 0 7px 16px rgba(23,106,199,.23);
          color: white;
          font-size: 29px;
          font-weight: 900;
        }
        .phone-title {
          color: #17365a;
          font-size: 19px;
          font-weight: 850;
          text-align: center;
        }
        .phone-subtitle {
          margin: 6px 0 18px;
          color: #71839a;
          font-size: 9px;
          text-align: center;
        }
        .phone-search {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px;
          border: 1px solid #e0e9f4;
          border-radius: 9px;
          background: white;
          color: #93a2b5;
          font-size: 10px;
        }
        .phone-search span { font-size: 17px; }
        .phone-feature-title {
          margin: 21px 0 12px;
          color: #274565;
          font-size: 11px;
          font-weight: 850;
        }
        .phone-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 9px;
        }
        .phone-feature {
          display: flex;
          min-height: 76px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid #e2ebf6;
          border-radius: 11px;
          background: white;
        }
        .phone-feature span { font-size: 21px; }
        .phone-feature small {
          color: #526b86;
          font-size: 9px;
          font-weight: 700;
        }
        .phone-bottom {
          position: absolute;
          right: 13px;
          bottom: 12px;
          left: 13px;
          display: flex;
          justify-content: space-around;
          padding: 9px;
          border: 1px solid #e1eaf4;
          border-radius: 10px;
          background: white;
          color: #6481a1;
          font-size: 13px;
        }
        .app-floating-card {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 15px;
          border: 1px solid #e0e9f4;
          border-radius: 13px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 12px 30px rgba(24,56,94,.11);
          animation: appFloat 4s ease-in-out infinite alternate;
        }
        .app-floating-card > span {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 10px;
          background: #edf5ff;
          font-size: 18px;
        }
        .app-floating-card strong,
        .app-floating-card small {
          display: block;
        }
        .app-floating-card strong {
          color: #1b385a;
          font-size: 11px;
        }
        .app-floating-card small {
          margin-top: 4px;
          color: #8292a6;
          font-size: 9px;
        }
        .floating-card-one {
          top: 100px;
          left: -8px;
        }
        .floating-card-two {
          right: -5px;
          bottom: 90px;
          animation-delay: -2s;
        }
        .app-section-heading {
          max-width: 700px;
          margin: 0 auto 30px;
          text-align: center;
        }
        .app-section-kicker {
          color: #2874c6;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }
        .app-section-heading h2,
        .app-final-cta h2 {
          margin: 10px 0;
          color: #142f50;
          font-size: clamp(25px, 3.5vw, 34px);
          letter-spacing: -.7px;
        }
        .app-section-heading p,
        .app-final-cta p {
          color: #718198;
          font-size: 13px;
          line-height: 1.8;
        }
        .app-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }
        .app-benefit-card {
          padding: 25px;
          border: 1px solid #e0e9f3;
          border-radius: 16px;
          background: rgba(255,255,255,.92);
          transition: transform .25s, box-shadow .25s;
        }
        .app-benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(24,56,94,.09);
        }
        .benefit-icon {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 13px;
          background: #edf5ff;
          font-size: 23px;
        }
        .app-benefit-card h3 {
          margin: 17px 0 8px;
          color: #1b3859;
          font-size: 16px;
        }
        .app-benefit-card p {
          margin: 0;
          color: #718198;
          font-size: 12px;
          line-height: 1.8;
        }
        .app-install { margin-top: 85px; }
        .app-install-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .install-card {
          padding: 27px;
          border: 1px solid #e0e9f3;
          border-radius: 17px;
          background: white;
          box-shadow: 0 8px 25px rgba(25,55,95,.04);
        }
        .install-card-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 20px;
          border-bottom: 1px solid #edf1f6;
        }
        .install-device {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 13px;
          background: #edf3fb;
          color: #243f60;
          font-size: 28px;
        }
        .android-icon {
          background: #eaf8f0;
          color: #26966b;
        }
        .install-card-heading h3 {
          margin: 0 0 5px;
          color: #193858;
          font-size: 17px;
        }
        .install-card-heading p {
          margin: 0;
          color: #8593a6;
          font-size: 11px;
        }
        .install-steps {
          display: grid;
          gap: 17px;
          padding: 23px 0;
        }
        .install-step {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }
        .install-step > span {
          display: grid;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 8px;
          background: #edf5ff;
          color: #2674c7;
          font-size: 10px;
          font-weight: 850;
        }
        .install-step p {
          margin: 3px 0 0;
          color: #596d85;
          font-size: 12px;
          line-height: 1.7;
        }
        .install-tip {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 13px;
          border-radius: 9px;
          background: #f2f7fd;
          color: #61758e;
          font-size: 11px;
          line-height: 1.7;
        }
        .app-zalo-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          overflow: hidden;
          margin-top: 65px;
          padding: 36px 42px;
          border: 1px solid #d7e8f7;
          border-radius: 19px;
          background: linear-gradient(110deg, #e9f4ff, #f5fbff);
        }
        .zalo-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
        }
        .zalo-content h2 {
          margin: 10px 0;
          color: #173656;
          font-size: 26px;
        }
        .zalo-content p {
          color: #657b94;
          font-size: 13px;
          line-height: 1.8;
        }
        .zalo-button {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          margin-top: 9px;
          padding: 12px 18px;
          border-radius: 9px;
          background: #1478ca;
          color: white;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .2s, background .2s;
        }
        .zalo-button:hover {
          transform: translateY(-3px);
          background: #105da0;
        }
        .zalo-symbol {
          display: grid;
          width: 105px;
          height: 105px;
          flex-shrink: 0;
          place-items: center;
          border: 8px solid rgba(20,120,202,.12);
          border-radius: 28px;
          background: #1478ca;
          box-shadow: 0 12px 30px rgba(20,120,202,.2);
          color: white;
          font-size: 55px;
          font-weight: 900;
          transform: rotate(8deg);
          animation: appFloat 4s ease-in-out infinite alternate;
        }
        .app-final-cta {
          margin-top: 65px;
          padding: 42px 20px;
          border-radius: 20px;
          background: linear-gradient(115deg, #102b50, #164b83 60%, #176b9d);
          text-align: center;
          color: white;
        }
        .app-final-cta .app-section-kicker { color: #acd4ff; }
        .app-final-cta h2 {
          color: white;
        }
        .app-final-cta p {
          color: #d0e0f1;
        }
        .app-final-cta .app-main-btn {
          margin-top: 10px;
          background: white;
          color: #175b9e;
          box-shadow: none;
        }
        .app-final-cta .app-main-btn:hover {
          background: #eaf4ff;
        }
        .app-footer {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 25px;
          padding: 15px 3px;
          color: #8190a4;
          font-size: 11px;
        }
        .app-footer a {
          color: #2874c6;
          font-weight: 750;
          text-decoration: none;
        }
        @keyframes appOrb {
          from { transform: translate3d(0,0,0) scale(1); }
          to { transform: translate3d(35px,45px,0) scale(1.12); }
        }
        @keyframes appGradient {
          to { background-position: 250% center; }
        }
        @keyframes appPulse {
          50% { box-shadow: 0 0 0 7px rgba(34,167,123,.04); }
        }
        @keyframes appFloat {
          from { transform: translateY(0); }
          to { transform: translateY(-9px); }
        }
        @keyframes appRotate {
          to { transform: rotate(360deg); }
        }
        @keyframes appGlow {
          from { transform: scale(.9); opacity: .65; }
          to { transform: scale(1.15); opacity: 1; }
        }
        @media (max-width: 850px) {
          .app-hero {
            grid-template-columns: 1fr;
            gap: 15px;
            text-align: center;
          }
          .app-hero-content > p { margin-left: auto; margin-right: auto; }
          .app-actions, .app-trust { justify-content: center; }
          .app-visual { min-height: 470px; }
        }
        @media (max-width: 600px) {
          .app-page { padding: 35px 14px 25px; }
          .app-hero { margin-bottom: 55px; }
          .app-hero h1 { font-size: 39px; letter-spacing: -1.2px; }
          .app-hero-content > p { font-size: 13px; }
          .app-actions { flex-direction: column; }
          .app-actions a { width: 100%; }
          .app-trust { font-size: 10px; }
          .app-visual { min-height: 440px; }
          .app-ring { width: 290px; height: 290px; }
          .app-ring-two { width: 350px; height: 350px; }
          .app-phone { transform: scale(.91) rotate(-4deg); }
          .floating-card-one { left: -3px; top: 85px; }
          .floating-card-two { right: -3px; bottom: 65px; }
          .app-floating-card { padding: 9px; }
          .app-floating-card strong { font-size: 9px; }
          .app-floating-card small { font-size: 8px; }
          .app-benefit-grid,
          .app-install-grid { grid-template-columns: 1fr; }
          .app-install { margin-top: 60px; }
          .install-card { padding: 21px; }
          .app-zalo-section { padding: 27px 20px; }
          .zalo-content h2 { font-size: 22px; }
          .zalo-symbol { width: 70px; height: 70px; border-width: 5px; border-radius: 20px; font-size: 37px; }
          .app-footer { flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          .app-page *,
          .app-page *::before,
          .app-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
