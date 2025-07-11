import Image from "next/image";
import heroImage from "@/app/assets/images/home/Book-lover-bro.png";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";

export function About() {
  return (
    <section className="pt-28 pb-12 lg:pt-32 lg:pb-24 flex flex-col justify-center min-h-screen bg-background">
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-[11fr,12fr] container items-center">
        {/* Text Content */}
        <FadeUp>
          <div className="space-y-6 text-foreground">
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              About <span className="text-primary">Us</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl">
              We&#39;re on a mission to bring quality education within
              everyone&#39;s reach. Our platform connects passionate learners
              with expert instructors to build a global learning community.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To empower individuals worldwide with the knowledge and skills
                  they need to grow— personally and professionally—through
                  accessible, high-quality online education.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To become the go-to platform for online learning—celebrated
                  for our engaging content, innovative teaching, and unwavering
                  support for student success.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Image */}
        <ScaleUp>
          <div className="flex justify-center">
            <Image
              src={heroImage}
              alt="About Us Illustration"
              className="w-full max-w-xl h-auto object-cover"
              priority
            />
          </div>
        </ScaleUp>
      </div>
    </section>
  );
}
