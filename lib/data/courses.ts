
export interface Course {
  _id: string; // Change to string to match `_id`
  title: string;
  description: string;
  image: string; // Change to string for Cloudinary URL
  price: number;
  category: string;
  instructor: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}