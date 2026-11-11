import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap fcols">
        <div><b>{SITE.full}</b><p>Giúp người dân, doanh nghiệp và tổ chức làm thủ tục nhanh, chuẩn, minh bạch.</p>
          <p>☎ {SITE.phone}<br />✉ {SITE.email}</p></div>
        <div><b>Sản phẩm</b><Link href="/thu-tuc">Thủ tục</Link><Link href="/tro-ly">Trợ lý AI</Link><Link href="/nhac-nho">Nhắc hạn</Link><Link href="/bang-gia">Bảng giá</Link></div>
        <div><b>Công ty</b><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/blog">Blog</Link><Link href="/lien-he">Liên hệ</Link><Link href="/dang-ky-demo">Đăng ký demo</Link></div>
        <div><b>Pháp lý</b><Link href="/phap-ly#bao-mat">Chính sách bảo mật</Link><Link href="/phap-ly#dieu-khoan">Điều khoản sử dụng</Link></div>
      </div>
      <div className="wrap" style={{ marginTop: 20, fontSize: ".8rem" }}>
        Thông tin mang tính tham khảo, vui lòng đối chiếu với Cổng Dịch vụ công quốc gia hoặc cơ quan có thẩm quyền trước khi nộp hồ sơ. © {new Date().getFullYear()} {SITE.name}.
      </div>
    </footer>
  );
}
