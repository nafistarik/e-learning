

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CourseCard } from "../courses/_components/CourseCard"
import { Course } from "@/lib/data/courses"

interface PopularCoursesProps {
  courses: Course[]
}

export function PopularCourses({ courses }: PopularCoursesProps) {
  // Simply log the course ID when favoriting
  return (
    <section className="container py-12">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Explore Popular Courses</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <CourseCard
              key={course.id} 
              course={course} 
            />
          ))}
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
