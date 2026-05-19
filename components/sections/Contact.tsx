"use client";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 6vw",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
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
        Get In Touch
      </p>
      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          marginBottom: "1rem",
          color: "#f0f0f5",
        }}
      >
        Let's Work Together
      </h2>
      <p
        style={{
          color: "#9090a8",
          maxWidth: "480px",
          margin: "0 auto 3rem",
          lineHeight: 1.7,
          fontSize: "0.95rem",
        }}
      >
        I'm currently open to new opportunities. Whether you have a project in
        mind or just want to say hello — my inbox is always open.
      </p>

      {/* Card */}
      <div
        style={{
          background: "#18181f",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          padding: "3.5rem 2rem",
          maxWidth: "580px",
          margin: "0 auto",
          boxShadow: "0 0 80px rgba(108,99,255,0.07)",
        }}
      >
        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            display: "block",
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            fontWeight: 700,
            color: "#f0f0f5",
            textDecoration: "none",
            marginBottom: "2rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#6c63ff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#f0f0f5")
          }
        >
          {personalInfo.email}
        </a>

        {/* CTA button */}
        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            display: "inline-block",
            padding: "0.85rem 2.2rem",
            borderRadius: "999px",
            background: "#6c63ff",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            marginBottom: "2rem",
            transition: "all 0.2s",
            boxShadow: "0 4px 24px rgba(108,99,255,0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(108,99,255,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(108,99,255,0.35)";
          }}
        >
          Send Me an Email ✉️
        </a>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: "1.8rem",
          }}
        />

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
        
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#9090a8",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 400,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#6c63ff";
                el.style.color = "#6c63ff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.color = "#9090a8";
              }}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}