"use client";

import { useReveal } from "@/hooks/useReveal";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/dhavalparmar1610",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhaval-p-5a1975192",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:parmardhaval375@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+918200163577",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hero"
      className="reveal relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald/[0.05] blur-[100px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        {/* Status badges row */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {/* Open to Work badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald ring-1 ring-emerald/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Open to Work · Senior Frontend &amp; Full-Stack Roles
          </div>
          {/* Tech Lead badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/20">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            Senior Software Developer · 5+ Yrs Experience
          </div>
        </div>

        {/* Heading — ATS-optimized role title */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-foreground">Senior Software</span>
          <span className="block mt-2 bg-gradient-to-r from-accent via-accent-hover to-emerald bg-clip-text text-transparent animate-gradient">
            Engineer
          </span>
        </h1>

        {/* Role specialization line */}
        <p className="mx-auto mt-4 max-w-lg text-sm font-mono text-muted tracking-widest uppercase">
          React · TypeScript · Next.js · Node.js · GraphQL · AWS
        </p>

        {/* Subtitle — recruiter-optimized */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          5+ years shipping{" "}
          <span className="text-foreground font-medium">
            production-grade React &amp; TypeScript
          </span>{" "}
          applications at scale — across{" "}
          <span className="text-accent font-medium">
            OTT streaming, e-commerce &amp; real estate
          </span>{" "}
          domains. Full-stack depth in{" "}
          <span className="text-emerald font-medium">
            Node.js · GraphQL · AWS
          </span>
          . Tech Lead with CI/CD ownership and mentoring experience.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Dhaval_Parmar_Resume.pdf"
            download
            id="hero-download-resume"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
          <a
            href="#projects"
            id="hero-view-work"
            className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated px-8 py-3.5 text-sm font-semibold text-foreground ring-1 ring-border transition-all hover:ring-accent/40 hover:bg-surface hover:-translate-y-0.5"
          >
            See My Projects
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated text-muted-foreground ring-1 ring-border transition-all hover:text-accent hover:ring-accent/40 hover:bg-accent/10 hover:-translate-y-0.5"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* ATS-visible tech stack marquee */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted tracking-wide">
          {[
            "React.js",
            "TypeScript",
            "Next.js",
            "GraphQL",
            "Node.js",
            "AWS Lambda",
            "PostgreSQL",
            "Redux Toolkit",
            "Micro Frontends",
            "CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface px-3 py-1.5 ring-1 ring-border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
