import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cartDrawer.css";

export default function CartDrawer({ open, onClose }) {
  const { cart, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="cart-backdrop"
        onClick={onClose}
      />

      {/* DRAWER */}
      <aside className="cart-drawer">
        {/* HEADER */}
        <div className="cart-header">
          <h2>Shopping Bag</h2>
          <button
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* EMPTY */}
        {cart.length === 0 && (
          <div className="cart-empty">
            Your bag is currently empty.
          </div>
        )}

        {/* ITEMS */}
        {cart.length > 0 && (
          <div className="cart-items">
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="cart-info">
                  <div className="cart-name">
                    {item.name}
                  </div>

                  <div className="cart-meta">
                    {item.variant?.label}
                    {item.size && ` · ${item.size}`}
                  </div>

                  <div className="cart-price">
                    ₹{item.price}
                  </div>

                  <div className="cart-qty">
                    <button
                      onClick={() =>
                        updateQty(i, item.qty - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() =>
                        updateQty(i, item.qty + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(i)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <p className="cart-trust">
              Free shipping on orders over ₹4999 · Secure checkout
            </p>

            <div className="cart-summary">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <button
              className="cart-checkout"
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
