import { useState } from "react";
import "./productForm.css";
import { uploadImage } from "../utils/uploadImage";

export default function ProductForm({ onClose, onSave, initial }) {
  const [product, setProduct] = useState(
    initial || {
      name: "",
      tagline: "",
      description: "",
      category: "Shirts",
      price: "",
      compareAtPrice: "",
      images: [],
      variants: [],
      sizes: [],
      featured: false,
      tags: []
    }
  );

  const [uploading, setUploading] = useState(false);

  const update = (key, value) =>
    setProduct((p) => ({ ...p, [key]: value }));

  /* --------------------------------------------------
     IMAGE UPLOAD (FIREBASE STORAGE)
  -------------------------------------------------- */
  const handleImageUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      update("images", [...product.images, url]);
    } catch (err) {
      console.error("Image upload failed", err);
    }
    setUploading(false);
  };

  const removeImage = (i) => {
    update(
      "images",
      product.images.filter((_, idx) => idx !== i)
    );
  };

  /* --------------------------------------------------
     VARIANTS
  -------------------------------------------------- */
  const addVariant = () => {
    update("variants", [
      ...product.variants,
      {
        id: "",
        label: "",
        hex: "",
        image: "",
        sku: "",
        stock: 0
      }
    ]);
  };

  const updateVariant = (i, key, value) => {
    const updated = [...product.variants];
    updated[i][key] = value;
    update("variants", updated);
  };

  const removeVariant = (i) => {
    update(
      "variants",
      product.variants.filter((_, idx) => idx !== i)
    );
  };

  return (
    <div className="pf-overlay">
      <div className="pf-card">
        {/* HEADER */}
        <header className="pf-header">
          <h2>{initial ? "Edit Product" : "Add Product"}</h2>
          <button onClick={onClose}>×</button>
        </header>

        {/* BASIC INFO */}
        <section className="pf-section">
          <h3>Basic Information</h3>

          <input
            placeholder="Product name"
            value={product.name}
            onChange={(e) => update("name", e.target.value)}
          />

          <input
            placeholder="Tagline"
            value={product.tagline}
            onChange={(e) => update("tagline", e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              update("description", e.target.value)
            }
          />
        </section>

        {/* CATEGORY & PRICING */}
        <section className="pf-section">
          <h3>Category & Pricing</h3>

          <select
            value={product.category}
            onChange={(e) =>
              update("category", e.target.value)
            }
          >
            <option>Shirts</option>
            <option>Pants</option>
            <option>Hoodies</option>
            <option>Jackets</option>
            <option>Accessories</option>
            <option>Perfumes</option>
          </select>

          <div className="pf-grid">
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) =>
                update("price", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Compare at price"
              value={product.compareAtPrice}
              onChange={(e) =>
                update(
                  "compareAtPrice",
                  Number(e.target.value)
                )
              }
            />
          </div>
        </section>

        {/* PRODUCT IMAGES */}
        <section className="pf-section">
          <h3>Product Images</h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleImageUpload(e.target.files[0])
            }
          />

          {uploading && (
            <p style={{ fontSize: 13 }}>Uploading…</p>
          )}

          <div className="pf-images">
            {product.images.map((img, i) => (
              <div key={i} className="pf-img">
                <img src={img} alt="" />
                <button onClick={() => removeImage(i)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* VARIANTS */}
        <section className="pf-section">
          <h3>Variants</h3>

          {product.variants.map((v, i) => (
            <div className="pf-variant" key={i}>
              <input
                placeholder="ID (navy)"
                value={v.id}
                onChange={(e) =>
                  updateVariant(i, "id", e.target.value)
                }
              />
              <input
                placeholder="Label (Navy)"
                value={v.label}
                onChange={(e) =>
                  updateVariant(i, "label", e.target.value)
                }
              />
              <input
                type="color"
                value={v.hex}
                onChange={(e) =>
                  updateVariant(i, "hex", e.target.value)
                }
              />
              <input
                placeholder="Variant Image URL"
                value={v.image}
                onChange={(e) =>
                  updateVariant(i, "image", e.target.value)
                }
              />
              <input
                placeholder="SKU"
                value={v.sku}
                onChange={(e) =>
                  updateVariant(i, "sku", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Stock"
                value={v.stock}
                onChange={(e) =>
                  updateVariant(
                    i,
                    "stock",
                    Number(e.target.value)
                  )
                }
              />

              <button
                className="pf-remove"
                onClick={() => removeVariant(i)}
              >
                Remove
              </button>
            </div>
          ))}

          <button className="pf-add" onClick={addVariant}>
            + Add Variant
          </button>
        </section>

        {/* ACTIONS */}
        <footer className="pf-footer">
          <button className="pf-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="pf-save"
            onClick={() => onSave(product)}
          >
            Save Product
          </button>
        </footer>
      </div>
    </div>
  );
}
