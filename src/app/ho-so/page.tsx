
"use client";

import { useEffect, useMemo, useState } from "react";

type Field = {
  key: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "date" | "textarea";
};

type Template = {
  id: number;
  name: string;
  category: string;
  code: string;
  legal: string;
  source: string;
  description: string;
  recipient: string;
  subject: string;
  opening: string;
  request: string;
  fields: Field[];
  official?: boolean;
};

const personalFields: Field[] = [
  { key: "fullName", label: "Họ và tên", required: true },
  { key: "birthDate", label: "Ngày sinh", type: "date" },
  { key: "gender", label: "Giới tính" },
  { key: "nationality", label: "Quốc tịch" },
  { key: "ethnicity", label: "Dân tộc" },
  { key: "idNumber", label: "Số CCCD/số định danh cá nhân", required: true },
  { key: "idDate", label: "Ngày cấp CCCD", type: "date" },
  { key: "idPlace", label: "Nơi cấp" },
  { key: "address", label: "Địa chỉ thường trú", required: true },
  { key: "currentAddress", label: "Nơi ở hiện tại" },
  { key: "phone", label: "Số điện thoại", required: true },
  { key: "email", label: "Email" },
];

const templates: Template[] = [
  {
    id: 1, name: "Tờ khai đăng ký khai sinh", category: "Hộ tịch",
    code: "Mẫu hộ tịch", legal: "Thông tư 04/2020/TT-BTP và văn bản sửa đổi, bổ sung",
    source: "https://vbpl.moj.gov.vn/botuphap/Pages/vbpq-toanvan.aspx?ItemID=142805",
    description: "Dành cho người thực hiện thủ tục đăng ký khai sinh.",
    recipient: "ỦY BAN NHÂN DÂN CÓ THẨM QUYỀN",
    subject: "ĐĂNG KÝ KHAI SINH",
    opening: "Tôi đề nghị cơ quan có thẩm quyền xem xét, giải quyết việc đăng ký khai sinh với thông tin sau:",
    request: "Kính đề nghị cơ quan có thẩm quyền tiếp nhận, kiểm tra và giải quyết thủ tục đăng ký khai sinh theo quy định pháp luật.",
    fields: [
      { key: "childName", label: "Họ và tên người được khai sinh", required: true },
      { key: "childBirth", label: "Ngày, tháng, năm sinh", type: "date", required: true },
      { key: "childGender", label: "Giới tính" },
      { key: "childPlace", label: "Nơi sinh" },
      { key: "fatherName", label: "Họ tên cha" },
      { key: "motherName", label: "Họ tên mẹ" },
      { key: "birthCertificate", label: "Thông tin giấy chứng sinh" },
    ],
    official: false,
  },
  {
    id: 2, name: "Tờ khai đăng ký kết hôn", category: "Hộ tịch",
    code: "Mẫu hộ tịch", legal: "Thông tư 04/2020/TT-BTP và văn bản sửa đổi, bổ sung",
    source: "https://vbpl.moj.gov.vn/botuphap/Pages/vbpq-toanvan.aspx?ItemID=142805",
    description: "Thông tin phục vụ thủ tục đăng ký kết hôn.",
    recipient: "ỦY BAN NHÂN DÂN CÓ THẨM QUYỀN",
    subject: "ĐĂNG KÝ KẾT HÔN",
    opening: "Chúng tôi đề nghị đăng ký kết hôn với thông tin của hai bên như sau:",
    request: "Kính đề nghị cơ quan có thẩm quyền kiểm tra điều kiện kết hôn và giải quyết thủ tục theo quy định.",
    fields: [
      { key: "partnerName", label: "Họ tên người đăng ký kết hôn cùng", required: true },
      { key: "partnerBirth", label: "Ngày sinh người đăng ký cùng", type: "date" },
      { key: "partnerId", label: "Số định danh/CCCD người đăng ký cùng" },
      { key: "partnerAddress", label: "Địa chỉ người đăng ký cùng" },
      { key: "maritalStatus", label: "Tình trạng hôn nhân hiện tại" },
    ],
    official: false,
  },
  {
    id: 3, name: "Tờ khai đăng ký khai tử", category: "Hộ tịch",
    code: "Mẫu hộ tịch", legal: "Thông tư 04/2020/TT-BTP và văn bản sửa đổi, bổ sung",
    source: "https://vbpl.moj.gov.vn/botuphap/Pages/vbpq-toanvan.aspx?ItemID=142805",
    description: "Kê khai thông tin người đã chết để thực hiện thủ tục khai tử.",
    recipient: "ỦY BAN NHÂN DÂN CÓ THẨM QUYỀN",
    subject: "ĐĂNG KÝ KHAI TỬ",
    opening: "Tôi đề nghị đăng ký khai tử cho người có thông tin dưới đây:",
    request: "Kính đề nghị cơ quan có thẩm quyền xem xét, giải quyết thủ tục đăng ký khai tử theo quy định.",
    fields: [
      { key: "deceasedName", label: "Họ tên người chết", required: true },
      { key: "deceasedBirth", label: "Ngày sinh", type: "date" },
      { key: "deathDate", label: "Thời điểm chết", type: "date", required: true },
      { key: "deathPlace", label: "Nơi chết" },
      { key: "deathReason", label: "Nguyên nhân chết (nếu có)" },
      { key: "relationship", label: "Quan hệ với người khai tử" },
    ],
    official: false,
  },
  {
    id: 4, name: "Đề nghị cấp bản sao trích lục hộ tịch", category: "Hộ tịch",
    code: "Đề nghị trích lục", legal: "Luật Hộ tịch 2014 và văn bản hướng dẫn",
    source: "https://vbpl.moj.gov.vn/",
    description: "Đề nghị cấp bản sao trích lục hộ tịch.",
    recipient: "CƠ QUAN QUẢN LÝ CƠ SỞ DỮ LIỆU HỘ TỊCH",
    subject: "ĐỀ NGHỊ CẤP BẢN SAO TRÍCH LỤC HỘ TỊCH",
    opening: "Tôi đề nghị được cấp bản sao trích lục hộ tịch với thông tin:",
    request: "Kính đề nghị cơ quan có thẩm quyền kiểm tra dữ liệu hộ tịch và cấp bản sao trích lục theo quy định.",
    fields: [
      { key: "recordName", label: "Loại việc hộ tịch cần trích lục", required: true },
      { key: "recordPerson", label: "Họ tên người có thông tin hộ tịch", required: true },
      { key: "recordDate", label: "Ngày đăng ký (nếu nhớ)", type: "date" },
      { key: "recordPlace", label: "Nơi đã đăng ký hộ tịch" },
      { key: "copies", label: "Số lượng bản sao đề nghị" },
      { key: "purpose", label: "Mục đích sử dụng" },
    ],
  },
  {
    id: 5, name: "Đơn đề nghị xác nhận tình trạng hôn nhân", category: "Hộ tịch",
    code: "Đề nghị xác nhận", legal: "Luật Hộ tịch 2014; Nghị định 123/2015/NĐ-CP và văn bản sửa đổi",
    source: "https://vbpl.moj.gov.vn/",
    description: "Đề nghị xác nhận tình trạng hôn nhân.",
    recipient: "ỦY BAN NHÂN DÂN CÓ THẨM QUYỀN",
    subject: "ĐỀ NGHỊ CẤP GIẤY XÁC NHẬN TÌNH TRẠNG HÔN NHÂN",
    opening: "Tôi đề nghị cấp Giấy xác nhận tình trạng hôn nhân với thông tin cá nhân đã kê khai.",
    request: "Kính đề nghị cơ quan có thẩm quyền kiểm tra, xác minh và cấp giấy xác nhận theo quy định pháp luật.",
    fields: [
      { key: "maritalStatus", label: "Tình trạng hôn nhân hiện tại", required: true },
      { key: "maritalPurpose", label: "Mục đích sử dụng giấy xác nhận", required: true },
      { key: "usePlace", label: "Nơi dự định sử dụng" },
      { key: "previousAddress", label: "Nơi cư trú trước đây (nếu có)" },
    ],
  },
  {
    id: 6, name: "Đơn đăng ký biến động đất đai", category: "Đất đai",
    code: "Mẫu số 11/ĐK", legal: "Thông tư 10/2024/TT-BTNMT và văn bản sửa đổi, thay thế (nếu có)",
    source: "https://vbpl.vn/",
    description: "Dùng cho các trường hợp đăng ký biến động đất đai thuộc phạm vi áp dụng của mẫu.",
    recipient: "VĂN PHÒNG ĐĂNG KÝ ĐẤT ĐAI / CHI NHÁNH CÓ THẨM QUYỀN",
    subject: "ĐĂNG KÝ BIẾN ĐỘNG ĐẤT ĐAI, TÀI SẢN GẮN LIỀN VỚI ĐẤT",
    opening: "Tôi đề nghị đăng ký biến động đối với thửa đất/tài sản có thông tin sau:",
    request: "Kính đề nghị cơ quan đăng ký đất đai kiểm tra hồ sơ và thực hiện đăng ký biến động theo quy định.",
    fields: [
      { key: "landAddress", label: "Địa chỉ thửa đất", required: true },
      { key: "landNumber", label: "Số thửa đất" },
      { key: "mapNumber", label: "Số tờ bản đồ" },
      { key: "certificateNumber", label: "Số phát hành Giấy chứng nhận" },
      { key: "landArea", label: "Diện tích thửa đất" },
      { key: "changeType", label: "Nội dung biến động", required: true },
      { key: "changeDate", label: "Thời điểm phát sinh biến động", type: "date" },
    ],
    official: false,
  },
  {
    id: 7, name: "Đơn đề nghị cấp đổi Giấy chứng nhận đất đai", category: "Đất đai",
    code: "Theo thủ tục đất đai tương ứng", legal: "Luật Đất đai 2024 và văn bản hướng dẫn hiện hành",
    source: "https://vbpl.vn/",
    description: "Chuẩn bị thông tin cho thủ tục cấp đổi Giấy chứng nhận.",
    recipient: "CƠ QUAN CÓ THẨM QUYỀN GIẢI QUYẾT HỒ SƠ ĐẤT ĐAI",
    subject: "ĐỀ NGHỊ CẤP ĐỔI GIẤY CHỨNG NHẬN",
    opening: "Tôi đề nghị xem xét việc cấp đổi Giấy chứng nhận đối với thửa đất sau:",
    request: "Kính đề nghị cơ quan có thẩm quyền hướng dẫn, kiểm tra và giải quyết hồ sơ theo quy định.",
    fields: [
      { key: "landAddress", label: "Địa chỉ thửa đất", required: true },
      { key: "landNumber", label: "Số thửa đất" },
      { key: "mapNumber", label: "Số tờ bản đồ" },
      { key: "certificateNumber", label: "Số Giấy chứng nhận hiện có" },
      { key: "reason", label: "Lý do đề nghị cấp đổi", required: true },
    ],
  },
  {
    id: 8, name: "Đơn đề nghị cung cấp thông tin đất đai", category: "Đất đai",
    code: "Phiếu yêu cầu thông tin", legal: "Luật Đất đai 2024 và văn bản hướng dẫn",
    source: "https://vbpl.vn/",
    description: "Yêu cầu cung cấp thông tin, dữ liệu đất đai.",
    recipient: "CƠ QUAN CUNG CẤP DỮ LIỆU ĐẤT ĐAI",
    subject: "ĐỀ NGHỊ CUNG CẤP THÔNG TIN, DỮ LIỆU ĐẤT ĐAI",
    opening: "Tôi đề nghị được cung cấp thông tin đất đai liên quan đến:",
    request: "Kính đề nghị cơ quan có thẩm quyền tiếp nhận và cung cấp dữ liệu theo quy định, sau khi tôi thực hiện nghĩa vụ tài chính (nếu có).",
    fields: [
      { key: "landAddress", label: "Vị trí thửa đất", required: true },
      { key: "landNumber", label: "Số thửa đất (nếu biết)" },
      { key: "mapNumber", label: "Số tờ bản đồ (nếu biết)" },
      { key: "dataNeeded", label: "Thông tin cần cung cấp", required: true },
      { key: "purpose", label: "Mục đích khai thác dữ liệu" },
    ],
  },
  {
    id: 9, name: "Tờ khai đăng ký thuế cá nhân", category: "Thuế",
    code: "Mẫu 05-ĐK-TCT", legal: "Thông tư 86/2024/TT-BTC và văn bản sửa đổi, bổ sung",
    source: "https://dichvucong.mof.gov.vn/",
    description: "Thông tin phục vụ đăng ký thuế cá nhân; cần đối chiếu đúng trường hợp đăng ký.",
    recipient: "CƠ QUAN THUẾ QUẢN LÝ TRỰC TIẾP",
    subject: "ĐĂNG KÝ THUẾ",
    opening: "Tôi đề nghị thực hiện đăng ký thuế với các thông tin dưới đây:",
    request: "Kính đề nghị cơ quan thuế tiếp nhận, đối chiếu thông tin và thực hiện đăng ký thuế theo quy định.",
    fields: [
      { key: "taxAddress", label: "Địa chỉ nhận thông báo thuế" },
      { key: "taxPhone", label: "Số điện thoại liên hệ" },
      { key: "taxEmail", label: "Email nhận thông báo" },
      { key: "taxReason", label: "Lý do đăng ký thuế", required: true },
      { key: "dependentInfo", label: "Thông tin người phụ thuộc (nếu có)", type: "textarea" },
    ],
    official: false,
  },
  {
    id: 10, name: "Tờ khai đăng ký người phụ thuộc", category: "Thuế",
    code: "Mẫu 20-ĐK-TH-TCT (tùy trường hợp)", legal: "Thông tư 86/2024/TT-BTC và văn bản sửa đổi, bổ sung",
    source: "https://dichvucong.mof.gov.vn/",
    description: "Chuẩn bị thông tin đăng ký người phụ thuộc để tính giảm trừ gia cảnh.",
    recipient: "CƠ QUAN THUẾ / ĐƠN VỊ CHI TRẢ THU NHẬP",
    subject: "ĐĂNG KÝ NGƯỜI PHỤ THUỘC",
    opening: "Tôi đề nghị đăng ký người phụ thuộc với thông tin:",
    request: "Kính đề nghị cơ quan/đơn vị tiếp nhận, kiểm tra hồ sơ và thực hiện đăng ký theo quy định.",
    fields: [
      { key: "dependentName", label: "Họ tên người phụ thuộc", required: true },
      { key: "dependentBirth", label: "Ngày sinh", type: "date" },
      { key: "dependentId", label: "Số định danh/giấy tờ" },
      { key: "dependentRelation", label: "Quan hệ với người nộp thuế", required: true },
      { key: "dependentFrom", label: "Thời điểm bắt đầu tính giảm trừ" },
    ],
  },
  {
    id: 11, name: "Tờ khai tham gia, điều chỉnh thông tin BHXH", category: "Bảo hiểm",
    code: "Mẫu TK1-TS", legal: "Quyết định 595/QĐ-BHXH và văn bản sửa đổi, hướng dẫn hiện hành",
    source: "https://baohiemxahoi.gov.vn/content/hoidap/Lists/DanhSachTraLoi/Attachments/3856/31513_TK1_TS.pdf",
    description: "Tờ khai tham gia hoặc điều chỉnh thông tin BHXH, BHYT.",
    recipient: "CƠ QUAN BẢO HIỂM XÃ HỘI",
    subject: "KÊ KHAI THAM GIA, ĐIỀU CHỈNH THÔNG TIN BHXH, BHYT",
    opening: "Tôi đề nghị tiếp nhận thông tin tham gia hoặc điều chỉnh thông tin bảo hiểm như sau:",
    request: "Kính đề nghị cơ quan BHXH kiểm tra, cập nhật thông tin theo hồ sơ và quy định hiện hành.",
    fields: [
      { key: "socialNumber", label: "Mã số BHXH (nếu có)" },
      { key: "socialRequest", label: "Nội dung đề nghị", required: true },
      { key: "socialOld", label: "Thông tin cũ cần điều chỉnh" },
      { key: "socialNew", label: "Thông tin đề nghị điều chỉnh" },
      { key: "socialReason", label: "Lý do điều chỉnh" },
    ],
    official: false,
  },
  {
    id: 12, name: "Đơn đề nghị cấp lại thẻ BHYT", category: "Bảo hiểm",
    code: "Theo thủ tục BHYT tương ứng", legal: "Luật Bảo hiểm y tế và văn bản hướng dẫn hiện hành",
    source: "https://baohiemxahoi.gov.vn/thu-tuc-hanh-chinh/Pages/default.aspx",
    description: "Chuẩn bị thông tin đề nghị cấp lại thẻ BHYT.",
    recipient: "CƠ QUAN BẢO HIỂM XÃ HỘI",
    subject: "ĐỀ NGHỊ CẤP LẠI THẺ BẢO HIỂM Y TẾ",
    opening: "Tôi đề nghị xem xét cấp lại thẻ bảo hiểm y tế với thông tin:",
    request: "Kính đề nghị cơ quan BHXH kiểm tra dữ liệu và giải quyết theo quy định.",
    fields: [
      { key: "healthNumber", label: "Mã số BHXH/mã thẻ BHYT" },
      { key: "healthReason", label: "Lý do cấp lại", required: true },
      { key: "healthDate", label: "Ngày phát hiện mất/hỏng thẻ", type: "date" },
    ],
  },
  {
    id: 13, name: "Giấy đề nghị đăng ký hộ kinh doanh", category: "Kinh doanh",
    code: "Biểu mẫu đăng ký hộ kinh doanh", legal: "Nghị định 168/2025/NĐ-CP; Thông tư 68/2025/TT-BTC và Thông tư 121/2026/TT-BTC",
    source: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=118&lhID=91",
    description: "Chuẩn bị thông tin đăng ký hộ kinh doanh theo biểu mẫu hiện hành.",
    recipient: "CƠ QUAN ĐĂNG KÝ KINH DOANH CẤP XÃ",
    subject: "ĐỀ NGHỊ ĐĂNG KÝ HỘ KINH DOANH",
    opening: "Tôi đề nghị đăng ký hộ kinh doanh với các thông tin sau:",
    request: "Kính đề nghị cơ quan đăng ký kinh doanh kiểm tra và cấp Giấy chứng nhận đăng ký hộ kinh doanh nếu hồ sơ hợp lệ.",
    fields: [
      { key: "businessName", label: "Tên hộ kinh doanh dự kiến", required: true },
      { key: "businessAddress", label: "Địa chỉ trụ sở", required: true },
      { key: "businessIndustry", label: "Ngành, nghề kinh doanh", required: true },
      { key: "businessCapital", label: "Vốn kinh doanh" },
      { key: "businessWorkers", label: "Số lao động dự kiến" },
      { key: "businessPhone", label: "Số điện thoại hộ kinh doanh" },
    ],
    official: false,
  },
  {
    id: 14, name: "Thông báo thay đổi nội dung đăng ký hộ kinh doanh", category: "Kinh doanh",
    code: "Biểu mẫu theo Thông tư 68/2025/TT-BTC", legal: "Thông tư 68/2025/TT-BTC; Thông tư 121/2026/TT-BTC",
    source: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=118&lhID=91",
    description: "Chuẩn bị nội dung thay đổi thông tin hộ kinh doanh.",
    recipient: "CƠ QUAN ĐĂNG KÝ KINH DOANH CẤP XÃ",
    subject: "THÔNG BÁO THAY ĐỔI NỘI DUNG ĐĂNG KÝ HỘ KINH DOANH",
    opening: "Tôi thông báo nội dung thay đổi đăng ký hộ kinh doanh như sau:",
    request: "Kính đề nghị cơ quan đăng ký kinh doanh ghi nhận nội dung thay đổi theo hồ sơ hợp lệ.",
    fields: [
      { key: "businessName", label: "Tên hộ kinh doanh", required: true },
      { key: "businessCode", label: "Mã số hộ kinh doanh/mã số thuế" },
      { key: "businessAddress", label: "Địa chỉ hiện tại" },
      { key: "businessChange", label: "Nội dung thay đổi", required: true },
      { key: "businessNew", label: "Thông tin sau thay đổi", required: true },
    ],
  },
  {
    id: 15, name: "Thông báo chấm dứt hoạt động hộ kinh doanh", category: "Kinh doanh",
    code: "Mẫu số 4 - Phụ lục II (cần đối chiếu bản hiện hành)", legal: "Thông tư 68/2025/TT-BTC và văn bản sửa đổi",
    source: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=117&lhID=91",
    description: "Chuẩn bị thông tin chấm dứt hoạt động hộ kinh doanh.",
    recipient: "CƠ QUAN ĐĂNG KÝ KINH DOANH CẤP XÃ",
    subject: "THÔNG BÁO CHẤM DỨT HOẠT ĐỘNG HỘ KINH DOANH",
    opening: "Tôi thông báo về việc chấm dứt hoạt động hộ kinh doanh:",
    request: "Kính đề nghị cơ quan có thẩm quyền tiếp nhận và cập nhật tình trạng hoạt động theo quy định.",
    fields: [
      { key: "businessName", label: "Tên hộ kinh doanh", required: true },
      { key: "businessCode", label: "Mã số hộ kinh doanh/mã số thuế" },
      { key: "businessAddress", label: "Địa chỉ trụ sở" },
      { key: "stopDate", label: "Ngày dự kiến chấm dứt", type: "date" },
      { key: "stopReason", label: "Lý do chấm dứt hoạt động" },
    ],
  },
  {
    id: 16, name: "Giấy đề nghị đăng ký doanh nghiệp", category: "Doanh nghiệp",
    code: "Mẫu số 01 (đối chiếu phụ lục hiện hành)", legal: "Thông tư 68/2025/TT-BTC được sửa đổi bởi Thông tư 121/2026/TT-BTC",
    source: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=13",
    description: "Chuẩn bị thông tin thành lập doanh nghiệp.",
    recipient: "CƠ QUAN ĐĂNG KÝ KINH DOANH CẤP TỈNH",
    subject: "ĐỀ NGHỊ ĐĂNG KÝ DOANH NGHIỆP",
    opening: "Tôi đề nghị đăng ký thành lập doanh nghiệp với các thông tin:",
    request: "Kính đề nghị cơ quan đăng ký kinh doanh xem xét, cấp Giấy chứng nhận đăng ký doanh nghiệp nếu hồ sơ hợp lệ.",
    fields: [
      { key: "companyName", label: "Tên doanh nghiệp dự kiến", required: true },
      { key: "companyType", label: "Loại hình doanh nghiệp", required: true },
      { key: "companyAddress", label: "Địa chỉ trụ sở chính", required: true },
      { key: "companyIndustry", label: "Ngành, nghề kinh doanh", required: true },
      { key: "companyCapital", label: "Vốn điều lệ" },
      { key: "companyRepresentative", label: "Người đại diện theo pháp luật" },
      { key: "companyPhone", label: "Số điện thoại doanh nghiệp" },
    ],
  },
  {
    id: 17, name: "Thông báo thay đổi nội dung đăng ký doanh nghiệp", category: "Doanh nghiệp",
    code: "Mẫu số 12 (đối chiếu phụ lục hiện hành)", legal: "Thông tư 68/2025/TT-BTC và Thông tư 121/2026/TT-BTC",
    source: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=97",
    description: "Chuẩn bị nội dung thay đổi đăng ký doanh nghiệp.",
    recipient: "CƠ QUAN ĐĂNG KÝ KINH DOANH CẤP TỈNH",
    subject: "THÔNG BÁO THAY ĐỔI NỘI DUNG ĐĂNG KÝ DOANH NGHIỆP",
    opening: "Doanh nghiệp thông báo nội dung thay đổi đăng ký như sau:",
    request: "Kính đề nghị cơ quan đăng ký kinh doanh ghi nhận, cập nhật nội dung thay đổi theo quy định.",
    fields: [
      { key: "companyName", label: "Tên doanh nghiệp", required: true },
      { key: "companyCode", label: "Mã số doanh nghiệp", required: true },
      { key: "companyAddress", label: "Địa chỉ trụ sở" },
      { key: "companyChange", label: "Nội dung thay đổi", required: true },
      { key: "companyNew", label: "Thông tin sau thay đổi", required: true },
    ],
  },
  {
    id: 18, name: "Đơn đề nghị cấp Phiếu lý lịch tư pháp", category: "Tư pháp",
    code: "Tờ khai theo thủ tục LLTP hiện hành", legal: "Luật Lý lịch tư pháp và văn bản sửa đổi, hướng dẫn",
    source: "https://dichvucong.gov.vn/",
    description: "Chuẩn bị thông tin đề nghị cấp Phiếu lý lịch tư pháp.",
    recipient: "CƠ QUAN CÓ THẨM QUYỀN CẤP PHIẾU LÝ LỊCH TƯ PHÁP",
    subject: "ĐỀ NGHỊ CẤP PHIẾU LÝ LỊCH TƯ PHÁP",
    opening: "Tôi đề nghị cấp Phiếu lý lịch tư pháp với thông tin cá nhân đã kê khai.",
    request: "Kính đề nghị cơ quan có thẩm quyền tiếp nhận, kiểm tra và cấp Phiếu theo quy định.",
    fields: [
      { key: "lltpType", label: "Loại Phiếu đề nghị cấp", required: true },
      { key: "lltpPurpose", label: "Mục đích yêu cầu cấp Phiếu", required: true },
      { key: "lltpAddress", label: "Địa chỉ nhận kết quả" },
      { key: "lltpPhone", label: "Số điện thoại nhận thông báo" },
    ],
  },
  {
    id: 19, name: "Đơn khiếu nại", category: "Khiếu nại",
    code: "Đơn khiếu nại", legal: "Luật Khiếu nại 2011 và văn bản hướng dẫn hiện hành",
    source: "https://vbpl.vn/",
    description: "Soạn đơn khiếu nại quyết định hành chính hoặc hành vi hành chính.",
    recipient: "CƠ QUAN / NGƯỜI CÓ THẨM QUYỀN GIẢI QUYẾT KHIẾU NẠI",
    subject: "ĐƠN KHIẾU NẠI",
    opening: "Tôi làm đơn này để khiếu nại về quyết định/hành vi hành chính sau:",
    request: "Tôi kính đề nghị người có thẩm quyền thụ lý, xác minh nội dung khiếu nại, xem xét giải quyết và trả lời bằng văn bản theo quy định pháp luật.",
    fields: [
      { key: "complaintTarget", label: "Cơ quan/người bị khiếu nại", required: true },
      { key: "complaintDecision", label: "Quyết định/hành vi bị khiếu nại", required: true },
      { key: "complaintDate", label: "Ngày nhận quyết định/biết hành vi", type: "date" },
      { key: "complaintContent", label: "Nội dung sự việc", type: "textarea", required: true },
      { key: "complaintEvidence", label: "Tài liệu, chứng cứ kèm theo", type: "textarea" },
      { key: "complaintRequest", label: "Yêu cầu giải quyết cụ thể", type: "textarea", required: true },
    ],
  },
  {
    id: 20, name: "Đơn tố cáo", category: "Khiếu nại",
    code: "Đơn tố cáo", legal: "Luật Tố cáo 2018 và văn bản hướng dẫn hiện hành",
    source: "https://vbpl.vn/",
    description: "Soạn nội dung tố cáo hành vi vi phạm pháp luật.",
    recipient: "CƠ QUAN CÓ THẨM QUYỀN GIẢI QUYẾT TỐ CÁO",
    subject: "ĐƠN TỐ CÁO",
    opening: "Tôi làm đơn này tố cáo hành vi có dấu hiệu vi phạm pháp luật với nội dung:",
    request: "Kính đề nghị cơ quan có thẩm quyền tiếp nhận, xác minh, xử lý theo quy định pháp luật và thông báo kết quả giải quyết theo quy định.",
    fields: [
      { key: "accusedName", label: "Tên cá nhân/tổ chức bị tố cáo", required: true },
      { key: "accusedAddress", label: "Địa chỉ cá nhân/tổ chức bị tố cáo" },
      { key: "accusedAct", label: "Hành vi bị tố cáo", required: true },
      { key: "accusedTime", label: "Thời gian xảy ra sự việc" },
      { key: "accusedPlace", label: "Địa điểm xảy ra sự việc" },
      { key: "accusedContent", label: "Nội dung tố cáo chi tiết", type: "textarea", required: true },
      { key: "accusedEvidence", label: "Tài liệu, chứng cứ", type: "textarea" },
    ],
  },
];

const categories = ["Tất cả", ...Array.from(new Set(templates.map((t) => t.category)))];

const emptyProfile: Record<string, string> = {
  fullName: "", birthDate: "", gender: "", nationality: "Việt Nam",
  ethnicity: "", idNumber: "", idDate: "", idPlace: "",
  address: "", currentAddress: "", phone: "", email: "",
};

function dateText(value: string) {
  if (!value) return "";
  const parts = value.split("-");
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : value;
}

export default function HoSoPage() {
  const [profile, setProfile] = useState<Record<string, string>>(emptyProfile);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Template>(templates[0]);
  const [category, setCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [step, setStep] = useState<"library" | "form" | "preview">("library");
  const [showProfile, setShowProfile] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const p = localStorage.getItem("apa-document-profile");
      if (p) setProfile({ ...emptyProfile, ...JSON.parse(p) });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("apa-document-profile", JSON.stringify(profile));
    } catch {}
  }, [profile]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return templates.filter((t) =>
      (category === "Tất cả" || t.category === category) &&
      (!q || `${t.name} ${t.category} ${t.code}`.toLowerCase().includes(q))
    );
  }, [category, search]);

  const allFields = [...personalFields, ...selected.fields];
  const missing = allFields.filter((f) => f.required && !(profile[f.key] || answers[f.key] || "").trim());

  function chooseTemplate(t: Template) {
    setSelected(t);
    setAnswers({});
    setStep("form");
    setShowProfile(true);
    setSaved(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setValue(key: string, value: string) {
    if (personalFields.some((f) => f.key === key)) {
      setProfile((old) => ({ ...old, [key]: value }));
    } else {
      setAnswers((old) => ({ ...old, [key]: value }));
    }
    setSaved(false);
  }

  function val(key: string) {
    return profile[key] || answers[key] || "";
  }

  function displayField(f: Field) {
    const value = val(f.key);
    if (!value) return "";
    return f.type === "date" ? dateText(value) : value;
  }

  function generateDocument() {
    const lines = [
      "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
      "Độc lập - Tự do - Hạnh phúc",
      "____________________________",
      "",
      selected.recipient,
      "",
      selected.subject,
      "",
      `Kính gửi: ${answers.recipient || "........................................................"}`,
      "",
      selected.opening,
      "",
      `1. Họ và tên: ${profile.fullName}`,
      `2. Ngày sinh: ${dateText(profile.birthDate)}`,
      `3. Giới tính: ${profile.gender}`,
      `4. Quốc tịch: ${profile.nationality}`,
      `5. Dân tộc: ${profile.ethnicity}`,
      `6. Số định danh cá nhân/CCCD: ${profile.idNumber}`,
      `7. Ngày cấp: ${dateText(profile.idDate)}`,
      `8. Nơi cấp: ${profile.idPlace}`,
      `9. Địa chỉ thường trú: ${profile.address}`,
      `10. Nơi ở hiện tại: ${profile.currentAddress}`,
      `11. Số điện thoại: ${profile.phone}`,
      `12. Email: ${profile.email}`,
      "",
      "THÔNG TIN HỒ SƠ",
      ...selected.fields.map((f, i) => `${i + 1}. ${f.label}: ${displayField(f) || "........................................................"}`),
      "",
      selected.request,
      "",
      "Tài liệu gửi kèm:",
      answers.attachments || "................................................................................",
      "",
      "Tôi cam đoan những thông tin kê khai trên là đúng sự thật và chịu trách nhiệm trước pháp luật về nội dung đã kê khai.",
      "",
      "............., ngày ....... tháng ....... năm ........",
      "",
      "NGƯỜI LÀM ĐƠN",
      "(Ký và ghi rõ họ tên)",
      "",
      "",
      profile.fullName,
    ];
    return lines.join("\n");
  }

  function printDocument() {
    window.print();
  }

  function saveDraft() {
    try {
      localStorage.setItem(`apa-draft-${selected.id}`, JSON.stringify({ profile, answers }));
      setSaved(true);
    } catch {
      alert("Không thể lưu bản nháp trên trình duyệt này.");
    }
  }

  function loadDraft() {
    try {
      const draft = localStorage.getItem(`apa-draft-${selected.id}`);
      if (!draft) {
        alert("Chưa có bản nháp của biểu mẫu này.");
        return;
      }
      const data = JSON.parse(draft);
      setProfile({ ...emptyProfile, ...data.profile });
      setAnswers(data.answers || {});
      alert("Đã tải bản nháp.");
    } catch {
      alert("Không đọc được bản nháp.");
    }
  }

  return (
    <main className="apa-docs">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="docs-container">
        <header className="docs-hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> APA DIGITAL DOCUMENTS</div>
            <h1>Hồ sơ hành chính,<br /><span>điền một lần – dùng ngay.</span></h1>
            <p>
              Chọn biểu mẫu, nhập thông tin cần thiết và tạo văn bản đã điền sẵn.
              Xem lại, in ra, ký và nộp hồ sơ.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => document.getElementById("template-library")?.scrollIntoView({ behavior: "smooth" })}>
                Chọn biểu mẫu <span>→</span>
              </button>
              <span className="hero-note"><i>✓</i> Lưu thông tin cá nhân trên thiết bị</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="document-illustration">
              <div className="doc-top"><span>APA</span><span className="doc-check">✓</span></div>
              <div className="doc-title-line" />
              <div className="doc-line wide" />
              <div className="doc-line" />
              <div className="doc-line short" />
              <div className="doc-divider" />
              <div className="doc-line wide" />
              <div className="doc-line" />
              <div className="doc-sign"><span>Đã điền thông tin</span><b>✓</b></div>
            </div>
            <div className="floating-chip chip-one">✦ Tự động điền</div>
            <div className="floating-chip chip-two">PDF · A4</div>
          </div>
        </header>

        <section className="steps-strip">
          {[
            ["01", "Chọn thủ tục", "Tìm đúng biểu mẫu cần dùng"],
            ["02", "Điền thông tin", "Dùng lại hồ sơ cá nhân đã lưu"],
            ["03", "Xuất và in", "Kiểm tra, ký và nộp"],
          ].map((s) => (
            <div className="step-item" key={s[0]}>
              <span className="step-number">{s[0]}</span>
              <div><b>{s[1]}</b><small>{s[2]}</small></div>
            </div>
          ))}
        </section>

        {step === "library" && (
          <section id="template-library" className="library-section animate-in">
            <div className="section-heading">
              <div>
                <div className="section-kicker">THƯ VIỆN HỒ SƠ</div>
                <h2>Chọn biểu mẫu cần tạo</h2>
                <p>Có {templates.length} loại hồ sơ đang được cấu hình.</p>
              </div>
              <div className="search-box">
                <span>⌕</span>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm tên biểu mẫu..." />
              </div>
            </div>

            <div className="category-list">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={category === c ? "category active" : "category"}>
                  {c}
                </button>
              ))}
            </div>

            <div className="template-grid">
              {filtered.map((t, index) => (
                <article className="template-card" key={t.id} style={{ animationDelay: `${index * 35}ms` }}>
                  <div className="card-topline">
                    <span className="category-label">{t.category}</span>
                    <span className="card-number">{String(t.id).padStart(2, "0")}</span>
                  </div>
                  <div className="template-icon">{t.category === "Đất đai" ? "⌂" : t.category === "Thuế" ? "₫" : t.category === "Bảo hiểm" ? "＋" : t.category === "Kinh doanh" || t.category === "Doanh nghiệp" ? "▤" : t.category === "Khiếu nại" ? "§" : "▧"}</div>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <div className="template-meta">{t.code}</div>
                  <button className="card-action" onClick={() => chooseTemplate(t)}>
                    Điền biểu mẫu <span>↗</span>
                  </button>
                </article>
              ))}
            </div>
            {filtered.length === 0 && <div className="empty-state">Không tìm thấy biểu mẫu phù hợp.</div>}
          </section>
        )}

        {step === "form" && (
          <section className="form-section animate-in">
            <button className="back-link" onClick={() => setStep("library")}>← Quay lại thư viện</button>
            <div className="form-heading">
              <div>
                <div className="section-kicker">{selected.category} · {selected.code}</div>
                <h2>{selected.name}</h2>
                <p>{selected.description}</p>
              </div>
              <div className="form-step-badge">BƯỚC 2 / 3</div>
            </div>

            <div className="form-layout">
              <div className="form-main">
                <div className="form-panel">
                  <button className="panel-title" onClick={() => setShowProfile(!showProfile)}>
                    <span className="panel-icon">♙</span>
                    <span><b>Thông tin cá nhân</b><small>Được lưu để sử dụng cho những lần sau</small></span>
                    <span className="panel-chevron">{showProfile ? "−" : "+"}</span>
                  </button>
                  {showProfile && (
                    <div className="fields-grid">
                      {personalFields.map((f) => (
                        <label className={f.type === "textarea" ? "field full" : "field"} key={f.key}>
                          <span>{f.label}{f.required && <i> *</i>}</span>
                          <input
                            type={f.type || "text"}
                            value={profile[f.key] || ""}
                            onChange={(e) => setValue(f.key, e.target.value)}
                            placeholder={f.placeholder || `Nhập ${f.label.toLowerCase()}`}
                          />
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="form-panel">
                  <div className="panel-title static">
                    <span className="panel-icon blue">▤</span>
                    <span><b>Thông tin riêng của thủ tục</b><small>Các trường cần bổ sung cho biểu mẫu này</small></span>
                  </div>
                  <div className="fields-grid">
                    {selected.fields.map((f) => (
                      <label className={f.type === "textarea" ? "field full" : "field"} key={f.key}>
                        <span>{f.label}{f.required && <i> *</i>}</span>
                        {f.type === "textarea" ? (
                          <textarea value={answers[f.key] || ""} onChange={(e) => setValue(f.key, e.target.value)} placeholder={`Nhập ${f.label.toLowerCase()}`} rows={4} />
                        ) : (
                          <input type={f.type || "text"} value={answers[f.key] || ""} onChange={(e) => setValue(f.key, e.target.value)} placeholder={`Nhập ${f.label.toLowerCase()}`} />
                        )}
                      </label>
                    ))}
                    <label className="field full">
                      <span>Nơi tiếp nhận hồ sơ / Kính gửi</span>
                      <input value={answers.recipient || ""} onChange={(e) => setValue("recipient", e.target.value)} placeholder="Ví dụ: UBND phường/xã..." />
                    </label>
                    <label className="field full">
                      <span>Giấy tờ, tài liệu gửi kèm</span>
                      <textarea rows={3} value={answers.attachments || ""} onChange={(e) => setValue("attachments", e.target.value)} placeholder="Liệt kê giấy tờ kèm theo..." />
                    </label>
                  </div>
                </div>

                <div className="form-footer">
                  <button className="secondary-btn" onClick={saveDraft}>▣ {saved ? "Đã lưu bản nháp" : "Lưu bản nháp"}</button>
                  <button className="secondary-btn" onClick={loadDraft}>↻ Tải bản nháp</button>
                  <button className="primary-btn" onClick={() => setStep("preview")}>Xem văn bản đã điền <span>→</span></button>
                </div>
              </div>

              <aside className="form-aside">
                <div className="aside-card">
                  <div className="aside-icon">✦</div>
                  <h3>Điền một lần, dùng nhiều lần</h3>
                  <p>Thông tin cá nhân được lưu trên trình duyệt của thiết bị này để bạn không phải nhập lại ở lần sau.</p>
                </div>
                <div className="aside-card source-card">
                  <h3>Căn cứ và nguồn tham khảo</h3>
                  <p>{selected.legal}</p>
                  <a href={selected.source} target="_blank" rel="noreferrer">Mở nguồn văn bản ↗</a>
                </div>
                <div className="privacy-note">🔒 Dữ liệu lưu trên trình duyệt hiện tại, không tự động gửi lên máy chủ.</div>
              </aside>
            </div>
          </section>
        )}

        {step === "preview" && (
          <section className="preview-section animate-in">
            <div className="preview-toolbar">
              <button className="back-link" onClick={() => setStep("form")}>← Quay lại chỉnh sửa</button>
              <div className="preview-actions">
                <button className="secondary-btn" onClick={saveDraft}>Lưu bản nháp</button>
                <button className="primary-btn" onClick={printDocument}>↓ In / Lưu PDF</button>
              </div>
            </div>
            <div className="preview-heading">
              <div className="section-kicker">BƯỚC 3 / 3</div>
              <h2>Kiểm tra văn bản trước khi in</h2>
              <p>Hãy rà soát thông tin, sau đó chọn “In / Lưu PDF”.</p>
            </div>
            <div className="print-paper">
              <div className="paper-national">
                <b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
                <b>Độc lập - Tự do - Hạnh phúc</b>
                <span>________________________</span>
              </div>
              <div className="paper-recipient">{selected.recipient}</div>
              <h2 className="paper-title">{selected.subject}</h2>
              <p className="paper-text">Kính gửi: {answers.recipient || "........................................................"}</p>
              <p className="paper-text">{selected.opening}</p>
              <div className="paper-subtitle">I. THÔNG TIN NGƯỜI KÊ KHAI</div>
              <table className="paper-table">
                <tbody>
                  {personalFields.map((f, i) => (
                    <tr key={f.key}>
                      <td>{i + 1}. {f.label}</td>
                      <td>{displayField(f) || "...................................................."}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="paper-subtitle">II. NỘI DUNG THỦ TỤC</div>
              <table className="paper-table">
                <tbody>
                  {selected.fields.map((f, i) => (
                    <tr key={f.key}>
                      <td>{i + 1}. {f.label}</td>
                      <td>{displayField(f) || "...................................................."}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="paper-text">{selected.request}</p>
              <p className="paper-text"><b>Tài liệu gửi kèm:</b> {answers.attachments || "........................................................"}</p>
              <p className="paper-text">Tôi cam đoan những thông tin kê khai trên là đúng sự thật và chịu trách nhiệm trước pháp luật về nội dung đã kê khai.</p>
              <div className="paper-date">............., ngày ....... tháng ....... năm ........</div>
              <div className="paper-sign">
                <b>NGƯỜI LÀM ĐƠN</b>
                <span>(Ký và ghi rõ họ tên)</span>
                <strong>{profile.fullName}</strong>
              </div>
              <div className="paper-footer">Văn bản được tạo từ thông tin do người kê khai cung cấp.</div>
            </div>
            <div className="preview-bottom">
              <button className="secondary-btn" onClick={() => setStep("form")}>← Sửa thông tin</button>
              <button className="primary-btn" onClick={printDocument}>In văn bản / Lưu PDF ↗</button>
            </div>
          </section>
        )}

        <footer className="docs-footer">
          <span>APA · TRỢ LÝ HÀNH CHÍNH SỐ</span>
          <span>Hỗ trợ chuẩn bị hồ sơ hành chính</span>
        </footer>
      </div>

      <style jsx global>{`
        * { box-sizing: border-box; }
        .apa-docs { position:relative; min-height:100vh; overflow:hidden; background:#f5f8fc; color:#13243c; font-family:Arial,Helvetica,sans-serif; padding:0 0 50px; }
        .ambient { position:absolute; pointer-events:none; border-radius:50%; filter:blur(2px); opacity:.55; }
        .ambient-one { width:480px;height:480px;right:-180px;top:20px;background:radial-gradient(circle,#d8eaff 0%,transparent 70%); }
        .ambient-two { width:400px;height:400px;left:-180px;top:600px;background:radial-gradient(circle,#e2eaff 0%,transparent 70%); }
        .docs-container { position:relative;z-index:1;max-width:1200px;margin:auto;padding:0 24px; }
        .docs-hero { min-height:440px;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:40px;padding:65px 5% 50px;background:linear-gradient(125deg,#081b38,#103c70 62%,#1760a2);border-radius:0 0 30px 30px;color:white;position:relative;overflow:hidden;box-shadow:0 20px 55px #092b5425; }
        .docs-hero:after { content:"";position:absolute;width:500px;height:500px;border:1px solid #ffffff14;border-radius:50%;right:-130px;top:-250px;box-shadow:0 0 0 45px #ffffff08,0 0 0 90px #ffffff05; }
        .hero-copy { position:relative;z-index:2;animation:rise .7s ease both; }
        .eyebrow,.section-kicker { font-size:11px;letter-spacing:2px;font-weight:800;color:#8fc7ff; }
        .eyebrow { display:flex;align-items:center;gap:9px; }
        .pulse-dot { width:7px;height:7px;background:#57e2b2;border-radius:50%;box-shadow:0 0 0 5px #57e2b222; }
        .docs-hero h1 { font-size:clamp(36px,5vw,57px);line-height:1.12;letter-spacing:-1.7px;margin:22px 0 18px;font-weight:800; }
        .docs-hero h1 span { color:#83c5ff; }
        .docs-hero p { max-width:520px;color:#d3e4f7;font-size:15px;line-height:1.8;margin:0; }
        .hero-actions { display:flex;align-items:center;gap:22px;margin-top:30px;flex-wrap:wrap; }
        .primary-btn,.secondary-btn { border:0;border-radius:10px;padding:13px 19px;font-weight:750;font-size:13px;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s; }
        .primary-btn { background:#1675d1;color:white;box-shadow:0 7px 18px #1675d144; }
        .primary-btn:hover { background:#0c64ba;transform:translateY(-2px);box-shadow:0 10px 24px #1675d155; }
        .primary-btn span { margin-left:14px;font-size:17px; }
        .secondary-btn { background:#edf3fa;color:#183653;border:1px solid #dce6f0; }
        .secondary-btn:hover { background:#e0ecf8;transform:translateY(-1px); }
        .hero-note { color:#c5d8ed;font-size:12px; }.hero-note i { color:#6ce3b8;font-style:normal;margin-right:5px; }
        .hero-visual { height:330px;position:relative;display:flex;align-items:center;justify-content:center;animation:floatIn .9s ease both; }
        .orbit { position:absolute;border:1px solid #ffffff24;border-radius:50%;width:300px;height:300px; }
        .orbit-b { width:370px;height:370px;border-style:dashed;animation:spin 45s linear infinite; }
        .document-illustration { width:210px;height:270px;background:linear-gradient(145deg,#fff,#edf5ff);border-radius:13px;padding:23px 20px;box-shadow:0 28px 65px #00152d66;transform:rotate(5deg);position:relative;z-index:1;color:#173b62; }
        .doc-top { display:flex;justify-content:space-between;font-size:12px;font-weight:900;letter-spacing:2px;margin-bottom:30px; }
        .doc-check { width:23px;height:23px;border-radius:50%;background:#d9f8ec;color:#159c6c;display:grid;place-items:center; }
        .doc-title-line { width:75%;height:8px;background:#164d80;border-radius:5px;margin:0 auto 22px; }
        .doc-line { height:5px;width:82%;background:#d2dfed;border-radius:5px;margin:11px 0; }.doc-line.wide{width:100%}.doc-line.short{width:55%}
        .doc-divider { height:1px;background:#dce7f2;margin:22px 0 18px; }
        .doc-sign { display:flex;align-items:center;justify-content:space-between;margin-top:28px;font-size:10px;color:#62809d; }
        .doc-sign b { width:23px;height:23px;border-radius:50%;display:grid;place-items:center;background:#d8f8eb;color:#129b68; }
        .floating-chip { position:absolute;background:white;color:#173c60;padding:11px 15px;border-radius:10px;box-shadow:0 10px 30px #00172e33;font-size:11px;font-weight:800;z-index:3; }
        .chip-one { top:48px;left:0;animation:float 4s ease-in-out infinite; }.chip-two { bottom:42px;right:5px;animation:float 4.5s ease-in-out infinite reverse; }
        .steps-strip { display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:28px 0 68px;background:white;border:1px solid #e7edf5;border-radius:17px;padding:23px 30px;box-shadow:0 8px 30px #183d6510; }
        .step-item { display:flex;align-items:center;gap:14px; }.step-number { width:39px;height:39px;border-radius:12px;background:#eaf4ff;color:#1671c7;display:grid;place-items:center;font-size:12px;font-weight:900; }
        .step-item b { display:block;font-size:13px;margin-bottom:5px; }.step-item small { display:block;color:#8191a4;font-size:11px; }
        .library-section,.form-section,.preview-section { padding:0 3% 35px; }
        .section-heading,.form-heading { display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:25px; }
        .section-kicker { color:#2878bf;margin-bottom:10px; }
        .section-heading h2,.form-heading h2,.preview-heading h2 { font-size:29px;letter-spacing:-.7px;margin:0 0 8px;color:#142a44; }
        .section-heading p,.form-heading p,.preview-heading p { color:#7b8b9e;font-size:13px;margin:0;line-height:1.6; }
        .search-box { width:280px;height:44px;border:1px solid #dfe7f0;background:white;border-radius:10px;display:flex;align-items:center;padding:0 13px;gap:9px; }
        .search-box span { font-size:24px;color:#6d89a5; }.search-box input { border:0;outline:0;width:100%;font-size:12px;color:#17324e;background:transparent; }
        .category-list { display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 25px; }
        .category { border:1px solid #e0e8f1;background:white;color:#64768a;border-radius:30px;padding:9px 15px;font-size:11px;font-weight:700;cursor:pointer;transition:.2s; }
        .category:hover,.category.active { background:#e9f3ff;border-color:#9cc9f2;color:#1269b8; }
        .template-grid { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px; }
        .template-card { background:#fff;border:1px solid #e5ecf4;border-radius:15px;padding:19px;min-height:250px;display:flex;flex-direction:column;box-shadow:0 5px 20px #173b6108;animation:rise .5s ease both;transition:transform .25s,box-shadow .25s,border .25s; }
        .template-card:hover { transform:translateY(-5px);box-shadow:0 15px 35px #173b6117;border-color:#b9d8f4; }
        .card-topline { display:flex;justify-content:space-between;align-items:center; }.category-label { font-size:10px;font-weight:800;color:#2477bd;background:#edf6ff;border-radius:20px;padding:6px 10px; }.card-number { font-size:11px;color:#b4c1ce;font-weight:800; }
        .template-icon { width:39px;height:39px;border-radius:11px;background:linear-gradient(145deg,#e7f3ff,#d7eaff);display:grid;place-items:center;font-size:21px;color:#176bb3;margin:17px 0 12px; }
        .template-card h3 { font-size:15px;line-height:1.4;margin:0 0 8px;color:#18334f; }.template-card p { font-size:11px;line-height:1.65;color:#8090a2;margin:0 0 12px; }
        .template-meta { font-size:10px;color:#9aa8b7;margin-top:auto;padding:10px 0;border-top:1px solid #edf1f5; }
        .card-action { background:transparent;border:0;padding:9px 0 0;text-align:left;color:#176db7;font-size:12px;font-weight:800;cursor:pointer;display:flex;justify-content:space-between; }.card-action span { font-size:16px; }
        .empty-state { padding:45px;text-align:center;color:#8494a7;background:white;border-radius:14px; }
        .back-link { border:0;background:none;color:#3978b0;font-size:12px;font-weight:750;cursor:pointer;padding:0;margin:0 0 24px; }
        .form-heading { align-items:center;margin-bottom:28px; }.form-step-badge { background:#e6f2ff;color:#176bb5;border-radius:30px;padding:9px 14px;font-size:10px;font-weight:900;white-space:nowrap; }
        .form-layout { display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:20px;align-items:start; }
        .form-main { display:grid;gap:17px; }.form-panel { background:white;border:1px solid #e3ebf3;border-radius:15px;padding:22px;box-shadow:0 5px 20px #193b6008; }
        .panel-title { width:100%;display:flex;align-items:center;gap:12px;background:none;border:0;padding:0;text-align:left;cursor:pointer; }.panel-title.static { cursor:default; }
        .panel-icon { width:39px;height:39px;display:grid;place-items:center;background:#eaf4ff;border-radius:11px;color:#176bb5;font-size:19px; }.panel-icon.blue { background:#e9f3ff; }
        .panel-title b { display:block;font-size:14px;color:#18344f;margin-bottom:4px; }.panel-title small { color:#8a9aaa;font-size:11px; }.panel-chevron { margin-left:auto;font-size:22px;color:#6d8aa7; }
        .fields-grid { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px 14px;margin-top:23px; }.field { display:flex;flex-direction:column;gap:7px;min-width:0; }.field.full { grid-column:1/-1; }
        .field span { font-size:11px;font-weight:750;color:#425970; }.field span i { color:#e05252;font-style:normal; }
        .field input,.field textarea { width:100%;border:1px solid #dfe7ef;border-radius:8px;padding:11px 12px;font:12px Arial,sans-serif;color:#203a54;background:#fbfdff;outline:0;transition:border .2s,box-shadow .2s; }
        .field input:focus,.field textarea:focus { border-color:#65a9e7;box-shadow:0 0 0 3px #d9edff; }.field textarea { resize:vertical;line-height:1.6; }
        .form-footer { display:flex;justify-content:flex-end;gap:9px;flex-wrap:wrap; }.form-aside { display:grid;gap:13px; }.aside-card { background:#fff;border:1px solid #e3ebf3;border-radius:14px;padding:19px; }.aside-icon { width:35px;height:35px;border-radius:10px;background:#e9f4ff;color:#1673c1;display:grid;place-items:center;font-size:18px; }
        .aside-card h3 { font-size:13px;color:#1b3652;margin:13px 0 8px; }.aside-card p { color:#8190a0;font-size:11px;line-height:1.7;margin:0; }.source-card a { display:inline-block;margin-top:13px;color:#1672bd;font-size:11px;font-weight:800;text-decoration:none; }.privacy-note { font-size:10px;line-height:1.6;color:#7c8da0;padding:10px 4px; }
        .preview-toolbar { display:flex;justify-content:space-between;align-items:center;gap:15px; }.preview-toolbar .back-link { margin:0; }.preview-actions { display:flex;gap:9px; }.preview-heading { text-align:center;margin:20px 0 25px; }.preview-heading .section-kicker { margin-bottom:9px; }
        .print-paper { max-width:790px;min-height:950px;margin:0 auto;background:white;padding:65px 72px;color:#111;box-shadow:0 8px 40px #173b6117;border:1px solid #e8edf2;font-family:"Times New Roman",serif;font-size:14px;line-height:1.6; }
        .paper-national { display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px;font-size:14px; }.paper-national span { margin-top:4px; }
        .paper-recipient { text-align:center;font-weight:bold;margin:30px 0 17px; }.paper-title { text-align:center;font-size:16px;margin:0 0 25px;line-height:1.4; }
        .paper-text { text-align:justify;margin:12px 0;white-space:pre-wrap; }.paper-subtitle { font-weight:bold;margin:22px 0 9px; }
        .paper-table { border-collapse:collapse;width:100%;margin:7px 0 15px; }.paper-table td { border:1px solid #bbb;padding:7px 9px;vertical-align:top; }.paper-table td:first-child { width:40%;font-weight:normal; }
        .paper-date { text-align:right;margin-top:30px; }.paper-sign { display:flex;flex-direction:column;align-items:flex-end;margin-top:10px;padding-right:30px;min-height:125px; }.paper-sign b { font-size:14px; }.paper-sign span { font-style:italic;font-size:12px; }.paper-sign strong { margin-top:auto; }.paper-footer { border-top:1px solid #ddd;padding-top:8px;color:#777;font-size:10px;margin-top:35px; }
        .preview-bottom { max-width:790px;margin:20px auto 0;display:flex;justify-content:space-between; }
        .docs-footer { border-top:1px solid #e2eaf2;margin-top:60px;padding:22px 3%;display:flex;justify-content:space-between;color:#96a5b5;font-size:10px;letter-spacing:.5px; }
        .animate-in { animation:rise .45s ease both; }
        @keyframes rise { from {opacity:0;transform:translateY(15px)} to {opacity:1;transform:translateY(0)} }
        @keyframes floatIn { from {opacity:0;transform:translateY(20px) scale(.96)} to {opacity:1;transform:translateY(0) scale(1)} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)} }
        @keyframes spin { to {transform:rotate(360deg)} }
        @media(max-width:850px) { .docs-hero { grid-template-columns:1fr .7fr;padding:48px 30px; }.hero-visual { transform:scale(.8); }.template-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.form-layout { grid-template-columns:1fr; }.form-aside { grid-template-columns:repeat(2,1fr); }.privacy-note { grid-column:1/-1; } }
        @media(max-width:600px) { .docs-container { padding:0 13px; }.docs-hero { display:block;padding:42px 25px 30px;min-height:0; }.docs-hero h1 { font-size:38px; }.hero-visual { height:230px;transform:scale(.75);margin-top:5px; }.steps-strip { grid-template-columns:1fr;gap:15px;padding:20px;margin:17px 0 45px; }.section-heading,.form-heading { display:block; }.section-heading h2,.form-heading h2,.preview-heading h2 { font-size:24px; }.search-box { width:100%;margin-top:18px; }.template-grid { grid-template-columns:1fr; }.template-card { min-height:220px; }.library-section,.form-section,.preview-section { padding:0 2px 25px; }.fields-grid { grid-template-columns:1fr; }.field.full { grid-column:auto; }.form-panel { padding:17px; }.form-aside { grid-template-columns:1fr; }.form-footer { justify-content:stretch; }.form-footer button { flex:1; }.preview-toolbar { align-items:flex-start;flex-direction:column; }.preview-actions { width:100%; }.preview-actions button { flex:1; }.print-paper { padding:35px 22px;min-height:0;font-size:12px; }.paper-table td { padding:5px; }.preview-bottom { gap:8px; }.preview-bottom button { flex:1; }.docs-footer { flex-direction:column;gap:9px; } }
        @media print {
          @page { size:A4; margin:18mm 17mm; }
          body { background:white!important; }
          body * { visibility:hidden!important; }
          .print-paper,.print-paper * { visibility:visible!important; }
          .print-paper { position:absolute!important;left:0!important;top:0!important;width:100%!important;max-width:none!important;min-height:0!important;margin:0!important;padding:0!important;border:0!important;box-shadow:none!important;font-size:12pt!important; }
          .paper-footer { display:none!important; }
        }
        @media(prefers-reduced-motion:reduce) { *,*::before,*::after { animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important; } }
      `}</style>
    </main>
  );
}
