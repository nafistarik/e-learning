import webImage from "@/app/assets/images/home/web.png";
import mobileImage from "@/app/assets/images/home/mobile.png";
import dataImage from "@/app/assets/images/home/datascience.png";
import uiImage from "@/app/assets/images/home/uiux.png";
import { Category } from "@/types/category-types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Web Development",
    description: "Learn modern web development technologies",
    icon: webImage,
    coursesCount: 15,
  },
  {
    id: 2,
    name: "Mobile Development",
    description: "Build mobile applications for iOS and Android",
    icon: mobileImage,
    coursesCount: 12,
  },
  {
    id: 3,
    name: "Data Science",
    description: "Master data analysis and machine learning",
    icon: dataImage,
    coursesCount: 10,
  },
  {
    id: 4,
    name: "UI/UX Design",
    description: "Create beautiful and functional interfaces",
    icon: uiImage,
    coursesCount: 8,
  },
  {
    id: 5,
    name: "DevOps",
    description: "Learn modern deployment and operations",
    icon: webImage,
    coursesCount: 6,
  },
  {
    id: 6,
    name: "Cybersecurity",
    description: "Protect systems and networks",
    icon: webImage,
    coursesCount: 7,
  },
  {
    id: 7,
    name: "Cloud Computing",
    description: "Master cloud platforms and services",
    icon: webImage,
    coursesCount: 9,
  },
  {
    id: 8,
    name: "Artificial Intelligence",
    description: "Explore AI and machine learning",
    icon: webImage,
    coursesCount: 5,
  },
  {
    id: 9,
    name: "Game Development",
    description: "Create games for multiple platforms",
    icon: webImage,
    coursesCount: 4,
  },
  {
    id: 10,
    name: "Blockchain",
    description: "Learn blockchain development",
    icon: webImage,
    coursesCount: 3,
  },
];
