import { Button } from "@/components/ui/button";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { CategoryCard } from "./CategoryCard";
import SlideInRight from "@/components/motion/SlideInRight";
import StaggerList from "@/components/motion/StaggerList";
import Flip from "@/components/motion/Flip";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";

export function Categories() {
  return (
    <section className="container py-16">
      <div className="space-y-10 text-center">
        <SlideInRight>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Popular Categories
          </h2>
        </SlideInRight>

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

        <Button
          asChild
          className="px-6 py-3 text-lg font-semibold rounded shadow-md"
        >
          <Link href="/courses">All Courses</Link>
        </Button>
      </div>
    </section>
  );
}
