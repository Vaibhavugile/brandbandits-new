// src/App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./landing.css";

/* Layout */
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import TrendingProducts from "./components/TrendingProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

/* Pages */
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";

/* Cart */
import { CartProvider } from "./context/CartContext";

function App() {
  useEffect(() => {
    const selector = ".reveal, .bb-hero-root";
    const els = document.querySelectorAll(selector);
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <CartProvider>
      <Header />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <TrendingProducts />
              <Features />
            </>
          }
        />

        {/* CATEGORY PRODUCT LIST */}
        <Route
          path="/category/:slug"
          element={<CategoryProducts />}
        />

        {/* PRODUCT DETAIL PAGE */}
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
              <Route path="/checkout" element={<Checkout />} />

      </Routes>


      <Footer />
    </CartProvider>
  );
}

export default App;
