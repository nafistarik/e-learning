"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_components/CourseCard";
import SlideInRight from "@/components/motion/SlideInRight";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="container py-20">
      <div className="space-y-12">
        {/* Title */}
        <SlideInRight>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Explore Popular Courses
            </h2>
          </div>
        </SlideInRight>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[280px]">
          {/* Loading */}
          {isLoading &&
            [...Array(3)].map((_, index) => (
              <div key={index} className="h-full">
                <Skeleton className="w-full h-[280px] rounded-xl shadow-md" />
              </div>
            ))}

          {/* Error */}
          {isError && (
            <div className="col-span-full flex justify-center">
              <div className="flex items-center gap-3 px-4 py-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-md shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M9.172 16.828A4 4 0 1014.83 11.17a4 4 0 00-5.656 5.656z"
                  />
                </svg>
                <span className="font-medium">Failed to load courses. Please try again.</span>
              </div>
            </div>
          )}

          {/* Courses */}
          {!isLoading && !isError && courses?.courses?.length > 0 ? (
            courses.courses.slice(0, 3).map((course: Course) => (
              <ZoomIn key={course._id}>
                <div className="h-full">
                  <CourseCard course={course} />
                </div>
              </ZoomIn>
            ))
          ) : (
            !isLoading &&
            !isError && (
              <div className="col-span-full">
                <EmptyStateMessage message="No courses are here at the moment" />
              </div>
            )
          )}
        </div>

        {/* Button */}
        <ZoomIn>
          <div className="text-center">
            <Button
              asChild
              className="px-6 py-3 text-lg font-semibold rounded-md shadow-sm hover:-translate-y-0.5 transition-all"
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
