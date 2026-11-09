# APA – Trợ lý hành chính số (bản hoàn chỉnh)

Website Next.js 15 + React 19 + TypeScript. Gồm: trang chủ, thư viện 36 thủ tục (6 nhóm), trợ lý AI,
hồ sơ & tờ khai tự điền, nhắc hạn giấy tờ, tìm cơ quan, sản phẩm, giải pháp, bảng giá, blog,
giới thiệu, liên hệ, đăng ký demo, đăng nhập, tải app, chính sách & điều khoản, sitemap, robots.

## 1. Chạy trên máy
```
npm install
npm run dev
```
Mở http://localhost:3000

## 2. Cấu hình
Đổi `.env.example` thành `.env.local` rồi điền (đều không bắt buộc; không điền vẫn chạy được):
- `NEXT_PUBLIC_SITE_URL` – tên miền thật
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` – lưu form liên hệ + đăng nhập
- `OPENAI_API_KEY` – trợ lý trả lời bằng AI (không có thì trả lời từ dữ liệu thủ tục)

Sửa số điện thoại, email, link Zalo/Messenger, bảng giá, bài blog, câu hỏi thường gặp trong `src/lib/site.ts`.
Sửa/ thêm thủ tục trong `src/lib/data.ts` và `src/lib/data-extra.ts`.

## 3. Supabase (lưu form liên hệ/demo)
Chạy trong SQL Editor:
```sql
create table leads (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  type text, name text, phone text, email text, role text, message text
);
alter table leads enable row level security;
create policy "cho phep gui form" on leads for insert to anon with check (true);
```

## 4. Đưa lên GitHub
```
git init
git add .
git commit -m "APA website"
git branch -M main
git remote add origin https://github.com/TEN-BAN/apa-cloud.git
git push -u origin main
```

## 5. Lên tên miền (Vercel)
Vào vercel.com → Add New Project → chọn repo → thêm biến môi trường như mục 2 → Deploy →
Settings → Domains → thêm tên miền và trỏ DNS theo hướng dẫn.

## Lưu ý
Thông tin thủ tục mang tính tham khảo, cần đối chiếu với Cổng Dịch vụ công quốc gia trước khi công bố.
Hai trang Chính sách bảo mật và Điều khoản là văn bản mẫu, nên nhờ luật sư rà soát.
