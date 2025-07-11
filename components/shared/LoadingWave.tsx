import React from "react";
import "./loadingWave.css";

const LoadingWave: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-4 scale-90">
      <div className="wave-loader">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
      </div>
    </div>
  );
};

export default LoadingWave;
