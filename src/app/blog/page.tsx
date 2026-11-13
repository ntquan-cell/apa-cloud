
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { posts } from "@/lib/site";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) =>
      `${p.title} ${p.excerpt} ${p.date}`.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <main className="apa-blog">
      <style jsx global>{`
        .apa-blog {
          min-height: 100vh;
          background: #f4f7fc;
          color: #173252;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          padding-bottom: 75px;
        }
        .apa-blog-hero {
          position: relative;
          overflow: hidden;
          padding: 75px 22px 65px;
          background: linear-gradient(120deg, #071b3b, #123d72 60%, #0876a9);
          color: white;
        }
        .apa-blog-hero:before,
        .apa-blog-hero:after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: #ffffff12;
          animation: blogFloat 9s ease-in-out infinite alternate;
        }
        .apa-blog-hero:before {
          width: 330px;
          height: 330px;
          right: -60px;
          top: -170px;
        }
        .apa-blog-hero:after {
          width: 220px;
          height: 220px;
          left: 45%;
          bottom: -165px;
          animation-delay: -4s;
        }
        .apa-blog-inner,
        .apa-blog-container {
          width: min(1160px, calc(100% - 36px));
          margin: auto;
        }
        .apa-blog-inner {
          position: relative;
          z-index: 1;
          animation: blogFade .7s ease both;
        }
        .apa-blog-eyebrow {
          color: #9ddcff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .apa-blog-hero h1 {
          max-width: 780px;
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 49px);
          line-height: 1.13;
          letter-spacing: -1.3px;
        }
        .apa-blog-hero p {
          max-width: 730px;
          color: #dbeafe;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }
        .apa-blog-search {
          display: flex;
          max-width: 650px;
          margin-top: 27px;
        }
        .apa-blog-search input {
          width: 100%;
          border: 1px solid #ffffff45;
          border-radius: 12px;
          padding: 15px 18px;
          color: #173252;
          background: white;
          font: inherit;
          outline: none;
        }
        .apa-blog-search input:focus {
          box-shadow: 0 0 0 3px #9ddcff55;
        }
        .apa-blog-container {
          padding-top: 38px;
        }
        .apa-blog-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 15px;
          margin-bottom: 20px;
        }
        .apa-blog-heading h2 {
          color: #10294c;
          font-size: 25px;
          margin: 0;
        }
        .apa-blog-heading p {
          color: #687b95;
          font-size: 14px;
          margin: 7px 0 0;
        }
        .apa-blog-count {
          color: #64758b;
          font-size: 13px;
          white-space: nowrap;
        }
        .apa-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 19px;
        }
        .apa-blog-card {
          display: flex;
          flex-direction: column;
          min-height: 240px;
          padding: 23px;
          border: 1px solid #e1e9f3;
          border-radius: 17px;
          background: white;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 5px 20px #17365d08;
          animation: blogRise .45s ease both;
          transition: transform .22s, box-shadow .22s, border-color .22s;
        }
        .apa-blog-card:hover {
          transform: translateY(-6px);
          border-color: #a8cce9;
          box-shadow: 0 16px 35px #17365d15;
        }
        .apa-blog-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .apa-blog-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #eaf4ff;
          color: #1268a8;
          font-size: 21px;
        }
        .apa-blog-date {
          color: #74869d;
          font-size: 12px;
          font-weight: 600;
        }
        .apa-blog-card h3 {
          color: #173252;
          font-size: 18px;
          line-height: 1.45;
          margin: 19px 0 9px;
        }
        .apa-blog-card p {
          color: #64758b;
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 20px;
        }
        .apa-blog-read {
          margin-top: auto;
          color: #0871b5;
          font-size: 13px;
          font-weight: 800;
        }
        .apa-blog-empty {
          padding: 55px 20px;
          text-align: center;
          color: #64758b;
          background: white;
          border: 1px dashed #ccd9e7;
          border-radius: 16px;
        }
        .apa-blog-footer {
          margin-top: 35px;
          padding: 23px;
          border-radius: 15px;
          background: #eaf2fa;
          color: #526b87;
          font-size: 13px;
          line-height: 1.8;
        }
        @keyframes blogFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blogRise {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blogFloat {
          from { transform: translate(0,0); }
          to { transform: translate(-22px,18px); }
        }
        @media(max-width: 850px) {
          .apa-blog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media(max-width: 600px) {
          .apa-blog-hero { padding: 50px 0 45px; }
          .apa-blog-grid { grid-template-columns: 1fr; }
          .apa-blog-heading { align-items: start; flex-direction: column; }
        }
        @media(prefers-reduced-motion: reduce) {
          .apa-blog *, .apa-blog *:before, .apa-blog *:after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="apa-blog-hero">
        <div className="apa-blog-inner">
          <div className="apa-blog-eyebrow">APA · KIẾN THỨC HÀNH CHÍNH</div>
          <h1>Góc chia sẻ & kiến thức hành chính</h1>
          <p>
            Kinh nghiệm thực tế, hướng dẫn thủ tục và những cập nhật hữu ích
            giúp người dân, doanh nghiệp và tổ chức tiếp cận dịch vụ hành chính
            thuận tiện hơn.
          </p>

          <div className="apa-blog-search">
            <input
              type="search"
              placeholder="Tìm bài viết theo tiêu đề hoặc nội dung..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Tìm kiếm bài viết"
            />
          </div>
        </div>
      </section>

      <section className="apa-blog-container">
        <div className="apa-blog-heading">
          <div>
            <h2>Bài viết mới nhất</h2>
            <p>Kiến thức và hướng dẫn từ APA</p>
          </div>
          <span className="apa-blog-count">
            {filteredPosts.length} bài viết
          </span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="apa-blog-grid">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="apa-blog-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="apa-blog-card-top">
                  <div className="apa-blog-icon">▤</div>
                  <span className="apa-blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="apa-blog-read">Đọc bài viết →</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="apa-blog-empty">
            <div style={{ fontSize: 34 }}>⌕</div>
            <h3>Không tìm thấy bài viết</h3>
            <p>Hãy thử từ khóa khác.</p>
          </div>
        )}

        <div className="apa-blog-footer">
          <strong>APA – Trợ lý hành chính số</strong><br />
          Chia sẻ kiến thức để việc tìm hiểu và chuẩn bị thủ tục hành chính
          trở nên dễ dàng, minh bạch và thuận tiện hơn.
        </div>
      </section>
    </main>
  );
}
