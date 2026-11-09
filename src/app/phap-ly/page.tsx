export const metadata = { title: "Chính sách & điều khoản" };
export default function Page() {
  return (
    <div className="wrap narrow post" style={{ padding: "40px 20px" }}>
      <h1 id="bao-mat">Chính sách bảo mật</h1>
      <p>APA chỉ thu thập thông tin bạn chủ động cung cấp (biểu mẫu liên hệ, tài khoản). Hồ sơ cá nhân và checklist trong mục “Hồ sơ” được lưu trên trình duyệt của bạn. Chúng tôi không bán thông tin cá nhân cho bên thứ ba và áp dụng các biện pháp bảo vệ dữ liệu phù hợp.</p>
      <p>Bạn có thể yêu cầu xem, sửa hoặc xóa dữ liệu bằng cách liên hệ qua email trên trang Liên hệ.</p>
      <h1 id="dieu-khoan" style={{ marginTop: 40 }}>Điều khoản sử dụng</h1>
      <p>Nội dung trên APA mang tính tham khảo, không thay thế tư vấn pháp lý hay hướng dẫn chính thức của cơ quan nhà nước. Người dùng cần đối chiếu với Cổng Dịch vụ công quốc gia hoặc cơ quan có thẩm quyền trước khi nộp hồ sơ.</p>
      <p className="warn">Đây là văn bản mẫu, hãy nhờ luật sư rà soát trước khi công bố chính thức.</p>
    </div>
  );
}
