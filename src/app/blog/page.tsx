
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "Tất cả",
  "Đất đai – nhà ở",
  "Hộ tịch – cư trú",
  "Kinh doanh",
  "Thuế – bảo hiểm",
  "Giấy phép",
  "Khác",
];

type CommunityPost = {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  likes: number;
  liked: boolean;
  comments: string[];
};

const initialPosts: CommunityPost[] = [
  {
    id: 1,
    title: "Thủ tục cấp lại giấy chứng nhận quyền sử dụng đất cần giấy tờ gì?",
    content:
      "Gia đình tôi bị thất lạc giấy chứng nhận quyền sử dụng đất. Tôi muốn tìm hiểu hồ sơ cần chuẩn bị và nơi tiếp nhận thủ tục. Anh chị nào đã thực hiện có thể chia sẻ kinh nghiệm không?",
    category: "Đất đai – nhà ở",
    author: "Nguyễn Minh Anh",
    date: "18/11/2026",
    likes: 18,
    liked: false,
    comments: [
      "Bạn nên kiểm tra hướng dẫn thủ tục tại cổng dịch vụ công của địa phương trước khi chuẩn bị hồ sơ.",
      "Nên liên hệ cơ quan tiếp nhận để xác nhận thành phần hồ sơ áp dụng cho trường hợp cụ thể.",
    ],
  },
  {
    id: 2,
    title: "Đăng ký khai sinh cho trẻ cần chuẩn bị những gì?",
    content:
      "Tôi muốn tìm hiểu các giấy tờ cần thiết khi đăng ký khai sinh cho con. Có thể thực hiện trực tuyến hay không?",
    category: "Hộ tịch – cư trú",
    author: "Trần Thu Hà",
    date: "17/11/2026",
    likes: 12,
    liked: false,
    comments: [
      "Bạn có thể tra cứu thủ tục đăng ký khai sinh trên Cổng dịch vụ công quốc gia.",
    ],
  },
  {
    id: 3,
    title: "Hộ kinh doanh cần lưu ý gì khi thay đổi địa chỉ?",
    content:
      "Tôi đang kinh doanh và dự định chuyển địa điểm hoạt động sang phường khác. Mong được mọi người chia sẻ những đầu việc cần kiểm tra.",
    category: "Kinh doanh",
    author: "Lê Quốc Bảo",
    date: "16/11/2026",
    likes: 9,
    liked: false,
    comments: [
      "Bạn nên kiểm tra thủ tục đăng ký thay đổi nội dung đăng ký hộ kinh doanh tại cơ quan có thẩm quyền.",
    ],
  },
  {
    id: 4,
    title: "Tra cứu thông tin tham gia bảo hiểm xã hội như thế nào?",
    content:
      "Tôi muốn kiểm tra quá trình tham gia bảo hiểm xã hội của mình và những thông tin cần chuẩn bị khi tra cứu.",
    category: "Thuế – bảo hiểm",
    author: "Phạm Đức Long",
    date: "15/11/2026",
    likes: 15,
    liked: false,
    comments: [
      "Bạn có thể tham khảo ứng dụng VssID và các kênh tra cứu chính thức của cơ quan bảo hiểm xã hội.",
    ],
  },
  {
    id: 5,
    title: "Tìm hiểu thủ tục xin giấy phép kinh doanh",
    content:
      "Tôi đang tìm hiểu các điều kiện và giấy tờ cần chuẩn bị trước khi đăng ký kinh doanh. Mong nhận được kinh nghiệm từ cộng đồng.",
    category: "Giấy phép",
    author: "Hoàng Minh",
    date: "14/11/2026",
    likes: 7,
    liked: false,
    comments: [],
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [expandedPost, setExpandedPost] = useState<number | null>(1);
  const [showComposer, setShowComposer] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Đất đai – nhà ở");
  const [commentDraft, setCommentDraft] = useState("");
  const [reportedPosts, setReportedPosts] = useState<number[]>([]);
  const [notice, setNotice] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "Tất cả" || post.category === activeCategory;
      const keyword = search.trim().toLowerCase();
      const matchesSearch =
        !keyword ||
        post.title.toLowerCase().includes(keyword) ||
        post.content.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, search]);

  function toggleLike(id: number) {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.likes + (post.liked ? -1 : 1),
            }
          : post
      )
    );
  }

  function submitPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newPost: CommunityPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      category,
      author: "Thành viên APA",
      date: "Vừa đăng",
      likes: 0,
      liked: false,
      comments: [],
    };

    setPosts((current) => [newPost, ...current]);
    setTitle("");
    setContent("");
    setShowComposer(false);
    setActiveCategory("Tất cả");
    setSearch("");
    setExpandedPost(newPost.id);
    setNotice("Bài viết minh họa đã được thêm vào danh sách.");
  }

  function submitComment(event: React.FormEvent<HTMLFormElement>, id: number) {
    event.preventDefault();
    if (!commentDraft.trim()) return;

    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, commentDraft.trim()] }
          : post
      )
    );

    setCommentDraft("");
    setNotice("Bình luận minh họa đã được thêm.");
  }

  function reportPost(id: number) {
    setReportedPosts((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  return (
    <main className="community-page">
      <header className="community-hero">
        <div className="community-wrap">
          <Link href="/blog" className="back-link">
            ← Quay lại Blog APA
          </Link>

          <div className="hero-label">APA DIGITAL · COMMUNITY</div>
          <h1>
            Cộng đồng
            <br />
            <span>cùng chia sẻ và tháo gỡ.</span>
          </h1>
          <p>
            Nơi mọi người đặt câu hỏi, chia sẻ kinh nghiệm và cùng tìm hiểu
            các vấn đề liên quan đến thủ tục hành chính.
          </p>

          <div className="hero-stats">
            <div>
              <strong>{posts.length.toString().padStart(2, "0")}</strong>
              <span>Chủ đề thảo luận</span>
            </div>
            <div>
              <strong>06</strong>
              <span>Nhóm lĩnh vực</span>
            </div>
            <div>
              <strong>APA</strong>
              <span>Kết nối cộng đồng</span>
            </div>
          </div>
        </div>
        <div className="community-decoration" aria-hidden="true">
          <div className="decoration-circle">APA</div>
          <span className="decoration-tag">Chia sẻ</span>
          <span className="decoration-tag second">Kết nối</span>
        </div>
      </header>

      <div className="community-wrap community-main">
        <section className="community-intro">
          <div>
            <span className="community-kicker">GÓC TRAO ĐỔI</span>
            <h2>Hỏi đáp cùng cộng đồng</h2>
            <p>
              Tìm kiếm chủ đề bạn quan tâm hoặc chia sẻ vấn đề đang cần hỗ trợ.
            </p>
          </div>
          <button
            className="primary-button"
            onClick={() => {
              setShowComposer(!showComposer);
              setNotice("");
            }}
          >
            {showComposer ? "Đóng biểu mẫu" : "+ Đặt câu hỏi"}
          </button>
        </section>

        {notice && <div className="community-notice">{notice}</div>}

        {showComposer && (
          <form className="composer" onSubmit={submitPost}>
            <div className="composer-heading">
              <div>
                <span className="community-kicker">CHIA SẺ CÙNG APA</span>
                <h3>Tạo chủ đề thảo luận</h3>
              </div>
              <span className="demo-tag">BẢN MINH HỌA</span>
            </div>

            <label htmlFor="post-title">Tiêu đề câu hỏi</label>
            <input
              id="post-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ví dụ: Hồ sơ đăng ký hộ kinh doanh gồm những gì?"
              required
            />

            <label htmlFor="post-category">Lĩnh vực</label>
            <select
              id="post-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.slice(1).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor="post-content">Nội dung chia sẻ</label>
            <textarea
              id="post-content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Mô tả vấn đề bạn đang gặp phải..."
              rows={5}
              required
            />

            <div className="composer-actions">
              <span>Vui lòng không đăng thông tin cá nhân nhạy cảm.</span>
              <button className="primary-button" type="submit">
                Đăng bài minh họa
              </button>
            </div>
          </form>
        )}

        <section className="community-tools">
          <div className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Tìm kiếm câu hỏi, chủ đề..."
              aria-label="Tìm kiếm bài viết"
            />
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={activeCategory === item ? "active" : ""}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <div className="discussion-heading">
          <div>
            <span className="community-kicker">CỘNG ĐỒNG APA</span>
            <h2>Chủ đề mới nhất</h2>
          </div>
          <span className="result-count">
            {filteredPosts.length} chủ đề
          </span>
        </div>

        <section className="discussion-list">
          {filteredPosts.length === 0 && (
            <div className="empty-state">
              <div>⌕</div>
              <h3>Chưa tìm thấy chủ đề phù hợp</h3>
              <p>Hãy thử từ khóa khác hoặc chọn một lĩnh vực khác.</p>
            </div>
          )}

          {filteredPosts.map((post) => (
            <article className="discussion-card" key={post.id}>
              <div className="post-topline">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>

              <h3>{post.title}</h3>
              <p className="post-excerpt">{post.content}</p>

              <div className="post-author">
                <span className="avatar">
                  {post.author.charAt(0).toUpperCase()}
                </span>
                <strong>{post.author}</strong>
                <span className="author-separator">·</span>
                <span>Chủ đề cộng đồng</span>
              </div>

              <div className="post-actions">
                <button
                  className={post.liked ? "liked" : ""}
                  onClick={() => toggleLike(post.id)}
                >
                  {post.liked ? "♥" : "♡"} Thích ({post.likes})
                </button>

                <button
                  onClick={() =>
                    setExpandedPost(
                      expandedPost === post.id ? null : post.id
                    )
                  }
                >
                  ▤ Bình luận ({post.comments.length})
                </button>

                <button
                  className="detail-toggle"
                  onClick={() =>
                    setExpandedPost(
                      expandedPost === post.id ? null : post.id
                    )
                  }
                >
                  {expandedPost === post.id ? "Thu gọn ↑" : "Thảo luận →"}
                </button>
              </div>

              {expandedPost === post.id && (
                <div className="comments-panel">
                  <h4>Trao đổi trong chủ đề</h4>

                  {post.comments.length === 0 ? (
                    <p className="no-comments">
                      Chưa có bình luận. Hãy là người đầu tiên chia sẻ ý kiến.
                    </p>
                  ) : (
                    <div className="comment-list">
                      {post.comments.map((comment, index) => (
                        <div className="comment-item" key={index}>
                          <span className="comment-avatar">
                            {index === 0 ? "A" : "B"}
                          </span>
                          <div>
                            <strong>
                              {index === 0 ? "Thành viên APA" : "Người tham gia"}
                            </strong>
                            <p>{comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <form
                    className="comment-form"
                    onSubmit={(event) => submitComment(event, post.id)}
                  >
                    <input
                      value={expandedPost === post.id ? commentDraft : ""}
                      onChange={(event) => setCommentDraft(event.target.value)}
                      placeholder="Viết bình luận của bạn..."
                      aria-label="Nội dung bình luận"
                    />
                    <button type="submit">Gửi</button>
                  </form>

                  <button
                    className="report-button"
                    onClick={() => reportPost(post.id)}
                  >
                    {reportedPosts.includes(post.id)
                      ? "Đã ghi nhận báo cáo minh họa"
                      : "⚑ Báo cáo nội dung"}
                  </button>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="community-guidelines">
          <div className="guideline-icon">✦</div>
          <div>
            <h3>Cùng xây dựng cộng đồng hữu ích</h3>
            <p>
              Chia sẻ thông tin có căn cứ, trao đổi lịch sự và bảo vệ dữ liệu
              cá nhân. Nội dung thảo luận chỉ mang tính tham khảo, không thay
              thế hướng dẫn chính thức từ cơ quan có thẩm quyền.
            </p>
          </div>
        </section>

        <div className="community-footer-link">
          <Link href="/blog">← Trở về Blog kiến thức APA</Link>
        </div>
      </div>

      <style>{`
        .community-page{min-height:100vh;background:#f4f7fc;color:#142b49;font-family:Inter,"Segoe UI",Arial,sans-serif}
        .community-wrap{width:min(1100px,calc(100% - 44px));margin:0 auto}
        .community-hero{position:relative;overflow:hidden;color:#fff;background:linear-gradient(120deg,#071a35,#0b2d59 65%,#14519a)}
        .community-hero:before{position:absolute;inset:0;content:"";opacity:.1;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:40px 40px}
        .community-hero .community-wrap{position:relative;z-index:2;padding-top:35px;padding-bottom:55px}
        .back-link{display:inline-block;margin-bottom:38px;color:#c7ddf6;font-size:13px;font-weight:700;text-decoration:none}
        .back-link:hover{color:#fff}
        .hero-label,.community-kicker{color:#3989e9;font-size:10px;font-weight:900;letter-spacing:1.7px}
        .hero-label{color:#82caff}
        .community-hero h1{max-width:680px;margin:16px 0;color:#fff;font-size:clamp(38px,5.5vw,58px);line-height:1.13;letter-spacing:-1.8px;font-weight:900}
        .community-hero h1 span{color:#7ccaff}
        .community-hero p{max-width:610px;color:#d3e3f6;font-size:15px;line-height:1.9}
        .hero-stats{display:flex;gap:48px;margin-top:35px}
        .hero-stats div{display:flex;flex-direction:column;gap:5px}
        .hero-stats strong{color:#fff;font-size:23px;font-weight:900}
        .hero-stats span{color:#b8cee8;font-size:11px}
        .community-decoration{position:absolute;top:50%;right:12%;width:230px;height:230px;transform:translateY(-40%);border:1px dashed rgba(173,216,255,.35);border-radius:50%}
        .decoration-circle{position:absolute;top:50%;left:50%;display:grid;width:125px;height:125px;transform:translate(-50%,-50%);color:#fff;background:radial-gradient(circle at 35% 25%,#2869ad,#071a35 75%);border:1px solid #8bdcff;border-radius:50%;box-shadow:0 0 45px rgba(51,160,255,.35);font-size:32px;font-weight:900;place-items:center}
        .decoration-tag{position:absolute;top:15px;left:70px;padding:8px 13px;color:#173d6c;background:#fff;border-radius:99px;font-size:11px;font-weight:800}
        .decoration-tag.second{top:auto;right:-15px;bottom:30px;left:auto}
        .community-main{padding-top:55px;padding-bottom:65px}
        .community-intro{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:28px}
        .community-intro h2,.discussion-heading h2{margin:8px 0;color:#09244a;font-size:28px;font-weight:900;letter-spacing:-.6px}
        .community-intro p{margin:0;color:#63758c;font-size:13px;line-height:1.8}
        .primary-button{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;padding:13px 19px;color:#fff;background:#125fc9;border:0;border-radius:10px;font-size:13px;font-weight:850;cursor:pointer;transition:background .2s ease}
        .primary-button:hover{background:#092f69}
        .community-notice{margin:0 0 20px;padding:13px 16px;color:#155c43;background:#e8f8f0;border:1px solid #c9eadb;border-radius:10px;font-size:13px}
        .composer{display:flex;flex-direction:column;gap:10px;margin-bottom:28px;padding:25px;background:#fff;border:1px solid #dce6f2;border-radius:16px;box-shadow:0 8px 25px rgba(12,43,83,.05)}
        .composer-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
        .composer-heading h3{margin:7px 0;color:#09244a;font-size:20px}
        .demo-tag{padding:6px 9px;color:#2362a3;background:#eaf3ff;border-radius:6px;font-size:9px;font-weight:900;letter-spacing:.8px}
        .composer label{margin-top:6px;color:#304967;font-size:12px;font-weight:800}
        .composer input,.composer select,.composer textarea{width:100%;padding:12px 13px;color:#193653;background:#fbfdff;border:1px solid #d8e2ee;border-radius:9px;font:inherit;font-size:13px;outline:none}
        .composer input:focus,.composer select:focus,.composer textarea:focus,.comment-form input:focus{border-color:#4b91df;box-shadow:0 0 0 3px rgba(75,145,223,.1)}
        .composer textarea{resize:vertical;line-height:1.7}
        .composer-actions{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-top:10px}
        .composer-actions span{color:#8492a4;font-size:11px}
        .community-tools{padding:20px;background:#fff;border:1px solid #e0e8f1;border-radius:15px}
        .search-box{display:flex;align-items:center;gap:11px;padding:0 14px;background:#f6f9fd;border:1px solid #dfe8f3;border-radius:10px}
        .search-box>span{color:#4985c7;font-size:25px}
        .search-box input{width:100%;height:46px;color:#193653;background:transparent;border:0;outline:none;font:inherit;font-size:13px}
        .category-list{display:flex;flex-wrap:wrap;gap:9px;margin-top:17px}
        .category-list button{padding:8px 12px;color:#536b87;background:#f3f6fa;border:1px solid #e4eaf2;border-radius:99px;font-size:11px;font-weight:750;cursor:pointer}
        .category-list button.active{color:#fff;background:#145eb5;border-color:#145eb5}
        .discussion-heading{display:flex;align-items:end;justify-content:space-between;margin:40px 0 18px}
        .discussion-heading h2{margin-bottom:0;font-size:25px}
        .result-count{padding:7px 11px;color:#245b9b;background:#e8f2ff;border-radius:99px;font-size:11px;font-weight:800}
        .discussion-list{display:flex;flex-direction:column;gap:15px}
        .discussion-card{padding:23px 25px;background:#fff;border:1px solid #dfe7f1;border-radius:15px;box-shadow:0 5px 17px rgba(12,43,83,.035);transition:border-color .2s ease}
        .discussion-card:hover{border-color:#b9d1ec}
        .post-topline{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .post-category{padding:6px 10px;color:#1761b8;background:#eaf3ff;border-radius:99px;font-size:10px;font-weight:850}
        .post-date{color:#8b99aa;font-size:11px}
        .discussion-card h3{margin:15px 0 8px;color:#102d50;font-size:18px;line-height:1.5;font-weight:850}
        .post-excerpt{margin:0;color:#60738a;font-size:13px;line-height:1.85}
        .post-author{display:flex;align-items:center;gap:8px;margin-top:17px;color:#77889c;font-size:11px}
        .post-author strong{color:#314b68;font-size:11px}
        .avatar,.comment-avatar{display:grid;flex-shrink:0;width:29px;height:29px;color:#1761b8;background:#e8f2ff;border-radius:50%;font-size:12px;font-weight:850;place-items:center}
        .author-separator{color:#b4bfcb}
        .post-actions{display:flex;align-items:center;gap:19px;margin-top:17px;padding-top:14px;border-top:1px solid #edf1f6}
        .post-actions button,.report-button{padding:0;color:#657a94;background:none;border:0;font-size:11px;font-weight:750;cursor:pointer}
        .post-actions button:hover,.post-actions button.liked{color:#1768d2}
        .post-actions button.liked{color:#d34b67}
        .post-actions .detail-toggle{margin-left:auto;color:#1768d2}
        .comments-panel{margin-top:17px;padding:18px;background:#f7faff;border:1px solid #e5edf7;border-radius:11px}
        .comments-panel h4{margin:0 0 14px;color:#183a61;font-size:13px}
        .no-comments{color:#8291a3;font-size:12px}
        .comment-list{display:flex;flex-direction:column;gap:13px}
        .comment-item{display:flex;align-items:flex-start;gap:10px}
        .comment-avatar{width:27px;height:27px;color:#28765f;background:#e3f5ee}
        .comment-item strong{color:#36516e;font-size:11px}
        .comment-item p{margin:4px 0 0;color:#60738a;font-size:12px;line-height:1.7}
        .comment-form{display:flex;gap:9px;margin-top:16px}
        .comment-form input{flex:1;min-width:0;padding:11px 12px;color:#193653;background:#fff;border:1px solid #dce6f1;border-radius:8px;font:inherit;font-size:12px;outline:none}
        .comment-form button{padding:0 17px;color:#fff;background:#145eb5;border:0;border-radius:8px;font-size:12px;font-weight:800;cursor:pointer}
        .report-button{margin-top:14px;color:#8b99aa;font-size:10px}
        .empty-state{padding:50px 20px;text-align:center;background:#fff;border:1px solid #e0e8f1;border-radius:15px}
        .empty-state>div{color:#75a9e3;font-size:35px}
        .empty-state h3{color:#183a61;font-size:17px}
        .empty-state p{color:#788ba2;font-size:12px}
        .community-guidelines{display:flex;align-items:flex-start;gap:17px;margin-top:35px;padding:24px;background:#eaf3ff;border:1px solid #d5e6f9;border-radius:14px}
        .guideline-icon{display:grid;flex-shrink:0;width:39px;height:39px;color:#1768c9;background:#fff;border-radius:11px;font-size:21px;place-items:center}
        .community-guidelines h3{margin:1px 0 7px;color:#12365e;font-size:15px}
        .community-guidelines p{margin:0;color:#5c7390;font-size:12px;line-height:1.8}
        .community-footer-link{margin-top:30px;text-align:center}
        .community-footer-link a{color:#1768c9;font-size:12px;font-weight:800;text-decoration:none}
        .community-footer-link a:hover{text-decoration:underline}
        @media(max-width:800px){.community-decoration{right:-80px;opacity:.35}}
        @media(max-width:600px){.community-wrap{width:calc(100% - 32px)}.community-hero .community-wrap{padding-top:25px;padding-bottom:38px}.back-link{margin-bottom:30px}.community-hero h1{font-size:38px}.community-hero p{font-size:13px}.community-decoration{right:-135px;opacity:.2}.hero-stats{gap:22px}.hero-stats strong{font-size:19px}.hero-stats span{font-size:9px}.community-main{padding-top:37px;padding-bottom:45px}.community-intro{align-items:flex-start;flex-direction:column}.community-intro h2{font-size:24px}.primary-button{width:100%}.composer{padding:18px}.composer-actions{align-items:stretch;flex-direction:column}.discussion-heading h2{font-size:22px}.discussion-card{padding:18px}.discussion-card h3{font-size:16px}.post-actions{gap:13px;flex-wrap:wrap}.post-actions .detail-toggle{margin-left:auto}.community-guidelines{padding:18px}.comment-form{gap:6px}.comment-form button{padding:0 12px}}
        @media(prefers-reduced-motion:reduce){.discussion-card,.primary-button{transition:none}}
      `}</style>
    </main>
  );
}
