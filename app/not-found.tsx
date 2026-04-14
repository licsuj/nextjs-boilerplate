import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | ELI5AI",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main style={{ maxWidth: "520px", margin: "80px auto", padding: "0 24px", fontFamily: "inherit" }}>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>404</p>
      <h1 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 12px" }}>
        Page not found
      </h1>
      <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "28px" }}>
        The page you were looking for does not exist or has moved.
        Try browsing topics below, or go back to the homepage.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
        <Link href="/explore" style={linkStyle}>Browse all AI topics →</Link>
        <Link href="/start-here" style={linkStyle}>Beginner learning path →</Link>
        <Link href="/category/ai-basics" style={linkStyle}>AI basics →</Link>
        <Link href="/category/ai-tools" style={linkStyle}>AI tools →</Link>
      </div>
      <Link href="/" style={{ fontSize: "13px", color: "#888" }}>← Back to homepage</Link>
    </main>
  );
}

const linkStyle = {
  display: "block",
  padding: "12px 16px",
  border: "1px solid #e5e5e5",
  borderRadius: "8px",
  textDecoration: "none",
  color: "inherit",
  fontSize: "14px",
};
