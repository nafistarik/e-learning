import type { Category } from "@/lib/data/categories"
import Image from "next/image"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border p-6">
      <Image
        src={category.icon || "/placeholder.svg"}
        alt={category.name}
        width={80}
        height={80}
        className="rounded-lg"
      />
      <div className="text-center">
        <h3 className="font-semibold">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.coursesCount} courses</p>
      </div>
    </div>
  )
}

