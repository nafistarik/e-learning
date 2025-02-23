"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories } from "@/lib/data/categories";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateCourseMutation } from "@/redux/api/courseApi";

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  category: string;
  image?: string;
}

interface CourseEditFormData {
  title: string;
  description: string;
  price: string;
  category: string;
  image?: FileList;
}

interface CourseEditFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course | null;
}

export function CourseEditForm({
  open,
  onOpenChange,
  course,
}: CourseEditFormProps) {
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<CourseEditFormData>();
  const [updateCourse, { isLoading, error }] = useUpdateCourseMutation();

  useEffect(() => {
    if (course) {
      reset({
        title: course.title,
        description: course.description,
        price: course.price.toString(),
        category: course.category.toString(),
      });
    }
  }, [course, reset]);

  const imageFile = watch("image")?.[0];
  const imagePreview = imageFile
    ? URL.createObjectURL(imageFile)
    : course?.image || "/placeholder.svg";

  const handleFormSubmit = async (data: CourseEditFormData) => {
    if (!course) return;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    console.log("this si sformdata" ,data)

    if (data.image?.length) {
      formData.append("image", data.image[0]);
    }

    try {
      await updateCourse({ id: course._id, data: formData }).unwrap();
      console.log("this is form data", formData);
      onOpenChange(false);
    } catch (err) {
      console.error("Failed to update course:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto ">
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
            <Input
              id="price"
              type="number"
              step="0.01"
              {...register("price")}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <Select
              value={watch("category") || course?.category.toString()}
              onValueChange={(value) =>
                setValue("category", value, { shouldValidate: true })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name.toString()}>
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
                src={imagePreview}
                alt={course?.title || "Course"}
                width={200}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>
            <Input
              id="image"
              type="file"
              accept="image/*"
              {...register("image")}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Course"}
          </Button>
          {error && (
            <p className="text-red-500 text-sm">
              {"data" in error && (error as { data: { message: string } }).data.message ? (error as { data: { message: string } }).data.message : "Failed to update course"}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
