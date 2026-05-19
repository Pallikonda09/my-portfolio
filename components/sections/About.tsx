"use client";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 6vw",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}
    >
      {/* Avatar card */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "1",
            borderRadius: "20px",
            background: "#18181f",
            border: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Syne, sans-serif",
            fontSize: "5rem",
            fontWeight: 800,
            color: "#6c63ff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: "60%",
              height: "60%",
              background: "radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)",
              borderRadius: "50%",
            }}
          />
          {personalInfo.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Experience badge */}
        <div
          style={{
            position: "absolute",
            bottom: "-16px",
            right: "-16px",
            background: "#18181f",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            padding: "1rem 1.4rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "2rem",
              fontWeight: 800,
              color: "#6c63ff",
              lineHeight: 1,
            }}
          >
            {personalInfo.yearsOfExperience}+
          </div>
          <div style={{ fontSize: "0.75rem", color: "#9090a8", marginTop: "0.2rem" }}>
            Years Experience
          </div>
        </div>

        {/* Location badge */}
        <div
          style={{
            position: "absolute",
            top: "-16px",
            left: "-16px",
            background: "#18181f",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            padding: "0.7rem 1rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>📍</span>
          <span style={{ fontSize: "0.8rem", color: "#9090a8" }}>
            {personalInfo.location}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div>
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
          About Me
        </p>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            marginBottom: "1.5rem",
            color: "#f0f0f5",
          }}
        >
          Passionate about building{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6c63ff, #ff6584)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            great products.
          </span>
        </h2>

        {personalInfo.about.map((para, i) => (
          <p
            key={i}
            style={{
              color: "#9090a8",
              marginBottom: "1.2rem",
              lineHeight: 1.8,
              fontSize: "0.95rem",
            }}
          >
            {para}
          </p>
        ))}

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            padding: "0.75rem 1.8rem",
            borderRadius: "999px",
            background: "#6c63ff",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "all 0.2s",
            boxShadow: "0 4px 20px rgba(108,99,255,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Let's Work Together →
        </a>
      </div>
    </section>
  );
}