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
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 flex flex-col items-center justify-center rounded-2xl shadow-lg border border-muted transition hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted-foreground/10 text-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <motion.p
                    className="text-3xl font-semibold text-foreground"
                    key={isCoursesLoading ? "loading" : stat.value}
                    initial={{ opacity: 0.5, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {isCoursesLoading || enrollmentsLoading ? <LoadingWave/> : stat.value}
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
