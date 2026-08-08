import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import OrderAPI from "../api/orderApi";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        user: user?.id,
        products: cart,
        shippingInfo: formData,
        subtotal,
        shipping,
        total,
      };

      const res = await OrderAPI.post("/place", orderData);

      alert(res.data.message);

      clearCart();

      navigate("/");
    } catch (error) {
  console.log(error);
  console.log(error.response?.data);

  alert(error.response?.data?.message || error.message);
}
  };

  return (
    <section className="bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Checkout
            </h1>

            <p className="text-slate-400 mt-2">
              Complete your order details below.
            </p>
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
          >
            <FaArrowLeft />
            Back to Cart
          </Link>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">
              Shipping Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                required
              />

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                  required
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                  required
                />

              </div>

              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Place Order
              </button>

            </form>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 h-fit sticky top-24">

            <h2 className="text-3xl text-white font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-white font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-slate-400">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-blue-500 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

            </div>

            <div className="border-t border-slate-700 my-8"></div>
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

            <p className="text-slate-400 text-sm mt-6">
              Your order will be securely processed after clicking
              <span className="text-white font-semibold">
                {" "}Place Order
              </span>.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;