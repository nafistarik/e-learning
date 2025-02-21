/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import Image from "next/image"
import { users } from "@/lib/data/users"
import { courses } from "@/lib/data/courses"
import { ProfileEditForm } from "@/app/components/forms/ProfileEditForm"
import defaultPropic from "@/app/assets/images/home/profile-picture-vector.jpg"

// For demo purposes, using first user
const currentUserId = 1
const currentUser = users.find((u) => u.id === currentUserId)!
const enrolledCourses = courses.filter((course) => currentUser.enrolledCourses.includes(course.id))

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const handleProfileUpdate = (data: any) => {
    console.log("Updating profile:", data)
    setIsEditing(false)
  }

  return (
    <div className=" py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <Card className="p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 bg-slate-700">
              <Image
                src={currentUser.image || defaultPropic}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{currentUser.name}</h2>
              <p className="text-sm text-muted-foreground">{currentUser.email}</p>
            </div>
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          </div>
        </Card>

        <div className="space-y-6">
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
        </div>
      </div>

      <ProfileEditForm user={currentUser} onSubmit={handleProfileUpdate} open={isEditing} onOpenChange={setIsEditing} />
    </div>
  )
}

