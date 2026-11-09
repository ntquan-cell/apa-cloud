import Link from "next/link";
export const metadata = { title: "Giải pháp" };
const sols = [
  ["nguoi-dan", "Cho người dân", "Checklist giấy tờ, hướng dẫn điền mẫu, giao diện chữ to và hỗ trợ người cao tuổi. Miễn phí tra cứu cơ bản.", "/thu-tuc"],
  ["doanh-nghiep", "Cho doanh nghiệp", "Bộ hồ sơ doanh nghiệp, lịch nhắc tuân thủ thuế – bảo hiểm – giấy phép, soi rủi ro hợp đồng và kết nối luật sư đối tác.", "/bang-gia"],
  ["co-quan", "Cho cơ quan nhà nước", "Trợ lý AI/Kiosk 24/7 và tiền kiểm hồ sơ trước khi nộp, giảm hồ sơ bị trả và áp lực tiếp dân.", "/lien-he"],
  ["nuoc-ngoai", "Cho người Việt ở nước ngoài", "Tra cứu thủ tục hộ chiếu, visa, xác nhận tư pháp, hợp pháp hóa lãnh sự và hướng dẫn tới đúng cơ quan đại diện.", "/lien-he"],
];
export default function Page() {
  return (
    <div className="wrap" style={{ padding: "40px 20px" }}>
      <h2>Giải pháp theo nhóm khách hàng</h2>
      {sols.map(([id, t, d, h]) => (
        <div key={id} id={id} className="card" style={{ marginBottom: 16, scrollMarginTop: 90 }}>
          <h3>{t}</h3><p style={{ margin: "6px 0 12px" }}>{d}</p><Link className="btn ghost" href={h}>Tìm hiểu thêm</Link>
        </div>
      ))}
    </div>
  );
}
