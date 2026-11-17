
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog kiến thức hành chính | APA",
  description:
    "Kiến thức, hướng dẫn và kinh nghiệm giúp người dân, doanh nghiệp chủ động hơn khi thực hiện thủ tục hành chính.",
};

const posts = [
  {
    slug: "huong-dan-tra-cuu-thu-tuc-hanh-chinh",
    title: "Hướng dẫn tra cứu thủ tục hành chính trực tuyến",
    excerpt:
      "Cách tìm kiếm thông tin thủ tục, xác định thành phần hồ sơ và chủ động chuẩn bị trước khi thực hiện.",
    category: "Hướng dẫn",
    date: "18/11/2026",
    readTime: "5 phút đọc",
    featured: true,
  },
  {
    slug: "cach-chuan-bi-ho-so-hanh-chinh-day-du",
    title: "Cách chuẩn bị hồ sơ hành chính đầy đủ, hạn chế sai sót",
    excerpt:
      "Những nguyên tắc cơ bản giúp kiểm tra giấy tờ, biểu mẫu và thông tin trước khi nộp hồ sơ.",
    category: "Kinh nghiệm",
    date: "15/11/2026",
    readTime: "4 phút đọc",
  },
  {
    slug: "nhung-loi-thuong-gap-khi-nop-ho-so",
    title: "Những lỗi thường gặp khi nộp hồ sơ hành chính",
    excerpt:
      "Nhận diện các lỗi phổ biến về giấy tờ, biểu mẫu và thông tin để chủ động phòng tránh.",
    category: "Kinh nghiệm",
    date: "12/11/2026",
    readTime: "5 phút đọc",
  },
  {
    slug: "doanh-nghiep-can-luu-y-gi-ve-thu-tuc-hanh-chinh",
    title: "Doanh nghiệp cần lưu ý gì khi thực hiện thủ tục hành chính?",
    excerpt:
      "Một số nhóm công việc hành chính doanh nghiệp nên theo dõi và kiểm tra định kỳ.",
    category: "Doanh nghiệp",
    date: "09/11/2026",
    readTime: "6 phút đọc",
  },
  {
    slug: "nguoi-viet-o-nuoc-ngoai-thuc-hien-thu-tuc-tai-viet-nam",
    title: "Người Việt ở nước ngoài cần chuẩn bị gì khi làm thủ tục tại Việt Nam?",
    excerpt:
      "Tổng quan những nội dung cần tìm hiểu khi xử lý giấy tờ Việt Nam từ nước ngoài.",
    category: "Người Việt ở nước ngoài",
    date: "06/11/2026",
    readTime: "6 phút đọc",
  },
  {
    slug: "vai-tro-cua-chuyen-doi-so-trong-hanh-chinh",
    title: "Vai trò của chuyển đổi số trong việc tiếp cận dịch vụ hành chính",
    excerpt:
      "Chuyển đổi số giúp thông tin dễ tiếp cận hơn, nhưng người dùng vẫn cần biết cách kiểm tra nguồn tin.",
    category: "Chuyển đổi số",
    date: "02/11/2026",
    readTime: "5 phút đọc",
  },
];

export default function BlogPage() {
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const otherPosts = posts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <main className="apa-blog">
      <section className="blog-hero">
        <div className="blog-container hero-inner">
          <span className="eyebrow">APA DIGITAL · KNOWLEDGE</span>
          <h1>
            Kiến thức hành chính,
            <br />
            <span>dễ hiểu và dễ ứng dụng.</span>
          </h1>
          <p>
            Cập nhật hướng dẫn, kinh nghiệm và thông tin hữu ích để bạn chủ
            động hơn trong các công việc hành chính.
          </p>
          <div className="hero-note">
            <span className="pulse" />
            Chia sẻ kiến thức cùng APA
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring" />
          <div className="orbit-core">APA</div>
          <span className="orbit-tag tag-one">Tra cứu</span>
          <span className="orbit-tag tag-two">Hướng dẫn</span>
          <span className="orbit-tag tag-three">Chia sẻ</span>
        </div>
      </section>

      <section className="blog-container blog-content">
        <div className="section-heading">
          <div>
            <span className="kicker">NỘI DUNG NỔI BẬT</span>
            <h2>Bài viết dành cho bạn</h2>
          </div>
          <span className="count">{posts.length} bài viết</span>
        </div>

        {featuredPost && (
          <article className="featured">
            <div className="featured-visual">
              <span className="visual-label">APA / FEATURED</span>
              <div className="visual-logo">
                <span>✦</span>
                <strong>APA</strong>
                <small>HÀNH CHÍNH SỐ</small>
              </div>
              <span className="visual-number">01</span>
            </div>
            <div className="featured-info">
              <span className="category">{featuredPost.category}</span>
              <h3>
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>
              <p>{featuredPost.excerpt}</p>
              <div className="meta">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link className="read-link" href={`/blog/${featuredPost.slug}`}>
                Đọc bài viết <span>→</span>
              </Link>
            </div>
          </article>
        )}

        <div className="section-heading list-heading">
          <div>
            <span className="kicker">KHÁM PHÁ THÊM</span>
            <h2>Tất cả bài viết</h2>
          </div>
        </div>

        <div className="blog-grid">
          {otherPosts.map((post, index) => (
            <article className="blog-card" key={post.slug}>
              <Link
                className="card-visual"
                href={`/blog/${post.slug}`}
                aria-label={`Đọc bài viết ${post.title}`}
              >
                <span className="card-number">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <span className="card-mark">APA<span>+</span></span>
                <span className="card-category">{post.category}</span>
              </Link>
              <div className="card-body">
                <div className="meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="read-link" href={`/blog/${post.slug}`}>
                  Xem chi tiết <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="bottom-cta">
          <div>
            <span className="kicker">APA ĐỒNG HÀNH CÙNG BẠN</span>
            <h2>Cần tìm hiểu một thủ tục cụ thể?</h2>
            <p>
              Khám phá khu vực tra cứu thủ tục để tìm thông tin và hướng dẫn
              phù hợp với nhu cầu của bạn.
            </p>
          </div>
          <Link href="/thu-tuc" className="cta-button">
            Tra cứu thủ tục <span>→</span>
          </Link>
        </section>
      </section>

      <style>{`
        .apa-blog{color:#142b49;background:#f5f8fd;font-family:Inter,"Segoe UI",Arial,sans-serif}
        .blog-container{width:min(1160px,calc(100% - 48px));margin:0 auto}
        .blog-hero{position:relative;display:flex;align-items:center;min-height:390px;overflow:hidden;color:#fff;background:linear-gradient(120deg,#071a35,#0b2d59 62%,#14519a)}
        .blog-hero:before{position:absolute;inset:0;content:"";opacity:.12;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:42px 42px}
        .hero-inner{position:relative;z-index:2;padding-top:68px;padding-bottom:68px}
        .eyebrow,.kicker{display:inline-block;color:#4b9cff;font-size:11px;font-weight:850;letter-spacing:1.7px}
        .blog-hero h1{max-width:720px;margin:18px 0;color:#fff;font-size:clamp(36px,5vw,57px);line-height:1.15;letter-spacing:-1.8px;font-weight:850}
        .blog-hero h1 span{color:#79caff}
        .blog-hero p{max-width:620px;margin:0;color:#d4e4f7;font-size:16px;line-height:1.85}
        .hero-note{display:flex;align-items:center;gap:10px;margin-top:25px;color:#d8eaff;font-size:13px;font-weight:700}
        .pulse{width:8px;height:8px;border-radius:50%;background:#45d5a1;box-shadow:0 0 0 5px rgba(69,213,161,.13)}
        .hero-orbit{position:absolute;top:50%;right:max(7%,calc((100vw - 1160px)/2));width:290px;height:290px;transform:translateY(-50%);opacity:.9}
        .orbit-ring{position:absolute;inset:12px;border:1px dashed rgba(173,216,255,.45);border-radius:50%;animation:orbit 35s linear infinite}
        .orbit-core{position:absolute;top:50%;left:50%;display:grid;width:125px;height:125px;color:#fff;background:radial-gradient(circle at 35% 25%,#2869ad,#071a35 75%);border:1px solid #8bdcff;border-radius:50%;box-shadow:0 0 45px rgba(51,160,255,.4);font-size:30px;font-weight:900;place-items:center;transform:translate(-50%,-50%)}
        .orbit-tag{position:absolute;padding:8px 13px;color:#173d6c;background:#fff;border:1px solid #d7eaff;border-radius:99px;box-shadow:0 8px 24px rgba(0,0,0,.13);font-size:12px;font-weight:800}
        .tag-one{top:23px;left:95px}.tag-two{right:-3px;top:135px}.tag-three{bottom:22px;left:22px}
        .blog-content{padding-top:65px;padding-bottom:75px}
        .section-heading{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:25px}
        .section-heading h2{margin:8px 0 0;color:#09244a;font-size:clamp(25px,3vw,32px);font-weight:850;letter-spacing:-.8px}
        .count{padding:7px 12px;color:#245b9b;background:#e8f2ff;border:1px solid #d5e7fc;border-radius:99px;font-size:12px;font-weight:750}
        .featured{display:grid;grid-template-columns:.9fr 1.1fr;overflow:hidden;background:#fff;border:1px solid #dfe8f3;border-radius:20px;box-shadow:0 12px 32px rgba(12,43,83,.07)}
        .featured-visual{position:relative;display:grid;min-height:310px;overflow:hidden;color:#fff;background:radial-gradient(circle at 70% 35%,rgba(64,153,255,.5),transparent 35%),linear-gradient(135deg,#09244a,#1456a2);place-items:center}
        .featured-visual:before,.card-visual:before{position:absolute;inset:0;content:"";opacity:.14;background-image:linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px);background-size:28px 28px}
        .visual-label{position:absolute;top:22px;left:24px;color:#c5e1ff;font-size:10px;font-weight:800;letter-spacing:1.5px}
        .visual-logo{position:relative;display:flex;flex-direction:column;align-items:center;color:#fff}
        .visual-logo>span{color:#79caff;font-size:38px}.visual-logo strong{font-size:62px;line-height:1.1;letter-spacing:-4px}.visual-logo small{color:#c8e1ff;font-size:10px;letter-spacing:3px}
        .visual-number{position:absolute;right:22px;bottom:12px;color:rgba(255,255,255,.22);font-size:60px;font-weight:900}
        .featured-info{align-self:center;padding:36px 40px}
        .category{display:inline-block;padding:6px 11px;color:#1761b8;background:#eaf3ff;border-radius:99px;font-size:11px;font-weight:800}
        .featured-info h3{margin:17px 0 12px;color:#09244a;font-size:clamp(23px,2.5vw,30px);line-height:1.35;font-weight:850}
        .featured-info h3 a,.blog-card h3 a{color:inherit;text-decoration:none}
        .featured-info h3 a:hover,.blog-card h3 a:hover{color:#1768e8}
        .featured-info>p,.card-body>p{color:#566b85;font-size:14px;line-height:1.85}
        .meta{display:flex;flex-wrap:wrap;gap:15px;color:#7b8da3;font-size:11px;font-weight:650}
        .read-link{display:inline-flex;align-items:center;gap:10px;margin-top:20px;color:#1768e8;font-size:13px;font-weight:850;text-decoration:none}
        .read-link span{transition:transform .2s ease}.read-link:hover span{transform:translateX(4px)}
        .list-heading{margin-top:65px}
        .blog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
        .blog-card{overflow:hidden;background:#fff;border:1px solid #dfe8f3;border-radius:16px;box-shadow:0 5px 18px rgba(12,43,83,.045);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
        .blog-card:hover{transform:translateY(-4px);border-color:#b8d3f2;box-shadow:0 13px 28px rgba(12,43,83,.1)}
        .card-visual{position:relative;display:flex;min-height:165px;align-items:center;justify-content:center;overflow:hidden;color:#fff;background:linear-gradient(135deg,#0a2850,#1768b9);text-decoration:none}
        .blog-card:nth-child(3n+2) .card-visual{background:linear-gradient(135deg,#103d67,#087d9c)}
        .blog-card:nth-child(3n) .card-visual{background:linear-gradient(135deg,#25265e,#6550a9)}
        .card-number{position:absolute;top:14px;left:17px;color:rgba(255,255,255,.7);font-size:10px;font-weight:800;letter-spacing:1px}
        .card-mark{position:relative;color:rgba(255,255,255,.95);font-size:42px;font-weight:900;letter-spacing:-3px}
        .card-mark span{color:#79caff}
        .card-category{position:absolute;right:14px;bottom:13px;padding:5px 9px;color:#e6f4ff;background:rgba(4,24,48,.35);border:1px solid rgba(255,255,255,.2);border-radius:99px;font-size:10px;font-weight:750}
        .card-body{padding:20px}
        .blog-card h3{margin:13px 0 8px;color:#09244a;font-size:18px;line-height:1.45;font-weight:850}
        .card-body>p{display:-webkit-box;min-height:75px;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3}
        .blog-card .read-link{margin-top:9px}
        .bottom-cta{display:flex;align-items:center;justify-content:space-between;gap:25px;margin-top:70px;padding:32px 36px;background:linear-gradient(115deg,#eaf3ff,#f4f9ff);border:1px solid #d8e8fa;border-radius:18px}
        .bottom-cta h2{margin:8px 0;color:#09244a;font-size:23px;font-weight:850}
        .bottom-cta p{max-width:650px;margin:0;color:#566b85;font-size:13px;line-height:1.8}
        .cta-button{display:inline-flex;flex-shrink:0;align-items:center;gap:12px;padding:13px 19px;color:#fff;background:#125fc9;border-radius:10px;font-size:13px;font-weight:800;text-decoration:none}
        .cta-button:hover{color:#fff;background:#092f69}
        @keyframes orbit{to{transform:rotate(360deg)}}
        @media(max-width:900px){.hero-orbit{right:-80px;opacity:.35}.blog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.featured-info{padding:28px}}
        @media(max-width:650px){.blog-container{width:calc(100% - 34px)}.blog-hero{min-height:340px}.hero-inner{padding-top:52px;padding-bottom:52px}.blog-hero h1{font-size:35px;letter-spacing:-1px}.blog-hero p{font-size:14px}.hero-orbit{right:-145px;opacity:.2}.blog-content{padding-top:42px;padding-bottom:50px}.section-heading{align-items:flex-start}.section-heading h2{font-size:25px}.featured{grid-template-columns:1fr}.featured-visual{min-height:205px}.featured-info{padding:23px}.featured-info h3{font-size:23px}.list-heading{margin-top:45px}.blog-grid{grid-template-columns:1fr;gap:15px}.card-visual{min-height:145px}.card-body>p{min-height:0}.bottom-cta{align-items:flex-start;flex-direction:column;margin-top:45px;padding:24px}.bottom-cta h2{font-size:21px}}
        @media(prefers-reduced-motion:reduce){.orbit-ring{animation:none}.blog-card,.read-link span{transition:none}}
      `}</style>
    </main>
  );
}
