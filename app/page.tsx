"use client";

import Link from "next/link";
import Timeline from "@/components/Timeline";
import ThemeToggle from "@/components/ThemeToggle";
import Contact from "@/components/Contact";
import OnlineIndicator from "@/components/OnlineIndicator";

// --- COMPONENTS ---

const Nav = () => (
  <nav
    className="flex justify-between items-center py-6 md:py-8 px-4 md:px-6 max-w-3xl mx-auto text-[12px] md:text-[13px] font-mono lowercase tracking-tighter"
    style={{ color: "var(--text-muted)" }}
  >
    <div className="flex items-center gap-3 md:gap-4">
      <OnlineIndicator />
      <ThemeToggle />
    </div>
    <div className="flex gap-4 md:gap-6">
      <Link
        href="/"
        className="font-mono lowercase tracking-tighter transition-all duration-200"
        style={{ color: "var(--text-primary)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
      >
        home
      </Link>
      <Link
        href="/projects"
        className="font-mono lowercase tracking-tighter transition-all duration-200"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        projects
      </Link>
    </div>
  </nav>
);

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-secondary)",
      }}
    >
      <Nav />

      <main className="max-w-3xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-12 md:pb-20">
        {/* Hero / About Me */}
        <header id="about" className="mb-20 md:mb-32">
          <h1
            className="text-2xl md:text-3xl font-medium lowercase tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            thomas lenh
          </h1>
          <div
            className="max-w-md leading-relaxed lowercase"
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.75rem, 2.5vw, 1rem)",
            }}
          >
            <div style={{ whiteSpace: "nowrap" }}>
              engineer and designer based in waterloo and toronto, focusing on
            </div>
            <div
              className="italic underline underline-offset-4"
              style={{ color: "var(--text-accent)", whiteSpace: "nowrap" }}
            >
              minimalist interfaces and optimized systems
            </div>
            <div className="ml-4" style={{ whiteSpace: "nowrap" }}>
              ↳ currently studying math at the university of waterloo.
            </div>
          </div>
        </header>

        {/* Timeline Section */}
        <Timeline />

        {/* Contact / Footer */}
        <Contact />
      </main>
    </div>
  );
}
