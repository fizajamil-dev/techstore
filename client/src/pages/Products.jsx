import { useState, useMemo, useContext } from "react";
import { FaSearch, FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function Products() {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("Newest");

  const categories = [
    "All Products",
    "Laptop",
    "Keyboard",
    "Headphones",
    "Monitor",
    "Accessories",
    "Tablet",
    "Wearables",
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Category
    if (category !== "All Products") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    switch (sortBy) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "Top Rated":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [search, category, sortBy]);

  return (
    <section className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            Our Products
          </h1>

          <p className="text-slate-400 mt-4">
            Browse the latest technology products.
          </p>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">

          <div className="flex items-center bg-slate-900 rounded-xl px-4 py-3 w-full md:w-96">

            <FaSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none ml-3 text-white w-full"
            />

          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-900 text-white rounded-xl px-5 py-3"
          >
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="bg-slate-900 rounded-2xl p-6 h-fit">

            <h2 className="text-white text-xl font-semibold mb-6">
              Categories
            </h2>

            <ul className="space-y-3">

              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`cursor-pointer rounded-lg px-3 py-2 transition ${
                    category === item
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-blue-500"
                  }`}
                >
                  {item}
                </li>
              ))}

            </ul>

          </aside>

          {/* Products Grid */}

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                          {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-cover"
                    />

                    <div className="p-6">

                      <span className="text-blue-500 text-sm">
                        {product.category}
                      </span>

                      <h2 className="text-white text-xl font-semibold mt-2">
                        {product.name}
                      </h2>

                      <div className="flex items-center gap-2 text-yellow-400 mt-3">
                        <FaStar />

                        <span className="text-white">
                          {product.rating}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mt-4">

                        <p className="text-2xl font-bold text-blue-500">
                          ${product.price}
                        </p>

                        <p className="text-slate-500 line-through">
                          ${product.oldPrice}
                        </p>

                      </div>

                      <div className="flex gap-3 mt-6">

                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
                        >
                          <FaShoppingCart />
                          Add
                        </button>

                        <Link
                          to={`/products/${product.id}`}
                          className="flex-1 border border-slate-700 text-white py-3 rounded-xl hover:bg-slate-800 flex items-center justify-center transition"
                        >
                          Details
                        </Link>

                      </div>

                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">

                  <h2 className="text-3xl font-bold text-white">
                    No Products Found
                  </h2>

                  <p className="text-slate-400 mt-3">
                    Try another search or category.
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Products;