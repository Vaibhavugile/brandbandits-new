// src/components/Features.js
import React, { useEffect, useRef } from "react";
import "./features.css";

const FEATURES = [
  {
    id: "quality",
    title: "Premium Craftsmanship",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000",
  },
  {
    id: "shipping",
    title: "Worldwide Shipping",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000",
  },
  {
    id: "sustain",
    title: "Sustainable Materials",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2000",
  },
  {
    id: "fit",
    title: "Perfect Fit Guarantee",
    image:
      "https://images.unsplash.com/photo-1520974735194-6c4bbf6e8d8a?q=80&w=2000",
  },
];

export default function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("show"),
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="lux-features section-next" ref={ref}>
      <header className="lux-features-head">
        <span className="lux-eyebrow">OUR PROMISE</span>
        <h2 className="lux-features-title">
          Designed to elevate
          <br />
          your everyday essentials
        </h2>
      </header>

      <div className="lux-editorial-list">
        {FEATURES.map((f, i) => (
          <article
            key={f.id}
            className={`lux-editorial-item ${
              i % 2 === 1 ? "reverse" : ""
            }`}
          >
            <div
              className="lux-editorial-image"
              style={{ backgroundImage: `url(${f.image})` }}
            />

            <div className="lux-editorial-content">
              <h3>{f.title}</h3>
              <p>
                Thoughtfully designed with a focus on quality, longevity,
                and refined detail — built for everyday wear without compromise.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
