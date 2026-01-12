import { useNavigate } from "react-router-dom";
const Portfolio = () => {
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
            Our Portfolio
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Showcasing Our <br className="hidden sm:block" />
            <span className="text-pink-400">Digital Excellence</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl text-sm sm:text-base">
            Explore how HYPERNOVA (PVT) Ltd transforms ideas into
            high-impact digital products through creativity,
            technology, and strategy.
          </p>

          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            From startups to enterprises, our portfolio reflects
            innovation, scalability, and measurable results.
          </p>

          <div className="flex gap-4 mt-8">
            <button onClick={() => navigate("/products")} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
              View Projects
            </button>

           <button
  onClick={() => window.location.href = "tel:+949380334317"}
  className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
>
  Start Your Project
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
              alt="Portfolio Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* ================== SECTION 2: PROJECT HIGHLIGHTS ================== */}
      <div className="mt-24 sm:mt-32 relative z-10">

        <div className="text-center mb-14 sm:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our <span className="text-pink-400">Featured Works</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We design, build, and scale digital products that help businesses
            grow and lead in competitive markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "E-Commerce Platform",
              desc: "A scalable online shopping platform with secure payments and modern UI.",
              image: "https://images.unsplash.com/photo-1557821552-17105176677c",
            },
            {
              title: "SaaS Dashboard",
              desc: "A data-rich analytics dashboard built for performance and scalability.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            },
            {
              title: "Brand Website",
              desc: "A high-conversion website designed for maximum engagement.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            },
            {
              title: "Marketing Campaign",
              desc: "A result-driven digital marketing funnel with strong ROI.",
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
            },
            {
              title: "Mobile App UI",
              desc: "User-friendly mobile interfaces with smooth experiences.",
              image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            },
            {
              title: "Analytics System",
              desc: "Advanced business intelligence and reporting tools.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            },
          ].map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-white/5 border border-white/10 backdrop-blur p-4 sm:p-5 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.desc}
              </p>
            </div>
          ))}

        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mt-14 sm:mt-20"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
            View All Projects
          </button>
        </div>

      </div>

    </section>
  );
};

export default Portfolio;
