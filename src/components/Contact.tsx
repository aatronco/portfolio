"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up to an API route or Wix Forms later
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

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
          &gt; Got an interesting problem? I&apos;m open to freelance projects,
          collaborations, and conversations about weird ideas.
        </p>

        {status === "sent" ? (
          <div
            className="terminal p-8 text-center"
          >
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                color: "var(--neon-green)",
                fontSize: "0.85rem",
              }}
              className="glow-green"
            >
              &gt; MESSAGE SENT. TRANSMISSION COMPLETE ✓
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--muted)",
                  marginBottom: "6px",
                }}
              >
                NAME
              </label>
              <input
                name="name"
                required
                className="input-neon"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--muted)",
                  marginBottom: "6px",
                }}
              >
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                required
                className="input-neon"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--muted)",
                  marginBottom: "6px",
                }}
              >
                MESSAGE
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="input-neon"
                placeholder="Tell me about your project..."
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-neon"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE ///"}
            </button>
          </form>
        )}
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
          &copy; {new Date().getFullYear()} — BUILT WITH NEXT.JS + WIX HEADLESS
        </span>
      </div>
    </section>
  );
}
