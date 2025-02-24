import Pulse from "@/components/motion/Pulse"
import type { Category } from "@/lib/data/categories"
import Image from "next/image"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg p-6">
<Pulse>
<Image
        src={category.icon || "/placeholder.svg"}
        alt={category.name}
        width={80}
        height={80}
        className="rounded-lg"
      />
</Pulse>
      <div className="text-center">
        <h3 className="font-semibold">{category.name}</h3>
      </div>
    </div>
  )
}

