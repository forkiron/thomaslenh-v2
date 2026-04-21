"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/forkiron",
    icon: Github,
    external: true,
  },
  {
    label: "Twitter",
    href: "https://x.com/forkyron",
    icon: Twitter,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-lenh",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:thomaslenh@gmail.com",
    icon: Mail,
    external: false,
  },
] as const;

const linkClass =
  "flex items-center justify-center text-[var(--text-subtle)] transition-[color,filter] duration-200 ease-out hover:text-[var(--text-primary)] hover:[filter:drop-shadow(0_0_10px_color-mix(in_oklab,var(--text-primary)_35%,transparent))]";

export default function NavSocial() {
  return (
    <div className="flex items-center gap-3 md:gap-4 flex-wrap">
      {LINKS.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={linkClass}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
