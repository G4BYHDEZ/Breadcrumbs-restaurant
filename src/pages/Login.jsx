import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAuth } from "../components/Autenticacion";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div>
      <Navbar />
      <Breadcrumbs/>
      <div className="flex justify-center mt-20">

        <form
          onSubmit={handleLogin}
          className="
            bg-white
            shadow-xl
            p-10
            rounded-2xl
            w-[400px]
          "
        >
          <h1 className="text-3xl font-bold mb-6">
            Iniciar Sesión
          </h1>

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
              mb-4
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
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}