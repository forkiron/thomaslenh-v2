"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import thomasImage from "@/app/assets/thomas2.jpg";

const CHARS = "ABCDEFGHIKLMNOPQRSTVXYZ0123456789!@#$%^&*()_+";

const DigitalText = ({ text, active }: { text: string; active: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const iterationRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (active) {
      iterationRef.current = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iterationRef.current) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iterationRef.current >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        iterationRef.current += 1 / 3;
      }, 30);
    } else {
      setDisplayText(text);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, text]);

  return <span>{displayText}</span>;
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const copyMessages = [
    "i said its copied",
    "pls stop clicking its copied",
    "COPIED.",
  ];

  const resetToEmail = () => {
    setCopied(false);
    setClickCount(-1);
    resetTimeoutRef.current = null;
  };

  const scheduleReset = () => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = setTimeout(resetToEmail, 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 1000);
          }
        });
      },
      { threshold: [0, 0.3], rootMargin: "-100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const glitchInterval = setInterval(() => {
      if (isInView) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 2000);

    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setTimeout(() => {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 1000);
        }, 100);
      }
    };

    if (window.location.hash === "#contact") {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener("hashchange", handleHashChange);
      clearInterval(glitchInterval);
    };
  }, [isInView]);

  const handleCopyEmail = async () => {
    if (!copied) {
      try {
        await navigator.clipboard.writeText("thomaslenh@gmail.com");
        setCopied(true);
        setClickCount(-1);
        scheduleReset();
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    } else {
      setClickCount((prev) =>
        prev === -1 ? 0 : (prev + 1) % copyMessages.length
      );
      scheduleReset();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="pt-12 md:pt-16"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div className="w-full md:w-auto md:self-end">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-xs font-mono cursor-pointer text-left text-[var(--text-subtle)] transition-[color,filter] duration-200 ease-out hover:text-[var(--text-primary)] hover:[filter:drop-shadow(0_0_10px_color-mix(in_oklab,var(--text-primary)_35%,transparent))]"
          >
            {copied ? (
              <>
                <Check size={18} className="shrink-0" />
                <span className="whitespace-nowrap">
                  {clickCount === -1 ? (
                    <DigitalText text="copied" active={isAnimating} />
                  ) : (
                    <DigitalText
                      text={copyMessages[clickCount]}
                      active={isAnimating}
                    />
                  )}
                </span>
              </>
            ) : (
              <span className="break-all md:break-normal">
                <DigitalText
                  text="thomaslenh@gmail.com"
                  active={isAnimating}
                />
              </span>
            )}
          </button>
        </div>
        <div className="flex flex-col items-end">
          <div
            className="relative"
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => setIsPhotoHovered(false)}
          >
            <AnimatePresence>
              {isPhotoHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: -20 }}
                  exit={{ opacity: 0, scale: 0.5, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-mono pointer-events-none whitespace-nowrap z-20"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div className="relative">
                    <span className="relative z-10">whattheforky???</span>
                    <div
                      className="absolute inset-0 blur-xs opacity-50"
                      style={{ color: "var(--text-primary)" }}
                    >
                      hi
                    </div>
                  </div>
                  {/* Hologram base line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="absolute -bottom-1 left-0 h-px"
                    style={{ backgroundColor: "var(--border-color)" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="relative w-16 h-16 overflow-hidden">
              <motion.img
                src={thomasImage.src}
                alt="Thomas"
                className="w-16 h-16 object-cover cursor-help"
                animate={
                  isGlitching
                    ? {
                        x: [0, -2, 2, 0],
                        filter: [
                          isPhotoHovered
                            ? "brightness(1.2) contrast(1.1)"
                            : "brightness(1)",
                          "brightness(1.5) contrast(1.2) saturate(1.2)",
                          "brightness(0.8) contrast(1.5)",
                          isPhotoHovered
                            ? "brightness(1.2) contrast(1.1)"
                            : "brightness(1)",
                        ],
                      }
                    : {
                        x: 0,
                        filter: isPhotoHovered
                          ? "brightness(1.2) contrast(1.1)"
                          : "brightness(1)",
                      }
                }
                transition={{ duration: 0.15 }}
              />
              {isGlitching && (
                <>
                  <motion.div
                    className="absolute inset-0 z-10 opacity-40 pointer-events-none"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: [-4, 4, -2, 0],
                      opacity: [0, 0.6, 0.3, 0],
                    }}
                    transition={{ duration: 0.15 }}
                    style={{
                      backgroundImage: `url(${thomasImage.src})`,
                      backgroundSize: "cover",
                      clipPath: "inset(20% 0 60% 0)",
                      filter: "hue-rotate(90deg) brightness(1.2)",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 z-10 opacity-40 pointer-events-none"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: [4, -4, 2, 0],
                      opacity: [0, 0.6, 0.3, 0],
                    }}
                    transition={{ duration: 0.15 }}
                    style={{
                      backgroundImage: `url(${thomasImage.src})`,
                      backgroundSize: "cover",
                      clipPath: "inset(70% 0 10% 0)",
                      filter: "hue-rotate(-90deg) brightness(1.2)",
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
