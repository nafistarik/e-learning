"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

const recentEnrollments = [
  {
    studentName: "John Doe",
    courseName: "Web Development with Python",
    date: "2024-02-21",
  },
  {
    studentName: "Jane Smith",
    courseName: "React.js Fundamentals",
    date: "2024-02-20",
  },
];

export function RecentEnrollments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-lg border border-muted rounded-2xl">
        <div className="px-6 pt-6">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Enrollments
          </h2>
        </div>
        <div className="p-6">
          <Table className="border border-gray-200 rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-left">Student Name</TableHead>
                <TableHead className="text-left">Course</TableHead>
                <TableHead className="text-left">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentEnrollments.map((enrollment, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <TableCell>{enrollment.studentName}</TableCell>
                  <TableCell>{enrollment.courseName}</TableCell>
                  <TableCell>{enrollment.date}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </motion.div>
  );
}
