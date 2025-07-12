"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-background text-foreground px-4">
      {/* Icon */}
      <div className="mb-4 animate-in fade-in zoom-in duration-500">
        <AlertTriangle className="h-16 w-16 text-destructive" />
      </div>

      {/* 404 Code */}
      <h1 className="text-7xl font-extrabold tracking-tight text-destructive animate-pulse">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg text-muted-foreground max-w-md animate-in fade-in delay-200">
        Oops! The page you&#39;re looking for doesn&#39;t exist or has been moved.
      </p>

      {/* Go Home Button */}
      <Link href="/" className="animate-in fade-in delay-300">
        <button className="mt-6 px-6 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:scale-105 active:scale-95">
          Go Home
        </button>
      </Link>

      {/* Floating icon animation (optional) */}
      <div className="absolute bottom-12 animate-bounce">
        <svg
          className="w-12 h-12 opacity-30 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
