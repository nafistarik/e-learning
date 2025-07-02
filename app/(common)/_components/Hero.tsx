"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import home from "@/app/assets/images/home/home.png";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import ScaleUp from "@/components/motion/ScaleUp";
import background from "@/app/assets/images/home/background.jpg";

export function Hero() {
  return (
    <section
      className=" min-h-screen flex flex-col justify-center pt-28 pb-12 lg:pt-32 lg:pb-24 "
    >
      <div className="grid items-center gap-12 md:grid-cols-2 container">
        {/* Left Text Section */}
        <div className="flex flex-col gap-2 md:gap-4">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Online Learning Platform
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Online Courses <br />{" "}
              <span className="text-primary">For All</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Own your future by learning new skills from expert instructors.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link href="/courses" className="inline-flex">
              <Button className="px-6 py-3 text-lg">Let&apos;s Start</Button>
            </Link>
          </FadeUp>
        </div>

        {/* Right Image Section */}
        <ScaleUp className="flex justify-center">
          <Image
            src={home}
            alt="Learning illustration"
            width={500}
            height={400}
            className="rounded-lg object-contain"
          />
        </ScaleUp>
      </div>
    </section>
  );
}