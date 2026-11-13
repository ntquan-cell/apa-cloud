
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="blog-detail">
      <section className="blog-detail-hero">
        <div className="blog-detail-container">
          <Link href="/blog" className="blog-back">
            ← Quay lại Blog APA
          </Link>

          <div className="blog-detail-label">
            <span />
            KIẾN THỨC HÀNH CHÍNH SỐ
          </div>

          <div className="blog-date">{post.date}</div>

          <h1>{post.title}</h1>

          <p className="blog-excerpt">{post.excerpt}</p>
        </div>
      </section>

      <div className="blog-detail-container blog-detail-layout">
        <article className="blog-article">
          <div className="article-heading">
            <span className="article-heading-line" />
            <span>NỘI DUNG BÀI VIẾT</span>
          </div>

          <div className="article-content">
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="article-footer">
            <div>
              <strong>APA – Trợ lý hành chính số</strong>
              <span>Đồng hành cùng bạn trong các thủ tục hành chính.</span>
            </div>

            <Link href="/lien-he">Liên hệ APA →</Link>
          </div>
        </article>

        <aside className="blog-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-icon">✦</div>
            <h3>Bạn cần hỗ trợ thủ tục?</h3>
            <p>
              APA giúp bạn tìm hiểu thông tin, chuẩn bị hồ sơ và định hướng
              các bước thực hiện.
            </p>
            <Link href="/thu-tuc" className="sidebar-button">
              Tra cứu thủ tục →
            </Link>
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-card">
              <h3>Bài viết liên quan</h3>

              {relatedPosts.map((item) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={item.slug}
                  className="related-link"
                >
                  <span>{item.date}</span>
                  <strong>{item.title}</strong>
                  <small>Đọc bài viết →</small>
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>

      <style>{`
        .blog-detail {
          min-height: 100vh;
          background: #f5f8fc;
          color: #172b4d;
          font-family: Arial, Helvetica, sans-serif;
        }

        .blog-detail-container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blog-detail-hero {
          position: relative;
          overflow: hidden;
          padding: 65px 0 85px;
          background: linear-gradient(120deg, #10264b, #174b91);
          color: white;
        }

        .blog-detail-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -100px;
          top: -180px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.035),
            0 0 0 90px rgba(255,255,255,.025);
          pointer-events: none;
        }

        .blog-back {
          display: inline-block;
          margin-bottom: 45px;
          color: #dbeafe;
          font-size: 14px;
          text-decoration: none;
          transition: color .2s ease;
        }

        .blog-back:hover {
          color: white;
        }

        .blog-detail-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #93c5fd;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .blog-detail-label span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
        }

        .blog-date {
          margin-top: 25px;
          color: #bfdbfe;
          font-size: 13px;
        }

        .blog-detail-hero h1 {
          position: relative;
          z-index: 1;
          max-width: 850px;
          margin: 15px 0 20px;
          color: white;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.2;
          letter-spacing: -1.4px;
        }

        .blog-excerpt {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0;
          color: #dbeafe;
          font-size: 17px;
          line-height: 1.8;
        }

        .blog-detail-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 35px;
          align-items: start;
          padding-top: 55px;
          padding-bottom: 90px;
        }

        .blog-article {
          min-width: 0;
          padding: 45px;
          border: 1px solid #e7edf5;
          border-radius: 18px;
          background: white;
          box-shadow: 0 12px 35px rgba(15,35,70,.045);
          animation: article-enter .65s ease both;
        }

        .article-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 22px;
          border-bottom: 1px solid #edf1f6;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .article-heading-line {
          width: 24px;
          height: 3px;
          border-radius: 5px;
          background: #2563eb;
        }

        .article-content {
          padding-top: 18px;
        }

        .article-content p {
          margin: 0 0 22px;
          color: #334155;
          font-size: 16px;
          line-height: 2;
          white-space: pre-line;
        }

        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 40px;
          padding-top: 25px;
          border-top: 1px solid #edf1f6;
        }

        .article-footer div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .article-footer strong {
          color: #10264b;
          font-size: 14px;
        }

        .article-footer span {
          color: #64748b;
          font-size: 12px;
        }

        .article-footer a {
          color: #2563eb;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .sidebar-card,
        .related-card {
          padding: 25px;
          border: 1px solid #e7edf5;
          border-radius: 16px;
          background: white;
          box-shadow: 0 10px 30px rgba(15,35,70,.035);
        }

        .sidebar-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 22px;
        }

        .sidebar-card h3,
        .related-card h3 {
          margin: 17px 0 10px;
          color: #10264b;
          font-size: 18px;
        }

        .sidebar-card p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        .sidebar-button {
          display: inline-flex;
          margin-top: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: background .2s ease;
        }

        .sidebar-button:hover {
          background: #1d4ed8;
        }

        .related-card h3 {
          margin-top: 0;
          margin-bottom: 18px;
        }

        .related-link {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 16px 0;
          border-top: 1px solid #edf1f6;
          text-decoration: none;
        }

        .related-link span {
          color: #94a3b8;
          font-size: 11px;
        }

        .related-link strong {
          color: #243b5a;
          font-size: 13px;
          line-height: 1.6;
          transition: color .2s ease;
        }

        .related-link:hover strong {
          color: #2563eb;
        }

        .related-link small {
          color: #2563eb;
          font-size: 11px;
        }

        @keyframes article-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 800px) {
          .blog-detail-layout {
            grid-template-columns: 1fr;
          }

          .blog-sidebar {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
          }
        }

        @media (max-width: 560px) {
          .blog-detail-hero {
            padding: 45px 0 60px;
          }

          .blog-detail-container {
            width: calc(100% - 30px);
          }

          .blog-back {
            margin-bottom: 35px;
          }

          .blog-detail-hero h1 {
            font-size: 34px;
          }

          .blog-excerpt {
            font-size: 14px;
          }

          .blog-detail-layout {
            padding-top: 25px;
            padding-bottom: 55px;
          }

          .blog-article {
            padding: 24px 19px;
          }

          .article-content p {
            font-size: 14px;
            line-height: 1.9;
          }

          .blog-sidebar {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-article {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
