"use client";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slice/userSlice";
import { useGetUserFavouritesQuery } from "@/redux/api/favouriteApi";
import Loader from "@/components/shared/Loader";
import { CartCourseCard } from "./CartCourseCard";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import FadeUp from "@/components/motion/FadeUp";
import StaggerList from "@/components/motion/StaggerList";
import SlideInLeft from "@/components/motion/SlideInLeft";
import { Course } from "@/types/course-types";

export default function UserCartPage() {
  const {user} = useSelector(selectUser);

  const {
    data: favouritesData,
    isLoading,
    isError,
  } = useGetUserFavouritesQuery(user?.id);
  const userFavouriteCourses = favouritesData?.favorites;

  if (isLoading) return <Loader />;
  if (isError) return <p>Error fetching data!</p>;

  return (
    <>
      {/* Fade up for title & subtitle */}
      <SlideInLeft>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="text-muted-foreground">
            Courses you&apos;ve saved for later
          </p>
        </div>
      </SlideInLeft>

      {/* Staggered list for favorite courses */}
      <StaggerList>
        <div className="grid gap-6">
          {userFavouriteCourses?.length > 0 ? (
            userFavouriteCourses?.map((course: Course) => (
              <FadeUp key={course._id}>
                <CartCourseCard course={course} />
              </FadeUp>
            ))
          ) : (
            <EmptyStateMessage message="You haven't added any courses to your favorites yet!" />
          )}
        </div>
      </StaggerList>
    </>
  );
}
