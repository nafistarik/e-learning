"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { categories } from "@/lib/data/categories";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useCreateCourseMutation } from "@/redux/api/courseApi";
import { toast } from "sonner";

interface CourseAddFormData {
  title: string;
  description: string;
  price: string;
  category: string;
  image: FileList;
}

interface CourseAddFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CourseAddForm({ open, onOpenChange }: CourseAddFormProps) {
  const { register, handleSubmit, setValue, reset } = useForm<CourseAddFormData>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [createCourse, { isLoading, error }] = useCreateCourseMutation();

  const handleFormSubmit = async (data: CourseAddFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", selectedCategory || "Data Science"); 
    formData.append("categoryId", "1"); 
    formData.append("instructor", "Amisha Nandi");

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    } else {
      console.error("❌ No image selected!");
      return;
    }

    try {
      await createCourse(formData).unwrap();
      toast("✅ Course created successfully!")
      reset(); // Reset the form fields
      onOpenChange(false); // Close the modal
    } catch (err) {
      console.error("❌ Error creating course:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto ">
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
            <Select
              onValueChange={(value) => {
                setSelectedCategory(value);
                setValue("category", value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
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
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Adding Course..." : "Add Course"}
          </Button>
          {error && (
            <p className="text-red-500">
              ❌ Error: {"data" in error ? (error.data as { message: string }).message : "error" in error ? error.error : "An unknown error occurred"}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
