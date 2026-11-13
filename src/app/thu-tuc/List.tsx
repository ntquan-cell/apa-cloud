
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { groups, norm, procedures } from "@/lib/data";

export default function List({ initialGroup }: { initialGroup: string }) {
  const [g, setG] = useState(initialGroup);
  const [q, setQ] = useState("");

  const items = useMemo(
    () =>
      procedures.filter(
        (p) =>
          (!g || p.group === g) &&
          (!q || norm(p.title + " " + p.summary).includes(norm(q)))
      ),
    [g, q]
  );

  const activeGroup = groups.find((x) => x.id === g);

  return (
    <section className="apa-procedure-list">
      <style>{`
        .apa-procedure-list {
          --apa-navy: #102b50;
          --apa-blue: #1769d2;
          --apa-muted: #64748b;
          color: #172b45;
          width: 100%;
        }

        .apa-search-panel {
          position: relative;
          overflow: hidden;
          padding: 25px;
          border: 1px solid #dce8f7;
          border-radius: 22px;
          background: linear-gradient(125deg, #f2f7ff 0%, #fff 58%, #edf5ff 100%);
          box-shadow: 0 12px 35px rgba(25, 65, 115, .07);
        }

        .apa-search-panel::before {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          right: -90px;
          top: -140px;
          border-radius: 50%;
          background: rgba(61, 143, 255, .12);
          filter: blur(2px);
          animation: apaSearchGlow 7s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes apaSearchGlow {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-25px, 25px) scale(1.2); }
        }

        .apa-search-heading {
          position: relative;
          z-index: 1;
          margin: 0 0 7px;
          color: var(--apa-navy);
          font-size: clamp(19px, 3vw, 23px);
          font-weight: 850;
          letter-spacing: -.5px;
        }

        .apa-search-description {
          position: relative;
          z-index: 1;
          margin: 0 0 18px;
          color: #60738d;
          font-size: 14px;
          line-height: 1.65;
        }

        .apa-search-box {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          min-height: 54px;
          padding: 0 16px;
          border: 1px solid #d8e3f1;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 5px 18px rgba(30, 70, 120, .06);
          transition: border-color .2s, box-shadow .2s;
        }

        .apa-search-box:focus-within {
          border-color: #4389e8;
          box-shadow: 0 0 0 4px rgba(49, 125, 224, .12);
        }

        .apa-search-icon {
          flex: 0 0 auto;
          color: #3979c7;
          font-size: 21px;
        }

        .apa-search-box input {
          width: 100%;
          min-width: 0;
          height: 50px;
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #183451;
          font-size: 15px;
          box-shadow: none;
        }

        .apa-search-box input::placeholder {
          color: #98a7b9;
        }

        .apa-filter-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 25px 0 12px;
        }

        .apa-filter-title {
          margin: 0;
          color: var(--apa-navy);
          font-size: 16px;
          font-weight: 800;
        }

        .apa-filter-hint {
          color: #8795a8;
          font-size: 12px;
        }

        .apa-chips {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .apa-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 38px;
          padding: 8px 14px;
          border: 1px solid #dce5ef;
          border-radius: 999px;
          background: #fff;
          color: #53677f;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
          transition: background .2s, color .2s, border-color .2s, transform .2s, box-shadow .2s;
        }

        .apa-chip:hover {
          transform: translateY(-2px);
          border-color: #8bb8ed;
          color: #1769d2;
          box-shadow: 0 5px 13px rgba(28, 91, 165, .08);
        }

        .apa-chip.active {
          border-color: #1769d2;
          background: #1769d2;
          color: #fff;
          box-shadow: 0 5px 13px rgba(23, 105, 210, .2);
        }

        .apa-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin: 0 0 14px;
        }

        .apa-results-title {
          margin: 0;
          color: #193655;
          font-size: 17px;
          font-weight: 850;
        }

        .apa-results-count {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 999px;
          background: #eaf3ff;
          color: #1769d2;
          font-size: 12px;
          font-weight: 750;
        }

        .apa-procedure-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .apa-procedure-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 190px;
          padding: 20px;
          overflow: hidden;
          border: 1px solid #e1e9f2;
          border-radius: 17px;
          background: #fff;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 5px 18px rgba(23, 51, 85, .045);
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
        }

        .apa-procedure-card::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 0;
          left: 0;
          top: 0;
          border-radius: 0 0 5px 5px;
          background: #2878dc;
          transition: height .22s ease;
        }

        .apa-procedure-card:hover {
          transform: translateY(-4px);
          border-color: #a9cbed;
          box-shadow: 0 13px 28px rgba(24, 76, 135, .11);
        }

        .apa-procedure-card:hover::after {
          height: 100%;
        }

        .apa-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 13px;
        }

        .apa-category-tag {
          display: inline-flex;
          align-items: center;
          max-width: 80%;
          padding: 5px 9px;
          overflow: hidden;
          border-radius: 7px;
          background: #eff6ff;
          color: #3472bb;
          font-size: 11px;
          font-weight: 750;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .apa-card-arrow {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 29px;
          height: 29px;
          border-radius: 50%;
          background: #f1f6fc;
          color: #397bc5;
          font-size: 17px;
          transition: background .2s, color .2s, transform .2s;
        }

        .apa-procedure-card:hover .apa-card-arrow {
          transform: translateX(3px);
          background: #1769d2;
          color: #fff;
        }

        .apa-card-title {
          margin: 0 0 9px;
          color: #163454;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.5;
          letter-spacing: -.2px;
        }

        .apa-card-summary {
          display: -webkit-box;
          margin: 0;
          overflow: hidden;
          color: #687b91;
          font-size: 13px;
          line-height: 1.7;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        .apa-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: auto;
          padding-top: 15px;
          color: #3977bb;
          font-size: 12px;
          font-weight: 750;
        }

        .apa-empty {
          grid-column: 1 / -1;
          padding: 38px 20px;
          border: 1px dashed #cbd9e9;
          border-radius: 17px;
          background: #f8fbff;
          text-align: center;
        }

        .apa-empty-icon {
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          margin: 0 auto 13px;
          border-radius: 16px;
          background: #eaf3ff;
          color: #2878d4;
          font-size: 25px;
        }

        .apa-empty h3 {
          margin: 0 0 7px;
          color: #183653;
          font-size: 16px;
        }

        .apa-empty p {
          margin: 0 0 15px;
          color: #718197;
          font-size: 13px;
        }

        .apa-empty a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 39px;
          padding: 0 15px;
          border-radius: 9px;
          background: #1769d2;
          color: #fff;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }

        .apa-empty a:hover {
          transform: translateY(-2px);
          background: #1056b3;
        }

        .apa-list-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 22px;
          padding: 14px 16px;
          border: 1px solid #dceafb;
          border-radius: 12px;
          background: #f4f8ff;
          color: #61758d;
          font-size: 12px;
          line-height: 1.65;
        }

        .apa-list-note span {
          flex: 0 0 auto;
          color: #3479c9;
          font-size: 16px;
        }

        @media (max-width: 640px) {
          .apa-search-panel {
            padding: 19px 15px;
            border-radius: 17px;
          }

          .apa-procedure-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .apa-procedure-card {
            min-height: 165px;
            padding: 17px;
          }

          .apa-chips {
            gap: 7px;
          }

          .apa-chip {
            min-height: 35px;
            padding: 7px 11px;
            font-size: 12px;
          }

          .apa-card-title {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-search-panel::before {
            animation: none;
          }

          .apa-procedure-card,
          .apa-chip,
          .apa-card-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="apa-search-panel">
        <h2 className="apa-search-heading">Tìm kiếm thủ tục hành chính</h2>
        <p className="apa-search-description">
          Tra cứu thông tin, điều kiện và hướng dẫn thực hiện thủ tục một cách
          nhanh chóng.
        </p>

        <div className="apa-search-box">
          <span className="apa-search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Nhập tên thủ tục… ví dụ: căn cước, sang tên xe"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Tìm kiếm thủ tục"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Xóa từ khóa tìm kiếm"
              style={{
                border: 0,
                background: "transparent",
                color: "#718197",
                cursor: "pointer",
                fontSize: 19,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="apa-filter-heading">
        <h3 className="apa-filter-title">Danh mục thủ tục</h3>
        <span className="apa-filter-hint">Chọn nhóm để lọc kết quả</span>
      </div>

      <div className="apa-chips">
        <button
          type="button"
          className={`apa-chip ${!g ? "active" : ""}`}
          onClick={() => setG("")}
        >
          <span>▦</span> Tất cả
        </button>

        {groups.map((x) => (
          <button
            type="button"
            key={x.id}
            className={`apa-chip ${g === x.id ? "active" : ""}`}
            onClick={() => setG(x.id)}
          >
            <span>{x.icon}</span>
            {x.name}
          </button>
        ))}
      </div>

      <div className="apa-results-bar">
        <h3 className="apa-results-title">
          {q
            ? "Kết quả tìm kiếm"
            : activeGroup
              ? activeGroup.name
              : "Tất cả thủ tục"}
        </h3>
        <span className="apa-results-count">
          {items.length} thủ tục
        </span>
      </div>

      <div className="apa-procedure-grid">
        {items.map((p) => {
          const category = groups.find((x) => x.id === p.group)?.name;

          return (
            <Link
              key={p.slug}
              href={`/thu-tuc/${p.slug}`}
              className="apa-procedure-card"
            >
              <div className="apa-card-top">
                <span className="apa-category-tag">
                  {category || "Thủ tục hành chính"}
                </span>
                <span className="apa-card-arrow" aria-hidden="true">↗</span>
              </div>

              <h3 className="apa-card-title">{p.title}</h3>
              <p className="apa-card-summary">{p.summary}</p>

              <div className="apa-card-bottom">
                <span>Xem hướng dẫn chi tiết</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          );
        })}

        {!items.length && (
          <div className="apa-empty">
            <div className="apa-empty-icon" aria-hidden="true">⌕</div>
            <h3>Chưa tìm thấy thủ tục phù hợp</h3>
            <p>
              Thử từ khóa khác hoặc hỏi trợ lý APA để được hướng dẫn.
            </p>
            <Link href={`/tro-ly${q ? `?q=${encodeURIComponent(q)}` : ""}`}>
              Hỏi trợ lý APA →
            </Link>
          </div>
        )}
      </div>

      <div className="apa-list-note">
        <span aria-hidden="true">ⓘ</span>
        <div>
          Thông tin thủ tục trên APA có tính chất hướng dẫn tham khảo. Trước
          khi nộp hồ sơ, hãy kiểm tra yêu cầu mới nhất tại cơ quan tiếp nhận
          hoặc Cổng Dịch vụ công có thẩm quyền.
        </div>
      </div>
    </section>
  );
}
