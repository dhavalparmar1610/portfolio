"use client";

import { useReveal } from "@/hooks/useReveal";

export default function OpenToWork() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="open-to-work" className="reveal relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
        <div className="absolute inset-0 bg-emerald/[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-emerald/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl bg-surface ring-1 ring-emerald/20 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-emerald/60 via-emerald to-emerald/60" />

          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left content */}
              <div className="flex-1">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald ring-1 ring-emerald/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                  </span>
                  Currently Open to Work
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4">
                  Actively Seeking{" "}
                  <span className="text-emerald">Senior Engineer</span> Roles
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  I&apos;m actively interviewing for{" "}
                  <span className="text-foreground font-medium">
                    Senior Software Engineer
                  </span>{" "}
                  and{" "}
                  <span className="text-foreground font-medium">
                    Senior Frontend Engineer
                  </span>{" "}
                  roles - ideally in product-driven companies where performance,
                  scalability, and clean architecture matter.
                </p>

                {/* Role chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Senior Software Engineer",
                    "Senior Frontend Engineer",
                    "Full-Stack Engineer",
                    "Frontend Architect",
                    "Tech Lead",
                  ].map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald ring-1 ring-emerald/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Surat, India · Remote or Hybrid
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    IST (UTC+5:30)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Available Immediately
                  </div>
                </div>
              </div>

              {/* Right — CTAs */}
              <div className="flex flex-col gap-3 lg:min-w-[200px]">
                <a
                  href="/Dhaval_Parmar_Resume.pdf"
                  download
                  id="otw-download-resume"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald/25 transition-all hover:bg-emerald/90 hover:shadow-xl hover:shadow-emerald/30 hover:-translate-y-0.5"
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
                  id="otw-linkedin"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-elevated px-6 py-3.5 text-sm font-semibold text-foreground ring-1 ring-border transition-all hover:ring-emerald/30 hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  View LinkedIn
                </a>
                <a
                  href="mailto:parmardhaval375@gmail.com"
                  id="otw-email"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-elevated px-6 py-3.5 text-sm font-semibold text-foreground ring-1 ring-border transition-all hover:ring-emerald/30 hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
