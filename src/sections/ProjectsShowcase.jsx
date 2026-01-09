const projects = [
  {
    title: "Minikids",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    span: "row-span-1",
  },
  {
    title: "QuickTrolley",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    span: "row-span-2",
  },
  {
    title: "EliteMobile.lk",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    span: "row-span-1",
  },
  {
    title: "Glo Masters Consultancy",
    category: "Consultancy",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    span: "row-span-1",
  },
  {
    title: "Photo Stories",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    span: "row-span-1",
  },
  {
    title: "Creative Studio",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    span: "row-span-1",
  },
  {
    title: "Urban Shots",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    span: "row-span-2",
  },
  {
    title: "Wide Project",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    span: "md:col-span-2",
  },
];

const ProjectsShowcase = () => {
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
        Explore our <span className="text-pink-400">recent projects</span>
      </h2>
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
      <button className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
        View Our All Works
      </button>
    </div>

  </div>
</section>

  );
};

export default ProjectsShowcase;
