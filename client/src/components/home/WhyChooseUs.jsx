import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description:
      "Free worldwide shipping on all orders over $100.",
    icon: <FaShippingFast size={40} />,
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "Safe and encrypted payments with trusted gateways.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Our expert team is always ready to help you anytime.",
    icon: <FaHeadset size={40} />,
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white">
          Why Choose TechStore?
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          We provide premium products with trusted service and fast delivery.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center text-blue-500 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;