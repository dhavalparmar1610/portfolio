"use client";

import { useReveal } from "@/hooks/useReveal";

interface TimelineEvent {
  period: string;
  title: string;
  subtitle: string;
  points: string[];
  tag?: string;
  tagColor?: string;
}

const TIMELINE: TimelineEvent[] = [
  {
    period: "2025 – Present",
    title: "Senior Software Developer",
    subtitle: "La Net Team Software Solutions — Surat",
    tag: "Current",
    tagColor: "bg-emerald/10 text-emerald ring-emerald/20",
    points: [
      "Leading frontend architecture for 3+ concurrent product lines, defining component library standards, code review gates, and deployment protocols",
      "Introduced AI-augmented engineering practices (GitHub Copilot, Claude AI) across the team — improving sprint velocity by ~30% and test coverage by 40%",
      "Own CI/CD pipelines via Jenkins, Spinnaker, and GitHub Actions — authoring go-live runbooks and post-deployment verification checklists",
      "Mentoring 3–5 junior/mid engineers on React patterns, TypeScript best practices, and production-grade frontend architecture",
    ],
  },
  {
    period: "2023 – 2025",
    title: "Software Developer → Senior Developer",
    subtitle: "La Net Team Software Solutions — Surat",
    tag: "Growth",
    tagColor: "bg-accent/10 text-accent ring-accent/20",
    points: [
      "Architected and delivered production React/TypeScript frontends for 3 enterprise domains (OTT streaming, e-commerce, real estate), serving thousands of concurrent users",
      "Led migration from Flummox to RTK Query, eliminating redundant API calls and reducing average data-fetch latency by ~35%",
      "Engineered BFF (Backend for Frontend) layer with Node.js + GraphQL, abstracting 10+ REST endpoints into a unified API surface — reducing frontend complexity by 60%",
      "Improved Core Web Vitals (LCP, FID, CLS) via route-based code splitting, React.lazy, react-window virtualization, and image optimization — achieving 90+ Lighthouse scores",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Software Developer",
    subtitle: "La Net Team Software Solutions — Surat",
    tag: "Foundation",
    tagColor: "bg-purple-400/10 text-purple-400 ring-purple-400/20",
    points: [
      "Built 20+ reusable React/TypeScript component library modules following Atomic Design principles, reducing UI duplication across 4 products",
      "Integrated REST APIs with centralized error boundaries, optimistic updates, and infinite-scroll pagination — handling 10k+ product catalog datasets",
      "Collaborated in cross-functional Agile teams (designers, QA, backend) across 2-week sprint cycles, consistently achieving 95%+ sprint completion",
      "Delivered AWS serverless features using Lambda, DynamoDB, and AppSync — supporting real-time data sync and GraphQL subscriptions at scale",
    ],
  },
  {
    period: "2019 – 2021",
    title: "M.Sc. Information Technology",
    subtitle: "VNSGU — J.P. Dawar Institute, Surat",
    points: [
      "Specialized in web technologies, software engineering, and distributed systems",
      "Built foundational knowledge in data structures, algorithms, and system design",
    ],
  },
  {
    period: "2016 – 2019",
    title: "B.Sc. Information Technology",
    subtitle: "VNSGU — J.P. Dawar Institute, Surat",
    points: [
      "Comprehensive study of computer science fundamentals",
      "Early exposure to web development, databases, and programming paradigms",
    ],
  },
];

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="experience" className="reveal relative py-24 lg:py-32">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Experience &amp; Education
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            5+ years of progressive growth — from building component libraries
            to leading architecture decisions and mentoring teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.period}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[12px] top-1 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-[15px] w-[15px] rounded-full bg-surface ring-[3px] ring-accent/60 transition-all">
                      <div className="h-full w-full rounded-full bg-accent/40" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="group rounded-2xl bg-surface p-6 ring-1 ring-border transition-all duration-500 hover:ring-border/80 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10">
                      {/* Period + Tag */}
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="text-xs font-mono text-muted tracking-wider">
                          {event.period}
                        </span>
                        {event.tag && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1 ${event.tagColor}`}
                          >
                            {event.tag}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {event.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {event.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
