
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "nguoi-dan",
    number: "01",
    icon: "👨‍👩‍👧‍👦",
    title: "Giải pháp cho người dân",
    subtitle: "Chủ động hơn trong mọi thủ tục hành chính",
    description:
      "APA đồng hành cùng mỗi người dân trong quá trình tìm hiểu và thực hiện thủ tục hành chính. Từ việc tra cứu thông tin đến chuẩn bị giấy tờ, mọi hướng dẫn đều được trình bày rõ ràng, dễ hiểu và thuận tiện.",
    features: [
      "Tra cứu thủ tục và thành phần hồ sơ cần chuẩn bị.",
      "Checklist giấy tờ, hạn chế thiếu sót khi nộp hồ sơ.",
      "Hướng dẫn điền biểu mẫu theo từng bước.",
      "Giao diện thân thiện, chữ dễ đọc, hỗ trợ người cao tuổi.",
      "Hỗ trợ giải đáp những câu hỏi hành chính thường gặp.",
    ],
    link: "/thu-tuc",
    linkText: "Tra cứu thủ tục",
    color: "#2563eb",
    background: "#eff6ff",
  },
  {
    id: "doanh-nghiep",
    number: "02",
    icon: "🏢",
    title: "Giải pháp cho doanh nghiệp",
    subtitle: "Tối ưu công việc, chủ động tuân thủ",
    description:
      "Đồng hành cùng doanh nghiệp trong việc tìm hiểu các quy định và thủ tục liên quan đến hoạt động kinh doanh. APA hướng đến việc giúp doanh nghiệp tiết kiệm thời gian, giảm áp lực giấy tờ và quản lý công việc hành chính hiệu quả hơn.",
    features: [
      "Tra cứu thủ tục đăng ký và hoạt động doanh nghiệp.",
      "Hỗ trợ tìm hiểu hồ sơ thuế, bảo hiểm và giấy phép.",
      "Nhắc việc và theo dõi các mốc thời hạn quan trọng.",
      "Hỗ trợ rà soát thông tin, nhận diện vấn đề cần lưu ý trong hồ sơ và hợp đồng.",
      "Kết nối dịch vụ tư vấn chuyên môn khi có nhu cầu.",
    ],
    link: "/bang-gia",
    linkText: "Khám phá dịch vụ",
    color: "#0891b2",
    background: "#ecfeff",
  },
  {
    id: "to-chuc",
    number: "03",
    icon: "🤝",
    title: "Giải pháp cho tổ chức",
    subtitle: "Kết nối thông tin, nâng cao hiệu quả vận hành",
    description:
      "APA hỗ trợ các tổ chức, đơn vị, hội nhóm và tổ chức xã hội trong việc tiếp cận thông tin hành chính, quản lý nhu cầu giấy tờ và hướng dẫn thành viên thực hiện các thủ tục cần thiết một cách thống nhất, thuận tiện.",
    features: [
      "Tra cứu và tổng hợp thông tin thủ tục theo nhu cầu tổ chức.",
      "Hướng dẫn chuẩn bị hồ sơ cho thành viên và người liên quan.",
      "Hỗ trợ chuẩn hóa nội dung hướng dẫn và quy trình nội bộ.",
      "Tư vấn, kết nối chuyên gia khi phát sinh vấn đề pháp lý.",
      "Hướng đến quản lý thông tin tập trung và tiết kiệm nguồn lực.",
    ],
    link: "/lien-he",
    linkText: "Trao đổi nhu cầu",
    color: "#7c3aed",
    background: "#f5f3ff",
  },
  {
    id: "nuoc-ngoai",
    number: "04",
    icon: "🌏",
    title: "Giải pháp cho người Việt ở nước ngoài",
    subtitle: "Dù ở đâu, vẫn dễ dàng tìm hiểu thủ tục tại Việt Nam",
    description:
      "APA giúp người Việt đang sinh sống, học tập và làm việc ở nước ngoài tiếp cận thông tin về các thủ tục liên quan đến Việt Nam, hiểu rõ giấy tờ cần chuẩn bị và định hướng liên hệ đúng cơ quan có thẩm quyền.",
    features: [
      "Tra cứu thông tin về hộ chiếu và giấy tờ cá nhân.",
      "Tìm hiểu thủ tục xác nhận tư pháp.",
      "Hướng dẫn về hợp pháp hóa lãnh sự và chứng nhận giấy tờ.",
      "Tìm hiểu thủ tục liên quan đến visa và xuất nhập cảnh.",
      "Định hướng liên hệ cơ quan đại diện Việt Nam phù hợp.",
    ],
    link: "/lien-he",
    linkText: "Nhận tư vấn",
    color: "#0f766e",
    background: "#f0fdfa",
  },
];

export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
