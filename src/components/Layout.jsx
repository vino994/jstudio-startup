import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { initScrollReveal } from "../utis/scrollReveal";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const [showTop, setShowTop] = useState(true);
useEffect(() => {
  initScrollReveal();
}, []);
useEffect(() => {
  AOS.init({
    duration: 800,       // animation speed
    easing: "ease-out-cubic",
    once: true,          // animate only once
    offset: 80,          // trigger position
  });
}, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05010F] text-white relative">
      <CursorGlow />

      <TopBar show={showTop} />
      <Navbar topOffset={showTop} />

      <main className="pt-[120px] md:pt-[130px]">
        <Outlet />
      </main>
<ScrollToTop />

      <Footer />
    </div>
  );
};

export default Layout;
