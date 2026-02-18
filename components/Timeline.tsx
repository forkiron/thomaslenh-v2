"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import keywaLogo from "@/app/assets/keywa_logo.jpg";
import logo2702 from "@/app/assets/2702_logo.png";
import neodevLogo from "@/app/assets/neodev_logo.png";
import flowboatLogo from "@/app/assets/flowboat_logo.png";
import ignitionhacksLogo from "@/app/assets/ignitionhacks_logo.jpeg";
import jackorgLogo from "@/app/assets/jackorg_logo.png";
import viggleLogo from "@/app/assets/viggle.png";
import plotsLogo from "@/app/assets/plots.jpg";

// helper component
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

// logo mapping
const LOGO_MAP: Record<string, string> = {
  keywa: keywaLogo.src,
  "2702": logo2702.src,
  neodev: neodevLogo.src,
  flowboat: flowboatLogo.src,
  ignitionhacks: ignitionhacksLogo.src,
  cysc: "/cysc_logo.avif",
  jackorg: jackorgLogo.src,
  viggle: viggleLogo.src,
  plots: plotsLogo.src,
};

// data
const TIMELINE_DATA = [
  {
    year: "2026",
    role: "2026",
    company: "",
    items: [
      {
        title: "Member of Technical Staff at Viggle (a16z)",
        logo: "viggle",
        details: ["→ incoming summer 2026"],
      },
      {
        title: "Software Engineer at plots (a16z)",
        logo: "plots",
        details: ["→ shipping features for 400k+ users"],
      },
      {
        title: "Software Engineer at Keywa Newcomers",
        logo: "keywa",
        details: [
          "→ global gateway for international students.",
          "→ migrated from AWS ECS to Lightrail, 50% cost reduction.",
          "→ created an end to end dual authentication system.",
        ],
      },
    ],
  },
  {
    year: "2025",
    role: "2025",
    company: "",
    items: [
      {
        title: "Content/Growth",
        details: [
          "→ cracked virality. 10M+ views on Instagram and Tiktok in 3 months.",
          <>
            → previously, growth at{" "}
            <TimelineLink href="https://typeos.com/">TypeOS</TimelineLink> (YC
            X25) &{" "}
            <TimelineLink href="https://methods.app/">instinct©</TimelineLink>.
          </>,
        ],
      },
      {
        title: "Engineering at Rebels 2702 (FIRST Robotics)",
        logo: "2702",
        details: [
          "→ prototyped a 3D computer vision recognition pipeline.",
          "→ competed in regional/provincial tournaments.",
        ],
      },
      {
        title: "Co-founder at Neo Developer League",
        logo: "neodev",
        details: [
          "→ non-profit org, raised $12k for 'not just a hackathon'. ",
          <>
            → backed by{" "}
            <TimelineLink href="https://get.convictional.com/">
              Convictional
            </TimelineLink>{" "}
            (YC W19) and Waterloo regional school board (~ 65k students).
          </>,
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
        title: "Admin at Flowboat Entrepreneurship Club",
        logo: "flowboat",
        details: [
          "→ Ran Canada's largest startup incubator in 2025 with 100+ students",
          "→ Historically, 300+ alumni, $50k+ in capital, 40+ startups",
        ],
      },
      {
        title: "Organizer at IgnitionHacks 2024",
        logo: "ignitionhacks",
        details: "→ 400+ participants, 120+ submissions, $15k+ raised.",
      },
      {
        title: "Admin at Canadian Youth STEM Conference",
        logo: "cysc",
        details: [
          "→ nation-wide flagship youth tech summit hosted at UWaterloo.",
          "→ 300 attendees, $20k raised for catering, resources, and venue.",
          <>
            → opening keynote by{" "}
            <TimelineLink href="https://uwaterloo.ca/physics-astronomy/profile/strickla">
              Donna Strickland
            </TimelineLink>{" "}
            (Nobel Laureate).
          </>,
          <>
            → backed by{" "}
            <TimelineLink href="https://www.shad.ca/">SHAD Canada</TimelineLink>{" "}
            and TRuST Network.
          </>,
        ],
      },
      {
        title: "Coordinator at Jack.Org Kitchener",
        logo: "jackorg",
        details: [
          "→ advocacy and philanthropy for youth mental health.",
          "→ built a community of 300+ participants at local events, $2k+ raised.",
        ],
      },
    ],
  },
  {
    year: "2023",
    role: "2023",
    items: [
      {
        title: "WasteOverflow (RythmHacks)",
        isWinner: true,
        details:
          "→ IOT system using an HC-SR04 to track regional garbage levels.",
      },
      {
        title: "DaySync (ClockHacks)",
        isWinner: true,
        details:
          "→ smart lighting productivity platform synced with smart devices.",
      },
    ],
  },
];

interface TimelineSubItemProps {
  title: string;
  details: string | string[] | React.ReactNode | React.ReactNode[];
  logo?: string;
  isWinner?: boolean;
}

const TimelineSubItem = ({
  title,
  details,
  logo,
  isWinner,
}: TimelineSubItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const logoSrc = logo ? LOGO_MAP[logo] || logo : "";

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
        className="text-[12px] md:text-[13px] font-medium transition-colors duration-200 cursor-pointer px-2 md:px-3 py-1 rounded-md -mx-2 md:-mx-3"
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
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          width: "100%",
          textAlign: "left",
          margin: 0,
          paddingInlineStart: "0.75rem",
          paddingInlineEnd: "0.75rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
        }}
      >
        {logo && title.includes("Canadian") ? (
          <>
            <span>{title.split("Canadian")[0]}</span>
            <img
              src={logoSrc}
              alt=""
              className="w-4 h-4 object-cover shrink-0"
              style={{
                borderRadius: logo.toLowerCase().includes("cysc") ? "50%" : "0",
                marginRight: "-0.25rem",
              }}
            />
            <span>Canadian{title.split("Canadian")[1]}</span>
            {isWinner && (
              <span className="ml-auto shrink-0 trophy-icon-wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="trophyGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFA500" />
                      <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
                    fill="url(#trophyGradient)"
                  />
                </svg>
              </span>
            )}
          </>
        ) : logo && title.includes(" at ") ? (
          <>
            <span>{title.split(" at ")[0]} at </span>
            <img
              src={logoSrc}
              alt=""
              className="w-4 h-4 object-cover shrink-0"
              style={{
                borderRadius: logo.toLowerCase().includes("cysc") ? "50%" : "0",
                marginRight: "-0.25rem",
              }}
            />
            <span>{title.split(" at ")[1]}</span>
            {isWinner && (
              <span className="ml-auto shrink-0 trophy-icon-wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="trophyGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFA500" />
                      <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
                    fill="url(#trophyGradient)"
                  />
                </svg>
              </span>
            )}
          </>
        ) : logo && title.includes(" @ ") ? (
          <>
            <span>{title.split(" @ ")[0]} @ </span>
            <img
              src={logoSrc}
              alt=""
              className="w-4 h-4 object-cover shrink-0"
              style={{
                borderRadius: logo.toLowerCase().includes("cysc") ? "50%" : "0",
                marginRight: "-0.25rem",
              }}
            />
            <span>{title.split(" @ ")[1]}</span>
            {isWinner && (
              <span className="ml-auto shrink-0 trophy-icon-wrapper">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="trophyGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FFA500" />
                      <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
                    fill="url(#trophyGradient)"
                  />
                </svg>
              </span>
            )}
          </>
        ) : (
          <>
            {logo && (
              <img
                src={logoSrc}
                alt=""
                className="w-4 h-4 object-cover shrink-0"
                style={{
                  borderRadius: logo.toLowerCase().includes("cysc")
                    ? "50%"
                    : "0",
                }}
              />
            )}
            {isWinner && title.includes("(") && title.includes(")") ? (
              <>
                <span>{title.split("(")[0]}</span>
                <span>
                  ({title.split("(")[1].split(")")[0]}
                  <span className="inline-flex align-middle ml-1 trophy-icon-wrapper">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        filter: "drop-shadow(0 0 3px rgba(251, 191, 36, 0.6))",
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginTop: "-5px",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="trophyGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFD700" />
                          <stop offset="50%" stopColor="#FFA500" />
                          <stop offset="100%" stopColor="#FF8C00" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
                        fill="url(#trophyGradient)"
                      />
                    </svg>
                  </span>
                  )
                </span>
              </>
            ) : (
              <>
                <span>{title}</span>
                {isWinner && (
                  <span className="ml-auto shrink-0 trophy-icon-wrapper">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="trophyGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FFD700" />
                          <stop offset="50%" stopColor="#FFA500" />
                          <stop offset="100%" stopColor="#FF8C00" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
                        fill="url(#trophyGradient)"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </>
        )}
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
              className="text-[11px] md:text-[12px] font-light leading-relaxed mt-1"
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
      className={`relative flex items-start justify-between w-full mb-20 md:mb-32 last:mb-0 ${
        isEven ? "md:flex-row-reverse flex-row" : "flex-row"
      }`}
    >
      {/* Content Side */}
      <div
        className={`w-full md:w-[45%] pl-8 md:pl-0 ${
          isEven ? "md:text-left text-left" : "md:text-right text-left"
        }`}
        style={isEven ? { marginLeft: 0 } : {}}
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
            className="text-base md:text-lg font-medium lowercase tracking-tighter md:text-center text-left relative z-10"
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
              logo={(subItem as any).logo}
              isWinner={(subItem as any).isWinner}
            />
          ))}
        </div>
      </div>

      {/* Center Year Marker */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center pt-2">
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

      {/* Mobile Year Marker - Left Side */}
      <div
        className="md:hidden absolute top-0 flex flex-col items-center"
        style={{
          paddingTop: "0.5rem",
          left: 0,
          transform: "translateX(-50%)",
          zIndex: 20,
        }}
      >
        <div
          className="w-2 h-2 rounded-full transition-colors"
          style={{
            backgroundColor: "var(--timeline-node-bg)",
          }}
        />
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default function Timeline() {
  const [showMore, setShowMore] = useState(false);

  // split data into recent (2025-2026) and older (2023-2024)
  const recentItems = TIMELINE_DATA.slice(0, 2); // 2026, 2025
  const olderItems = TIMELINE_DATA.slice(2); // 2024, 2023

  return (
    <section className="relative mb-24 md:mb-32">
      {/* Vertical Line - Desktop Center */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--timeline-line)", opacity: 0.5 }}
      />
      {/* Vertical Line - Mobile Left */}
      <div
        className="md:hidden absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--timeline-line)", opacity: 0.5 }}
      />

      <div className="space-y-12 md:space-y-20">
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
              className="overflow-visible md:overflow-hidden"
            >
              <div className="space-y-12 md:space-y-20 pt-12 md:pt-20">
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
