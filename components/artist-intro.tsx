import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ArtistIntro() {
  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Meet the <span className="text-red-600">Artist</span>
            </h2>
            <p className="mb-4 text-gray-300">
              I'm the creative force behind some of the most iconic rap cover art in the industry. With a passion for
              urban aesthetics and street culture, I've spent years perfecting my craft and developing a signature style
              that captures the raw energy of hip-hop.
            </p>
            <p className="mb-6 text-gray-300">
              My work has been featured on albums for major artists, and now I'm bringing that same artistic vision to
              limited edition poster prints that you can own and display.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-[4/3]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Nick Media - Artist at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xl font-bold">@nickmediasm</p>
              <p className="text-sm text-gray-300">Bringing street art to your walls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

