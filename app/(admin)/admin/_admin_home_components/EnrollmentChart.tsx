"use client";

import { Card } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { useGetAllEnrollmentsByAdminQuery } from "@/redux/api/enrollApi";
import Loader from "@/components/shared/Loader";

interface CourseEnrollments {
  title: string;
  enrollmentCount: number;
  courseId: string;
}

export function EnrollmentChart() {
  const { data: allEnrollments, isLoading: enrollmentsLoading } =
    useGetAllEnrollmentsByAdminQuery({});

  const enrollmentData =
    allEnrollments?.map((course: CourseEnrollments) => ({
      name:
        course.title.length > 5
          ? course.title.substring(0, 5) + ".."
          : course.title,
      enrollments: course.enrollmentCount,
    })) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Card className="p-6 shadow-lg border border-muted rounded-2xl">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Course Enrollments
        </h2>
        <div className="h-[300px]">
          {enrollmentsLoading ? (
            <Loader />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="4 4" strokeOpacity={0.2} />
                <XAxis dataKey="name" tick={{ fill: "#666" }} />
                <YAxis tick={{ fill: "#666" }} />
                <Tooltip
                  contentStyle={{
                    background: "#111",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
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
