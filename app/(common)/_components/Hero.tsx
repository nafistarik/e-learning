import { Button } from "@/components/ui/button";
import Image from "next/image";
import home from "@/app/assets/images/home/home.png";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-12 lg:pt-32 lg:pb-24 bg-background text-foreground">
      <div className="container grid items-center gap-16 md:grid-cols-2">
        {/* Left Text Section */}
        <div className="flex flex-col gap-3 md:gap-5">
          <FadeUp delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Master Skills, <br className="hidden sm:block" />
              <span className="text-primary">Shape Your Future</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
              Explore expert-led courses designed to help you grow your career
              and reach your goals—no matter where you start.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Link href="/courses" className="inline-flex">
              <Button>Let&apos;s Start</Button>
            </Link>
          </FadeUp>
        </div>

        <ScaleUp className="flex justify-center">
          <Image
            src={home}
            alt="Learning illustration"
            width={1000}
            height={1000}
            className="object-contain w-full h-auto"
            priority
          />
        </ScaleUp>
      </div>
    </section>
  );
}
