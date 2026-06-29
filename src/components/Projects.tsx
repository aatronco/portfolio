import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 md:px-16 py-24">
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
          01
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
          PROJECTS
        </h2>
        <div className="flex-1 section-divider" />
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
          }}
        >
          {featured.length} MODULES LOADED
        </span>
      </div>

      {/* Grid */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
