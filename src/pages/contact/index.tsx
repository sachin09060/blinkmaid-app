import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { useState } from "react";
import mapBackground from "../../assets/map-background.jpg";
import supportImage from "../../assets/contact-support.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-background text-foreground w-[99vw] overflow-x-hidden">
      {/* Hero with Map Background */}
      <section 
        className="relative py-32 px-8 md:px-20 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${mapBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/70 to-black/80 backdrop-blur-sm"></div>
        
        {/* Floating Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-32 h-32 bg-white/10 rounded-full top-10 left-20 animate-float" style={{ animationDelay: "0s" }}></div>
          <div className="absolute w-24 h-24 bg-red-500/20 rounded-full top-1/3 right-32 animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute w-40 h-40 bg-white/5 rounded-full bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In <span className="text-[#FAEB92]">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? We're here to help you find the perfect cleaning solution.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-8 md:px-20 bg-gray-50 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: HiPhone,
              title: "Call Us",
              info: "+91 98765 43210",
              desc: "Mon-Sat 8AM-8PM",
              color: "from-red-500 to-red-600",
            },
            {
              icon: HiMail,
              title: "Email Us",
              info: "support@blinkmaid.com",
              desc: "24/7 Response",
              color: "from-black to-gray-800",
            },
            {
              icon: HiLocationMarker,
              title: "Visit Us",
              info: "MG Road, Bengaluru",
              desc: "Karnataka, India",
              color: "from-red-600 to-black",
            },
            {
              icon: HiClock,
              title: "Working Hours",
              info: "8:00 AM - 8:00 PM",
              desc: "Monday - Saturday",
              color: "from-gray-800 to-red-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-800 font-semibold mb-1">{item.info}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Image Section */}
      <section className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Send Us a <span className="text-red-600">Message</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white shadow-2xl rounded-3xl p-8 space-y-6 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your cleaning needs..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-black text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* Image & Info */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/20 rounded-3xl blur-3xl transform rotate-6"></div>
            
            <img
              src={supportImage}
              alt="Customer Support Team"
              className="relative rounded-3xl shadow-2xl border-4 border-white w-full h-auto object-cover hover:scale-105 transition-all duration-500"
            />

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-red-500 to-black w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Available</p>
                  <p className="font-bold text-gray-900">Support</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-black to-red-600 w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">10K+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Happy</p>
                  <p className="font-bold text-gray-900">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Find Us <span className="text-red-600">Here</span>
          </h2>
          <div 
            className="w-full h-96 rounded-3xl shadow-2xl border-4 border-white overflow-hidden relative"
            style={{
              backgroundImage: `url(${mapBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-red-600/30 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-center max-w-md">
                <HiLocationMarker className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Blinkmaid HQ</h3>
                <p className="text-gray-700 mb-4">MG Road, Bengaluru, Karnataka, India</p>
                <button className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
