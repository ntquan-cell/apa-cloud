"use client";

import { useMemo, useState } from "react";
import { useLocal } from "@/lib/useLocal";

type Field = {
  key: string;
  label: string;
  type?: "text" | "date" | "tel" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  hint?: string;
};

type FormTemplate = {
  id: string;
  category: string;
  title: string;
  code: string;
  description: string;
  source: string;
  sourceUrl: string;
  documents: string[];
  note: string;
  fields: Field[];
};

const templates: FormTemplate[] = [
  {
    id: "personal", category: "Cá nhân", title: "Phiếu thông tin cá nhân", code: "APA-01",
    description: "Lưu thông tin nền để sử dụng lại khi chuẩn bị các thủ tục.",
    source: "Mẫu hỗ trợ do APA thiết kế", sourceUrl: "https://dichvucong.gov.vn/",
    note: "Đây là phiếu hỗ trợ của APA, không phải biểu mẫu hành chính bắt buộc.",
    documents: ["CCCD hoặc giấy tờ định danh", "Thông tin cư trú", "Số điện thoại liên hệ"],
    fields: [
      { key: "name", label: "Họ và tên", required: true, hint: "Ghi đúng theo giấy tờ định danh." },
      { key: "birth", label: "Ngày sinh", type: "date", required: true },
      { key: "gender", label: "Giới tính", type: "select", options: ["Nam", "Nữ", "Khác"] },
      { key: "cccd", label: "Số CCCD/số định danh", required: true },
      { key: "issueDate", label: "Ngày cấp", type: "date" },
      { key: "issuePlace", label: "Nơi cấp" },
      { key: "address", label: "Nơi cư trú", type: "textarea", required: true },
      { key: "phone", label: "Số điện thoại", type: "tel" },
      { key: "email", label: "Email", type: "email" },
    ],
  },
  {
    id: "tk1ts", category: "Bảo hiểm xã hội", title: "Phiếu chuẩn bị thông tin TK1-TS", code: "TK1-TS",
    description: "Chuẩn bị dữ liệu cá nhân và nội dung tham gia/điều chỉnh BHXH, BHYT.",
    source: "Bảo hiểm xã hội Việt Nam", sourceUrl: "https://baohiemxahoi.gov.vn/",
    note: "Đây là phiếu chuẩn bị dữ liệu. Khi nộp phải dùng mẫu TK1-TS chính thức và hướng dẫn hiện hành của BHXH Việt Nam.",
    documents: ["Mẫu TK1-TS chính thức", "Thông tin mã số BHXH nếu đã được cấp", "Giấy tờ chứng minh nội dung điều chỉnh nếu có"],
    fields: [
      { key: "name", label: "Họ và tên", required: true },
      { key: "birth", label: "Ngày sinh", type: "date", required: true },
      { key: "gender", label: "Giới tính", type: "select", options: ["Nam", "Nữ"], required: true },
      { key: "cccd", label: "Số CCCD/số định danh", required: true },
      { key: "bhxh", label: "Mã số BHXH (nếu có)" },
      { key: "address", label: "Địa chỉ nhận thông báo", type: "textarea", required: true },
      { key: "phone", label: "Điện thoại", type: "tel" },
      { key: "request", label: "Nội dung tham gia/điều chỉnh", type: "textarea", required: true },
    ],
  },
  {
    id: "land", category: "Đất đai", title: "Phiếu chuẩn bị hồ sơ đất đai", code: "APA-DD01",
    description: "Tập hợp thông tin thửa đất và nhu cầu thực hiện thủ tục.",
    source: "Cổng Dịch vụ công Quốc gia", sourceUrl: "https://dichvucong.gov.vn/",
    note: "Không phải đơn đăng ký đất đai chính thức. Biểu mẫu và giấy tờ phải theo đúng thủ tục, địa phương và trường hợp cụ thể.",
    documents: ["Giấy chứng nhận quyền sử dụng đất nếu có", "Giấy tờ định danh", "Tài liệu liên quan đến yêu cầu", "Thông tin thửa đất"],
    fields: [
      { key: "name", label: "Họ tên người sử dụng đất", required: true },
      { key: "cccd", label: "Số CCCD/số định danh", required: true },
      { key: "landAddress", label: "Địa chỉ thửa đất", type: "textarea", required: true },
      { key: "parcel", label: "Số thửa" },
      { key: "map", label: "Số tờ bản đồ" },
      { key: "certificate", label: "Số giấy chứng nhận" },
      { key: "request", label: "Nội dung đề nghị", type: "textarea", required: true },
      { key: "phone", label: "Số điện thoại", type: "tel" },
    ],
  },
  {
    id: "business", category: "Doanh nghiệp", title: "Phiếu chuẩn bị hồ sơ thành lập doanh nghiệp", code: "APA-DN01",
    description: "Thu thập thông tin về loại hình, trụ sở, ngành nghề và người đại diện.",
    source: "Cổng thông tin quốc gia về đăng ký doanh nghiệp", sourceUrl: "https://dangkykinhdoanh.gov.vn/",
    note: "Phiếu này không thay thế giấy đề nghị đăng ký doanh nghiệp, điều lệ hoặc biểu mẫu bắt buộc theo loại hình doanh nghiệp.",
    documents: ["Thông tin định danh thành viên/chủ sở hữu", "Thông tin trụ sở", "Ngành nghề dự kiến", "Điều lệ và giấy tờ theo loại hình"],
    fields: [
      { key: "company", label: "Tên doanh nghiệp dự kiến", required: true },
      { key: "type", label: "Loại hình", type: "select", options: ["TNHH một thành viên", "TNHH hai thành viên trở lên", "Công ty cổ phần", "Doanh nghiệp tư nhân"], required: true },
      { key: "address", label: "Địa chỉ trụ sở", type: "textarea", required: true },
      { key: "lines", label: "Ngành nghề kinh doanh", type: "textarea", required: true },
      { key: "capital", label: "Vốn điều lệ dự kiến" },
      { key: "representative", label: "Người đại diện theo pháp luật", required: true },
      { key: "cccd", label: "Số CCCD người đại diện", required: true },
      { key: "phone", label: "Số điện thoại", type: "tel" },
      { key: "email", label: "Email", type: "email" },
    ],
  },
  {
    id: "tax", category: "Thuế", title: "Phiếu chuẩn bị thông tin đăng ký thuế", code: "APA-T01",
    description: "Chuẩn bị thông tin người nộp thuế trước khi chọn đúng tờ khai.",
    source: "Cổng thông tin điện tử ngành Thuế", sourceUrl: "https://www.gdt.gov.vn/",
    note: "Không phải tờ khai thuế. Mẫu chính thức phụ thuộc tư cách người nộp thuế và thủ tục cụ thể.",
    documents: ["Giấy tờ định danh hoặc đăng ký doanh nghiệp", "Địa chỉ và thông tin liên hệ", "Tài liệu theo thủ tục đăng ký"],
    fields: [
      { key: "kind", label: "Đối tượng", type: "select", options: ["Cá nhân", "Hộ kinh doanh", "Doanh nghiệp", "Tổ chức khác"], required: true },
      { key: "name", label: "Tên người nộp thuế/tổ chức", required: true },
      { key: "cccd", label: "CCCD/mã số doanh nghiệp" },
      { key: "taxCode", label: "Mã số thuế (nếu có)" },
      { key: "address", label: "Địa chỉ", type: "textarea", required: true },
      { key: "request", label: "Nội dung đăng ký/cập nhật", type: "textarea", required: true },
      { key: "phone", label: "Số điện thoại", type: "tel" },
      { key: "email", label: "Email", type: "email" },
    ],
  },
  {
    id: "labor", category: "Lao động", title: "Phiếu chuẩn bị thông tin hợp đồng lao động", code: "APA-LD01",
    description: "Tổng hợp thông tin cơ bản để chuẩn bị giao kết hợp đồng lao động.",
    source: "Cơ sở dữ liệu quốc gia về văn bản pháp luật", sourceUrl: "https://vbpl.vn/",
    note: "Không phải hợp đồng lao động. Hợp đồng phải có đầy đủ nội dung theo pháp luật lao động và thỏa thuận thực tế.",
    documents: ["Giấy tờ định danh người lao động", "Thông tin pháp lý người sử dụng lao động", "Mô tả công việc, địa điểm, lương và thời giờ làm việc"],
    fields: [
      { key: "employee", label: "Họ tên người lao động", required: true },
      { key: "cccd", label: "Số CCCD/số định danh", required: true },
      { key: "employer", label: "Tên người sử dụng lao động", required: true },
      { key: "job", label: "Công việc/chức danh", required: true },
      { key: "workplace", label: "Địa điểm làm việc", required: true },
      { key: "start", label: "Ngày bắt đầu dự kiến", type: "date" },
