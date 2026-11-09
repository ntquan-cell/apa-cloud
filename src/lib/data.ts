import { extra } from "./data-extra";
export type Group = { id: string; name: string; desc: string; icon: string };
export type Procedure = {
  slug: string; group: string; title: string; summary: string;
  who: string; agency: string; time: string; fee: string; method: string;
  docs: string[]; steps: string[]; tips: string[]; law: string;
};

export const groups: Group[] = [
  { id: "cu-tru", name: "Cư trú", desc: "Thường trú, tạm trú, lưu trú, tạm vắng, xác nhận cư trú…", icon: "📍" },
  { id: "ca-nhan", name: "Giấy tờ cá nhân", desc: "Căn cước, hộ chiếu, khai sinh, cư trú…", icon: "🪪" },
  { id: "dat-dai", name: "Đất đai – Nhà ở", desc: "Sổ đỏ, tạm trú tạm vắng…", icon: "🏠" },
  { id: "doanh-nghiep", name: "Doanh nghiệp – Thuế", desc: "Hộ kinh doanh, mã số thuế, quyết toán…", icon: "🏢" },
  { id: "bao-hiem", name: "Bảo hiểm", desc: "BHYT, BHXH, lương hưu…", icon: "🩺" },
  { id: "xe-co", name: "Xe cộ", desc: "Đăng ký, sang tên, đăng kiểm, bằng lái, nộp phạt…", icon: "🛵" },
];

const base: Procedure[] = [
  {
    slug: "the-can-cuoc", group: "ca-nhan", title: "Cấp, đổi, cấp lại thẻ căn cước",
    summary: "Làm thẻ căn cước lần đầu, đổi khi hết hạn/thay đổi thông tin hoặc cấp lại khi mất.",
    who: "Công dân Việt Nam đủ điều kiện theo Luật Căn cước", agency: "Công an cấp xã / Công an cấp tỉnh nơi thuận tiện",
    time: "Khoảng 7 ngày làm việc (tùy địa phương)", fee: "Cấp lần đầu thường miễn; đổi/cấp lại có lệ phí – kiểm tra mức hiện hành",
    method: "Nộp trực tiếp hoặc đặt lịch/nộp trước qua Cổng DVC, VNeID",
    docs: ["Thẻ căn cước/CCCD cũ (nếu có)", "Giấy khai sinh hoặc giấy tờ chứng minh thông tin cần điều chỉnh", "Sổ hộ khẩu/giấy xác nhận cư trú (nếu dữ liệu dân cư chưa có)", "Phiếu đề nghị cấp thẻ căn cước (điền tại nơi làm hoặc trước trên VNeID)"],
    steps: ["Chuẩn bị giấy tờ và đặt lịch (nếu có)", "Đến cơ quan Công an, kê khai thông tin, lấy vân tay, chụp ảnh", "Nộp lệ phí (nếu có), nhận giấy hẹn", "Nhận thẻ theo hẹn hoặc qua bưu điện"],
    tips: ["Mang bản chính giấy tờ, không cần photo nếu dữ liệu đã có trên hệ thống", "Ăn mặc gọn, không đeo kính màu khi chụp ảnh"],
    law: "Luật Căn cước 2023 (26/2023/QH15)",
  },
  {
    slug: "ho-chieu", group: "ca-nhan", title: "Cấp hộ chiếu phổ thông",
    summary: "Cấp mới hoặc cấp lại hộ chiếu phổ thông trong nước.",
    who: "Công dân Việt Nam từ đủ 14 tuổi (dưới 14 tuổi do người đại diện làm)", agency: "Phòng Quản lý xuất nhập cảnh – Công an tỉnh/thành phố",
    time: "Khoảng 8 ngày làm việc", fee: "Khoảng 200.000đ (cấp mới); cấp lại do mất có mức cao hơn – kiểm tra mức hiện hành",
    method: "Nộp online qua Cổng DVC rồi đến nhận lịch hẹn, hoặc nộp trực tiếp",
    docs: ["Tờ khai đề nghị cấp hộ chiếu (mẫu TK01)", "Thẻ căn cước/CCCD (bản chính)", "02 ảnh 4×6 nền trắng (nếu cơ quan yêu cầu)", "Hộ chiếu cũ (nếu đổi)"],
    steps: ["Khai tờ khai online trên Cổng DVC, chọn lịch hẹn", "Nộp lệ phí trực tuyến hoặc tại nơi tiếp nhận", "Đến đúng lịch: nộp hồ sơ, chụp ảnh, lấy vân tay", "Nhận kết quả tại nơi nộp hoặc qua bưu điện"],
    tips: ["Họ tên trên tờ khai phải khớp hoàn toàn với căn cước, viết IN HOA có dấu", "Kiểm tra hộ chiếu cũ còn hạn trên 6 tháng nếu sắp đi nước ngoài"],
    law: "Luật Xuất nhập cảnh 2019 (49/2019/QH14)",
  },
  {
    slug: "khai-sinh", group: "ca-nhan", title: "Đăng ký khai sinh",
    summary: "Đăng ký khai sinh cho trẻ trong vòng 60 ngày kể từ ngày sinh.",
    who: "Cha, mẹ hoặc người thân/người giám hộ của trẻ", agency: "UBND cấp xã nơi cư trú của cha hoặc mẹ",
    time: "Thường trong ngày làm việc nếu hồ sơ đủ", fee: "Miễn lệ phí nếu đăng ký đúng hạn",
    method: "Trực tiếp hoặc trực tuyến qua Cổng DVC",
    docs: ["Tờ khai đăng ký khai sinh", "Giấy chứng sinh (hoặc giấy tờ thay thế)", "Giấy đăng ký kết hôn của cha mẹ (nếu có)", "Căn cước của người đi khai"],
    steps: ["Điền tờ khai", "Nộp hồ sơ tại bộ phận Một cửa của xã", "Công chức hộ tịch kiểm tra, ghi sổ", "Nhận giấy khai sinh"],
    tips: ["Họ tên con, ngày sinh phải khớp giấy chứng sinh", "Xin 2–3 bản trích lục để dùng làm BHYT, nhập học"],
    law: "Luật Hộ tịch 2014 (60/2014/QH13)",
  },
  {
    slug: "tam-tru-tam-vang", group: "cu-tru", title: "Đăng ký tạm trú",
    summary: "Khai báo nơi ở tạm thời khi sinh sống ngoài nơi thường trú.",
    who: "Công dân sinh sống từ 30 ngày trở lên ngoài nơi thường trú", agency: "Công an cấp xã nơi tạm trú",
    time: "Khoảng 3 ngày làm việc", fee: "Lệ phí thấp, thường giảm khi nộp online – kiểm tra mức hiện hành",
    method: "Trực tiếp hoặc qua Cổng DVC/VNeID",
    docs: ["Tờ khai thay đổi thông tin cư trú (mẫu CT01)", "Giấy tờ chứng minh chỗ ở hợp pháp (hợp đồng thuê nhà…)", "Văn bản đồng ý của chủ nhà (nếu chưa có giấy tờ trên)", "Căn cước của người khai"],
    steps: ["Điền CT01, xin xác nhận/ký của chủ nhà", "Nộp hồ sơ tại Công an xã hoặc online", "Cơ quan thẩm định, cập nhật dữ liệu cư trú", "Nhận thông báo kết quả"],
    tips: ["Địa chỉ ghi đủ số nhà, đường/thôn, xã, tỉnh", "Sinh viên nội trú có thể dùng xác nhận của ký túc xá"],
    law: "Luật Cư trú 2020 (68/2020/QH14)",
  },
  {
    slug: "giay-chung-nhan-dat", group: "dat-dai", title: "Cấp đổi/cấp lại Giấy chứng nhận quyền sử dụng đất (sổ đỏ)",
    summary: "Đổi sổ đỏ khi rách, hỏng, thay đổi thông tin hoặc cấp lại khi mất.",
    who: "Người sử dụng đất, chủ sở hữu tài sản gắn liền với đất", agency: "Văn phòng đăng ký đất đai (chi nhánh) hoặc bộ phận Một cửa theo quy định địa phương",
    time: "Theo quy định địa phương, thường vài chục ngày làm việc", fee: "Theo quy định của từng tỉnh/thành – kiểm tra tại cơ quan",
    method: "Trực tiếp hoặc qua Cổng DVC (tùy địa phương)",
    docs: ["Đơn đề nghị cấp đổi/cấp lại (mẫu 11/ĐK)", "Giấy chứng nhận cũ (nếu còn)", "Căn cước của người đứng tên", "Giấy xác nhận mất/niêm yết (nếu mất)"],
    steps: ["Chuẩn bị hồ sơ", "Nộp tại cơ quan tiếp nhận", "Cơ quan thẩm tra, có thể niêm yết khi mất", "Nộp phí và nhận kết quả"],
    tips: ["Mang bản chính để đối chiếu", "Thủ tục đất đai thay đổi nhiều sau Luật Đất đai 2024, nên hỏi lại cơ quan"],
    law: "Luật Đất đai 2024 (31/2024/QH15)",
  },
  {
    slug: "ho-kinh-doanh", group: "doanh-nghiep", title: "Đăng ký hộ kinh doanh",
    summary: "Đăng ký thành lập hộ kinh doanh cá thể.",
    who: "Cá nhân hoặc nhóm cá nhân/hộ gia đình", agency: "Cơ quan đăng ký kinh doanh theo phân cấp địa phương",
    time: "Khoảng 3 ngày làm việc", fee: "Lệ phí đăng ký thấp – kiểm tra mức hiện hành",
    method: "Trực tiếp hoặc qua Cổng DVC",
    docs: ["Giấy đề nghị đăng ký hộ kinh doanh", "Căn cước của chủ hộ", "Giấy tờ chứng minh địa điểm kinh doanh", "Biên bản họp nhóm (nếu là nhóm cá nhân)"],
    steps: ["Chọn tên, ngành nghề, địa điểm", "Nộp hồ sơ", "Nhận giấy chứng nhận đăng ký hộ kinh doanh", "Đăng ký thuế và thực hiện nghĩa vụ kê khai"],
    tips: ["Ngành nghề có điều kiện cần giấy phép con", "Nhắc lịch kê khai thuế ngay sau khi có giấy phép"],
    law: "Nghị định 01/2021/NĐ-CP về đăng ký doanh nghiệp (và văn bản sửa đổi)",
  },
  {
    slug: "ma-so-thue-ca-nhan", group: "doanh-nghiep", title: "Đăng ký và quyết toán thuế thu nhập cá nhân",
    summary: "Đăng ký mã số thuế cá nhân, quyết toán thuế TNCN hằng năm.",
    who: "Người có thu nhập chịu thuế", agency: "Cơ quan thuế quản lý; hoặc nộp qua eTax/Thuế điện tử",
    time: "Khoảng 3 ngày làm việc (đăng ký); quyết toán theo hạn luật", fee: "Không thu phí đăng ký mã số thuế",
    method: "Trực tuyến qua cổng thuế điện tử hoặc trực tiếp",
    docs: ["Tờ khai đăng ký thuế (hoặc tờ khai quyết toán)", "Căn cước của người khai", "Chứng từ khấu trừ thuế do nơi trả thu nhập cấp", "Giấy tờ chứng minh người phụ thuộc (nếu giảm trừ)"],
    steps: ["Đăng nhập cổng thuế bằng tài khoản định danh", "Khai tờ khai, đính kèm chứng từ", "Nộp tờ khai và thuế còn phải nộp (nếu có)", "Lưu thông báo tiếp nhận"],
    tips: ["Kiểm tra mã số thuế đã gắn với số định danh cá nhân chưa", "Giữ chứng từ ít nhất theo quy định lưu trữ"],
    law: "Luật Quản lý thuế 2019 (38/2019/QH14); Luật Thuế thu nhập cá nhân",
  },
  {
    slug: "sang-ten-xe", group: "xe-co", title: "Đăng ký sang tên, đổi chủ xe",
    summary: "Sang tên xe máy/ô tô khi mua bán, tặng cho.",
    who: "Chủ xe mới (và chủ xe cũ cung cấp giấy tờ)", agency: "Cơ quan Công an đăng ký xe; nộp lệ phí trước bạ tại cơ quan thuế",
    time: "Thường trong ngày làm việc nếu hồ sơ đủ", fee: "Lệ phí trước bạ (theo giá trị xe, tỷ lệ tùy loại xe và địa phương) + lệ phí đăng ký",
    method: "Trực tiếp hoặc một phần qua Cổng DVC",
    docs: ["Giấy khai đăng ký xe", "Giấy đăng ký xe (cà vẹt) cũ", "Giấy tờ mua bán/tặng cho có công chứng/chứng thực theo quy định", "Căn cước chủ xe mới", "Chứng từ lệ phí trước bạ"],
    steps: ["Lập hợp đồng mua bán, công chứng/chứng thực nếu cần", "Kê khai và nộp lệ phí trước bạ", "Nộp hồ sơ tại cơ quan đăng ký xe", "Nhận giấy đăng ký xe mới"],
    tips: ["Kiểm tra xe còn phạt nguội chưa xử lý", "Biển số tra theo quy định hiện hành của địa phương"],
    law: "Quy định về đăng ký xe của Bộ Công an; Luật Trật tự, an toàn giao thông đường bộ 2024",
  },
  {
    slug: "doi-bang-lai", group: "xe-co", title: "Đổi/cấp lại giấy phép lái xe",
    summary: "Đổi bằng lái hết hạn, hỏng hoặc cấp lại khi mất.",
    who: "Người có giấy phép lái xe Việt Nam", agency: "Cơ quan quản lý giao thông (Sở/Phòng theo phân cấp)",
    time: "Khoảng 5 ngày làm việc", fee: "Khoảng 135.000đ (tham khảo) – kiểm tra mức hiện hành",
    method: "Trực tuyến qua Cổng DVC hoặc trực tiếp",
    docs: ["Đơn đề nghị đổi/cấp lại giấy phép lái xe", "Căn cước", "Giấy khám sức khỏe còn hiệu lực", "Giấy phép lái xe cũ (nếu còn)", "Ảnh theo yêu cầu"],
    steps: ["Khám sức khỏe", "Nộp hồ sơ trực tuyến hoặc trực tiếp", "Nộp lệ phí", "Nhận giấy phép lái xe mới"],
    tips: ["Nộp sớm trước ngày hết hạn", "Tên và ngày sinh phải khớp căn cước"],
    law: "Luật Trật tự, an toàn giao thông đường bộ 2024 (36/2024/QH15) và thông tư hướng dẫn",
  },
];

export const procedures: Procedure[] = [...base, ...extra];

export const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase();

export function searchProcedures(q: string, limit = 3): Procedure[] {
  const words = norm(q).split(/[^a-z0-9]+/).filter((w) => w.length > 1);
  if (!words.length) return [];
  return procedures
    .map((p) => {
      const hay = norm([p.title, p.summary, p.docs.join(" "), p.agency].join(" "));
      const s = words.reduce((a, w) => a + (hay.includes(w) ? (norm(p.title).includes(w) ? 3 : 1) : 0), 0);
      return { p, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => x.p);
}
