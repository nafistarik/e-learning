import { StaticImageData } from "next/image"

export interface Category {
    id: number
    name: string
    description: string
    icon: string | StaticImageData
    coursesCount: number
  }