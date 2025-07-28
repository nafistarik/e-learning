export interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  instructor: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseCardProps {
  course: Course;
}

export interface CourseFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course?: Course;
  onSubmit: (data: Partial<Course>) => void;
}
