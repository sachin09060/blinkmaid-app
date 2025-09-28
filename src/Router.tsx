import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./layouts"));
const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/services"));
const Pricing = lazy(() => import("./pages/pricing"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
// const Login = lazy(() => import("./pages/Login"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
