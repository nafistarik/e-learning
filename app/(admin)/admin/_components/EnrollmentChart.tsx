"use client"

import { Card } from "@/components/ui/card"
import { courses } from "@/lib/data/courses"


const enrollmentData = courses.map((course) => ({
  name: course.title,
  enrollments: Math.floor(Math.random() * 100), // Simulated data
}))

export function EnrollmentChart() {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Course Enrollments</h2>
      <div className="h-[300px]">
        {/* Custom chart implementation */}
        <div className="flex h-full items-end gap-4">
          {enrollmentData.map((data, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full bg-primary transition-all hover:opacity-90"
                style={{ height: `${(data.enrollments / 100) * 100}%` }}
              />
              <span className="text-xs font-medium">{data.name}</span>
              <span className="text-xs text-muted-foreground">{data.enrollments}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

