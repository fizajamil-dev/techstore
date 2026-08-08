import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";

function FeaturedProducts() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white">
          Featured Products
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          Discover our best-selling technology products.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Product Image */}
              <div className="relative">

                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </Link>

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {product.badge}
                </span>

                <button className="absolute top-4 right-4 bg-white p-3 rounded-full hover:bg-red-500 hover:text-white transition">
                  <FaHeart />
                </button>

              </div>

              {/* Product Info */}
              <div className="p-6">

                <div className="flex items-center gap-2 text-yellow-400">

                  <FaStar />

                  <span className="text-white">
                    {product.rating}
                  </span>

                </div>

                <Link to={`/products/${product.id}`}>
                  <h3 className="text-white text-xl font-semibold mt-4 hover:text-blue-500 transition">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-blue-500 text-2xl font-bold">
                    {product.price}
                  </span>

                  <span className="line-through text-slate-500">
                    {product.oldPrice}
                  </span>

                </div>
                                <button
                  onClick={() => addToCart(product)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;