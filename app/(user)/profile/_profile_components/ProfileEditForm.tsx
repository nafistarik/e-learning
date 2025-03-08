"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import type { User } from "@/lib/data/users"
import { useUpdateUserProfileMutation } from "@/redux/api/userApi"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setUser } from "@/redux/slice/userSlice"

interface ProfileEditFormData {
  name: string
  image: FileList
}

interface ProfileEditFormProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProfileEditForm({ user, open, onOpenChange }: ProfileEditFormProps) {
  const { register, handleSubmit, watch } = useForm<ProfileEditFormData>({
    defaultValues: {
      name: user?.name,
    },
  })

  console.log(user)

  const imageFile = watch("image")?.[0]
  const imagePreview = imageFile ? URL.createObjectURL(imageFile) : user?.image

  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation()

  const dispatch = useDispatch();

  const handleFormSubmit = async (data: ProfileEditFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    try {
      const response = await updateUserProfile({ userId: user?.id, data: formData }).unwrap();
      console.log("API Response:", response);
      dispatch(setUser({ data: response.user }));
      console.log("Redux State after dispatch:", response.user); // Log the updated state
      toast("✅ Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast("❌ Failed to update profile. Please try again.");
    }
    onOpenChange(false);
  };
  
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
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}