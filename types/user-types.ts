export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
  enrolledCourses: number[];
  favorites: number[];
}

export interface ProfileEditFormData {
  name: string;
  image: FileList;
}

export interface ProfileEditFormProps {
  user: User;
  userImage: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
