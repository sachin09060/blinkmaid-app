import team1 from "./../../assets/team1.jpg"
import team2 from "./../../assets/team2.jpg"
import team3 from "./../../assets/team3.jpg"

const About = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20 px-8 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Blinkmaid is dedicated to connecting you with trusted, reliable, and
          experienced maids who make your home shine.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-8 md:px-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To simplify household management by providing top-quality,
            affordable, and verified domestic help at your fingertips.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be the most trusted and convenient platform for hiring household
            professionals, making life easier for every family.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all">
            <img
              src={team1}
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Aditi Sharma</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all">
            <img
              src={team2}
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Rahul Mehta</h3>
            <p className="text-gray-600">Operations Head</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all">
            <img
              src={team3}
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Sneha Kapoor</h3>
            <p className="text-gray-600">Customer Success</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
