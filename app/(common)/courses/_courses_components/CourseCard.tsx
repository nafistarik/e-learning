"use client";

import type { Course } from "@/lib/data/courses";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useAddToFavouriteMutation } from "@/redux/api/favouriteApi";
import { toast } from "sonner";
import { useEnrollCourseMutation } from "@/redux/api/enrollApi";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [addToFavourite, { isLoading: favoriteLoading, error: favoriteError }] =
    useAddToFavouriteMutation();

  const [enrollCourse, { isLoading: enrollLoading, isError: enrollError }] =
    useEnrollCourseMutation();

  const onFavorite = async (courseId: string) => {
    console.log(`Favorite course ID: ${courseId}`);
    const body = { courseId: courseId };

    try {
      const response = await addToFavourite(body).unwrap();
      if (response) {
        toast.success("Course added to favorite successfully!");
      }
    } catch (err) {
      console.error("Failed to add course to favorite:", err);
      toast.error("Failed to add course to favorite. Please try again.");
    }
  };

  const onEnroll = async (courseId: string) => {
    console.log(`Enrolled in course ID: ${courseId}`);
    const body = { courseId: courseId };

    try {
      const response = await enrollCourse(body).unwrap();
      if (response) {
        toast.success("Course enrolled successfully!");
      }
    } catch (err) {
      console.error("Failed to enroll in course:", err);
      toast.error("Failed to enroll in course. Please try again.");
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={400}
          height={200}
          className="aspect-video w-full object-cover bg-gray-100 hover:scale-105 transition duration-500 ease-in-out"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white border border-gray-300"
          onClick={() => onFavorite(course._id)}
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <div className="p-4 pt-12">
        <h3 className="font-semibold">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        <div>
          <p className="mt-2 text-lg font-bold">${course.price}</p>
        </div>
        <div className="mt-4 flex items-center gap-4 justify-between">
          <Link href={`/courses/${course._id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 border-gray-300 shadow-md transition-all duration-300 hover:bg-gray-100"
            >
              View Details
            </Button>
          </Link>
          <Button className="flex-1" onClick={() => onEnroll(course._id)}>
            Enroll Now
          </Button>
        </div>
        {favoriteLoading && <p className="font-bold pt-2">Loading...</p>}
        {favoriteError && (
          <p className="text-red-500 font-bold pt-2">
            Failed to favorite course
          </p>
        )}
        {enrollLoading && <p className="font-bold pt-2">Loading...</p>}
        {enrollError && (
          <p className="text-red-500 font-bold pt-2">
            Failed to enroll in course
          </p>
        )}
      </div>
    </Card>
  );
}
