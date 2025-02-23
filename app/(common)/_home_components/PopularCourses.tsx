"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_courses_components/CourseCard";
import SlideInRight from "@/components/motion/SlideInRight";
import ZoomIn from "@/components/motion/ZoomIn";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="container py-16">
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
            <p className="text-red-500">Failed to load courses. Please try again.</p>
          ) : courses?.courses?.length > 0 ? (
            courses.courses
              .slice(0, 3)
              .map((course: Course) => (
                <ZoomIn key={course._id}>
                  <CourseCard course={course} />
                </ZoomIn>
              ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No courses available.
            </p>
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
