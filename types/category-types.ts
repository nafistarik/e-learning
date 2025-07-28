import { StaticImageData } from "next/image"

export interface Category {
    id: number
    name: string
    description: string
    icon: string | StaticImageData
    coursesCount: number
  }

export interface CategoryCardProps {
  category: Category
}