"use client";

import { useReveal } from "@/hooks/useReveal";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  accent: string;
  span?: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    accent: "text-accent",
    span: "md:col-span-2",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js (Express)",
      "Python (FastAPI)",
      "Tailwind CSS",
      "SCSS",
      "Styled Components",
    ],
  },
  {
    title: "State & Data Management",
    accent: "text-emerald",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: [
      "Redux Toolkit (RTK Query)",
      "Zustand",
      "Jotai",
      "Context API",
      "GraphQL (Apollo)",
      "REST APIs",
      "Prisma ORM",
    ],
  },
  {
    title: "Backend & Databases",
    accent: "text-purple-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: [
      "Node.js REST APIs",
      "GraphQL (Apollo Server)",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "JWT Auth",
      "BFF Architecture",
      "WebSockets",
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "text-amber-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    skills: [
      "AWS Lambda",
      "DynamoDB",
      "AppSync",
      "CloudWatch",
      "GitHub Actions (CI/CD)",
      "Spinnaker",
      "Jenkins",
      "Docker",
      "Sumo Logic",
    ],
  },
  {
    title: "Testing & Performance",
    accent: "text-rose-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    skills: [
      "Jest",
      "React Testing Library",
      "Playwright (E2E)",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "Virtualization",
      "Bundle Analysis",
    ],
  },
  {
    title: "AI Productivity Tools",
    accent: "text-cyan-400",
    span: "md:col-span-2",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    skills: [
      "GitHub Copilot",
      "Claude AI (Anthropic)",
      "OpenAI Codex",
      "Cursor IDE",
      "GTM / Analytics",
      "i18next",
      "WCAG A11y",
    ],
  },
  {
    title: "Tools & Workflow",
    accent: "text-teal-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.653-4.657m5.014-.134a.75.75 0 0 0 1.108-.136 18.351 18.351 0 0 0 3.434-7.006 18.35 18.35 0 0 0-7.005 3.434.75.75 0 0 0-.136 1.107l2.6 2.6Z" />
      </svg>
    ),
    skills: [
      "Git / GitHub",
      "Webpack",
      "Vite",
      "Figma",
      "VS Code",
      "Agile (Scrum / Kanban)",
      "Jira",
      "Micro Frontends (MFE)",
    ],
  },
];

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="skills" className="reveal relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            A comprehensive toolkit honed over 5+ years of production development
            across diverse domains.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3 reveal-stagger">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`group relative rounded-2xl bg-surface p-6 ring-1 ring-border transition-all duration-500 hover:ring-border/80 hover:-translate-y-0.5 ${
                cat.span ?? ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-surface-elevated ring-1 ring-border ${cat.accent}`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface-elevated px-3 py-1.5 text-xs font-medium text-muted-foreground ring-1 ring-border-subtle transition-all hover:text-foreground hover:ring-border hover:bg-accent/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
