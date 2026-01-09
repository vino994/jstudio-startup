const Footer = () => {
  return (
 <footer className="relative px-6 sm:px-10 pt-16 pb-8 overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">

  {/* Glow Blobs */}
  <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/20 rounded-full blur-[120px] -z-10" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

  <div className="relative z-10">

    {/* Top Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
      {[
        { title: "Call anytime", value: "+94 9380 334317", icon: "📞" },
        { title: "Email address", value: "info@jstudio.com", icon: "✉️" },
        { title: "Office Hours", value: "8:00 AM - 10:00 PM", icon: "⏰" },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 150}
          className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur hover:bg-white/10 transition"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-600 shadow-lg">
            {item.icon}
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400">
              {item.title}
            </p>
            <p className="font-semibold text-sm sm:text-base">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Main Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 mb-10 sm:mb-12">

      {/* Left Side */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["About Us", "Our Team", "Pricing", "Blogs", "Contact Us"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "UI/UX Design",
              "App Development",
              "Digital Marketing",
              "Web Development",
              "Cyber Security",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "Working Process",
              "Privacy Policy",
              "Terms & Conditions",
              "FAQs",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Right Side - Newsletter */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur h-fit"
      >
        <h4 className="font-semibold mb-2">Subscribe Our Newsletter</h4>
        <p className="text-gray-400 text-sm mb-4 max-w-sm">
          Get ready to work together for the better solution for your business
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none mb-3"
        />

        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 transition font-medium">
          Subscribe
        </button>
      </div>

    </div>

    {/* Bottom Bar */}
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-5 text-xs sm:text-sm text-gray-400"
    >
      <p>© 2025 Jstudio Pvt Ltd. All rights reserved.</p>

      <div className="flex gap-3 mt-4 md:mt-0">
        {["f", "in", "x", "ig"].map((icon, i) => (
          <div
            key={i}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-500 cursor-pointer transition"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>

  </div>
</footer>

  );
};

export default Footer;
