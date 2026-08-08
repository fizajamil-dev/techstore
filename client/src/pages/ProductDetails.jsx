import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center text-white text-3xl">
        Product Not Found
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <section className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Images */}
          <div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-2xl"
            />

            <div className="grid grid-cols-4 gap-4 mt-5">

              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={product.image}
                  alt={product.name}
                  className={`h-24 w-full object-cover rounded-xl cursor-pointer ${
                    item === 1 ? "border-2 border-blue-600" : ""
                  }`}
                />
              ))}

            </div>

          </div>

          {/* Product Information */}
          <div>

            <span className="text-blue-500 text-lg font-semibold">
              {product.brand}
            </span>

            <h1 className="text-5xl font-bold text-white mt-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-5">

              <FaStar className="text-yellow-400" />

              <span className="text-white">
                {product.rating} (245 Reviews)
              </span>

            </div>

            <div className="flex items-center gap-4 mt-6">

              <p className="text-4xl font-bold text-blue-500">
                ${product.price}
              </p>

              <p className="text-slate-500 line-through text-xl">
                ${product.oldPrice}
              </p>

            </div>

            <p className="text-slate-400 mt-8 leading-8">
              {product.description}
            </p>

            <div className="mt-10 space-y-3 text-slate-300">

              <p>• Premium Build Quality</p>
              <p>• 1 Year Official Warranty</p>
              <p>• Fast Delivery Available</p>
              <p>• Secure Online Payment</p>
              <p>• Easy Return Policy</p>

            </div>

            <div className="flex items-center gap-4 mt-10">

              <span className="text-white font-medium">
                Quantity
              </span>

              <div className="flex items-center bg-slate-900 rounded-lg overflow-hidden">

                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="px-5 py-3 text-white hover:bg-slate-800"
                >
                  -
                </button>

                <span className="px-6 text-white">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-white hover:bg-slate-800"
                >
                  +
                </button>

              </div>

            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-10">              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex justify-center items-center gap-2 transition"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-white text-black py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-slate-200 transition"
              >
                <FaBolt />
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;