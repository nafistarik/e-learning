import React from "react";
import "./loadingWave.css";

const LoadingWave: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-2">
      <div className="loader scale-25"></div>
    </div>
  );
};

export default LoadingWave;
