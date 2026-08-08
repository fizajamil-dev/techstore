import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);
 const [search, setSearch] = useState("");

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLink = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-slate-300 hover:text-blue-500 transition";

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-500 tracking-wide"
        >
          TechStore
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center bg-slate-900 rounded-xl px-4 py-3 w-[380px] border border-slate-800">

          <FaSearch className="text-slate-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px]">

          <li>
            <NavLink to="/" className={navLink}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={navLink}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart" className={navLink}>
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" className={navLink}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/register" className={navLink}>
              Register
            </NavLink>
          </li>

        </ul>
                {/* Right Icons */}
       <div className="flex items-center gap-5 text-xl text-white">

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            className="hidden md:flex hover:text-red-500 transition"
          >
            <FaHeart />
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative hover:text-blue-500 transition"
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* User */}
          <NavLink
            to="/login"
            className="hover:text-blue-500 transition"
          >
            <FaUser />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          {/* Mobile Search */}
          <div className="px-6 py-4">

            <div className="flex items-center bg-slate-800 rounded-lg px-4 py-3">

              <FaSearch className="text-slate-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-3 bg-transparent outline-none w-full text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          <div className="flex flex-col px-6 pb-6 space-y-5">

            <NavLink
              to="/"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Cart ({cartCount})
            </NavLink>

            <NavLink
              to="/login"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;