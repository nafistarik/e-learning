"use client";
import DOMPurify from "dompurify";
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

const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html);
};

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

            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className={cn(
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
      {/* PDF Preview Section */}
      {singleCourseData.pdf && (
<div className="container">
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
                <p className="text-muted-foreground">Loading PDF preview...</p>
              </div>
            </iframe>
          </div>

          {/* Fallback message */}
          <p className="mt-3 text-sm text-muted-foreground">
            If the PDF doesn&apost load, you can download it using the button
            above.
          </p>
        </div>
</div>

      )}
    </section>
  );
}
