import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative px-6 sm:px-10 py-5 sm:py-8">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-80px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

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
            Transforming Ideas <br />into <span className="text-pink-400">Powerful</span> <br className="hidden md:block" />
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
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919999999999" // replace with your real number
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition text-center"
  >
    Get Started
  </a>

  {/* Navigate to Services */}
  <button
    onClick={() => navigate("/services")}
    className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
  >
    Explore Services
  </button>
</div>

        </div>

        {/* Right Image */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative flex justify-center md:justify-end"
        >
          <div
            className="relative shadow-xl border border-white/10 overflow-hidden custom-shape 
                       w-[95%] sm:w-[90%] md:w-[120%] 
                       max-w-xl 
                       aspect-[4/3]"
          >
            <img
              src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04170242/EC_Startup_Cyborg_Hands_750.jpg"
              alt="HYPERNOVA team delivering digital solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
