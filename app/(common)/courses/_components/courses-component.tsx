"use client";

import React, { useState } from "react";
import { CourseCard } from "./course-card";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ZoomIn from "@/components/motion/ZoomIn";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import { categories } from "@/lib/data/categories";
import { LayoutList } from "lucide-react";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { CourseCardSkeleton } from "./course-card-skeleton";
import { Course } from "@/types/course-types";

export default function CoursesComponent() {
  const { data: coursesData, isLoading, isError } = useGetCoursesQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredCourses =
    coursesData?.courses
      ?.filter((course: Course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((course: Course) =>
        filterCategory
          ? course.category.toLowerCase() === filterCategory.toLowerCase()
          : true
      ) || [];

  return (
    <div className="pt-28 pb-12 lg:pt-32 lg:pb-24 min-h-[calc(100vh)] flex flex-col container">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">All Courses</h1>
          <p className="text-muted-foreground text-lg">
            Browse our collection of courses
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Courses..."
            className="max-w-xl border border-gray-300 shadow-sm min-w-[300px]"
            type="search"
            aria-label="Search Courses"
          />
          <Select
            value={filterCategory}
            onValueChange={(value) => setFilterCategory(value)}
          >
            <SelectTrigger className="max-w-xl w-full min-w-[200px] border border-gray-300 shadow-sm [&_svg]:hidden ">
              <SelectValue placeholder="Category" />
              <LayoutList className="w-4 h-4 !flex" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category) => (
                <SelectItem
                  key={category.name}
                  value={category.name.toLowerCase()}
                  className="hover:cursor-pointer"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-full">
              <CourseCardSkeleton />
            </div>
          ))}
        </div>
      ) : isError ? (
        <ErrorMessage code={404} message="Course not found." />
      ) : filteredCourses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course: Course) => (
            <ZoomIn key={course._id}>
              <CourseCard course={course} />
            </ZoomIn>
          ))}
        </div>
      ) : (
        <EmptyStateMessage message="No courses match your search." />
      )}
    </div>
  );
}
