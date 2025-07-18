"use client";

import type { Course } from "@/lib/data/courses";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, Loader2 } from "lucide-react";
import { useAddToFavouriteMutation } from "@/redux/api/favouriteApi";
import { toast } from "sonner";
import { useEnrollCourseMutation } from "@/redux/api/enrollApi";
import Link from "next/link";
import useProtectedAction from "@/hooks/useProtectedAction";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { protect } = useProtectedAction();

  const [addToFavourite, { isLoading: favoriteLoading }] =
    useAddToFavouriteMutation();

  const [enrollCourse, { isLoading: enrollLoading }] =
    useEnrollCourseMutation();

  const onFavorite = protect(async () => {
    try {
      const response = await addToFavourite({ courseId: course._id }).unwrap();
      if (response) {
        toast.success("Course added to favorite successfully!");
      }
    } catch (err) {
      console.error("Favorite error:", err);
      toast.error("Failed to add to favorites. Try again.");
    }
  });

  const onEnroll = protect(async () => {
    try {
      const response = await enrollCourse({ courseId: course._id }).unwrap();
      if (response) {
        toast.success("Course enrolled successfully!");
      }
    } catch (err) {
      console.error("Enroll error:", err);
      toast.error("Failed to enroll in course. Try again.");
    }
  });

  return (
    <Card className="overflow-hidden rounded-xl shadow-sm border flex flex-col h-full">
      {/* Image */}
      <div className="relative group overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={400}
          height={200}
          priority
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Button */}

        <Button
          variant="ghost"
          size="icon"
          disabled={favoriteLoading}
          onClick={onFavorite}
          className={cn(
            "bg-muted hover:bg-accent border border-border absolute top-3 right-3",
            favoriteLoading &&
              "cursor-not-allowed opacity-50 pointer-events-none"
          )}
        >
          {favoriteLoading ? (
            <Loader2 className="h-5 w-5 animate-spin"  />
          ) : (
            <Heart className="h-5 w-5 text-primary" fill="currentColor"/>
          )}
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-semibold text-lg text-foreground line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        <p className="text-lg font-bold text-primary mt-1">${course.price}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link href={`/courses/${course._id}`} className="flex-1">
            <Button variant="outline">View Details</Button>
          </Link>
          <div
            className={cn(
              "flex-1",
              enrollLoading ? "cursor-not-allowed opacity-50" : ""
            )}
          >
            <Button disabled={enrollLoading} onClick={onEnroll}>
              {enrollLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enrolling...
                </span>
              ) : (
                "Enroll"
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
