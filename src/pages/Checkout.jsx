import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import { useCart } from "../components/CartContext";

export default function Checkout() {

  const {
    cart,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  return (
    <div>

      <Navbar />
      <Breadcrumbs />

      <div className="p-10">

        <h1
          className="
            text-4xl
            font-bold
            mb-10
            text-center
          "
        >
          Tus Pedidos
        </h1>

        {cart.length === 0 ? (

          <div
            className="
              bg-gray-100
              p-6
              rounded-xl
              text-center
            "
          >
            <p>No hay productos agregados.</p>
          </div>

        ) : (

          <div className="flex gap-8">

            {/* IZQUIERDA - PRODUCTOS */}
            <div className="w-2/3 space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="
                    flex
                    justify-between
                    items-center
                    bg-white
                    shadow-md
                    rounded-2xl
                    p-6
                  "
                >

                  <div>

                    <h2 className="font-bold text-2xl">
                      {item.name} x{item.quantity}
                    </h2>

                    <p
                      className="
                        text-gray-600
                        mt-2
                      "
                    >
                      ${item.price * item.quantity}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-5
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Eliminar
                  </button>

                </div>

              ))}

            </div>

            {/* DERECHA - RESUMEN */}
            <div className="w-1/3">

              <div
                className="
                  bg-gray-100
                  rounded-2xl
                  p-6
                  shadow-lg
                  sticky
                  top-10
                "
              >

                <h2
                  className="
                    text-3xl
                    font-bold
                    mb-6
                  "
                >
                  Resumen
                </h2>

                <div className="space-y-4">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="
                        flex
                        justify-between
                      "
                    >

                      <span>
                        {item.name} x{item.quantity}
                      </span>

                      <span>
                        ${item.price * item.quantity}
                      </span>

                    </div>

                  ))}

                </div>

                <hr className="my-6" />

                <div
                  className="
                    flex
                    justify-between
                    text-2xl
                    font-bold
                  "
                >

                  <span>Total</span>

                  <span>${total}</span>

                </div>

                <div className="mt-6 space-y-4">

                  <Link
                    to="/menu/pedidos/pago"
                    className="
                      block
                      text-center
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      py-4
                      rounded-xl
                      text-xl
                      font-bold
                      transition
                    "
                  >
                    Proceder al Pago
                  </Link>

                  <button
                    onClick={clearCart}
                    className="
                      w-full
                      bg-gray-500
                      hover:bg-gray-600
                      text-white
                      py-4
                      rounded-xl
                      text-xl
                      font-bold
                      transition
                    "
                  >
                    Vaciar carrito
                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}