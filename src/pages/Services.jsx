import { useNavigate } from "react-router-dom";
const Services = () => {
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
            Our Services
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Powerful Digital Solutions <br className="hidden sm:block" />
            for <span className="text-pink-400">Modern Businesses</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl text-sm sm:text-base">
            At HYPERNOVA (PVT) Ltd, we offer a complete suite of digital
            services to help brands grow, innovate, and dominate their
            industries.
          </p>

          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            From custom software and web development to digital marketing,
            SEO, analytics, and personal branding — we do it all.
          </p>

   <div className="flex gap-4 mt-8">
  {/* WhatsApp - Get a Quote */}
  <a
    href="https://wa.me/919999999999" // replace with your WhatsApp number
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition text-center"
  >
    Get a Quote
  </a>

  {/* Navigate to Contact Page */}
  <button
    onClick={() => navigate("/contact")}
    className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
  >
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Our Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* ================== SECTION 2: SERVICE DETAILS ================== */}
      <div className="mt-24 sm:mt-32 relative z-10">

        <div className="text-center mb-14 sm:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What We <span className="text-pink-400">Offer</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Our services are designed to solve real business problems,
            boost digital presence, and drive long-term success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "Software Development",
              desc: "Custom, scalable, and secure software solutions built for your business needs.",
              icon: "💻",
            },
            {
              title: "Web Development",
              desc: "High-performance, responsive websites that convert visitors into customers.",
              icon: "🌐",
            },
            {
              title: "Digital Marketing",
              desc: "Data-driven strategies that increase traffic, leads, and conversions.",
              icon: "📈",
            },
            {
              title: "SEO Optimization",
              desc: "Boost your Google rankings with advanced SEO techniques.",
              icon: "🔍",
            },
            {
              title: "Data Analytics",
              desc: "Turn raw data into powerful business insights.",
              icon: "📊",
            },
            {
              title: "Personal Branding & Events",
              desc: "Build authority, visibility, and manage impactful events.",
              icon: "🌟",
            },
          ].map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-white/5 border border-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-pink-500 mb-4 sm:mb-5 text-lg sm:text-xl">
                {service.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;
