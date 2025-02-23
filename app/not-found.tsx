"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import errorAnimation from "@/app/assets/loading-animation.json";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-white text-black">

      <div>
      <Lottie className="h-48 w-48 scale-150" animationData={errorAnimation} />
      </div>

      <h1 className="text-4xl font-bold text-gray-900">
        404 - Page Not Found
      </h1>

      <p className="text-gray-600 font-medium mt-2 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg font-medium shadow-md transition hover:bg-gray-800">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
