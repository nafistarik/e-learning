/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import defaultPropic from "@/app/assets/images/home/profile-picture-vector.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, removeUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";
import { useGetAllEnrollmentsQuery } from "@/redux/api/enrollApi";
import { Course } from "@/lib/data/courses";
import Loader from "@/components/shared/Loader";
import EmptyStateMessage from "@/components/shared/EmptyStateMessage";
import SlideInRight from "@/components/motion/SlideInRight";
import FadeUp from "@/components/motion/FadeUp";
import SlideInLeft from "@/components/motion/SlideInLeft";
import { ProfileEditForm } from "./ProfileEditForm";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data: allEnrollmentsData,
    isLoading: enrollmentLoading,
    isError: enrollmentError,
  } = useGetAllEnrollmentsQuery(user?.id);

  if (enrollmentLoading) return <Loader />;
  if (enrollmentError) return <p>Error fetching enrollments!</p>;

  const handleLogout = () => {
    dispatch(removeUser());
    router.push("/login");
  };

  return (
    <div className=" pt-28 pb-12 lg:pt-32 lg:pb-24 min-h-screen">
      <SlideInLeft>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>
      </SlideInLeft>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <SlideInLeft>
          <Card className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-36 w-36 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={user?.image || defaultPropic}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              <div className="flex justify-between w-full gap-3">
                <Button variant='outline' onClick={() => setIsEditing(true)}>Edit Profile</Button>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </div>
          </Card>
        </SlideInLeft>

        <SlideInRight>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">My Courses</h2>
            <div className="grid gap-4">
              {allEnrollmentsData?.enrolledCourses.length > 0 ? (
                allEnrollmentsData?.enrolledCourses.map((course: Course) => (
                  <FadeUp key={course._id}>
                    <Card className="flex flex-col items-center gap-4 p-4 sm:flex-row md:flex-col xl:flex-row">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={200}
                        height={120}
                        className="rounded-lg object-cover w-full sm:w-56 md:w-full xl:w-64 aspect-[4/3]"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="font-bold">
                          <h3>{course.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Description:{" "}
                            <span className="font-normal">
                              {course.description}
                            </span>
                          </p>

                          <div className="flex items-center justify-between">
                            <p className="mt-2 text-sm text-muted-foreground ">
                              Category:{" "}
                              <span className="font-normal">
                                {course.category}
                              </span>
                            </p>
                          </div>
                          {/* <div className="flex items-center justify-between">
                            <span className="mt-1 text-sm text-muted-foreground">
                              Price:{" "}
                              <span className="font-normal">
                                ${course.price}
                              </span>
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </Card>
                  </FadeUp>
                ))
              ) : (
                <EmptyStateMessage message="You haven't enrolled to any courses yet!" />
              )}
            </div>
          </div>
        </SlideInRight>
      </div>

      <ProfileEditForm
        user={user}
        open={isEditing}
        onOpenChange={setIsEditing}
      />
    </div>
  );
}
