import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";
import ProductForm from "./ProductForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  /* LOAD PRODUCTS */
  const loadProducts = async () => {
    setLoading(true);
    const snap = await getDocs(collection(db, "products"));
    setProducts(
      snap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  /* SAVE (ADD / UPDATE) */
  const handleSave = async (product) => {
    if (editing) {
      // UPDATE
      await updateDoc(doc(db, "products", editing.id), {
        ...product,
        updatedAt: serverTimestamp()
      });
    } else {
      // ADD
      await addDoc(collection(db, "products"), {
        ...product,
        createdAt: serverTimestamp()
      });
    }

    setShowForm(false);
    setEditing(null);
    loadProducts();
  };

  /* DELETE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await deleteDoc(doc(db, "products", id));
    loadProducts();
  };

  return (
    <div style={{ padding: 40 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>Products</h1>

        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "#0b1220",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          + Add Product
        </button>
      </div>

      {/* PRODUCT FORM */}
      {showForm && (
        <ProductForm
          initial={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* PRODUCT LIST */}
      <div style={{ marginTop: 32 }}>
        {loading && <p>Loading products…</p>}

        {!loading && products.length === 0 && (
          <p>No products added yet.</p>
        )}

        {!loading &&
          products.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 16px",
                borderRadius: 12,
                background: "#f9f9f7",
                marginBottom: 10
              }}
            >
              <div>
                <strong>{p.name}</strong>
                <div style={{ fontSize: 13, color: "#666" }}>
                  {p.category} · ₹{p.price}
                </div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => {
                    setEditing(p);
                    setShowForm(true);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  style={{
                    background: "#fee",
                    border: "1px solid #f99",
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
