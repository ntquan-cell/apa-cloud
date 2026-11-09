import Link from "next/link";
export const metadata = { title: "Sản phẩm" };
const items = [
  ["📚", "Thư viện thủ tục", "Phân nhóm rõ ràng, đủ các yếu tố: cơ quan, thời hạn, phí, căn cứ pháp lý.", "/thu-tuc"],
  ["🤖", "Trợ lý AI", "Hỏi đáp và hướng dẫn từng bước bằng tiếng đời thường.", "/tro-ly"],
  ["✍️", "Hồ sơ & biểu mẫu", "Lưu thông tin một lần, tự điền tờ khai và in.", "/ho-so"],
  ["⏰", "Nhắc hạn giấy tờ", "Theo dõi hạn căn cước, hộ chiếu, bằng lái, BHYT, đăng kiểm.", "/nhac-nho"],
  ["📍", "Cơ quan gần nhất", "Tìm nơi nộp hồ sơ, giờ làm việc và đặt lịch.", "/co-quan"],
];
export default function Page() {
  return (
    <div className="wrap" style={{ padding: "40px 20px" }}>
      <h2>Sản phẩm</h2>
      <p>Bộ công cụ giúp bạn đi từ “không biết bắt đầu từ đâu” đến hồ sơ hoàn chỉnh, đúng và đủ.</p>
      <div className="grid">{items.map(([i, t, d, h]) => <Link key={t} href={h} className="card"><div style={{ fontSize: "2rem" }}>{i}</div><h3>{t}</h3><p>{d}</p></Link>)}</div>
    </div>
  );
}
