import Image from "next/image";
import heroImage from "@/app/assets/images/home/Book-lover-bro.png";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";
import background from "@/app/assets/images/home/background.jpg"

export function About() {
  return (
    <section className="pt-28 pb-12 lg:pt-32 lg:pb-24 flex flex-col justify-center min-h-screen" style={{
      backgroundImage: `url(${background.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      objectFit: "cover",
    }}>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-[11fr,12fr] lg:gap-12 lg:items-center container">
        
        <FadeUp>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-muted-foreground">
              We are dedicated to providing high-quality online education
              that&apos;s accessible to everyone. Our platform brings together
              expert instructors and passionate learners to create a vibrant
              learning community.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals worldwide with the knowledge and skills
                they need to achieve their personal and professional goals
                through accessible, high-quality online education.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading platform for online learning, recognized for
                our quality content, innovative teaching methods, and commitment
                to student success.
              </p>
            </div>
          </div>
        </FadeUp>

        <ScaleUp>
          <div className="flex justify-center">
            <Image
              src={heroImage}
              alt="About Us"
              className="w-full max-w-xl h-auto rounded-lg object-cover"
              priority
            />
          </div>
        </ScaleUp>
      </div>
    </section>
  );
}
