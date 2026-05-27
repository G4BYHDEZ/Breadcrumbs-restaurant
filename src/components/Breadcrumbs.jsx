import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  // Nombres personalizados
  const names = {
    menu: "Menú",
    pedidos: "Pedidos",
    login: "Iniciar Sesión",
    register: "Registrarse",
    pago: "Pago"
  };

  return (
    <div className="px-10 py-4 bg-gray-100">
      <div className="flex items-center gap-2 text-gray-700">

        {/* Inicio */}
        <Link
          to="/"
          className="hover:text-orange-500"
        >
          Inicio
        </Link>

        {/* Rutas dinámicas */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames
            .slice(0, index + 1)
            .join("/")}`;

          const isLast =
            index === pathnames.length - 1;

          return (
            <div
              key={to}
              className="flex items-center gap-2"
            >
              <span>{">"}</span>

              {isLast ? (
                <span
                  className="
                    font-bold
                    text-orange-500
                  "
                >
                  {names[value] || value}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-orange-500"
                >
                  {names[value] || value}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}