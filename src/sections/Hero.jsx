const Hero = () => {
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
        We Provide Expert IT Solutions
      </span>

      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4"
      >
        Delivering <span className="text-pink-400">innovative</span> <br className="hidden md:block" />
        tech solutions
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-gray-400 mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base"
      >
        Jstudio builds scalable, modern digital experiences for startups and
        enterprises worldwide.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
      >
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
          Work With Us
        </button>

        <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
          View Services
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
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>

  );
};

export default Hero;
