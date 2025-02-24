"use client";

import { Card } from "@/components/ui/card";
import { Course } from "@/lib/data/courses";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

export function EnrollmentChart() {
  const { data: courses, isLoading } = useGetCoursesQuery({});

  const enrollmentData =
    courses?.courses?.map((course: Course) => ({
      name: course.title,
      enrollments: Math.floor(Math.random() * 100), // Simulated data
    })) || [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Card className="p-6 shadow-lg border border-muted rounded-2xl">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Course Enrollments</h2>
        <div className="h-[300px]">
          {isLoading ? (
            <p className="text-muted-foreground text-center">Loading chart...</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="4 4" strokeOpacity={0.2} />
                <XAxis dataKey="name" tick={{ fill: "#666" }} />
                <YAxis tick={{ fill: "#666" }} />
                <Tooltip contentStyle={{ background: "#222", color: "#fff", borderRadius: "8px" }} />
                <Bar
                  dataKey="enrollments"
                  fill="#222"
                  radius={[10, 10, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
