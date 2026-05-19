"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 6vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.3rem",
            color: "#f0f0f5",
            letterSpacing: "-0.5px",
          }}
        >
          {personalInfo.name.split(" ")[0]}
          <span style={{ color: "#6c63ff" }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="hidden-mobile"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: "#9090a8",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#f0f0f5")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#9090a8")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

    
    </nav>
  );
}