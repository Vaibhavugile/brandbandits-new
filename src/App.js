// src/App.js
import React, { useEffect } from "react";
import "./landing.css"; // global landing styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import TrendingProducts from "./components/TrendingProducts";

function App(){
  useEffect(() => {
    // elements to observe: existing .reveal plus hero root class
    const selector = '.reveal, .bb-hero-root';
    const els = document.querySelectorAll(selector);
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
            <Categories />
      <TrendingProducts />

      <Features />
      <Footer />
    </div>
  );
}

export default App;