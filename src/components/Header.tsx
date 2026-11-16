import Link from "next/link";
import Logo from "./Logo";
import SeniorToggle from "./SeniorToggle";

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="logo"><Logo /> APA</Link>
        <nav className="nav">
          <div className="dd"><span tabIndex={0}>Sản phẩm ▾</span>
            <div className="dd-m">
              <Link href="/thu-tuc">Thư viện thủ tục</Link><Link href="/tro-ly">Trợ lý AI</Link>
              <Link href="/ho-so">Hồ sơ & biểu mẫu</Link><Link href="/nhac-nho">Nhắc hạn giấy tờ</Link><Link href="/co-quan">Tìm cơ quan gần nhất</Link>
            </div></div>
          <div className="dd"><span tabIndex={0}>Giải pháp ▾</span>
            <div className="dd-m">
              <Link href="/giai-phap#nguoi-dan">Cho người dân</Link><Link href="/giai-phap#doanh-nghiep">Cho doanh nghiệp</Link>
              <Link href="/giai-phap#co-quan">Cho tổ chức</Link><Link href="/giai-phap#nuoc-ngoai">Cho người Việt ở nước ngoài</Link>
            </div></div>
          <Link href="/blog">Blog</Link><Link href="/tai-app">Tải app</Link><Link href="/gioi-thieu">Giới thiệu</Link>
        </nav>
        <SeniorToggle />
        <Link href="/dang-nhap">Đăng nhập</Link>
        <Link href="/lien-he" className="btn pill">Liên hệ</Link>
      </div>
    </header>
  );
}
