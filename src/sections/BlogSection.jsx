const blogs = [
  {
    title: "Planning your online business goals with a specialist",
    category: "Technology",
    date: "Sep 1, 2024",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    featured: true,
  },
  {
    title: "Boost your startup business with our digital agency",
    category: "Architecture",
    date: "Sep 1, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Proactive customer experience in the business",
    category: "Real Estate",
    date: "Sep 1, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Data backup and recovery best practices small",
    category: "News & Tips",
    date: "Sep 1, 2024",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const BlogSection = () => {
  return (
    <section className="relative px-6 sm:px-10 py-16 sm:py-24">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mb-14 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-xl mx-auto md:mx-0">
            Recent blog & articles <br className="hidden sm:block" />
            <span className="text-pink-400">about technology</span>
          </h2>

          <button className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
            View All Posts
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

          {/* Featured */}
          <div data-aos="fade-right"
  data-aos-delay="200" className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
            <div className="h-[200px] sm:h-[260px] overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                {blogs[0].category} • {blogs[0].date}
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {blogs[0].title}
              </h3>

              <a href="#" className="text-pink-400 text-sm">
                Read More →
              </a>
            </div>
          </div>

          {/* Side posts */}
          <div className="space-y-5 sm:space-y-6">
        {blogs.slice(1).map((blog, i) => (
  <div
    key={i}
    data-aos="fade-left"
    data-aos-delay={i * 150}
    className="flex gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 hover:shadow-lg transition group"
  >

                <div className="w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    {blog.category} • {blog.date}
                  </p>

                  <h4 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2">
                    {blog.title}
                  </h4>

                  <a href="#" className="text-pink-400 text-xs sm:text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};



export default BlogSection;
