import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500">
            TechStore
          </h2>

          <p className="text-slate-400 mt-5 leading-7">
            Discover premium laptops, accessories, gaming gear and the latest
            technology products at the best prices.
          </p>

          <div className="flex gap-4 mt-6 text-lg">

            <a
              href="#"
              className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-slate-900 p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-slate-900 p-3 rounded-full hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-slate-900 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <NavLink to="/" className="hover:text-blue-500">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className="hover:text-blue-500">
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="hover:text-blue-500">
                Cart
              </NavLink>
            </li>

            <li>
              <NavLink to="/login" className="hover:text-blue-500">
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/register" className="hover:text-blue-500">
                Register
              </NavLink>
            </li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>Laptops</li>
            <li>Keyboards</li>
            <li>Headphones</li>
            <li>Monitors</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-slate-400">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>support@techstore.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span>+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Faisalabad, Pakistan</span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
        © 2026 TechStore. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;