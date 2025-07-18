/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash, Pencil } from "lucide-react";
import { useGetCoursesQuery, useDeleteCourseMutation } from "@/redux/api/courseApi";
import { toast } from "sonner";
import { Course } from "@/lib/data/courses";
import { motion } from "framer-motion";
import { CourseAddForm } from "./CourseAddForm";
import { CourseEditForm } from "./CourseEditForm";

export default function AdminCoursesComponent() {
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
          <h1 className="text-3xl font-bold text-foreground">Courses</h1>
          <p className="text-muted-foreground">
            Manage your course catalog
          </p>
        </div>
        <Button
          onClick={() => setIsAddOpen(true)}
          className="rounded-lg shadow-md"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Course
        </Button>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-4"
      >
        {isLoading ? (
          <div className="text-center py-6 animate-pulse">
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow className="text-muted-foreground">
                <TableHead className="font-semibold text-sm">Course</TableHead>
                <TableHead className="font-semibold text-sm">Category</TableHead>
                <TableHead className="text-right font-semibold text-sm">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses?.courses?.map((course: Course, idx: number) => (
                <motion.tr
                  key={course._id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="border-b transition-colors hover:bg-muted/30"
                >
                  <TableCell className="text-foreground font-medium">
                    {course.title}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {course.category}
                  </TableCell>
                  <TableCell className="text-right space-x-1 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCourseId(course._id);
                        setIsEditOpen(true);
                      }}
                      className="text-muted-foreground hover:text-foreground w-8"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(course._id)}
                      className="text-destructive hover:text-destructive-foreground w-8"
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
          course={courses?.courses?.find(
            (c: Course) => c._id === selectedCourseId
          )}
        />
      )}
    </motion.div>
  );
}
