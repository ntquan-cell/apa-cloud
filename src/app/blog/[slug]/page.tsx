
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts as originalPosts } from "@/lib/site";
import { additionalPosts } from "@/lib/blog-posts";

const allPosts = [...additionalPosts, ...originalPosts];

type PageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = (typeof allPosts)[number];

function getReadTime(body: string[] = []) {
  const words = body.join(" ").trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 180));
}

function getCategory(slug: string) {
  if (slug.includes("hoi-dap") || slug.includes("ho-so-bi-tu-choi")) {
    return "Hỏi đáp hành chính";
  }

  if (slug.includes("tam-tru") || slug.includes("cu-tru")) {
    return "Cư trú";
  }

  if (slug.includes("xe-may") || slug.includes("sang-ten")) {
    return "Phương tiện";
  }

  if (slug.includes("bhyt") || slug.includes("bao-hiem")) {
    return "Bảo hiểm";
  }

  if (slug.includes("doanh-nghiep") || slug.includes("ho-kinh-doanh")) {
    return "Doanh nghiệp";
  }

  return "Thủ tục hành chính";
}

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
    return {
      title: "Không tìm thấy bài viết | APA",
    };
  }

  return {
    title: `${post.title} | APA`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | APA`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const article = post as BlogPost;
  const body = (article.body || []) as string[];

  const relatedPosts = allPosts
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => {
      const sameCategory =
        Number(getCategory(b.slug) === getCategory(article.slug)) -
        Number(getCategory(a.slug) === getCategory(article.slug));

      return sameCategory;
    })
    .slice(0, 3);

  const isQuestionArticle = body.includes("TÌNH HUỐNG HỎI ĐÁP");

  return (
    <main className="apa-article">
      <div className="article-topline">
        <div className="article-container">
          <Link href="/blog" className="back-link">
            <span>←</span> Tất cả bài viết
          </Link>
          <span className="topline-label">APA KNOWLEDGE CENTER</span>
        </div>
      </div>

      <header className="article-hero">
        <div className="article-container">
          <div className="article-breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{getCategory(article.slug)}</span>
          </div>

          <div className="article-heading">
            <span className="article-category">
              {getCategory(article.slug)}
            </span>

            <h1>{article.title}</h1>

            <p className="article-excerpt">{article.excerpt}</p>

            <div className="article-meta">
              <div className="author-mark">A</div>
              <div className="author-info">
                <strong>Ban biên tập APA</strong>
                <span>Trợ lý hành chính số</span>
              </div>
              <span className="meta-divider" />
              <span>{article.date}</span>
              <span className="meta-divider" />
              <span>{getReadTime(body)} phút đọc</span>
            </div>
          </div>
        </div>
      </header>

      <div className="article-cover">
        <div className="article-container">
          <div className="cover-art">
            <div className="cover-grid" />
            <div className="cover-circle circle-one" />
            <div className="cover-circle circle-two" />

            <div className="cover-copy">
              <span>APA · KNOWLEDGE SERIES</span>
              <strong>HIỂU ĐÚNG</strong>
              <strong>THỦ TỤC</strong>
              <i />
              <small>Kiến thức hành chính dành cho mọi người</small>
            </div>

            <div className="cover-index">APA / 2026</div>
            <div className="cover-star">✦</div>
          </div>
        </div>
      </div>

      <section className="article-content-section">
        <div className="article-container article-layout">
          <aside className="article-sidebar">
            <div className="sidebar-sticky">
              <span className="sidebar-label">TRONG BÀI VIẾT</span>
              <div className="sidebar-line" />
              <a href="#article-content">Nội dung chính</a>
              <a href="#article-note">Lưu ý khi thực hiện</a>
              <a href="#related-posts">Bài viết liên quan</a>

              <div className="sidebar-card">
                <span className="sidebar-card-icon">A</span>
                <strong>APA</strong>
                <p>
                  Đồng hành cùng bạn trong quá trình tìm hiểu thủ tục
                  hành chính.
                </p>
                <Link href="/">Khám phá APA ↗</Link>
              </div>
            </div>
          </aside>

          <article className="article-body" id="article-content">
            <div className="article-intro">
              <span className="intro-mark">“</span>
              <p>{article.excerpt}</p>
            </div>

            <div className="body-content">
              {body.map((paragraph, index) => {
                if (paragraph === "TÌNH HUỐNG HỎI ĐÁP") {
                  return (
                    <div className="qa-heading" key={index}>
                      <span>CASE STUDY</span>
                      <h2>Tình huống hỏi đáp</h2>
                    </div>
                  );
                }

                if (paragraph.startsWith("Người dùng hỏi:")) {
                  return (
                    <div className="qa-question" key={index}>
                      <span className="qa-avatar">?</span>
                      <p>
                        <strong>Người dùng hỏi</strong>
                        {paragraph.replace("Người dùng hỏi:", "").trim()}
                      </p>
                    </div>
                  );
                }

                if (paragraph.startsWith("APA trả lời:")) {
                  return (
                    <div className="qa-answer" key={index}>
                      <span className="qa-avatar">A</span>
                      <p>
                        <strong>APA trả lời</strong>
                        {paragraph.replace("APA trả lời:", "").trim()}
                      </p>
                    </div>
                  );
                }

                if (paragraph.startsWith("Lưu ý:")) {
                  return (
                    <div className="article-note" id="article-note" key={index}>
                      <span className="note-icon">!</span>
                      <div>
                        <strong>Lưu ý quan trọng</strong>
                        <p>{paragraph.replace("Lưu ý:", "").trim()}</p>
                      </div>
                    </div>
                  );
                }

                return (
                  <p className="article-paragraph" key={index}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="article-disclaimer">
              <span>i</span>
              <p>
                Nội dung bài viết nhằm mục đích cung cấp thông tin tham khảo.
                Thành phần hồ sơ, trình tự, thời hạn và lệ phí có thể thay đổi
                theo quy định và trường hợp cụ thể. Hãy đối chiếu với cơ quan
                có thẩm quyền trước khi thực hiện.
              </p>
            </div>

            <div className="article-share">
              <span>APA · TRỢ LÝ HÀNH CHÍNH SỐ</span>
              <Link href="/blog">Khám phá thêm bài viết ↗</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="related-section" id="related-posts">
        <div className="article-container">
          <div className="related-heading">
            <div>
              <span className="section-eyebrow">ĐỌC TIẾP CÙNG APA</span>
              <h2>Bài viết liên quan</h2>
            </div>
            <Link href="/blog">Xem tất cả bài viết ↗</Link>
          </div>

          <div className="related-grid">
            {relatedPosts.map((item, index) => (
              <Link
                href={`/blog/${item.slug}`}
                className="related-card"
                key={item.slug}
              >
                <div className={`related-art related-art-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>APA</strong>
                  <small>KNOWLEDGE</small>
                </div>
                <div className="related-card-content">
                  <span>{getCategory(item.slug)}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="related-date">
                    {item.date}
                    <b>↗</b>
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
            <span>APA · TRỢ LÝ HÀNH CHÍNH SỐ</span>
            <h2>Chủ động hơn trong mọi thủ tục.</h2>
            <p>
              Cùng APA tìm hiểu thông tin và chuẩn bị tốt hơn cho
              những công việc hành chính hằng ngày.
            </p>
          </div>
          <Link href="/" className="bottom-cta">
            Khám phá APA <span>↗</span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .apa-article {
          --navy: #102b50;
          --blue: #1765b5;
          --muted: #6b7d91;
          color: #243b55;
          background: #fff;
        }

        .article-container {
          width: min(1080px, calc(100% - 48px));
          margin: 0 auto;
        }

        .article-topline {
          border-bottom: 1px solid #e9eef4;
          background: #fff;
        }

        .article-topline .article-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 53px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #48647f;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none;
        }

        .back-link span {
          font-size: 18px;
          transition: transform .2s;
        }

        .back-link:hover { color: var(--blue); }
        .back-link:hover span { transform: translateX(-4px); }

        .topline-label {
          color: #9aa8b8;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .article-hero {
          padding: 35px 0 50px;
          background:
            radial-gradient(circle at 85% 15%, rgba(67,143,211,.1), transparent 28%),
            #f5f8fc;
        }

        .article-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #9aa8b8;
          font-size: 11px;
        }

        .article-breadcrumb a {
          color: #6f8298;
          text-decoration: none;
        }

        .article-breadcrumb a:hover { color: var(--blue); }

        .article-heading {
          max-width: 850px;
          margin: 48px auto 0;
          text-align: center;
        }

        .article-category {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 4px;
          background: #e5f1fb;
          color: #1765b5;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .5px;
        }

        .article-heading h1 {
          margin: 22px 0 17px;
          color: #102b50;
          font-size: clamp(32px, 4.6vw, 51px);
          font-weight: 850;
          line-height: 1.2;
          letter-spacing: -1.7px;
        }

        .article-excerpt {
          max-width: 690px;
          margin: 0 auto;
          color: #65788e;
          font-size: 16px;
          line-height: 1.85;
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 29px;
          color: #8190a2;
          font-size: 11px;
        }

        .author-mark {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border-radius: 9px;
          background: #155b9d;
          color: #fff;
          font-size: 18px;
          font-weight: 900;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          text-align: left;
        }

        .author-info strong {
          color: #27415e;
          font-size: 11px;
        }

        .author-info span {
          color: #91a0b0;
          font-size: 10px;
        }

        .meta-divider {
          width: 1px;
          height: 19px;
          background: #d6e0ea;
        }

        .article-cover {
          position: relative;
          z-index: 1;
          margin-top: -1px;
          background: #f5f8fc;
        }

        .cover-art {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 300px;
          overflow: hidden;
          border-radius: 12px;
          background: linear-gradient(120deg, #0c2341, #15558f);
          box-shadow: 0 20px 45px rgba(15,48,83,.15);
        }

        .cover-grid {
          position: absolute;
          inset: 0;
          opacity: .18;
          background-image:
            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px);
          background-size: 38px 38px;
        }

        .cover-circle {
          position: absolute;
          width: 450px;
          height: 450px;
          border: 1px solid rgba(170,216,255,.22);
          border-radius: 50%;
        }

        .circle-one { left: -140px; top: -250px; }
        .circle-two { right: -130px; bottom: -300px; width: 570px; height: 570px; }

        .cover-copy {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          color: #fff;
          text-align: center;
        }

        .cover-copy > span {
          margin-bottom: 17px;
          color: #a8d4fa;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 3px;
        }

        .cover-copy strong {
          font-size: clamp(35px, 6vw, 57px);
          line-height: 1.05;
          letter-spacing: 2px;
        }

        .cover-copy i {
          width: 48px;
          height: 3px;
          margin: 20px 0 12px;
          background: #80caff;
        }

        .cover-copy small {
          color: #c6ddf2;
          font-size: 12px;
          letter-spacing: .5px;
        }

        .cover-index {
          position: absolute;
          right: 24px;
          bottom: 20px;
          color: rgba(255,255,255,.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .cover-star {
          position: absolute;
          top: 35px;
          right: 55px;
          color: #8acbff;
          font-size: 35px;
        }

        .article-content-section {
          padding: 75px 0 90px;
        }

        .article-layout {
          display: grid;
          grid-template-columns: 195px minmax(0, 720px);
          justify-content: space-between;
          gap: 65px;
        }

        .sidebar-sticky {
          position: sticky;
          top: 25px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .sidebar-label {
          color: #8a9aab;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }

        .sidebar-line {
          width: 100%;
          height: 1px;
          margin: 13px 0;
          background: #e7edf3;
        }

        .sidebar-sticky > a {
          padding: 9px 0;
          color: #6c7e92;
          font-size: 11px;
          line-height: 1.5;
          text-decoration: none;
          transition: color .2s;
        }

        .sidebar-sticky > a:hover { color: var(--blue); }

        .sidebar-card {
          width: 100%;
          box-sizing: border-box;
          margin-top: 35px;
          padding: 18px;
          border: 1px solid #e4edf5;
          border-radius: 8px;
          background: #f7fafd;
        }

        .sidebar-card-icon {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          margin-bottom: 12px;
          border-radius: 8px;
          background: #155b9d;
          color: #fff;
          font-weight: 900;
        }

        .sidebar-card strong {
          color: #17395e;
          font-size: 13px;
        }

        .sidebar-card p {
          color: #7b8b9d;
          font-size: 10px;
          line-height: 1.7;
        }

        .sidebar-card a {
          color: #1765b5;
          font-size: 10px;
          font-weight: 850;
          text-decoration: none;
        }

        .article-body {
          min-width: 0;
        }

        .article-intro {
          position: relative;
          margin-bottom: 32px;
          padding: 24px 28px 24px 35px;
          border-left: 3px solid #3284c4;
          border-radius: 0 8px 8px 0;
          background: #f3f8fd;
        }

        .intro-mark {
          position: absolute;
          top: 7px;
          left: 13px;
          color: #8bbde5;
          font-family: Georgia, serif;
          font-size: 37px;
        }

        .article-intro p {
          margin: 0;
          color: #365875;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.85;
        }

        .body-content {
          color: #40546a;
        }

        .article-paragraph {
          margin: 0 0 23px;
          font-size: 15px;
          line-height: 2;
          text-align: left;
        }

        .qa-heading {
          margin: 36px 0 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e7edf3;
        }

        .qa-heading span {
          color: #2677b9;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .qa-heading h2 {
          margin: 8px 0 0;
          color: #153657;
          font-size: 23px;
        }

        .qa-question,
        .qa-answer {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin: 17px 0;
          padding: 17px;
          border: 1px solid #e7edf3;
          border-radius: 8px;
          background: #fff;
        }

        .qa-answer {
          border-color: #d9e9f7;
          background: #f3f8fd;
        }

        .qa-avatar {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          background: #e9f2fa;
          color: #1765b5;
          font-size: 14px;
          font-weight: 900;
        }

        .qa-answer .qa-avatar {
          background: #155b9d;
          color: #fff;
        }

        .qa-question p,
        .qa-answer p {
          margin: 0;
          color: #53677c;
          font-size: 13px;
          line-height: 1.8;
        }

        .qa-question p strong,
        .qa-answer p strong {
          display: block;
          margin-bottom: 5px;
          color: #17395e;
          font-size: 12px;
        }

        .article-note {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin: 30px 0;
          padding: 19px;
          border: 1px solid #f0dfb9;
          border-radius: 8px;
          background: #fffaf0;
        }

        .note-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #f7e8c5;
          color: #966a17;
          font-weight: 900;
        }

        .article-note strong {
          color: #7b5b21;
          font-size: 12px;
        }

        .article-note p {
          margin: 6px 0 0;
          color: #806c49;
          font-size: 12px;
          line-height: 1.8;
        }

        .article-disclaimer {
          display: flex;
          gap: 12px;
          margin-top: 35px;
          padding: 17px;
          border-radius: 7px;
          background: #f3f6f9;
        }

        .article-disclaimer > span {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #dce9f4;
          color: #286a9f;
          font-size: 11px;
          font-weight: 900;
        }

        .article-disclaimer p {
          margin: 0;
          color: #77889a;
          font-size: 11px;
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

        .section-eyebrow {
          color: #2677b9;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
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

        .related-art-2 { background: linear-gradient(135deg, #e4eee9, #c8e0d4); }
        .related-art-3 { background: linear-gradient(135deg, #e9e6f5, #d2cbea); }

        .related-art > span {
          position: absolute;
          top: 10px;
          left: 13px;
          color: rgba(16,43,80,.35);
          font-size: 20px;
          font-weight: 900;
        }

        .related-art strong { font-size: 30px; letter-spacing: 3px; }
        .related-art small { font-size: 8px; font-weight: 850; letter-spacing: 2px; }

        .related-card-content { padding: 17px; }

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
          margin: 9px 0;
          font-size: 28px;
          letter-spacing: -.6px;
        }

        .bottom-inner p {
          margin: 0;
          color: #c1d3e5;
          font-size: 12px;
          line-height: 1.7;
        }

        .bottom-cta {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          flex-shrink: 0;
          padding: 14px 18px;
          border-radius: 5px;
          background: #fff;
          color: #123b69;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          transition: transform .2s;
        }

        .bottom-cta:hover { transform: translateY(-3px); }
        .bottom-cta span { font-size: 18px; }

        @media (max-width: 760px) {
          .article-container { width: calc(100% - 34px); }
          .article-hero { padding: 25px 0 35px; }
          .article-heading { margin-top: 35px; }
          .article-heading h1 { font-size: 34px; letter-spacing: -1px; }
          .article-excerpt { font-size: 13px; }
          .article-meta { gap: 9px; font-size: 10px; }
          .cover-art { min-height: 230px; }
          .article-content-section { padding: 45px 0 55px; }
          .article-layout { display: block; }
          .article-sidebar { display: none; }
          .article-paragraph { font-size: 14px; line-height: 1.9; }
          .article-intro { padding: 20px 17px 20px 30px; }
          .article-intro p { font-size: 14px; }
          .related-section { padding: 50px 0; }
          .related-grid { grid-template-columns: 1fr; gap: 13px; }
          .related-card { display: grid; grid-template-columns: 105px minmax(0, 1fr); }
          .related-art { height: 100%; min-height: 150px; }
          .related-art strong { font-size: 23px; }
          .related-art small { font-size: 7px; }
          .related-card-content { padding: 13px; }
          .related-card h3 { font-size: 13px; }
          .related-card p { font-size: 10px; }
          .related-heading h2 { font-size: 25px; }
          .related-heading > a { font-size: 10px; }
          .bottom-inner { align-items: flex-start; flex-direction: column; }
          .bottom-inner h2 { font-size: 23px; }
        }

        @media (max-width: 420px) {
          .topline-label { font-size: 8px; letter-spacing: 1px; }
          .article-heading h1 { font-size: 29px; }
          .article-meta { gap: 7px; }
          .meta-divider { height: 14px; }
          .cover-copy strong { font-size: 36px; }
          .cover-copy small { font-size: 10px; }
          .qa-question, .qa-answer { padding: 13px; }
          .related-heading { align-items: flex-start; flex-direction: column; }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-article *,
          .apa-article *::before,
          .apa-article *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
