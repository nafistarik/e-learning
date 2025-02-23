"use client"

import { Card } from "@/components/ui/card"
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function EnrollmentChart() {
  const { data: courses, isLoading } = useGetCoursesQuery({});

const enrollmentData = courses?.courses?.map((course : Course) => ({
  name: course.title,
  enrollments: Math.floor(Math.random() * 100), // Simulated data
})) || [];

  return (
    <Card className="p-6">
    <h2 className="mb-4 text-xl font-semibold">Course Enrollments</h2>
    <div className="h-[300px]">
      {isLoading ? (
        <p>Loading chart...</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={enrollmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="enrollments" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  </Card>
  )
}