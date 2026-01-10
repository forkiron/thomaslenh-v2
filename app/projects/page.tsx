"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
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
    description:
      "Transcribes impaired handwriting into handwritten and legible texts on a digital notepad. Built with a CRNN and CTC loss function to extract and analyze handwriting.",
    links: {
      code: "https://github.com/yourusername/scrible",
      devpost: "https://devpost.com/software/scrible",
    },
  },
  {
    name: "iSpy",
    video: "/assets/ispy.mp4",
    badges: [],
    description:
      "A Pinterest Chrome extension that detects AI-generated art. Empowering artists to protect their work and preserve authenticity.",
    links: {
      code: "https://github.com/forkiron/ispy",
    },
  },
  {
    name: "UrbanSprout",
    image: "/assets/urbansprout.jpg",
    badges: [],
    description:
      "A cheap solution that automates and optimizes plant watering. IoT device that combines a moisture sensor, ESP8266 and a servo to detect, analyze and dispense water dependent per plant.",
    links: {
      code: "https://github.com/nikofisch/urbansprout",
      devpost: "https://devpost.com/software/urbansprout",
    },
  },
  {
    name: "WasteOverflow",
    image: "/assets/wasteoverflow.jpg",
    badges: [],
    description:
      "IoT system using an HC-SR04 sensor to track and visualize regional garbage levels. Includes a dashboard for real-time tracking using InfluxDB. A winning project at RythmHacks.",
    links: {
      code: "https://github.com/nikofisch/WasteOverflow",
      devpost: "https://devpost.com/software/wasteoverflow",
    },
  },
  {
    name: "asianpuritytest",
    image: "/assets/asianpuritytest.png",
    badges: [],
    description:
      "Testing virality strategies, ideation to production in 2 hours. 30k impressions and 2000+ users in a week, maintains 1000+ users per month.",
    links: {
      demo: "https://asianpuritytest.com",
    },
  },
];

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
  const [isHovered, setIsHovered] = useState(false);
  const isWasteOverflow = project.name === "WasteOverflow";

  return (
    <div
      className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-lg mb-6 group transition-all duration-200"
      style={{
        backgroundColor: isHovered
          ? "var(--selection-bg)"
          : "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video */}
      <div className="shrink-0 w-full md:w-64 h-48 rounded-lg overflow-hidden">
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
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
              !isWasteOverflow ? "group-hover:scale-110" : ""
            }`}
            style={{
              transform: isWasteOverflow
                ? isHovered
                  ? "scale(1.32)"
                  : "scale(1.2)"
                : undefined,
            }}
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-medium tracking-tight mb-2"
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
            className="text-sm leading-relaxed mb-4 normal-case"
            style={{ color: "var(--text-muted)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Links */}
        {Object.keys(project.links).length > 0 && (
          <div className="flex items-center gap-5">
            {"code" in project.links && project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ color: "var(--text-subtle)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-subtle)";
                }}
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {"devpost" in project.links && project.links.devpost && (
              <a
                href={project.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ color: "var(--text-subtle)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-subtle)";
                }}
              >
                <ExternalLink size={14} />
                Devpost
              </a>
            )}
            {"demo" in project.links && project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ color: "var(--text-subtle)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-subtle)";
                }}
              >
                {project.name === "asianpuritytest" ? (
                  <ExternalLink size={14} />
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {project.name === "asianpuritytest" ? "Website" : "Demo"}
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

      <main className="max-w-3xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-20 md:pb-40">
        <motion.section
          className="mb-20 md:mb-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <header className="mb-12">
            <p
              className="max-w-md text-sm leading-relaxed lowercase"
              style={{ color: "var(--text-muted)" }}
            >
              my archive.
            </p>
          </header>

          <div className="flex flex-col">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: "easeOut",
                }}
              >
                <ProjectItem project={proj} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}
