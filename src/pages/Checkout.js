import React from "react";
import { useCart } from "../context/CartContext";
import "./checkout.css";

export default function Checkout() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0; // flat example
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          Your cart is empty.
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        {/* LEFT — FUTURE FORM */}
        <section className="checkout-left">
          <h2>Checkout</h2>
          <p style={{ marginTop: 8, color: "#6b7280" }}>
            Shipping & payment will be added next.
          </p>
        </section>

        {/* RIGHT — ORDER SUMMARY */}
        <aside className="checkout-summary">
          <h3>Order Summary</h3>

          {cart.map((item, i) => (
            <div key={i} className="checkout-item">
              <img src={item.image} alt="" />

              <div className="checkout-item-info">
                <div className="checkout-item-name">
                  {item.name}
                </div>

                <div className="checkout-item-meta">
                  {item.variant?.label}
                  {item.size && ` · ${item.size}`}
                </div>

                <div className="checkout-item-meta">
                  Qty: {item.qty}
                </div>
              </div>

              <div className="checkout-item-price">
                ₹{item.price * item.qty}
              </div>
            </div>
          ))}

          {/* TOTALS */}
          <div className="checkout-totals">
            <div className="checkout-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="checkout-row">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <div className="checkout-row checkout-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="checkout-btn">
            Proceed to payment
          </button>
        </aside>
      </div>
    </main>
  );
}
