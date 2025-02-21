import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { categories } from "@/lib/data/categories"

export function Categories() {
  return (
    <section className="container py-12">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.slice(0,4).map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-4 rounded-lg border p-6">
              <Image
                src={category.icon || "/placeholder.svg"}
                alt={category.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="text-center">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.coursesCount}</p>
              </div>
            </div>
          ))}
        </div>
        <Button asChild>
          <Link href="/courses">All Courses</Link>
        </Button>
      </div>
    </section>
  )
}

