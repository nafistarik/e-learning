"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 justify-center items-center text-center bg-background text-foreground px-4">
      {/* Icon */}
      <div className="animate-in fade-in zoom-in duration-500">
        <AlertTriangle className="h-16 w-16 text-destructive" />
      </div>

      {/* 404 Code */}
      <h1 className="text-7xl font-extrabold tracking-tight text-destructive animate-pulse">
        404
      </h1>

      {/* Message */}
      <p className="text-lg text-muted-foreground max-w-md animate-in fade-in delay-200">
        Oops! The page you&#39;re looking for doesn&#39;t exist or has been
        moved.
      </p>

      {/* Go Home Button */}
      <Link href="/" passHref>
        <Button asChild>
          <a>Go to home</a>
        </Button>
      </Link>

      {/* Floating icon animation (optional) */}
      {/* <div className="absolute bottom-12 animate-bounce">
        <svg
          className="w-12 h-12 opacity-30 text-primary"
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
      </div> */}
    </div>
  );
};

export default NotFound;
