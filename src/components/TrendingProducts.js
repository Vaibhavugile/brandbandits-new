import React, {
  useEffect,
  useRef,
  useState,
  useMemo
} from "react";

import "./trending.css";
import "./swatch.css";

import SwatchRow from "./SwatchRow";
import { PRODUCTS, CATEGORIES } from "../data/products";

/* -------------------------------------------------------
   Image fallback (SVG)
------------------------------------------------------- */
const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <rect width='100%' height='100%' fill='#f3f4f6'/>
      <text x='50%' y='50%'
        fill='#c2c6cc'
        font-family='Inter, Arial'
        font-size='20'
        dominant-baseline='middle'
        text-anchor='middle'>
        Image unavailable
      </text>
    </svg>
  `);

/* -------------------------------------------------------
   Category Chips
------------------------------------------------------- */
function CategoryChips({ categories, selected, onSelect }) {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const handler = (e) => {
      const chips = Array.from(el.querySelectorAll(".tp-chip"));
      const idx = chips.indexOf(document.activeElement);

      if (e.key === "ArrowRight") {
        chips[(idx + 1) % chips.length]?.focus();
        e.preventDefault();
      }

      if (e.key === "ArrowLeft") {
        chips[(idx - 1 + chips.length) % chips.length]?.focus();
        e.preventDefault();
      }
    };

    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      ref={listRef}
      className="tp-chips"
      role="tablist"
      aria-label="Filter categories"
    >
      {categories.map(cat => (
        <button
          key={cat}
          role="tab"
          aria-selected={selected === cat}
          className={`tp-chip ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   Product Card
------------------------------------------------------- */
function ProductCard({ product, idx, onAdd }) {
  const [selected, setSelected] = useState(
    product.variants?.[0] || null
  );
  const [loaded, setLoaded] = useState(false);

  const imageSrc =
    selected?.image ||
    product.images?.[0] ||
    FALLBACK_SVG;

  return (
    <article
      className="tp-card"
      tabIndex={0}
      aria-labelledby={`tp-name-${product.id}`}
      style={{ transitionDelay: `${idx * 40}ms` }}
    >
      {/* Media */}
      <div className="tp-media">
        {!loaded && <div className="tp-skeleton" />}
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          draggable="false"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_SVG;
            setLoaded(true);
          }}
        />
        <span className="tp-badge">Trending</span>
      </div>

      {/* Body */}
      <div className="tp-body">
        <h3 id={`tp-name-${product.id}`} className="tp-name">
          {product.name}
        </h3>

        <div className="tp-price">
          ₹{product.price?.toLocaleString()}
        </div>

        <SwatchRow
          variants={product.variants || []}
          selectedId={selected?.id}
          maxVisible={5}
          onSelect={setSelected}
        />

        <div className="tp-actions">
          <button
            className="tp-btn tp-btn-ghost"
            onClick={() =>
              onAdd({ ...product, variant: selected })
            }
          >
            Add to cart
          </button>

          <button
            className="tp-btn tp-btn-primary"
            onClick={() =>
              (window.location.hash = `#/product/${product.id}`)
            }
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------
   Trending Products Section
------------------------------------------------------- */
export default function TrendingProducts({
  products = PRODUCTS,
  onAdd = () => {}
}) {
  const rootRef = useRef(null);
  const items = products;

  /* Categories */
  const categories = useMemo(() => {
    if (CATEGORIES?.length) {
      return ["All", ...CATEGORIES];
    }
    return [
      "All",
      ...Array.from(new Set(items.map(p => p.category || "Other")))
    ];
  }, [items]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  /* Responsive batch size */
  const getBatch = () =>
    window.innerWidth < 760 ? 4 : 8;

  const [visibleCount, setVisibleCount] = useState(getBatch);

  /* Resize handler */
  useEffect(() => {
    const onResize = () => {
      setVisibleCount(v => Math.max(getBatch(), v));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Filter */
  const filtered = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter(p => p.category === selectedCategory);
  }, [items, selectedCategory]);

  /* Reset on category change */
  useEffect(() => {
    setVisibleCount(getBatch());
  }, [selectedCategory]);

  const visibleItems = filtered.slice(0, visibleCount);

  /* Reveal */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("show"),
      { threshold: 0.12 }
    );

    io.observe(el);
    setTimeout(() => el.classList.add("show"), 120);

    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="tp-root"
      aria-labelledby="trending-heading"
    >
      {/* Header */}
      <div className="tp-header container">
        <div>
          <h2 id="trending-heading" className="tp-title">
            Trending right now
          </h2>
          <p className="tp-sub">
            Curated bestsellers — selected from limited drops.
          </p>
        </div>

        <CategoryChips
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Grid */}
      <div className="tp-grid-wrap container">
        <div className="tp-grid" role="list">
          {visibleItems.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              idx={i}
              onAdd={onAdd}
            />
          ))}
        </div>

        {visibleItems.length < filtered.length && (
          <div className="tp-loadmore-wrap">
            <button
              className="tp-loadmore-btn"
              onClick={() =>
                setVisibleCount(v => v + getBatch())
              }
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
