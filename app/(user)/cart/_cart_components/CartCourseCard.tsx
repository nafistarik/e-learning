"use client"

import type { Course } from "@/lib/data/courses"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
// import { Trash2 } from "lucide-react"
import { useEnrollCourseMutation } from "@/redux/api/enrollApi"
import { toast } from "sonner"

interface CartCourseCardProps {
  course: Course
}

export function CartCourseCard({ course }: CartCourseCardProps) {

  const [enrollCourse, { isLoading: enrollLoading, isError: enrollError }] =
  useEnrollCourseMutation();

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

  // const onRemove = (courseId: string) => {
  //   console.log(`Deleted course ID: ${courseId}`)
  // }

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
          <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
          <p className="mt-2 text-sm text-muted-foreground">by {course.instructor}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${course.price}</p>
          <div className="flex gap-2">
          {enrollLoading && <p className="font-bold pt-2">Loading...</p>}
        {enrollError && (
          <p className="text-red-500 font-bold pt-2">Failed to enroll in course</p>
        )}
            {/* <Button variant="destructive" size="icon" onClick={() => onRemove(course._id)}>
              <Trash2 className="h-4 w-4" />
            </Button> */}
            <Button onClick={() => onEnroll(course._id)}>Enroll Now</Button>
            
      
          </div>
        </div>
      </div>
    </Card>
  )
}

