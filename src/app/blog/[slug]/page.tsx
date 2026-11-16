
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts as originalPosts } from "@/lib/site";
import { additionalPosts } from "@/lib/blog-posts";

// Dữ liệu được import từ hai file riêng.
// Không export allPosts hoặc additionalPosts từ page.tsx.
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
    return {
      title: "Không tìm thấy bài viết | APA",
    };
  }

  return {
    title: `${post.title} | APA`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const isQuestionArticle = post.body.some(
    (paragraph) => paragraph === "TÌNH HUỐNG HỎI ĐÁP"
  );

  return (
    <main className="apa-newspaper">
      {/* HERO BÀI VIẾT */}
      <section className="newspaper-hero">
        <div className="newspaper-orbit newspaper-orbit-one" />
        <div className="newspaper-orbit newspaper-orbit-two" />

        <div className="newspaper-container newspaper-hero-content">
          <Link href="/blog" className="newspaper-back">
            <span>←</span> Quay lại Blog APA
          </Link>

          <div className="newspaper-masthead">
            <span className="masthead-logo">APA</span>
            <span className="masthead-divider" />
            <span>GÓC KIẾN THỨC HÀNH CHÍNH</span>
          </div>

          <div className="newspaper-category">
            {isQuestionArticle
              ? "HỎI ĐÁP CÙNG APA"
              : "CẨM NANG HÀNH CHÍNH"}
          </div>

          <h1>{post.title}</h1>

          <p className="newspaper-excerpt">{post.excerpt}</p>

          <div className="newspaper-meta">
            <span>APA JOURNAL</span>
            <span className="meta-dot">•</span>
            <time>{post.date}</time>
            <span className="meta-dot">•</span>
            <span>Kiến thức và hướng dẫn</span>
          </div>
        </div>
      </section>

      {/* NỘI DUNG BÀI VIẾT */}
      <div className="newspaper-container newspaper-layout">
        <article className="newspaper-paper">
          <div className="paper-topline">
            <span>APA · DIGITAL JOURNAL</span>
            <span>KIẾN THỨC & ĐỜI SỐNG</span>
          </div>

          <header className="paper-heading">
            <div className="paper-section">
              {isQuestionArticle
                ? "HỎI ĐÁP · NGƯỜI DÙNG HỎI, APA GIẢI ĐÁP"
                : "GÓC HƯỚNG DẪN · THỦ TỤC HÀNH CHÍNH"}
            </div>

            <h2>{post.title}</h2>

            <p className="paper-sapo">{post.excerpt}</p>

            <div className="paper-byline">
              <span className="byline-avatar">A</span>

              <div className="byline-author">
                <strong>Ban biên tập APA</strong>
                <small>Chuyên mục kiến thức hành chính số</small>
              </div>

              <time>{post.date}</time>
            </div>
          </header>

          <div className="paper-rule">
            <span />
            <span />
            <span />
          </div>

          <div className="newspaper-body">
            {post.body.map((paragraph, index) => {
              const isQuestion = paragraph.startsWith("Người dùng hỏi:");
              const isAnswer = paragraph.startsWith("APA trả lời:");
              const isSection = paragraph === "TÌNH HUỐNG HỎI ĐÁP";
              const isNotice = paragraph.startsWith("Lưu ý:");

              if (isSection) {
                return (
                  <div className="qa-section-label" key={index}>
                    <span>✦</span>
                    <span>TÌNH HUỐNG HỎI ĐÁP</span>
                  </div>
                );
              }

              if (isQuestion || isAnswer) {
                const content = paragraph.replace(
                  /^(Người dùng hỏi:|APA trả lời:)\s*/,
                  ""
                );

                return (
                  <section
                    key={index}
                    className={
                      isQuestion ? "qa-question" : "qa-answer"
                    }
                  >
                    <div className="qa-label">
                      <span className="qa-avatar">
                        {isQuestion ? "?" : "A"}
                      </span>

                      <strong>
                        {isQuestion
                          ? "NGƯỜI DÙNG HỎI"
                          : "APA TRẢ LỜI"}
                      </strong>
                    </div>

                    <p>{content}</p>
                  </section>
                );
              }

              if (isNotice) {
                return (
                  <div className="article-notice" key={index}>
                    <strong>Thông tin cần lưu ý</strong>
                    <p>{paragraph.replace(/^Lưu ý:\s*/, "")}</p>
                  </div>
                );
              }

              return (
                <p className="newspaper-paragraph" key={index}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* LƯU Ý PHÁP LÝ */}
          <div className="paper-disclaimer">
            <span className="disclaimer-icon">i</span>
            <div>
              <strong>Lưu ý từ APA</strong>
              <p>
                Nội dung bài viết nhằm hỗ trợ tìm hiểu và chuẩn bị thủ tục
                hành chính. Quy định có thể thay đổi theo thời gian và
                trường hợp cụ thể. Vui lòng đối chiếu với cơ quan có
                thẩm quyền trước khi thực hiện.
              </p>
            </div>
          </div>

          {/* CHÂN BÀI VIẾT */}
          <div className="paper-footer">
            <div>
              <strong>APA – TRỢ LÝ HÀNH CHÍNH SỐ</strong>
              <span>
                Đồng hành cùng bạn trong hành trình hành chính số.
              </span>
            </div>

            <Link href="/tro-ly">
              Đặt câu hỏi cho APA →
            </Link>
          </div>

          <div className="paper-back">
            <Link href="/blog">← Xem thêm bài viết khác</Link>
          </div>
        </article>

        {/* CỘT THÔNG TIN BÊN PHẢI */}
        <aside className="newspaper-sidebar">
          <div className="sidebar-feature">
            <div className="sidebar-feature-icon">✦</div>

            <span className="sidebar-kicker">APA ASSISTANT</span>

            <h3>Cần hướng dẫn thủ tục?</h3>

            <p>
              Mô tả việc bạn cần làm. APA hỗ trợ bạn tìm hiểu thủ tục,
              giấy tờ và các bước cần chuẩn bị.
            </p>

            <Link href="/tro-ly" className="sidebar-primary">
              Hỏi trợ lý APA <span>↗</span>
            </Link>
          </div>

          <div className="sidebar-related">
            <div className="sidebar-heading">
              <span>BẠN CÓ THỂ QUAN TÂM</span>
              <i />
            </div>

            {relatedPosts.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                key={item.slug}
                className="related-article"
              >
                <span>{item.date}</span>
                <strong>{item.title}</strong>
                <small>Đọc bài viết →</small>
              </Link>
            ))}

            <Link href="/blog" className="all-articles">
              Xem tất cả bài viết →
            </Link>
          </div>

          <div className="sidebar-note">
            <strong>Thông tin đáng tin cậy</strong>
            <p>
              Ưu tiên kiểm tra hướng dẫn và quy trình từ cổng thông tin
              chính thức của cơ quan có thẩm quyền.
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .apa-newspaper {
          --news-navy: #10294c;
          --news-blue: #1768d5;
          min-height: 100vh;
          padding-bottom: 75px;
          color: #1a304a;
          background: #f3f6fa;
          font-family: Arial, "Segoe UI", sans-serif;
        }

        .apa-newspaper,
        .apa-newspaper * {
          box-sizing: border-box;
        }

        .newspaper-container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .newspaper-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 43px 0 65px;
          color: #fff;
          background: linear-gradient(
            120deg,
            #081b37,
            #123c70 65%,
            #12628d
          );
        }

        .newspaper-orbit {
          position: absolute;
          z-index: -1;
          border: 1px solid #ffffff24;
          border-radius: 50%;
          pointer-events: none;
        }

        .newspaper-orbit-one {
          width: 440px;
          height: 440px;
          top: -210px;
          right: 4%;
          box-shadow:
            0 0 0 42px #ffffff08,
            0 0 0 85px #ffffff05;
          animation: newspaperOrbit 40s linear infinite;
        }

        .newspaper-orbit-two {
          width: 230px;
          height: 230px;
          right: 17%;
          bottom: -170px;
          border-style: dashed;
          animation: newspaperOrbit 32s linear infinite reverse;
        }

        .newspaper-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 30px;
          color: #d5e7fb;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .newspaper-back:hover {
          color: #fff;
        }

        .newspaper-masthead {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #b9dafa;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .masthead-logo {
          color: #fff;
          font-size: 23px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .masthead-divider {
          width: 1px;
          height: 21px;
          background: #ffffff50;
        }

        .newspaper-category {
          display: inline-block;
          margin-top: 28px;
          padding: 7px 12px;
          color: #a9e4ff;
          background: #ffffff12;
          border: 1px solid #ffffff30;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.5px;
        }

        .newspaper-hero h1 {
          max-width: 900px;
          margin: 17px 0 14px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 5vw, 53px);
          line-height: 1.2;
          letter-spacing: -.7px;
          font-weight: 700;
        }

        .newspaper-excerpt {
          max-width: 790px;
          margin: 0;
          color: #dceafa;
          font-size: 15px;
          line-height: 1.85;
        }

        .newspaper-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
          color: #c0d3e8;
          font-size: 11px;
          font-weight: 700;
        }

        .meta-dot {
          color: #70caff;
        }

        /* ARTICLE LAYOUT */

        .newspaper-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 295px;
          align-items: start;
          gap: 27px;
          padding-top: 42px;
        }

        .newspaper-paper {
          min-width: 0;
          padding: 36px 45px;
          background: #fff;
          border: 1px solid #e1e6ed;
          box-shadow: 0 12px 38px #132e4c0c;
        }

        .paper-topline {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 13px;
          color: #63758a;
          border-bottom: 3px double #9aabba;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.1px;
        }

        .paper-heading {
          padding: 28px 0 22px;
        }

        .paper-section {
          color: #1768b9;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .paper-heading h2 {
          margin: 14px 0 12px;
          color: #122b49;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 3.5vw, 39px);
          font-weight: 700;
          line-height: 1.28;
        }

        .paper-sapo {
          margin: 0;
          color: #50627a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          font-style: italic;
          line-height: 1.8;
        }

        .paper-byline {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 22px;
        }

        .byline-avatar {
          display: grid;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          place-items: center;
          color: #fff;
          background: #153c69;
          border-radius: 50%;
          font-family: Georgia, serif;
          font-size: 17px;
          font-weight: 700;
        }

        .byline-author {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .paper-byline strong {
          color: #233d5b;
          font-size: 12px;
        }

        .paper-byline small {
          color: #7c8da1;
          font-size: 11px;
        }

        .paper-byline time {
          margin-left: auto;
          color: #718197;
          font-size: 11px;
        }

        .paper-rule {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 12px 0 23px;
          border-top: 1px solid #e4e9ef;
        }

        .paper-rule span {
          width: 5px;
          height: 5px;
          background: #1768d5;
          border-radius: 50%;
        }

        .newspaper-body {
          color: #293d54;
        }

        .newspaper-paragraph {
          margin: 0 0 21px;
          color: #34465b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          line-height: 1.95;
          white-space: pre-line;
          overflow-wrap: anywhere;
        }

        .newspaper-paragraph:first-child::first-letter {
          float: left;
          margin: 5px 9px 0 0;
          color: #1768b9;
          font-family: Georgia, serif;
          font-size: 49px;
          font-weight: 700;
          line-height: .8;
        }

        /* QUESTION AND ANSWER */

        .qa-section-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 27px 0 18px;
          padding-bottom: 12px;
          color: #1768b9;
          border-bottom: 1px solid #cfddec;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .qa-section-label span:first-child {
          font-size: 17px;
        }

        .qa-question,
        .qa-answer {
          margin: 18px 0;
          padding: 17px 19px;
          border-radius: 10px;
        }

        .qa-question {
          background: #f0f4f8;
          border-left: 3px solid #8599b1;
        }

        .qa-answer {
          background: #eef6ff;
          border-left: 3px solid #2077cf;
        }

        .qa-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
        }

        .qa-avatar {
          display: grid;
          width: 27px;
          height: 27px;
          flex: 0 0 27px;
          place-items: center;
          color: #fff;
          background: #647990;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 900;
        }

        .qa-answer .qa-avatar {
          background: #1768d5;
        }

        .qa-label strong {
          color: #4c6178;
          font-size: 10px;
          letter-spacing: .8px;
        }

        .qa-answer .qa-label strong {
          color: #135cae;
        }

        .qa-question p,
        .qa-answer p {
          margin: 0;
          color: #34485f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          line-height: 1.85;
          white-space: pre-line;
          overflow-wrap: anywhere;
        }

        .article-notice {
          margin: 22px 0;
          padding: 16px 18px;
          background: #fff9e9;
          border: 1px solid #f1e0b7;
          border-radius: 9px;
        }

        .article-notice strong {
          color: #80580d;
          font-size: 12px;
        }

        .article-notice p {
          margin: 6px 0 0;
          color: #6f5b36;
          font-size: 13px;
          line-height: 1.8;
        }

        /* DISCLAIMER AND FOOTER */

        .paper-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 34px;
          padding: 17px;
          background: #f5f8fc;
          border: 1px solid #e1e8f0;
          border-radius: 9px;
        }

        .disclaimer-icon {
          display: grid;
          width: 25px;
          height: 25px;
          flex: 0 0 25px;
          place-items: center;
          color: #1768c5;
          background: #e4effc;
          border-radius: 50%;
          font-weight: 900;
          font-family: Georgia, serif;
        }

        .paper-disclaimer strong {
          color: #1b426e;
          font-size: 12px;
        }

        .paper-disclaimer p {
          margin: 6px 0 0;
          color: #64758a;
          font-size: 12px;
          line-height: 1.8;
        }

        .paper-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 29px;
          padding-top: 22px;
          border-top: 3px double #b3c0cf;
        }

        .paper-footer strong,
        .paper-footer span {
          display: block;
        }

        .paper-footer strong {
          color: #163b65;
          font-size: 11px;
          letter-spacing: .6px;
        }

        .paper-footer span {
          margin-top: 5px;
          color: #76869a;
          font-size: 11px;
        }

        .paper-footer a,
        .paper-back a {
          color: #1768c5;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
        }

        .paper-back {
          margin-top: 23px;
          padding-top: 17px;
          border-top: 1px solid #e8edf3;
        }

        /* SIDEBAR */

        .newspaper-sidebar {
          display: grid;
          gap: 17px;
        }

        .sidebar-feature,
        .sidebar-related,
        .sidebar-note {
          padding: 22px;
          background: #fff;
          border: 1px solid #e1e8f0;
          box-shadow: 0 8px 25px #102e4d08;
        }

        .sidebar-feature {
          color: #fff;
          background: linear-gradient(145deg, #102b50, #174d86);
          border-color: #285c91;
          border-radius: 13px;
        }

        .sidebar-feature-icon {
          display: grid;
          width: 39px;
          height: 39px;
          place-items: center;
          color: #9de2ff;
          background: #ffffff16;
          border: 1px solid #ffffff30;
          border-radius: 10px;
          font-size: 19px;
        }

        .sidebar-kicker {
          display: block;
          margin-top: 17px;
          color: #9edbff;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.4px;
        }

        .sidebar-feature h3 {
          margin: 8px 0;
          color: #fff;
          font-size: 19px;
        }

        .sidebar-feature p {
          color: #d2e2f3;
          font-size: 13px;
          line-height: 1.8;
        }

        .sidebar-primary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 17px;
          padding: 11px 13px;
          color: #09294f;
          background: #a4e7ff;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
        }

        .sidebar-primary:hover {
          color: #09294f;
        }

        .sidebar-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #1b426e;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .sidebar-heading i {
          flex: 1;
          height: 1px;
          background: #d9e3ee;
        }

        .related-article {
          display: block;
          padding: 15px 0;
          border-bottom: 1px solid #e8edf3;
          text-decoration: none;
        }

        .related-article > span,
        .related-article strong,
        .related-article small {
          display: block;
        }

        .related-article > span {
          color: #8191a3;
          font-size: 10px;
        }

        .related-article strong {
          margin: 6px 0;
          color: #233d5b;
          font-size: 13px;
          line-height: 1.6;
        }

        .related-article:hover strong {
          color: #1768d5;
        }

        .related-article small {
          color: #1768d5;
          font-size: 11px;
        }

        .all-articles {
          display: block;
          margin-top: 12px;
          color: #1768d5;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
        }

        .sidebar-note {
          background: #eef5fc;
          border-color: #dce8f5;
          border-radius: 10px;
        }

        .sidebar-note strong {
          color: #1a456f;
          font-size: 13px;
        }

        .sidebar-note p {
          margin: 7px 0 0;
          color: #5d7188;
          font-size: 12px;
          line-height: 1.8;
        }

        /* ANIMATION */

        @keyframes newspaperOrbit {
          to {
            transform: rotate(360deg);
          }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .newspaper-layout {
            grid-template-columns: 1fr;
          }

          .newspaper-sidebar {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sidebar-related {
            grid-row: span 2;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .newspaper-container {
            width: calc(100% - 30px);
          }

          .newspaper-hero {
            padding: 30px 0 43px;
          }

          .newspaper-back {
            margin-bottom: 24px;
          }

          .newspaper-hero h1 {
            font-size: 33px;
            line-height: 1.23;
          }

          .newspaper-excerpt {
            font-size: 14px;
            line-height: 1.8;
          }

          .newspaper-meta {
            gap: 7px;
            font-size: 10px;
          }

          .newspaper-layout {
            gap: 17px;
            padding-top: 20px;
          }

          .newspaper-paper {
            padding: 21px 17px;
          }

          .paper-topline {
            font-size: 9px;
            letter-spacing: .5px;
          }

          .paper-heading {
            padding: 21px 0 17px;
          }

          .paper-heading h2 {
            font-size: 27px;
          }

          .paper-sapo {
            font-size: 15px;
          }

          .paper-byline strong {
            font-size: 11px;
          }

          .paper-byline small,
          .paper-byline time {
            font-size: 10px;
          }

          .newspaper-paragraph {
            font-size: 16px;
            line-height: 1.9;
          }

          .qa-question,
          .qa-answer {
            padding: 14px 12px;
          }

          .qa-question p,
          .qa-answer p {
            font-size: 15px;
          }

          .newspaper-sidebar {
            grid-template-columns: 1fr;
          }

          .sidebar-related {
            grid-row: auto;
          }

          .paper-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .newspaper-orbit {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
