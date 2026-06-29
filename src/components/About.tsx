export function About() {
  const lines = [
    { prompt: "whoami", output: "Alejandro Troncoso — developer at Jumpseller, building e-commerce integrations and tools." },
    { prompt: "cat stack.txt", output: "JavaScript · TypeScript · Python · Swift · Next.js · Node.js" },
    { prompt: "ls interests/", output: "clinical-apps/   loyalty-systems/   checkout-ux/   ai-tools/   data-projects/" },
    { prompt: "cat links.txt", output: null },
  ];

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "var(--neon-pink)",
            letterSpacing: "0.3em",
          }}
        >
          02
        </span>
        <h2
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 700,
            fontSize: "1.4rem",
            letterSpacing: "0.15em",
            color: "var(--text)",
          }}
        >
          ABOUT
        </h2>
        <div className="flex-1 section-divider" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: "#ff5f57" }} />
            <span className="terminal-dot" style={{ background: "#febc2e" }} />
            <span className="terminal-dot" style={{ background: "#28c840" }} />
            <span
              style={{
                marginLeft: "8px",
                fontSize: "0.65rem",
                color: "var(--muted)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              aatronco@portfolio ~ %
            </span>
          </div>

          <div className="p-6 space-y-4">
            {lines.map((line, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--neon-green)",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: "var(--neon-pink)" }}>❯ </span>
                  {line.prompt}
                </div>
                {line.output ? (
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text)",
                      marginTop: "4px",
                      lineHeight: 1.6,
                    }}
                  >
                    {line.output}
                  </div>
                ) : (
                  <div className="flex gap-4 mt-2 flex-wrap">
                    {[
                      { label: "github", url: "https://github.com/aatronco" },
                      { label: "twitter", url: "https://twitter.com/aatronco" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--neon-blue)",
                          textDecoration: "none",
                        }}
                      >
                        ./{link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* blinking cursor */}
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--neon-green)",
              }}
            >
              <span style={{ color: "var(--neon-pink)" }}>❯ </span>
              <span className="cursor" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          {[
            { label: "PUBLIC REPOS", value: "15", color: "var(--neon-green)" },
            { label: "PUBLIC GISTS", value: "68", color: "var(--neon-blue)" },
            { label: "YEARS ACTIVE", value: "12+", color: "var(--neon-pink)" },
            { label: "LANGUAGES USED", value: "5", color: "var(--neon-green)" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-module p-5 flex items-center justify-between"
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--muted)",
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: stat.color,
                  textShadow: `0 0 12px ${stat.color}`,
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
