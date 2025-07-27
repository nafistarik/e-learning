import Pulse from "@/components/motion/Pulse";
import type { Category } from "@/lib/data/categories";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-4 py-2 rounded-lg text-foreground">
      <Pulse>
        <Image
          src={category.icon}
          alt={category.name}
          width={1000}
          height={1000}
          className="rounded-lg max-w-24 max-h-24"
        />
      </Pulse>
      <div className="text-center">
        <h3 className="text-lg font-medium">{category.name}</h3>
      </div>
    </div>
  );
}
