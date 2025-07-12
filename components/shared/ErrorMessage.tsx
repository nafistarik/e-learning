"use client";

import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import ZoomIn from "../motion/ZoomIn";

interface ErrorMessageProps {
  code?: string | number;
  message?: string;
  className?: string;
  hint?: string;
}

export default function ErrorMessage({
  code = "Error",
  message = "Something went wrong. Please try again.",
  className,
}: ErrorMessageProps) {
  return (
    <ZoomIn>
      <div
        className={cn(
          "w-full max-w-2xl mx-auto p-8 rounded-2xl bg-red-100 border border-red-200 text-center shadow-lg",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="rounded-full shadow-sm">
            <AlertTriangle className="h-16 w-16 text-destructive" />
          </div>
          <h2 className="text-5xl font-bold text-foreground">{code}</h2>
          <p className="text-lg font-medium text-muted-foreground">{message}</p>
        </div>
      </div>
    </ZoomIn>
  );
}
