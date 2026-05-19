"use client";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 6vw",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#6c63ff",
          marginBottom: "0.75rem",
        }}
      >
        My Work
      </p>
      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          marginBottom: "3rem",
          color: "#f0f0f5",
        }}
      >
        Featured Projects
      </h2>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.num}
            style={{
              background: "#18181f",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              padding: "2rem",
              transition: "all 0.25s",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(108,99,255,0.35)";
              el.style.transform = "translateY(-6px)";
              el.style.boxShadow = "0 16px 48px rgba(108,99,255,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Top gradient line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #6c63ff, #ff6584)",
              }}
            />

            {/* Project number */}
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#6c63ff",
                letterSpacing: "1px",
                marginBottom: "0.75rem",
              }}
            >
              {project.num}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#f0f0f5",
                marginBottom: "0.7rem",
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#9090a8",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.4rem",
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.4rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    padding: "0.3rem 0.75rem",
                    borderRadius: "999px",
                    background: "rgba(108,99,255,0.12)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    color: "#6c63ff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <a
                href={project.github}
                style={{
                  fontSize: "0.82rem",
                  color: "#9090a8",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#f0f0f5")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9090a8")
                }
              >
                GitHub →
              </a>
              <a
                href={project.live}
                style={{
                  fontSize: "0.82rem",
                  color: "#9090a8",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#f0f0f5")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9090a8")
                }
              >
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}