import  courseImage  from '@/app/assets/images/home/Learning-cuate.png';
import { StaticImageData } from 'next/image';
export interface Course {
    id: number
    title: string
    description: string
    image: StaticImageData
    price: number
    category: string
    instructor: string
    categoryId: number
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn full-stack web development from scratch",
      image: courseImage,
      price: 99.99,
      category: "Web Development",
      instructor: "John Doe",
      categoryId: 1,
    },
    {
      id: 2,
      title: "iOS App Development with Swift",
      description: "Build iOS applications using Swift",
      image: courseImage,
      price: 89.99,
      category: "Mobile Development",
      instructor: "Jane Smith",
      categoryId: 2,
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Master data analysis with Python",
      image: courseImage,
      price: 79.99,
      category: "Data Science",
      instructor: "Mike Johnson",
      categoryId: 3,
    },
    // Add more courses...
  ]
  
  