import logo from "../assets/nova-logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05010F]">
      
      {/* Glow */}
      <div className="absolute w-72 h-72 bg-pink-500/30 blur-[120px] rounded-full" />
      <div className="absolute w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full" />

      <img
        src={logo}
        alt="Hypernova Logo"
        className="w-24 h-24 object-contain animate-pulse"
      />

      <h1 className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        HYPERNOVA (PVT) Ltd
      </h1>

      <p className="text-gray-400 text-sm mt-2">
        Empowering Digital Growth
      </p>
    </div>
  );
};

export default Loader;
