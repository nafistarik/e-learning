import type { Course } from "@/lib/data/courses"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ProfileCourseCardProps {
  course: Course
}

export function ProfileCourseCard({ course }: ProfileCourseCardProps) {
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

