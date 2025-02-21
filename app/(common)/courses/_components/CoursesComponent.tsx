import { Input } from "@/components/ui/input"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { courses } from "@/lib/data/courses"
import { categories } from "@/lib/data/categories"
import { CourseCard } from "./CourseCard"





export default function CoursesComponent() {
  return (
    <div className=" pt-16 pb-24 min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-muted-foreground">Browse our collection of courses</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input placeholder="Search courses..." className="max-w-xs" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name.toLowerCase()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id} 
              course={course} 
            />
          ))}
      </div>
    </div>
  )
}

