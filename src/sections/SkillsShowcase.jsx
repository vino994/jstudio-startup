import img1 from "../assets/start-2.jpg";
const SkillsShowcase = () => {
  const ProgressBar = ({ title, percent }) => {
    return (
      <div>
        <div className="flex justify-between mb-2 text-sm">
          <span>{title}</span>
          <span>{percent}%</span>
        </div>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-pink-500 rounded-full transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">

        {/* Left Content */}
        <div
          data-aos="fade-up"
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Empowering brands through <br className="hidden sm:block" />
            <span className="text-pink-400">smart digital solutions.</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 mt-5 sm:mt-6 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
          >
            At HYPERNOVA (PVT) Ltd, we transform ideas into high-performing
            digital products using cutting-edge technologies, data-driven
            strategies, and creative innovation.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 mt-3 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
          >
            From software development to SEO, branding, and analytics — we help
            businesses grow, scale, and lead in the digital era.
          </p>

          {/* Progress Bars */}
          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
            <div data-aos="fade-up" data-aos-delay="250">
              <ProgressBar title="Software & Web Development" percent={95} />
            </div>
            <div data-aos="fade-up" data-aos-delay="350">
              <ProgressBar title="SEO & Digital Marketing" percent={92} />
            </div>
            <div data-aos="fade-up" data-aos-delay="450">
              <ProgressBar title="Data Analytics & Automation" percent={90} />
            </div>
            <div data-aos="fade-up" data-aos-delay="550">
              <ProgressBar title="Personal Branding & Events" percent={88} />
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div
          data-aos="fade-left"
          className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] mt-12 md:mt-0"
        >
          {/* Dotted pattern - top left */}
          <div className="absolute top-4 left-4 sm:top-2 sm:left-0 dotted-pattern opacity-30 sm:opacity-60 scale-75 sm:scale-100" />

          {/* Dotted pattern - bottom right */}
          <div className="absolute bottom-4 right-4 sm:bottom-2 sm:right-0 dotted-pattern opacity-30 sm:opacity-60 scale-75 sm:scale-100" />

          {/* Top Image */}
          <div className="absolute top-0 right-0 w-[72%] z-20">
            <div className="bg-[#05010F] p-[10px] shadow-xl custom-shape relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="w-full h-full object-cover custom-shape"
                alt="digital strategy"
              />
              <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Bottom Image */}
          <div className="absolute bottom-0 left-0 w-[72%] z-10">
            <div className="bg-[#05010F] p-[10px] shadow-xl custom-shape relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="w-full h-full object-cover custom-shape"
                alt="team collaboration"
              />
              <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsShowcase;
