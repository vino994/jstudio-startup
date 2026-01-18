import { useNavigate } from "react-router-dom";
import img1 from "../assets/start-2.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-6 sm:px-10 py-8 overflow-hidden bg-[#05010F]">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[140px] z-[0]" />
      <div className="absolute top-[-120px] right-[-80px] w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[140px] z-[0]" />

      {/* CONTENT */}
      <div className="relative z-[5] grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <span
            data-aos="zoom-in"
            className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-4"
          >
            🚀 Empowering Businesses with Digital Excellence
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4"
          >
            Transforming Ideas <br />
            into <span className="text-pink-400">Powerful</span>{" "}
            <br className="hidden md:block" />
            Digital Solutions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base"
          >
            HYPERNOVA (Pvt) Ltd delivers cutting-edge software development, web solutions,
            digital marketing, SEO, data analytics, personal branding, and event management
            services to help brands grow, scale, and dominate the digital world.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
          >
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition text-center"
            >
              Get Started
            </a>

            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative flex justify-center md:justify-end"
        >
          <div
            className="relative shadow-xl border border-white/10 overflow-hidden custom-shape 
                       w-[95%] sm:w-[90%] md:w-[120%] 
                       max-w-xl 
                       aspect-[4/3] z-[5]"
          >
            {/* DOTS BEHIND IMAGE */}
            <div className="absolute top-6 left-6 dotted-pattern1 z-[1]" />
            <div className="absolute bottom-6 right-6 dotted-pattern1 z-[1]" />

            {/* IMAGE */}
            <img
              src={img1}
              alt="HYPERNOVA team delivering digital solutions"
              className="relative z-[5] w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
