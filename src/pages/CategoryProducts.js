import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductListGrid from "../components/ProductListGrid";
import { PRODUCTS } from "../data/products";
import "./productList.css";

const slugToTitle = (slug = "") =>
  slug
    .split("-")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export default function CategoryProducts() {
  const { slug } = useParams();
  const location = useLocation();

  const category =
    location.state?.category ||
    slugToTitle(slug);

  const products = useMemo(() => {
    return PRODUCTS.filter(p => p.category === category);
  }, [category]);

  return (
    <main className="plp-page">
      <header className="plp-header">
        <span className="plp-eyebrow">Collection</span>
        <h1 className="plp-title">{category}</h1>
        <p className="plp-count">{products.length} products</p>
      </header>

      <ProductListGrid products={products} />
    </main>
  );
}
