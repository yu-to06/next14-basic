/** @type {import('next').NextConfig} */
const nextConfig = {
    // キャッシュがhitしたかどうかがわかる
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
