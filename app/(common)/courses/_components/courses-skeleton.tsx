import React from "react";
import { CourseCardSkeleton } from "./course-card-skeleton";

const CoursesSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="h-full">
          <CourseCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default CoursesSkeleton;
