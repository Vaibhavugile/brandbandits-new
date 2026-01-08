import React from "react";
import "./trending.css"; // reuse your premium grid/card styles
import SwatchRow from "./SwatchRow";

export default function ProductGrid({ products = [] }) {
  return (
    <section className="tp-root show">
      <div className="tp-grid-wrap">
        <div className="tp-grid">
          {products.map((p) => (
            <article key={p.id} className="tp-card">
              <div className="tp-media">
                <img
                  src={p.images?.[0]}
                  alt={p.name}
                  loading="lazy"
                />
              </div>

              <div className="tp-body">
                <h3 className="tp-name">{p.name}</h3>
                <p className="tp-price">₹{p.price}</p>

                {p.variants?.length > 0 && (
                  <SwatchRow variants={p.variants} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
