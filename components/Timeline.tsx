"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const TIMELINE_DATA = [
  {
    year: "2026",
    role: "future work",
    company: "Visionary Ventures",
    items: [
      {
        title: "Principal Designer",
        details:
          "↳ leading design systems for next-gen spatial computing interfaces.",
      },
      {
        title: "Product Strategy",
        details: "↳ defining roadmap for ai-driven productivity tools.",
      },
    ],
  },
  {
    year: "2025",
    role: "current focus",
    company: "Keywa Newcomers Network",
    items: [
      {
        title: "Full Stack Engineer",
        details:
          "↳ global gateway for international students. building scalable infrastructure.",
      },
      {
        title: "UX Researcher",
        details:
          "↳ conducting user interviews to optimize the onboarding funnel.",
      },
    ],
  },
  {
    year: "2024",
    role: "leadership",
    company: "Event Madness",
    items: [
      {
        title: "Founder @ Neodev League",
        details: "↳ backed by Convictional (YC W19) & WRDSB (64k students).",
      },
      {
        title: "Finance Organizer @ IgnitionHacks",
        details: "↳ 600 participants, 200 submissions, $15k in funding.",
      },
      {
        title: "Founder @ Canadian Youth STEM",
        details:
          "↳ 300 participants, $15k in funding, hosted Nobel Prize winner Donna Strickland.",
      },
    ],
  },
  {
    year: "2023",
    role: "hacker era",
    company: "2x hackathon wins",
    items: [
      {
        title: "WasteOverflow",
        details:
          "↳ IOT system using an HC-SR04 to track regional garbage levels.",
      },
      {
        title: "DaySync",
        details: "↳ productivity lighting tool using an ESP32 + LED strip.",
      },
    ],
  },
];

interface TimelineSubItemProps {
  title: string;
  details: string;
}

const TimelineSubItem = ({ title, details }: TimelineSubItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-default py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5
        className="text-[13px] font-medium transition-colors duration-300"
        style={{
          color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
        }}
      >
        {title}
      </h5>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p
              className="text-[12px] font-light lowercase leading-relaxed mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface TimelineItemProps {
  item: (typeof TIMELINE_DATA)[0];
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start justify-between w-full mb-32 last:mb-0 ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Content Side */}
      <div className={`w-[45%] ${isEven ? "text-left" : "text-right"}`}>
        <div className="mb-4">
          <h4
            className="text-[10px] font-mono uppercase tracking-[0.3em] mb-1"
            style={{ color: "var(--text-subtle)" }}
          >
            {item.company}
          </h4>
          <h3
            className="text-lg font-medium lowercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            {item.role}
          </h3>
        </div>

        <div className="space-y-1">
          {item.items.map((subItem, idx) => (
            <TimelineSubItem
              key={idx}
              title={subItem.title}
              details={subItem.details}
            />
          ))}
        </div>
      </div>

      {/* Center Year Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pt-2">
        <div
          className="w-2 h-2 rounded-full z-10 transition-colors"
          style={{
            backgroundColor: "var(--timeline-node-bg)",
          }}
        />
        <span
          className="mt-4 text-[10px] font-mono rotate-90 origin-left translate-x-1"
          style={{ color: "var(--text-subtle)" }}
        >
          {item.year}
        </span>
      </div>

      {/* Spacer */}
      <div className="w-[45%]" />
    </div>
  );
};

export default function Timeline() {
  const [showMore, setShowMore] = useState(false);

  // Split data into recent (2025-2026) and older (2023-2024)
  const recentItems = TIMELINE_DATA.slice(0, 2); // 2026, 2025
  const olderItems = TIMELINE_DATA.slice(2); // 2024, 2023

  return (
    <section className="relative mb-40">
      {/* Vertical Line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--timeline-line)", opacity: 0.5 }}
      />

      <div className="space-y-20">
        {/* Always show recent items (2025-2026) */}
        {recentItems.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}

        {/* Show older items (2023-2024) when expanded */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-20 pt-20">
                {olderItems.map((item, i) => (
                  <TimelineItem key={i + 2} item={item} index={i + 2} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More / View Less Button */}
        <div className="relative flex justify-center py-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group relative z-10 px-4 py-1.5 text-[10px] font-mono lowercase tracking-widest transition-all duration-300 rounded-full border bg-(--bg-primary)"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border-color)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--text-muted)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-color)";
            }}
          >
            {showMore ? "- show less" : "+ view more"}
          </button>
        </div>
      </div>
    </section>
  );
}
