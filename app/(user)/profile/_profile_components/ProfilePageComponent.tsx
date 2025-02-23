/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// import { ProfileEditForm } from "@/app/(common)/profile/_profile_components/ProfileEditForm";
import defaultPropic from "@/app/assets/images/home/profile-picture-vector.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, removeUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";

// const enrolledCourses = courses.filter((course) => currentUser.enrolledCourses.includes(course.id))

export default function ProfilePage() {
  // const [isEditing, setIsEditing] = useState(false);

  const { user } = useSelector(selectUser);
const router = useRouter()
const dispatch = useDispatch()

  // const handleProfileUpdate = (data: any) => {
  //   console.log("Updating profile:", data);
  //   setIsEditing(false);
  // };

  const handleLogout = () => {
    dispatch(removeUser()); 
    router.push("/login"); 
  };

  return (
    <div className=" py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <Card className="p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200">
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
            <div className="flex justify-between w-full">
              {/* <Button onClick={() => setIsEditing(true)}>Edit Profile</Button> */}
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </Card>

        {/* <div className="space-y-6">
          <h2 className="text-2xl font-semibold">My Courses</h2>
          <div className="grid gap-4">
            {enrolledCourses.map((course) => (
                          <Card key={course.id} className="flex flex-col items-center gap-4 p-4 sm:flex-row">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={200}
                            height={120}
                            className="rounded-lg object-cover sm:w-48"
                          />
                                                    <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="font-semibold">{course.title}</h3>
                              <p className="mt-2 text-sm text-muted-foreground">Description: {course.description}</p>

                              <div className="flex items-center justify-between">
                              <p className="mt-2 text-sm text-muted-foreground">Category: {course.category}</p>

                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Price: {course.price}</span>

                              </div>
                            </div>
                          </div>
                        </Card>
            ))}
          </div>
        </div> */}
      </div>

      {/* <ProfileEditForm
        user={user}
        onSubmit={handleProfileUpdate}
        open={isEditing}
        onOpenChange={setIsEditing}
      /> */}
    </div>
  );
}
