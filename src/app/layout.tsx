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
  title: "Dhaval Parmar — Senior Software Engineer | React · TypeScript · Next.js",
  description:
    "Senior Software Engineer with 5+ years building production-grade React/TypeScript applications across OTT streaming, e-commerce, and real estate. Tech Lead with full-stack depth in Node.js, GraphQL, AWS, and Micro Frontend architecture. Open to Senior Frontend & Full-Stack Engineer roles.",
  keywords: [
    "Dhaval Parmar",
    "Senior Software Engineer",
    "Senior Frontend Engineer",
    "Frontend Architect",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Full-Stack Engineer",
    "Tech Lead",
    "React.js",
    "TypeScript",
    "Next.js",
    "Node.js",
    "GraphQL",
    "AWS",
    "Micro Frontend",
    "BFF Architecture",
    "Performance Optimization",
    "Core Web Vitals",
    "CI/CD",
    "Redux Toolkit",
    "RTK Query",
    "PostgreSQL",
    "Redis",
    "Prisma ORM",
    "Jenkins",
    "Spinnaker",
    "System Design",
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
    title: "Dhaval Parmar — Senior Software Engineer | Senior Frontend Engineer | React · TypeScript · Next.js",
    description:
      "Senior Software Engineer with 5+ years shipping production-grade React/TypeScript apps across OTT, e-commerce, and real estate. Tech Lead with full-stack depth in Node.js, GraphQL, and AWS. Open to Senior Frontend & Full-Stack Engineer roles.",
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
