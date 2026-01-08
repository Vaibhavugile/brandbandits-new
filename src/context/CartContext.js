import React, {
  createContext,
  useContext,
  useReducer,
  useEffect
} from "react";

/* ------------------------------------------------------------
   CONTEXT
------------------------------------------------------------ */
const CartContext = createContext();

/* ------------------------------------------------------------
   REDUCER
------------------------------------------------------------ */
function cartReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { items: action.items || [] };

    case "ADD_ITEM": {
      const { item } = action;

      const idx = state.items.findIndex(
        (i) =>
          i.productId === item.productId &&
          i.variant?.id === item.variant?.id &&
          i.size === item.size
      );

      if (idx > -1) {
        const updated = [...state.items];
        updated[idx] = {
          ...updated[idx],
          qty: updated[idx].qty + 1
        };
        return { items: updated };
      }

      return { items: [...state.items, { ...item, qty: 1 }] };
    }

    case "UPDATE_QTY": {
      const updated = [...state.items];
      updated[action.index].qty = action.qty;
      return { items: updated.filter(i => i.qty > 0) };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (_, i) => i !== action.index
        )
      };

    case "CLEAR":
      return { items: [] };

    default:
      return state;
  }
}

/* ------------------------------------------------------------
   PROVIDER
------------------------------------------------------------ */
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: []
  });

  /* Load from localStorage */
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      dispatch({
        type: "INIT",
        items: JSON.parse(stored)
      });
    }
  }, []);

  /* Persist to localStorage */
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(state.items)
    );
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart: (item) =>
          dispatch({ type: "ADD_ITEM", item }),
        updateQty: (index, qty) =>
          dispatch({
            type: "UPDATE_QTY",
            index,
            qty
          }),
        removeFromCart: (index) =>
          dispatch({
            type: "REMOVE_ITEM",
            index
          }),
        clearCart: () =>
          dispatch({ type: "CLEAR" })
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ------------------------------------------------------------
   HOOK
------------------------------------------------------------ */
export function useCart() {
  return useContext(CartContext);
}
