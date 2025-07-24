import { Mail, MapPin, Phone, Clock } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";
import Image from "next/image";
import contactImage from "@/app/assets/images/home/Contact.png";

export function ContactPage() {
  return (
    <section className="pt-28 pb-12 lg:pt-32 lg:pb-24 bg-background">
      <div className=" grid gap-12 lg:grid-cols-2 items-center">
        {/* Contact Info */}
        <FadeUp>
          <div className="space-y-6 text-foreground">
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h2>

            <p className="text-muted-foreground text-base">
              Have any questions or feedback? We’d love to hear from you.
              Whether you need help, have a suggestion, or just want to say hello—our team is here for you.
            </p>

            <p className="text-muted-foreground text-base">
              Reach out to us via email, phone, or visit our office.
              We aim to respond to all inquiries within <strong>24 hours</strong>.
            </p>

            <div className="space-y-4 text-sm">
              <ScaleUp>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@elearning.com</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+880 1234567890</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </ScaleUp>
              <ScaleUp>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Sunday - Thursday: 9:00 AM - 6:00 PM</span>
                </div>
              </ScaleUp>
            </div>
          </div>
        </FadeUp>

          <div className="flex justify-center">
            <Image
              src={contactImage}
              alt="Contact illustration"
              width={500}
              height={500}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
      </div>
    </section>
  );
}
