"use client"

import type { Course } from "@/lib/data/courses"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart } from "lucide-react"

interface CourseCardProps {
  course: Course
  onFavorite?: (courseId: number) => void // Made optional
  onEnroll?: (courseId: number) => void // Made optional
}

export function CourseCard({ course }: CourseCardProps) {

  const onFavorite = (courseId: number) => {
    console.log(`Favorite course ID: ${courseId}`)
  }

  // Simply log the course ID when enrolling
  const onEnroll = (courseId: number) => {
    console.log(`Enrolled in course ID: ${courseId}`)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={400}
          height={200}
          className="aspect-video object-cover"
        />
        {onFavorite && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2" 
            onClick={() => onFavorite(course.id)}
          >
            <Heart className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">${course.price}</p>
          </div>
          {onEnroll && <Button onClick={() => onEnroll(course.id)}>Enroll Now</Button>}
        </div>
      </div>
    </Card>
  )
}
