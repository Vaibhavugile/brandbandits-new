// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const primaryBtnRef = useRef(null);

  /* entrance */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("lux-show"));
  }, []);

  /* mouse-driven realism (NO SCROLL MOVE) */
  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    let raf = null;
    const state = { x: 0, y: 0, tx: 0, ty: 0 };

    const animate = () => {
      state.x += (state.tx - state.x) * 0.04;
      state.y += (state.ty - state.y) * 0.04;

      visual.style.setProperty("--px", `${state.x * 14}px`);
      visual.style.setProperty("--py", `${state.y * 14}px`);
      visual.style.setProperty("--light-x", `${55 + state.x * 18}%`);
      visual.style.setProperty("--light-y", `${42 + state.y * 14}%`);

      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      state.tx = e.clientX / window.innerWidth - 0.5;
      state.ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) animate();
    };

    const reset = () => {
      state.tx = 0;
      state.ty = 0;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* scroll narrative (TEXT ONLY) */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let raf;
    let progress = 0;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - Math.min(Math.max(rect.bottom / vh, 0), 1);

      progress += (raw - progress) * 0.08;
      hero.style.setProperty("--scene", progress.toFixed(3));

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="lux-hero" ref={heroRef}>
      {/* LOCKED BACKGROUND */}
      <div
        ref={visualRef}
        className="lux-visual"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=2400)",
        }}
      />

      <div className="lux-container">
        <div className="lux-content">
          <span className="lux-eyebrow lux-animate a1">
            MEN • PREMIUM ESSENTIALS
          </span>

          <h1 className="lux-title lux-animate a2">
            Timeless menswear
            <span>designed with restraint.</span>
          </h1>

          <p className="lux-description lux-animate a3">
            Elevated everyday clothing crafted in small batches.
            Clean silhouettes, thoughtful fabrics, and a focus on longevity.
          </p>

          <div className="lux-ctas lux-animate a4">
            <button className="lux-primary" ref={primaryBtnRef}>
              Explore Collection
            </button>
            <button className="lux-secondary">View Lookbook</button>
          </div>

          <div className="lux-trust lux-animate a5">
            <div><strong>5k+</strong><span>Customers</span></div>
            <div><strong>4.9★</strong><span>Rating</span></div>
            <div><strong>Premium</strong><span>Fabrics</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
