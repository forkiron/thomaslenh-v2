"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const PROJECTS = [
  { name: "project_alpha", desc: "lorem ipsum dolor sit amet" },
  { name: "beta_system", desc: "consectetur adipiscing elit sed do" },
  { name: "gamma_engine", desc: "incididunt ut labore et dolore magna" },
  { name: "delta_ai", desc: "quis nostrud exercitation ullamco" },
];

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
        className="transition-colors"
        style={{ color: "var(--text-primary)" }}
      >
        projects
      </Link>
    </div>
  </nav>
);

export default function Projects() {
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
        {/* Projects List */}
        <section className="mb-40">
          <h2
            className="text-[11px] font-mono uppercase tracking-[0.3em] mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            selected_projects
          </h2>
          <div className="grid grid-cols-1 gap-y-8">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="group flex justify-between items-baseline pb-4 cursor-crosshair"
                style={{ borderBottom: "1px solid var(--border-color)" }}
              >
                <span
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {proj.name}
                </span>
                <span
                  className="text-sm group-hover:opacity-80 transition-opacity font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {proj.desc}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
