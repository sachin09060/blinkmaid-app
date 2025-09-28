const Contact = () => {
  return (
    <div className="bg-white text-black w-[99vw]  ">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-red-600 text-white py-20 px-8 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Have questions? We’d love to hear from you. Reach out and our team
          will get back to you soon.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-8 md:px-20 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form className="bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-black rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 w-full">
          <div>
            <h3 className="text-xl font-semibold text-red-600">Address</h3>
            <p className="text-gray-700">
              Blinkmaid HQ, MG Road, Bengaluru, India
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Phone</h3>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Email</h3>
            <p className="text-gray-700">support@blinkmaid.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
