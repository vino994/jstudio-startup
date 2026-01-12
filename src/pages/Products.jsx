import { useState } from "react";

const productsData = [
  {
    title: "Business CRM System",
    desc: "Manage customers, leads, and sales pipelines efficiently.",
    longDesc:
      "Our CRM system helps you automate workflows, track leads, manage customers, and boost your sales productivity with real-time insights and analytics.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "E-Commerce Platform",
    desc: "Fully customizable and scalable online store solution.",
    longDesc:
      "Launch your online store with secure payments, inventory tracking, and conversion-focused UI to grow your business online.",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time insights and data visualization tools.",
    longDesc:
      "Make smarter decisions with interactive dashboards, reports, and real-time business insights.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Learning Management System",
    desc: "Powerful LMS for online education and training.",
    longDesc:
      "Create, manage, and sell online courses with student tracking, quizzes, and analytics.",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "Booking & Scheduling App",
    desc: "Automate appointments and reservations.",
    longDesc:
      "Allow users to book appointments easily with automated reminders and calendar sync.",
    icon: "📅",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    title: "POS & Billing System",
    desc: "Fast, secure, and reliable billing solutions.",
    longDesc:
      "Streamline billing, manage inventory, and generate invoices with our POS system.",
    icon: "💳",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section className="relative px-6 sm:px-10 py-16 sm:py-24">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      {/* ================== HERO ================== */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 mb-20">

        {/* Content */}
        <div data-aos="fade-right">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-4">
            Our Products
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Smart Digital Products <br className="hidden sm:block" />
            Built for <span className="text-pink-400">Scalability</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-xl text-sm sm:text-base">
            At HYPERNOVA (PVT) Ltd, we design and develop powerful digital
            products that solve real business problems and drive growth.
          </p>

          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            Our products are engineered for performance, security, and
            seamless user experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 shadow-lg hover:scale-105 transition">
              Explore Products
            </button>

            <button  onClick={() => window.location.href = "tel:+949380334317"} className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Request Demo
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Digital Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* ================== PRODUCTS GRID ================== */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our <span className="text-pink-400">Products</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Smart digital products built to scale your business.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {productsData.map((product, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-pink-500 mb-4 text-lg">
              {product.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {product.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {product.desc}
            </p>

            <button
              onClick={() => setActiveProduct(product)}
              className="text-pink-400 text-sm hover:underline"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* ================== MODAL ================== */}
      {activeProduct && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#05010F] max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 relative">

            {/* Close */}
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                {activeProduct.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {activeProduct.longDesc}
              </p>

              {/* CONTACT */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@hypernova.com"
                  className="flex-1 py-3 rounded-lg bg-blue-600 text-center"
                >
                  Mail Us
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-lg bg-green-600 text-center"
                >
                  WhatsApp
                </a>

                <a
                  href="tel:+949380334317"
                  className="flex-1 py-3 rounded-lg bg-pink-600 text-center"
                >
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Products;
