import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

const clickSound = new Howl({
  src: ["/click.mp3"], // Put this file in /public
  volume: 0.4,
});

const ScrollToTopUltra = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const btnRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = Math.min((scrollTop / docHeight) * 100, 100);

      setProgress(percent);
      setVisible(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic hover
  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
      scale(1.15)
    `;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform =
      "translate(0px, 0px) scale(1)";
  };

  const triggerRipple = () => {
    const ripple = rippleRef.current;
    ripple.classList.remove("animate");
    void ripple.offsetWidth;
    ripple.classList.add("animate");
  };

  const scrollToTop = () => {
    clickSound.play();
    triggerRipple();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <div
        ref={btnRef}
        onClick={scrollToTop}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-16 h-16 cursor-pointer flex items-center justify-center rounded-full
        bg-[#05010F]/70 backdrop-blur-xl
        border border-blue-400/30
        shadow-[0_0_30px_rgba(59,130,246,0.7)]
        transition-all duration-300
        group overflow-hidden"
        style={{
          transitionTimingFunction:
            "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Liquid morph glow */}
        <span className="absolute inset-0 rounded-full liquid-glow" />

        {/* Ripple */}
        <span
          ref={rippleRef}
          className="absolute inset-0 rounded-full ripple"
        />

        {/* Progress Ring */}
        <svg
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          viewBox="0 0 52 52"
        >
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow */}
        <svg
          className="relative z-10 w-5 h-5 text-white group-hover:-translate-y-1 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>

        {/* Scroll % */}
        <div className="absolute -top-6 text-[10px] text-blue-400 font-semibold">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopUltra;
