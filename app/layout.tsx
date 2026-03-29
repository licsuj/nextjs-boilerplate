export const metadata = {
  title: "ELI5AI — Understand anything in seconds",
  description:
    "Simple explanations for money, AI, psychology, and tech. Built for short-form learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
