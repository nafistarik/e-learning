"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEnrollCourseMutation } from "@/redux/api/enrollApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Course } from "@/types/course-types";

interface CartCourseCardProps {
  course: Course;
}

export function CartCourseCard({ course }: CartCourseCardProps) {
  const [enrollCourse, { isLoading: enrollLoading }] =
    useEnrollCourseMutation();

  // const [removeFavorite, { isLoading: removeLoading, isError: removeError }] =
  //   useRemoveFromFavouriteMutation();

  const onEnroll = async (courseId: string) => {
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

  // const onRemove = async (courseId: string) => {
  //   try {
  //     await removeFavorite(courseId);
  //     if (!removeLoading && !removeError) {
  //       toast.success("Course removed from favorites successfully!");
  //     }
  //   } catch (err) {
  //     console.error("Failed to remove course from favorite:", err);
  //     toast.error("Failed to remove course from favorites. Please try again.");
  //   }
  // };

  return (
    <Card className="flex flex-col gap-4 p-4 sm:flex-row">
      <Image
        src={course.image || "/placeholder.svg"}
        alt={course.title}
        width={200}
        height={120}
        className="rounded-lg object-cover w-full sm:w-56 aspect-[4/3]"
      />
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <h3 className="font-semibold">{course.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {course.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className={enrollLoading ? "cursor-not-allowed opacity-50" : ""}>
            <Button
              disabled={enrollLoading}
              onClick={() => onEnroll(course._id)}
            >
              {enrollLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enrolling...
                </span>
              ) : (
                "Enroll Now"
              )}
            </Button>
          </div>
          <p className="text-lg font-bold">${course.price}</p>
        </div>
      </div>
    </Card>
  );
}
