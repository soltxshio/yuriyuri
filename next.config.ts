import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // リポジトリ名を指定（例：'/my-nextjs-app'）
  basePath: '/yuriyuri',
  // 静的アセットのパス設定
  assetPrefix: '/yuriyuri/',
};

export default nextConfig;