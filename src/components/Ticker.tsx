"use client";

const ITEMS = [
  "REPOS: 15",
  "GISTS: 68",
  "LANGUAGES: JS · TS · PY · SWIFT · LIQUID",
  "STATUS: BUILDING",
  "LOCATION: CHILE",
  "OPEN TO: INTERESTING PROBLEMS",
  "STACK: NEXT.JS · WIX · NODE · PYTHON",
  "ACTIVE SINCE: 2013",
];

const SEP = " /// ";

export function Ticker() {
  const content = ITEMS.join(SEP) + SEP;

  return (
    <div
      className="overflow-hidden border-b"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        height: "28px",
      }}
    >
      <div className="ticker-track h-full flex items-center">
        {/* duplicated for seamless loop */}
        {[content, content].map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              color: "var(--neon-green)",
              whiteSpace: "nowrap",
              padding: "0 0.5rem",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
