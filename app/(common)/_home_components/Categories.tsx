import { Button } from "@/components/ui/button";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { CategoryCard } from "./CategoryCard";
import SlideInRight from "@/components/motion/SlideInRight";
import StaggerList from "@/components/motion/StaggerList";
import Flip from "@/components/motion/Flip";

export function Categories() {
  return (
    <section className="container py-16 bg-gradient-to-b from-[#FEFBF4]">
      <div className="space-y-10 text-center">
        <SlideInRight>
          <h2 className="text-4xl font-bold tracking-tight">Popular Categories</h2>
        </SlideInRight>

        <StaggerList>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category, index) => (
              <Flip key={index}>
                <div className="p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                  <CategoryCard category={category} />
                </div>
              </Flip>
            ))}
          </div>
        </StaggerList>

          <Button asChild className="px-6 py-3 text-lg font-semibold rounded shadow-md">
            <Link href="/courses">All Courses</Link>
          </Button>
      </div>
    </section>
  );
}
