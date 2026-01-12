import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Loader from "./components/Loader"; // 👈 add this

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds splash

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // 👈 show loader first

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />

        {/* Optional */}
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
