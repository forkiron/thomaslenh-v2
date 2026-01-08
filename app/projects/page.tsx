"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Contact from "@/components/Contact";
import OnlineIndicator from "@/components/OnlineIndicator";

interface Project {
  name: string;
  image?: string;
  video?: string;
  badges: string[];
  description: string;
  links: {
    code?: string;
    devpost?: string;
    demo?: string;
  };
}

const PROJECTS: Project[] = [
  {
    name: "Scrible",
    video: "/assets/scrible.mp4",
    badges: [],
    description: "",
    links: {},
  },
  {
    name: "iSpy",
    video: "/assets/ispy.mp4",
    badges: [],
    description: "",
    links: {},
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

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div
      className="flex gap-6 p-6 rounded-lg mb-6 group cursor-pointer"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
      }}
    >
      {/* Image/Video */}
      <div className="shrink-0 w-64 h-48 rounded-lg overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {project.name}
          </h3>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-1 rounded"
                style={{
                  backgroundColor: "var(--selection-bg)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        {Object.keys(project.links).length > 0 && (
          <div className="flex gap-3">
            {"code" in project.links && project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                style={{
                  backgroundColor: "var(--selection-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--border-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--selection-bg)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
            {"devpost" in project.links && project.links.devpost && (
              <a
                href={project.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                style={{
                  backgroundColor: "var(--selection-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--border-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--selection-bg)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Devpost
              </a>
            )}
            {"demo" in project.links && project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                style={{
                  backgroundColor: "var(--selection-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--border-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--selection-bg)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Demo
              </a>
            )}
          </div>
        )}
      </div>
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
            <p
              className="max-w-md text-sm leading-relaxed lowercase"
              style={{ color: "var(--text-subtle)" }}
            >
              a collection of things i've built.
            </p>
          </header>

          <div className="flex flex-col">
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
