import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { SITE } from "@/lib/site";
export const metadata = { title: "Liên hệ", description: "Liên hệ APA để được tư vấn giải pháp thủ tục hành chính số cho cá nhân, doanh nghiệp và cơ quan nhà nước." };
export default function Page() {
  return (
    <>
      <div className="wrap narrow" style={{ padding: "40px 20px 0" }}>
        <h2>Liên hệ APA</h2>
        <p>Bạn cần hỗ trợ về một thủ tục, muốn hợp tác hoặc triển khai giải pháp cho đơn vị? Hãy để lại thông tin, chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.</p>
        <div className="grid" style={{ marginBottom: 20 }}>
          <div className="card"><h3>☎ Hotline</h3><p>{SITE.phone}</p></div>
          <div className="card"><h3>✉ Email</h3><p>{SITE.email}</p></div>
          <div className="card"><h3>🕘 Giờ làm việc</h3><p>Thứ Hai – Thứ Sáu<br />8:00 – 17:30</p></div>
        </div>
        <ContactForm type="lien-he" />
      </div>
      <Faq />
    </>
  );
}
