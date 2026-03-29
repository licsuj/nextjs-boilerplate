import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ELI5AI.co — Complex topics, explained simply",
  description:
    "Simple explanations for money, AI, psychology, and tech. Built for short-form learning and social-first content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
