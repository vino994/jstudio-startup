import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/nova-logo.png"; // adjust path if needed

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact Us" },
];

const Navbar = ({ topOffset }) => {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!glowRef.current) return;
    const rect = glowRef.current.getBoundingClientRect();
    glowRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    glowRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <div
        className={`fixed left-0 w-full z-[9999] transition-all duration-300 ${
          topOffset ? "md:top-10 top-0" : "top-0"
        }`}
      >
        <nav
          ref={glowRef}
          onMouseMove={handleMouseMove}
          className={`w-full backdrop-blur-xl bg-white/5 border-b border-white/10 relative navbar-glow transition-all duration-300 ${
            shrink ? "py-2" : "py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
            {/* LOGO + TITLE */}
            <div className="flex items-center gap-3">
 <img
  src={logo}
  alt="Hypernova Logo"
  className="w-20 h-20 md:w-24 md:h-24 object-contain scale-110 -my-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
/>


              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                HYPERNOVA (PVT) Ltd
              </h1>
            </div>

            {/* CENTER MENU */}
            <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
              {links.map((item) => (
                <li key={item.path} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition ${
                        isActive ? "text-pink-400" : "text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
  <a
    href="mailto:novatrcsaas@gmail.com"
    className="hidden md:block px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
  >
    Mail Us
  </a>

  <a
    href="tel:+919876543210" // <-- change to real number
    className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg transition hover:scale-105"
  >
    Get in Touch
  </a>

  {/* Hamburger */}
  <button
    onClick={() => setOpen(true)}
    className="md:hidden text-2xl"
  >
    ☰
  </button>
</div>

          </div>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#05010F] z-[9999] transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <h2 className="text-xl font-semibold">HYPERNOVA (PVT) Ltd</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* MOBILE MENU */}
        <ul className="flex flex-col gap-6 p-6">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-lg hover:text-pink-400 transition"
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        {/* MOBILE BUTTONS */}
        <div className="mt-auto p-6 flex gap-4">
          <a
            href="mailto:info@hypernova.com"
            className="w-full py-3 rounded-lg bg-blue-600 text-center"
          >
            Mail Us
          </a>
          <button className="w-full py-3 rounded-lg bg-white/10">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
