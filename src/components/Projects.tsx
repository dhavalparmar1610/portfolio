"use client";

import { useReveal } from "@/hooks/useReveal";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  stack: string[];
  color: string;
  iconBg: string;
  icon: React.ReactNode;
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Real Estate Platform",
    subtitle: "Module Federation · Micro Frontend Architecture",
    description: [
      "Architected a Module Federation-based Micro Frontend (MFE) system enabling 4 independent modules to deploy without cross-team coordination or regressions",
      "Implemented Redux Toolkit + i18next for centralized state management and multi-language/RTL support across the entire property portal",
      "Achieved 90%+ Jest + React Testing Library coverage; owned end-to-end deployment to production with zero critical post-deploy defects",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Redux", "Module Federation", "i18next", "MFE", "Jest", "React Testing Library", "Tailwind CSS"],
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10 text-amber-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Platform",
    subtitle: "BFF Architecture · GraphQL · Checkout System",
    description: [
      "Built 8+ modular e-commerce components (Cart, Checkout, Wishlist, Address Book, Order History) aligned to a company design system via a custom BFF layer",
      "Designed BFF (Backend for Frontend) architecture with Node.js + GraphQL, consolidating 10+ microservice endpoints — reducing client-side data processing by 60%",
      "Scaffolded Playwright E2E test suite covering critical checkout flows (cart → payment → confirmation), reducing manual regression time by 70%",
    ],
    stack: ["React.js", "Next.js", "Node.js", "TypeScript", "GraphQL", "BFF", "Playwright", "Jest", "React Testing Library", "Tailwind CSS", "Claude AI"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    title: "OTT Streaming Apps",
    subtitle: "Web & WebTV · Cross-Device Streaming Platform",
    description: [
      "Architected data-driven streaming interfaces for Web and WebTV platforms, rendering content from a Presentation Manager CMS with 50+ configurable layout types",
      "Implemented complex media features: Profile Selection, Straight-To-Playback navigation, Force Update modals, and dynamic content row rendering — serving thousands of concurrent viewers",
      "Engineered cross-device rendering optimizations for WebTV constraints (limited memory, 10-foot UI), achieving smooth 60fps performance on target devices",
    ],
    stack: ["React.js", "TypeScript", "Redux Toolkit", "RTK Query", "SCSS", "GitHub Copilot"],
    color: "from-violet-500/20 to-indigo-500/20",
    iconBg: "bg-violet-500/10 text-violet-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: "Presentation Manager",
    subtitle: "OTT Content Management Platform · CMS",
    description: [
      "Spearheaded frontend for an internal CMS platform used to configure and manage streaming application layouts across 3 products and 2 platforms",
      "Led state management migration from legacy Flummox to RTK Query — reducing boilerplate by 40%, improving cache hit rate by 3x, and eliminating redundant API calls",
      "Engineered 15+ CMS modules integrating complex REST APIs, enabling content managers to configure OTT app layouts without engineering intervention",
    ],
    stack: ["React.js", "TypeScript", "RTK Query", "Flummox", "REST APIs", "Styled Components", "Jest", "React Testing Library", "GitHub Copilot"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 text-blue-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="projects" className="reveal relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Production Work
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            Enterprise-scale applications delivered across 3 domains — OTT streaming,
            e-commerce, and real estate — serving real end-users in production.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 reveal-stagger">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-surface ring-1 ring-border overflow-hidden transition-all duration-500 hover:ring-border/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${project.iconBg} ring-1 ring-border`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border-subtle transition-colors hover:text-foreground hover:ring-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links row */}
                {(project.github || project.live) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}

                {/* NDA notice for enterprise projects */}
                {!project.github && !project.live && (
                  <div className="flex items-center gap-2 pt-4 border-t border-border-subtle">
                    <svg className="h-3.5 w-3.5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span className="text-xs text-muted">Enterprise project · Code under NDA · Details available on request</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/dhavalparmar1610"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated px-6 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition-all hover:ring-accent/40 hover:bg-surface hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
