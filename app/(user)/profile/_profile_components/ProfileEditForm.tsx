"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import type { User } from "@/lib/data/users"

interface ProfileEditFormData {
  name: string
  image: FileList
}

interface ProfileEditFormProps {
  user: User
  onSubmit: (data: ProfileEditFormData) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProfileEditForm({ user, onSubmit, open, onOpenChange }: ProfileEditFormProps) {
  const { register, handleSubmit, watch } = useForm<ProfileEditFormData>({
    defaultValues: {
      name: user.name,
    },
  })

  const imageFile = watch("image")?.[0]
  const imagePreview = imageFile ? URL.createObjectURL(imageFile) : user.image

  const handleFormSubmit = (data: ProfileEditFormData) => {
    console.log("Profile edit form data:", data)
    onSubmit(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32">
              <Image
                src={imagePreview || "/placeholder.svg"}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <Input type="file" accept="image/*" {...register("image")} className="max-w-xs" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" {...register("name")} />
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

