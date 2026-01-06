"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

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
  return (
    <section
      id="contact"
      className="pt-20"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p
            className="text-sm lowercase"
            style={{ color: "var(--text-muted)" }}
          >
            reach out if you're a founder or a fellow builder!
          </p>
          <div className="flex gap-5 mt-6">
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
        </div>
        <div
          className="text-[10px] font-mono uppercase"
          style={{ color: "var(--text-subtle)" }}
        >
          © 2026 all rights reserved
        </div>
      </div>
    </section>
  );
}
