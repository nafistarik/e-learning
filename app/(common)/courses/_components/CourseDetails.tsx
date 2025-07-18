"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useGetSingleCourseQuery } from "@/redux/api/courseApi";
import { usePathname } from "next/navigation";
import Loader from "@/components/shared/Loader";
import SlideInRight from "@/components/motion/SlideInRight";
import SlideInLeft from "@/components/motion/SlideInLeft";
import { useAddToFavouriteMutation } from "@/redux/api/favouriteApi";
import { useEnrollCourseMutation } from "@/redux/api/enrollApi";
import { toast } from "sonner";
import useProtectedAction from "@/hooks/useProtectedAction";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { cn } from "@/lib/utils";

export default function CourseDetails() {
  const pathName = usePathname();
  const courseId = pathName.split("/")[2];
  const { protect } = useProtectedAction();

  const {
    data: singleCourseData,
    isLoading: singleCourseLoading,
    isError: singleCourseError,
  } = useGetSingleCourseQuery(courseId);

  const [addToFavourite, { isLoading: favoriteLoading }] =
    useAddToFavouriteMutation();

  const [enrollCourse, { isLoading: enrollLoading }] =
    useEnrollCourseMutation();

  const onFavorite = (courseId: string) =>
    protect(async () => {
      const body = { courseId: courseId };
      try {
        const response = await addToFavourite(body).unwrap();
        if (response) {
          toast.success("Course added to favorite successfully!");
        }
      } catch {
        toast.error("Failed to add course to favorite. Please try again.");
      }
    })();

  const onEnroll = (courseId: string) =>
    protect(async () => {
      const body = { courseId: courseId };
      try {
        const response = await enrollCourse(body).unwrap();
        if (response) {
          toast.success("Course enrolled successfully!");
        }
      } catch {
        toast.error("Failed to enroll in course. Please try again.");
      }
    })();

  if (singleCourseLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (singleCourseError) {
    return (
      <div className="pt-32 container min-h-screen">
        <ErrorMessage message="Error fetching course data!" />
      </div>
    );
  }

  return (
    <section className="pt-28 pb-12 lg:pt-32 lg:pb-24 min-h-screen bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Course Image */}
        <SlideInLeft>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={singleCourseData.image || "/placeholder.svg"}
              alt={singleCourseData.title}
              width={1000}
              height={1000}
              priority
              className="w-full h-auto aspect-video object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </SlideInLeft>

        {/* Course Details */}
        <SlideInRight>
          <div className="flex flex-col justify-between h-full space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground">
                {singleCourseData.title}
              </h1>

              <div className="flex items-center gap-4 text-sm sm:text-base">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                  {singleCourseData.category}
                </span>
                <span className="text-lg font-semibold text-foreground">
                  ${singleCourseData.price}
                </span>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Description
                </h2>
                <p className="text-muted-foreground">
                  {singleCourseData.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className={cn(
                  "flex-1",
                  enrollLoading ? "cursor-not-allowed opacity-50" : ""
                )}
              >
                <Button
                  className="flex-1"
                  disabled={enrollLoading}
                  onClick={() => onEnroll(singleCourseData._id)}
                >
                  {enrollLoading ? "Enrolling..." : "Enroll Now"}
                </Button>
              </div>

              <div
                className={cn(
                  "flex-1",
                  favoriteLoading ? "cursor-not-allowed opacity-50" : ""
                )}
              >
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 border-gray-300 shadow-sm transition hover:bg-muted"
                  disabled={favoriteLoading}
                  onClick={() => onFavorite(singleCourseData._id)}
                >
                  <Heart className="h-5 w-5" />
                  {favoriteLoading ? "Adding..." : "Add to Favorites"}
                </Button>
              </div>
            </div>
          </div>
        </SlideInRight>
      </div>
    </section>
  );
}
