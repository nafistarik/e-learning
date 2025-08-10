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

export interface CourseAddFormData {
  title: string;
  description: string;
  price: string;
  category: string;
  image: FileList;
  pdf: FileList;
}

export interface CourseAddFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface CourseEditFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course | null;
}

export interface CourseEnrollments {
  title: string;
  enrollmentCount: number;
  courseId: string;
}