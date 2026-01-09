const ComingSoon = ({ title }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-gray-400 text-sm sm:text-base">
        This page is under construction. We’re working hard to launch it soon 🚀
      </p>
    </div>
  );
};

export default ComingSoon;
