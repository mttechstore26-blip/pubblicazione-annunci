/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },

  serverExternalPackages: ["playwright", "playwright-core"],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      electron: false,
    };

    return config;
  },
};

module.exports = nextConfig;
