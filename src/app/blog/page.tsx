
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
  },
  {
    slug: "hoi-dap-ho-so-truc-tuyen-bi-yeu-cau-bo-sung",
    date: "10/11/2026",
    title: "Hồ sơ trực tuyến bị yêu cầu bổ sung: Phải làm gì?",
    excerpt: "Cách đọc thông báo và xử lý khi hồ sơ hành chính cần bổ sung.",
    body: [
      "Khi hồ sơ trực tuyến được yêu cầu bổ sung, trước tiên bạn cần đọc kỹ nội dung thông báo của cơ quan tiếp nhận.",
      "Xác định tài liệu còn thiếu, thông tin chưa chính xác hoặc biểu mẫu cần điều chỉnh.",
      "Chuẩn bị lại tài liệu theo đúng định dạng và yêu cầu được thông báo.",
      "Sau khi gửi bổ sung, hãy lưu mã hồ sơ và kiểm tra trạng thái xử lý."
    ]
  },
  {
    slug: "theo-doi-ho-so-da-nop-truc-tuyen",
    date: "09/11/2026",
    title: "Cách theo dõi hồ sơ hành chính đã nộp trực tuyến",
    excerpt: "Những cách kiểm tra tình trạng hồ sơ sau khi gửi thành công.",
    body: [
      "Sau khi nộp hồ sơ trực tuyến, bạn nên lưu lại mã hồ sơ hoặc thông tin xác nhận tiếp nhận.",
      "Đăng nhập đúng tài khoản đã sử dụng để nộp hồ sơ và truy cập mục quản lý hồ sơ.",
      "Theo dõi các trạng thái như đã tiếp nhận, đang xử lý, yêu cầu bổ sung hoặc đã có kết quả.",
      "Nếu trạng thái không thay đổi trong thời gian dài, hãy liên hệ bộ phận tiếp nhận để được hỗ trợ."
    ]
  },
  {
    slug: "uy-quyen-nop-ho-so-can-luu-y",
    date: "08/11/2026",
    title: "Ủy quyền nộp hồ sơ hành chính: Những điều cần lưu ý",
    excerpt: "Các điểm cần kiểm tra khi nhờ người khác thực hiện thủ tục thay mình.",
    body: [
      "Không phải thủ tục hành chính nào cũng cho phép người khác thực hiện thay.",
      "Trước khi ủy quyền, hãy kiểm tra quy định của thủ tục và yêu cầu về giấy tờ chứng minh việc đại diện.",
      "Thông tin của người ủy quyền và người được ủy quyền cần chính xác, thống nhất.",
      "Nên xác định rõ phạm vi công việc, thời hạn và trách nhiệm của các bên."
    ]
  },
  {
    slug: "tra-cuu-le-phi-va-thoi-han-thu-tuc",
    date: "07/11/2026",
    title: "Tra cứu lệ phí và thời hạn giải quyết thủ tục hành chính",
    excerpt: "Cách tìm thông tin chi phí và thời gian xử lý trước khi nộp hồ sơ.",
    body: [
      "Lệ phí và thời hạn giải quyết có thể khác nhau tùy loại thủ tục và trường hợp cụ thể.",
      "Bạn nên tra cứu thông tin trên cổng dịch vụ công hoặc website của cơ quan có thẩm quyền.",
      "Kiểm tra xem thời hạn được tính từ ngày tiếp nhận hồ sơ hợp lệ hay từ thời điểm khác.",
      "Lưu ý các khoản phí phát sinh và phương thức thanh toán được công bố chính thức."
    ]
  },
  {
    slug: "doanh-nghiep-cap-nhat-thong-tin-can-kiem-tra",
    date: "06/11/2026",
    title: "Doanh nghiệp cập nhật thông tin: Cần kiểm tra những gì?",
    excerpt: "Những nội dung nên rà soát khi doanh nghiệp thay đổi thông tin đăng ký.",
    body: [
      "Khi doanh nghiệp có thay đổi về thông tin đăng ký, cần xác định nội dung thay đổi thuộc trường hợp nào.",
      "Rà soát thông tin doanh nghiệp, người đại diện, địa chỉ và các dữ liệu liên quan.",
      "Chuẩn bị hồ sơ theo biểu mẫu và quy định đang áp dụng.",
      "Sau khi hoàn tất, kiểm tra kết quả cập nhật để bảo đảm dữ liệu chính xác."
    ]
  },
  {
    slug: "huong-dan-su-dung-cong-dich-vu-cong",
    date: "05/11/2026",
    title: "Hướng dẫn cơ bản khi sử dụng cổng dịch vụ công",
    excerpt: "Các bước cơ bản để tìm kiếm và thực hiện thủ tục hành chính trực tuyến.",
    body: [
      "Cổng dịch vụ công giúp người dân tìm kiếm thông tin và thực hiện nhiều thủ tục hành chính trực tuyến.",
      "Trước tiên, hãy truy cập đúng địa chỉ chính thức và đăng nhập theo hướng dẫn.",
      "Tìm kiếm thủ tục theo từ khóa, lĩnh vực hoặc cơ quan giải quyết.",
      "Đọc kỹ thành phần hồ sơ, quy trình và điều kiện trước khi bắt đầu kê khai."
    ]
  },
  {
    slug: "hoi-dap-khong-biet-ten-thu-tuc",
    date: "04/11/2026",
    title: "Hỏi đáp: Không biết tên thủ tục hành chính cần tìm thì làm sao?",
    excerpt: "Cách mô tả nhu cầu để xác định đúng thủ tục cần thực hiện.",
    body: [
      "Người dùng hỏi: Tôi chỉ biết việc mình cần làm nhưng không biết tên thủ tục.",
      "APA trả lời: Bạn có thể bắt đầu bằng cách mô tả mục đích, tình huống và kết quả mong muốn.",
      "Người dùng hỏi: Tôi cần cung cấp thông tin gì?",
      "APA trả lời: Hãy nêu địa phương, tình trạng hiện tại và giấy tờ đang có để việc xác định thủ tục chính xác hơn.",
      "Lưu ý: Tình huống hỏi đáp được APA biên soạn nhằm minh họa cách tìm kiếm thông tin."
    ]
  },
  {
    slug: "hoi-dap-ho-so-bi-tu-choi",
    date: "03/11/2026",
    title: "Hỏi đáp: Hồ sơ hành chính bị từ chối thì cần xử lý thế nào?",
    excerpt: "Những việc nên làm khi nhận được thông báo từ chối hồ sơ.",
    body: [
      "Người dùng hỏi: Tôi nhận được thông báo hồ sơ bị từ chối, cần làm gì tiếp theo?",
      "APA trả lời: Trước hết hãy đọc kỹ lý do từ chối và căn cứ được nêu trong thông báo.",
      "Người dùng hỏi: Tôi có thể nộp lại hồ sơ không?",
      "APA trả lời: Điều này phụ thuộc lý do từ chối và quy định của thủ tục. Bạn nên liên hệ cơ quan tiếp nhận nếu chưa rõ cách xử lý.",
      "Hãy lưu thông báo và các tài liệu liên quan để thuận tiện khi cần giải trình hoặc thực hiện lại."
    ]
  }
];
