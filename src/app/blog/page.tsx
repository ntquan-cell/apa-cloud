export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const additionalPosts: BlogPost[] = [
  {
    slug: "lam-can-cuoc-can-chuan-bi-gi",
    date: "17/11/2026",
    title: "Làm căn cước: Cần chuẩn bị gì trước khi thực hiện?",
    excerpt: "Những điểm cần kiểm tra trước khi đi làm căn cước.",
    body: [
      "Căn cước là giấy tờ quan trọng trong nhiều giao dịch và thủ tục hành chính. Trước khi thực hiện, bạn nên xác định mình làm lần đầu, cấp đổi hay cấp lại.",
      "Hãy kiểm tra thông tin cá nhân, địa điểm tiếp nhận và hướng dẫn hồ sơ của cơ quan có thẩm quyền.",
      "Nếu được cấp giấy hẹn hoặc mã tiếp nhận, hãy lưu lại để theo dõi kết quả.",
      "APA khuyến nghị đối chiếu yêu cầu cụ thể với cơ quan tiếp nhận trước khi thực hiện."
    ]
  },
  {
    slug: "dang-ky-tam-tru-bat-dau-tu-dau",
    date: "16/11/2026",
    title: "Đăng ký tạm trú: Bắt đầu từ đâu và cần lưu ý gì?",
    excerpt: "Hướng dẫn xác định nhu cầu và chuẩn bị thông tin đăng ký tạm trú.",
    body: [
      "Khi chuyển đến sinh sống tại địa điểm khác nơi thường trú, bạn cần tìm hiểu đúng thủ tục cư trú phù hợp.",
      "Trước tiên, hãy xác định nơi ở, thời gian sinh sống và tình trạng cư trú hiện tại.",
      "Kiểm tra thông tin về chỗ ở và tài liệu cần thiết theo hướng dẫn chính thức.",
      "Nếu thực hiện trực tuyến, hãy lưu mã hồ sơ và thông báo tiếp nhận."
    ]
  },
  {
    slug: "sang-ten-xe-may-can-luu-y-gi",
    date: "15/11/2026",
    title: "Sang tên xe máy: Những việc nên kiểm tra trước khi làm",
    excerpt: "Các thông tin cần đối chiếu khi mua bán và chuyển quyền sở hữu xe máy.",
    body: [
      "Khi mua bán xe máy, việc thực hiện thủ tục sang tên giúp cập nhật thông tin chủ sở hữu phương tiện.",
      "Hai bên nên kiểm tra thông tin phương tiện, giấy tờ quyền sở hữu và chứng từ giao dịch.",
      "Không nên chỉ dựa vào thỏa thuận miệng hoặc giấy tờ không rõ nguồn gốc.",
      "Nơi tiếp nhận, lệ phí và quy trình cần được tra cứu theo trường hợp thực tế."
    ]
  },
  {
    slug: "ho-chieu-lan-dau-can-luu-y",
    date: "14/11/2026",
    title: "Làm hộ chiếu lần đầu: 6 điều không nên bỏ qua",
    excerpt: "Những điều cần kiểm tra về thông tin cá nhân, ảnh và cách nộp hồ sơ.",
    body: [
      "Khi làm hộ chiếu lần đầu, người thực hiện nên xác định đúng trường hợp của mình và quy trình tương ứng.",
      "Thông tin khai báo cần thống nhất với dữ liệu cá nhân và giấy tờ được yêu cầu.",
      "Nếu khai trực tuyến, hãy kiểm tra kỹ thông tin liên hệ và lựa chọn nhận kết quả.",
      "Chỉ sử dụng cổng thông tin chính thức để khai báo và theo dõi hồ sơ."
    ]
  },
  {
    slug: "hoi-dap-dang-ky-ho-kinh-doanh",
    date: "13/11/2026",
    title: "Hỏi đáp: Muốn đăng ký hộ kinh doanh thì bắt đầu thế nào?",
    excerpt: "Một tình huống hỏi đáp minh họa về việc đăng ký hộ kinh doanh.",
    body: [
      "TÌNH HUỐNG HỎI ĐÁP",
      "Người dùng hỏi: Tôi muốn mở một cửa hàng nhỏ nhưng chưa biết bắt đầu từ đâu.",
      "APA trả lời: Bạn nên xác định địa điểm, ngành nghề dự kiến, mô hình kinh doanh và thông tin người đăng ký trước khi tra cứu thủ tục.",
      "Người dùng hỏi: Tôi cần chuẩn bị những thông tin nào?",
      "APA trả lời: Hãy kiểm tra biểu mẫu hiện hành để biết thông tin người đăng ký, tên dự kiến, địa chỉ và ngành nghề cần khai báo.",
      "Người dùng hỏi: Có thể nộp trực tuyến không?",
      "APA trả lời: Hình thức tiếp nhận tùy thuộc quy trình áp dụng. Hãy kiểm tra trên cổng dịch vụ công hoặc cơ quan đăng ký có thẩm quyền.",
      "Lưu ý: Đây là tình huống minh họa do APA biên soạn, không phải hội thoại thực tế."
    ]
  },
  {
    slug: "ho-so-dat-dai-nen-kiem-tra-gi",
    date: "12/11/2026",
    title: "Hồ sơ đất đai: Những thông tin nên kiểm tra trước khi nộp",
    excerpt: "Cách xác định đúng thủ tục và đối chiếu thông tin giấy tờ đất đai.",
    body: [
      "Thủ tục đất đai có nhiều loại như đăng ký biến động, cấp giấy chứng nhận hoặc đính chính thông tin.",
      "Điều quan trọng đầu tiên là xác định chính xác mục đích cần giải quyết.",
      "Hãy đối chiếu thông tin người sử dụng đất, thửa đất, địa chỉ và tài liệu hiện có.",
      "Không sử dụng một bộ hồ sơ chung cho tất cả thủ tục đất đai. Hãy kiểm tra yêu cầu của cơ quan có thẩm quyền."
    ]
  },
  {
    slug: "tra-cuu-the-bhyt-con-gia-tri-khong",
    date: "11/11/2026",
    title: "Cách kiểm tra thẻ BHYT còn giá trị sử dụng hay không",
    excerpt: "Hướng dẫn kiểm tra thông tin tham gia bảo hiểm y tế.",
    body: [
      "Trước khi đi khám chữa bệnh, người tham gia nên kiểm tra giá trị sử dụng của thẻ bảo hiểm y tế.",
      "Bạn có thể sử dụng kênh tra cứu chính thức của cơ quan bảo hiểm xã hội.",
      "Hãy đối chiếu họ tên, thông tin định danh và thời hạn sử dụng.",
      "Nếu dữ liệu không chính xác, hãy liên hệ cơ quan bảo hiểm xã hội để được hướng dẫn."
    ]
