import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { findProductById, PRODUCTS } from "../data/products";
import SwatchRow from "../components/SwatchRow";
import ProductListGrid from "../components/ProductListGrid";
import "./productDetail.css";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = findProductById(id);
const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || null
  );
  const [activeImage, setActiveImage] = useState(
    product?.variants?.[0]?.image || product?.images?.[0]
  );
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <p style={{ padding: 40 }}>Product not found</p>;
  }

  /* Recommendations */
  const recommendations = PRODUCTS.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  ).slice(0, 4);

  return (
    <main className="pdp-page">
      <div className="pdp-container">

        {/* IMAGE */}
        <div className="pdp-gallery">
          <div className="pdp-main-image">
            <img
              src={activeImage}
              alt={`${product.name} ${
                selectedVariant?.label || ""
              }`}
            />
          </div>
        </div>

        {/* INFO */}
        <div className="pdp-info">
          <h1 className="pdp-name">{product.name}</h1>
          <p className="pdp-tagline">{product.tagline}</p>

          {/* PRICE */}
          <div className="pdp-price-row">
            <span className="pdp-price">
              ₹{product.price}
            </span>
            {product.compareAtPrice && (
              <span className="pdp-compare">
                ₹{product.compareAtPrice}
              </span>
            )}
            {product.discount && (
              <span className="pdp-discount">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* COLORS */}
          {product.variants?.length > 0 && (
            <div className="pdp-section">
              <div className="pdp-section-title">
                Color:{" "}
                <strong>{selectedVariant?.label}</strong>
              </div>

              <SwatchRow
                variants={product.variants}
                onSelect={(variant) => {
                  setSelectedVariant(variant);
                  if (variant.image) {
                    setActiveImage(variant.image);
                  }
                }}
              />
            </div>
          )}

          {/* STOCK INFO */}
          {selectedVariant && (
            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color:
                  selectedVariant.stock > 0
                    ? "#15803d"
                    : "#b91c1c"
              }}
            >
              {selectedVariant.stock > 0
                ? `${selectedVariant.stock} in stock`
                : "Out of stock"}
            </p>
          )}

          {/* SIZES */}
          {product.sizes?.length > 0 && (
            <div className="pdp-section">
              <div className="pdp-section-title">
                Size
              </div>
              <div className="pdp-sizes">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`pdp-size ${
                      selectedSize === s ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ADD TO CART */}
          <div className="pdp-cta">
            <button
  className="pdp-add"
  disabled={
    selectedVariant && selectedVariant.stock === 0
  }
  onClick={() =>
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: selectedVariant?.image || product.images[0],
      variant: selectedVariant,
      size: selectedSize,
    })
  }
>
  Add to cart
</button>

          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      {recommendations.length > 0 && (
        <section className="pdp-recommendations">
          <h2 className="pdp-rec-title">
            You may also like
          </h2>
          <ProductListGrid
            products={recommendations}
          />
        </section>
      )}
    </main>
  );
}
