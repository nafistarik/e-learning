"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_courses_components/CourseCard";
import SlideInRight from "@/components/motion/SlideInRight";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="container py-16 ">
      <div className="space-y-8">
        <SlideInRight>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Explore Popular Courses
            </h2>
          </div>
        </SlideInRight>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            [...Array(3)].map((_, index) => (
              <Skeleton key={index} className="h-[250px] w-full rounded-lg" />
            ))
          ) : isError ? (
            <div className="flex items-center gap-2 p-3 text-red-700 bg-red-100 border border-red-300 rounded-md">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M9.172 16.828A4 4 0 1014.83 11.17a4 4 0 00-5.656 5.656z"
                ></path>
              </svg>
              <p className="font-bold">
                Failed to load courses. Please try again.
              </p>
            </div>
          ) : courses?.courses?.length > 0 ? (
            courses.courses.slice(0, 3).map((course: Course) => (
              <ZoomIn key={course._id}>
                <CourseCard course={course} />
              </ZoomIn>
            ))
          ) : (
            <EmptyStateMessage message="No courses are here at the moment" />
          )}
        </div>

        <ZoomIn>
          <div className="text-center">
            <Button asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
