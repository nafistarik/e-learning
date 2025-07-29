"use client";

import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_components/course-card";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { Wallpaper } from "lucide-react";
import { UiButton } from "@/components/ui/ui-button";
import { Course } from "@/types/course-types";
import CoursesSkeleton from "../courses/_components/courses-skeleton";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Explore Popular Courses
        </h2>
      </div>

      {isLoading ? (
        <CoursesSkeleton />
      ) : isError ? (
        <ErrorMessage code={404} message="Course not found." />
      ) : courses.courses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.courses.slice(0, 3).map((course: Course) => (
            <ZoomIn key={course._id}>
              <CourseCard course={course} />
            </ZoomIn>
          ))}
        </div>
      ) : (
        <EmptyStateMessage message="No courses match your search." />
      )}

      <div className="flex justify-center">
        <ZoomIn>
          <div className="inline-block">
            <UiButton asChild>
              <Link href="/courses" className="inline-flex gap-2 items-center">
                <Wallpaper />
                View All Courses
              </Link>
            </UiButton>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
