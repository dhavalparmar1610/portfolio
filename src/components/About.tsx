"use client";

import { useReveal } from "@/hooks/useReveal";

const HIGHLIGHTS = [
  {
    label: "Core Stack",
    value: "React · TypeScript · Next.js",
    color: "text-accent",
  },
  {
    label: "Full-Stack",
    value: "Node.js · GraphQL · PostgreSQL · AWS",
    color: "text-emerald",
  },
  {
    label: "Architecture",
    value: "Micro Frontends · BFF · CI/CD",
    color: "text-purple-400",
  },
  {
    label: "Leadership",
    value: "Tech Lead · Code Reviews · Mentoring",
    color: "text-amber-400",
  },
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="reveal relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Senior Software Engineer &amp; Senior Frontend Engineer
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Left — Avatar + quick facts */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="h-40 w-40 rounded-2xl bg-gradient-to-br from-accent/20 to-emerald/20 ring-1 ring-border flex items-center justify-center text-5xl font-bold text-accent">
                DP
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald/10 ring-2 ring-background">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald" />
                </span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="w-full space-y-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col gap-0.5 rounded-xl bg-surface p-4 ring-1 ring-border"
                >
                  <span className={`text-xs font-semibold uppercase tracking-wider ${h.color}`}>
                    {h.label}
                  </span>
                  <span className="text-sm font-medium text-foreground">{h.value}</span>
                </div>
              ))}
            </div>

            {/* Location & availability */}
            <div className="w-full rounded-xl bg-emerald/5 p-4 ring-1 ring-emerald/20">
              <div className="flex items-center gap-2 mb-2">
                <svg className="h-4 w-4 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-xs font-semibold text-emerald uppercase tracking-wider">Available for Hire</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Surat, Gujarat, India · IST (UTC+5:30)<br />
                Remote or Hybrid · Immediate Start
              </p>
            </div>
          </div>

          {/* Right — Narrative */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a{" "}
              <span className="text-foreground font-semibold">
                Senior Software Engineer
              </span>{" "}
              with 5+ years of experience architecting and shipping
              production-grade web applications across{" "}
              <span className="text-accent font-medium">
                OTT streaming, e-commerce, and real estate
              </span>{" "}
              domains.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My core strength is building scalable{" "}
              <span className="text-foreground font-medium">
                React &amp; TypeScript
              </span>{" "}
              frontends that perform — leveraging{" "}
              <span className="text-foreground font-medium">
                Micro Frontend architectures, BFF patterns, RTK Query,
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">Apollo GraphQL</span>
              . I have full-stack fluency in{" "}
              <span className="text-emerald font-medium">
                Node.js, PostgreSQL, Prisma ORM,
              </span>{" "}
              and{" "}
              <span className="text-emerald font-medium">
                AWS serverless services
              </span>{" "}
              (Lambda, DynamoDB, AppSync).
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              As a{" "}
              <span className="text-foreground font-semibold">Tech Lead</span>
              , I&apos;ve driven architectural decisions, owned CI/CD pipelines
              with{" "}
              <span className="text-foreground font-medium">
                Jenkins &amp; Spinnaker
              </span>
              , and mentored engineers on production best practices. I apply
              AI-augmented development workflows daily — using{" "}
              <span className="text-foreground font-medium">
                GitHub Copilot, Claude AI, and Cursor IDE
              </span>{" "}
              — to ship faster without sacrificing quality.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m currently open to{" "}
              <span className="text-accent font-semibold">
                Senior Software Engineer
              </span>{" "}
              and{" "}
              <span className="text-accent font-semibold">
                Senior Frontend Engineer
              </span>{" "}
              roles - preferably in product companies where{" "}
              <span className="text-foreground font-medium">
                frontend performance and user experience
              </span>{" "}
              are first-class priorities.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Dhaval_Parmar_Resume.pdf"
                download
                id="about-download-resume"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/dhaval-p-5a1975192"
                target="_blank"
                rel="noopener noreferrer"
                id="about-linkedin"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated px-6 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition-all hover:ring-accent/40 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
