
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts = [
  {
    slug: "huong-dan-tra-cuu-thu-tuc-hanh-chinh",
    title: "Hướng dẫn tra cứu thủ tục hành chính trực tuyến",
    excerpt:
      "Cách tìm kiếm thông tin thủ tục, xác định thành phần hồ sơ và chủ động chuẩn bị trước khi thực hiện.",
    category: "Hướng dẫn",
    date: "18/11/2026",
    readTime: "5 phút đọc",
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

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết | APA" };
  }

  return {
    title: `${post.title} | APA`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="article-page">
      <header className="article-hero">
        <div className="article-container">
          <Link href="/blog" className="back-link">
            ← Quay lại Blog APA
          </Link>
          <div className="article-category">{post.category}</div>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          <div className="article-meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>APA · Kiến thức hành chính</span>
          </div>
        </div>
      </header>

      <div className="article-container article-layout">
        <article className="article-main">
          <div className="article-cover">
            <span className="cover-star">✦</span>
            <strong>APA</strong>
            <span>HÀNH CHÍNH SỐ</span>
          </div>

          <div className="article-body">
            <div className="article-intro">
              {post.excerpt}
            </div>

            {post.content.map((paragraph, index) => (
              <section className="article-paragraph" key={index}>
                {index === 0 && <h2>Tổng quan</h2>}
                {index === 1 && <h2>Những nội dung cần lưu ý</h2>}
                {index === 3 && <h2>Chủ động kiểm tra thông tin</h2>}
                <p>{paragraph}</p>
              </section>
            ))}

            <div className="article-disclaimer">
              <strong>Lưu ý từ APA</strong>
              <p>
                Nội dung bài viết mang tính chất tham khảo và hướng dẫn chung,
                không thay thế văn bản pháp luật hoặc hướng dẫn chính thức của
                cơ quan có thẩm quyền. Người đọc nên kiểm tra quy định hiện
                hành trước khi thực hiện thủ tục.
              </p>
            </div>

            <div className="article-author">
              <div className="author-logo">A</div>
              <div>
                <strong>Ban biên tập APA</strong>
                <span>Chia sẻ kiến thức hành chính dễ hiểu và hữu ích</span>
              </div>
            </div>
          </div>
        </article>

        <aside className="article-sidebar">
          <div className="sidebar-card">
            <span className="sidebar-kicker">KHÁM PHÁ APA</span>
            <h3>Chủ động hơn với thủ tục hành chính</h3>
            <p>
              Tìm hiểu thông tin và chuẩn bị hồ sơ thuận tiện hơn cùng APA.
            </p>
            <Link href="/thu-tuc" className="sidebar-button">
              Tra cứu thủ tục →
            </Link>
          </div>

          <div className="sidebar-card related-card">
            <span className="sidebar-kicker">ĐỌC TIẾP</span>
            <h3>Bài viết liên quan</h3>
            {relatedPosts.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                className="related-link"
                key={item.slug}
              >
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <small>{item.readTime} →</small>
              </Link>
            ))}
            <Link href="/blog" className="all-posts">
              Xem tất cả bài viết →
            </Link>
          </div>
        </aside>
      </div>

      <style>{`
        .article-page{min-height:100vh;background:#f5f8fd;color:#142b49;font-family:Inter,"Segoe UI",Arial,sans-serif}
        .article-container{width:min(1080px,calc(100% - 48px));margin:0 auto}
        .article-hero{position:relative;overflow:hidden;padding:65px 0 72px;color:#fff;background:linear-gradient(125deg,#071a35,#0c3568 65%,#1763a9)}
        .article-hero:before{position:absolute;inset:0;content:"";opacity:.1;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:40px 40px}
        .article-hero .article-container{position:relative;z-index:1}
        .back-link{display:inline-block;margin-bottom:32px;color:#b9dcff;font-size:13px;font-weight:700;text-decoration:none}
        .back-link:hover{color:#fff}
        .article-category{display:table;padding:7px 12px;color:#d9edff;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:30px;font-size:12px;font-weight:750}
        .article-hero h1{max-width:850px;margin:20px 0 15px;color:#fff;font-size:clamp(30px,4.5vw,48px);line-height:1.2;letter-spacing:-1.2px;font-weight:850}
        .article-excerpt{max-width:760px;color:#d4e5f8;font-size:16px;line-height:1.8}
        .article-meta{display:flex;flex-wrap:wrap;gap:20px;margin-top:24px;color:#b9d5f0;font-size:12px}
        .article-layout{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:30px;align-items:start;padding-top:48px;padding-bottom:80px}
        .article-main{min-width:0;overflow:hidden;background:#fff;border:1px solid #e0e9f3;border-radius:18px;box-shadow:0 8px 28px rgba(12,43,83,.05)}
        .article-cover{position:relative;display:flex;min-height:220px;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;color:#fff;background:radial-gradient(circle at 70% 30%,rgba(65,158,255,.45),transparent 35%),linear-gradient(135deg,#09244a,#1764ad)}
        .article-cover:before{position:absolute;inset:0;content:"";opacity:.12;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:30px 30px}
        .cover-star{position:relative;color:#7ecaff;font-size:35px}
        .article-cover strong{position:relative;font-size:65px;line-height:1;letter-spacing:-4px}
        .article-cover>span:last-child{position:relative;margin-top:8px;color:#c9e3ff;font-size:10px;letter-spacing:3px}
        .article-body{padding:38px 42px}
        .article-intro{margin-bottom:30px;padding:20px 22px;color:#174d85;background:#eff6ff;border-left:4px solid #2781df;border-radius:0 10px 10px 0;font-size:16px;font-weight:650;line-height:1.85}
        .article-paragraph h2{margin:30px 0 12px;color:#103866;font-size:21px;font-weight:850}
        .article-paragraph p{margin:0 0 20px;color:#405772;font-size:15px;line-height:2}
        .article-disclaimer{margin-top:35px;padding:20px 22px;background:#fff8e9;border:1px solid #f2e3bd;border-radius:12px}
        .article-disclaimer strong{color:#79531a;font-size:14px}
        .article-disclaimer p{margin:8px 0 0;color:#755f3d;font-size:13px;line-height:1.8}
        .article-author{display:flex;align-items:center;gap:13px;margin-top:32px;padding-top:25px;border-top:1px solid #e8eef5}
        .author-logo{display:grid;width:43px;height:43px;flex-shrink:0;place-items:center;color:#fff;background:linear-gradient(135deg,#0b3262,#2383d2);border-radius:50%;font-size:21px;font-weight:900}
        .article-author strong,.article-author span{display:block}
        .article-author strong{color:#183c65;font-size:13px}
        .article-author span{margin-top:4px;color:#7b8da3;font-size:11px}
        .article-sidebar{display:grid;gap:18px}
        .sidebar-card{padding:23px;background:#fff;border:1px solid #e0e9f3;border-radius:15px;box-shadow:0 6px 20px rgba(12,43,83,.04)}
        .sidebar-kicker{color:#2375c8;font-size:10px;font-weight:850;letter-spacing:1.4px}
        .sidebar-card h3{margin:10px 0;color:#10345e;font-size:19px;line-height:1.45;font-weight:850}
        .sidebar-card>p{color:#667b93;font-size:13px;line-height:1.8}
        .sidebar-button{display:block;margin-top:17px;padding:12px;text-align:center;color:#fff;background:#1765c2;border-radius:9px;font-size:12px;font-weight:800;text-decoration:none}
        .sidebar-button:hover{background:#0b3974}
        .related-card h3{margin-bottom:16px}
        .related-link{display:block;padding:15px 0;border-top:1px solid #edf1f6;text-decoration:none}
        .related-link span,.related-link strong,.related-link small{display:block}
        .related-link span{color:#2674be;font-size:10px;font-weight:750}
        .related-link strong{margin:6px 0;color:#173c65;font-size:13px;line-height:1.5}
        .related-link small{color:#8494a8;font-size:10px}
        .related-link:hover strong{color:#1768e8}
        .all-posts{display:block;margin-top:10px;color:#1768d4;font-size:12px;font-weight:800;text-decoration:none}
        @media(max-width:850px){.article-layout{grid-template-columns:1fr}.article-sidebar{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.article-container{width:calc(100% - 32px)}.article-hero{padding:42px 0 48px}.back-link{margin-bottom:25px}.article-hero h1{font-size:30px}.article-excerpt{font-size:14px}.article-meta{gap:12px}.article-layout{padding-top:25px;padding-bottom:50px;gap:20px}.article-cover{min-height:170px}.article-body{padding:24px 20px}.article-intro{padding:16px;font-size:14px}.article-paragraph h2{font-size:19px}.article-paragraph p{font-size:14px;line-height:1.9}.article-sidebar{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
      `}</style>
    </main>
  );
}
