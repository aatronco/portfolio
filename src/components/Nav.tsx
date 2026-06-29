"use client";

export function Nav() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-3 border-b"
      style={{ borderColor: "var(--border)", background: "rgba(7,7,17,0.95)", backdropFilter: "blur(8px)" }}
    >
      <a
        href="/"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontWeight: 900,
          fontSize: "0.9rem",
          color: "var(--neon-green)",
          letterSpacing: "0.2em",
          textDecoration: "none",
        }}
        className="glow-green"
      >
        AATRONCO
      </a>

      <div className="flex items-center gap-6">
        {["PROJECTS", "ABOUT", "CONTACT"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-green)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
