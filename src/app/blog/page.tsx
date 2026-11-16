
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { posts } from "@/lib/site";

type SubmittedQuestion = {
  id: number;
  name: string;
  question: string;
  date: string;
};

const STORAGE_KEY = "apa-blog-questions-v1";

export default function Page() {
  const [search, setSearch] = useState("");

  // Dữ liệu câu hỏi
  const [questions, setQuestions] = useState<SubmittedQuestion[]>([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [storageReady, setStorageReady] = useState(false);

  // Đọc câu hỏi đã lưu trong trình duyệt
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setQuestions(parsed);
        }
      }
    } catch {
      setQuestions([]);
    } finally {
      setStorageReady(true);
    }
  }, []);

  // Lưu câu hỏi sau khi dữ liệu đã được tải
  useEffect(() => {
    if (!storageReady) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
    } catch {
      setMessage("Không thể lưu câu hỏi trên trình duyệt này.");
    }
  }, [questions, storageReady]);

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((p) =>
      `${p.title} ${p.excerpt} ${p.date}`.toLowerCase().includes(q)
    );
  }, [search]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanQuestion = question.trim();
    const cleanName = name.trim() || "Người dùng APA";

    if (cleanQuestion.length < 5) {
      setMessage("Vui lòng nhập câu hỏi cụ thể hơn.");
      return;
    }

    if (cleanQuestion.length > 2000) {
      setMessage("Câu hỏi không được vượt quá 2.000 ký tự.");
      return;
    }

    const newQuestion: SubmittedQuestion = {
      id: Date.now(),
      name: cleanName,
      question: cleanQuestion,
      date: new Date().toLocaleDateString("vi-VN"),
    };

    setQuestions((previous) => [newQuestion, ...previous]);
    setQuestion("");
    setName("");
    setMessage("Câu hỏi đã được ghi nhận trên thiết bị của bạn.");
  };

  return (
    <main className="apa-blog">
      <section className="apa-blog-hero">
        <div className="blog-glow blog-glow-one" />
        <div className="blog-glow blog-glow-two" />

        <div className="apa-blog-inner">
          <div className="apa-blog-eyebrow">
            APA · KIẾN THỨC HÀNH CHÍNH
          </div>

          <h1>Góc chia sẻ & kiến thức hành chính</h1>

          <p>
            Kinh nghiệm thực tế, hướng dẫn thủ tục và những cập nhật hữu ích
            giúp người dân, doanh nghiệp và tổ chức tiếp cận dịch vụ hành chính
            thuận tiện hơn.
          </p>

          <div className="apa-blog-search">
            <span>⌕</span>
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

      {/* KHU VỰC GỬI CÂU HỎI */}
      <section className="apa-question-section">
        <div className="apa-question-layout">
          <div className="apa-question-intro">
            <div className="question-eyebrow">ASK APA · HỎI ĐÁP</div>

            <h2>
              Bạn đang có <span>thắc mắc?</span>
            </h2>

            <p>
              Hãy viết câu hỏi về thủ tục hành chính, giấy tờ, biểu mẫu hoặc
              những vấn đề bạn đang gặp phải. APA mong muốn lắng nghe và
              hỗ trợ bạn.
            </p>

            <div className="question-benefit">
              <span>✦</span>
              <div>
                <strong>Đặt câu hỏi dễ dàng</strong>
                <small>Viết bằng ngôn ngữ tự nhiên, không cần thuật ngữ phức tạp.</small>
              </div>
            </div>

            <div className="question-benefit">
              <span>✓</span>
              <div>
                <strong>Lưu lại câu hỏi</strong>
                <small>Câu hỏi đã gửi được ghi nhớ trên trình duyệt hiện tại.</small>
              </div>
            </div>
          </div>

          <div className="apa-question-card">
            <div className="question-card-heading">
              <div className="question-card-icon">?</div>
              <div>
                <h3>Gửi câu hỏi cho APA</h3>
                <p>Điền nội dung bên dưới để ghi nhận câu hỏi.</p>
              </div>
            </div>

            <form className="apa-question-form" onSubmit={handleSubmit}>
              <label htmlFor="apa-question-name">
                Tên của bạn <span>(Không bắt buộc)</span>
              </label>

              <input
                id="apa-question-name"
                type="text"
                placeholder="Ví dụ: Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
              />

              <label htmlFor="apa-question-content">
                Nội dung câu hỏi <span className="required">*</span>
              </label>

              <textarea
                id="apa-question-content"
                placeholder="Hãy viết câu hỏi của bạn tại đây...

Ví dụ: Tôi muốn đăng ký hộ kinh doanh thì cần chuẩn bị những giấy tờ gì?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                minLength={5}
                maxLength={2000}
                rows={5}
              />

              <div className="question-form-bottom">
                <span>{question.length}/2000 ký tự</span>
                <button type="submit" className="question-submit">
                  Gửi câu hỏi <span>↗</span>
                </button>
              </div>

              {message && (
                <div className="question-message" role="status">
                  {message}
                </div>
              )}
            </form>

            <div className="question-privacy">
              <span>ⓘ</span>
              Không nhập số căn cước, mật khẩu hoặc thông tin cá nhân nhạy cảm.
            </div>
          </div>
        </div>
      </section>

      {/* DANH SÁCH CÂU HỎI ĐÃ GHI NHẬN */}
      {questions.length > 0 && (
        <section className="apa-sent-questions">
          <div className="apa-blog-container">
            <div className="apa-blog-heading">
              <div>
                <div className="question-eyebrow">YOUR QUESTIONS</div>
                <h2>Câu hỏi đã ghi nhận</h2>
                <p>Các câu hỏi đã được lưu trên trình duyệt này.</p>
              </div>
              <span className="apa-blog-count">
                {questions.length} câu hỏi
              </span>
            </div>

            <div className="sent-question-list">
              {questions.slice(0, 5).map((item) => (
                <article className="sent-question" key={item.id}>
                  <div className="sent-question-icon">?</div>
                  <div className="sent-question-content">
                    <div className="sent-question-meta">
                      <strong>{item.name}</strong>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.question}</p>
                    <span className="sent-question-status">
                      <i /> Đã ghi nhận trên thiết bị
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DANH SÁCH BÀI VIẾT */}
      <section className="apa-blog-container">
        <div className="apa-blog-heading">
          <div>
            <div className="question-eyebrow">APA KNOWLEDGE</div>
            <h2>Bài viết mới nhất</h2>
            <p>Kiến thức và hướng dẫn từ APA</p>
          </div>

          <span className="apa-blog-count">
            {filteredPosts.length} bài viết
          </span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="apa-blog-grid">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="apa-blog-card"
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
            <div className="empty-icon">⌕</div>
            <h3>Không tìm thấy bài viết</h3>
            <p>Hãy thử từ khóa khác.</p>
          </div>
        )}

        <div className="apa-blog-footer">
          <strong>APA – Trợ lý hành chính số</strong>
          <p>
            Chia sẻ kiến thức để việc tìm hiểu và chuẩn bị thủ tục hành chính
            trở nên dễ dàng, minh bạch và thuận tiện hơn.
          </p>
        </div>
      </section>

      <style>{`
        .apa-blog {
          min-height: 100vh;
          padding-bottom: 65px;
          color: #142b49;
          background: #f5f8fd;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .apa-blog,
        .apa-blog * {
          box-sizing: border-box;
        }

        .apa-blog-hero {
          position: relative;
          overflow: hidden;
          padding: 75px 22px 65px;
          color: #fff;
          background: linear-gradient(120deg, #071b3b, #123d72 60%, #0876a9);
        }

        .blog-glow {
          position: absolute;
          border: 1px solid #ffffff20;
          border-radius: 50%;
          pointer-events: none;
        }

        .blog-glow-one {
          width: 350px;
          height: 350px;
          right: -80px;
          top: -170px;
          background: radial-gradient(circle, #4dbaff30, transparent 70%);
          animation: blogAmbient 9s ease-in-out infinite alternate;
        }

        .blog-glow-two {
          width: 240px;
          height: 240px;
          left: 44%;
          bottom: -180px;
          background: radial-gradient(circle, #ffffff18, transparent 70%);
          animation: blogAmbient 12s ease-in-out infinite alternate-reverse;
        }

        .apa-blog-inner,
        .apa-blog-container,
        .apa-question-layout {
          width: min(1160px, calc(100% - 36px));
          margin: auto;
        }

        .apa-blog-inner {
          position: relative;
          z-index: 1;
        }

        .apa-blog-eyebrow,
        .question-eyebrow {
          color: #1681c7;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 2px;
        }

        .apa-blog-eyebrow {
          color: #a9e3ff;
          font-size: 12px;
        }

        .apa-blog-hero h1 {
          max-width: 780px;
          margin: 15px 0;
          color: #fff;
          font-size: clamp(32px, 5vw, 49px);
          line-height: 1.16;
          letter-spacing: -1.3px;
          font-weight: 850;
        }

        .apa-blog-hero p {
          max-width: 730px;
          margin: 0;
          color: #e0edfb;
          font-size: 15px;
          line-height: 1.85;
        }

        .apa-blog-search {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 650px;
          margin-top: 27px;
          padding: 0 17px;
          background: #fff;
          border: 1px solid #ffffff80;
          border-radius: 12px;
          box-shadow: 0 9px 28px #06172e30;
        }

        .apa-blog-search span {
          color: #1768d5;
          font-size: 24px;
        }

        .apa-blog-search input {
          width: 100%;
          min-width: 0;
          min-height: 52px;
          padding: 10px 0;
          color: #173252;
          background: transparent;
          border: 0;
          outline: none;
          font: inherit;
          font-size: 14px;
          box-shadow: none;
        }

        .apa-blog-search input:focus {
          box-shadow: none;
        }

        /* QUESTION FORM */

        .apa-question-section {
          padding: 55px 0;
          background: linear-gradient(135deg, #edf5ff, #f8fbff 55%, #edf4ff);
          border-bottom: 1px solid #e0eaf5;
        }

        .apa-question-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 55px;
        }

        .apa-question-intro h2 {
          margin: 14px 0;
          color: #112d50;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.2;
          letter-spacing: -1.3px;
        }

        .apa-question-intro h2 span {
          color: #1768d5;
        }

        .apa-question-intro > p {
          color: #526a84;
          font-size: 14px;
          line-height: 1.9;
        }

        .question-benefit {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 22px;
        }

        .question-benefit > span {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          place-items: center;
          color: #1768d5;
          background: #fff;
          border: 1px solid #dce9f7;
          border-radius: 11px;
          font-size: 17px;
          font-weight: 900;
        }

        .question-benefit strong,
        .question-benefit small {
          display: block;
        }

        .question-benefit strong {
          color: #183555;
          font-size: 13px;
        }

        .question-benefit small {
          margin-top: 3px;
          color: #62768e;
          font-size: 11px;
          line-height: 1.6;
        }

        .apa-question-card {
          padding: 26px;
          background: #fff;
          border: 1px solid #dce7f3;
          border-radius: 18px;
          box-shadow: 0 15px 40px #153d6a12;
        }

        .question-card-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
        }

        .question-card-icon {
          display: grid;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, #1768e8, #36a5ef);
          border-radius: 13px;
          box-shadow: 0 7px 17px #1768e833;
          font-size: 23px;
          font-weight: 900;
        }

        .question-card-heading h3 {
          margin: 0;
          color: #142d4c;
          font-size: 17px;
        }

        .question-card-heading p {
          margin: 4px 0 0;
          color: #73849a;
          font-size: 11px;
        }

        .apa-question-form {
          display: grid;
          gap: 9px;
        }

        .apa-question-form label {
          margin-top: 7px;
          color: #263f5d;
          font-size: 12px;
          font-weight: 800;
        }

        .apa-question-form label span {
          color: #8594a7;
          font-size: 10px;
          font-weight: 500;
        }

        .apa-question-form label .required {
          color: #d33d4b;
        }

        .apa-question-form input,
        .apa-question-form textarea {
          width: 100%;
          padding: 12px 14px;
          color: #142b49;
          background: #f9fbfe;
          border: 1px solid #dce6f1;
          border-radius: 10px;
          font: inherit;
          font-size: 13px;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }

        .apa-question-form input {
          min-height: 45px;
        }

        .apa-question-form textarea {
          min-height: 135px;
          resize: vertical;
          line-height: 1.7;
        }

        .apa-question-form input:focus,
        .apa-question-form textarea:focus {
          background: #fff;
          border-color: #3988e4;
          box-shadow: 0 0 0 3px #1768e817;
        }

        .apa-question-form input::placeholder,
        .apa-question-form textarea::placeholder {
          color: #91a0b2;
        }

        .question-form-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-top: 5px;
        }

        .question-form-bottom > span {
          color: #7c8ca0;
          font-size: 10px;
        }

        .question-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 43px;
          padding: 0 19px;
          color: #fff;
          background: linear-gradient(110deg, #1768e8, #3289f5);
          border: 0;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 850;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s;
        }

        .question-submit:hover {
          box-shadow: 0 8px 20px #1768e833;
          transform: translateY(-2px);
        }

        .question-submit span {
          font-size: 17px;
        }

        .question-message {
          padding: 10px 12px;
          color: #146344;
          background: #eaf8f1;
          border: 1px solid #c8ebd9;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.6;
        }

        .question-privacy {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-top: 15px;
          color: #77879a;
          font-size: 10px;
          line-height: 1.6;
        }

        .question-privacy span {
          color: #1768d5;
          font-weight: 900;
        }

        /* SAVED QUESTIONS */

        .apa-sent-questions {
          padding: 40px 0 10px;
          background: #fff;
        }

        .apa-blog-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 15px;
          margin-bottom: 20px;
        }

        .apa-blog-heading h2 {
          margin: 7px 0 0;
          color: #10294c;
          font-size: 25px;
        }

        .apa-blog-heading p {
          margin: 6px 0 0;
          color: #637891;
          font-size: 13px;
        }

        .apa-blog-count {
          color: #536b84;
          font-size: 12px;
          white-space: nowrap;
        }

        .sent-question-list {
          display: grid;
          gap: 11px;
        }

        .sent-question {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px;
          background: #f8fbff;
          border: 1px solid #e1eaf4;
          border-radius: 12px;
        }

        .sent-question-icon {
          display: grid;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          place-items: center;
          color: #1768d5;
          background: #e5f1ff;
          border-radius: 9px;
          font-weight: 900;
        }

        .sent-question-content {
          flex: 1;
          min-width: 0;
        }

        .sent-question-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .sent-question-meta strong {
          color: #193858;
          font-size: 12px;
        }

        .sent-question-meta span {
          color: #8796a8;
          font-size: 10px;
        }

        .sent-question-content > p {
          margin: 8px 0;
          color: #3f5671;
          font-size: 13px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .sent-question-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #16815e;
          font-size: 10px;
          font-weight: 700;
        }

        .sent-question-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #15a578;
        }

        /* BLOG POSTS */

        .apa-blog-container {
          padding-top: 50px;
        }

        .apa-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 19px;
        }

        .apa-blog-card {
          display: flex;
          min-width: 0;
          min-height: 240px;
          flex-direction: column;
          padding: 23px;
          color: inherit;
          background: #fff;
          border: 1px solid #e1e9f3;
          border-radius: 16px;
          box-shadow: 0 5px 20px #17365d08;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .apa-blog-card:hover {
          color: inherit;
          border-color: #9fc7ee;
          box-shadow: 0 15px 35px #17365d15;
          transform: translateY(-5px);
        }

        .apa-blog-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .apa-blog-icon {
          display: grid;
          width: 43px;
          height: 43px;
          place-items: center;
          color: #1268a8;
          background: #eaf4ff;
          border-radius: 12px;
          font-size: 21px;
        }

        .apa-blog-date {
          color: #74869d;
          font-size: 11px;
          font-weight: 650;
        }

        .apa-blog-card h3 {
          margin: 19px 0 9px;
          color: #173252;
          font-size: 17px;
          line-height: 1.5;
        }

        .apa-blog-card p {
          margin: 0 0 20px;
          color: #566c85;
          font-size: 13px;
          line-height: 1.8;
        }

        .apa-blog-read {
          margin-top: auto;
          color: #0871b5;
          font-size: 12px;
          font-weight: 850;
        }

        .apa-blog-empty {
          padding: 50px 20px;
          color: #637891;
          background: #fff;
          border: 1px dashed #cbd9e8;
          border-radius: 15px;
          text-align: center;
        }

        .empty-icon {
          color: #1768d5;
          font-size: 34px;
        }

        .apa-blog-empty h3 {
          color: #173252;
        }

        .apa-blog-footer {
          margin-top: 35px;
          padding: 22px;
          color: #415c78;
          background: #eaf2fa;
          border: 1px solid #dce8f5;
          border-radius: 14px;
          font-size: 12px;
          line-height: 1.8;
        }

        .apa-blog-footer strong {
          color: #14385f;
        }

        .apa-blog-footer p {
          margin: 5px 0 0;
        }

        @keyframes blogAmbient {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-25px, 18px) scale(1.12); }
        }

        @media(max-width: 850px) {
          .apa-blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .apa-question-layout {
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }
        }

        @media(max-width: 650px) {
          .apa-blog-hero {
            padding: 48px 0 43px;
          }

          .apa-blog-hero h1 {
            font-size: 34px;
          }

          .apa-blog-hero p {
            font-size: 13px;
          }

          .apa-blog-inner,
          .apa-blog-container,
          .apa-question-layout {
            width: calc(100% - 30px);
          }

          .apa-question-section {
            padding: 38px 0;
          }

          .apa-question-layout {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .apa-question-intro h2 {
            font-size: 31px;
          }

          .apa-question-card {
            padding: 19px 15px;
          }

          .question-form-bottom {
            align-items: flex-end;
          }

          .apa-blog-container {
            padding-top: 37px;
          }

          .apa-blog-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .apa-blog-heading {
            align-items: flex-start;
          }

          .apa-blog-card {
            min-height: 210px;
          }

          .sent-question {
            padding: 13px;
          }

          .sent-question-meta {
            align-items: flex-start;
            flex-direction: column;
            gap: 3px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .apa-blog *,
          .apa-blog *::before,
          .apa-blog *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
