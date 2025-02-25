import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-white text-black space-y-4">
      {/* Animated 404 Text */}
      <h1 className="text-7xl font-extrabold text-gray-900 animate-pulse">
        404
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-lg font-medium max-w-md animate-fadeIn">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      {/* Home Button with Smooth Hover */}
      <Link href="/">
        <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 active:scale-95">
          Go Home
        </button>
      </Link>

      {/* Floating Animation Effect */}
      <div className="absolute bottom-10">
        <div className="w-16 h-16 bg-gray-300 opacity-50 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default NotFound;
