
"use client";

import { useMemo, useState } from "react";
import { useLocal } from "@/lib/useLocal";

type DocumentItem = {
  id: number;
  name: string;
  number: string;
  expiry: string;
  category: string;
};

type CaseStatus =
  | "Đã tiếp nhận"
  | "Đang xử lý"
  | "Đã gửi cơ quan tiếp nhận"
  | "Chờ kết quả"
  | "Đã có kết quả";

type CaseItem = {
  id: number;
  code: string;
  name: string;
  submittedAt: string;
  expectedAt: string;
  status: CaseStatus;
  note: string;
};

const documentTypes = [
  "Căn cước công dân",
  "Hộ chiếu",
  "Giấy phép lái xe",
  "Thẻ BHYT",
  "Đăng kiểm xe",
  "Giấy tờ khác",
];

const statuses: CaseStatus[] = [
  "Đã tiếp nhận",
  "Đang xử lý",
  "Đã gửi cơ quan tiếp nhận",
  "Chờ kết quả",
  "Đã có kết quả",
];

const statusProgress: Record<CaseStatus, number> = {
  "Đã tiếp nhận": 15,
  "Đang xử lý": 40,
  "Đã gửi cơ quan tiếp nhận": 65,
  "Chờ kết quả": 85,
  "Đã có kết quả": 100,
};

const sampleDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Căn cước công dân",
    number: "001234******",
    expiry: "2027-06-15",
    category: "Cá nhân",
  },
  {
    id: 2,
    name: "Giấy phép lái xe",
    number: "123456789",
    expiry: "2026-12-15",
    category: "Phương tiện",
  },
  {
    id: 3,
    name: "Thẻ BHYT",
    number: "DN401234567",
    expiry: "2026-11-25",
    category: "Bảo hiểm",
  },
];

const sampleCases: CaseItem[] = [
  {
    id: 101,
    code: "APA-2026-001",
    name: "Đăng ký hộ kinh doanh",
    submittedAt: "2026-11-05",
    expectedAt: "2026-11-20",
    status: "Đang xử lý",
    note: "Đang hoàn thiện và kiểm tra hồ sơ.",
  },
  {
    id: 102,
    code: "APA-2026-002",
    name: "Thủ tục đăng ký mã số thuế",
    submittedAt: "2026-11-08",
    expectedAt: "2026-11-18",
    status: "Đã gửi cơ quan tiếp nhận",
    note: "Đã chuyển hồ sơ, đang chờ phản hồi.",
  },
  {
    id: 103,
    code: "APA-2026-003",
    name: "Thủ tục cấp đổi giấy phép lái xe",
    submittedAt: "2026-11-10",
    expectedAt: "2026-11-25",
    status: "Đã tiếp nhận",
    note: "APA đã tiếp nhận yêu cầu.",
  },
];

function formatDate(value: string) {
  if (!value) return "Chưa cập nhật";
  const date = new Date(value + "T00:00:00");
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("vi-VN");
}

function getDays(value: string) {
  if (!value) return 0;
  const target = new Date(value + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / 86400000);
}

function getDocumentState(expiry: string) {
  const days = getDays(expiry);

  if (days < 0) {
    return {
      label: `Quá hạn ${Math.abs(days)} ngày`,
      color: "danger",
      days,
    };
  }

  if (days <= 15) {
    return { label: `Còn ${days} ngày`, color: "danger", days };
  }

  if (days <= 30) {
    return { label: `Còn ${days} ngày`, color: "warning", days };
  }

  if (days <= 60) {
    return { label: `Còn ${days} ngày`, color: "info", days };
  }

  return { label: `Còn ${days} ngày`, color: "success", days };
}

export default function Page() {
  const [documents, setDocuments] = useLocal<DocumentItem[]>(
    "apa-reminders-v2",
    sampleDocuments
  );

  const [cases, setCases] = useLocal<CaseItem[]>(
    "apa-cases-v1",
    sampleCases
  );

  const [activeTab, setActiveTab] = useState<"all" | "documents" | "cases">(
    "all"
  );

  const [showDocumentForm, setShowDocumentForm] = useState(false);
  const [showCaseForm, setShowCaseForm] = useState(false);
  const [editingCase, setEditingCase] = useState<number | null>(null);

  const [documentName, setDocumentName] = useState(documentTypes[0]);
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentExpiry, setDocumentExpiry] = useState("");

  const [caseName, setCaseName] = useState("");
  const [caseSubmitted, setCaseSubmitted] = useState("");
  const [caseExpected, setCaseExpected] = useState("");
  const [caseStatus, setCaseStatus] = useState<CaseStatus>("Đã tiếp nhận");
  const [caseNote, setCaseNote] = useState("");

  const [search, setSearch] = useState("");

  const sortedDocuments = useMemo(
    () =>
      [...documents].sort((a, b) => a.expiry.localeCompare(b.expiry)),
    [documents]
  );

  const activeCases = cases.filter((item) => item.status !== "Đã có kết quả");
  const expiredDocuments = documents.filter(
    (item) => getDays(item.expiry) <= 30
  );

  const filteredCases = cases.filter((item) =>
    `${item.name} ${item.code}`.toLowerCase().includes(search.toLowerCase())
  );

  function addDocument() {
    if (!documentExpiry) return;

    const newItem: DocumentItem = {
      id: Date.now(),
      name: documentName,
      number: documentNumber.trim(),
      expiry: documentExpiry,
      category: "Cá nhân",
    };

    setDocuments([...documents, newItem]);
    setDocumentNumber("");
    setDocumentExpiry("");
    setShowDocumentForm(false);
  }

  function saveCase() {
    if (!caseName.trim() || !caseSubmitted || !caseExpected) return;

    if (editingCase !== null) {
      setCases(
        cases.map((item) =>
          item.id === editingCase
            ? {
                ...item,
                name: caseName.trim(),
                submittedAt: caseSubmitted,
                expectedAt: caseExpected,
                status: caseStatus,
                note: caseNote,
              }
            : item
        )
      );
    } else {
      const newItem: CaseItem = {
        id: Date.now(),
        code: `APA-${new Date().getFullYear()}-${String(
          cases.length + 1
        ).padStart(3, "0")}`,
        name: caseName.trim(),
        submittedAt: caseSubmitted,
        expectedAt: caseExpected,
        status: caseStatus,
        note: caseNote,
      };

      setCases([...cases, newItem]);
    }

    resetCaseForm();
  }

  function resetCaseForm() {
    setShowCaseForm(false);
    setEditingCase(null);
    setCaseName("");
    setCaseSubmitted("");
    setCaseExpected("");
    setCaseStatus("Đã tiếp nhận");
    setCaseNote("");
  }

  function editCase(item: CaseItem) {
    setEditingCase(item.id);
    setCaseName(item.name);
    setCaseSubmitted(item.submittedAt);
    setCaseExpected(item.expectedAt);
    setCaseStatus(item.status);
    setCaseNote(item.note);
    setShowCaseForm(true);
  }

  function updateCaseStatus(id: number, status: CaseStatus) {
    setCases(
      cases.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  return (
    <main className="apa-tracking">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="tracking-container">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              APA DIGITAL ASSISTANT
            </div>

            <h1>
              Trung tâm
              <br />
              <span>theo dõi hồ sơ</span>
            </h1>

            <p>
              Một nơi quản lý giấy tờ cá nhân, theo dõi tiến độ các thủ tục
              APA đang hỗ trợ và chủ động trước mọi thời hạn quan trọng.
            </p>

            <div className="hero-tags">
              <span>Quản lý giấy tờ</span>
              <span>Theo dõi tiến độ</span>
              <span>Nhắc hạn chủ động</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-core">
              <div className="visual-icon">✓</div>
              <strong>APA</strong>
              <small>YOUR DOCUMENT HUB</small>
            </div>
            <div className="floating-chip chip-top">
              <span className="chip-icon">✓</span>
              Hồ sơ được theo dõi
            </div>
            <div className="floating-chip chip-bottom">
              <span className="chip-icon">◷</span>
              Nhắc hạn thông minh
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-icon blue">▤</span>
              <span className="stat-label">Tổng giấy tờ</span>
            </div>
            <strong>{documents.length.toString().padStart(2, "0")}</strong>
            <small>Đang được quản lý</small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-icon orange">◷</span>
              <span className="stat-label">Sắp hết hạn</span>
            </div>
            <strong>{expiredDocuments.length.toString().padStart(2, "0")}</strong>
            <small>Cần chú ý trong 30 ngày</small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-icon purple">▣</span>
              <span className="stat-label">Hồ sơ APA</span>
            </div>
            <strong>{cases.length.toString().padStart(2, "0")}</strong>
            <small>Tổng hồ sơ đã ghi nhận</small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span className="stat-icon green">✓</span>
              <span className="stat-label">Đang xử lý</span>
            </div>
            <strong>{activeCases.length.toString().padStart(2, "0")}</strong>
            <small>Chưa hoàn tất</small>
          </div>
        </section>

        <section className="notice-banner">
          <div className="notice-symbol">i</div>
          <div>
            <strong>Chủ động trước thời hạn, an tâm với thủ tục</strong>
            <p>
              APA giúp bạn theo dõi giấy tờ và tiến trình xử lý hồ sơ trên
              cùng một nền tảng.
            </p>
          </div>
        </section>

        <section className="main-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PERSONAL DOCUMENTS</span>
              <h2>Giấy tờ của tôi</h2>
              <p>Quản lý thời hạn các loại giấy tờ quan trọng.</p>
            </div>
            <button
              className="primary-button"
              onClick={() => setShowDocumentForm(!showDocumentForm)}
            >
              <span>＋</span> Thêm giấy tờ
            </button>
          </div>

          {showDocumentForm && (
            <div className="form-panel">
              <div className="form-heading">
                <strong>Thêm giấy tờ cần theo dõi</strong>
                <button
                  className="close-button"
                  onClick={() => setShowDocumentForm(false)}
                >
                  ×
                </button>
              </div>

              <div className="form-grid">
                <label>
                  Loại giấy tờ
                  <select
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                  >
                    {documentTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Số giấy tờ (không bắt buộc)
                  <input
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    placeholder="Nhập số giấy tờ"
                  />
                </label>

                <label>
                  Ngày hết hạn
                  <input
                    type="date"
                    value={documentExpiry}
                    onChange={(e) => setDocumentExpiry(e.target.value)}
                  />
                </label>
              </div>

              <div className="form-actions">
                <button className="secondary-button" onClick={() => setShowDocumentForm(false)}>
                  Hủy
                </button>
                <button
                  className="primary-button"
                  disabled={!documentExpiry}
                  onClick={addDocument}
                >
                  Lưu giấy tờ
                </button>
              </div>
            </div>
          )}

          <div className="document-list">
            {sortedDocuments.map((item) => {
              const state = getDocumentState(item.expiry);

              return (
                <article className="document-card" key={item.id}>
                  <div className="document-symbol">▤</div>
                  <div className="document-info">
                    <strong>{item.name}</strong>
                    <span>
                      {item.number ? `Số: ${item.number}` : "Chưa cập nhật số giấy tờ"}
                    </span>
                    <small>Ngày hết hạn: {formatDate(item.expiry)}</small>
                  </div>
                  <div className="document-status">
                    <span className={`status-pill ${state.color}`}>
                      {state.label}
                    </span>
                    <small>
                      {state.days <= 30
                        ? "Cần kiểm tra và chuẩn bị"
                        : "Đang trong thời hạn"}
                    </small>
                  </div>
                  <button
                    className="delete-button"
                    title="Xóa giấy tờ"
                    onClick={() =>
                      setDocuments(documents.filter((x) => x.id !== item.id))
                    }
                  >
                    ×
                  </button>
                </article>
              );
            })}

            {documents.length === 0 && (
              <div className="empty-state">
                <span>▤</span>
                <strong>Chưa có giấy tờ nào</strong>
                <p>Thêm giấy tờ để bắt đầu theo dõi thời hạn.</p>
              </div>
            )}
          </div>
        </section>

        <section className="main-section cases-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">APA SERVICE TRACKING</span>
              <h2>Hồ sơ đang được APA hỗ trợ</h2>
              <p>
                Theo dõi quá trình tiếp nhận, xử lý và kết quả thủ tục.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => {
                resetCaseForm();
                setShowCaseForm(true);
              }}
            >
              <span>＋</span> Thêm hồ sơ
            </button>
          </div>

          <div className="case-explainer">
            <div className="explain-icon">↗</div>
            <div>
              <strong>Minh bạch trong từng bước xử lý</strong>
              <p>
                Thời gian dự kiến chỉ mang tính tham khảo. Thời gian thực tế
                phụ thuộc vào cơ quan tiếp nhận và tính đầy đủ của hồ sơ.
              </p>
            </div>
          </div>

          {showCaseForm && (
            <div className="form-panel">
              <div className="form-heading">
                <strong>
                  {editingCase !== null
                    ? "Cập nhật hồ sơ"
                    : "Ghi nhận hồ sơ dịch vụ"}
                </strong>
                <button className="close-button" onClick={resetCaseForm}>
                  ×
                </button>
              </div>

              <div className="form-grid">
                <label>
                  Tên thủ tục
                  <input
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                    placeholder="Ví dụ: Đăng ký hộ kinh doanh"
                  />
                </label>

                <label>
                  Ngày gửi yêu cầu
                  <input
                    type="date"
                    value={caseSubmitted}
                    onChange={(e) => setCaseSubmitted(e.target.value)}
                  />
                </label>

                <label>
                  Ngày dự kiến có kết quả
                  <input
                    type="date"
                    value={caseExpected}
                    onChange={(e) => setCaseExpected(e.target.value)}
                  />
                </label>

                <label>
                  Trạng thái hồ sơ
                  <select
                    value={caseStatus}
                    onChange={(e) =>
                      setCaseStatus(e.target.value as CaseStatus)
                    }
                  >
                    {statuses.map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </label>

                <label className="full-field">
                  Ghi chú tiến trình
                  <textarea
                    value={caseNote}
                    onChange={(e) => setCaseNote(e.target.value)}
                    placeholder="Thông tin cập nhật về hồ sơ..."
                    rows={3}
                  />
                </label>
              </div>

              <div className="form-actions">
                <button className="secondary-button" onClick={resetCaseForm}>
                  Hủy
                </button>
                <button
                  className="primary-button"
                  disabled={!caseName.trim() || !caseSubmitted || !caseExpected}
                  onClick={saveCase}
                >
                  Lưu thông tin
                </button>
              </div>
            </div>
          )}

          <div className="case-toolbar">
            <div className="tabs">
              <button
                className={activeTab === "all" ? "tab active" : "tab"}
                onClick={() => setActiveTab("all")}
              >
                Tất cả
              </button>
              <button
                className={activeTab === "cases" ? "tab active" : "tab"}
                onClick={() => setActiveTab("cases")}
              >
                Hồ sơ APA
              </button>
              <button
                className={activeTab === "documents" ? "tab active" : "tab"}
                onClick={() => setActiveTab("documents")}
              >
                Giấy tờ
              </button>
            </div>

            <input
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm mã hoặc tên hồ sơ..."
            />
          </div>

          {activeTab !== "documents" && (
            <div className="case-list">
              {filteredCases.map((item) => {
                const progress = statusProgress[item.status];

                return (
                  <article className="case-card" key={item.id}>
                    <div className="case-card-top">
                      <div>
                        <span className="case-code">{item.code}</span>
                        <h3>{item.name}</h3>
                      </div>
                      <span
                        className={`status-pill ${
                          item.status === "Đã có kết quả"
                            ? "success"
                            : item.status === "Chờ kết quả"
                            ? "warning"
                            : "info"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="progress-heading">
                      <span>Tiến độ xử lý</span>
                      <strong>{progress}%</strong>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-value"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="case-meta">
                      <div>
                        <span>Ngày gửi yêu cầu</span>
                        <strong>{formatDate(item.submittedAt)}</strong>
                      </div>
                      <div>
                        <span>Dự kiến có kết quả</span>
                        <strong>{formatDate(item.expectedAt)}</strong>
                      </div>
                    </div>

                    {item.note && (
                      <div className="case-note">
                        <span>Thông tin cập nhật:</span> {item.note}
                      </div>
                    )}

                    <div className="case-actions">
                      <label>
                        Cập nhật trạng thái
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateCaseStatus(
                              item.id,
                              e.target.value as CaseStatus
                            )
                          }
                        >
                          {statuses.map((status) => (
                            <option key={status}>{status}</option>
                          ))}
                        </select>
                      </label>

                      <button
                        className="text-button"
                        onClick={() => editCase(item)}
                      >
                        Chỉnh sửa
                      </button>

                      <button
                        className="text-button danger-text"
                        onClick={() =>
                          setCases(cases.filter((x) => x.id !== item.id))
                        }
                      >
                        Xóa
                      </button>
                    </div>
                  </article>
                );
              })}

              {filteredCases.length === 0 && (
                <div className="empty-state">
                  <span>▣</span>
                  <strong>Chưa tìm thấy hồ sơ</strong>
                  <p>Thử thay đổi từ khóa tìm kiếm hoặc thêm hồ sơ mới.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "documents" && (
            <div className="document-summary">
              <strong>{documents.length} giấy tờ đang được theo dõi</strong>
              <p>
                Chuyển lên mục Giấy tờ của tôi để xem hạn chi tiết, trạng thái
                và quản lý từng loại giấy tờ.
              </p>
              <button
                className="secondary-button"
                onClick={() => {
                  setActiveTab("all");
                  setShowDocumentForm(true);
                }}
              >
                Thêm giấy tờ mới
              </button>
            </div>
          )}
        </section>

        <section className="bottom-callout">
          <div>
            <span className="section-kicker">APA CARES ABOUT YOUR TIME</span>
            <h2>Đừng để một thời hạn bị bỏ lỡ.</h2>
            <p>
              Quản lý giấy tờ và theo dõi thủ tục chủ động cùng APA.
            </p>
          </div>
          <div className="callout-mark">APA<span>.</span></div>
        </section>

        <footer className="demo-disclaimer">
          <span>●</span>
          Phiên bản trình diễn: dữ liệu được lưu trên trình duyệt hiện tại.
          Hồ sơ mẫu và tiến độ không phải dữ liệu giao dịch thực tế. Chức năng
          tự động đồng bộ và gửi thông báo sẽ được tích hợp khi APA kết nối
          cơ sở dữ liệu và hệ thống vận hành.
        </footer>
      </div>

      <style>{`
        .apa-tracking {
          --navy: #102b50;
          --blue: #2468b5;
          --light-blue: #eaf3ff;
          --muted: #718096;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f5f8fc;
          color: #172b45;
          font-family: Arial, Helvetica, sans-serif;
          padding: 34px 20px 70px;
        }

        .tracking-container {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
        }

        .ambient {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(2px);
        }

        .ambient-one {
          width: 430px;
          height: 430px;
          top: 80px;
          right: -200px;
          background: radial-gradient(circle, rgba(75,146,229,.15), transparent 70%);
          animation: ambientDrift 13s ease-in-out infinite alternate;
        }

        .ambient-two {
          width: 380px;
          height: 380px;
          top: 780px;
          left: -200px;
          background: radial-gradient(circle, rgba(69,188,194,.12), transparent 70%);
          animation: ambientDrift 16s ease-in-out infinite alternate-reverse;
        }

        .hero {
          min-height: 340px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 48px 58px;
          overflow: hidden;
          border-radius: 27px;
          background: linear-gradient(115deg, #102849 0%, #164879 58%, #2475b9 100%);
          color: white;
          box-shadow: 0 22px 55px rgba(20, 57, 99, .17);
        }

        .hero:after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -170px;
          top: -260px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 45px rgba(255,255,255,.025), 0 0 0 90px rgba(255,255,255,.025);
          animation: orbitRotate 30s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 570px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: #b9d9ff;
          margin-bottom: 20px;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #71e5d2;
          box-shadow: 0 0 13px #71e5d2;
          animation: dotPulse 2s ease-in-out infinite;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 800;
        }

        .hero h1 span {
          color: #9ed4ff;
          background: linear-gradient(90deg, #a8dcff, #fff, #9ed4ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 5s linear infinite;
        }

        .hero-content > p {
          max-width: 520px;
          margin: 19px 0 23px;
          color: #d6e7f8;
          font-size: 14px;
          line-height: 1.85;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .hero-tags span {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.09);
          border-radius: 30px;
          color: #edf6ff;
          font-size: 11px;
        }

        .hero-visual {
          width: 270px;
          height: 250px;
          position: relative;
          flex: 0 0 270px;
          display: grid;
          place-items: center;
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(255,255,255,.23);
          border-radius: 50%;
        }

        .orbit-one {
          width: 210px;
          height: 210px;
          animation: orbitRotate 18s linear infinite;
        }

        .orbit-two {
          width: 155px;
          height: 155px;
          border-style: dashed;
          animation: orbitRotate 25s linear infinite reverse;
        }

        .visual-core {
          width: 112px;
          height: 112px;
          border-radius: 30px;
          background: linear-gradient(145deg, rgba(255,255,255,.25), rgba(255,255,255,.07));
          border: 1px solid rgba(255,255,255,.4);
          box-shadow: 0 15px 45px rgba(0,0,0,.18), inset 0 1px 15px rgba(255,255,255,.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transform: rotate(-8deg);
          animation: coreFloat 4s ease-in-out infinite;
          backdrop-filter: blur(8px);
        }

        .visual-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          background: #a7e5dc;
          color: #10466a;
          border-radius: 12px;
          font-size: 21px;
          font-weight: 900;
        }

        .visual-core strong {
          font-size: 18px;
          letter-spacing: 2px;
        }

        .visual-core small {
          font-size: 7px;
          letter-spacing: 1px;
          color: #d9ecff;
        }

        .floating-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 13px;
          border-radius: 12px;
          background: rgba(255,255,255,.96);
          color: #17395f;
          font-size: 10px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,.16);
          white-space: nowrap;
        }

        .chip-top {
          top: 15px;
          right: -5px;
          animation: chipFloat 4s ease-in-out infinite;
        }

        .chip-bottom {
          bottom: 12px;
          left: -8px;
          animation: chipFloat 4.5s ease-in-out infinite reverse;
        }

        .chip-icon {
          color: #138a77;
          font-size: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin: 22px 0;
        }

        .stat-card {
          padding: 20px;
          background: white;
          border: 1px solid #e8eef6;
          border-radius: 17px;
          box-shadow: 0 5px 20px rgba(29,60,96,.035);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 13px 28px rgba(29,60,96,.1);
        }

        .stat-top {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 15px;
        }

        .stat-icon {
          width: 33px;
          height: 33px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          font-size: 17px;
        }

        .stat-icon.blue { background: #eaf3ff; color: #2874c6; }
        .stat-icon.orange { background: #fff3e7; color: #db8a32; }
        .stat-icon.purple { background: #f1edff; color: #8066c5; }
        .stat-icon.green { background: #e8f8f2; color: #269c77; }

        .stat-label {
          color: #738197;
          font-size: 12px;
          font-weight: 600;
        }

        .stat-card > strong {
          display: block;
          color: #142f51;
          font-size: 31px;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-card > small {
          color: #98a4b5;
          font-size: 11px;
        }

        .notice-banner {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          background: #eaf4ff;
          border: 1px solid #dcecff;
          border-radius: 15px;
          margin-bottom: 35px;
        }

        .notice-symbol {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          background: #d5e9ff;
          color: #2368ad;
          border-radius: 50%;
          font-weight: 800;
        }

        .notice-banner strong {
          display: block;
          font-size: 13px;
          color: #1d4e7f;
          margin-bottom: 4px;
        }

        .notice-banner p {
          margin: 0;
          color: #62809d;
          font-size: 12px;
          line-height: 1.6;
        }

        .main-section {
          margin-top: 35px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }

        .section-kicker {
          display: block;
          color: #4180bd;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .section-heading h2 {
          margin: 0;
          color: #173454;
          font-size: 25px;
          letter-spacing: -.6px;
        }

        .section-heading p {
          margin: 8px 0 0;
          color: #8190a3;
          font-size: 12px;
          line-height: 1.6;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 42px;
          padding: 0 17px;
          border-radius: 10px;
          border: 0;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }

        .primary-button {
          background: #1d5f9f;
          color: white;
          box-shadow: 0 5px 13px rgba(29,95,159,.16);
        }

        .primary-button:hover:not(:disabled) {
          background: #124b83;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(29,95,159,.25);
        }

        .primary-button:disabled {
          opacity: .45;
          cursor: not-allowed;
        }

        .secondary-button {
          color: #345575;
          background: #edf2f8;
        }

        .secondary-button:hover {
          background: #e0eaf5;
        }

        .form-panel {
          padding: 23px;
          margin: 15px 0 20px;
          border: 1px solid #dce8f5;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 25px rgba(30,60,90,.05);
        }

        .form-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          color: #193b60;
          font-size: 14px;
        }

        .close-button {
          border: 0;
          background: transparent;
          color: #8090a3;
          cursor: pointer;
          font-size: 25px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .form-grid label,
        .case-actions label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #536a83;
          font-size: 11px;
          font-weight: 700;
        }

        .form-grid input,
        .form-grid select,
        .form-grid textarea,
        .case-actions select,
        .search-input {
          width: 100%;
          min-width: 0;
          padding: 11px 12px;
          border: 1px solid #dce5ef;
          border-radius: 9px;
          outline: none;
          background: #fbfdff;
          color: #233d59;
          font: inherit;
          font-size: 12px;
          box-sizing: border-box;
        }

        .form-grid input:focus,
        .form-grid select:focus,
        .form-grid textarea:focus,
        .case-actions select:focus,
        .search-input:focus {
          border-color: #5b9ad6;
          box-shadow: 0 0 0 3px rgba(54,129,195,.1);
        }

        .full-field {
          grid-column: 1 / -1;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
          margin-top: 20px;
        }

        .document-list {
          display: grid;
          gap: 10px;
        }

        .document-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 17px 19px;
          background: white;
          border: 1px solid #e7edf5;
          border-radius: 14px;
          transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
        }

        .document-card:hover {
          transform: translateX(3px);
          border-color: #c9def2;
          box-shadow: 0 8px 20px rgba(29,60,96,.055);
        }

        .document-symbol {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          flex: 0 0 43px;
          border-radius: 12px;
          background: #edf5ff;
          color: #3578b8;
          font-size: 20px;
        }

        .document-info {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .document-info strong {
          color: #1c3858;
          font-size: 13px;
        }

        .document-info span,
        .document-info small {
          color: #8a98aa;
          font-size: 10px;
          overflow-wrap: anywhere;
        }

        .document-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 7px;
          min-width: 130px;
        }

        .document-status small {
          color: #96a1b0;
          font-size: 9px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 10px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .status-pill.success { color: #18805e; background: #e7f7f0; }
        .status-pill.info { color: #276db1; background: #eaf3ff; }
        .status-pill.warning { color: #a96b16; background: #fff4df; }
        .status-pill.danger { color: #c34c4c; background: #ffeded; }

        .delete-button {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          border: 0;
          border-radius: 8px;
          background: #f5f7fa;
          color: #9aa7b6;
          cursor: pointer;
          font-size: 19px;
        }

        .delete-button:hover {
          color: #c34c4c;
          background: #fff0f0;
        }

        .cases-section {
          padding: 30px;
          background: white;
          border: 1px solid #e7edf5;
          border-radius: 20px;
          box-shadow: 0 10px 35px rgba(30,60,90,.04);
        }

        .case-explainer {
          display: flex;
          gap: 12px;
          padding: 15px;
          background: #f2f7fd;
          border-radius: 12px;
          margin: 20px 0;
        }

        .explain-icon {
          flex: 0 0 29px;
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #deedff;
          color: #3979b9;
          font-weight: 800;
        }

        .case-explainer strong {
          color: #345b80;
          font-size: 12px;
        }

        .case-explainer p {
          margin: 5px 0 0;
          color: #8091a4;
          font-size: 11px;
          line-height: 1.7;
        }

        .case-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin: 23px 0 15px;
        }

        .tabs {
          display: flex;
          gap: 5px;
          padding: 4px;
          border-radius: 10px;
          background: #f2f5f9;
        }

        .tab {
          border: 0;
          background: transparent;
          padding: 9px 13px;
          border-radius: 7px;
          color: #8290a1;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .tab.active {
          background: white;
          color: #205d98;
          box-shadow: 0 2px 7px rgba(30,60,90,.08);
        }

        .search-input {
          max-width: 230px;
        }

        .case-list {
          display: grid;
          gap: 13px;
        }

        .case-card {
          padding: 20px;
          border: 1px solid #e8edf4;
          border-radius: 14px;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .case-card:hover {
          border-color: #c9dced;
          box-shadow: 0 8px 22px rgba(29,60,96,.05);
        }

        .case-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 19px;
        }

        .case-code {
          color: #5285b5;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .case-card h3 {
          margin: 7px 0 0;
          color: #1c3858;
          font-size: 15px;
        }

        .progress-heading {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          color: #7f8da0;
          font-size: 10px;
        }

        .progress-heading strong {
          color: #276db1;
        }

        .progress-track {
          height: 7px;
          overflow: hidden;
          background: #edf1f6;
          border-radius: 10px;
        }

        .progress-value {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #2865a5, #56a8d7);
          transition: width .5s ease;
        }

        .case-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 18px;
        }

        .case-meta div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .case-meta span {
          color: #9aa6b5;
          font-size: 10px;
        }

        .case-meta strong {
          color: #435c77;
          font-size: 11px;
        }

        .case-note {
          margin-top: 16px;
          padding: 11px 13px;
          border-radius: 8px;
          background: #f7f9fc;
          color: #71839a;
          font-size: 10px;
          line-height: 1.7;
        }

        .case-note span {
          color: #48698b;
          font-weight: 700;
        }

        .case-actions {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 17px;
          padding-top: 15px;
          border-top: 1px solid #edf1f5;
        }

        .case-actions label {
          min-width: 190px;
        }

        .text-button {
          border: 0;
          background: transparent;
          color: #3474b1;
          font-size: 11px;
          font-weight: 700;
          padding: 10px 5px;
          cursor: pointer;
        }

        .text-button:hover {
          text-decoration: underline;
        }

        .danger-text {
          color: #c65a5a;
        }

        .document-summary {
          padding: 22px;
          background: #f7faff;
          border: 1px solid #e6eef8;
          border-radius: 13px;
        }

        .document-summary strong {
          color: #23496e;
          font-size: 13px;
        }

        .document-summary p {
          color: #8090a3;
          font-size: 11px;
          line-height: 1.7;
        }

        .empty-state {
          padding: 38px 15px;
          text-align: center;
          border: 1px dashed #d9e3ef;
          border-radius: 14px;
          background: #fbfdff;
        }

        .empty-state > span {
          display: block;
          color: #8ab2d9;
          font-size: 30px;
          margin-bottom: 12px;
        }

        .empty-state strong {
          color: #3a5878;
          font-size: 13px;
        }

        .empty-state p {
          color: #95a1b1;
          font-size: 11px;
        }

        .bottom-callout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 35px;
          padding: 27px 32px;
          border-radius: 18px;
          background: linear-gradient(110deg, #e9f3ff, #f3f9ff);
          border: 1px solid #deebf8;
        }

        .bottom-callout h2 {
          margin: 0;
          color: #183c60;
          font-size: 22px;
        }

        .bottom-callout p {
          margin: 8px 0 0;
          color: #748da7;
          font-size: 11px;
        }

        .callout-mark {
          color: #235f98;
          font-size: 35px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .callout-mark span {
          color: #50a9c9;
        }

        .demo-disclaimer {
          margin-top: 23px;
          padding: 14px 16px;
          border-radius: 10px;
          background: #fff9ec;
          color: #92794d;
          font-size: 10px;
          line-height: 1.7;
        }

        .demo-disclaimer span {
          color: #d49b3c;
          margin-right: 6px;
        }

        @keyframes ambientDrift {
          from { transform: translate3d(-15px, 0, 0) scale(1); }
          to { transform: translate3d(25px, 35px, 0) scale(1.15); }
        }

        @keyframes orbitRotate {
          to { transform: rotate(360deg); }
        }

        @keyframes coreFloat {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }

        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 5px #71e5d2; }
          50% { box-shadow: 0 0 17px #71e5d2; }
        }

        @keyframes gradientFlow {
          to { background-position: 200% center; }
        }

        @media (max-width: 800px) {
          .hero {
            padding: 38px 30px;
          }

          .hero-visual {
            width: 200px;
            flex-basis: 200px;
            transform: scale(.85);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cases-section {
            padding: 22px;
          }
        }

        @media (max-width: 600px) {
          .apa-tracking {
            padding: 17px 12px 45px;
          }

          .hero {
            min-height: auto;
            padding: 32px 23px;
            border-radius: 20px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .hero-visual {
            display: none;
          }

          .hero-content > p {
            font-size: 12px;
          }

          .stats-grid {
            gap: 9px;
            margin: 14px 0;
          }

          .stat-card {
            padding: 14px;
          }

          .stat-card > strong {
            font-size: 26px;
          }

          .stat-top {
            gap: 7px;
            margin-bottom: 11px;
          }

          .stat-label {
            font-size: 10px;
          }

          .stat-card > small {
            font-size: 9px;
          }

          .notice-banner {
            align-items: flex-start;
            padding: 14px;
            margin-bottom: 27px;
          }

          .section-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .section-heading h2 {
            font-size: 22px;
          }

          .document-card {
            gap: 10px;
            padding: 13px 11px;
            flex-wrap: wrap;
          }

          .document-info {
            flex-basis: calc(100% - 60px);
          }

          .document-status {
            align-items: flex-start;
            margin-left: 53px;
            min-width: 0;
          }

          .delete-button {
            margin-left: auto;
          }

          .cases-section {
            padding: 17px 12px;
            border-radius: 15px;
          }

          .case-toolbar {
            align-items: stretch;
            flex-direction: column;
          }

          .tabs {
            width: 100%;
          }

          .tab {
            flex: 1;
            padding: 9px 5px;
            font-size: 10px;
          }

          .search-input {
            max-width: none;
          }

          .case-card {
            padding: 15px 12px;
          }

          .case-card-top {
            flex-direction: column;
          }

          .case-card h3 {
            font-size: 13px;
          }

          .case-meta {
            gap: 9px;
          }

          .case-meta strong {
            font-size: 10px;
          }

          .case-actions {
            align-items: stretch;
          }

          .case-actions label {
            width: 100%;
          }

          .form-panel {
            padding: 16px 12px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .full-field {
            grid-column: auto;
          }

          .bottom-callout {
            padding: 22px 17px;
          }

          .bottom-callout h2 {
            font-size: 18px;
          }

          .callout-mark {
            font-size: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apa-tracking *,
          .apa-tracking *::before,
          .apa-tracking *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
