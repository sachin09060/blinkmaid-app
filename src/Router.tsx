import { Loader } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./layouts"));
const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/services"));
const Pricing = lazy(() => import("./pages/pricing"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
// const Login = lazy(() => import("./pages/Login"));

const Router = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // hide after 3s
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="w-screen h-screen relative">
            {/* Loader overlay */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                <Loader size={60} />
              </div>
            )}
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
