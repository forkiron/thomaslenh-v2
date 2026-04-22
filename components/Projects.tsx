"use client";

import React from "react";
import { Github, ExternalLink, Newspaper } from "lucide-react";
import vitImage from "@/app/assets/vit.jpeg";
import vitZoomImage from "@/app/assets/vitzoom.png";
import anternoImage from "@/app/assets/anternomain.png";
import anternoZoomImage from "@/app/assets/anternoshow.png";
import pindexImage from "@/app/assets/pindex.png";
import pindexZoomImage from "@/app/assets/pindexzoom.png";
import donairImage from "@/app/assets/donairshow.png";
import donairZoomImage from "@/app/assets/donairend.jpeg";

const PROJECTS_DATA = [
  {
    name: "vit",
    description: "git for video editing, 700+ stars, 2 million views.",
    image: vitImage.src,
    zoomImage: vitZoomImage.src,
    github: "https://github.com/LucasHJin/vit",
    demo: "https://vit-editor.vercel.app/",
    href: "https://vit-editor.vercel.app/",
  },
  {
    name: "anterno",
    descriptionParts: [
      { text: "cursor for intern onboarding, national finalist @ " },
      {
        text: "Spark",
        href: "https://ingeniousplus.ca/spark-investments/",
      },
      { br: true },
      { text: "won $30k & backed by " },
      { text: "DMZ Ventures", href: "https://dmzventures.com" },
      { text: " & " },
      { text: "RHF", href: "https://rhf-frh.ca/" },
    ],
    image: anternoImage.src,
    zoomImage: anternoZoomImage.src,
    article: "https://ingeniousplus.ca/spark-investments/",
    demo: "https://anterno.com",
    href: "https://ingeniousplus.ca/spark-investments/",
  },
  {
    name: "Pindex",
    description:
      "agentic index funds that automatically diversify risk across related prediction markets.",
    descriptionSuffix: {
      text: "won @ nexhacks",
      href: "https://www.nexhacks.com/",
    },
    image: pindexImage.src,
    zoomImage: pindexZoomImage.src,
    github: "https://github.com/danielp1218/Pindex",
    demo: "https://pindex.tech",
    href: "https://pindex.tech",
  },
  {
    name: "donair",
    descriptionParts: [
      { text: "instant agentic crowdfunding. won twice @ " },
      { text: "conuhacks", href: "https://conuhacks.io/" },
      { br: true },
      { text: "licensed to " },
      { text: "maison du pere", href: "https://www.maisondupere.org/" },
      { text: ", acquired by " },
      { text: "talsom", href: "https://talsom.com/" },
    ],
    image: donairImage.src,
    zoomImage: donairZoomImage.src,
    article: "https://www.talsom.com/insights/talsom-et-la-maison-du-pere-du-design-thinking-a-laction-contre-litinerance/",
    demo: "https://donair.tech",
    href: "https://www.talsom.com/insights/talsom-et-la-maison-du-pere-du-design-thinking-a-laction-contre-litinerance/",
  },
];

export default function Projects() {
  return (
    <div className="mt-16 mb-0">
      <h3
        className="text-[15px] md:text-[17px] font-medium lowercase tracking-tight mb-5"
        style={{ color: "var(--text-muted)" }}
      >
        projects:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 max-w-2xl">
        {PROJECTS_DATA.map((project) => (
          <a
            key={project.name}
            href={project.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`group no-underline block ${project.href ? "cursor-pointer" : ""}`}
          >
            {/* Image with hover zoom */}
            <div
              className="w-full aspect-[16/10] rounded-none overflow-hidden mb-3 relative"
              style={{ backgroundColor: "#e4e4e7" }}
            >
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-out group-hover:opacity-0"
                  />
                  {project.zoomImage && (
                    <img
                      src={project.zoomImage}
                      alt={project.name}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
                    />
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="text-[11px] font-mono lowercase"
                    style={{ color: "#a1a1aa" }}
                  >
                    coming soon
                  </span>
                </div>
              )}
            </div>

            {/* Title + links on the right */}
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-[14px] md:text-[15px] font-semibold lowercase tracking-tight"
                style={{ color: "#1a1a1a" }}
              >
                {project.name}
              </span>
              <div className="flex items-center gap-2">
                {project.article && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.article, "_blank");
                    }}
                    className="flex items-center transition-opacity hover:opacity-60 cursor-pointer"
                    style={{ color: "#71717a" }}
                  >
                    <Newspaper size={14} />
                  </span>
                )}
                {project.github && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                    className="flex items-center transition-opacity hover:opacity-60 cursor-pointer"
                    style={{ color: "#71717a" }}
                  >
                    <Github size={14} />
                  </span>
                )}
                {project.demo && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.demo, "_blank");
                    }}
                    className="flex items-center transition-opacity hover:opacity-60 cursor-pointer"
                    style={{ color: "#71717a" }}
                  >
                    <ExternalLink size={14} />
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[11px] md:text-[12px] lowercase tracking-tight leading-relaxed m-0"
              style={{ color: "#71717a" }}
            >
              {project.descriptionParts
                ? project.descriptionParts.map((part, i) =>
                    part.br ? (
                      <br key={i} />
                    ) : part.href ? (
                      <span
                        key={i}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(part.href, "_blank");
                        }}
                        className="sweep-underline cursor-pointer"
                      >
                        {part.text}
                      </span>
                    ) : (
                      <span key={i}>{part.text}</span>
                    ),
                  )
                : project.description}
              {project.descriptionSuffix && (
                <>
                  {" "}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.descriptionSuffix!.href, "_blank");
                    }}
                    className="sweep-underline cursor-pointer"
                  >
                    {project.descriptionSuffix.text}
                  </span>
                </>
              )}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
