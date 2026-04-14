import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Specific /explain/ slugs ────────────────────────────
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
        // Was: permanent: false → /  (causes Google to keep
        // the old URL indexed and drops the user silently)
        source: "/explain/inflation",
        destination: "/explain/what-is-an-llm",
        permanent: true,
      },

      // ── Category slug renames ────────────────────────────────
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

      // ── Catch-alls (must come last) ──────────────────────────
      // Any /explain/* slug not matched above → /explore
      // Catches typos, AI-hallucinated URLs, old backlinks
      {
        source: "/explain/:slug*",
        destination: "/explore",
        permanent: false, // 302 — we may add the real page later
        missing: [
          {
            type: "header",
            key: "x-matched-path",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
