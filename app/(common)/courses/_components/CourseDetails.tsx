"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useGetSingleCourseQuery } from "@/redux/api/courseApi";
import { usePathname } from "next/navigation";
import Loader from "@/components/shared/Loader";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import SlideInRight from "@/components/motion/SlideInRight";
import SlideInLeft from "@/components/motion/SlideInLeft";
import { useAddToFavouriteMutation } from "@/redux/api/favouriteApi";
import { useEnrollCourseMutation } from "@/redux/api/enrollApi";
import { toast } from "sonner";

export default function CourseDetails() {
  const pathName = usePathname();
  const courseId = pathName.split("/")[2];

  const {
    data: singleCourseData,
    isLoading: singleCourseLoading,
    isError: singleCourseError,
  } = useGetSingleCourseQuery(courseId);

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

  if (singleCourseLoading)
    return (
      <div className="min-h-screen">
        <Loader />
      </div>
    );
  if (singleCourseError)
    return (
      <div className="pt-32 container min-h-screen">
        <EmptyStateMessage message="Error fetching course data!" />
      </div>
    );

  return (
    <div className="pt-28 pb-12 lg:pt-32 lg:pb-24 min-h-screen flex flex-col justify-center container">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
        <SlideInLeft>
          <div className="relative overflow-hidden w-full rounded-lg shadow-lg aspect-[16/9]">
            <Image
              src={singleCourseData.image || "/placeholder.svg"}
              alt={singleCourseData.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover aspect-[16/9] hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </SlideInLeft>

        <SlideInRight>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {singleCourseData.title}
              </h1>
              <div className="flex items-center mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {singleCourseData.category}
                </span>
                {/* <span className="ml-4 text-lg font-bold">
                  ${singleCourseData.price}
                </span> */}
              </div>

              <div className="mb-2">
                <h2 className="text-xl font-semibold">Instructor</h2>
                <p className="text-lg">{singleCourseData.instructor}</p>
              </div>

              <div className="mb-2">
                <h2 className="text-xl font-semibold ">Description</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {singleCourseData.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                onClick={() => onEnroll(singleCourseData._id)}
                className="flex-1"
              >
                {enrollLoading ? "Enrolling..." : "Enroll Now"}
              </Button>

              <Button
                variant="outline"
                className="flex-1 flex items-center gap-2 border-gray-300 shadow-md transition-all duration-300 hover:bg-gray-100"
                onClick={() => onFavorite(singleCourseData._id)}
              >
                <Heart className="h-5 w-5" />
                {favoriteLoading ? "Adding..." : "Add to Favorites"}
              </Button>
            </div>
            {favoriteError && (
              <p className="text-red-500 font-bold pt-2">
                Failed to favorite course
              </p>
            )}
            {enrollError && (
              <p className="text-red-500 font-bold pt-2">
                Failed to enroll in course
              </p>
            )}
          </div>
        </SlideInRight>
      </div>
    </div>
  );
}
