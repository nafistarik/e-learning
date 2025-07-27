import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { CategoryCard } from "./CategoryCard";
import StaggerList from "@/components/motion/StaggerList";
import Flip from "@/components/motion/Flip";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import { Wallpaper } from "lucide-react";
import { UiButton } from "@/components/ui/ui-button";

export function Categories() {
  return (
    <section className="container py-16">
      <div className="space-y-10 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Popular Categories
        </h2>

        <StaggerList>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.length > 0 ? (
              categories.slice(0, 4).map((category, index) => (
                <Flip key={index}>
                  <div className="h-full">
                    <div className="flex flex-col justify-between h-full p-6 bg-card shadow-md rounded-xl">
                      <CategoryCard category={category} />
                    </div>
                  </div>
                </Flip>
              ))
            ) : (
              <div className="col-span-full">
                <EmptyStateMessage message="No categories are here at the moment!" />
              </div>
            )}
          </div>
        </StaggerList>

        <div className="inline-block">
          <UiButton asChild>
            <Link href="/courses" className="inline-flex gap-2 items-center">
              <Wallpaper />
              View All Courses
            </Link>
          </UiButton>
        </div>
      </div>
    </section>
  );
}
