/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

import { useGetCoursesQuery, useDeleteCourseMutation } from "@/redux/api/courseApi";
import { CourseAddForm } from "@/app/(admin)/admin/courses/_admin_course_components/CourseAddForm";
import { CourseEditForm } from "@/app/(admin)/admin/courses/_admin_course_components/CourseEditForm";
import { toast } from "sonner";
import { Course } from "@/lib/data/courses";

export default function AdminCoursesPage() {
  const { data: courses, isLoading } = useGetCoursesQuery({});
  const [deleteCourse] = useDeleteCourseMutation();

  console.log("thisis cocursee",courses)
  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  console.log(selectedCourseId)

  const handleDelete = async (courseId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;
  
    console.log(courseId)
    try {
      const response = await deleteCourse(courseId).unwrap();
      console.log("Course deleted successfully:", response);
      toast("Course deleted successfully!")
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };
  

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage your course catalog</p>
        </div>
        <Button onClick={() => setIsAddOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Course
        </Button>
      </div>

      <div className="rounded-md border">
        {isLoading ? (
          <p className="text-center py-4">Loading courses...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses?.courses?.map((course: Course) => (
                <TableRow key={course._id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell className="text-right">${course.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCourseId(course._id);
                        setIsEditOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(course._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <CourseAddForm open={isAddOpen} onOpenChange={setIsAddOpen} />

      {selectedCourseId && (
        <CourseEditForm
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          course={courses?.courses?.find((c: Course) => c._id === selectedCourseId)}
        />
      )}
    </div>
  );
}
