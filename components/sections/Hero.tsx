"use client";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 6vw 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Available badge */}
      {personalInfo.available && (
        <div
          className="fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(108,99,255,0.12)",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            marginBottom: "1.8rem",
            width: "fit-content",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 6px #22c55e",
            }}
          />
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#6c63ff",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Available for opportunities
          </span>
        </div>
      )}

      {/* Name */}
      <h1
        className="fade-up"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(3rem, 9vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-3px",
          marginBottom: "1.4rem",
          animationDelay: "0.1s",
        }}
      >
        {personalInfo.name.split(" ")[0]}
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #6c63ff, #ff6584)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {personalInfo.name.split(" ").slice(1).join(" ") || "Developer"}
        </span>
        <br />
        <span style={{ color: "#f0f0f5" }}>Here.</span>
      </h1>

      {/* Tagline */}
      <p
        className="fade-up"
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#9090a8",
          maxWidth: "560px",
          marginBottom: "2.5rem",
          lineHeight: 1.7,
          animationDelay: "0.2s",
        }}
      >
        {personalInfo.tagline}
      </p>

      {/* Buttons */}
      <div
        className="fade-up"
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          animationDelay: "0.3s",
        }}
      >
        <a
          href="#projects"
          style={{
            padding: "0.8rem 2rem",
            borderRadius: "999px",
            background: "#6c63ff",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "all 0.2s",
            boxShadow: "0 4px 24px rgba(108,99,255,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(108,99,255,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(108,99,255,0.3)";
          }}
        >
          View My Work →
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.8rem 2rem",
            borderRadius: "999px",
            background: "transparent",
            color: "#f0f0f5",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#6c63ff";
            (e.currentTarget as HTMLElement).style.color = "#6c63ff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.color = "#f0f0f5";
          }}
        >
          Get In Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="fade-up"
        style={{
          marginTop: "5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          color: "#9090a8",
          fontSize: "0.78rem",
          letterSpacing: "1px",
          animationDelay: "0.5s",
        }}
      >
        <span style={{ width: 40, height: 1, background: "#9090a8", display: "inline-block" }} />
        scroll to explore
      </div>
    </section>
  );
}