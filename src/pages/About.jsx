import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <section className="relative px-6 sm:px-10 py-16 sm:py-24">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      {/* ================== SECTION 1: HERO ================== */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Content */}
        <div data-aos="fade-right">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-4">
            About HYPERNOVA (PVT) Ltd
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Building Digital Solutions <br className="hidden sm:block" />
            for a <span className="text-pink-400">Smarter Future</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl text-sm sm:text-base">
            HYPERNOVA (PVT) Ltd is a technology-driven company delivering
            innovative software, web, digital marketing, SEO, analytics,
            and personal branding solutions for startups and enterprises.
          </p>

          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            We help brands grow, scale, and succeed in the digital world
            through creativity, data-driven strategies, and cutting-edge
            technology.
          </p>

          <div className="flex gap-4 mt-8">
            <button onClick={() => navigate("/services")} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
              Our Services
            </button>

            <button onClick={() => navigate("/contact")} className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative shadow-xl border border-white/10 overflow-hidden custom-shape 
                          w-[90%] sm:w-[85%] md:w-[100%] 
                          max-w-xl 
                          aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="About Hypernova Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* ================== SECTION 2: DETAILS ================== */}
      <div className="grid md:grid-cols-2 gap-14 items-center mt-24 sm:mt-32 relative z-10">

        {/* Image */}
        <div
          data-aos="fade-right"
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative shadow-xl border border-white/10 overflow-hidden custom-shape 
                          w-[90%] sm:w-[85%] md:w-[100%] 
                          max-w-xl 
                          aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Digital Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Why Choose <span className="text-pink-400">HYPERNOVA</span>?
          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl">
            We don’t just build products — we build digital experiences
            that deliver results. Our team combines creativity,
            technology, and strategy to craft impactful solutions.
          </p>

          <ul className="mt-6 space-y-4 text-sm sm:text-base text-gray-400">
            <li>✔ Custom software & web solutions</li>
            <li>✔ Data-driven digital marketing</li>
            <li>✔ Advanced SEO & analytics</li>
            <li>✔ Personal branding & event management</li>
            <li>✔ 24/7 expert support</li>
          </ul>

          <div className="mt-8">
            <button  onClick={() => window.location.href = "tel:+949380334317"} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
              Let’s Work Together
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
