"use client";
import { skills } from "@/lib/data";

const levelColor: Record<string, string> = {
  Advanced: "#22c55e",
  Intermediate: "#f59e0b",
  Beginner: "#6c63ff",
};

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
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
        What I Know
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
        Skills & Technologies
      </h2>

      {/* Category groups */}
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#9090a8",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {category}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "1rem",
            }}
          >
            {skills
              .filter((s) => s.category === category)
              .map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    background: "#18181f",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "1.4rem 1rem",
                    textAlign: "center",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(108,99,255,0.4)";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 8px 32px rgba(108,99,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>
                    {skill.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#f0f0f5",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: levelColor[skill.level] ?? "#9090a8",
                      fontWeight: 500,
                    }}
                  >
                    {skill.level}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}