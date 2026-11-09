import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Đăng ký demo", description: "Đăng ký trải nghiệm demo APA – trợ lý hành chính số." };
export default function Page() {
  return (
    <div className="wrap narrow" style={{ padding: "40px 20px" }}>
      <h2>Đăng ký demo</h2>
      <p>Để lại thông tin, đội ngũ APA sẽ liên hệ và trình diễn giải pháp phù hợp với nhu cầu của bạn.</p>
      <div className="card" style={{ marginBottom: 16 }}>
        <h3>Trong buổi demo bạn sẽ được</h3>
        <ul style={{ color: "#41506b" }}>
          <li>Xem trực tiếp cách tra cứu thủ tục, chuẩn bị hồ sơ và hỏi đáp với trợ lý AI.</li>
          <li>Trao đổi nhu cầu riêng của người dân, doanh nghiệp hoặc cơ quan của bạn.</li>
          <li>Nhận tư vấn lộ trình triển khai và báo giá phù hợp.</li>
        </ul>
      </div>
      <ContactForm type="demo" />
    </div>
  );
}
