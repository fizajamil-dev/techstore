function Newsletter() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl">

          <h2 className="text-4xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-blue-100 mt-5 text-lg">
            Be the first to know about new arrivals, exclusive offers, and
            special discounts.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl bg-white text-slate-900 outline-none"
            />

            <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;