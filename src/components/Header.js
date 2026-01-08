import React, { useEffect, useState, useRef } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);

  /* scroll refinement */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  /* close mobile on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (
        menuOpen &&
        mobileRef.current &&
        !mobileRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <header className={`bb-header-full ${scrolled ? "bb-scrolled" : ""}`}>
      <div className="bb-header-wrap">

        {/* BRAND */}
        <div className="bb-left">
          <button
            className="bb-logo"
            aria-label="BrandBandits home"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <span className="bb-logo-mark">BB</span>
          </button>

          <div className="bb-brand-text">
            <span className="bb-brand-title">BrandBandits</span>
            <span className="bb-brand-sub">Menswear & Accessories</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="bb-nav" aria-label="Primary navigation">
          <a href="#collections" className="bb-nav-link">
            Collections
          </a>
          <a href="#menswear" className="bb-nav-link">
            Menswear
          </a>
          <a href="#accessories" className="bb-nav-link">
            Accessories
          </a>
          <a href="#journal" className="bb-nav-link">
            Journal
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="bb-right">
          <button className="bb-ghost-btn">Sign in</button>

          <button className="bb-primary-btn">
            Explore Collection
          </button>

          {/* BURGER */}
          <button
            className={`bb-burger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`bb-mobile-panel ${menuOpen ? "bb-open" : ""}`}>
        <div className="bb-mobile-links" ref={mobileRef}>
          <a href="#collections" onClick={() => setMenuOpen(false)}>
            Collections
          </a>
          <a href="#menswear" onClick={() => setMenuOpen(false)}>
            Menswear
          </a>
          <a href="#accessories" onClick={() => setMenuOpen(false)}>
            Accessories
          </a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>
            Journal
          </a>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <button className="bb-ghost-btn">Sign in</button>
            <button className="bb-primary-btn">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
