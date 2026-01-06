"use client";

export default function OnlineIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#22c55e" }}
        />
        <div
          className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: "#22c55e", opacity: 0.75 }}
        />
      </div>
      <span style={{ color: "var(--text-muted)" }}>available for work</span>
    </div>
  );
}

