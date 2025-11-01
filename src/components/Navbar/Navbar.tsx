import { useLocation, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { User, LogOut, EyeOff, Eye, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logo.jpeg";
import { useToast } from "../toast";
import axiosInstance from "../../utils/api";
import {
  clear_auth,
  update_auth_data,
  update_user_info,
} from "../../redux/action";
import type { InitialReduxStateProps } from "../../redux/redux.props";

interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
  address: string;
  city: string;
  pincode: string;
  gender: string;
  profile_image?: File | null;
}

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(
    (state: InitialReduxStateProps) => state.tokenInfo.accessToken
  );

  // Login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form
  const [form, setForm] = useState<RegisterFormData>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    address: "",
    city: "",
    pincode: "",
    gender: "",
    profile_image: null,
  });

  const resetForms = () => {
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone_number: "",
      address: "",
      city: "",
      pincode: "",
      gender: "",
      profile_image: null,
    });
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, profile_image: file }));
  };

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      addToast("Please enter both email and password.", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login/", {
        email: loginEmail,
        password: loginPassword,
      });

      if (res.status === 200) {
        const { access, refresh } = res.data;
        dispatch(update_auth_data({ access, refresh }));
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access}`;

        const dashboardRes = await axiosInstance.get("/dashboard/", {
          headers: { Authorization: `Bearer ${access}` },
        });

        dispatch(update_user_info(dashboardRes.data));

        if (dashboardRes.data.role === "admin") {
          navigate("/dashboard");
        }

        addToast("Login successful!", "success");
        resetForms();
        setModalOpen(false);
      }
    } catch (err: any) {
      addToast(err.response?.data?.message || "Login failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      addToast("Passwords do not match.", "error");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value as any);
    });

    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/register/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201 ) {
        addToast("Registration successful! Please log in.", "success");
        setIsRegister(false);
        resetForms();
      }
    } catch (err: any) {
      addToast(err.response?.data?.message || "Registration failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(clear_auth());
    navigate("/");
    setDropdownOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="bg-white relative">
      <div className="max-w-7xl mx-auto px-2">
        <nav className="flex items-center justify-between w-full h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="h-16 object-contain pl-1" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 cursor-pointer">
            {menuItems.map(({ label, path }) => (
              <div
                key={path}
                onClick={() => navigate(path)}
                className={`text-black font-medium hover:text-red-600 transition focus:outline-none ${
                  isActive(path)
                    ? "border-b-2 border-red-600"
                    : "border-b-2 border-transparent"
                }`}
                style={{ paddingBottom: "4px" }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Auth */}
          <div className="hidden sm:block relative">
            {!user ? (
              <div
                onClick={() => {
                  setModalOpen(true);
                  setIsRegister(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Login
              </div>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 cursor-pointer bg-red-200 px-3 py-3 rounded-full hover:bg-red-300 transition"
                >
                  <User className="w-5 h-5 text-gray-900" />
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg z-50">
                    <div
                      onClick={() => {
                        navigate("/profile");
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    >
                      Profile
                    </div>
                    <div
                      onClick={handleLogout}
                      className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none flex justify-center items-center h-full w-full"
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden pl-6 space-y-4 pb-4">
            {menuItems.map(({ label, path }) => (
              <div
                key={path}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className="block text-left text-black hover:text-red-600 font-medium cursor-pointer"
              >
                {label}
              </div>
            ))}

            {!user ? (
              <div
                onClick={() => {
                  setModalOpen(true);
                  setIsRegister(false);
                  setMenuOpen(false);
                }}
                className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition"
              >
                Login
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Login/Register Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div
            className={`relative bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-500 ease-in-out ${
              isRegister ? "max-w-2xl" : "max-w-md"
            } w-full`}
          >
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold text-slate-800">
                {isRegister ? "Create Account" : "Welcome Back"}
              </h2>
              <X
                className="w-5 h-5 text-slate-500 hover:text-slate-700 cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </div>

            <div className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              {isRegister ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="first_name"
                      value={form.first_name}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="border rounded-lg px-3 py-2"
                    />
                    <input
                      name="last_name"
                      value={form.last_name}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="border rounded-lg px-3 py-2"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  <input
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="w-full border rounded-lg px-3 py-2"
                  />

                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-500 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                    <div
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3 text-slate-500 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </div>
                  </div>

                  <input
                    name="phone_number"
                    value={form.phone_number}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full border rounded-lg px-3 py-2"
                  />

                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  <input
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full border rounded-lg px-3 py-2"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="border rounded-lg px-3 py-2"
                    />
                    <input
                      name="pincode"
                      value={form.pincode}
                      onChange={handleInputChange}
                      placeholder="Pincode"
                      className="border rounded-lg px-3 py-2"
                    />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </>
              ) : (
                <>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-500 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div
                onClick={isRegister ? handleRegister : handleLogin}
                className={`w-full text-center py-2 rounded-lg font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-red-600 text-white hover:bg-red-600/90 cursor-pointer"
                }`}
              >
                {loading
                  ? "Please wait..."
                  : isRegister
                  ? "Register"
                  : "Login"}
              </div>

              {/* Switch */}
              <p className="text-center text-sm text-slate-600">
                {isRegister ? (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsRegister(false)}
                      className="font-medium text-red-600 cursor-pointer"
                    >
                      Login here
                    </span>
                  </>
                ) : (
                  <>
                    Don’t have an account?{" "}
                    <span
                      onClick={() => setIsRegister(true)}
                      className="font-medium text-red-600 cursor-pointer"
                    >
                      Register here
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
