import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            New Collection 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
            Upgrade Your
            <span className="text-blue-500"> Tech Lifestyle</span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            Explore premium laptops, gaming accessories, headphones,
            keyboards and monitors with unbeatable prices and fast delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-semibold text-center"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-slate-600 hover:bg-slate-800 transition px-8 py-4 rounded-lg text-center"
            >
              Explore Products
            </Link>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-slate-400">Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-slate-400">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">4.9★</h2>
              <p className="text-slate-400">Rating</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">

  <img
    src={heroImage}
    alt="TechStore Hero"
    className="w-full h-[500px] object-cover"
  />

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;