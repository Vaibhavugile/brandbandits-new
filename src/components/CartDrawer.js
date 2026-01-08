import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cartDrawer.css";

export default function CartDrawer({ open, onClose }) {
  const { cart, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!open) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {/* BACKDROP (click outside) */}
      <div className="mini-cart-backdrop" onClick={onClose} />

      {/* MINI CART */}
      <div className="mini-cart">
        {/* HEADER */}
        <div className="mini-cart-header">
          <span>Shopping Bag</span>
          <button onClick={onClose}>×</button>
        </div>

        {/* EMPTY */}
        {cart.length === 0 && (
          <div className="mini-cart-empty">
            Your bag is empty
          </div>
        )}

        {/* ITEMS */}
        {cart.length > 0 && (
          <div className="mini-cart-items">
            {cart.map((item, i) => (
              <div key={i} className="mini-cart-item">
                <img src={item.image} alt={item.name} />

                <div className="mini-cart-info">
                  <div className="mini-cart-name">
                    {item.name}
                  </div>
                  <div className="mini-cart-meta">
                    {item.variant?.label}
                    {item.size && ` · ${item.size}`}
                  </div>

                  <div className="mini-cart-bottom">
                    <span className="mini-cart-price">
                      ₹{item.price}
                    </span>

                    <div className="mini-cart-qty">
                      <button onClick={() => updateQty(i, item.qty - 1)}>
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(i, item.qty + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="mini-cart-remove"
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
          <div className="mini-cart-footer">
            <div className="mini-cart-subtotal">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <button
              className="mini-cart-checkout"
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
