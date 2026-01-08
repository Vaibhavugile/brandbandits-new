import React, { useState, useEffect, useRef } from "react";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  // reveal animation when footer enters screen
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) el.classList.add("bb-footer-show");
      });
    });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed: " + email);
    setEmail("");
  };

  return (
    <footer className="bb-footer" ref={ref}>
      <div className="bb-footer-inner container">

        {/* BRAND */}
        <div className="bb-footer-col fade-item">
          <h3 className="bb-footer-logo">BrandBandits</h3>
          <p className="bb-footer-desc">
            Redefining premium menswear with timeless silhouettes,
            luxurious textures, and effortless comfort.
          </p>

          <div className="bb-footer-socials">
            <a href="#" className="bb-social-icon"><i className="ri-instagram-line"/></a>
            <a href="#" className="bb-social-icon"><i className="ri-twitter-x-line"/></a>
            <a href="#" className="bb-social-icon"><i className="ri-youtube-line"/></a>
            <a href="#" className="bb-social-icon"><i className="ri-facebook-fill"/></a>
          </div>
        </div>

        {/* SHOP */}
        <div className="bb-footer-col fade-item">
          <h4 className="bb-footer-title">Shop</h4>
          <ul className="bb-footer-links">
            <li><a href="#">Shirts</a></li>
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Hoodies</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="bb-footer-col fade-item">
          <h4 className="bb-footer-title">Support</h4>
          <ul className="bb-footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Terms & Policy</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="bb-footer-col fade-item">
          <h4 className="bb-footer-title">Stay Updated</h4>
          <p className="bb-footer-desc-small">Exclusive drops, private sales & early access.</p>

          <form className="bb-footer-form" onSubmit={handleSubmit}>
            <div className="bb-glow-wrap">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="bb-footer-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="bb-input-sheen"></div>
            </div>
            <button className="bb-footer-btn" type="submit">Join</button>
          </form>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="bb-footer-bottom">
        <p>© {new Date().getFullYear()} BrandBandits — Crafted for the Modern Man.</p>
      </div>
    </footer>
  );
}
