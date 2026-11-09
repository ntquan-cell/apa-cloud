// Sửa các thông tin dưới đây thành thông tin thật trước khi lên tên miền
export const SITE = {
  name: "APA", full: "APA – Trợ lý hành chính số",
  phone: "0900 000 000", email: "lienhe@apa.vn",
  zalo: "https://zalo.me/0900000000", messenger: "https://m.me/apa.vn",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apa.vn",
};
export const plans = [
  { name: "Cơ bản", price: "Miễn phí", note: "Cho người dân", hot: false, cta: "Dùng ngay", href: "/thu-tuc",
    items: ["Tra cứu thủ tục & checklist giấy tờ", "Hỏi đáp AI cơ bản", "Hồ sơ cá nhân & tờ khai tự điền", "Chuyển ảnh chụp sang PDF (sắp ra mắt)"] },
  { name: "Doanh nghiệp", price: "199.000đ", note: "/tháng", hot: true, cta: "Đăng ký demo", href: "/dang-ky-demo",
    items: ["Quét hợp đồng, cảnh báo điều khoản rủi ro (sắp ra mắt)", "Bộ hồ sơ doanh nghiệp tự động", "Lịch nhắc hạn thuế, giấy phép, bảo hiểm", "Case Brief chuyển luật sư đối tác"] },
  { name: "Cơ quan & đơn vị", price: "Liên hệ", note: "theo quy mô", hot: false, cta: "Liên hệ tư vấn", href: "/lien-he",
    items: ["Trợ lý AI/Kiosk giải đáp thủ tục 24/7", "Tiền kiểm hồ sơ trước khi nộp", "Tích hợp, đào tạo, bảo trì dữ liệu", "Báo cáo hiệu quả triển khai"] },
];
export const posts = [
  { slug: "tam-tru-thuong-tru-khac-nhau-the-nao", title: "Thường trú, tạm trú, lưu trú khác nhau thế nào?", date: "2026-10-27",
    excerpt: "Phân biệt ba loại cư trú để khai báo đúng.",
    body: ["Thường trú là nơi sinh sống ổn định, lâu dài. Tạm trú là nơi ở ngoài nơi thường trú trong một khoảng thời gian nhất định. Lưu trú là ở lại ngắn ngày, dưới 30 ngày, ngoài nơi cư trú.", "Mỗi loại có cách khai báo và hồ sơ khác nhau. Xem nhóm thủ tục “Cư trú” trên APA để biết chi tiết, và đối chiếu với Công an xã nơi bạn ở."] },
  { slug: "chuan-bi-ho-so-sang-ten-xe", title: "Sang tên xe máy: cần chuẩn bị gì để đi một lần là xong?", date: "2026-10-05",
    excerpt: "Giấy tờ, lệ phí trước bạ và những lỗi thường gặp.",
    body: ["Bạn cần giấy tờ mua bán hợp lệ, giấy đăng ký xe cũ, căn cước chủ xe mới và chứng từ lệ phí trước bạ. Nên kiểm tra xe còn phạt nguội chưa xử lý.", "Danh sách đầy đủ có trong trang thủ tục “Đăng ký sang tên, đổi chủ xe” của APA."] },
  { slug: "5-loi-khien-ho-so-bi-tra", title: "5 lỗi khiến hồ sơ hành chính bị trả lại", date: "2026-10-20",
    excerpt: "Sai họ tên, thiếu bản sao, sai mẫu… và cách tránh.",
    body: ["Phần lớn hồ sơ bị trả vì lỗi nhỏ: họ tên không khớp căn cước, thiếu giấy tờ kèm theo, dùng mẫu cũ, ghi địa chỉ không đầy đủ hoặc thiếu chữ ký.", "Cách đơn giản nhất là dùng checklist trước khi đi nộp và đối chiếu từng mục. APA giúp bạn tick từng giấy tờ và nhắc các lỗi thường gặp ở mỗi thủ tục."] },
  { slug: "lam-can-cuoc-can-chuan-bi-gi", title: "Làm thẻ căn cước cần chuẩn bị những gì?", date: "2026-10-12",
    excerpt: "Danh sách giấy tờ và các bước để đi một lần là xong.",
    body: ["Với đa số công dân, dữ liệu dân cư đã có sẵn nên bạn chỉ cần mang căn cước cũ và các giấy tờ chứng minh thay đổi (nếu có).", "Hãy xem trang thủ tục “Cấp, đổi, cấp lại thẻ căn cước” trên APA để có danh sách đầy đủ và đối chiếu với cơ quan Công an nơi bạn nộp."] },
  { slug: "nho-han-giay-to-quan-trong", title: "Đừng để quên hạn giấy tờ quan trọng", date: "2026-09-30",
    excerpt: "Căn cước, hộ chiếu, bằng lái, BHYT, đăng kiểm: đặt nhắc ngay.",
    body: ["Giấy tờ hết hạn thường bị phát hiện đúng lúc cần dùng. Việc đặt nhắc trước 30–60 ngày giúp bạn kịp làm thủ tục.", "Dùng mục “Nhắc hạn giấy tờ” của APA để lưu ngày hết hạn và xem còn bao nhiêu ngày."] },
];

export const faqs = [
  ["APA là gì?", "APA – Trợ lý hành chính số là website giúp bạn tra cứu thủ tục, chuẩn bị giấy tờ, điền tờ khai và hỏi đáp với trợ lý AI để làm thủ tục hành chính đúng ngay từ lần đầu."],
  ["Dùng APA có mất phí không?", "Các tính năng cơ bản dành cho người dân hoàn toàn miễn phí. Gói doanh nghiệp và giải pháp cho cơ quan nhà nước có bảng giá riêng tại trang Bảng giá."],
  ["Thông tin trên APA có chính xác tuyệt đối không?", "APA tổng hợp để bạn tham khảo. Quy định, thời hạn và lệ phí có thể thay đổi, vì vậy hãy luôn đối chiếu với Cổng Dịch vụ công quốc gia hoặc cơ quan tiếp nhận trước khi nộp hồ sơ."],
  ["Dữ liệu cá nhân của tôi được lưu ở đâu?", "Hồ sơ cá nhân, checklist và lịch nhắc hạn được lưu ngay trên trình duyệt của bạn, không gửi lên máy chủ. Chỉ thông tin bạn chủ động gửi qua form liên hệ hoặc đăng ký tài khoản mới được lưu trên hệ thống."],
  ["APA có nộp hồ sơ thay tôi không?", "Hiện APA hướng dẫn, kiểm tra và giúp bạn chuẩn bị hồ sơ; bạn tự nộp tại cơ quan có thẩm quyền hoặc Cổng Dịch vụ công. Dịch vụ làm hộ qua đối tác đang được xây dựng."],
  ["Doanh nghiệp hoặc cơ quan muốn triển khai APA thì sao?", "Hãy đăng ký demo hoặc liên hệ để được tư vấn giải pháp phù hợp với quy mô và nhu cầu của đơn vị."],
];
