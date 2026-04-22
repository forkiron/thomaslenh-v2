"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import NavSocial from "@/components/NavSocial";
import uwaterlooImage from "@/app/assets/uwaterloo.webp";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import CommunityOverlay from "@/components/CommunityOverlay";

const Nav = () => (
  <nav
    className="flex justify-between items-center py-6 md:py-8 px-4 md:px-6 max-w-3xl mx-auto text-[12px] md:text-[13px] font-mono lowercase tracking-tighter"
    style={{ color: "var(--text-muted)" }}
  >
    <div className="flex items-center gap-3 md:gap-4 flex-wrap">
      <NavSocial />
    </div>
  </nav>
);

export default function Home() {
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-secondary)",
      }}
    >
      <Nav />

      <main className="max-w-3xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-12 md:pb-20">
        {/* hero / about me */}
        <motion.header
          id="about"
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-2xl md:text-3xl font-medium lowercase tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            thomas lenh
          </h1>
          <div
            className="max-w-md leading-relaxed lowercase"
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.75rem, 2.5vw, 1rem)",
            }}
          >
            <div className="mb-1">engineer based in waterloo and toronto.</div>
            <div
              className="ml-4 flex items-center gap-1.5"
              style={{ whiteSpace: "nowrap" }}
            >
              ↳ currently studying math at{" "}
              <a
                href="https://uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 transition-all duration-200 group"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <img
                  src={uwaterlooImage.src}
                  alt="UW"
                  className="w-3.5 h-3.5 object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                />
                <span>university of waterloo.</span>
              </a>
            </div>
            <div
              className="ml-4 flex items-center gap-1.5 mt-0.5"
              style={{ whiteSpace: "nowrap" }}
            >
              ↳ i like{" "}
              <span
                onClick={() => setCommunityOpen(true)}
                className="sweep-underline cursor-pointer"
              >
                building communities
              </span>{" "}
              and cool things.
            </div>
          </div>

          <WorkExperience />

          <Projects />
        </motion.header>

        {/* contact / footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>

      <CommunityOverlay
        open={communityOpen}
        onClose={() => setCommunityOpen(false)}
      />
    </div>
  );
}
