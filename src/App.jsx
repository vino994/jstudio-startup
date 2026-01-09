import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<ComingSoon title="About Us" />} />
        <Route path="services" element={<ComingSoon title="Services" />} />
        <Route path="portfolio" element={<ComingSoon title="Portfolio" />} />
        <Route path="products" element={<ComingSoon title="Products" />} />
        <Route path="faqs" element={<ComingSoon title="FAQs" />} />
        <Route path="blog" element={<ComingSoon title="Blog" />} />
        <Route path="contact" element={<ComingSoon title="Contact Us" />} />
      </Route>
    </Routes>
  );
}

export default App;
