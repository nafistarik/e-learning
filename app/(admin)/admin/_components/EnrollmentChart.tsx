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
import LoadingWave from "@/components/shared/LoadingWave";
import { CourseEnrollments } from "@/types/course-types";

export function EnrollmentChart() {
  const { data: allEnrollments, isLoading: enrollmentsLoading } =
    useGetAllEnrollmentsByAdminQuery({});

  const enrollmentData =
    allEnrollments?.map((course: CourseEnrollments) => ({
      name:
        course.title.length > 10
          ? course.title.substring(0, 10) + "..."
          : course.title,
      enrollments: course.enrollmentCount,
    })) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="p-6 rounded-2xl border border-border shadow-sm bg-card text-foreground">
        <h2 className="text-xl font-semibold mb-4">
          📊 Course Enrollments Overview
        </h2>
        <div className="h-[300px]">
          {enrollmentsLoading ? (
            <LoadingWave/>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" />
                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "var(--muted-foreground)",
                    fontSize: 12,
                  }}
                  axisLine={{ stroke: "var(--border)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fill: "var(--muted-foreground)",
                    fontSize: 12,
                  }}
                  axisLine={{ stroke: "var(--border)" }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    color: "var(--popover-foreground)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                  cursor={{ fill: "var(--muted)" }}
                />
                <Bar
                  dataKey="enrollments"
                  fill="url(#chartGradient)"
                  radius={[8, 8, 0, 0]}
                  barSize={40}
                />
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.95}
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.7}
                    />
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
