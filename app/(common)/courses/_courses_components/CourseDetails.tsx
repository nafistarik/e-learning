"use client";
import DOMPurify from "dompurify";
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

const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html);
};

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

              <div className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Description
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(
                      singleCourseData.description ||
                        "<p>No description provided</p>"
                    ),
                  }}
                  className="[&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic"
                />
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
      {/* PDF Preview Section */}
      {singleCourseData.pdf && (
          <div className="mt-8 bg-muted/50 p-4 rounded-xl border container">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Course Materials
              </h2>
              <div className="flex gap-2">
                <a
                  href={singleCourseData.pdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
                {/* <a
                href={singleCourseData.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Open in New Tab
              </a> */}
              </div>
            </div>

            {/* PDF Preview Container */}
            <div className="relative w-full h-[500px] bg-white rounded-lg border shadow-sm overflow-hidden">
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(
                  singleCourseData.pdf
                )}&embedded=true`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                title="PDF Preview"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">
                    Loading PDF preview...
                  </p>
                </div>
              </iframe>
            </div>

            {/* Fallback message */}
            <p className="mt-3 text-sm text-muted-foreground">
              If the PDF doesn&apost load, you can download it using the button
              above.
            </p>
          </div>
      )}
    </div>
  );
}
