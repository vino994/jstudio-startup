import { useState } from "react";

const serviceDetails = [
  {
    title: "Software Development",
    desc: "Custom-built, scalable, and secure software solutions tailored to your business needs.",
    longDesc:
      "We develop powerful, secure, and scalable software solutions tailored to your business needs.",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Web Development",
    desc: "High-performance, responsive, and modern websites.",
    longDesc:
      "Our websites are fast, responsive, SEO-friendly, and designed to convert.",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies.",
    longDesc:
      "We grow your brand using proven digital marketing strategies.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
];

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600">
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{value}</h3>
    <p className="text-xs text-gray-300">{label}</p>
  </div>
);

const Divider = () => (
  <div className="hidden sm:block w-px h-14 bg-white/20"></div>
);

const ServicesStats = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* ===== STATS BAR ===== */}
      <div className="mb-20">
        <div className="custom-shape1 bg-gradient-to-r from-[#020024] via-[#090979] to-[#0000ff] text-white py-10 px-6 sm:px-12 shadow-xl">

          {/* Mobile = 2x2 | Desktop = row */}
          <div className="grid grid-cols-2 gap-8 sm:flex sm:justify-between sm:items-center">

            <StatItem icon="👍" value="120+" label="Happy Clients" />
            <Divider />

            <StatItem icon="🏆" value="154+" label="Finished Projects" />
            <Divider />

            <StatItem icon="💼" value="15+" label="Skilled Experts" />
            <Divider />

            <StatItem icon="👥" value="99%" label="Client Satisfaction" />
          </div>
        </div>
      </div>

      {/* ===== HEADING ===== */}
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

      {/* ===== SERVICES GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {serviceDetails.map((service, i) => (
          <div
            key={i}
            className="relative bg-white/5 border border-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition group overflow-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-pink-500 mb-4 sm:mb-5">
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
              className="text-pink-400 text-sm flex items-center gap-2"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* ===== POPUP ===== */}
      {activeService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-[#05010F] max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">

            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/20 border border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.8)]"
            >
              ✕
            </button>

            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                {activeService.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {activeService.longDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesStats;
