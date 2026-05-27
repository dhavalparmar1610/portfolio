import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhaval Parmar — Senior Software Developer & Full-Stack Engineer",
  description:
    "Portfolio of Dhaval Parmar — Senior Software Developer with 5+ years of experience building scalable, high-performance web applications using React.js, TypeScript, Node.js, GraphQL, and AWS.",
  keywords: [
    "Dhaval Parmar",
    "Software Developer",
    "Full-Stack Developer",
    "React.js",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
    "AWS",
    "AI-Augmented Development",
    "Portfolio",
  ],
  authors: [{ name: "Dhaval Parmar" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Dhaval Parmar — Senior Software Developer & Full-Stack Engineer",
    description:
      "Senior Software Developer with 5+ years building scalable, full-stack web applications across OTT, e-commerce, and real estate domains.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="noise-bg min-h-full flex flex-col">{children}</body>
    </html>
  );
}
