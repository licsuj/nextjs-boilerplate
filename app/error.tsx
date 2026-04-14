"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error tracking service here (e.g. Sentry)
    console.error(error);
  }, [error]);

  return (
    <main style={{ maxWidth: "520px", margin: "80px auto", padding: "0 24px", fontFamily: "inherit" }}>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>Something went wrong</p>
      <h1 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 12px" }}>
        Unexpected error
      </h1>
      <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "28px" }}>
        An error occurred loading this page. You can try again or return home.
      </p>
      <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
        <button onClick={reset} style={btnStyle}>Try again</button>
        <Link href="/" style={{ ...btnStyle, textDecoration: "none", color: "inherit" }}>
          Go home
        </Link>
      </div>
      {error.digest && (
        <p style={{ fontSize: "11px", color: "#bbb", fontFamily: "monospace" }}>
          Error ID: {error.digest}
        </p>
      )}
    </main>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "10px 16px",
  border: "1px solid #e5e5e5",
  borderRadius: "8px",
  background: "none",
  fontSize: "14px",
  cursor: "pointer",
};
