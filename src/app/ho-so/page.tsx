
"use client";

import { useEffect, useMemo, useState } from "react";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  options?: string[];
};

type Template = {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  official: boolean;
  fields: Field[];
};

const common: Field[] = [
  { name: "fullName", label: "Họ và tên", placeholder: "Nhập họ và tên đầy đủ" },
  { name: "birthDate", label: "Ngày sinh", type: "date" },
  { name: "gender", label: "Giới tính", type: "select", options: ["Nam", "Nữ", "Khác"] },
  { name: "identity", label: "Số CCCD / định danh", placeholder: "Nhập số định danh" },
  { name: "phone", label: "Số điện thoại", placeholder: "Nhập số điện thoại" },
  { name: "address", label: "Địa chỉ cư trú", placeholder: "Số nhà, đường, xã/phường, tỉnh/thành" },
];

const templates: Template[] = [
  {
    id: "personal",
    code: "APA-001",
    title: "Tờ khai thông tin cá nhân",
    category: "Cá nhân",
    description: "Tổng hợp thông tin cơ bản để chuẩn bị hồ sơ hành chính.",
    official: false,
    fields: common,
  },
  {
    id: "residence",
    code: "APA-002",
    title: "Phiếu cung cấp thông tin cư trú",
    category: "Cư trú",
    description: "Chuẩn bị thông tin về nơi ở hiện tại và nơi thường trú.",
    official: false,
    fields: [
      ...common,
      { name: "permanent", label: "Nơi thường trú", placeholder: "Địa chỉ thường trú" },
      { name: "temporary", label: "Nơi tạm trú", placeholder: "Địa chỉ tạm trú nếu có" },
      { name: "stayDate", label: "Thời điểm bắt đầu cư trú", type: "date" },
    ],
  },
  {
    id: "authorization",
    code: "APA-003",
    title: "Giấy thông tin ủy quyền",
    category: "Cá nhân",
    description: "Chuẩn bị thông tin bên ủy quyền và bên được ủy quyền.",
    official: false,
    fields: [
      { name: "owner", label: "Người ủy quyền" },
      { name: "ownerId", label: "Số CCCD người ủy quyền" },
      { name: "agent", label: "Người được ủy quyền" },
      { name: "agentId", label: "Số CCCD người được ủy quyền" },
      { name: "content", label: "Nội dung ủy quyền", type: "textarea" },
      { name: "duration", label: "Thời hạn ủy quyền" },
    ],
  },
  {
    id: "birth",
    code: "APA-004",
    title: "Phiếu chuẩn bị đăng ký khai sinh",
    category: "Hộ tịch",
    description: "Tập hợp thông tin cần thiết trước khi thực hiện đăng ký khai sinh.",
    official: false,
    fields: [
      { name: "child", label: "Họ và tên trẻ em" },
      { name: "birthDate", label: "Ngày sinh", type: "date" },
      { name: "birthPlace", label: "Nơi sinh" },
      { name: "mother", label: "Họ tên mẹ" },
      { name: "father", label: "Họ tên cha" },
      { name: "address", label: "Nơi cư trú của cha/mẹ" },
    ],
  },
  {
    id: "marriage",
    code: "APA-005",
    title: "Phiếu chuẩn bị đăng ký kết hôn",
    category: "Hộ tịch",
    description: "Thông tin hai bên nam, nữ để chuẩn bị thủ tục đăng ký kết hôn.",
    official: false,
    fields: [
      { name: "person1", label: "Họ tên bên nam" },
      { name: "id1", label: "CCCD bên nam" },
      { name: "person2", label: "Họ tên bên nữ" },
      { name: "id2", label: "CCCD bên nữ" },
      { name: "address", label: "Địa chỉ cư trú" },
    ],
  },
  {
    id: "land",
    code: "APA-006",
    title: "Phiếu thông tin nhà đất",
    category: "Đất đai",
    description: "Tập hợp thông tin thửa đất và người sử dụng đất.",
    official: false,
    fields: [
      { name: "owner", label: "Người sử dụng đất" },
      { name: "landNumber", label: "Số thửa đất" },
      { name: "mapNumber", label: "Số tờ bản đồ" },
      { name: "area", label: "Diện tích (m²)" },
      { name: "location", label: "Địa chỉ thửa đất" },
      { name: "certificate", label: "Số giấy chứng nhận" },
    ],
  },
  {
    id: "business",
    code: "APA-007",
    title: "Phiếu chuẩn bị đăng ký hộ kinh doanh",
    category: "Doanh nghiệp",
    description: "Chuẩn bị thông tin chủ hộ, ngành nghề và địa điểm kinh doanh.",
    official: false,
    fields: [
      { name: "owner", label: "Tên chủ hộ kinh doanh" },
      { name: "businessName", label: "Tên hộ kinh doanh dự kiến" },
      { name: "businessAddress", label: "Địa điểm kinh doanh" },
      { name: "industry", label: "Ngành nghề kinh doanh" },
      { name: "capital", label: "Vốn kinh doanh dự kiến" },
      { name: "phone", label: "Số điện thoại liên hệ" },
    ],
  },
  {
    id: "tax",
    code: "APA-008",
    title: "Phiếu thông tin đăng ký thuế",
    category: "Thuế",
    description: "Tập hợp thông tin cá nhân hoặc tổ chức phục vụ việc chuẩn bị hồ sơ thuế.",
    official: false,
    fields: [
      { name: "taxName", label: "Tên người nộp thuế" },
      { name: "taxId", label: "Mã số thuế (nếu có)" },
      { name: "identity", label: "Số CCCD / định danh" },
      { name: "address", label: "Địa chỉ" },
      { name: "phone", label: "Số điện thoại" },
      { name: "email", label: "Email" },
    ],
  },
  {
    id: "insurance",
    code: "APA-009",
    title: "Phiếu thông tin bảo hiểm xã hội",
    category: "Bảo hiểm",
    description: "Chuẩn bị thông tin cá nhân và quá trình tham gia bảo hiểm.",
    official: false,
    fields: [
      ...common,
      { name: "insuranceNumber", label: "Mã số BHXH nếu đã có" },
      { name: "workplace", label: "Đơn vị công tác" },
    ],
  },
  {
    id: "employment",
    code: "APA-010",
    title: "Phiếu thông tin hợp đồng lao động",
    category: "Lao động",
    description: "Tập hợp thông tin người lao động và đơn vị sử dụng lao động.",
    official: false,
    fields: [
      { name: "employee", label: "Họ tên người lao động" },
      { name: "employer", label: "Tên đơn vị sử dụng lao động" },
      { name: "position", label: "Vị trí công việc" },
      { name: "salary", label: "Mức lương thỏa thuận" },
      { name: "startDate", label: "Ngày bắt đầu làm việc", type: "date" },
      { name: "workplace", label: "Địa điểm làm việc" },
    ],
  },
  {
    id: "education",
    code: "APA-011",
    title: "Phiếu thông tin nhập học",
    category: "Giáo dục",
    description: "Chuẩn bị thông tin học sinh và người giám hộ.",
    official: false,
    fields: [
      { name: "student", label: "Họ tên học sinh" },
      { name: "birthDate", label: "Ngày sinh", type: "date" },
      { name: "school", label: "Trường đăng ký" },
      { name: "grade", label: "Lớp / cấp học" },
      { name: "guardian", label: "Họ tên người giám hộ" },
      { name: "phone", label: "Số điện thoại người giám hộ" },
    ],
  },
  {
    id: "complaint",
    code: "APA-012",
    title: "Phiếu ghi nhận nội dung kiến nghị",
    category: "Hành chính",
    description: "Ghi lại thông tin người kiến nghị và nội dung cần trình bày.",
    official: false,
    fields: [
      { name: "fullName", label: "Họ và tên người kiến nghị" },
      { name: "address", label: "Địa chỉ liên hệ" },
      { name: "phone", label: "Số điện thoại" },
      { name: "subject", label: "Cơ quan / đơn vị liên quan" },
      { name: "content", label: "Nội dung kiến nghị", type: "textarea" },
      { name: "request", label: "Đề nghị giải quyết", type: "textarea" },
    ],
  },
];

const categories = ["Tất cả", ...Array.from(new Set(templates.map((t) => t.category)))];

export default function HoSoPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [selected, setSelected] = useState<Template | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<Record<string, Record<string, string>>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("apa-form-library-v3");
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      // Bỏ qua dữ liệu lưu bị lỗi.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("apa-form-library-v3", JSON.stringify(saved));
    }
  }, [saved, ready]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return templates.filter((t) => {
      const matchesCategory = category === "Tất cả" || t.category === category;
      const matchesSearch =
        !q ||
        `${t.title} ${t.code} ${t.category} ${t.description}`.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  function openTemplate(template: Template) {
    setSelected(template);
    setValues(saved[template.id] || {});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveDraft() {
    if (!selected) return;
    setSaved((old) => ({ ...old, [selected.id]: values }));
    alert("Đã lưu bản nháp trên trình duyệt này.");
  }

  function clearDraft() {
    if (!selected) return;
    if (confirm("Bạn có chắc muốn xóa dữ liệu đã nhập?")) {
      setValues({});
      setSaved((old) => {
        const next = { ...old };
        delete next[selected.id];
        return next;
      });
    }
  }

  return (
    <main className="apa-library">
      <style jsx global>{`
        * { box-sizing: border-box; }
        .apa-library {
          min-height: 100vh;
          background: #f4f7fc;
          color: #172b4d;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          padding-bottom: 70px;
        }
        .apa-hero {
          position: relative;
          overflow: hidden;
          padding: 66px 22px 58px;
          color: white;
          background: linear-gradient(120deg, #071b3b, #123d72 58%, #0876a9);
        }
        .apa-hero:before, .apa-hero:after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: #ffffff12;
          animation: apaFloat 9s ease-in-out infinite alternate;
        }
        .apa-hero:before { width: 340px; height: 340px; right: -70px; top: -170px; }
        .apa-hero:after { width: 220px; height: 220px; left: 45%; bottom: -160px; animation-delay: -4s; }
        .apa-hero-inner, .apa-container { width: min(1160px, calc(100% - 36px)); margin: auto; }
        .apa-hero-inner { position: relative; z-index: 1; animation: apaFade .7s ease both; }
        .apa-eyebrow { color: #9ddcff; font-size: 12px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .apa-hero h1 { margin: 13px 0; font-size: clamp(30px, 5vw, 48px); line-height: 1.13; letter-spacing: -1.4px; }
        .apa-hero p { color: #dbeafe; max-width: 720px; line-height: 1.8; font-size: 16px; margin: 0; }
        .apa-searchbar { display: flex; gap: 10px; max-width: 760px; margin-top: 27px; }
        .apa-searchbar input { flex: 1; min-width: 0; border: 1px solid #ffffff40; border-radius: 13px; padding: 16px 18px; font: inherit; color: #172b4d; background: white; outline: none; }
        .apa-searchbar input:focus, .apa-field input:focus, .apa-field select:focus, .apa-field textarea:focus { border-color: #1688d4; box-shadow: 0 0 0 3px #1688d426; }
        .apa-container { padding-top: 34px; }
        .apa-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: -1px; }
        .apa-stat { background: white; border: 1px solid #e3eaf3; border-radius: 15px; padding: 18px; box-shadow: 0 5px 20px #17365d08; }
        .apa-stat strong { display: block; color: #0e5c9d; font-size: 25px; }
        .apa-stat span { display: block; color: #62738b; font-size: 13px; margin-top: 4px; }
        .apa-section-head { display: flex; align-items: end; justify-content: space-between; gap: 15px; margin: 35px 0 17px; }
        .apa-section-head h2 { margin: 0; font-size: 23px; color: #10294c; }
        .apa-section-head p { margin: 5px 0 0; color: #687b95; font-size: 14px; }
        .apa-categories { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .apa-chip { border: 1px solid #dbe5f0; background: white; color: #435875; padding: 9px 14px; border-radius: 30px; font: inherit; font-size: 13px; cursor: pointer; transition: .2s; }
        .apa-chip:hover, .apa-chip.active { background: #0e5c9d; border-color: #0e5c9d; color: white; transform: translateY(-2px); }
        .apa-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .apa-card { background: white; border: 1px solid #e2eaf3; border-radius: 17px; padding: 20px; display: flex; flex-direction: column; min-height: 220px; box-shadow: 0 5px 20px #17365d08; animation: apaRise .45s ease both; transition: transform .22s, box-shadow .22s, border-color .22s; }
        .apa-card:hover { transform: translateY(-5px); box-shadow: 0 16px 35px #17365d14; border-color: #a8cce9; }
        .apa-card-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .apa-icon { width: 43px; height: 43px; display: grid; place-items: center; border-radius: 13px; background: #eaf4ff; color: #1268a8; font-size: 21px; }
        .apa-code { color: #8291a6; font-size: 11px; font-weight: 700; }
        .apa-card h3 { font-size: 17px; line-height: 1.4; margin: 16px 0 7px; color: #173252; }
        .apa-card p { color: #64758b; line-height: 1.65; font-size: 13px; margin: 0 0 16px; }
        .apa-card-bottom { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: auto; }
        .apa-tag { background: #f0f5fa; color: #49617c; border-radius: 30px; padding: 6px 10px; font-size: 11px; font-weight: 700; }
        .apa-button { border: 0; background: #0e68a8; color: white; padding: 10px 15px; border-radius: 10px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; transition: .2s; }
        .apa-button:hover { background: #084b80; transform: translateY(-1px); }
        .apa-button.secondary { background: #eaf2fa; color: #174b78; }
        .apa-button.secondary:hover { background: #d9e9f7; }
        .apa-editor { background: white; border: 1px solid #e0e8f1; border-radius: 19px; padding: 25px; box-shadow: 0 10px 35px #17365d0b; animation: apaFade .35s ease both; }
        .apa-editor-head { display: flex; justify-content: space-between; align-items: start; gap: 15px; padding-bottom: 18px; border-bottom: 1px solid #e9eef5; }
        .apa-editor h2 { margin: 0 0 6px; color: #153353; font-size: 23px; }
        .apa-editor-head p { margin: 0; color: #708098; font-size: 13px; }
        .apa-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 17px; padding: 22px 0; }
        .apa-field label { display: block; color: #314a67; font-size: 13px; font-weight: 700; margin-bottom: 7px; }
        .apa-field input, .apa-field select, .apa-field textarea { width: 100%; border: 1px solid #d9e2ed; border-radius: 10px; padding: 12px 13px; color: #183451; background: #fff; font: inherit; font-size: 14px; outline: none; }
        .apa-field textarea { min-height: 100px; resize: vertical; }
        .apa-actions { display: flex; flex-wrap: wrap; gap: 9px; border-top: 1px solid #e9eef5; padding-top: 18px; }
        .apa-note { background: #fff8e8; border: 1px solid #f2dfb4; border-radius: 12px; padding: 13px 15px; color: #795a20; font-size: 12px; line-height: 1.65; margin-top: 18px; }
        .apa-empty { text-align: center; padding: 55px 15px; color: #6c7e94; background: white; border: 1px dashed #ccd9e7; border-radius: 16px; }
        .apa-preview { display: none; }
        @keyframes apaFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes apaRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes apaFloat { from { transform: translate(0,0); } to { transform: translate(-22px,18px); } }
        @media(max-width:850px) { .apa-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media(max-width:600px) {
          .apa-hero { padding: 48px 0 42px; }
          .apa-stats { gap: 8px; }
          .apa-stat { padding: 13px; }
          .apa-stat strong { font-size: 21px; }
          .apa-stat span { font-size: 11px; }
          .apa-grid { grid-template-columns: 1fr; }
          .apa-form-grid { grid-template-columns: 1fr; }
          .apa-editor { padding: 17px; }
          .apa-section-head { align-items: start; flex-direction: column; }
          .apa-searchbar { flex-direction: column; }
        }
        @media print {
          body * { visibility: hidden !important; }
          .apa-preview, .apa-preview * { visibility: visible !important; }
          .apa-preview { display: block !important; position: absolute; inset: 0; width: 100%; padding: 25px; color: #000; background: white; font: 14px/1.8 "Times New Roman", serif; }
          .apa-preview h2 { text-align: center; font-size: 18px; margin: 25px 0; }
          .apa-preview .national { text-align: center; font-weight: bold; }
          .apa-preview .preview-row { border-bottom: 1px dotted #777; padding: 8px 0; min-height: 34px; }
          .apa-preview .signature { text-align: right; margin-top: 55px; }
        }
      `}</style>

      <section className="apa-hero">
        <div className="apa-hero-inner">
          <div className="apa-eyebrow">APA · TRỢ LÝ HÀNH CHÍNH SỐ</div>
          <h1>Hồ sơ & Biểu mẫu<br />hành chính điện tử</h1>
          <p>
            Tra cứu biểu mẫu, chuẩn bị thông tin và tạo bản nháp hồ sơ
            ngay trên một nền tảng. Đơn giản hơn, rõ ràng hơn, thuận tiện hơn.
          </p>
          <div className="apa-searchbar">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm tên biểu mẫu, mã biểu mẫu hoặc lĩnh vực..."
              aria-label="Tìm kiếm biểu mẫu"
            />
            <button className="apa-button" onClick={() => {
              document.getElementById("apa-library-list")?.scrollIntoView({ behavior: "smooth" });
            }}>Tìm biểu mẫu</button>
          </div>
        </div>
      </section>

      <div className="apa-container">
        <div className="apa-stats">
          <div className="apa-stat"><strong>{templates.length}</strong><span>Biểu mẫu tham khảo</span></div>
          <div className="apa-stat"><strong>{categories.length - 1}</strong><span>Nhóm lĩnh vực</span></div>
          <div className="apa-stat"><strong>24/7</strong><span>Tra cứu trực tuyến</span></div>
        </div>

        {selected ? (
          <section className="apa-container" style={{ width: "100%", padding: "30px 0 0" }}>
            <div className="apa-editor">
              <div className="apa-editor-head">
                <div>
                  <div className="apa-eyebrow" style={{ color: "#1676b5" }}>{selected.code} · {selected.category}</div>
                  <h2>{selected.title}</h2>
                  <p>{selected.description}</p>
                </div>
                <button className="apa-button secondary" onClick={() => setSelected(null)}>← Quay lại</button>
              </div>

              <div className="apa-form-grid">
                {selected.fields.map((field) => (
                  <div className="apa-field" key={field.name}>
                    <label>{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        value={values[field.name] || ""}
                        placeholder={field.placeholder || `Nhập ${field.label.toLowerCase()}`}
                        onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                      />
                    ) : field.type === "select" ? (
                      <select
                        value={values[field.name] || ""}
                        onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                      >
                        <option value="">-- Chọn --</option>
                        {field.options?.map((option) => <option key={option}>{option}</option>)}
                      </select>
                    ) : (
                      <input
                        type={field.type || "text"}
                        value={values[field.name] || ""}
                        placeholder={field.placeholder || `Nhập ${field.label.toLowerCase()}`}
                        onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="apa-actions">
                <button className="apa-button" onClick={saveDraft}>Lưu bản nháp</button>
                <button className="apa-button secondary" onClick={() => window.print()}>In / lưu PDF</button>
                <button className="apa-button secondary" onClick={clearDraft}>Xóa nội dung</button>
              </div>
              <div className="apa-note">
                Lưu ý: Đây là phiếu chuẩn bị thông tin do APA thiết kế, không thay thế biểu mẫu chính thức
                của cơ quan nhà nước. Hãy kiểm tra mẫu và thành phần hồ sơ tại cơ quan tiếp nhận trước khi nộp.
                Dữ liệu bản nháp được lưu trên trình duyệt của thiết bị này.
              </div>
            </div>

            <div className="apa-preview">
              <div className="national">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br />Độc lập – Tự do – Hạnh phúc</div>
              <h2>{selected.title.toUpperCase()}</h2>
              {selected.fields.map((field) => (
                <div className="preview-row" key={field.name}>
                  <b>{field.label}:</b> {values[field.name] || " "}
                </div>
              ))}
              <div className="signature">………, ngày …… tháng …… năm ……<br /><br /><b>Người khai</b><br /><br /><br />……………………………</div>
            </div>
          </section>
        ) : (
          <section id="apa-library-list">
            <div className="apa-section-head">
              <div>
                <h2>Thư viện biểu mẫu</h2>
                <p>Chọn lĩnh vực hoặc nhập từ khóa để tìm biểu mẫu cần dùng.</p>
              </div>
              <span style={{ color: "#64758b", fontSize: 13 }}>{filtered.length} kết quả</span>
            </div>

            <div className="apa-categories">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`apa-chip ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {filtered.length ? (
              <div className="apa-grid">
                {filtered.map((template, index) => (
                  <article className="apa-card" key={template.id} style={{ animationDelay: `${index * 45}ms` }}>
                    <div className="apa-card-top">
                      <div className="apa-icon">▤</div>
                      <span className="apa-code">{template.code}</span>
                    </div>
                    <h3>{template.title}</h3>
                    <p>{template.description}</p>
                    <div className="apa-card-bottom">
                      <span className="apa-tag">{template.category}</span>
                      <button className="apa-button" onClick={() => openTemplate(template)}>Mở biểu mẫu →</button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="apa-empty">
                <div style={{ fontSize: 34, marginBottom: 10 }}>⌕</div>
                <b>Không tìm thấy biểu mẫu phù hợp</b>
                <p>Thử từ khóa khác hoặc chọn danh mục “Tất cả”.</p>
                <button className="apa-button secondary" onClick={() => { setSearch(""); setCategory("Tất cả"); }}>Xóa bộ lọc</button>
              </div>
            )}
          </section>
        )}

        <div className="apa-note">
          <b>Thông tin pháp lý:</b> Các mẫu hiện tại là mẫu tham khảo để chuẩn bị dữ liệu, không được quảng bá
          là biểu mẫu nhà nước ban hành. Khi có mẫu chính thức, cần bổ sung số hiệu, cơ quan ban hành,
          ngày hiệu lực và nguồn văn bản để người dùng đối chiếu.
        </div>
      </div>
    </main>
  );
}
