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
      "Leading full-stack architecture decisions across multiple product lines",
      "Driving AI-augmented development workflows across the engineering team",
      "Owning CI/CD pipelines, deployment checklists, and go-live decisions",
      "Mentoring junior engineers on frontend & backend patterns and production discipline",
    ],
  },
  {
    period: "2023 – 2025",
    title: "Software Developer → Senior Developer",
    subtitle: "La Net Team Software Solutions — Surat",
    tag: "Growth",
    tagColor: "bg-accent/10 text-accent ring-accent/20",
    points: [
      "Architected production-grade React + TypeScript UIs for OTT, e-commerce, and real estate",
      "Led RTK Query migration, reducing technical debt and improving data-fetching performance",
      "Integrated GraphQL APIs with Apollo Client and managed BFF architecture",
      "Optimized Core Web Vitals through lazy loading, code splitting, and virtualization",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Software Developer",
    subtitle: "La Net Team Software Solutions — Surat",
    tag: "Foundation",
    tagColor: "bg-purple-400/10 text-purple-400 ring-purple-400/20",
    points: [
      "Built modular, reusable component architectures with React.js and TypeScript",
      "Integrated RESTful APIs with proper error handling, caching, and pagination",
      "Worked closely with UI/UX designers, QA, and backend teams for quality releases",
      "Gained proficiency with AWS serverless services (Lambda, DynamoDB, AppSync)",
    ],
  },
  {
    period: "2019 – 2021",
    title: "M.Sc. Information Technology",
    subtitle: "VNSGU — J.P. Dawar Institute, Surat",
    points: [
      "Specialized in web technologies and software engineering",
      "Built foundational knowledge in data structures, algorithms, and system design",
    ],
  },
  {
    period: "2016 – 2019",
    title: "B.Sc. Information Technology",
    subtitle: "VNSGU — J.P. Dawar Institute, Surat",
    points: [
      "Comprehensive study of computer science fundamentals",
      "Early exposure to web development and programming paradigms",
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
            Experience & Education
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
            From computer science foundations to leading production engineering —
            a journey of continuous growth.
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
