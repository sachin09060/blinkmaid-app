// import { HiCheck } from "react-icons/hi";

// const services = [
//   {
//     category: "Baby Sitters",
//     options: ["Babies?", "Age of Baby?"],
//     pricing: [
//       { hours: "6 Hours", price: 14000 },
//       { hours: "8 Hours", price: 16000 },
//       { hours: "12 Hours", price: 20000 },
//       { hours: "24/7 Live In", price: 23000 },
//     ],
//   },
//   {
//     category: "Parent Care",
//     options: ["Male/Female Parent", "Walkable/Bedridden", "Parent Age"],
//     pricing: [
//       { hours: "6 Hours", price: 14000 },
//       { hours: "8 Hours", price: 16000 },
//       { hours: "12 Hours", price: 20000 },
//       { hours: "24/7 Live In", price: 23000 },
//     ],
//   },
//   {
//     category: "Patient Care (Trained Nurse)",
//     options: ["M/F", "Age of Patient"],
//     pricing: [
//       { hours: "6 Hours", price: 15000 },
//       { hours: "8 Hours", price: 18000 },
//       { hours: "12 Hours", price: 23000 },
//       { hours: "24/7 Live In", price: 26000 },
//     ],
//   },
//   {
//     category: "Japa Maid (Mother & Baby)",
//     options: ["DOB of Baby", "Only Baby & Mother"],
//     pricing: [
//       { hours: "6 Hours", price: 15000 },
//       { hours: "8 Hours", price: 17000 },
//       { hours: "12 Hours", price: 21000 },
//       { hours: "24/7 Live In", price: 24000 },
//     ],
//   },
//   {
//     category: "Cooking",
//     options: ["North Indian / South Indian / Mix", "People at Home"],
//     pricing: [
//       { hours: "2 Hours", price: 3500 },
//       { hours: "4 Hours", price: 6000 },
//       { hours: "6 Hours", price: 9000 },
//       { hours: "8 Hours", price: 13000 },
//     ],
//   },
//   {
//     category: "Cleaning",
//     options: ["BHK?", "Mopping", "Dish Washing", "Kitchen", "Cloth Washing"],
//     pricing: [
//       { hours: "2 Hours", price: 3500 },
//       { hours: "4 Hours", price: 6000 },
//       { hours: "6 Hours", price: 8500 },
//       { hours: "8 Hours", price: 11500 },
//     ],
//   },
//   {
//     category: "Domestic Help",
//     options: ["BHK?", "Dusting", "Packing", "Moving"],
//     pricing: [
//       { hours: "2 Hours", price: 3500 },
//       { hours: "4 Hours", price: 6000 },
//       { hours: "6 Hours", price: 8500 },
//       { hours: "8 Hours", price: 11500 },
//     ],
//   },
//   {
//     category: "All Rounders (Select 3 Services)",
//     options: [
//       "Cooking",
//       "Cleaning",
//       "Dusting/Packing",
//       "Kitchen Work",
//       "Bathroom Cleaning",
//     ],
//     pricing: [
//       { hours: "6 Hours", price: 16000 },
//       { hours: "8 Hours", price: 19000 },
//       { hours: "12 Hours", price: 24000 },
//       { hours: "24/7 Hours", price: 27000 },
//     ],
//   },
// ];

// const subscriptions = [
//   { duration: "3 Months", price: 6000 },
//   { duration: "6 Months", price: 12000 },
//   { duration: "1 Year", price: 20000 },
// ];

// const Pricing = () => {
//   return (
//     <div className="bg-gray-50 w-[99vw]">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-red-500 to-black text-white py-16 text-center px-6 md:px-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">BlinkMaid Pricing</h1>
//         <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
//           Choose the right maid service for your home. Flexible hours, trained staff, and subscription options available.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="py-12 px-6 md:px-20">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div key={service.category} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
//               <h3 className="text-xl font-bold mb-4">{service.category}</h3>
//               <ul className="mb-4 space-y-2">
//                 {service.options.map((opt, i) => (
//                   <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
//                     <HiCheck className="text-red-600 h-5 w-5" />
//                     <span>{opt}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="grid grid-cols-2 gap-2">
//                 {service.pricing.map((p, i) => (
//                   <div key={i} className="bg-red-50 rounded-lg p-3 text-center">
//                     <p className="font-semibold">{p.hours}</p>
//                     <p className="text-red-600 font-bold">₹{p.price.toLocaleString()}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Subscription Section */}
//       <section className="bg-gradient-to-r from-red-500 to-black text-white py-12 px-6 md:px-20">
//         <h2 className="text-3xl font-bold mb-8 text-center">Subscription Plans</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {subscriptions.map((sub) => (
//             <div key={sub.duration} className="bg-white text-red-600 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
//               <h3 className="text-xl font-bold mb-2">{sub.duration}</h3>
//               <p className="text-2xl font-extrabold mb-4">₹{sub.price.toLocaleString()}</p>
//               <p className="text-sm text-gray-600">Unlimited replacements, trained staff, systematic handling.</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;

import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import data from "../../utils/pricing.json";

// -------------------- Types --------------------
type CityKey = keyof typeof data.cityImages;

type ServiceDetail = {
  OPTIONS?: string;
  Description?: string;
  [hour: string]: string | undefined;
};

// Only service entries (exclude 'Note')
type ServicesSet = {
  [serviceName: string]: ServiceDetail;
};

const Pricing = () => {
  // -------------------- State --------------------
  const [selectedCity, setSelectedCity] = useState<CityKey | "">("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // -------------------- Determine services --------------------
  const serviceSetKey: "ServiceSet1" | "ServiceSet2" = "ServiceSet2";
  const services: ServicesSet = selectedCity
    ? (Object.fromEntries(
        Object.entries(data.services[serviceSetKey]).filter(
          ([key, val]) => key !== "Note" && typeof val === "object"
        )
      ) as ServicesSet)
    : {};

  // -------------------- Toggle service selection --------------------
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // -------------------- Subscription calculation --------------------
  const subscriptionPrice: Record<string, number> = Object.entries(
    data.subscriptionModel.pricing
  ).reduce((acc, [duration, price]) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ""));
    return {
      ...acc,
      [duration]: numericPrice * (selectedServices.length || 1),
    };
  }, {});

  // -------------------- Render --------------------
  return (
    <div className="bg-gray-50 w-[99vw]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-black text-white py-16 text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BlinkMaid Pricing
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
          Choose the right maid service for your home. Flexible hours, trained
          staff, and subscription options available.
        </p>
      </section>

      {/* City Selection */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Select Your City</h2>
        <div className="w-full flex justify-evenly items-center flex-wrap gap-4">
          {Object.entries(data.cities).map(([, cities]) =>
            cities.map((city) => {
              const cityKey = city as CityKey;
              return (
                <div
                  key={city}
                  className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
                  onClick={() => setSelectedCity(cityKey)}
                >
                  <div
                    className={`
      w-20 h-20 rounded-full overflow-hidden border-2 
      ${
        selectedCity === cityKey
          ? "border-red-500 scale-110 shadow-lg"
          : "border-gray-300 scale-100"
      } 
      transform transition-all duration-300
    `}
                  >
                    <img
                      src={data.cityImages[cityKey]}
                      alt={cityKey}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium text-center">
                    {city}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Services Section */}
      {selectedCity && (
        <section className="py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Services in {selectedCity}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(services).map(([category, serviceDetails]) => {
              const options = serviceDetails.OPTIONS?.split(",") || [];
              const pricing = Object.entries(serviceDetails)
                .filter(([key]) => key !== "OPTIONS" && key !== "Description")
                .map(([hours, price]) => ({ hours, price }));

              return (
                <div
                  key={category}
                  className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer ${
                    selectedServices.includes(category)
                      ? "border-2 border-red-500"
                      : ""
                  }`}
                  onClick={() => toggleService(category)}
                >
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  {serviceDetails.Description && (
                    <p className="mb-4 text-sm text-gray-600">
                      {serviceDetails.Description}
                    </p>
                  )}
                  <ul className="mb-4 space-y-2">
                    {options.map((opt, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <HiCheck className="text-red-600 h-5 w-5" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-2">
                    {pricing.map((p, i) => (
                      <div
                        key={i}
                        className="bg-red-50 rounded-lg p-3 text-center"
                      >
                        <p className="font-semibold">{p.hours}</p>
                        <p className="text-red-600 font-bold">
                          ₹
                          {p.price
                            ?.replace(/[^0-9]/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Subscription Section */}
      {selectedServices.length > 0 && (
        <section className="bg-gradient-to-r from-red-500 to-black text-white py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(subscriptionPrice).map(([duration, price]) => (
              <div
                key={duration}
                className="bg-white text-red-600 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition"
              >
                <h3 className="text-xl font-bold mb-2">{duration}</h3>
                <p className="text-2xl font-extrabold mb-4">
                  ₹{price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  {data.subscriptionModel.benefits.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Pricing;
