import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/explain/chatgpt",
        destination: "/explain/what-is-chatgpt",
        permanent: true,
      },
      {
        source: "/explain/api",
        destination: "/explain/what-is-an-api",
        permanent: true,
      },
      {
        source: "/explain/inflation",
        destination: "/",
        permanent: false,
      },
      {
        source: "/category/basics",
        destination: "/category/ai-basics",
        permanent: true,
      },
      {
        source: "/category/tools",
        destination: "/category/ai-tools",
        permanent: true,
      },
      {
        source: "/category/workflows",
        destination: "/category/ai-workflows",
        permanent: true,
      },
      {
        source: "/category/comparisons",
        destination: "/category/ai-comparisons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
