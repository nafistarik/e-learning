/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash, Pencil } from "lucide-react";
import { useGetCoursesQuery, useDeleteCourseMutation } from "@/redux/api/courseApi";
import { CourseAddForm } from "@/app/(admin)/admin/courses/_admin_course_components/CourseAddForm";
import { CourseEditForm } from "@/app/(admin)/admin/courses/_admin_course_components/CourseEditForm";
import { toast } from "sonner";
import { Course } from "@/lib/data/courses";
import { motion } from "framer-motion";

export default function AdminCoursesPage() {
  const { data: courses, isLoading } = useGetCoursesQuery({});
  const [deleteCourse] = useDeleteCourseMutation();
  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleDelete = async (courseId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    try {
      await deleteCourse(courseId).unwrap();
      toast.success("Course deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete course.");
      console.error("Error deleting course:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage your course catalog</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)} className="rounded-lg shadow-md">
          <Plus className="mr-2 h-4 w-4" /> Add New Course
        </Button>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border shadow-md bg-white p-4"
      >

        
        {isLoading ? (
          <div className="text-center py-6 animate-pulse">
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-bold">Course</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="text-right font-bold">Price</TableHead>
                <TableHead className="text-right font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses?.courses?.map((course: Course) => (
                <motion.tr
                  key={course._id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * courses.courses.indexOf(course), duration: 0.5 }}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell className="text-right">${course.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCourseId(course._id);
                        setIsEditOpen(true);
                      }}
                      className="hover:text-gray-600"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(course._id)}
                      className="hover:text-red-600"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        )}
      </motion.div>

      {/* Modals */}
      <CourseAddForm open={isAddOpen} onOpenChange={setIsAddOpen} />

      {selectedCourseId && (
        <CourseEditForm
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          course={courses?.courses?.find((c: Course) => c._id === selectedCourseId)}
        />
      )}
    </motion.div>
  );
}
