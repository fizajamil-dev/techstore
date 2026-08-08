import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Amazing products and super fast delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Tech Enthusiast",
    review:
      "Excellent customer support and premium product quality.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Gaming Customer",
    review:
      "Great shopping experience. I will definitely order again.",
  },
];

function Reviews() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white">
          What Our Customers Say
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          Thousands of happy customers trust TechStore for premium technology products.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-slate-300 leading-7">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {review.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;