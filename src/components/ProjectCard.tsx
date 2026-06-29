import { Project, LANG_COLORS } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const color = LANG_COLORS[project.language] ?? LANG_COLORS.default;

  return (
    <article className="card-module p-6 flex flex-col gap-4">
      {/* Language badge */}
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color,
            textTransform: "uppercase",
            borderBottom: `1px solid ${color}`,
            paddingBottom: "2px",
          }}
        >
          {project.language}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6rem",
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          MOD_{project.id.toUpperCase().slice(0, 6)}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-orbitron)",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--text)",
          letterSpacing: "0.05em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: "1.6",
          flex: 1,
        }}
      >
        {project.longDescription}
      </p>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              padding: "2px 8px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon"
          style={{ fontSize: "0.65rem", padding: "0.4rem 0.8rem" }}
        >
          GITHUB ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-pink"
            style={{ fontSize: "0.65rem", padding: "0.4rem 0.8rem" }}
          >
            LIVE ↗
          </a>
        )}
      </div>
    </article>
  );
}
