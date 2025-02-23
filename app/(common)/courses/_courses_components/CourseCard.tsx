"use client"

import type { Course } from "@/lib/data/courses"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart } from "lucide-react"

interface CourseCardProps {
  course: Course
  onFavorite?: (courseId: string) => void // Made optional
  onEnroll?: (courseId: string) => void // Made optional
}

export function CourseCard({ course }: CourseCardProps) {

  const onFavorite = (courseId: string) => {
    console.log(`Favorite course ID: ${courseId}`)
  }

  // Simply log the course ID when enrolling
  const onEnroll = (courseId: string) => {
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
          className="aspect-video object-cover bg-gray-100 hover:scale-105 transition duration-500 ease-in-out"
        />
        {onFavorite && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 bg-white border border-gray-300" 
            onClick={() => onFavorite(course._id)}
          >
            <Heart className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="p-4 pt-12">
        <h3 className="font-semibold">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">${course.price}</p>
          </div>
          {onEnroll && <Button onClick={() => onEnroll(course._id)}>Enroll Now</Button>}
        </div>
      </div>
    </Card>
  )
}
