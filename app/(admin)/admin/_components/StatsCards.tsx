"use client";

import { Card } from "@/components/ui/card";
import { Book, DollarSign, Users } from "lucide-react";
import { useGetCoursesQuery } from "@/redux/api/courseApi";
import { motion } from "framer-motion";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { useGetAllEnrollmentsByAdminQuery } from "@/redux/api/enrollApi";
import LoadingWave from "@/components/shared/LoadingWave";

export function StatsCards() {
  const { data: users } = useGetAllUsersQuery({});

  const { data: courses, isLoading: isCoursesLoading } = useGetCoursesQuery({});

  const { data: allEnrollments, isLoading : enrollmentsLoading } = useGetAllEnrollmentsByAdminQuery({});

  const priceMap: { [key: string]: number } = {};
  courses?.courses?.forEach((course: { _id: string; price: number }) => {
    priceMap[course._id] = course.price;
  });

  const totalRevenue = allEnrollments?.reduce(
    (
      sum: number,
      enrollment: {
        courseId: string;
        enrollmentCount: number;
      }
    ) => {
      const price: number = priceMap[enrollment.courseId];
      return sum + (price ? price * enrollment.enrollmentCount : 0);
    },
    0
  );

  const totalCourses = courses?.courses?.length || 0;
  const totalUsers = users?.length;

  const stats = [
    { name: "Total Courses", value: totalCourses, icon: Book },
    { name: "Total Users", value: totalUsers, icon: Users },
    { name: "Total Revenue", value: `$${totalRevenue}`, icon: DollarSign },
  ];

  return (
<div className="grid gap-6 md:grid-cols-3">
      {stats?.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 rounded-2xl border border-border shadow-sm bg-card">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-muted text-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {stat.name}
                  </p>
                  <motion.p
                    className="text-3xl font-bold text-foreground mt-1"
                    key={isCoursesLoading || enrollmentsLoading ? "loading" : stat?.value.toString()}
                    initial={{ opacity: 0.5, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {isCoursesLoading || enrollmentsLoading ? (
                      <LoadingWave />
                    ) : (
                      stat.value
                    )}
                  </motion.p>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
