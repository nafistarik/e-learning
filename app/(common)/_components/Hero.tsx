import Image from "next/image";
import home from "@/app/assets/images/home/home.png";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";
import { UiButton } from "@/components/ui/ui-button";
import { PartyPopper } from "lucide-react";

export function Hero() {
  return (
    <section className="grid items-center gap-16 md:grid-cols-2">
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
            <div className="inline-block">
              <UiButton asChild>
                <Link
                  href="/courses"
                  className="inline-flex gap-2 items-center"
                >
                  Let&apos;s Start
                  <PartyPopper className="fill-yellow-300 text-yellow-300 animate-pulse" />
                </Link>
              </UiButton>
            </div>
          </FadeUp>
        </div>
        {/* Right Image Section */}
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
    </section>
  );
}
