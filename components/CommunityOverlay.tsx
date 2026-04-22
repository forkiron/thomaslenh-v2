"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
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

type Part = { text: string; href?: string };
const L = (text: string, href: string): Part => ({ text, href });
const T = (text: string): Part => ({ text });

const COMMUNITY_DATA = [
  {
    title: "Content/Growth",
    logo: "content",
    details: [
      [
        T(
          "→ cracked virality. 10M+ views on Instagram and Tiktok in 3 months.",
        ),
      ],
      [
        T("→ previously, growth at "),
        L("TypeOS", "https://typeos.com/"),
        T(" (YC X25) & "),
        L("instinct©", "https://methods.app/"),
        T("."),
      ],
    ],
  },
  {
    title: "Engineering, Rebels 2702",
    logo: "2702",
    details: [
      [T("→ prototyped a 3D computer vision recognition pipeline.")],
      [T("→ competed in regional/provincial tournaments.")],
    ],
  },
  {
    title: "Co-founder, Neo Developer League",
    logo: "neodev",
    details: [
      [T("→ non-profit org, raised $12k for 'not just a hackathon'.")],
      [
        T("→ backed by "),
        L("Convictional", "https://get.convictional.com/"),
        T(" (YC W19) and "),
        L("Waterloo regional school board", "https://www.wrdsb.ca/"),
        T(" (~ 65k students)."),
      ],
    ],
  },
  {
    title: "Admin, Flowboat Entrepreneurship Club",
    logo: "flowboat",
    details: [
      [
        T(
          "→ ran Canada's largest startup incubator in 2025 with 100+ students.",
        ),
      ],
      [T("→ historically, 300+ alumni, $50k+ in capital, 40+ startups.")],
    ],
  },
  {
    title: "Organizer, IgnitionHacks 2024",
    logo: "ignitionhacks",
    details: [[T("→ 400+ participants, 120+ submissions, $15k+ raised.")]],
  },
  {
    title: "Admin, Canadian Youth STEM Conference",
    logo: "cysc",
    details: [
      [
        T("→ nation-wide flagship youth tech summit hosted at "),
        L("UWaterloo", "https://uwaterloo.ca/"),
        T("."),
      ],
      [T("→ 300 attendees, $20k raised for catering, resources, and venue.")],
      [
        T("→ opening keynote by "),
        L(
          "Donna Strickland",
          "https://uwaterloo.ca/physics-astronomy/profile/strickla",
        ),
        T(" (Nobel Laureate)."),
      ],
      [
        T("→ backed by "),
        L("SHAD Canada", "https://www.shad.ca/"),
        T(", "),
        L("TRuST Network", "https://trustnetwork.ca/"),
        T(", and "),
        L("UWaterloo", "https://uwaterloo.ca/"),
        T("."),
      ],
    ],
  },
  {
    title: "Coordinator, Jack.Org Kitchener",
    logo: "jackorg",
    details: [
      [T("→ advocacy and philanthropy for youth mental health.")],
      [
        T(
          "→ built a community of 300+ participants at local events, $2k+ raised.",
        ),
      ],
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
        <div className="w-8 h-8 shrink-0 flex items-center justify-center">
          {logoSrc ? (
            <img src={logoSrc} alt="" className="w-7 h-7 object-cover" />
          ) : (
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--text-subtle)" }}
            />
          )}
        </div>

        <span
          className="flex-1 text-[13px] md:text-[14px] font-medium lowercase tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {item.title}
        </span>

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
              {item.details.map((line, i) => (
                <div
                  key={i}
                  className="text-[11px] md:text-[12px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {line.map((part, j) =>
                    part.href ? (
                      <a
                        key={j}
                        href={part.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sweep-underline"
                      >
                        {part.text}
                      </a>
                    ) : (
                      <span key={j}>{part.text}</span>
                    ),
                  )}
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
          <div className="w-full max-w-2xl px-6 py-16 md:py-24">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 mb-10 text-[12px] md:text-[13px] font-mono lowercase tracking-tight transition-opacity hover:opacity-60 cursor-pointer"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={14} />
              back
            </button>
            <p
              className="text-[12px] md:text-[13px] lowercase mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              things i've organized and been a part of:
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
