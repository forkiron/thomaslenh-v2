"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const TIMELINE_DATA = [
  {
    year: "2026",
    role: "Consectetur Adipiscing",
    company: "Lorem Ipsum Corp",
    details:
      "↳ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    year: "2025",
    role: "Sed Do Eiused",
    company: "Keywa Newcomers Network",
    details: "↳ global gateway for international students.",
  },
  {
    year: "2024",
    role: "2024",
    company: "Event Madness",
    details: "↳ Neodev League (backed by Convictional YC W19 & WRDSB ).",
  },
  {
    year: "2023",
    role: "2023",
    company: "2x hackathon wins",
    details:
      "↳ Built an IOT system using an HC-SR04 to monitor regional garbage fill levels with end-to-end database integration and visualization",
  },
];

interface TimelineItemProps {
  item: {
    year: string;
    role: string;
    company: string;
    details: string;
  };
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between w-full mb-24 last:mb-0 ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Side */}
      <div className={`w-[42%] ${isEven ? "text-left" : "text-right"}`}>
        <h4
          className="text-[11px] font-mono uppercase tracking-[0.2em] mb-1"
          style={{ color: "var(--text-muted)" }}
        >
          {item.company}
        </h4>
        <h3
          className="text-lg font-medium lowercase"
          style={{ color: "var(--text-secondary)" }}
        >
          {item.role}
        </h3>

        <AnimatePresence>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm mt-2 leading-relaxed font-light lowercase"
              style={{ color: "var(--text-muted)" }}
            >
              {item.details}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Center Year Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div
          className="w-2 h-2 rounded-full z-10 transition-colors"
          style={{
            backgroundColor: "var(--timeline-node-bg)",
            border: "1px solid var(--timeline-node-border)",
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
      <div className="w-[42%]" />
    </div>
  );
};

export default function Timeline() {
  return (
    <section className="relative mb-40">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--timeline-line)" }}
      />
      <div className="space-y-12">
        {TIMELINE_DATA.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
