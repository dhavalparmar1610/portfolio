"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Summary", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent font-mono text-sm font-bold transition-colors group-hover:bg-accent group-hover:text-white">
            DP
          </span>
          <span className="hidden sm:inline text-foreground">
            Dhaval<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/Dhaval_Parmar_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-sm font-semibold text-accent ring-1 ring-accent/20 transition-all hover:bg-accent hover:text-white hover:ring-accent hover:shadow-lg hover:shadow-accent/20"
        >
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-2xl p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Dhaval_Parmar_Resume.pdf"
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
