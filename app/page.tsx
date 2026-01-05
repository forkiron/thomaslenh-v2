"use client";

import Link from "next/link";
import Timeline from "@/components/Timeline";
import ThemeToggle from "@/components/ThemeToggle";

// --- DATA ---
const SOCIAL_LINKS = [
  { label: "Email", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

// --- COMPONENTS ---

const Nav = () => (
  <nav
    className="flex justify-between items-center py-8 px-6 max-w-5xl mx-auto text-[13px] font-mono lowercase tracking-tighter"
    style={{ color: "var(--text-muted)" }}
  >
    <div className="flex items-center gap-4">
      <div>◆ available for work</div>
      <ThemeToggle />
    </div>
    <div className="flex gap-6">
      <Link
        href="/projects"
        className="hover:opacity-100 transition-opacity"
        style={{ color: "var(--text-muted)" }}
      >
        projects
      </Link>
      <a
        href="#about"
        className="hover:opacity-100 transition-opacity"
        style={{ color: "var(--text-muted)" }}
      >
        about
      </a>
      <a
        href="#contact"
        className="hover:opacity-100 transition-opacity"
        style={{ color: "var(--text-muted)" }}
      >
        contact
      </a>
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
        <section
          id="contact"
          className="pt-20"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p
                className="text-sm lowercase"
                style={{ color: "var(--text-muted)" }}
              >
                reach out if you're a founder or a fellow builder!
              </p>
              <div className="flex gap-4 mt-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-mono hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div
              className="text-[10px] font-mono uppercase"
              style={{ color: "var(--text-subtle)" }}
            >
              © 2026 all rights reserved
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
