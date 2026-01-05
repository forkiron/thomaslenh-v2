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
    company: "Tempor Incididunt",
    details:
      "↳ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    year: "2024",
    role: "Magna Aliqua",
    company: "Excepteur Sint",
    details:
      "↳ Mollis nunc sed id semper risus in hendrerit gravida. Libero id faucibus nisl tincidunt eget.",
  },
  {
    year: "2023",
    role: "Student",
    company: "UWaterloo",
    details:
      "↳ Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Elementum curabitur vitae nunc sed.",
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
        <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-1">
          {item.company}
        </h4>
        <h3 className="text-lg font-medium text-zinc-200 lowercase">
          {item.role}
        </h3>

        <AnimatePresence>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-zinc-500 mt-2 leading-relaxed font-light lowercase"
            >
              {item.details}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Center Year Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700 z-10 transition-colors group-hover:bg-white" />
        <span className="mt-4 text-[10px] font-mono text-zinc-600 rotate-90 origin-left translate-x-1">
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
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-900" />
      <div className="space-y-12">
        {TIMELINE_DATA.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

