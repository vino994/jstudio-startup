import { useState } from "react";

const serviceDetails = [
  {
    title: "Software Development",
    desc: "Custom-built, scalable, and secure software solutions tailored to your business needs.",
    longDesc:
      "We develop powerful, secure, and scalable software solutions tailored to your business needs. From enterprise systems to custom applications, we ensure performance, reliability, and growth.",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Web Development",
    desc: "High-performance, responsive, and modern websites that convert visitors into customers.",
    longDesc:
      "Our websites are fast, responsive, SEO-friendly, and designed to convert visitors into loyal customers. We focus on UI/UX, performance, and business impact.",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies to boost your online presence and ROI.",
    longDesc:
      "We grow your brand using proven digital marketing strategies including social media, ads, funnels, and content marketing to drive real ROI.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google with our advanced SEO and content strategies.",
    longDesc:
      "We use advanced SEO techniques like on-page, off-page, and technical SEO to improve your rankings, traffic, and conversions organically.",
    icon: "🔍",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc",
  },
  {
    title: "Data Analytics",
    desc: "Turn raw data into meaningful insights for smarter business decisions.",
    longDesc:
      "We help businesses convert raw data into actionable insights using dashboards, reports, and AI-powered analytics solutions.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Personal Branding & Events",
    desc: "Build a powerful personal brand and manage impactful events effortlessly.",
    longDesc:
      "We help individuals and brands build authority, visibility, and trust while managing professional events that create impact.",
    icon: "🌟",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const ServicesStats = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Professional Services to <br className="hidden sm:block" />
          <span className="text-pink-400">Power Your Business Growth</span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          HYPERNOVA (Pvt) Ltd delivers innovative digital solutions that help
          businesses grow, scale, and lead in the modern world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {serviceDetails.map((service, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="relative bg-white/5 border border-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition group overflow-hidden"
          >
            {/* Hover Animated Border */}
            <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-400/60 transition-all duration-500 pointer-events-none"></span>

            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-pink-500 mb-4 sm:mb-5 text-lg sm:text-xl">
              {service.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {service.desc}
            </p>

            <button
              onClick={() => setActiveService(service)}
              className="text-pink-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {activeService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-[#05010F] max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">

            {/* Close */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                {activeService.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {activeService.longDesc}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:novatecsaas@gmail.com"
                  className="flex-1 py-3 rounded-lg bg-blue-600 text-center"
                >
                  Mail Us
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="flex-1 py-3 rounded-lg bg-green-600 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesStats;
