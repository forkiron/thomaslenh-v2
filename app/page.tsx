"use client";

import Link from "next/link";
import Timeline from "@/components/Timeline";

// --- DATA ---
const SOCIAL_LINKS = [
  { label: "Email", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

// --- COMPONENTS ---

const Nav = () => (
  <nav className="flex justify-between items-center py-8 px-6 max-w-5xl mx-auto text-[13px] font-mono lowercase tracking-tighter text-zinc-500">
    <div>◆ available for work</div>
    <div className="flex gap-6">
      <Link href="/projects" className="hover:text-white transition-colors">
        projects
      </Link>
      <a href="#about" className="hover:text-white transition-colors">
        about
      </a>
      <a href="#contact" className="hover:text-white transition-colors">
        contact
      </a>
    </div>
  </nav>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-zinc-800 selection:text-white selection:bg-opacity-50">
      <Nav />

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-40">
        {/* Hero / About Me */}
        <header id="about" className="mb-32">
          <h1 className="text-3xl font-medium text-white lowercase tracking-tight mb-4">
            thomas lenh
          </h1>
          <p className="max-w-md text-zinc-500 leading-relaxed lowercase">
            engineer and designer based in waterloo and toronto, focusing on{" "}
            <span className="text-zinc-300 italic underline underline-offset-4">
              minimalist interfaces and optimizied systems
            </span>{" "}
            currently studying math at the university of waterloo.
          </p>
        </header>

        {/* Timeline Section */}
        <Timeline />

        {/* Contact / Footer */}
        <section id="contact" className="border-t border-zinc-900 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-sm text-zinc-500 lowercase">
                reach out if you're a founder or just curious.
              </p>
              <div className="flex gap-4 mt-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-mono text-zinc-600 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-[10px] font-mono text-zinc-800 uppercase">
              © 2026 all rights reserved
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
