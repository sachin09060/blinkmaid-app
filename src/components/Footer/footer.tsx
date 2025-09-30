import React from "react";
import { useNavigate } from "react-router-dom";
import { HiPhone } from "react-icons/hi";

interface Social {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface Link {
  label: string;
  path: string;
}

interface FooterProps {
  socials: Social[];
  links: Link[];
}

const Footer: React.FC<FooterProps> = ({ socials, links }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-[1600px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <div
                key={social.label}
                onClick={() => navigate(social.path)}
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer"
              >
                <span className="sr-only">{social.label}</span>
                {social.icon}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <HiPhone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>(555) 123-MAID</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@blinkmaid.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-1 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Blinkmaid. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
