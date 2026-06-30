export function Contact() {
  const LINKS = [
    {
      handle: "@aatronco",
      platform: "TWITTER / X",
      description: "DMs open",
      url: "https://twitter.com/aatronco",
      color: "var(--neon-blue)",
    },
    {
      handle: "aatronco",
      platform: "GITHUB",
      description: "Code & projects",
      url: "https://github.com/aatronco",
      color: "var(--neon-green)",
    },
  ];

  return (
    <section
      id="contact"
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
          03
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
          CONTACT
        </h2>
        <div className="flex-1 section-divider" />
      </div>

      <div className="max-w-xl">
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.78rem",
            color: "var(--muted)",
            marginBottom: "2.5rem",
            lineHeight: 1.8,
          }}
        >
          &gt; Got an interesting problem? Reach out directly —
          no forms, no bots, just a message.
        </p>

        <div className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-module p-5 flex items-center justify-between group"
              style={{ textDecoration: "none" }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    color: "var(--muted)",
                    marginBottom: "4px",
                  }}
                >
                  {link.platform}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: link.color,
                    textShadow: `0 0 12px ${link.color}`,
                  }}
                >
                  {link.handle}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  {link.description}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "1.2rem",
                  color: link.color,
                  opacity: 0.6,
                  transition: "opacity 0.15s, transform 0.15s",
                }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-24 pt-8 flex items-center justify-between flex-wrap gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 900,
            fontSize: "0.8rem",
            color: "var(--neon-green)",
            letterSpacing: "0.2em",
          }}
        >
          AATRONCO
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
          }}
        >
          &copy; {new Date().getFullYear()} — BUILT WITH NEXT.JS + GITHUB PAGES
        </span>
      </div>
    </section>
  );
}
