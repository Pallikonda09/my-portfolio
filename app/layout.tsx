import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Full-stack developer based in Hyderabad, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0f] text-[#f0f0f5] antialiased">
        {children}
      </body>
    </html>
  );
}