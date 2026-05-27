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
}

const PROJECTS: Project[] = [
  {
    title: "Real Estate Platform",
    subtitle: "MFE-Based Property Portal",
    description: [
      "Structured and maintained a Micro Frontend (MFE) architecture for isolated module development and independent deployments.",
      "Integrated Redux and i18next for centralized state and multilingual support across the platform.",
      "Wrote comprehensive unit and integration tests; owned production deployments.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Redux", "Tailwind CSS", "i18next", "MFE", "Jest", "React Testing Library"],
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
    subtitle: "Cart & Checkout System",
    description: [
      "Built modular UI components: Address Book, Wishlist, Cart Items, and Order History aligned with design system standards.",
      "Integrated BFF (Backend for Frontend) layer to optimize GraphQL queries and reduce data handling complexity.",
      "Scaffolded Playwright E2E tests for critical checkout flows using Claude AI.",
    ],
    stack: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "BFF", "Playwright", "Jest", "React Testing Library", "Claude AI"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    title: "OTT Reference Apps",
    subtitle: "Web & WebTV Streaming Platform",
    description: [
      "Architected dynamic, data-driven streaming interfaces for Web and WebTV platforms, rendering content from Presentation Manager configurations.",
      "Built complex media features: dynamic content rows, Profile Selection, Straight-To-Playback navigation, and Force Update modal flows.",
      "Optimized cross-device rendering for specialized WebTV constraints.",
    ],
    stack: ["React.js", "TypeScript", "Redux Toolkit", "SCSS", "GitHub Copilot"],
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
    subtitle: "OTT Content Management Platform",
    description: [
      "Spearheaded scalable frontend modules for a dynamic CMS used to configure streaming applications.",
      "Led migration from legacy Flummox state management to Redux Toolkit Query (RTK Query), significantly improving data fetching and caching.",
      "Engineered core modules integrating complex REST APIs for dynamic UI layouts.",
    ],
    stack: ["React.js", "Typescript", "RTK Query", "Flummox", "REST APIs", "Styled Components", "Jest", "React Testing Library",  "GitHub Copilot"],
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
            Projects That Shipped
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            Production-grade applications serving thousands of users across
            OTT, e-commerce, and real estate domains.
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
                  <div>
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
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border-subtle transition-colors hover:text-foreground hover:ring-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
