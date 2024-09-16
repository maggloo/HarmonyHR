/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'i.imgur.com',
        pathname: '**',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
