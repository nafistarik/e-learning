import categoryImage from "@/app/assets/images/home/coding.png"
import { StaticImageData } from "next/image"

export interface Category {
    id: number
    name: string
    description: string
    icon: StaticImageData
    coursesCount: number
  }
  
  export const categories: Category[] = [
    {
      id: 1,
      name: "Web Development",
      description: "Learn modern web development technologies",
      icon: categoryImage,
      coursesCount: 15,
    },
    {
      id: 2,
      name: "Mobile Development",
      description: "Build mobile applications for iOS and Android",
      icon: categoryImage,
      coursesCount: 12,
    },
    {
      id: 3,
      name: "Data Science",
      description: "Master data analysis and machine learning",
      icon: categoryImage,
      coursesCount: 10,
    },
    {
      id: 4,
      name: "UI/UX Design",
      description: "Create beautiful and functional interfaces",
      icon: categoryImage,
      coursesCount: 8,
    },
    {
      id: 5,
      name: "DevOps",
      description: "Learn modern deployment and operations",
      icon: categoryImage,
      coursesCount: 6,
    },
    {
      id: 6,
      name: "Cybersecurity",
      description: "Protect systems and networks",
      icon: categoryImage,
      coursesCount: 7,
    },
    {
      id: 7,
      name: "Cloud Computing",
      description: "Master cloud platforms and services",
      icon: categoryImage,
      coursesCount: 9,
    },
    {
      id: 8,
      name: "Artificial Intelligence",
      description: "Explore AI and machine learning",
      icon: categoryImage,
      coursesCount: 5,
    },
    {
      id: 9,
      name: "Game Development",
      description: "Create games for multiple platforms",
      icon: categoryImage,
      coursesCount: 4,
    },
    {
      id: 10,
      name: "Blockchain",
      description: "Learn blockchain development",
      icon: categoryImage,
      coursesCount: 3,
    },
  ]
  
  