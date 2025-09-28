import { HiCheck } from "react-icons/hi";

const plans = [
  {
    name: "Basic",
    price: "₹999 / month",
    features: [
      "Part-time Maid (2 hrs/day)",
      "Basic Cleaning",
      "Kitchen & Living Area",
      "Verified Professionals",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹1,999 / month",
    features: [
      "Full-time Maid (6 hrs/day)",
      "Deep Cleaning",
      "Laundry & Cooking Help",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹2,999 / month",
    features: [
      "Live-in Maid (24/7)",
      "Full Household Management",
      "Babysitting & Elder Care",
      "Dedicated Support Manager",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-white text-black w-[99vw]">
      <section className="bg-gradient-to-r from-red-500 to-black text-white py-20 px-8 md:px-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Pricing Plans
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Choose a plan that suits your needs. Blinkmaid offers flexible pricing
          with no hidden costs.
        </p>
      </section>
      <section className="w-full py-12 px-6 sm:px-12 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-lg p-6 sm:p-8 text-center transition transform hover:shadow-2xl hover:scale-105 ${
                plan.highlight ? "bg-red-600 text-white" : "bg-white text-black"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4">
                {plan.name}
              </h2>
              <p className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-6">
                {plan.price}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center space-x-2"
                  >
                    <HiCheck
                      className={`h-5 w-5 ${
                        plan.highlight ? "text-white" : "text-red-600"
                      }`}
                    />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-white text-red-600 hover:bg-gray-200"
                    : "bg-red-600 text-black hover:bg-red-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
