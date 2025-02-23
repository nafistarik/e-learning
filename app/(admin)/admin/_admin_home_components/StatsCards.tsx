"use client";

import { Card } from "@/components/ui/card";
import { Book, DollarSign, Users } from "lucide-react";
import { useGetCoursesQuery } from "@/redux/api/courseApi";

export function StatsCards() {
  const { data: courses, isLoading: isCoursesLoading } = useGetCoursesQuery({});

  const totalCourses = courses?.courses?.length || 0;
  const totalUsers =  5;
  const totalRevenue = courses?.courses?.reduce((acc: number, course: { price: number }) => acc + course.price, 0) || 0;

  const stats = [
    { name: "Total Courses", value: isCoursesLoading ? "..." : totalCourses, icon: Book },
    { name: "Total Users", value: totalUsers, icon: Users },
    { name: "Total Revenue", value: isCoursesLoading ? "..." : `$${totalRevenue}`, icon: DollarSign },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-4">
            <stat.icon className="h-8 w-8" />
            <div>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
