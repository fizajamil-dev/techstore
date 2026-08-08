import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaKeyboard,
  FaHeadphones,
  FaDesktop,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Laptop",
    products: "120+ Products",
    icon: <FaLaptop size={45} />,
  },
  {
    id: 2,
    name: "Keyboard",
    products: "85+ Products",
    icon: <FaKeyboard size={45} />,
  },
  {
    id: 3,
    name: "Headphones",
    products: "95+ Products",
    icon: <FaHeadphones size={45} />,
  },
  {
    id: 4,
    name: "Monitor",
    products: "60+ Products",
    icon: <FaDesktop size={45} />,
  },
];

function Categories() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white">
          Shop by Category
        </h2>

        <p className="text-slate-400 text-center mt-4 mb-14">
          Find the latest technology products from your favorite category.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-center text-blue-500 mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {category.name}
              </h3>

              <p className="text-slate-400 mt-3">
                {category.products}
              </p>

              <Link
                to={`/products?category=${category.name}`}
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                Explore
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;