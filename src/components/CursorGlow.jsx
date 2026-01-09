import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth trailing animation
  useEffect(() => {
    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.08,
        y: prev.y + (position.y - prev.y) * 0.08,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [position]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
      background: `
  radial-gradient(200px at ${smooth.x}px ${smooth.y}px, rgba(236,72,153,0.25), transparent 70%),
  radial-gradient(400px at ${smooth.x}px ${smooth.y}px, rgba(59,130,246,0.2), transparent 80%)
`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
};

export default CursorGlow;
