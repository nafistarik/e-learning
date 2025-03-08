import React from "react";
import "./loadingWave.css";

const LoadingWave: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-4 scale-75">
      <div className="loader "></div>
    </div>
  );
};

export default LoadingWave;
