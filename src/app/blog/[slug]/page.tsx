
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);

  if (!p) notFound();

  return (
    <main className="apa-post">
      <style jsx global>{`
        .apa-post {
          min-height: 100vh;
          background: #f4f7fc;
          color: #243b56;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          padding-bottom: 70px;
        }
        .apa-post-hero {
          position: relative;
          overflow: hidden;
          padding: 65px 20px 75px;
          color: white;
          background: linear-gradient(120deg, #071b3b, #123d72 60%, #0876a9);
        }
        .apa-post-hero:after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          right: -80px;
          top: -160px;
          background: #ffffff12;
          animation: postFloat 8s ease-in-out infinite alternate;
        }
        .apa-post-inner {
          position: relative;
          z-index: 1;
          width: min(900px, calc(100% - 20px));
          margin: auto;
          animation: postFade .7s ease both;
        }
        .apa-post-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #c8e7ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 30px;
          transition: .2s;
        }
        .apa-post-back:hover {
          color: white;
          transform: translateX(-4px);
        }
        .apa-post-date {
          display: inline-block;
          color: #a8ddff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .apa-post-hero h1 {
          max-width: 850px;
          margin: 15px 0;
          color: white;
          font-size: clamp(29px, 5vw, 46px);
          line-height: 1.2;
          letter-spacing: -1px;
        }
        .apa-post-subtitle {
          color: #dbeafe;
          max-width: 760px;
          font-size: 16px;
          line-height: 1.8;
        }
        .apa-post-container {
          width: min(850px, calc(100% - 36px));
          margin: -28px auto 0;
          position: relative;
          z-index: 2;
          animation: postRise .65s ease both;
        }
        .apa-post-paper {
          background: white;
          border: 1px solid #e3eaf3;
          border-radius: 18px;
          padding: clamp(23px, 5vw, 55px);
          box-shadow: 0 15px 45px #17365d12;
        }
        .apa-post-paper p {
          color: #394e67;
          font-size: 16px;
          line-height: 2;
          margin: 0 0 23px;
          white-space: pre-line;
        }
        .apa-post-paper p:first-child::first-letter {
          color: #0876b5;
        }
        .apa-post-divider {
          width: 55px;
          height: 4px;
          border-radius: 5px;
          background: linear-gradient(90deg, #0876b5, #66c7ed);
          margin: 0 0 30px;
        }
        .apa-post-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid #e8edf4;
        }
        .apa-post-brand {
          color: #657b94;
          font-size: 13px;
          line-height: 1.7;
        }
        .apa-post-button {
          display: inline-block;
          padding: 11px 17px;
          border-radius: 10px;
          color: white;
          background: #0e68a8;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .2s;
        }
        .apa-post-button:hover {
          background: #084b80;
          transform: translateY(-2px);
        }
        @keyframes postFade {
          from { opacity: 0; transform: translateY(13px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes postRise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes postFloat {
          from { transform: translate(0,0); }
          to { transform: translate(-20px,20px); }
        }
        @media(max-width: 600px) {
          .apa-post-hero { padding: 45px 0 60px; }
          .apa-post-paper { border-radius: 14px; }
          .apa-post-paper p { font-size: 15px; line-height: 1.85; }
          .apa-post-bottom { align-items: flex-start; flex-direction: column; }
        }
        @media(prefers-reduced-motion: reduce) {
          .apa-post *, .apa-post *:before, .apa-post *:after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="apa-post-hero">
        <div className="apa-post-inner">
          <Link href="/blog" className="apa-post-back">
            ← Quay lại Blog APA
          </Link>

          <div className="apa-post-date">
            APA · {p.date}
          </div>

          <h1>{p.title}</h1>

          <div className="apa-post-subtitle">
            {p.excerpt}
          </div>
        </div>
      </section>

      <article className="apa-post-container">
        <div className="apa-post-paper">
          <div className="apa-post-divider" />

          {p.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="apa-post-bottom">
            <div className="apa-post-brand">
              <strong>APA – Trợ lý hành chính số</strong>
              <br />
              Đồng hành cùng bạn trong hành trình tìm hiểu thủ tục hành chính.
            </div>

            <Link href="/blog" className="apa-post-button">
              Xem bài viết khác →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
