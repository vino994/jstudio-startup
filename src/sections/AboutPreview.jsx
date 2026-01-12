import { useNavigate } from "react-router-dom";
const AboutPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      {/* Top feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
        {[
          {
            title: "Expert Professionals",
            desc: "Our experienced team delivers high-quality software, web, and digital solutions tailored to your business.",
            icon: "👨‍💻",
          },
          {
            title: "24/7 Dedicated Support",
            desc: "We provide round-the-clock support to ensure seamless performance and quick issue resolution.",
            icon: "🎧",
          },
          {
            title: "Affordable & Scalable",
            desc: "Premium-quality services at competitive pricing to help you scale faster and smarter.",
            icon: "🚀",
          },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="flex gap-4 items-start bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur hover:shadow-lg transition"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-pink-500 shrink-0">
              <span className="text-lg sm:text-xl">{item.icon}</span>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg">
                {item.title}
              </h4>
              <p className="text-gray-400 mt-1 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">

        {/* Images */}
        <div
          data-aos="fade-right"
          className="relative flex justify-center md:justify-start"
        >
          {/* Dots Top Right */}
          <div className="absolute -top-8 -right-8 dotted-pattern hidden sm:block" />

          {/* Dots Bottom Left */}
          <div className="absolute -bottom-8 -left-8 dotted-pattern hidden sm:block" />

          {/* Main Image */}
          <div className="relative shadow-xl border border-white/20 overflow-hidden custom-shape w-[85%] sm:w-[75%] md:w-[80%] backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="w-full h-full object-cover"
              alt="HYPERNOVA team delivering digital solutions"
            />

            {/* Inner glow border */}
            <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/20 pointer-events-none" />
          </div>

          {/* Floating Image */}
          <div className="absolute -bottom-8 right-0 shadow-xl overflow-hidden custom-shape w-[60%] sm:w-[55%] md:w-[60%]">
            <div className="bg-[#05010F] p-[10px] custom-shape">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                className="w-full h-full object-cover custom-shape"
                alt="HYPERNOVA modern workspace"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div
          data-aos="fade-left"
          className="text-center md:text-left mt-12 md:mt-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Driving Growth with <br className="hidden sm:block" />
            <span className="text-pink-400">Smart Digital Solutions</span>
          </h2>

          <p className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base">
            HYPERNOVA (Pvt) Ltd is a technology-driven company specializing in
            software development, web development, digital marketing, SEO,
            data analytics, personal branding, and event management solutions.
          </p>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
            We focus on innovation, performance, and scalability to help
            businesses build strong digital identities, increase visibility,
            and achieve sustainable growth in today’s competitive market.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 flex justify-center md:justify-start"
          >
      <button
  onClick={() => navigate("/about")}
  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition"
>
  More About Us
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
