"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Contact from "@/components/Contact";
import OnlineIndicator from "@/components/OnlineIndicator";

const PROJECTS = [
  {
    name: "project_alpha",
    desc: "lorem ipsum dolor sit amet",
    details: [
      "↳ Built with Next.js, TypeScript, and Tailwind CSS.",
      "↳ Optimized performance and SEO.",
      "↳ Integrated with various third-party APIs.",
    ],
  },
  {
    name: "beta_system",
    desc: "consectetur adipiscing elit sed do",
    details: [
      "↳ Distributed system architecture.",
      "↳ Scalable backend using Go and PostgreSQL.",
      "↳ Real-time data processing with WebSockets.",
    ],
  },
  {
    name: "gamma_engine",
    desc: "incididunt ut labore et dolore magna",
    details: [
      "↳ Custom game engine built with C++ and OpenGL.",
      "↳ Cross-platform support for Windows and Linux.",
      "↳ Advanced rendering pipeline.",
    ],
  },
  {
    name: "delta_ai",
    desc: "quis nostrud exercitation ullamco",
    details: [
      "↳ Machine learning model for image recognition.",
      "↳ Trained on large datasets using PyTorch.",
      "↳ Deployed as a microservice using Docker.",
    ],
  },
];

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
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        home
      </Link>
      <Link
        href="/projects"
        className="font-mono lowercase tracking-tighter transition-all duration-200"
        style={{ color: "var(--text-primary)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
      >
        projects
      </Link>
    </div>
  </nav>
);

const ProjectItem = ({ project }: { project: (typeof PROJECTS)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col pb-4 cursor-pointer"
      style={{ borderBottom: "1px solid var(--border-color)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-baseline">
        <span
          className="transition-transform duration-300 group-hover:translate-x-2"
          style={{
            color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
          }}
        >
          {project.name}
        </span>
        <span
          className="text-sm font-mono transition-colors duration-300"
          style={{
            color: isHovered ? "var(--text-secondary)" : "var(--text-muted)",
          }}
        >
          {project.desc}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div
              className="text-sm font-light lowercase space-y-1 ml-2"
              style={{ color: "var(--text-muted)" }}
            >
              {project.details.map((detail, idx) => (
                <div key={idx}>{detail}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
        <section className="mb-40">
          <header className="mb-12">
            <h2
              className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              selected_projects
            </h2>
            <p
              className="max-w-md text-sm leading-relaxed lowercase"
              style={{ color: "var(--text-subtle)" }}
            >
              a collection of things i've built, ranging from web apps to
              distributed systems. hover to see details.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-y-10">
            {PROJECTS.map((proj, i) => (
              <ProjectItem key={i} project={proj} />
            ))}
          </div>
        </section>

        {/* Contact / Footer */}
        <Contact />
      </main>
    </div>
  );
}
