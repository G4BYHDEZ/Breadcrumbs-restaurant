import { useState } from "react";
import { useCart } from "./CartContext";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  const [message, setMessage] = useState(false);

  function handleAddToCart() {
    addToCart(food);

    // Mostrar mensaje en pantalla
    setMessage(true);

    // Ocultarlo después de 2 segundos
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {food.name}
        </h2>

        <p className="text-orange-500 text-lg font-semibold">
          ${food.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="
            mt-4
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-4
            py-2
            rounded-lg
            w-full
          "
        >
          Agregar al carrito
        </button>

        {/* MENSAJE EN PANTALLA */}
        {message && (
          <div
            className="
              mt-3
              bg-green-100
              border
              border-green-500
              text-green-700
              px-4
              py-2
              rounded-lg
              text-center
              font-semibold
            "
          >
            ✓ Producto agregado al carrito
          </div>
        )}

      </div>
    </div>
  );
}