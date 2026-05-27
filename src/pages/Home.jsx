import { Link } from "react-router-dom";
import backgroundImg from "../assets/restaurant-bg.jpg";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <section
        className="
          h-screen
          bg-cover
          bg-center
          relative
          flex
          justify-center
          items-center
        "
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >

        {/* Overlay oscuro */}
        <div
          className="
            absolute
            inset-0
            bg-black/50
          "
        />

        {/* Contenido */}
        <div
          className="
            relative
            z-10
            text-center
            text-white
          "
        >
          <h1 className="text-6xl font-bold mb-6">
            FoodExpress
          </h1>

          <p className="text-xl mb-8">
            ¡La mejor comida rápida de la ciudad!
          </p>

          <Link
            to="/menu"
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-6
              py-3
              rounded-xl
              text-xl
              transition
            "
          >
            Ver Menú
          </Link>
        </div>

      </section>
    </div>
  );
}