"use client";

import { useReveal } from "@/hooks/useReveal";

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  glowColor: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Frontend Architecture & Tech Leadership",
    description:
      "5+ years architecting scalable React/TypeScript applications with Micro Frontend (Module Federation) patterns, Atomic Design, and rigorous code review standards. Proven Tech Lead experience driving architecture decisions and mentoring cross-functional engineering teams.",
    accent: "text-accent",
    glowColor: "group-hover:shadow-accent/10",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "AI-Augmented Engineering",
    description:
      "Systematic AI-augmented development using GitHub Copilot, Claude AI, and Cursor IDE — accelerating sprint velocity by ~30% while maintaining test coverage and production quality. AI-scaffolded E2E test suites with Playwright.",
    accent: "text-emerald",
    glowColor: "group-hover:shadow-emerald/10",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Architecture",
    description:
      "End-to-end full-stack capability: React/Next.js frontends → Node.js/GraphQL BFF layers → PostgreSQL/Prisma data layers → AWS Lambda/AppSync serverless backends. Designed and owned BFF architectures reducing API complexity by 60%.",
    accent: "text-purple-400",
    glowColor: "group-hover:shadow-purple-400/10",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "CI/CD & Production Ownership",
    description:
      "Owned CI/CD pipelines using Jenkins, Spinnaker, and GitHub Actions. Authored deployment checklists and go-live runbooks. Zero-defect mindset backed by Jest, React Testing Library, and Playwright E2E suites achieving 90%+ coverage.",
    accent: "text-amber-400",
    glowColor: "group-hover:shadow-amber-400/10",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function Competencies() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="reveal relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            What I Do Best
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Core Competencies
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            Combining senior engineering depth with architectural thinking,
            full-stack fluency, and team leadership to drive measurable impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 reveal-stagger">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative rounded-2xl bg-surface p-6 ring-1 ring-border transition-all duration-500 hover:ring-border/80 hover:-translate-y-1 hover:shadow-2xl ${pillar.glowColor}`}
            >
              {/* Gradient line at top */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated ring-1 ring-border ${pillar.accent} transition-colors`}
              >
                {pillar.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
