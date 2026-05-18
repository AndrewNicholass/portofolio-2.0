import ScrollReveal from "./ScrollReveal";
import MagicBento, { ParticleCard } from "./MagicBento";

const projects = [
  {
    id: 1,
    title: "Reportin",
    description: "",
    tools: ["React", "Node.js", "Express.JS", "Firebase"],
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Movie management",
    description:
      "A full-stack web application created for movie management system. Built using technologies such as PHP/Laravel and MySQL, the application emphasizes responsive design, usability, and scalable web development concepts. The project also demonstrates understanding of CRUD operations, routing, authentication flow, and collaborative development using GitHub version control.",
    tools: ["MySQL", "Laravel", "PHP"],
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "",
    description:
      "A short description of what this project does, the problem it solves, and what makes it interesting. You can edit this later with your real project details.",
    tools: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: null,
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    // <ScrollReveal
    //   baseOpacity={0.1}
    //   enableBlur
    //   baseRotation={3}
    //   blurStrength={10}
    // >
    <section
      id="projects"
      style={{
        background: "#06090f",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 64 }}>
          <p
            style={{
              color: "#4f7cff",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Work
          </p>
          <h2
            style={{
              color: "#e8eaf0",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Selected{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4f7cff 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <div
            style={{
              width: 40,
              height: 1,
              background: "linear-gradient(90deg, #4f7cff, #a78bfa)",
              margin: "20px auto 0",
            }}
          />
        </div>

        {/* Project cards */}
        <MagicBento
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={360}
          particleCount={10}
          glowColor="79, 124, 255"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {projects.map((project, index) => (
              <ParticleCard
                key={project.id}
                className="card card--border-glow"
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  overflow: "hidden",
                  background: "#0a0e16",
                  transition: "border-color 0.25s ease",
                  borderColor: "rgba(255,255,255,0.06)",
                  border: "0.5px solid rgba(255,255,255,0.06)",
                }}
                disableAnimations={false}
                particleCount={10}
                glowColor="79, 124, 255"
                enableTilt={true}
                clickEffect
                enableMagnetism={true}
              >
                {index % 2 === 0 && (
                  <ProjectImage image={project.image} title={project.title} />
                )}

                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#4f7cff",
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        marginBottom: 12,
                      }}
                    >
                      0{project.id}
                    </p>
                    <h3
                      style={{
                        color: "#e8eaf0",
                        fontSize: 22,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        marginBottom: 14,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "#8892a4",
                        fontSize: 14,
                        lineHeight: 1.8,
                        marginBottom: 28,
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 36,
                      }}
                    >
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            background: "rgba(79,124,255,0.08)",
                            border: "0.5px solid rgba(79,124,255,0.2)",
                            color: "#4f7cff",
                            fontSize: 11,
                            fontWeight: 500,
                            padding: "4px 12px",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    <ProjectButton
                      href={project.github}
                      label="GitHub"
                      outline
                    />
                    <ProjectButton href={project.live} label="Visit Live" />
                  </div>
                </div>

                {index % 2 !== 0 && (
                  <ProjectImage image={project.image} title={project.title} />
                )}
              </ParticleCard>
            ))}
          </div>
        </MagicBento>
      </div>
    </section>
    // </ScrollReveal>
  );
}

function ProjectImage({ image, title }) {
  return (
    <div
      style={{
        background: "#080c14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 280,
        borderRight: "0.5px solid rgba(255,255,255,0.04)",
      }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: "0.5px solid rgba(79,124,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              background: "rgba(79,124,255,0.05)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(79,124,255,0.4)"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <p
            style={{
              color: "rgba(79,124,255,0.3)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            App Preview
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectButton({ href, label, outline }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 22px",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textDecoration: "none",
        border: outline
          ? "0.5px solid rgba(255,255,255,0.1)"
          : "0.5px solid rgba(79,124,255,0.5)",
        color: outline ? "#8892a4" : "#4f7cff",
        background: outline ? "transparent" : "rgba(79,124,255,0.08)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#e8eaf0";
        e.currentTarget.style.background = outline
          ? "rgba(255,255,255,0.05)"
          : "rgba(79,124,255,0.2)";
        e.currentTarget.style.borderColor = outline
          ? "rgba(255,255,255,0.2)"
          : "rgba(79,124,255,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = outline ? "#8892a4" : "#4f7cff";
        e.currentTarget.style.background = outline
          ? "transparent"
          : "rgba(79,124,255,0.08)";
        e.currentTarget.style.borderColor = outline
          ? "rgba(255,255,255,0.1)"
          : "rgba(79,124,255,0.5)";
      }}
    >
      {outline ? (
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ) : (
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
      {label}
    </a>
  );
}
