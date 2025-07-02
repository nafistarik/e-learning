import { Hero } from "./_components/Hero"
import { Categories } from "./_components/Categories"
import { PopularCourses } from "./_components/PopularCourses"

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularCourses />
    </>
  )
}