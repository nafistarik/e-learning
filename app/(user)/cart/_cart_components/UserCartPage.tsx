// import { CartCourseCard } from "./CartCourseCard";

export default function UserCartPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <p className="text-muted-foreground">
          Courses you&apos;ve saved for later
        </p>
      </div>
      <div className="grid gap-6">
        {/* {courses.map((course) => (
          <CartCourseCard course={course} key={course.id} />
        ))} */}
      </div>
    </>
  );
}
