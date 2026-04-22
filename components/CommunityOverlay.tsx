"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import logo2702 from "@/app/assets/2702_logo.png";
import neodevLogo from "@/app/assets/neodev_logo.png";
import flowboatLogo from "@/app/assets/flowboat_logo.png";
import ignitionhacksLogo from "@/app/assets/ignitionhacks_logo.jpeg";
import jackorgLogo from "@/app/assets/jackorg_logo.png";
import cyscLogo from "@/app/assets/cysc_logo.png";
import thomas2 from "@/app/assets/thomas2.jpg";

const LOGO_MAP: Record<string, string> = {
  "2702": logo2702.src,
  neodev: neodevLogo.src,
  flowboat: flowboatLogo.src,
  ignitionhacks: ignitionhacksLogo.src,
  jackorg: jackorgLogo.src,
  cysc: cyscLogo.src,
  content: thomas2.src,
};

const COMMUNITY_DATA = [
  {
    title: "Content/Growth",
    logo: "content",
    details: [
      "→ cracked virality. 10M+ views on Instagram and Tiktok in 3 months.",
      "→ previously, growth at TypeOS (YC X25) & instinct©.",
    ],
  },
  {
    title: "Engineering, Rebels 2702",
    logo: "2702",
    details: [
      "→ prototyped a 3D computer vision recognition pipeline.",
      "→ competed in regional/provincial tournaments.",
    ],
  },
  {
    title: "Co-founder, Neo Developer League",
    logo: "neodev",
    details: [
      "→ non-profit org, raised $12k for 'not just a hackathon'.",
      "→ backed by Convictional (YC W19) and Waterloo regional school board (~ 65k students).",
    ],
  },
  {
    title: "Admin, Flowboat Entrepreneurship Club",
    logo: "flowboat",
    details: [
      "→ ran Canada's largest startup incubator in 2025 with 100+ students.",
      "→ historically, 300+ alumni, $50k+ in capital, 40+ startups.",
    ],
  },
  {
    title: "Organizer, IgnitionHacks 2024",
    logo: "ignitionhacks",
    details: ["→ 400+ participants, 120+ submissions, $15k+ raised."],
  },
  {
    title: "Admin, Canadian Youth STEM Conference",
    logo: "cysc",
    details: [
      "→ nation-wide flagship youth tech summit hosted at UWaterloo.",
      "→ 300 attendees, $20k raised for catering, resources, and venue.",
      "→ opening keynote by Donna Strickland (Nobel Laureate).",
      "→ backed by SHAD Canada, TRuST Network, and UWaterloo.",
    ],
  },
  {
    title: "Coordinator, Jack.Org Kitchener",
    logo: "jackorg",
    details: [
      "→ advocacy and philanthropy for youth mental health.",
      "→ built a community of 300+ participants at local events, $2k+ raised.",
    ],
  },
];

function CommunityRow({ item }: { item: (typeof COMMUNITY_DATA)[number] }) {
  const [open, setOpen] = useState(false);
  const logoSrc = item.logo ? LOGO_MAP[item.logo] : null;

  return (
    <div className="border-b" style={{ borderColor: "var(--border-color)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-4 px-1 text-left cursor-pointer group"
      >
        {/* Logo */}
        <div className="w-8 h-8 shrink-0 flex items-center justify-center">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt=""
              className="w-7 h-7 object-cover"
              style={{}}
            />
          ) : (
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--text-subtle)" }}
            />
          )}
        </div>

        {/* Title */}
        <span
          className="flex-1 text-[13px] md:text-[14px] font-medium lowercase tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {item.title}
        </span>

        {/* Chevron */}
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-300"
          style={{
            color: "var(--text-subtle)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pl-12 pb-4 pr-4">
              {item.details.map((detail, i) => (
                <div
                  key={i}
                  className="text-[11px] md:text-[12px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {detail}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CommunityOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto scrollbar-hide"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 p-2 rounded-full transition-opacity hover:opacity-60 cursor-pointer"
            style={{ color: "var(--text-muted)" }}
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-2xl px-6 py-16 md:py-24">
            <h2
              className="text-xl md:text-2xl font-medium lowercase tracking-tight mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              building communities
            </h2>
            <p
              className="text-[12px] md:text-[13px] lowercase mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              things i've organized, co-founded, and been a part of.
            </p>

            <div>
              {COMMUNITY_DATA.map((item, i) => (
                <CommunityRow key={i} item={item} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
