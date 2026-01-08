// src/components/Categories.js
import React, { useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";
import { CATEGORIES, PRODUCTS, getCategoryImage } from "../data/products";

/* Helpers */
const makeKey = (cat) =>
  String(cat || "other").toLowerCase().replace(/\s+/g, "-");

const titleCase = (str) =>
  String(str || "")
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

export default function Categories() {
  const nav = useNavigate();
  const rootRef = useRef(null);

  const categories = useMemo(() => {
    return (CATEGORIES || []).map((cat) => {
      const count = PRODUCTS.filter(
        (p) => (p.category || "Other") === cat
      ).length;

      return {
        key: makeKey(cat),
        rawKey: cat,
        title: titleCase(cat),
        subtitle: `${count} pieces`,
        image: getCategoryImage(cat),
      };
    });
  }, []);

  useEffect(() => {
    rootRef.current?.classList.add("show");
  }, []);

  return (
    <section ref={rootRef} className="lux-cat-grid">
      <header className="lux-cat-head">
        <span className="lux-eyebrow">COLLECTIONS</span>
        <h2 className="lux-cat-title">
          Curated essentials for
          <br /> modern everyday wear
        </h2>
      </header>

      <div className="lux-cat-mosaic">
        {categories.map((c, i) => (
          <article
            key={c.key}
            className={`lux-cat-tile ${i === 0 ? "featured" : ""}`}
            style={{ backgroundImage: `url(${c.image})` }}
            onClick={() =>
              nav(`/category/${c.key}`, { state: { category: c.rawKey } })
            }
            role="button"
            tabIndex={0}
          >
            <div className="lux-cat-overlay" />
            <div className="lux-cat-info">
              <h3>{c.title}</h3>
              <span>{c.subtitle}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
