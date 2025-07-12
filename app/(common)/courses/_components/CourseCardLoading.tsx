"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CourseCardLoading() {
  return (
    <Card className="overflow-hidden rounded-xl shadow-sm border flex flex-col h-full animate-pulse">
      {/* Skeleton Image */}
      <div className="relative w-full aspect-video bg-muted">
        <Skeleton className="w-full h-full" />
        <div className="absolute top-3 right-3">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Skeleton Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Title */}
        <Skeleton className="h-5 w-3/4 rounded" />
        {/* Description */}
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />

        {/* Price */}
        <Skeleton className="h-5 w-16 mt-1 rounded" />

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <Skeleton className="h-10 w-full rounded-md flex-1" />
          <Skeleton className="h-10 w-full rounded-md flex-1" />
        </div>
      </div>
    </Card>
  );
}
