const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-background">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-muted border-t-primary rounded-full animate-spin" />
        <span
          className="absolute text-4xl font-extrabold text-primary animate-pulse tracking-widest"
          style={{ transform: "scaleY(1.2)" }}
        >
          {"</>"}
        </span>
      </div>

      <p className="text-muted-foreground text-base animate-pulse tracking-wide font-bold">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
