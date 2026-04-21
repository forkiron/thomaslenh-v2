"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="text-[13px] font-mono lowercase tracking-tighter transition-colors"
        style={{ color: "var(--text-muted)" }}
        aria-label="Toggle theme"
        disabled
      >
        ☾
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-[13px] font-mono lowercase tracking-tighter transition-colors cursor-pointer hover:opacity-80"
      style={{ color: "var(--text-muted)" }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
