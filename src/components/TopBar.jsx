import { useEffect, useState } from "react";

const TopBar = ({ show }) => {
  return (
    <div
      className={`hidden md:block fixed top-0 left-0 w-full z-[10000]
      bg-gradient-to-r from-blue-950 to-blue-900 text-sm transition-all duration-300
      ${show ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"}`}
    >
      <div className="px-10 h-full flex items-center justify-between text-gray-300">
        <div className="flex items-center gap-2">
          📍 <span> 87E, New Boundary Road, Batticaloa, Sri Lanka</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            📞 <span>+919380334317</span>
          </div>
          <div className="flex items-center gap-2">
            ✉️ <span>novatecsaas@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
