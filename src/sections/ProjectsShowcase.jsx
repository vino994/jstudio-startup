const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    span: "row-span-1",
  },
  {
    title: "SaaS Dashboard",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    span: "row-span-2",
  },
  {
    title: "Mobile App UI",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    span: "row-span-1",
  },
  {
    title: "Corporate Website",
    category: "Web Solutions",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    span: "row-span-1",
  },
  {
    title: "Brand Identity Design",
    category: "Personal Branding",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
    span: "row-span-1",
  },
  {
    title: "SEO Growth Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    span: "row-span-1",
  },
  {
    title: "Data Analytics Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    span: "row-span-2",
  },
    {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    span: "row-span-1",
  },
  {
    title: "Tech Startup Launch",
    category: "Product Development",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    span: "md:col-span-2",
  },
];
import { useNavigate } from "react-router-dom";
const ProjectsShowcase = () => {
  const navigator = useNavigate();
  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our <span className="text-pink-400">Digital Creations</span> & Success Stories
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            We craft innovative digital solutions that drive growth, engagement,
            and measurable business success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`relative group overflow-hidden rounded-2xl shadow-xl border border-white/10 ${project.span}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-base sm:text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mt-12 sm:mt-16"
        >
          <button  onClick={() => navigator('/products')} className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsShowcase;
