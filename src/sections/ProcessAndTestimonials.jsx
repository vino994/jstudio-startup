import { useEffect, useState } from "react";
import step1 from "../assets/service-2.svg";
import step2 from "../assets/service-3.png";
import step3 from "../assets/service-2.svg";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We understand your business goals and craft a winning digital strategy.",
    image: step1,
  },
  {
    step: "02",
    title: "Design & Development",
    desc: "We build high-performing software, websites, and digital solutions.",
    image: step2,
  },
  {
    step: "03",
    title: "Launch & Growth",
    desc: "We test, deploy, optimize, and scale your digital product for success.",
    image: step3,
  },
];

const testimonials = [
  {
    name: "PRITHVIRAJ K",
    role: "Social Media Activator",
    text: "HYPERNOVA delivered a powerful quiz-based platform for us at a very affordable cost. The features are smooth, user-friendly, and their support team is always responsive.",
  },
  {
    name: "ALEX JOHN",
    role: "Startup Founder",
    text: "From concept to launch, the HYPERNOVA team handled everything perfectly. The product quality and delivery speed exceeded our expectations.",
  },
  {
    name: "SARA WILLIAMS",
    role: "Marketing Lead",
    text: "Their SEO and digital marketing strategies gave us amazing visibility and leads. Very professional and creative team!",
  },
];

const ProcessAndTestimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 sm:px-10 py-16 sm:py-24 relative">

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-blue-500/30 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10">

        {/* ================= PROCESS ================= */}
        <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Proven Process for <br className="hidden sm:block" />
            <span className="text-pink-400">Digital Business Growth</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            At HYPERNOVA (Pvt) Ltd, we follow a structured and result-driven
            approach to deliver powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative mb-20 sm:mb-32">
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
              className="text-center relative group"
            >
              <div className="mb-6 sm:mb-8 flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
                />
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-pink-500 flex items-center justify-center text-xs sm:text-sm font-bold mb-4">
                {step.step}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Dashed line */}
          <div className="hidden md:block absolute top-[190px] left-0 right-0 border-t border-dashed border-white/20" />
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div
          className="relative bg-gradient-to-br from-blue-950 to-blue-900 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-12 text-center overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Slider */}
          <div className="relative overflow-hidden max-w-3xl mx-auto min-h-[220px] sm:min-h-[200px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full px-4"
                >
                  <div className="text-4xl sm:text-5xl text-pink-400 mb-3 sm:mb-4">
                    “
                  </div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                    {item.text}
                  </p>

                  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                    ★★★★★
                  </div>

                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndTestimonials;
