const ServicesStats = () => {
  return (
  <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

  {/* Glow blobs */}
  <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
  <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
  <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

  {/* Stats Bar */}
  <div
    data-aos="fade-up"
    className="relative bg-gradient-to-r from-blue-900 to-blue-950 custom-shape1 p-6 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 text-center mb-16 sm:mb-24 overflow-hidden items-center"
  >
    {[
      { value: "120+", label: "Happy Clients", icon: "👍" },
      { value: "154+", label: "Finished Projects", icon: "🏆" },
      { value: "15+", label: "Skilled Experts", icon: "💼" },
      { value: "99%", label: "Clients Satisfaction", icon: "😊" },
    ].map((item, i) => (
      <div
        key={i}
        data-aos="zoom-in"
        data-aos-delay={i * 150}
        className={`relative flex flex-col items-center justify-center py-4 sm:py-6 ${
          i !== 3 ? "md:border-r border-white/10" : ""
        }`}
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-600 mb-3 text-lg sm:text-xl">
          {item.icon}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {item.value}
        </h3>

        <p className="text-gray-400 mt-1 text-xs sm:text-sm">
          {item.label}
        </p>
      </div>
    ))}
  </div>

  {/* Section Heading */}
  <div
    data-aos="fade-up"
    className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Our awesome services to <br className="hidden sm:block" />
      <span className="text-pink-400">give you success</span>
    </h2>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    {[
      {
        title: "App Development",
        desc: "Innovative, tailored apps for business growth.",
        icon: "📱",
      },
      {
        title: "Software Development",
        desc: "Developing a comprehensive IT strategy that aligns.",
        icon: "💻",
      },
      {
        title: "Web Development",
        desc: "Modern, scalable web platforms for your business.",
        icon: "🌐",
      },
      {
        title: "IT Maintenance",
        desc: "Complete support & maintenance solutions.",
        icon: "🛠️",
      },
      {
        title: "Digital Marketing Services",
        desc: "Boost your brand with digital strategies.",
        icon: "📈",
      },
      {
        title: "POS System Solutions",
        desc: "Smart POS solutions for retail & business.",
        icon: "💳",
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
        <p className="text-gray-400 text-sm mb-4">
          {service.desc}
        </p>
        <a
          href="#"
          className="text-pink-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
        >
          Learn More →
        </a>
      </div>
    ))}
  </div>
</section>

  );
};

export default ServicesStats;
