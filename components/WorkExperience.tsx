"use client";

import React from "react";
import teslaLogo from "@/app/assets/tesla.png";
import viggleLogo from "@/app/assets/vigglenew.webp";
import plotsLogo from "@/app/assets/plots_new.png";
import keywaLogo from "@/app/assets/keywa_logo.jpg";

const WORK_DATA = [
  {
    company: "Tesla",
    role: "software engineer",
    period: "winter 2027",
    logo: teslaLogo.src,
    href: "https://www.tesla.com/",
  },
  {
    company: "Viggle (a16z)",
    role: "member of technical staff",
    period: "summer 2026",
    logo: viggleLogo.src,
    href: "https://viggle.ai/",
  },
  {
    company: "Plots (a16z)",
    role: "software engineer",
    period: "jan 2026 - april 2026",
    logo: plotsLogo.src,
    href: "https://plots.events",
    smallLogo: true,
  },
  {
    company: "Keywa Newcomers",
    role: "software engineer",
    period: "nov 2025 - dec 2025",
    logo: keywaLogo.src,
    href: "https://www.keywacanada.com/",
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-10 mb-0">
      <h3
        className="font-medium lowercase tracking-tight mb-5"
        style={{ color: "var(--text-muted)", fontSize: "var(--font-section-header)" }}
      >
        work:
      </h3>

      <div className="flex flex-col gap-3 max-w-lg">
        {WORK_DATA.map((job) => (
          <a
            key={job.company}
            href={job.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card flex items-center gap-4 px-4 py-3.5 rounded-xl cursor-pointer no-underline"
          >
            {job.smallLogo ? (
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl shrink-0 flex items-center justify-center bg-black">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-9 h-9 md:w-10 md:h-10 object-contain"
                />
              </div>
            ) : (
              <img
                src={job.logo}
                alt={job.company}
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl object-cover shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <span
                className="font-semibold lowercase tracking-tight block"
                style={{ color: "#1a1a1a", fontSize: "var(--font-card-title)" }}
              >
                {job.company}
              </span>
              <span
                className="lowercase tracking-tight mt-0.5 block"
                style={{ color: "#71717a", fontSize: "var(--font-card-body)" }}
              >
                {job.role}
              </span>
            </div>
            <div
              className="shrink-0 lowercase tracking-tight text-right"
              style={{ color: "#a1a1aa", fontSize: "var(--font-card-meta)" }}
            >
              {job.period}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
