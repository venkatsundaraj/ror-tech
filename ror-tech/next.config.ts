/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      {
        protocol: "https",
        hostname: "opyj1m0rbr.ufs.sh",
        pathname: "/f/**", // Matches everything under /f/
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
