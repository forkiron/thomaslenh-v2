"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- HELPER COMPONENT ---
const TimelineLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:opacity-80"
    style={{ color: "var(--text-muted)" }}
  >
    {children}
  </a>
);

// --- DATA ---
const TIMELINE_DATA = [
  {
    year: "2026",
    role: "2026",
    company: "",
    items: [
      {
        title: "TestEraser",
        details: "↳ Transform used tests into blank practice questions",
      },
      {
        title: "Product Strategy",
        details: "↳ defining roadmap for ai-driven productivity tools.",
      },
    ],
  },
  {
    year: "2025",
    role: "2025",
    company: "",
    items: [
      {
        title: "Software Engineer - Keywa Newcomers Network",
        details: [
          "↳ global gateway for international students.",
          "↳ building scalable infrastructure.",
        ],
      },
      {
        title: "Engineering - FIRST Robotics (FRC 2702)",
        details: "↳ Prototyped a 3D computer vision recognition pipeline",
      },
      {
        title: "Content/Growth",
        details: [
          "↳ cracked virality, 10M+ views on Instagram and Tiktok in 3 months",
          <>
            ↳ growth @{" "}
            <TimelineLink href="https://typeos.com/">TypeOS</TimelineLink> (YC
            X25) &{" "}
            <TimelineLink href="https://methods.app/">instinct©</TimelineLink>
          </>,
        ],
      },
      {
        title: "Co-founder - Neo Developer League",
        details: [
          "↳ non-profit org, raised $12k for 'not just a hackathon'. ",
          "↳ backed by Convictional (YC W19) and Waterloo regional school board (~ 65k students)..",
        ],
      },
    ],
  },
  {
    year: "2024",
    role: "2024",
    company: "",
    items: [
      {
        title: "Finance Organizer - IgnitionHacks 2024",
        details: "↳ 400+ participants, 120+ submissions, $15k+ raised.",
      },
      {
        title: "Organizer - Canadian Youth STEM Conference",
        details: [
          "↳ Nation-wide flagship youth tech summit hosted by UWaterloo, 300 students, $20k raised.",
          "↳ Opening keynote by Donna Strickland (Nobel Laureate), backed by SHAD Canada and TRuST Network and Many Profs .",
        ],
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
  details: string | string[] | React.ReactNode | React.ReactNode[];
}

const TimelineSubItem = ({ title, details }: TimelineSubItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group py-1 w-full"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h5
        className="text-[13px] font-medium transition-colors duration-200 cursor-pointer px-3 py-1 rounded-md -mx-3"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? "var(--selection-bg)" : "transparent",
          color: isHovered
            ? "var(--selection-text)"
            : isOpen
            ? "var(--text-primary)"
            : "var(--text-secondary)",
          display: "block",
          width: "100%",
          textAlign: "left",
          margin: 0,
          paddingInlineStart: "0.75rem",
          paddingInlineEnd: "0.75rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
        }}
      >
        {title}
      </h5>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
            style={{ width: "100%", alignSelf: "flex-start" }}
          >
            <div
              className="text-[12px] font-light leading-relaxed mt-1"
              style={{
                color: "var(--text-muted)",
                display: "block",
                width: "100%",
                textAlign: "left",
                margin: 0,
                padding: 0,
              }}
            >
              {Array.isArray(details) ? (
                <>
                  {details.map((detail, idx) => (
                    <div key={idx} style={{ textAlign: "left" }}>
                      {detail}
                    </div>
                  ))}
                </>
              ) : (
                <div>{details}</div>
              )}
            </div>
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
      <div
        className={`w-[45%] ${isEven ? "text-left" : "text-right"}`}
        style={isEven ? { marginLeft: "10%" } : {}}
      >
        <div className="mb-4">
          <h4
            className="text-[10px] font-mono uppercase tracking-[0.3em] mb-1"
            style={{ color: "var(--text-subtle)" }}
          >
            {item.company}
          </h4>
        </div>

        {/* Year Header - Centered above body text */}
        <div className="relative mb-4">
          <h3
            className="text-lg font-medium lowercase tracking-tighter text-center relative z-10"
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
