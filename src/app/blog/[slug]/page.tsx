
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts as originalPosts } from "@/lib/site";
import { additionalPosts } from "@/lib/blog-posts";

const allPosts = [...additionalPosts, ...originalPosts];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết | APA" };
  }

  return {
    title: `${post.title} | APA - Trợ lý hành chính số`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="article-page">
      <section className="article-hero">
        <div className="article-container">
          <div className="article-breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/blog">Góc thông tin</Link>
            <span>/</span>
            <span>Bài viết</span>
          </div>

          <div className="article-category">APA KNOWLEDGE CENTER</div>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>

          <div className="article-meta">
            <span>APA BIÊN SOẠN</span>
            <span>{post.date}</span>
            <span>THÔNG TIN HÀNH CHÍNH</span>
          </div>
        </div>
      </section>

      <section className="article-main">
        <div className="article-container article-layout">
          <article className="article-content">
            <div className="article-cover">
              <span>APA</span>
              <strong>HÀNH CHÍNH SỐ</strong>
              <small>THÔNG TIN • HƯỚNG DẪN • ĐỒNG HÀNH</small>
            </div>

            <div className="article-body">
              <p className="article-intro">{post.excerpt}</p>

              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="article-note">
              <strong>LƯU Ý TỪ APA</strong>
              <p>
                Nội dung mang tính chất tham khảo. Thành phần hồ sơ, thời hạn
                và cách thức thực hiện có thể thay đổi theo quy định hiện hành.
                Bạn nên kiểm tra thông tin tại cơ quan có thẩm quyền trước khi
                thực hiện thủ tục.
              </p>
            </div>

            <div className="article-share">
              <span>APA DIGITAL ASSISTANT</span>
              <Link href="/blog">← Quay lại chuyên mục</Link>
            </div>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <span className="sidebar-eyebrow">VỀ APA</span>
              <h2>Trợ lý hành chính số</h2>
              <p>
                Đồng hành cùng bạn trong quá trình tìm hiểu thông tin và chuẩn
                bị các thủ tục hành chính.
              </p>
              <Link href="/giai-phap">Khám phá giải pháp →</Link>
            </div>

            <div className="sidebar-card sidebar-links">
              <span className="sidebar-eyebrow">KHÁM PHÁ</span>
              <Link href="/blog">Góc thông tin</Link>
              <Link href="/giai-phap">Giải pháp APA</Link>
              <Link href="/">Trang chủ</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="related-section">
        <div className="article-container">
          <div className="related-heading">
            <div>
              <span className="section-eyebrow">ĐỌC TIẾP CÙNG APA</span>
              <h2>Bài viết liên quan</h2>
            </div>
            <Link href="/blog">Xem tất cả →</Link>
          </div>

          <div className="related-grid">
            {relatedPosts.map((item, index) => (
              <Link
                href={`/blog/${item.slug}`}
                className="related-card"
                key={item.slug}
              >
                <div className={`related-art related-art-${index + 1}`}>
                  <span>0{index + 1}</span>
                  <strong>APA</strong>
                  <small>KNOWLEDGE CENTER</small>
                </div>

                <div className="related-card-content">
                  <span>THÔNG TIN HÀNH CHÍNH</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="related-date">
                    <span>{item.date}</span>
                    <b>→</b>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="article-bottom">
        <div className="article-container bottom-inner">
          <div>
            <span>APA DIGITAL ASSISTANT</span>
            <h2>Đơn giản hóa hành trình thủ tục hành chính</h2>
          </div>
          <Link href="/giai-phap">Tìm hiểu APA →</Link>
        </div>
      </section>

      <style>{`
        .article-page {
          color: #17395e;
          background: #fff;
        }

        .article-container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .article-hero {
          padding: 35px 0 55px;
          background: linear-gradient(135deg, #102b50, #174c7e);
          color: #fff;
        }

        .article-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 42px;
          color: #b8cee2;
          font-size: 12px;
        }

        .article-breadcrumb a {
          color: #fff;
          text-decoration: none;
        }

        .article-category,
        .sidebar-eyebrow,
        .section-eyebrow {
          color: #4b9bd5;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .article-category {
          color: #9cccf2;
        }

        .article-hero h1 {
          max-width: 850px;
          margin: 15px 0;
          font-size: clamp(30px, 5vw, 48px);
          line-height: 1.2;
          letter-spacing: -1.2px;
        }

        .article-excerpt {
          max-width: 720px;
          color: #d0dfed;
          font-size: 16px;
          line-height: 1.8;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 25px;
          margin-top: 28px;
          color: #b9d0e5;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .article-main {
          padding: 55px 0 75px;
        }

        .article-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 45px;
          align-items: start;
        }

        .article-cover {
          min-height: 210px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 8px;
          background: linear-gradient(135deg, #e5f1fb, #c5dff2);
          color: #225c91;
        }

        .article-cover span {
          font-size: 54px;
          font-weight: 950;
          letter-spacing: 5px;
        }

        .article-cover strong {
          font-size: 13px;
          letter-spacing: 3px;
        }

        .article-cover small {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .article-body {
          padding-top: 25px;
          color: #40566d;
          font-size: 16px;
          line-height: 1.95;
        }

        .article-body p {
          margin: 0 0 20px;
        }

        .article-body .article-intro {
          color: #17395e;
          font-size: 19px;
          font-weight: 700;
        }

        .article-note {
          margin-top: 35px;
          padding: 22px 25px;
          border-left: 4px solid #2677b9;
          background: #f2f7fc;
        }

        .article-note strong {
          color: #1765b5;
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        .article-note p {
          margin: 10px 0 0;
          color: #53677c;
          font-size: 13px;
          line-height: 1.8;
        }

        .article-share {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid #e8eef4;
        }

        .article-share span {
          color: #9aa8b8;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }

        .article-share a {
          color: #1765b5;
          font-size: 11px;
          font-weight: 850;
          text-decoration: none;
        }

        .article-sidebar {
          display: grid;
          gap: 18px;
        }

        .sidebar-card {
          padding: 24px;
          border: 1px solid #e5edf4;
          border-radius: 8px;
          background: #fff;
        }

        .sidebar-card h2 {
          margin: 12px 0;
          color: #17395e;
          font-size: 21px;
        }

        .sidebar-card p {
          color: #718297;
          font-size: 13px;
          line-height: 1.8;
        }

        .sidebar-card > a {
          display: inline-block;
          margin-top: 10px;
          color: #1765b5;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
        }

        .sidebar-links {
          display: grid;
          gap: 15px;
        }

        .sidebar-links > a {
          margin: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #edf1f5;
        }

        .related-section {
          padding: 70px 0 80px;
          background: #f5f8fc;
        }

        .related-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .related-heading h2 {
          margin: 9px 0 0;
          color: #102b50;
          font-size: 30px;
          letter-spacing: -.8px;
        }

        .related-heading > a {
          color: #1765b5;
          font-size: 11px;
          font-weight: 850;
          text-decoration: none;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .related-card {
          overflow: hidden;
          border: 1px solid #e4ebf2;
          border-radius: 8px;
          background: #fff;
          color: inherit;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }

        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(16,43,80,.09);
        }

        .related-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 125px;
          background: linear-gradient(135deg, #dcecf9, #bcd8ef);
          color: #225c91;
        }

        .related-art-2 {
          background: linear-gradient(135deg, #e4eee9, #c8e0d4);
        }

        .related-art-3 {
          background: linear-gradient(135deg, #e9e6f5, #d2cbea);
        }

        .related-art > span {
          position: absolute;
          top: 10px;
          left: 13px;
          color: rgba(16,43,80,.35);
          font-size: 20px;
          font-weight: 900;
        }

        .related-art strong {
          font-size: 30px;
          letter-spacing: 3px;
        }

        .related-art small {
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .related-card-content {
          padding: 17px;
        }

        .related-card-content > span {
          color: #2677b9;
          font-size: 9px;
          font-weight: 850;
        }

        .related-card h3 {
          margin: 9px 0;
          color: #17395e;
          font-size: 15px;
          line-height: 1.5;
        }

        .related-card p {
          display: -webkit-box;
          overflow: hidden;
          margin: 0;
          color: #7b8b9d;
          font-size: 11px;
          line-height: 1.7;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .related-date {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 15px;
          padding-top: 12px;
          border-top: 1px solid #edf1f5;
          color: #9aa8b8;
          font-size: 10px;
        }

        .related-date b {
          color: #1765b5;
          font-size: 17px;
        }

        .article-bottom {
          padding: 45px 0;
          background: #102b50;
          color: #fff;
        }

        .bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .bottom-inner > div > span {
          color: #91c8f3;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .bottom-inner h2 {
          max-width: 650px;
          margin: 10px 0 0;
          font-size: 24px;
        }

        .bottom-inner > a {
          flex-shrink: 0;
          padding: 13px 20px;
          border-radius: 5px;
          background: #fff;
          color: #174c7e;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          .article-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .article-sidebar {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .related-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .article-container {
            width: min(100% - 30px, 1120px);
          }

          .article-hero {
            padding: 25px 0 38px;
          }

          .article-breadcrumb {
            margin-bottom: 28px;
          }

          .article-meta {
            gap: 10px 15px;
          }

          .article-main {
            padding: 35px 0 50px;
          }

          .article-cover {
            min-height: 165px;
          }

          .article-cover span {
            font-size: 43px;
          }

          .article-body {
            font-size: 15px;
          }

          .article-sidebar {
            grid-template-columns: 1fr;
          }

          .related-section {
            padding: 48px 0;
          }

          .related-heading {
            align-items: start;
          }

          .related-heading h2 {
            font-size: 24px;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .bottom-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .bottom-inner h2 {
            font-size: 21px;
          }
        }
      `}</style>
    </main>
  );
}
