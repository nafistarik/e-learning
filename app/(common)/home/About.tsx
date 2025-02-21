import Image from "next/image"
import heroImage from "@/app/assets/images/home/Book-lover-bro.png"

export function About() {
  return (
    <section className=" pt-16 pb-24 min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-muted-foreground">
            We are dedicated to providing high-quality online education that&apos;s accessible to everyone. Our platform
            brings together expert instructors and passionate learners to create a vibrant learning community.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower individuals worldwide with the knowledge and skills they need to achieve their personal and
              professional goals through accessible, high-quality online education.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading platform for online learning, recognized for our quality content, innovative teaching
              methods, and commitment to student success.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image src={heroImage} alt="About Us" fill className="rounded-lg object-contain" />
        </div>
      </div>
    </section>
  )
}

