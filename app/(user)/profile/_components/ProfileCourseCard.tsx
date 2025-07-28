
import { Card } from "@/components/ui/card"
import { CourseCardProps } from "@/types/course-types"
import Image from "next/image"

export function ProfileCourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col gap-4 p-4 sm:flex-row">
      <Image
        src={course.image || "/placeholder.svg"}
        alt={course.title}
        width={200}
        height={120}
        className="rounded-lg object-cover sm:w-48"
      />
      <div>
        <h3 className="font-semibold">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">by {course.instructor}</p>
      </div>
    </Card>
  )
}
