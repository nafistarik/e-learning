import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";
import SlideInRight from "@/components/motion/SlideInRight";

export function ContactPage() {
  return (
    <section className=" text-black flex items-center justify-center pt-28 pb-12 lg:pt-32 lg:pb-24 ">
      <div className="w-full items-center grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <FadeUp>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">
              Have any questions or feedback? We’d love to hear from you! Whether you need assistance, have a suggestion, or just want to say hello, our team is here to help.
            </p>
            <p className="text-gray-600">
              You can reach out to us through email, phone, or visit our office. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="space-y-4">
              <ScaleUp>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-black" />
                  <span>info@example.com</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-black" />
                  <span>+1 (555) 000-0000</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-black" />
                  <span>123 Education St, Learning City, 12345</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-black" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
              </ScaleUp>
            </div>
          </div>
        </FadeUp>
        {/* Contact Form */}
        <SlideInRight>
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200 bg-white/20 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Your email" className="border-gray-300" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject">Subject</label>
              <Input id="subject" placeholder="Message subject" className="border-gray-300" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Your message" className="border-gray-300 min-h-[150px]" />
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800">Send Message</Button>
          </div>
        </SlideInRight>
      </div>
    </section>
  );
}
