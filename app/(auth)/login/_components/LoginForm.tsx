"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginFormData {
  email: string
  password: string
}

export function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>()

  const onSubmit = (data: LoginFormData) => {
    console.log("Login form data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" {...register("email")} placeholder="m@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" {...register("password")} />
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  )
}

