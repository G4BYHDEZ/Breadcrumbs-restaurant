import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FoodCard from "../components/Foodcard";

import foods from "../data/foods";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10 flex justify-center">
          Nuestro Menú
        </h1>

        <div
          className="grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3 gap-8"
        >
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/menu/pedidos"
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
            Ver Pedidos
          </Link>
        </div>
      </div>
    </div>
  );
}