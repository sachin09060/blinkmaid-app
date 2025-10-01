import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HiStar,
  HiPhone,
  HiCheckCircle,
  HiClock,
  HiMail,
  HiLocationMarker,
} from "react-icons/hi";

interface Social {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface FooterProps {
  socials: Social[];
}

const Footer: React.FC<FooterProps> = ({ socials }) => {
  const navigate = useNavigate();

  const services = [
    "Deep House Cleaning",
    "Kitchen Sanitization",
    "Bathroom Deep Clean",
    "Laundry & Ironing",
    "Window Cleaning",
    "Office Cleaning",
  ];

  const company = [
    "About Us",
    "Our Team",
    "Career Opportunities",
    "Press & Media",
    "Partner With Us",
    "Blog",
  ];
  const support = [
    "Help Center",
    "Safety Guidelines",
    "Pricing",
    "Customer Reviews",
    "Terms of Service",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* LEFT SIDE: Branding + Lists */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Blink<span className="text-yellow-500">maid</span>
            </h2>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 w-max text-sm">
              <HiStar className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 from 10,000+ families</span>
            </div>
            <p className="text-gray-100 text-sm sm:text-base">
              Professional, trustworthy, and experienced helpers at your
              service. Background-verified professionals ready to transform your
              home with reliable care.
            </p>
            <ul className="space-y-2 text-gray-100">
              <li className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-yellow-500" />
                Background Verified
              </li>
              <li className="flex items-center gap-2">
                <HiClock className="w-5 h-5 text-yellow-500" />
                24/7 Available
              </li>
            </ul>
            <div className="flex gap-3 mt-4 flex-wrap">
              {socials.map((social) => (
                <div
                  key={social.label}
                  onClick={() => navigate(social.path)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all cursor-pointer"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Lists */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-0">
            <div>
              <h4 className="font-bold mb-4 text-lg sm:text-xl">Services</h4>
              <ul className="space-y-2 text-gray-100">
                {services.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-yellow-400"
                    onClick={() => navigate("/")}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg sm:text-xl">Company</h4>
              <ul className="space-y-2 text-gray-100">
                {company.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-yellow-400"
                    onClick={() => navigate("/")}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg sm:text-xl">Support</h4>
              <ul className="space-y-2 text-gray-100">
                {support.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-yellow-400"
                    onClick={() => navigate("/")}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Card */}
        <div className="flex-1 max-w-sm w-full mx-auto md:mx-0 animate-slow-bounce">
          <div className="bg-gray-800 rounded-xl p-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Get Started Today
            </h3>
            <p className="mb-4 text-gray-200 text-sm sm:text-base">
              Ready for a spotless home?
            </p>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <HiPhone className="w-5 h-5 text-yellow-500" />
                (555) 123-MAID
              </li>
              <li className="flex items-center gap-2">
                <HiMail className="w-5 h-5 text-yellow-500" />
                support@blinkmaid.com
              </li>
              <li className="flex items-center gap-2">
                <HiLocationMarker className="w-5 h-5 text-yellow-500" />
                Available in 50+ cities
              </li>
            </ul>
            <button className="bg-yellow-500 text-blue-800 font-bold rounded-2xl px-6 py-3 w-full hover:bg-yellow-400 transition-all text-sm sm:text-base">
              Book Your Maid Now
            </button>
            <p className="text-yellow-300 text-xs sm:text-sm mt-2">
              100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-400 pt-6 mt-10 text-center text-gray-200 text-xs sm:text-sm space-y-1">
        <div>
          &copy; {new Date().getFullYear()} Blinkmaid. All rights reserved.
        </div>
        <div>
          Designed and developed by{" "}
          <a
            href="https://rakvih.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:underline"
          >
            Rakvih.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
