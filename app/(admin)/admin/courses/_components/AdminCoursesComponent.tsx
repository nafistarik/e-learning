/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"

import { courses } from "@/lib/data/courses"
import { CourseAddForm } from "@/app/components/forms/CourseAddForm"
import { CourseEditForm } from "@/app/components/forms/CourseEditForm"

export default function AdminCoursesPage() {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)

  const handleDelete = (courseId: number) => {
    console.log("Deleting course with ID:", courseId)
  }

  const handleAdd = (formData: any) => {
    console.log("Adding new course:", formData)
  }

  const handleEdit = (courseId: number, formData: any) => {
    console.log("Editing course:", courseId, formData)
  }

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
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell className="text-right">${course.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCourseId(course.id)
                      setIsEditOpen(true)
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(course.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CourseAddForm open={isAddOpen} onOpenChange={setIsAddOpen} onSubmit={handleAdd} />

      {selectedCourseId && (
        <CourseEditForm
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          course={courses.find((c) => c.id === selectedCourseId)!}
          onSubmit={handleEdit}
        />
      )}
    </div>
  )
}

