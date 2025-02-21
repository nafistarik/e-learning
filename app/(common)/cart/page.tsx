import { courses } from "@/lib/data/courses"
import { CartCourseCard } from "./_components/CartCourseCard"

export default function FavoritesPage() {
  return (
    <div className="container pt-16 pb-24 min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <p className="text-muted-foreground">Courses you&apos;ve saved for later</p>
      </div>
      <div className="grid gap-6">
        {courses.map((course) => (
        <CartCourseCard
          course={course}
          key={course.id}
        />
        ))}
      </div>
    </div>
  )
}

