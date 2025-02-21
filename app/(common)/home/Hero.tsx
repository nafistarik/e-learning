import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import home from "@/app/assets/images/home/home.png"

export function Hero() {
  return (
    <section className="container min-h-[calc(100vh-70px)] flex flex-col justify-center">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-medium">Online learning Platform</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Accessible Online Courses For All</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Own your future learning new skills
          </p>
          <div className="flex max-w-sm items-center gap-2">
            <Input placeholder="Your Email" type="email" />
            <Button>Let&apos;s Start</Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[6/5]">
          <Image src={home} alt="Learning illustration" fill className="rounded-lg object-contain" priority />
        </div>
      </div>
    </section>
  )
}

