const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 border-[3px] border-[#bfc1c2] border-t-[#1f2937] rounded-full animate-spin"></div>

        <span
          className="absolute text-3xl font-extrabold text-[#1f2937] animate-pulse leading-tight tracking-wider"
          style={{ transform: "scaleY(1.4)", letterSpacing: "4px" }}
        >
          {"</>"}
        </span>
      </div>
    </div>
  );
};

export default Loader;
