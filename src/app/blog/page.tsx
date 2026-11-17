
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { additionalPosts } from "@/lib/blog-posts";
import { posts as originalPosts } from "@/lib/site";

const allPosts = [...additionalPosts, ...originalPosts];

const categories = [
  "Tất cả",
  "Thủ tục cá nhân",
  "Cư trú",
  "Phương tiện",
  "Bảo hiểm",
  "Doanh nghiệp",
  "Hỏi đáp",
];

function getCategory(slug: string) {
  if (
    slug.includes("hoi-dap") ||
    slug.includes("ho-so-truc-tuyen-bi") ||
    slug.includes("ho-so-bi-tu-choi")
  ) {
    return "Hỏi đáp";
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

  if (
    slug.includes("doanh-nghiep") ||
    slug.includes("ho-kinh-doanh")
  ) {
    return "Doanh nghiệp";
  }

  return "Thủ tục cá nhân";
}

function getReadTime(body?: string[]) {
  const words = (body || []).join(" ").trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 180));
}

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [notice, setNotice] = useState("");

  const filteredPosts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "Tất cả" ||
        getCategory(post.slug) === activeCategory;

      const matchesSearch =
        !keyword ||
        post.title.toLowerCase().includes(keyword) ||
        post.excerpt.toLowerCase().includes(keyword) ||
        post.slug.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const featuredPost = allPosts[0];

  function submitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = question.trim();

    if (!value) {
      setNotice("Bạn hãy nhập nội dung câu hỏi trước khi gửi.");
      return;
    }

    try {
      const savedQuestions = JSON.parse(
        window.localStorage.getItem("apa-blog-questions") || "[]"
      ) as string[];

      const updatedQuestions = [
        value,
        ...savedQuestions,
      ].slice(0, 20);

      window.localStorage.setItem(
        "apa-blog-questions",
        JSON.stringify(updatedQuestions)
      );

      setQuestions(updatedQuestions);
      setQuestion("");
      setNotice(
        "Câu hỏi đã được lưu trên trình duyệt này. Nội dung chưa được gửi đến quản trị viên APA."
      );
    } catch {
      setNotice(
        "Không thể lưu câu hỏi trên trình duyệt. Bạn vui lòng thử lại."
      );
    }
  }

  return (
    <main className="apa-blog">
      <section className="blog-hero">
        <div className="blog-container">
          <div className="hero-label">
            <span className="label-dot" />
            APA · TRỢ LÝ HÀNH CHÍNH SỐ
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <h1>
                Góc thông tin hành chính số
              </h1>

              <p>
                Kiến thức dễ hiểu, hướng dẫn thiết thực và những giải đáp giúp bạn chủ động hơn khi thực hiện thủ tục hành chính.
              </p>

              <a href="#blog-list" className="hero-button">
                Khám phá bài viết
                <span>↗</span>
              </a>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-card">
                <div className="visual-card-top">
                  <span className="visual-icon">A</span>
                  <span>APA KNOWLEDGE</span>
                </div>
                <div className="visual-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="visual-document">
                  <div className="document-symbol">✦</div>
                  <div>
                    <strong>Thông tin hữu ích</strong>
                    <small>Đơn giản hóa thủ tục</small>
                  </div>
                </div>
                <div className="visual-bottom">
                  <span>HIỂU ĐÚNG</span>
                  <span>·</span>
                  <span>LÀM ĐÚNG</span>
                </div>
              </div>
              <div className="floating-mark mark-one">✦</div>
              <div className="floating-mark mark-two">+</div>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>{allPosts.length.toString().padStart(2, "0")}</strong>
              <span>Bài viết kiến thức</span>
            </div>
            <div>
              <strong>06</strong>
              <span>Chủ đề nội dung</span>
            </div>
            <div>
              <strong>APA</strong>
              <span>Đồng hành cùng bạn</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-main" id="blog-list">
        <div className="blog-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THƯ VIỆN KIẾN THỨC</span>
              <h2>Bài viết mới nhất</h2>
              <p>
                Tìm hiểu thông tin và chuẩn bị tốt hơn cho các thủ tục hành chính thường gặp.
              </p>
            </div>
            <div className="heading-decoration">APA / INSIGHTS</div>
          </div>

          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="featured-post"
            >
              <div className="featured-art">
                <div className="featured-art-grid" />
                <div className="featured-number">01</div>
                <div className="featured-document">
                  <span>APA GUIDE</span>
                  <strong>HÀNH CHÍNH</strong>
                  <strong>SỐ</strong>
                  <i />
                  <small>Thông tin · Hướng dẫn · Đồng hành</small>
                </div>
                <span className="featured-star">✦</span>
              </div>

              <div className="featured-content">
                <span className="featured-tag">BÀI VIẾT NỔI BẬT</span>
                <span className="post-category">
                  {getCategory(featuredPost.slug)}
                </span>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <span>{featuredPost.date}</span>
                  <span>·</span>
                  <span>
                    {getReadTime(featuredPost.body)} phút đọc
                  </span>
                </div>
                <span className="read-link">
                  Đọc bài viết <b>↗</b>
                </span>
              </div>
            </Link>
          )}

          <div className="blog-toolbar">
            <div className="category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "category-button active"
                      : "category-button"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Tìm kiếm bài viết..."
                aria-label="Tìm kiếm bài viết"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Xóa tìm kiếm"
                >
                  ×
                </button>
              )}
            </label>
          </div>

          <div className="result-line">
            <span>
              Hiển thị <strong>{filteredPosts.length}</strong> bài viết
            </span>
            <span className="result-note">
              KIẾN THỨC HÀNH CHÍNH DÀNH CHO MỌI NGƯỜI
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="post-grid">
              {filteredPosts.map((post, index) => (
                <Link
                  href={`/blog/${post.slug}`}
                  className="post-card"
                  key={post.slug}
                >
                  <div className={`post-art art-${index % 6}`}>
                    <span className="art-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="art-center">
                      <span className="art-symbol">
                        {getCategory(post.slug) === "Hỏi đáp"
                          ? "?"
                          : getCategory(post.slug) === "Doanh nghiệp"
                            ? "⌂"
                            : getCategory(post.slug) === "Bảo hiểm"
                              ? "+"
                              : "✦"}
                      </span>
                      <span>APA KNOWLEDGE</span>
                    </div>
                    <span className="art-corner">APA</span>
                  </div>

                  <div className="post-card-content">
                    <div className="post-card-top">
                      <span className="post-category">
                        {getCategory(post.slug)}
                      </span>
                      <span className="post-date">{post.date}</span>
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>

                    <div className="post-card-bottom">
                      <span>{getReadTime(post.body)} phút đọc</span>
                      <span className="card-arrow">↗</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>⌕</span>
              <h3>Chưa tìm thấy bài viết phù hợp</h3>
              <p>
                Hãy thử từ khóa khác hoặc chọn một chủ đề khác.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Tất cả");
                }}
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="question-section">
        <div className="blog-container question-layout">
          <div className="question-copy">
            <span className="eyebrow">APA LUÔN LẮNG NGHE</span>
            <h2>
              Bạn đang gặp
              <br />
              vướng mắc gì?
            </h2>
            <p>
              Hãy mô tả vấn đề hành chính bạn đang cần tìm hiểu.
              Câu hỏi sẽ được lưu trên trình duyệt hiện tại để bạn
              có thể xem lại.
            </p>
            <div className="question-note">
              <span>i</span>
              Không nhập mật khẩu, số tài khoản hoặc dữ liệu cá nhân
              nhạy cảm.
            </div>
          </div>

          <form className="question-form" onSubmit={submitQuestion}>
            <label htmlFor="apa-question">Nội dung câu hỏi</label>
            <textarea
              id="apa-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ví dụ: Tôi muốn đăng ký tạm trú thì cần chuẩn bị những gì?"
              rows={5}
              maxLength={1000}
            />
            <div className="form-footer">
              <span>{question.length}/1000 ký tự</span>
              <button type="submit">
                Lưu câu hỏi <span>↗</span>
              </button>
            </div>

            {notice && (
              <p className="form-notice" role="status">
                {notice}
              </p>
            )}

            {questions.length > 0 && (
              <div className="saved-questions">
                <strong>
                  Câu hỏi đã lưu trên thiết bị này ({questions.length})
                </strong>
                {questions.slice(0, 3).map((item, index) => (
                  <p key={`${index}-${item}`}>{item}</p>
                ))}
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="blog-bottom">
        <div className="blog-container bottom-inner">
          <div>
            <span className="eyebrow">APA · TRỢ LÝ HÀNH CHÍNH SỐ</span>
            <h2>Hiểu thủ tục. Chủ động hành động.</h2>
          </div>
          <Link href="/" className="bottom-button">
            Khám phá APA <span>↗</span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .apa-blog {
          --navy: #102b50;
          --blue: #1765b5;
          --muted: #64748b;
          color: #172b45;
          background: #fff;
          overflow: hidden;
        }

        .blog-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .blog-hero {
          position: relative;
          overflow: hidden;
          color: #fff;
          background:
            radial-gradient(circle at 78% 45%, rgba(42, 124, 204, 0.3), transparent 32%),
            linear-gradient(120deg, #0b1e38 0%, #123b69 62%, #15528b 100%);
        }

        .blog-hero::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          right: -220px;
          top: -280px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 55px rgba(255,255,255,.025), 0 0 0 110px rgba(255,255,255,.02);
          pointer-events: none;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 54px;
          color: #b9d9f7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #65c5ff;
          box-shadow: 0 0 14px #65c5ff;
        }

        .hero-content {
          min-height: 385px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 40px;
          padding: 35px 0 30px;
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(42px, 5.5vw, 68px);
          line-height: 1.08;
          letter-spacing: -2.5px;
          font-weight: 850;
        }

        .hero-copy h1 span {
          color: #82c7ff;
        }

        .hero-copy p {
          max-width: 530px;
          margin: 22px 0 28px;
          color: #d0e0f1;
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-button,
        .bottom-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 7px;
          background: #fff;
          color: #123b69;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }

        .hero-button:hover,
        .bottom-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,.18);
        }

        .hero-button span,
        .bottom-button span {
          font-size: 19px;
        }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 330px;
        }

        .visual-orbit {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(160,210,255,.22);
          border-radius: 50%;
          animation: orbit 22s linear infinite;
        }

        .orbit-two {
          width: 370px;
          height: 370px;
          border-style: dashed;
          animation-direction: reverse;
          animation-duration: 36s;
        }

        .visual-card {
          position: relative;
          z-index: 1;
          width: min(320px, 80%);
          padding: 24px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 15px;
          background: linear-gradient(145deg, rgba(255,255,255,.2), rgba(255,255,255,.07));
          box-shadow: 0 24px 65px rgba(0,0,0,.22);
          backdrop-filter: blur(12px);
          transform: rotate(-4deg);
          transition: transform .3s;
        }

        .visual-card:hover {
          transform: rotate(0deg) translateY(-5px);
        }

        .visual-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d9ecff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .visual-icon {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #fff;
          color: #15528b;
          font-size: 19px;
          font-weight: 900;
        }

        .visual-lines {
          display: grid;
          gap: 8px;
          margin: 26px 0;
        }

        .visual-lines i {
          height: 6px;
          border-radius: 10px;
          background: rgba(255,255,255,.3);
        }

        .visual-lines i:nth-child(2) { width: 78%; }
        .visual-lines i:nth-child(3) { width: 55%; }

        .visual-document {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          border-radius: 10px;
          background: rgba(255,255,255,.94);
          color: #123b69;
        }

        .document-symbol {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: #e6f3ff;
          color: #1765b5;
          font-size: 22px;
        }

        .visual-document strong,
        .visual-document small {
          display: block;
        }

        .visual-document strong { font-size: 13px; }
        .visual-document small { margin-top: 4px; color: #64748b; font-size: 11px; }

        .visual-bottom {
          display: flex;
          gap: 9px;
          margin-top: 20px;
          color: #d6eaff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .floating-mark {
          position: absolute;
          z-index: 2;
          color: #8fd3ff;
          font-size: 32px;
          animation: float 4s ease-in-out infinite;
        }

        .mark-one { top: 35px; right: 25px; }
        .mark-two { bottom: 38px; left: 30px; animation-delay: -2s; }

        .hero-stats {
          display: flex;
          gap: 65px;
          padding: 23px 0 27px;
          border-top: 1px solid rgba(255,255,255,.17);
        }

        .hero-stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hero-stats strong {
          font-size: 22px;
          color: #fff;
        }

        .hero-stats span {
          color: #b8cce1;
          font-size: 12px;
        }

        .blog-main {
          padding: 86px 0 90px;
          background: #fff;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }

        .eyebrow {
          color: #2472b9;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .section-heading h2,
        .question-copy h2,
        .bottom-inner h2 {
          margin: 10px 0;
          color: #102b50;
          font-size: clamp(29px, 3.4vw, 39px);
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .section-heading p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .heading-decoration {
          padding-bottom: 7px;
          color: #a1afbf;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .featured-post {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 310px;
          margin-bottom: 55px;
          overflow: hidden;
          border: 1px solid #e3ebf3;
          border-radius: 13px;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 12px 35px rgba(20,54,90,.055);
          transition: box-shadow .25s, transform .25s;
        }

        .featured-post:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(20,54,90,.12);
        }

        .featured-art {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 310px;
          overflow: hidden;
          background: linear-gradient(135deg, #0d294c, #1c65a7);
        }

        .featured-art-grid {
          position: absolute;
          inset: 0;
          opacity: .2;
          background-image: linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px);
          background-size: 35px 35px;
          mask-image: linear-gradient(135deg, black, transparent 85%);
        }

        .featured-number {
          position: absolute;
          top: 20px;
          left: 25px;
          color: rgba(255,255,255,.25);
          font-size: 70px;
          font-weight: 900;
        }

        .featured-document {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 245px;
          padding: 26px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 7px;
          background: rgba(255,255,255,.12);
          color: #fff;
          transform: rotate(-3deg);
          box-shadow: 0 15px 40px rgba(0,0,0,.2);
          backdrop-filter: blur(8px);
        }

        .featured-document span {
          margin-bottom: 15px;
          color: #b5dcff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .featured-document strong {
          font-size: 29px;
          line-height: 1.1;
          letter-spacing: 1px;
        }

        .featured-document i {
          width: 45px;
          height: 3px;
          margin: 18px 0 12px;
          background: #8fd3ff;
        }

        .featured-document small {
          color: #d5eaff;
          font-size: 9px;
        }

        .featured-star {
          position: absolute;
          right: 35px;
          bottom: 30px;
          color: #8fd3ff;
          font-size: 35px;
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 35px 42px;
        }

        .featured-tag {
          margin-bottom: 16px;
          color: #1765b5;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .post-category {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 6px 10px;
          border-radius: 4px;
          background: #edf5fc;
          color: #276aa8;
          font-size: 10px;
          font-weight: 800;
        }

        .featured-content h3 {
          margin: 15px 0 10px;
          color: #102b50;
          font-size: clamp(21px, 2.3vw, 28px);
          line-height: 1.35;
        }

        .featured-content > p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
        }

        .post-meta {
          display: flex;
          gap: 9px;
          margin-top: 18px;
          color: #8795a6;
          font-size: 11px;
        }

        .read-link {
          display: inline-flex;
          gap: 15px;
          align-items: center;
          margin-top: 22px;
          color: #1765b5;
          font-size: 13px;
          font-weight: 850;
        }

        .read-link b { font-size: 18px; }

        .blog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 17px 0;
          border-top: 1px solid #e9eef4;
          border-bottom: 1px solid #e9eef4;
        }

        .category-list {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
        }

        .category-button {
          padding: 9px 12px;
          border: 1px solid transparent;
          border-radius: 5px;
          background: transparent;
          color: #64748b;
          font: inherit;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
          transition: all .2s;
        }

        .category-button:hover {
          border-color: #d9e8f6;
          color: #1765b5;
        }

        .category-button.active {
          border-color: #1765b5;
          background: #1765b5;
          color: #fff;
        }

        .search-box {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 8px;
          width: 230px;
          height: 40px;
          padding: 0 11px;
          border: 1px solid #dce5ef;
          border-radius: 6px;
          color: #8292a5;
        }

        .search-box > span { font-size: 22px; }

        .search-box input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #172b45;
          font: inherit;
          font-size: 12px;
        }

        .search-box button {
          border: 0;
          background: none;
          color: #64748b;
          font-size: 19px;
          cursor: pointer;
        }

        .result-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 23px 0 17px;
          color: #7a899b;
          font-size: 11px;
        }

        .result-line strong { color: #1765b5; }
        .result-note { font-size: 9px; letter-spacing: 1.3px; }

        .post-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .post-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e5ebf2;
          border-radius: 9px;
          background: #fff;
          color: inherit;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .post-card:hover {
          transform: translateY(-5px);
          border-color: #c9dced;
          box-shadow: 0 15px 32px rgba(19,55,91,.1);
        }

        .post-art {
          position: relative;
          display: grid;
          place-items: center;
          height: 165px;
          overflow: hidden;
          background: linear-gradient(135deg, #e5f1fb, #c8def2);
        }

        .post-art::before,
        .post-art::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(23,101,181,.17);
          border-radius: 50%;
        }

        .post-art::after {
          width: 125px;
          height: 125px;
        }

        .art-1 { background: linear-gradient(135deg, #e8eef9, #cbd8ed); }
        .art-2 { background: linear-gradient(135deg, #e5f3f1, #c4e4df); }
        .art-3 { background: linear-gradient(135deg, #f0ecfb, #d8d0f1); }
        .art-4 { background: linear-gradient(135deg, #f7efe3, #ead9bd); }
        .art-5 { background: linear-gradient(135deg, #e8eff5, #c9d8e7); }

        .art-index {
          position: absolute;
          top: 13px;
          left: 15px;
          color: rgba(16,43,80,.3);
          font-size: 28px;
          font-weight: 900;
        }

        .art-center {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 8px;
          color: #285a8b;
        }

        .art-symbol {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border: 1px solid rgba(40,90,139,.3);
          border-radius: 15px;
          background: rgba(255,255,255,.55);
          font-size: 30px;
          font-weight: 800;
        }

        .art-center > span:last-child {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .art-corner {
          position: absolute;
          right: 14px;
          bottom: 12px;
          color: rgba(16,43,80,.35);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .post-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 19px 19px 15px;
        }

        .post-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .post-date {
          color: #91a0b0;
          font-size: 10px;
          white-space: nowrap;
        }

        .post-card h3 {
          margin: 15px 0 9px;
          color: #142f50;
          font-size: 17px;
          line-height: 1.5;
          font-weight: 800;
          transition: color .2s;
        }

        .post-card:hover h3 { color: #1765b5; }

        .post-card-content > p {
          display: -webkit-box;
          overflow: hidden;
          margin: 0 0 20px;
          color: #718096;
          font-size: 12px;
          line-height: 1.75;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        .post-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 13px;
          border-top: 1px solid #edf1f5;
          color: #95a2b1;
          font-size: 10px;
        }

        .card-arrow {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 50%;
          background: #eff6fc;
          color: #1765b5;
          font-size: 17px;
          transition: all .2s;
        }

        .post-card:hover .card-arrow {
          background: #1765b5;
          color: #fff;
          transform: rotate(45deg);
        }

        .empty-state {
          padding: 65px 20px;
          text-align: center;
          border: 1px dashed #d7e2ed;
          border-radius: 10px;
          background: #f8fbfe;
        }

        .empty-state > span {
          color: #1765b5;
          font-size: 35px;
        }

        .empty-state h3 { color: #102b50; }
        .empty-state p { color: #718096; font-size: 13px; }

        .empty-state button {
          margin-top: 12px;
          padding: 11px 17px;
          border: 0;
          border-radius: 5px;
          background: #1765b5;
          color: white;
          font-weight: 750;
          cursor: pointer;
        }

        .question-section {
          padding: 75px 0;
          background: #f2f7fc;
        }

        .question-layout {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          align-items: start;
          gap: 75px;
        }

        .question-copy h2 {
          margin-top: 13px;
          font-size: 39px;
        }

        .question-copy > p {
          max-width: 400px;
          color: #65768b;
          font-size: 14px;
          line-height: 1.85;
        }

        .question-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 25px;
          color: #708197;
          font-size: 11px;
          line-height: 1.7;
        }

        .question-note span {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #dcecf9;
          color: #1765b5;
          font-weight: 900;
        }

        .question-form {
          padding: 28px;
          border: 1px solid #e1eaf3;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 12px 35px rgba(22,58,94,.05);
        }

        .question-form label {
          display: block;
          margin-bottom: 11px;
          color: #17395e;
          font-size: 13px;
          font-weight: 800;
        }

        .question-form textarea {
          display: block;
          width: 100%;
          box-sizing: border-box;
          resize: vertical;
          padding: 14px;
          border: 1px solid #dce6f0;
          border-radius: 6px;
          outline: none;
          color: #17395e;
          background: #fbfdff;
          font: inherit;
          font-size: 13px;
          line-height: 1.7;
          transition: border-color .2s, box-shadow .2s;
        }

        .question-form textarea:focus {
          border-color: #3984c4;
          box-shadow: 0 0 0 3px rgba(57,132,196,.1);
        }

        .question-form textarea::placeholder { color: #a0adbb; }

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 15px;
        }

        .form-footer > span {
          color: #98a5b4;
          font-size: 10px;
        }

        .form-footer button {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 12px 17px;
          border: 0;
          border-radius: 5px;
          background: #155b9d;
          color: #fff;
          font: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .form-footer button:hover {
          transform: translateY(-2px);
          background: #0e477e;
        }

        .form-footer button span { font-size: 17px; }

        .form-notice {
          margin: 15px 0 0;
          padding: 11px 13px;
          border-radius: 5px;
          background: #eef6fc;
          color: #245d8d;
          font-size: 11px;
          line-height: 1.6;
        }

        .saved-questions {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e8eef4;
        }

        .saved-questions strong {
          color: #17395e;
          font-size: 11px;
        }

        .saved-questions p {
          margin: 9px 0 0;
          padding: 9px 11px;
          border-radius: 5px;
          background: #f6f9fc;
          color: #66788d;
          font-size: 11px;
          line-height: 1.6;
        }

        .blog-bottom {
          padding: 42px 0;
          background: #102b50;
          color: #fff;
        }

        .bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .bottom-inner .eyebrow { color: #91c8f3; }
        .bottom-inner h2 {
          margin: 9px 0 0;
          color: #fff;
          font-size: clamp(21px, 3vw, 29px);
        }

        .bottom-button {
          flex-shrink: 0;
          background: #fff;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes orbit {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr .8fr; }
          .hero-visual { transform: scale(.85); }
          .post-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .blog-toolbar { align-items: flex-start; flex-direction: column; }
          .search-box { width: min(100%, 350px); }
          .question-layout { gap: 35px; }
        }

        @media (max-width: 600px) {
          .blog-container { width: min(100% - 32px, 460px); }
          .hero-label { padding-top: 34px; font-size: 9px; }
          .hero-content {
            display: block;
            min-height: auto;
            padding: 45px 0 20px;
          }
          .hero-copy h1 { font-size: 43px; letter-spacing: -1.8px; }
          .hero-copy p { font-size: 13px; line-height: 1.8; }
          .hero-visual { display: none; }
          .hero-stats {
            justify-content: space-between;
            gap: 12px;
            padding: 19px 0 22px;
          }
          .hero-stats strong { font-size: 18px; }
          .hero-stats span { max-width: 95px; font-size: 10px; line-height: 1.5; }
          .blog-main { padding: 55px 0 60px; }
          .section-heading { align-items: flex-start; }
          .section-heading h2 { font-size: 29px; }
          .section-heading p { max-width: 320px; font-size: 12px; }
          .heading-decoration { display: none; }
          .featured-post { grid-template-columns: 1fr; }
          .featured-art { min-height: 215px; }
          .featured-document { transform: scale(.82) rotate(-3deg); }
          .featured-content { padding: 24px 20px 27px; }
          .featured-content h3 { font-size: 22px; }
          .featured-content > p { font-size: 12px; }
          .blog-toolbar { gap: 13px; }
          .category-list {
            width: 100%;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 7px;
            scrollbar-width: thin;
          }
          .category-button { flex-shrink: 0; }
          .search-box { width: 100%; box-sizing: border-box; }
          .result-note { display: none; }
          .post-grid { grid-template-columns: 1fr; gap: 15px; }
          .post-card { display: grid; grid-template-columns: 112px minmax(0, 1fr); }
          .post-art { height: 100%; min-height: 175px; }
          .art-symbol { width: 43px; height: 43px; font-size: 23px; }
          .art-center > span:last-child { font-size: 6px; letter-spacing: 1px; }
          .art-index { top: 8px; left: 9px; font-size: 19px; }
          .art-corner { right: 7px; bottom: 7px; font-size: 8px; }
          .post-card-content { padding: 13px 12px 10px; }
          .post-card-top { align-items: flex-start; flex-direction: column; gap: 6px; }
          .post-category { padding: 5px 7px; font-size: 9px; }
          .post-date { font-size: 9px; }
          .post-card h3 { margin: 9px 0 6px; font-size: 13px; line-height: 1.45; }
          .post-card-content > p { margin-bottom: 9px; font-size: 10px; line-height: 1.5; -webkit-line-clamp: 2; }
          .post-card-bottom { padding-top: 8px; font-size: 9px; }
          .card-arrow { width: 23px; height: 23px; font-size: 14px; }
          .question-section { padding: 52px 0; }
          .question-layout { grid-template-columns: 1fr; gap: 25px; }
          .question-copy h2 { font-size: 32px; }
          .question-copy > p { font-size: 12px; }
          .question-form { padding: 19px 15px; }
          .form-footer { align-items: flex-start; }
          .form-footer button { gap: 10px; padding: 11px 13px; }
          .bottom-inner { align-items: flex-start; flex-direction: column; }
          .bottom-inner h2 { font-size: 22px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-blog *,
          .apa-blog *::before,
          .apa-blog *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
