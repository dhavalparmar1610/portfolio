import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy-load below-fold sections for optimal initial load performance
const Competencies = dynamic(() => import("@/components/Competencies"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Competencies />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
