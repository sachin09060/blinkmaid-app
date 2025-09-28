import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.jpeg";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <nav className="flex items-center justify-between w-full h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="h-20 object-contain pl-1" />
          </div>
          <div className="hidden md:flex space-x-8 cursor-pointer">
            {menuItems.map(({ label, path }) => (
              <div
                key={path}
                onClick={() => navigate(path)}
                className={`text-black font-medium hover:text-red-600 transition focus:outline-none
                  ${
                    isActive(path)
                      ? "border-b-2 border-red-600"
                      : "border-b-2 border-transparent"
                  }
                `}
                style={{ paddingBottom: "4px" }}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="hidden sm:block">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-red-600 bg-opacity-100 text-black rounded cursor-pointer transition duration-200 ease-in-out hover:bg-red-700 focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="md:hidden">
            <div
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none flex justify-center items-center h-full w-full"
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden pl-6 space-y-4">
            {menuItems.map(({ label, path }) => (
              <div
                key={path}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-black hover:text-red-600 font-medium focus:outline-none cursor-pointer"
              >
                {label}
              </div>
            ))}
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="block w-full text-center px-4 py-2 bg-red-600 text-black rounded hover:bg-red-700 transition focus:outline-none"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
