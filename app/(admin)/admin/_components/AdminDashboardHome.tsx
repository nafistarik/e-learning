"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

import { StatsCards } from "./StatsCards"
import { RecentEnrollments } from "./RecentEnrollments"
import { courses } from "@/lib/data/courses"

const enrollmentData = courses.map((course) => ({
  name: course.title,
  enrollments: Math.floor(Math.random() * 100), // Simulated data
}))

export default function AdminDashboardHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard</p>
      </div>

      <StatsCards />

      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Course Enrollments</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enrollments" fill="#000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <RecentEnrollments />
    </div>
  )
}

