import { useContext } from "react";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <section className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Shopping Cart
            </h1>

            <p className="text-slate-400 mt-2">
              Review your selected products.
            </p>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cart.length === 0 ? (
              <div className="bg-slate-900 rounded-2xl p-10 text-center">

                <h2 className="text-3xl font-bold text-white">
                  Your Cart is Empty
                </h2>

                <p className="text-slate-400 mt-4">
                  Add some products to continue shopping.
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  Shop Now
                </Link>

              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900 rounded-2xl p-5 flex flex-col md:flex-row gap-6 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-36 object-cover rounded-xl"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl text-white font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-blue-500 text-xl mt-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-5">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-slate-800 text-white w-10 h-10 rounded-lg hover:bg-slate-700"
                      >
                        -
                      </button>

                      <span className="text-white text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-slate-800 text-white w-10 h-10 rounded-lg hover:bg-slate-700"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 text-2xl"
                  >
                    <FaTrash />
                  </button>

                </div>
              ))
            )}

          </div>
                    {/* Order Summary */}
          <div className="bg-slate-900 rounded-2xl p-8 h-fit sticky top-24">

            <h2 className="text-3xl text-white font-bold mb-8">
              Order Summary
            </h2>

            <div className="flex justify-between text-slate-300 mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-300 mb-4">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="border-t border-slate-700 my-6"></div>

            <div className="flex justify-between text-white text-2xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
  to="/checkout"
  className={`block w-full mt-8 py-4 rounded-xl font-semibold text-center transition ${
    cart.length === 0
      ? "pointer-events-none bg-slate-700 text-slate-400"
      : "bg-blue-600 hover:bg-blue-700 text-white"
  }`}
>
  Proceed to Checkout
</Link>

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cart;