import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // เปิด static export (next export → โฟลเดอร์ out/)
  output: "export",

  // ปิด image optimizer ของ next/image (ต้องใช้ <img> หรือ next/image แบบ unoptimized)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
