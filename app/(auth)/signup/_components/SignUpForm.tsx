"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUpForm() {
  const { register, handleSubmit } = useForm<SignUpFormData>()

  const onSubmit = (data: SignUpFormData) => {
    console.log("Sign up form data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name">Full Name</label>
        <Input id="name" {...register("name")} />
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" {...register("email")} placeholder="m@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" {...register("password")} />
      </div>
      <div className="space-y-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  )
}

