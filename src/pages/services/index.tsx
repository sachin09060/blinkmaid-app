import { HiHome, HiOutlineSparkles, HiUserGroup, HiCake } from "react-icons/hi";

const Services = () => {
  return (
    <div className="bg-white text-black">
      <section className="bg-gradient-to-r from-red-500 to-black text-white py-20 px-8 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Blinkmaid offers a wide range of professional maid services tailored to your needs.
        </p>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="shadow-lg hover:shadow-2xl transition rounded-2xl bg-white p-6 text-center">
            <HiHome className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">House Cleaning</h3>
            <p className="text-gray-600">
              Keep your home spotless with our trusted cleaning experts.
            </p>
          </div>

          {/* Service 2 */}
          <div className="shadow-lg hover:shadow-2xl transition rounded-2xl bg-white p-6 text-center">
            <HiOutlineSparkles className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
            <p className="text-gray-600">
              Thorough cleaning for kitchens, bathrooms, and hard-to-reach spaces.
            </p>
          </div>

          {/* Service 3 */}
          <div className="shadow-lg hover:shadow-2xl transition rounded-2xl bg-white p-6 text-center">
            <HiUserGroup className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Babysitting</h3>
            <p className="text-gray-600">
              Reliable and caring babysitters to look after your loved ones.
            </p>
          </div>

          {/* Service 4 */}
          <div className="shadow-lg hover:shadow-2xl transition rounded-2xl bg-white p-6 text-center">
            <HiCake className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cooking Assistance</h3>
            <p className="text-gray-600">
              Experienced cooks to prepare daily meals or special dishes for your family.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
