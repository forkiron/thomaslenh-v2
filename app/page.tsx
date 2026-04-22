"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import NavSocial from "@/components/NavSocial";
import uwaterlooImage from "@/app/assets/uwaterloo.webp";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import CommunityOverlay from "@/components/CommunityOverlay";

function createBurstParticle(x: number, y: number, color: string) {
  const el = document.createElement("div");
  const size = 3 + Math.floor(Math.random() * 4);
  el.style.cssText = `
    position:fixed;left:${x}px;top:${y}px;width:${size}px;height:${size}px;
    background:${color};pointer-events:none;z-index:9999;
    image-rendering:pixelated;box-shadow:0 0 ${size + 2}px ${color};
  `;
  document.body.appendChild(el);

  const angle = Math.random() * Math.PI * 2;
  const speed = 80 + Math.random() * 160;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  const gravity = 180;
  let t = 0;
  const dur = 1.2 + Math.random() * 0.8;

  function tick() {
    t += 0.016;
    if (t > dur) { el.remove(); return; }
    el.style.left = (x + vx * t) + "px";
    el.style.top = (y + vy * t + 0.5 * gravity * t * t) + "px";
    el.style.opacity = String(Math.max(0, 1 - t / dur));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function fireworkBurst(cx: number, cy: number) {
  const allColors = [
    "#ff2d2d", "#ff6b6b", "#ffd700", "#ffec00", "#4d96ff",
    "#77b5fe", "#cc5de8", "#da77f2", "#6bcb77", "#8ce99a",
    "#ff922b", "#ffa94d", "#ff4da6", "#00e5ff", "#fff44f",
  ];
  for (let i = 0; i < 20; i++) {
    createBurstParticle(cx, cy, allColors[Math.floor(Math.random() * allColors.length)]);
  }
}

function launchRocket(startX: number, targetY: number) {
  const el = document.createElement("div");
  el.style.cssText = `
    position:fixed;left:${startX}px;top:${window.innerHeight}px;
    width:3px;height:10px;background:#ffd93d;pointer-events:none;z-index:9999;
    box-shadow:0 0 8px #ffd93d, 0 4px 12px #ff922b;
    image-rendering:pixelated;
  `;
  document.body.appendChild(el);

  // trail particles
  const trailInterval = setInterval(() => {
    const rect = el.getBoundingClientRect();
    const tp = document.createElement("div");
    tp.style.cssText = `
      position:fixed;left:${rect.left + Math.random() * 3 - 1}px;top:${rect.top + 6}px;
      width:2px;height:2px;background:#ffa94d;pointer-events:none;z-index:9998;
      image-rendering:pixelated;
    `;
    document.body.appendChild(tp);
    let tt = 0;
    function fade() {
      tt += 0.016;
      if (tt > 0.4) { tp.remove(); return; }
      tp.style.opacity = String(1 - tt / 0.4);
      tp.style.top = (parseFloat(tp.style.top) + 1) + "px";
      requestAnimationFrame(fade);
    }
    requestAnimationFrame(fade);
  }, 20);

  const startY = window.innerHeight;
  const duration = 500 + Math.random() * 300;
  const start = performance.now();
  const wobble = Math.random() * 3;

  function tick(now: number) {
    const t = (now - start) / duration;
    if (t >= 1) {
      el.remove();
      clearInterval(trailInterval);
      fireworkBurst(startX, targetY);
      return;
    }
    const ease = 1 - (1 - t) * (1 - t);
    const y = startY - (startY - targetY) * ease;
    el.style.top = y + "px";
    el.style.left = (startX + Math.sin(t * 12) * wobble) + "px";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

let flameInterval: ReturnType<typeof setInterval> | null = null;

let flameEl: HTMLDivElement | null = null;

function launchFlames(target: HTMLElement) {
  stopFlames();
  const rect = target.getBoundingClientRect();
  const el = document.createElement("div");
  el.innerHTML = `<img src="https://media.tenor.com/sRL5jAfDjMcAAAAj/flame-lit.gif" alt="" style="width:30px;height:30px;image-rendering:pixelated;" />`;
  el.style.cssText = `
    position:fixed;
    left:${rect.left + rect.width / 2}px;
    top:${rect.bottom}px;
    transform:translateX(-50%);
    pointer-events:none;z-index:9999;
  `;
  document.body.appendChild(el);
  flameEl = el;
}

function stopFlames() {
  if (flameEl) { flameEl.remove(); flameEl = null; }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", stopFlames, { passive: true });
}

export default function Home() {
  const [communityOpen, setCommunityOpen] = useState(false);
  const fwTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const launchFireworks = useCallback(() => {
    if (fwTimeout.current) return;
    fwTimeout.current = setTimeout(() => { fwTimeout.current = null; }, 3000);

    const w = window.innerWidth;
    const h = window.innerHeight;

    // left side first
    launchRocket(50 + Math.random() * 60, 80 + Math.random() * (h * 0.2));

    // right side after
    setTimeout(() => {
      launchRocket(w - 50 - Math.random() * 60, 80 + Math.random() * (h * 0.2));
    }, 400);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-secondary)",
      }}
    >
      <main className="max-w-3xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* hero / about me */}
        <motion.header
          id="about"
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h1
              className="text-2xl md:text-3xl font-medium lowercase tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              thomas lenh
            </h1>
            <NavSocial />
          </div>
          <div
            className="max-w-md leading-relaxed lowercase"
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.75rem, 2.5vw, 1rem)",
            }}
          >
            <div className="mb-1">engineer based in waterloo and toronto.</div>
            <div className="ml-4" style={{ whiteSpace: "nowrap" }}>
              ↳ currently studying math at{" "}
              <a
                href="https://uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 align-middle transition-all duration-200 group"
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
            <div className="ml-4 mt-0.5" style={{ whiteSpace: "nowrap" }}>
              ↳ i like{" "}
              <span
                onClick={() => setCommunityOpen(true)}
                // onMouseEnter={() => launchFireworks()}
                className="sparkle-link cursor-pointer"
              >building communities</span>{" "}and{" "}
              <span
                onClick={() => {
                  stopFlames();
                  const el = document.getElementById("projects-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    // trigger all project hover transitions on desktop
                    if (window.innerWidth >= 640) {
                      setTimeout(() => {
                        const cards = el.querySelectorAll(".group");
                        cards.forEach((card) => card.classList.add("force-hover"));
                        setTimeout(() => {
                          cards.forEach((card) => card.classList.remove("force-hover"));
                        }, 1200);
                      }, 500);
                    }
                  }
                }}
                // onMouseEnter={(e) => launchFlames(e.currentTarget)}
                // onMouseLeave={() => stopFlames()}
                className="sparkle-link cursor-pointer"
              >cool things</span>.
            </div>
          </div>

          <WorkExperience />

          <div id="projects-section">
            <Projects />
          </div>
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
