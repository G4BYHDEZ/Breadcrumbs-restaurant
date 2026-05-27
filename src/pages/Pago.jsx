import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import { useCart } from "../components/CartContext";

export default function Pago() {

  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiration, setExpiration] =
    useState("");

  const [cvv, setCvv] = useState("");

  function handlePayment(e) {
  e.preventDefault();

  alert("Pago aprobado");

  clearCart();

  // Redireccionar al inicio
  navigate("/menu");
}

  return (
    <div>

      <Navbar />
      <Breadcrumbs />

      <div
        className="
          max-w-3xl
          mx-auto
          p-10
        "
      >

        {/* Resumen */}
        <div
          className="
            bg-gray-100
            p-6
            rounded-2xl
            mb-8
          "
        >
          <h2 className="text-2xl font-bold">
            Total a pagar: ${total}
          </h2>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handlePayment}
          className="
            bg-white
            shadow-xl
            rounded-2xl
            p-8
            space-y-5
          "
        >

          <h2 className="text-3xl font-bold">
            Información de Pago
          </h2>

          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          {/* Apellido */}
          <input
            type="text"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) =>
              setLastname(e.target.value)
            }
            required
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          {/* Dirección */}
          <input
            type="text"
            placeholder="Dirección"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            required
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          {/* Tarjeta */}
          <input
            type="text"
            placeholder="Número de tarjeta"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value)
            }
            maxLength={16}
            required
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          <div className="flex gap-4">

            {/* Fecha */}
            <input
              type="text"
              placeholder="MM/YY"
              value={expiration}
              onChange={(e) =>
                setExpiration(e.target.value)
              }
              required
              className="
                w-1/2
                border
                p-3
                rounded-lg
              "
            />

            {/* CVV */}
            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value)
              }
              maxLength={3}
              required
              className="
                w-1/2
                border
                p-3
                rounded-lg
              "
            />

          </div>

          {/* Botón */}
          <button
            type="submit"
            className="
              w-full
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
            Confirmar Pago
          </button>

        </form>

      </div>
    </div>
  );
}