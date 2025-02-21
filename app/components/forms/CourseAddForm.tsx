"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { categories } from "@/lib/data/categories"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CourseAddFormData {
  title: string
  description: string
  price: string
  category: string
  image: FileList
}

interface CourseAddFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: CourseAddFormData) => void
}

export function CourseAddForm({ open, onOpenChange, onSubmit }: CourseAddFormProps) {
  const { register, handleSubmit } = useForm<CourseAddFormData>()

  const handleFormSubmit = (data: CourseAddFormData) => {
    console.log("Course add form data:", data)
    onSubmit(data)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
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
            <Input id="image" type="file" accept="image/*" {...register("image")} required />
          </div>
          <Button type="submit" className="w-full">
            Add Course
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

