import { Link } from "react-router-dom";

import { useAuth } from "./Autenticacion";

export default function Navbar() {

  const { user, logout } = useAuth();

  return (
    <nav
      className="
        flex
        justify-between
        items-center
        p-5
        bg-black
        text-white
      "
    >
      <h1 className="text-2xl font-bold">
        FoodExpress
      </h1>

      <div className="flex gap-4 items-center">

        {user ? (
          <>
            <span>
              Hola, {user.username}
            </span>

            <button
              onClick={logout}
              className="
                bg-red-500
                px-4
                py-2
                rounded-lg
              "
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="
                bg-orange-500
                px-4
                py-2
                rounded-lg
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                border
                border-white
                px-4
                py-2
                rounded-lg
              "
            >
              Registro
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}