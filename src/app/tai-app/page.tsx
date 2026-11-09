import Link from "next/link";
import { SITE } from "@/lib/site";
export const metadata = { title: "Tải app" };
export default function Page() {
  return (
    <div className="wrap narrow" style={{ padding: "40px 20px" }}>
      <h2>Dùng APA mọi lúc, mọi nơi</h2>
      <p>APA chạy ngay trên trình duyệt điện thoại, không cần cài ứng dụng nặng. Phiên bản Zalo Mini App đang được phát triển.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="btn pill" href="/tro-ly">Mở trợ lý trên web</Link>
        <a className="btn dark" href={SITE.zalo} target="_blank" rel="noreferrer">Kết nối Zalo</a>
      </div>
      <h2 style={{ marginTop: 28 }}>Thêm APA vào màn hình chính</h2>
      <div className="grid">
        <div className="card"><h3>iPhone (Safari)</h3><p>Mở APA → bấm nút Chia sẻ → chọn “Thêm vào Màn hình chính”.</p></div>
        <div className="card"><h3>Android (Chrome)</h3><p>Mở APA → bấm dấu ba chấm → chọn “Thêm vào màn hình chính”.</p></div>
      </div>
      <div className="note">Mẹo: mở trang này trên điện thoại, chọn “Thêm vào màn hình chính” để dùng như một ứng dụng.</div>
    </div>
  );
}
