import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/nova-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative px-6 sm:px-10 pt-16 pb-8 overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">

      {/* Glow Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10">

        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {[
            { title: "Call anytime", value: "+94 9380 334317", icon: "📞", link: "tel:+949380334317" },
            { title: "Email address", value: "novatecsaas@gmail.com", icon: "✉️", link: "mailto:novatecsaas@gmail.com" },
            { title: "Office Hours", value: "8:00 AM - 10:00 PM", icon: "⏰" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link || "#"}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-600 shadow-lg">
                {item.icon}
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">{item.title}</p>
                <p className="font-semibold text-sm sm:text-base">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 mb-10 sm:mb-12">

          {/* Left Side */}
          <div className="flex flex-col md:flex-row gap-10">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={logo}
                  alt="Hypernova Logo"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  HYPERNOVA (PVT) Ltd
                </h3>
              </div>

              <p className="text-gray-400 text-sm max-w-xs mb-3">
               Change Empowering Bussiness With Digital Excellence to Innovate Connect Evolve.
              </p>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                📍 87E, New Boundary Road, Batticaloa, Sri Lanka
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Products", path: "/products" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <NavLink to={item.path} className="hover:text-white transition">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  "Software Development",
                  "Web Development",
                  "Digital Marketing",
                  "SEO Optimization",
                  "Data Analytics",
                ].map((item, i) => (
                  <li key={i} className="hover:text-white transition cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur h-fit">
            <h4 className="font-semibold mb-2">Subscribe Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Get expert tips, offers, and digital growth insights directly in your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none mb-3"
            />

            <button
              onClick={handleSubscribe}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 transition font-medium"
            >
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-5 text-xs sm:text-sm text-gray-400">
          <p>© 2025 HYPERNOVA (PVT) Ltd. All rights reserved.</p>

          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61583236233992"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 transition"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/hypernova_tec/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 transition"
            >
              ig
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
