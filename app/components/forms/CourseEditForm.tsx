"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Course } from "@/lib/data/courses"
import { categories } from "@/lib/data/categories"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CourseEditFormData {
  title: string
  description: string
  price: string
  category: string
  image: FileList
}

interface CourseEditFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  course: Course
  onSubmit: (courseId: number, data: CourseEditFormData) => void
}

export function CourseEditForm({ open, onOpenChange, course, onSubmit }: CourseEditFormProps) {
  const { register, handleSubmit, watch } = useForm<CourseEditFormData>({
    defaultValues: {
      title: course.title,
      description: course.description,
      price: course.price.toString(),
      category: course.categoryId.toString(),
    },
  })

  const imageFile = watch("image")?.[0]
  const imagePreview = imageFile ? URL.createObjectURL(imageFile) : course.image

  const handleFormSubmit = (data: CourseEditFormData) => {
    console.log("Course edit form data:", data)
    onSubmit(course.id, data)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title">Title</label>
            <Input id="title" {...register("title")} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="description">Description</label>
            <Textarea id="description" {...register("description")} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <Input id="price" type="number" step="0.01" {...register("price")} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="image">Course Image</label>
            <div className="mb-2">
              <Image
                src={imagePreview || "/placeholder.svg"}
                alt={course.title}
                width={200}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>
            <Input id="image" type="file" accept="image/*" {...register("image")} />
          </div>
          <Button type="submit" className="w-full">
            Update Course
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

