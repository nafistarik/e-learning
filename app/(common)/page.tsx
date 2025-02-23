import { Hero } from "./_home_components/Hero"
import { Categories } from "./_home_components/Categories"
import { PopularCourses } from "./_home_components/PopularCourses"

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularCourses />
    </>
  )
}