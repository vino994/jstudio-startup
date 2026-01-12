const Contact = () => {
  return (
    <section className="relative px-6 sm:px-10 py-16 sm:py-24">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      {/* ================= HERO ================= */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-4">
          Contact Us
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Let’s Build Something <br className="hidden sm:block" />
          <span className="text-pink-400">Amazing Together</span>
        </h1>

        <p className="text-gray-400 mt-5 text-sm sm:text-base">
          Have a project in mind? Get in touch with HYPERNOVA (PVT) Ltd
          and let’s turn your ideas into reality.
        </p>
      </div>

      {/* ================= CONTACT CARDS ================= */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "Call Us",
            value: "+94 9380 334317",
            icon: "📞",
            link: "tel:+949380334317",
          },
          {
            title: "Email",
            value: "novatecsaas@gmail.com",
            icon: "✉️",
            link: "mailto:novatecsaas@gmail.com",
          },
          {
            title: "WhatsApp",
            value: "Chat with us",
            icon: "💬",
            link: "https://wa.me/919999999999",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 backdrop-blur p-6 rounded-2xl flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <div>
              <p className="text-gray-400 text-sm">{item.title}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* ================= FORM + MAP ================= */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[350px] sm:h-[420px]">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Sri%20Lanka&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default Contact;
