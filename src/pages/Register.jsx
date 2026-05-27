import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAuth } from "../components/Autenticacion";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Register() {

  const navigate = useNavigate();

  const { register } = useAuth();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleRegister(e) {
    e.preventDefault();

    const success = register(
      username,
      email,
      password
    );

    if (success) {
      alert("Cuenta creada");

      navigate("/login");
    } else {
      alert("Ese correo ya existe");
    }
  }

  return (
    <div>
      <Navbar />
      <Breadcrumbs/>
      <div className="flex justify-center mt-20">

        <form
          onSubmit={handleRegister}
          className="
            bg-white
            shadow-xl
            p-10
            rounded-2xl
            w-[400px]
          "
        >
          <h1 className="text-3xl font-bold mb-6">
            Registro
          </h1>

          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-4
            "
          />

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-4
            "
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-6
            "
          />

          <button
            className="
              w-full
              bg-orange-500
              text-white
              py-3
              rounded-lg
            "
          >
            Registrarse
          </button>
        </form>

      </div>
    </div>
  );
}