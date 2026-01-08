import React, { useState, useRef, useEffect } from "react";
import "./swatch.css";

/*
 Props:
  - variants: [{id,label,hex,image}]
  - selectedId
  - onSelect(variant)
  - maxVisible (default 5)
*/

export default function SwatchRow({
  variants = [],
  selectedId = null,
  onSelect = () => {},
  maxVisible = 5,
}) {
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef(null);

  const visible = variants.slice(0, maxVisible);
  const overflow = Math.max(0, variants.length - visible.length);

  /* Close popover on outside click */
  useEffect(() => {
    function handleDoc(e) {
      if (!expanded) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleDoc);
    return () => document.removeEventListener("mousedown", handleDoc);
  }, [expanded]);

  return (
    <div className="swatch-row" aria-label="Color options">
      {/* Visible swatches */}
      {visible.map((v) => (
        <button
          key={v.id}
          className={`swatch-btn ${selectedId === v.id ? "selected" : ""}`}
          style={{
            background: v.hex
              ? v.hex
              : v.image
              ? `url(${v.image}) center / cover no-repeat`
              : "#e5e7eb",
          }}
          aria-pressed={selectedId === v.id}
          title={v.label}
          onClick={() => onSelect(v)}
        />
      ))}

      {/* Overflow */}
      {overflow > 0 && !expanded && (
        <button
          className="swatch-more"
          aria-haspopup="dialog"
          aria-expanded="false"
          onClick={() => setExpanded(true)}
        >
          +{overflow}
        </button>
      )}

      {/* Expanded popover */}
      {expanded && (
        <div
          className="swatch-expanded"
          role="dialog"
          aria-label="All color options"
          ref={panelRef}
        >
          <div className="swatch-expanded-grid">
            {variants.map((v) => (
              <button
                key={v.id}
                className={`swatch-btn large ${
                  selectedId === v.id ? "selected" : ""
                }`}
                style={{
                  background: v.hex
                    ? v.hex
                    : v.image
                    ? `url(${v.image}) center / cover no-repeat`
                    : "#e5e7eb",
                }}
                onClick={() => {
                  onSelect(v);
                  setExpanded(false);
                }}
              >
                <span className="swatch-expanded-label">{v.label}</span>
              </button>
            ))}
          </div>

          <div className="swatch-expanded-actions">
            <button
              className="swatch-close"
              onClick={() => setExpanded(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
