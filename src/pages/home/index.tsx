import {
  HiShieldCheck,
  HiClock,
  HiUsers,
  HiStar,
  HiPhone,
} from "react-icons/hi";
import maid1 from "../../assets/maid.jpg";
import maid2 from "../../assets/maid2.jpg";
import maid3 from "../../assets/maid3.jpg";
import maid4 from "../../assets/maid4.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const timer = setTimeout(() => setAnimate(true), 100); // trigger animation after mount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full min-h-full overflow-x-hidden text-white">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-500 to-black text-white">
        {/* Floating Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-12 h-12 bg-white/10 rounded-full top-2 left-8 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-24 h-24 bg-white/10 rounded-full top-10 left-2 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-20 h-20 bg-white/10 rounded-full bottom-20 right-10 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute w-16 h-16 bg-white/15 rounded-full top-1/2 left-1/4 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-20 h-20 bg-white/25 rounded-full bottom-1/3 right-[36%] animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1600px] w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 my-4 sm:my-6 text-white border border-white/30">
              <HiStar className="w-5 h-5 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium">
                Trusted by 10,000+ families
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6">
              Hire Verified &{" "}
              <span className="block gradient-accent bg-clip-text text-[#FAEB92] animate-gradient">
                Reliable Maids
              </span>{" "}
              with{" "}
              <span
                className="text-black"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Blink<span className="text-red-500">maid</span>
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s", fontFamily: 'Pacifico, cursive' }}
            >
              Professional, trustworthy, and experienced helpers at your service
              anytime. Background-verified professionals ready to transform your
              home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button className="bg-white text-black font-bold rounded-2xl px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all hover:scale-105">
                Get Started Now
              </button>
              <button className="border-2 border-white text-black font-semibold rounded-2xl px-8 sm:px-10 py-3 sm:py-4 hover:bg-white hover:text-black text-base sm:text-lg transition-all">
                View Services
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end relative w-full max-w-md sm:max-w-lg lg:max-w-xl mb-8 lg:my-0">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>
            <img
              src={maid1}
              alt="Professional maid service"
              className="relative w-[70%] h-auto object-cover rounded-3xl shadow-lg -left-28 hover:scale-105 transition-all border-4 border-white/30 z-20"
            />

            {/* Other service cards */}
            <img
              src={maid2}
              alt="Service 2"
              className="absolute top-4 -left-8 w-32 sm:w-36 md:w-40 rounded-3xl  shadow-lg border-4 border-white/30 z-10 transition-all hover:scale-105 duration-700 ease-out"
              style={{
                transform: animate
                  ? "translate(-5rem,-3rem) scale(1)"
                  : "translate(0,0) scale(0.8)",
                opacity: animate ? 1 : 0,
              }}
            />
            <img
              src={maid3}
              alt="Service 3"
              className="absolute -bottom-48 left-0 w-32 sm:w-36 md:w-40 rounded-3xl shadow-lg border-4 border-white/30 z-10 transition-all hover:scale-105 duration-700 ease-out"
              style={{
                transform: animate
                  ? "translate(5rem,-4rem) scale(1)"
                  : "translate(0,0) scale(0.8)",
                opacity: animate ? 1 : 0,
              }}
            />
            <img
              src={maid4}
              alt="Service 4"
              className="absolute -top-[222px] left-28 w-32 sm:w-36 md:w-40 rounded-3xl shadow-lg border-4 border-white/30 z-10 transition-all hover:scale-105 duration-700 ease-out"
              style={{
                transform: animate
                  ? "translate(0,6rem) scale(1)"
                  : "translate(0,0) scale(0.8)",
                opacity: animate ? 1 : 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section - White */}
      <section className="py-24 w-full bg-gray-100 text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-[1600px] w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-red-500">Blinkmaid?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the difference with our premium maid services designed
              around your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: HiShieldCheck,
                title: "Verified Professionals",
                desc: "All our maids undergo rigorous background checks, skill assessments, and personality evaluations.",
              },
              {
                icon: HiClock,
                title: "On-Time Service",
                desc: "Punctual and reliable professionals who respect your schedule.",
              },
              {
                icon: HiUsers,
                title: "Experienced Staff",
                desc: "Well-trained professionals with years of experience in residential cleaning and household management.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-all border border-gray-100"
              >
                <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500">
                  <feature.icon className="w-10 h-10 text-red-500 group-hover:text-white transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Black */}
      <section className="py-24 w-full bg-White bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-22 h-22 bg-white/10 rounded-full top-1 right-8 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-36 h-36 bg-white/10 rounded-full top-10 right-8 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-20 h-20 bg-white/25 rounded-full bottom-1/3 right-1/3 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1600px] w-full text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-600">
            Comprehensive cleaning solutions tailored to your specific needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                title: "Deep Cleaning",
                desc: "Complete home sanitization",
                icon: "🧽",
              },
              {
                title: "Regular Cleaning",
                desc: "Weekly/Monthly maintenance",
                icon: "🏠",
              },
              {
                title: "Move-in/Move-out",
                desc: "Thorough property cleaning",
                icon: "📦",
              },
              {
                title: "Post-Construction",
                desc: "Construction cleanup service",
                icon: "🔨",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white text-black border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:scale-105"
              >
                <div className="text-4xl text-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Red */}
      <section className="py-24 w-full bg-gradient-to-r from-red-500 to-black text-white">
        <div className="container mx-auto px-6 max-w-[1600px] w-full text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white animate-fade-in">
            Ready to Book Your <span className="text-[#F75A5A]">Maid?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Get trusted, verified professionals at your service with just one
            click.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-[#ED3F27] text-black font-bold rounded-2xl px-12 py-5 text-xl hover:bg-red-700">
              Book Now - Starting at $49
            </button>
            <div className="flex items-center gap-2 text-gray-700">
              <HiPhone className="w-5 h-5 text-white" />
              <span className="text-white">Or call us: (555) 123-MAID</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
