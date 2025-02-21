"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <Input id="name" {...register("name")} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" {...register("email")} placeholder="Your email" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject">Subject</label>
        <Input id="subject" {...register("subject")} placeholder="Message subject" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message">Message</label>
        <Textarea id="message" {...register("message")} placeholder="Your message" className="min-h-[150px]" />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

