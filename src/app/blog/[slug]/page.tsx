
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "huong-dan-tra-cuu-thu-tuc-hanh-chinh",
    title: "Hướng dẫn tra cứu thủ tục hành chính trực tuyến",
    excerpt:
      "Cách tìm kiếm thông tin thủ tục, xác định thành phần hồ sơ và chủ động chuẩn bị trước khi thực hiện.",
    category: "Hướng dẫn",
    date: "18/11/2026",
    readTime: "5 phút đọc",
    featured: true,
    content: [
      "Tra cứu thông tin trước khi thực hiện thủ tục hành chính giúp người dân hiểu rõ yêu cầu, chuẩn bị giấy tờ phù hợp và hạn chế việc phải bổ sung hồ sơ nhiều lần.",
      "Trước tiên, hãy xác định chính xác tên thủ tục hoặc công việc cần thực hiện. Nếu chưa biết tên thủ tục, bạn có thể tìm theo nhu cầu thực tế như cấp lại giấy tờ, đăng ký hộ kinh doanh hoặc xác nhận thông tin cá nhân.",
      "Khi xem hướng dẫn, cần chú ý cơ quan giải quyết, đối tượng thực hiện, thành phần hồ sơ, thời hạn xử lý, lệ phí và hình thức nộp hồ sơ. Đây là những thông tin quan trọng để bạn chuẩn bị đúng.",
      "Thông tin thủ tục có thể được cập nhật theo quy định mới. Vì vậy, trước khi nộp hồ sơ, hãy kiểm tra lại hướng dẫn trên cổng thông tin hoặc với cơ quan có thẩm quyền.",
    ],
  },
  {
    slug: "cach-chuan-bi-ho-so-hanh-chinh-day-du",
    title: "Cách chuẩn bị hồ sơ hành chính đầy đủ, hạn chế sai sót",
    excerpt:
      "Những nguyên tắc cơ bản giúp kiểm tra giấy tờ, biểu mẫu và thông tin trước khi nộp hồ sơ.",
    category: "Kinh nghiệm",
    date: "15/11/2026",
    readTime: "4 phút đọc",
    content: [
      "Một bộ hồ sơ được chuẩn bị đầy đủ giúp quá trình tiếp nhận và xử lý thuận lợi hơn. Trước khi bắt đầu, hãy đọc kỹ hướng dẫn của thủ tục đang thực hiện.",
      "Bạn nên lập danh sách từng giấy tờ cần có, đánh dấu những tài liệu đã chuẩn bị và kiểm tra yêu cầu về bản chính, bản sao hoặc bản chứng thực.",
      "Tiếp theo, rà soát các thông tin cá nhân như họ tên, ngày sinh, số định danh, địa chỉ và thông tin liên hệ. Những sai lệch nhỏ cũng có thể khiến hồ sơ cần được điều chỉnh.",
      "Cuối cùng, kiểm tra biểu mẫu, chữ ký, ngày tháng và số lượng bản cần nộp. Nếu có nội dung chưa rõ, hãy hỏi cơ quan tiếp nhận trước khi hoàn thiện.",
    ],
  },
  {
    slug: "nhung-loi-thuong-gap-khi-nop-ho-so",
    title: "Những lỗi thường gặp khi nộp hồ sơ hành chính",
    excerpt:
      "Nhận diện các lỗi phổ biến về giấy tờ, biểu mẫu và thông tin để chủ động phòng tránh.",
    category: "Kinh nghiệm",
    date: "12/11/2026",
    readTime: "5 phút đọc",
    content: [
      "Hồ sơ hành chính có thể bị yêu cầu bổ sung khi thiếu giấy tờ, sử dụng sai biểu mẫu hoặc thông tin kê khai không thống nhất.",
      "Lỗi thường gặp đầu tiên là chưa kiểm tra đầy đủ thành phần hồ sơ. Một số thủ tục có yêu cầu riêng về giấy tờ chứng minh hoặc tài liệu kèm theo.",
      "Lỗi thứ hai là kê khai thông tin không đồng nhất giữa các giấy tờ. Bạn nên đối chiếu dữ liệu trên biểu mẫu với giấy tờ gốc trước khi ký xác nhận.",
      "Ngoài ra, cần chú ý thời hạn sử dụng của giấy tờ, yêu cầu về chữ ký và cách thức nộp hồ sơ. Không nên mặc định rằng mọi thủ tục đều có cùng quy trình.",
    ],
  },
  {
    slug: "doanh-nghiep-can-luu-y-gi-ve-thu-tuc-hanh-chinh",
    title: "Doanh nghiệp cần lưu ý gì khi thực hiện thủ tục hành chính?",
    excerpt:
      "Một số nhóm công việc hành chính doanh nghiệp nên theo dõi và kiểm tra định kỳ.",
    category: "Doanh nghiệp",
    date: "09/11/2026",
    readTime: "6 phút đọc",
    content: [
      "Trong quá trình hoạt động, doanh nghiệp thường xuyên phát sinh công việc liên quan đến đăng ký kinh doanh, thuế, lao động, bảo hiểm và giấy phép chuyên ngành.",
      "Doanh nghiệp nên phân công người phụ trách từng nhóm công việc, lưu trữ hồ sơ có hệ thống và theo dõi các thời hạn cần thực hiện.",
      "Khi có thay đổi về thông tin đăng ký, địa chỉ, người đại diện hoặc nội dung hoạt động, cần kiểm tra nghĩa vụ thông báo và thủ tục cập nhật tương ứng.",
      "Các quy định có thể khác nhau tùy loại hình, ngành nghề và tình trạng hoạt động. Doanh nghiệp nên đối chiếu quy định hiện hành hoặc trao đổi với đơn vị chuyên môn khi cần.",
    ],
  },
  {
    slug: "nguoi-viet-o-nuoc-ngoai-thuc-hien-thu-tuc-tai-viet-nam",
    title: "Người Việt ở nước ngoài cần chuẩn bị gì khi làm thủ tục tại Việt Nam?",
    excerpt:
      "Tổng quan những nội dung cần tìm hiểu khi xử lý giấy tờ Việt Nam từ nước ngoài.",
    category: "Người Việt ở nước ngoài",
    date: "06/11/2026",
    readTime: "6 phút đọc",
    content: [
      "Người Việt Nam đang sinh sống ở nước ngoài có thể phát sinh nhu cầu thực hiện các thủ tục liên quan đến hộ tịch, hộ chiếu, giấy tờ cá nhân hoặc tài sản tại Việt Nam.",
      "Trước khi chuẩn bị hồ sơ, cần xác định thủ tục được thực hiện tại cơ quan đại diện Việt Nam ở nước ngoài hay tại cơ quan có thẩm quyền trong nước.",
      "Đối với giấy tờ được cấp ở nước ngoài, cần tìm hiểu yêu cầu về dịch thuật, chứng nhận hoặc hợp pháp hóa lãnh sự. Không phải mọi loại giấy tờ đều áp dụng cùng một quy trình.",
      "Bạn nên kiểm tra hướng dẫn của cơ quan tiếp nhận tại quốc gia đang sinh sống và tại Việt Nam để xác định chính xác giấy tờ, hình thức nộp và thời hạn giải quyết.",
    ],
  },
  {
    slug: "vai-tro-cua-chuyen-doi-so-trong-hanh-chinh",
    title: "Vai trò của chuyển đổi số trong việc tiếp cận dịch vụ hành chính",
    excerpt:
      "Chuyển đổi số giúp thông tin dễ tiếp cận hơn, nhưng người dùng vẫn cần biết cách kiểm tra nguồn tin.",
    category: "Chuyển đổi số",
    date: "02/11/2026",
    readTime: "5 phút đọc",
    content: [
      "Chuyển đổi số đang thay đổi cách người dân và doanh nghiệp tiếp cận thông tin, thực hiện và theo dõi nhiều thủ tục hành chính.",
      "Việc cung cấp thông tin trực tuyến giúp người dùng có thể tìm hiểu quy trình, chuẩn bị hồ sơ và tra cứu tình trạng xử lý mà không phải trực tiếp đến cơ quan tiếp nhận trong mọi trường hợp.",
      "Tuy nhiên, thông tin trên môi trường số cần được kiểm tra về nguồn phát hành, thời điểm cập nhật và phạm vi áp dụng. Nội dung hướng dẫn tổng quát không thay thế quyết định của cơ quan có thẩm quyền.",
      "Một nền tảng hỗ trợ tốt cần trình bày thông tin dễ hiểu, chỉ rõ nguồn tham khảo và giúp người dùng biết bước tiếp theo cần thực hiện.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
