"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "./CourseCard";
import { categories } from "@/lib/data/categories";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import { Course } from "@/lib/data/courses";

// Import Animations
import SlideInRight from "@/components/motion/SlideInRight";
import ZoomIn from "@/components/motion/ZoomIn";

export default function CoursesComponent() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});

  return (
    <div className="pt-28 pb-12 lg:pt-32 lg:pb-24  min-h-[calc(100vh-70px)] flex flex-col justify-center">
      {/* Header & Filters */}
      <SlideInRight>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">All Courses</h1>
            <p className="text-muted-foreground text-lg">
              Browse our collection of courses
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              placeholder="Search courses..."
              className="max-w-xs border border-gray-300 shadow-sm"
            />
            <Select>
              <SelectTrigger className="w-[180px] border border-gray-300 shadow-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category.name}
                    value={category.name.toLowerCase()}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </SlideInRight>

      {/* Course Grid with Animations */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          [...Array(6)].map((_, index) => (
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
          courses.courses.map((course: Course) => (
            <ZoomIn key={course._id}>
              <CourseCard course={course} />
            </ZoomIn>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
