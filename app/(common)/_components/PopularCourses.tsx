"use client";

import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_components/course-card";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { Wallpaper } from "lucide-react";
import { UiButton } from "@/components/ui/ui-button";
import { CourseCardSkeleton } from "../courses/_components/course-card-skeleton";
import { Course } from "@/types/course-types";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="container py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Explore Popular Courses
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[280px]">
          {isLoading &&
            [...Array(3)].map((_, index) => (
              <div key={index} className="h-full">
                <CourseCardSkeleton />
              </div>
            ))}

          {!isLoading && !isError && courses?.courses?.length > 0
            ? courses.courses.slice(0, 3).map((course: Course) => (
                <ZoomIn key={course._id}>
                  <div className="h-full">
                    <CourseCard course={course} />
                  </div>
                </ZoomIn>
              ))
            : !isLoading &&
              !isError && (
                <div className="col-span-full">
                  <EmptyStateMessage message="No courses are here at the moment" />
                </div>
              )}
        </div>

        {isError && <ErrorMessage code={404} message="Course not found." />}

        <div className="flex justify-center">
          <ZoomIn>
            <div className="inline-block">
              <UiButton asChild>
                <Link
                  href="/courses"
                  className="inline-flex gap-2 items-center"
                >
                  <Wallpaper />
                  View All Courses
                </Link>
              </UiButton>
            </div>
          </ZoomIn>
        </div>
      </div>
    </section>
  );
}
