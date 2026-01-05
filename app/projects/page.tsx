"use client";

import Link from "next/link";

const PROJECTS = [
  { name: "project_alpha", desc: "lorem ipsum dolor sit amet" },
  { name: "beta_system", desc: "consectetur adipiscing elit sed do" },
  { name: "gamma_engine", desc: "incididunt ut labore et dolore magna" },
  { name: "delta_ai", desc: "quis nostrud exercitation ullamco" },
];

const Nav = () => (
  <nav className="flex justify-between items-center py-8 px-6 max-w-5xl mx-auto text-[13px] font-mono lowercase tracking-tighter text-zinc-500">
    <div>◆ available for work</div>
    <div className="flex gap-6">
      <Link
        href="/projects"
        className="hover:text-white transition-colors text-white"
      >
        projects
      </Link>
      <Link href="/#about" className="hover:text-white transition-colors">
        about
      </Link>
      <Link href="/#contact" className="hover:text-white transition-colors">
        contact
      </Link>
    </div>
  </nav>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-zinc-800 selection:text-white selection:bg-opacity-50">
      <Nav />

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-40">
        {/* Projects List */}
        <section className="mb-40">
          <h2 className="text-[11px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-12">
            selected_projects
          </h2>
          <div className="grid grid-cols-1 gap-y-8">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="group flex justify-between items-baseline border-b border-zinc-900 pb-4 cursor-crosshair"
              >
                <span className="text-zinc-200 group-hover:translate-x-2 transition-transform duration-300">
                  {proj.name}
                </span>
                <span className="text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono">
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
