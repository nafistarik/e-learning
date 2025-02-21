import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section className=" pt-16 pb-24 min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>123 Education St, Learning City, 12345</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject">Subject</label>
            <Input id="subject" placeholder="Message subject" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
          </div>
          <Button className="w-full">Send Message</Button>
        </div>
      </div>
    </section>
  )
}

