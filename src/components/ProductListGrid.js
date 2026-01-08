import React from "react";
import { useNavigate } from "react-router-dom";
import SwatchRow from "./SwatchRow";
import "../pages/productList.css";
import { useCart } from "../context/CartContext";

export default function ProductListGrid({ products = [], onAdd = () => {} }) {
  const navigate = useNavigate();
const { addToCart } = useCart();

  return (
    <section className="plp-grid-wrap">
      <div className="plp-grid">
        {products.map((p) => (
          <article
            key={p.id}
            className="plp-card"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <div className="plp-media">
              <img src={p.images?.[0]} alt={p.name} />
            </div>

            <div className="plp-body">
              <h3 className="plp-name">{p.name}</h3>
              <p className="plp-price">₹{p.price}</p>

              {p.variants?.length > 0 && (
                <div className="plp-swatches">
                  <SwatchRow
                    variants={p.variants}
                    maxVisible={4}
                  />
                </div>
              )}

              <div
                className="plp-actions"
                onClick={(e) => e.stopPropagation()}
              >
               <button
  className="plp-btn plp-btn-cart"
  onClick={(e) => {
    e.stopPropagation();
    addToCart({
      productId: p.id,
      name: p.name,
      price: p.price,
      image: p.images?.[0],
      variant: p.variants?.[0] || null,
      size: null,
    });
  }}
>
  Add to cart
</button>


                <button
                  className="plp-btn plp-btn-view"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  View
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
