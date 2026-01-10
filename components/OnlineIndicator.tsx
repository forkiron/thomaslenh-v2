"use client";

import { motion } from "framer-motion";

export default function OnlineIndicator() {
  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      window.location.hash = "#contact";
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1, 0, 1, 1],
          scale: [0.3, 1.3, 0.5, 1.2, 0.7, 1.1, 0.9, 1, 1],
        }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1],
          ease: "easeOut",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#22c55e" }}
        />
        <div
          className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: "#22c55e", opacity: 0.75 }}
        />
      </motion.div>
      <motion.button
        onClick={handleScrollToContact}
        className="cursor-pointer transition-colors duration-200 bg-transparent border-none p-0"
        style={{ color: "var(--text-muted)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        seeking summer 2026 internships
      </motion.button>
    </div>
  );
}
