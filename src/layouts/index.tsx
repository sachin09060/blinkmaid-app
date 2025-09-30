import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { label: "Facebook", path: "/facebook", icon: <FaFacebookF /> },
  { label: "Twitter", path: "/twitter", icon: <FaTwitter /> },
  { label: "Instagram", path: "/instagram", icon: <FaInstagram /> },
];

const links = [
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Book Now", path: "/book" },
  { label: "Contact", path: "/contact" },
];

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer socials={socials} links={links} />
    </div>
  );
};

export default Layout;
