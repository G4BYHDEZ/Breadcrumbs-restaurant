import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(food) {

  setCart((prev) => {

    const existing = prev.find(
      (item) => item.id === food.id
    );

    // Si ya existe, aumentar cantidad
    if (existing) {
      return prev.map((item) =>
        item.id === food.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    // Si no existe, agregarlo
    return [
      ...prev,
      {
        ...food,
        quantity: 1,
      },
      ];
    });
  }

  function removeFromCart(id) {

  setCart((prev) => {

    return prev
      .map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })

      // Eliminar solo si llega a 0
      .filter((item) => item.quantity > 0);
    });
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
  (acc, item) =>
    acc + item.price * item.quantity,
  0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}