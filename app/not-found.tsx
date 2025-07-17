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

      {/* Go to Home Button */}
      <Link href="/" passHref>
        <Button asChild>
          <a>Go to Home</a>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
