import Link from "next/link";
import { groups, procedures } from "@/lib/data";
import Faq from "@/components/Faq";

const why = [
  ["🛡️", "Minh bạch, tham khảo chính thống", "Mỗi thủ tục nêu rõ địa chỉ, thời hạn, lệ phí và căn cứ pháp lý để bạn đối chiếu."],
  ["⏱️", "Tiết kiệm thời gian", "Biết cần mang gì trước khi đi, tránh đi lại nhiều lần vì thiếu giấy tờ."],
  ["🔒", "Riêng tư", "Hồ sơ cá nhân lưu ngay trên máy của bạn, không gửi đi đâu nếu bạn không muốn."],
  ["👵", "Dễ dùng cho mọi lứa tuổi", "Chế độ chữ to và ngôn ngữ đời thường giúp người cao tuổi tự làm được."],
];

const sats: [string, string, string][] = [
  ["🪪 Căn cước", "6%", "14%"], ["🛂 Hộ chiếu", "4%", "62%"], ["🏠 Đất đai", "42%", "2%"],
  ["🏢 Doanh nghiệp", "76%", "6%"], ["🛵 Xe cộ", "78%", "62%"], ["🧾 Thuế", "40%", "68%"],
];
const steps = [
  ["1", "Hỏi hoặc chọn thủ tục", "Tìm kiếm thủ tục dễ dàng: “làm căn cước”, “sang tên xe”."],
  ["2", "Chuẩn bị đúng giấy tờ", "Checklist chỉ rõ cần gì, tick từng mục đã có."],
  ["3", "Điền mẫu không sai", "Lưu thông tin một lần, tự điền và in tờ khai."],
  ["4", "Nộp & theo dõi hạn", "Nhắc hạn giấy tờ, tìm cơ quan gần nhất."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <h1>Trợ lý AI giúp bạn làm thủ tục hành chính đúng ngay từ lần đầu.</h1>
            <p>APA hướng dẫn từng bước, kiểm tra giấy tờ và điền mẫu giúp người dân, doanh nghiệp và cơ quan nhà nước tiết kiệm thời gian, tránh bị trả hồ sơ.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
              <Link className="btn pill" href="/tro-ly">Hỏi trợ lý AI</Link>
              <Link className="btn dark" href="/dang-ky-demo">Đăng ký demo</Link>
            </div>
            <small>{procedures.length} thủ tục · Miễn phí cho người dân</small>
          </div>
          <div className="orbit" aria-hidden>
            <div className="core"><div>APA<br /><small>Trợ lý AI · Hành chính số</small></div></div>
            {sats.map(([t, top, left]) => <span key={t} className="sat" style={{ top, left }}>{t}</span>)}
          </div>
        </div>
      </section>
      <section className="s wrap">
        <div className="stats">
          <div><b>{groups.length}</b>nhóm thủ tục</div><div><b>24/7</b>hỏi đáp AI</div><div><b>0đ</b>cho người dân</div><div><b>1 lần</b>nhập thông tin</div>
        </div>
      </section>
      <section className="s wrap">
        <h2>Chọn nhóm thủ tục</h2>
        <div className="grid">
          {groups.map((g) => (
            <Link key={g.id} href={`/thu-tuc?nhom=${g.id}`} className="card">
              <div style={{ fontSize: "2rem" }}>{g.icon}</div><h3>{g.name}</h3><p>{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="s wrap">
        <h2>Cách APA hoạt động</h2>
        <div className="grid">
          {steps.map(([n, t, d]) => <div key={n} className="card"><span className="tag">Bước {n}</span><h3 style={{ marginTop: 8 }}>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
      <section className="s wrap">
        <h2>APA giúp bạn</h2>
        <div className="grid">
          {why.map(([i, t, d]) => <div key={t} className="card"><div style={{ fontSize: "1.6rem" }}>{i}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
      <Faq />
      <section className="s wrap">
        <div className="card" style={{ textAlign: "center", padding: 36 }}>
          <h2>Bạn là doanh nghiệp hoặc tổ chức c?</h2>
          <p>Quét hợp đồng, nhắc hạn tuân thủ, tiền kiểm hồ sơ tại bộ phận Một cửa… Hãy để chúng tôi tư vấn giải pháp phù hợp.</p>
          <Link className="btn pill" href="/lien-he">Liên hệ tư vấn</Link>
        </div>
      </section>
    </>
  );
}
