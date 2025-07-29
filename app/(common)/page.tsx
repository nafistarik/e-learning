import { Hero } from "./_components/Hero"
import { Categories } from "./_components/Categories"
import { PopularCourses } from "./_components/PopularCourses"

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />
      <Categories />
      <PopularCourses />
    </div>
  )
}