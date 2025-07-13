"use client";

import { Button } from "@/components/ui/button";
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import Link from "next/link";
import { CourseCard } from "../courses/_components/CourseCard";
import SlideInRight from "@/components/motion/SlideInRight";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import { CourseCardLoading } from "../courses/_components/CourseCardLoading";
import ErrorMessage from "@/components/shared/ErrorMessage";

export function PopularCourses() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <section className="container py-20">
      <div className="space-y-12">
        <SlideInRight>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Explore Popular Courses
            </h2>
          </div>
        </SlideInRight>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[280px]">
          {isLoading &&
            [...Array(3)].map((_, index) => (
              <div key={index} className="h-full">
                <CourseCardLoading />
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

        <ZoomIn>
          <div className="text-center">
            <Button>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
