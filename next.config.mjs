/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.stmuangthai.com",
      },
    ],
  },
};

export default nextConfig;
