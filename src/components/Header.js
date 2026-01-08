import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);
  const navigate = useNavigate();

  /* CART */
  const { cart, justAdded, setJustAdded } = useCart();
  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  /* AUTH */
  const { user, signOut, isAdmin } = useAuth();

  /* scroll refinement */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔥 AUTO OPEN CART WHEN ITEM IS ADDED */
  useEffect(() => {
    if (justAdded) {
      setCartOpen(true);
      setJustAdded(false);
    }
  }, [justAdded, setJustAdded]);

  /* lock body scroll ONLY for mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  /* close mobile menu on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (
        menuOpen &&
        mobileRef.current &&
        !mobileRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`bb-header-full ${
          scrolled ? "bb-scrolled" : ""
        }`}
      >
        <div className="bb-header-wrap">

          {/* BRAND */}
          <div className="bb-left">
            <button
              className="bb-logo"
              aria-label="BrandBandits home"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }
            >
              <span className="bb-logo-mark">BB</span>
            </button>

            <div className="bb-brand-text">
              <span className="bb-brand-title">
                BrandBandits
              </span>
              <span className="bb-brand-sub">
                Menswear & Accessories
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="bb-nav"
            aria-label="Primary navigation"
          >
            <a href="#collections" className="bb-nav-link">
              Collections
            </a>
            <a href="#menswear" className="bb-nav-link">
              Menswear
            </a>
            <a href="#accessories" className="bb-nav-link">
              Accessories
            </a>
            <a href="#journal" className="bb-nav-link">
              Journal
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="bb-right">
            {/* ADMIN BUTTON */}
            {isAdmin && (
              <button
                className="bb-ghost-btn"
                onClick={() => navigate("/admin")}
              >
                Admin
              </button>
            )}

            {/* AUTH BUTTON */}
            {user ? (
              <button
                className="bb-ghost-btn"
                onClick={signOut}
              >
                Sign out
              </button>
            ) : (
              <button
                className="bb-ghost-btn"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </button>
            )}

            {/* CART BUTTON */}
            <button
              className="bb-cart-btn"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              Cart
              {cartCount > 0 && (
                <span className="bb-cart-badge">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="bb-primary-btn">
              Explore Collection
            </button>

            {/* BURGER */}
            <button
              className={`bb-burger ${
                menuOpen ? "open" : ""
              }`}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`bb-mobile-panel ${
            menuOpen ? "bb-open" : ""
          }`}
        >
          <div className="bb-mobile-links" ref={mobileRef}>
            <a
              href="#collections"
              onClick={() => setMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#menswear"
              onClick={() => setMenuOpen(false)}
            >
              Menswear
            </a>
            <a
              href="#accessories"
              onClick={() => setMenuOpen(false)}
            >
              Accessories
            </a>
            <a
              href="#journal"
              onClick={() => setMenuOpen(false)}
            >
              Journal
            </a>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 12
              }}
            >
              {isAdmin && (
                <button
                  className="bb-ghost-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/admin");
                  }}
                >
                  Admin
                </button>
              )}

              {user ? (
                <button
                  className="bb-ghost-btn"
                  onClick={signOut}
                >
                  Sign out
                </button>
              ) : (
                <button
                  className="bb-ghost-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/signin");
                  }}
                >
                  Sign in
                </button>
              )}

              <button className="bb-primary-btn">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MINI CART */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}
