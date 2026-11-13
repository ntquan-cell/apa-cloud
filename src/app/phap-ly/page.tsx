
export const metadata = {
  title: "Chính sách bảo mật & Điều khoản sử dụng | APA",
  description:
    "Chính sách bảo mật thông tin cá nhân và điều khoản sử dụng nền tảng APA – Trợ lý hành chính số.",
};

const sections = [
  { id: "bao-mat", label: "Chính sách bảo mật" },
  { id: "thu-thap", label: "Thông tin được thu thập" },
  { id: "su-dung", label: "Mục đích sử dụng dữ liệu" },
  { id: "luu-tru", label: "Lưu trữ và bảo vệ dữ liệu" },
  { id: "quyen", label: "Quyền của người dùng" },
  { id: "dieu-khoan", label: "Điều khoản sử dụng" },
  { id: "gioi-han", label: "Giới hạn trách nhiệm" },
  { id: "lien-he", label: "Thông tin liên hệ" },
];

export default function Page() {
  return (
    <main className="policy-page">
      <div className="policy-glow policy-glow-one" />
      <div className="policy-glow policy-glow-two" />

      <div className="policy-container">
        <header className="policy-hero">
          <span className="policy-label">APA · MINH BẠCH & AN TOÀN</span>
          <h1>Chính sách & điều khoản</h1>
          <p>
            Chúng tôi tôn trọng quyền riêng tư và cam kết minh bạch về cách
            APA thu thập, sử dụng và bảo vệ thông tin của người dùng.
          </p>
          <div className="policy-updated">
            <span className="policy-dot" />
            Thông tin chính sách của nền tảng APA
          </div>
        </header>

        <div className="policy-layout">
          <aside className="policy-sidebar">
            <h3>NỘI DUNG</h3>
            <nav>
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="policy-content">
            <section id="bao-mat">
              <span className="policy-number">01 · QUYỀN RIÊNG TƯ</span>
              <h2>Chính sách bảo mật</h2>
              <p>
                APA tôn trọng quyền riêng tư của người dùng. Chính sách này
                giải thích cách nền tảng tiếp nhận, sử dụng, lưu trữ và bảo
                vệ thông tin khi bạn truy cập hoặc sử dụng các dịch vụ của APA.
              </p>
              <p>
                Chúng tôi hướng tới việc chỉ thu thập những thông tin cần
                thiết cho mục đích cung cấp và cải thiện dịch vụ.
              </p>
            </section>

            <section id="thu-thap">
              <span className="policy-number">02 · DỮ LIỆU</span>
              <h2>Thông tin được thu thập</h2>
              <p>Tùy theo tính năng bạn sử dụng, APA có thể tiếp nhận:</p>
              <ul>
                <li>
                  Thông tin liên hệ như họ tên, số điện thoại và địa chỉ email
                  khi bạn chủ động gửi biểu mẫu.
                </li>
                <li>
                  Thông tin hồ sơ, giấy tờ và dữ liệu bạn nhập để sử dụng
                  công cụ hỗ trợ thủ tục hành chính.
                </li>
                <li>
                  Nội dung yêu cầu hỗ trợ, phản hồi hoặc thông tin bạn gửi
                  khi liên hệ với APA.
                </li>
                <li>
                  Thông tin kỹ thuật cần thiết để vận hành và cải thiện
                  trải nghiệm sử dụng nền tảng.
                </li>
              </ul>
            </section>

            <section id="su-dung">
              <span className="policy-number">03 · MỤC ĐÍCH</span>
              <h2>Mục đích sử dụng dữ liệu</h2>
              <p>Thông tin được sử dụng để:</p>
              <ul>
                <li>Cung cấp các công cụ và dịch vụ hành chính số của APA.</li>
                <li>Hỗ trợ điền biểu mẫu và quản lý thông tin hồ sơ.</li>
                <li>Gửi thông báo, nhắc hạn và cập nhật trạng thái hồ sơ khi có chức năng tương ứng.</li>
                <li>Phản hồi yêu cầu hỗ trợ và xử lý các vấn đề kỹ thuật.</li>
                <li>Cải thiện chất lượng, độ an toàn và tính ổn định của nền tảng.</li>
              </ul>
              <p>
                APA không bán thông tin cá nhân của người dùng cho bên thứ ba.
                Việc chia sẻ dữ liệu, nếu cần thiết, phải có căn cứ và được
                thực hiện theo quy định pháp luật áp dụng.
              </p>
            </section>

            <section id="luu-tru">
              <span className="policy-number">04 · AN TOÀN DỮ LIỆU</span>
              <h2>Lưu trữ và bảo vệ dữ liệu</h2>
              <p>
                Một số thông tin trong phiên bản hiện tại của APA, chẳng hạn
                hồ sơ cá nhân hoặc checklist, có thể được lưu trực tiếp trên
                trình duyệt của thiết bị người dùng.
              </p>
              <p>
                Dữ liệu lưu trên trình duyệt có thể bị mất khi người dùng xóa
                dữ liệu trình duyệt, đổi thiết bị hoặc sử dụng chế độ duyệt
                web riêng tư. Vì vậy, bạn nên tự lưu lại những thông tin quan
                trọng.
              </p>
              <p>
                Khi APA triển khai hệ thống tài khoản và lưu trữ trên máy chủ,
                cơ chế lưu trữ, phân quyền truy cập và bảo vệ dữ liệu sẽ được
                cập nhật theo hạ tầng thực tế.
              </p>
            </section>

            <section id="quyen">
              <span className="policy-number">05 · QUYỀN NGƯỜI DÙNG</span>
              <h2>Quyền của người dùng</h2>
              <p>
                Bạn có thể yêu cầu APA hỗ trợ xem xét, chỉnh sửa hoặc xóa
                thông tin cá nhân mà APA đang quản lý, trong phạm vi pháp
                luật cho phép.
              </p>
              <p>
                Đối với dữ liệu đang lưu trên trình duyệt cá nhân, bạn có thể
                chủ động quản lý hoặc xóa dữ liệu thông qua cài đặt của trình
                duyệt và các chức năng tương ứng trên APA.
              </p>
            </section>

            <section id="dieu-khoan">
              <span className="policy-number">06 · QUY ĐỊNH SỬ DỤNG</span>
              <h2>Điều khoản sử dụng</h2>
              <p>
                Khi truy cập và sử dụng APA, bạn đồng ý sử dụng nền tảng
                đúng mục đích, cung cấp thông tin trung thực và không thực
                hiện các hành vi gây ảnh hưởng đến hoạt động hoặc an toàn
                của hệ thống.
              </p>
              <p>
                Người dùng có trách nhiệm kiểm tra tính chính xác của thông
                tin đã nhập, rà soát biểu mẫu và tự chịu trách nhiệm đối với
                quyết định nộp hồ sơ của mình.
              </p>
            </section>

            <section id="gioi-han">
              <span className="policy-number">07 · PHẠM VI DỊCH VỤ</span>
              <h2>Giới hạn trách nhiệm</h2>
              <p>
                Nội dung và công cụ trên APA được cung cấp nhằm hỗ trợ tra
                cứu, chuẩn bị và quản lý thủ tục hành chính. Nội dung này
                không mặc nhiên thay thế văn bản pháp luật, hướng dẫn chính
                thức hoặc ý kiến của cơ quan nhà nước có thẩm quyền.
              </p>
              <p>
                Quy trình, thành phần hồ sơ, biểu mẫu, lệ phí và thời hạn
                giải quyết có thể thay đổi theo quy định hoặc từng địa phương.
                Người dùng cần đối chiếu thông tin với cơ quan tiếp nhận
                trước khi nộp hồ sơ.
              </p>
              <p>
                APA không cam kết hồ sơ sẽ được cơ quan có thẩm quyền chấp
                thuận hoặc giải quyết trong một thời hạn cụ thể nếu chưa
                có xác nhận chính thức.
              </p>
            </section>

            <section id="lien-he">
              <span className="policy-number">08 · HỖ TRỢ</span>
              <h2>Thông tin liên hệ</h2>
              <p>
                Nếu có câu hỏi về chính sách bảo mật, điều khoản sử dụng
                hoặc yêu cầu liên quan đến dữ liệu cá nhân, bạn có thể
                gửi thông tin qua trang Liên hệ của APA.
              </p>
              <a className="policy-contact" href="/lien-he">
                Liên hệ với APA <span>→</span>
              </a>
            </section>

            <div className="policy-notice">
              <strong>Lưu ý quan trọng</strong>
              <p>
                Đây là nội dung chính sách mẫu dành cho giai đoạn phát triển
                sản phẩm. Trước khi công bố chính thức hoặc tiếp nhận dữ liệu
                cá nhân trên diện rộng, APA cần rà soát pháp lý, xác định
                đầy đủ đơn vị chịu trách nhiệm xử lý dữ liệu, thời hạn lưu
                trữ, cơ chế đồng ý và quy trình xử lý yêu cầu của người dùng.
              </p>
            </div>
          </article>
        </div>

        <footer className="policy-footer">
          <span>APA – Trợ lý hành chính số</span>
          <a href="/">Về trang chủ ↑</a>
        </footer>
      </div>

      <style>{`
        .policy-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 58px 20px 30px;
          background: #f3f7fc;
          color: #172b49;
          isolation: isolate;
        }
        .policy-glow {
          position: absolute;
          z-index: -1;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          filter: blur(75px);
          pointer-events: none;
          animation: policyFloat 12s ease-in-out infinite alternate;
        }
        .policy-glow-one {
          top: 80px;
          right: -180px;
          background: rgba(61, 137, 255, .15);
        }
        .policy-glow-two {
          top: 780px;
          left: -220px;
          background: rgba(43, 91, 190, .09);
          animation-delay: -5s;
        }
        .policy-container {
          width: 100%;
          max-width: 1120px;
          margin: auto;
        }
        .policy-hero {
          max-width: 760px;
          margin: 0 auto 44px;
          text-align: center;
        }
        .policy-label {
          display: inline-block;
          padding: 9px 15px;
          border: 1px solid #c9dcf8;
          border-radius: 30px;
          background: #e8f1ff;
          color: #1d62b9;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }
        .policy-hero h1 {
          margin: 20px 0 14px;
          color: #10294c;
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.16;
          letter-spacing: -1.5px;
        }
        .policy-hero > p {
          max-width: 650px;
          margin: auto;
          color: #52647e;
          font-size: 16px;
          line-height: 1.85;
        }
        .policy-updated {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 20px;
          color: #71819a;
          font-size: 12px;
        }
        .policy-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #219c76;
          box-shadow: 0 0 0 4px rgba(33,156,118,.12);
        }
        .policy-layout {
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          align-items: start;
          gap: 25px;
        }
        .policy-sidebar {
          position: sticky;
          top: 24px;
          padding: 22px 16px;
          border: 1px solid #e0e8f2;
          border-radius: 17px;
          background: rgba(255,255,255,.92);
          box-shadow: 0 12px 35px rgba(25,55,95,.05);
        }
        .policy-sidebar h3 {
          margin: 0 0 15px 9px;
          color: #8493a8;
          font-size: 10px;
          letter-spacing: 1.5px;
        }
        .policy-sidebar nav {
          display: grid;
          gap: 4px;
        }
        .policy-sidebar a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 9px;
          border-radius: 9px;
          color: #425673;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: background .2s, color .2s, transform .2s;
        }
        .policy-sidebar a span {
          color: #8b9bb2;
          font-size: 10px;
          font-weight: 800;
        }
        .policy-sidebar a:hover {
          transform: translateX(3px);
          background: #edf4ff;
          color: #1765c3;
        }
        .policy-content {
          min-width: 0;
          padding: 36px clamp(22px, 5vw, 52px);
          border: 1px solid #e0e8f2;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 16px 45px rgba(25,55,95,.06);
        }
        .policy-content section {
          scroll-margin-top: 28px;
          padding: 0 0 30px;
          margin: 0 0 30px;
          border-bottom: 1px solid #eaf0f6;
        }
        .policy-content section:last-of-type {
          margin-bottom: 25px;
          border-bottom: 0;
        }
        .policy-number {
          color: #2774cb;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }
        .policy-content h2 {
          margin: 10px 0 15px;
          color: #142d50;
          font-size: 24px;
          letter-spacing: -.5px;
        }
        .policy-content p,
        .policy-content li {
          color: #52647b;
          font-size: 14px;
          line-height: 1.9;
        }
        .policy-content p {
          margin: 0 0 13px;
        }
        .policy-content ul {
          display: grid;
          gap: 9px;
          padding-left: 22px;
          margin: 12px 0 17px;
        }
        .policy-content li::marker {
          color: #3985db;
        }
        .policy-contact {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          margin-top: 7px;
          padding: 11px 17px;
          border-radius: 9px;
          background: #1768c5;
          color: white;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }
        .policy-contact:hover {
          transform: translateY(-2px);
          background: #1055a5;
        }
        .policy-notice {
          padding: 19px 20px;
          border: 1px solid #f0dfb8;
          border-left: 4px solid #d69a32;
          border-radius: 11px;
          background: #fffaf0;
        }
        .policy-notice strong {
          color: #865b17;
          font-size: 13px;
        }
        .policy-notice p {
          margin: 7px 0 0;
          color: #765f3b;
          font-size: 12px;
          line-height: 1.8;
        }
        .policy-footer {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 25px;
          padding: 20px 4px;
          color: #7c8ba0;
          font-size: 12px;
        }
        .policy-footer a {
          color: #246dc0;
          font-weight: 700;
          text-decoration: none;
        }
        @keyframes policyFloat {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(35px, 45px, 0) scale(1.12); }
        }
        @media (max-width: 760px) {
          .policy-page { padding: 40px 14px 20px; }
          .policy-hero { margin-bottom: 28px; }
          .policy-layout { grid-template-columns: 1fr; gap: 15px; }
          .policy-sidebar { position: static; padding: 16px; }
          .policy-sidebar nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .policy-sidebar a { font-size: 11px; }
          .policy-content {
            padding: 25px 20px;
            border-radius: 15px;
          }
          .policy-content h2 { font-size: 21px; }
          .policy-content p,
          .policy-content li { font-size: 13px; }
        }
        @media (max-width: 390px) {
          .policy-sidebar nav { grid-template-columns: 1fr; }
          .policy-footer { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
