import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.full, template: `%s | ${SITE.name}` },
  description: "Trợ lý AI giúp người dân và doanh nghiệp làm thủ tục hành chính nhanh, chuẩn, minh bạch.",
  openGraph: { title: SITE.full, type: "website", locale: "vi_VN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Floating />
      </body>
    </html>
  );
}
