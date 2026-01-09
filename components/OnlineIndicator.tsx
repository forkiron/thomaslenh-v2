"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OnlineIndicator() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if animation has already played in this session
    const animated = sessionStorage.getItem("onlineIndicatorAnimated");
    if (animated === "true") {
      setHasAnimated(true);
    } else {
      // Mark as animated after animation completes
      setTimeout(() => {
        sessionStorage.setItem("onlineIndicatorAnimated", "true");
        setHasAnimated(true);
      }, 2000);
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative"
        initial={hasAnimated ? false : { opacity: 0, scale: 0.3 }}
        animate={
          hasAnimated
            ? {}
            : {
                opacity: [0, 1, 0, 1, 0, 1, 0, 1, 1],
                scale: [0.3, 1.3, 0.5, 1.2, 0.7, 1.1, 0.9, 1, 1],
              }
        }
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
      <motion.span
        style={{ color: "var(--text-muted)" }}
        initial={hasAnimated ? false : { opacity: 0 }}
        animate={hasAnimated ? {} : { opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.8,
        }}
      >
        seeking summer 2026 internships
      </motion.span>
    </div>
  );
}
