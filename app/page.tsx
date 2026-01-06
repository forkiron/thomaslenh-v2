"use client";

import Link from "next/link";
import Timeline from "@/components/Timeline";
import ThemeToggle from "@/components/ThemeToggle";
import Contact from "@/components/Contact";
import OnlineIndicator from "@/components/OnlineIndicator";

// --- COMPONENTS ---

const Nav = () => (
  <nav
    className="flex justify-between items-center py-8 px-6 max-w-5xl mx-auto text-[13px] font-mono lowercase tracking-tighter"
    style={{ color: "var(--text-muted)" }}
  >
    <div className="flex items-center gap-4">
      <OnlineIndicator />
      <ThemeToggle />
    </div>
    <div className="flex gap-6">
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

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-40">
        {/* Hero / About Me */}
        <header id="about" className="mb-32">
          <h1
            className="text-3xl font-medium lowercase tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            thomas lenh
          </h1>
          <p
            className="max-w-md leading-relaxed lowercase"
            style={{ color: "var(--text-muted)" }}
          >
            engineer and designer based in waterloo and toronto, focusing on{" "}
            <span
              className="italic underline underline-offset-4"
              style={{ color: "var(--text-accent)" }}
            >
              minimalist interfaces and optimizied systems
            </span>
            <br />
            <span className="ml-4">
              ↳ currently studying math at the university of waterloo.
            </span>
          </p>
        </header>

        {/* Timeline Section */}
        <Timeline />

        {/* Contact / Footer */}
        <Contact />
      </main>
    </div>
  );
}
