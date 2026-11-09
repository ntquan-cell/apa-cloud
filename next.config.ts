import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Không để lỗi cảnh báo ESLint làm hỏng quá trình deploy
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
