import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://www.eli5ai.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ELI5AI.co | AI explained simply",
    template: "%s | ELI5AI.co",
  },
  description:
    "Plain-English AI explanations for beginners and curious professionals. Learn ChatGPT, AI agents, RAG, prompts, APIs, automation, and more.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ELI5AI.co | AI explained simply",
    description:
      "Plain-English AI explanations for beginners and curious professionals. Learn ChatGPT, AI agents, RAG, prompts, APIs, automation, and more.",
    url: siteUrl,
    siteName: "ELI5AI.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELI5AI.co | AI explained simply",
    description:
      "Plain-English AI explanations for beginners and curious professionals. Learn ChatGPT, AI agents, RAG, prompts, APIs, automation, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M0LJMK6XMQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M0LJMK6XMQ');
        `}
      </Script>
    </html>
  );
}
