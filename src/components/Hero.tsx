"use client";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> INITIALIZING PORTFOLIO v2.0...",
  "> LOADING MODULES: ████████████ OK",
  "> MOUNTING PROJECTS DATABASE... OK",
  "> SCANNING GITHUB ACTIVITY... OK",
  "> READY.",
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setShowMain(true), 400);
      }
    }, 340);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Boot sequence */}
      <div
        className="mb-10"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.75rem",
          color: "var(--muted)",
          lineHeight: "2",
        }}
      >
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={i === visibleLines - 1 && !showMain ? { color: "var(--neon-green)" } : {}}>
            {line}
          </div>
        ))}
      </div>

      {/* Main heading */}
      <div
        style={{
          opacity: showMain ? 1 : 0,
          transform: showMain ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s, transform 0.5s",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.75rem",
            color: "var(--neon-pink)",
            letterSpacing: "0.3em",
            marginBottom: "0.75rem",
          }}
        >
          DEVELOPER / BUILDER
        </p>

        <h1
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 1,
            color: "var(--text)",
            marginBottom: "0.15rem",
          }}
        >
          <span className="glitch-wrap" data-text="ALEJANDRO">
            ALEJANDRO
          </span>
        </h1>

        <h1
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 1,
            color: "var(--neon-green)",
            marginBottom: "2rem",
          }}
          className="glow-green"
        >
          TRONCOSO
        </h1>

        <p
          className="cursor"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.9rem",
            color: "var(--muted)",
            marginBottom: "3rem",
            maxWidth: "480px",
            lineHeight: "1.7",
          }}
        >
          Building things that work. E-commerce integrations, clinical tools,
          AI experiments — whatever the problem needs
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-neon">
            EXPLORE PROJECTS &nbsp;///
          </a>
          <a href="#contact" className="btn-neon btn-neon-pink">
            GET IN TOUCH &nbsp;///
          </a>
        </div>
      </div>
    </section>
  );
}
