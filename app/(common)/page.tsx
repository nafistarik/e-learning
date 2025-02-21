

import { Hero } from "./home/Hero"
import { Categories } from "./home/Categories"
import { PopularCourses } from "./home/PopularCourses"
import { courses } from "@/lib/data/courses"

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <PopularCourses courses={courses} />
    </div>
  )
}



