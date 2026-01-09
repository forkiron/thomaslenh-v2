"use client";

import React, { useState, useRef } from "react";
import { Github, Twitter, Linkedin, Mail, Check } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/forkiron", icon: Github },
  { label: "Twitter", href: "https://x.com/forkyron", icon: Twitter },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-lenh",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:thomaslenh@gmail.com", icon: Mail },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    // clear existing timeout if any
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    // set new timeout for 5 seconds
    resetTimeoutRef.current = setTimeout(resetToEmail, 5000);
  };

  const handleCopyEmail = async () => {
    if (!copied) {
      try {
        await navigator.clipboard.writeText("thomaslenh@gmail.com");
        setCopied(true);
        setClickCount(-1); // -1 means show "copied", 0+ means show messages
        scheduleReset();
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    } else {
      // if already copied, cycle through messages only (0->1->2->0)
      setClickCount((prev) => {
        if (prev === -1) return 0; // First click after "copied", go to first message
        return (prev + 1) % copyMessages.length; // Cycle through messages
      });
      // reset the timer on each click
      scheduleReset();
    }
  };

  return (
    <section
      id="contact"
      className="pt-12 md:pt-16"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <div className="w-full md:w-auto">
          <p
            className="text-sm lowercase"
            style={{ color: "var(--text-muted)" }}
          >
            reach out builders!
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-5 mt-4 md:mt-6">
            <div className="flex flex-wrap gap-4 md:gap-5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:scale-105"
                  style={{ color: "var(--text-subtle)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-subtle)";
                  }}
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:scale-105 cursor-pointer md:w-auto"
              style={{ color: "var(--text-subtle)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-subtle)";
              }}
            >
              {copied ? (
                <>
                  <Check size={14} className="shrink-0" />
                  <span className="whitespace-nowrap">
                    {clickCount === -1 ? "copied" : copyMessages[clickCount]}
                  </span>
                </>
              ) : (
                <span className="break-all md:break-normal">
                  thomaslenh@gmail.com
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <img
            src="/assets/thomas2.jpg"
            alt="Thomas"
            className="w-16 h-16 object-cover "
          />
        </div>
      </div>
    </section>
  );
}
