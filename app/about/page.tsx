import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const intro = "From the streets to the digital canvas, I've been creating iconic rap cover art that captures the raw essence of urban culture and the hip-hop movement."
  const message2 = "My posters are more than just merchandise - they're collectible art pieces that bring the energy and authenticity of rap culture into your space."
  const message = "With over a decade of experience working with some of the biggest names in the industry, my artwork has become synonymous with authentic street credibility and artistic innovation in the rap scene."
  return (
    <div className="min-h-screen bg-black pb-20 pt-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            About <span className="text-red-600">the Artist</span>
          </h1>

          <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Nick Media - Artist Portrait"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">@nickmediasm</h2>
              <p className="mb-4 text-gray-300">
                {intro}
              </p>
              <p className="mb-6 text-gray-300">
                {message}
              </p>

              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/nickmediasm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://twitter.com/nickmediasm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://youtube.com/nickmediasm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-12 space-y-6 text-gray-300">
            <h2 className="text-2xl font-bold text-white">The Journey</h2>
            <p>
              Growing up in the heart of the urban landscape, I was always surrounded by the culture, music, and raw
              energy of the streets. My art journey began with graffiti and street art, which eventually evolved into
              digital design and illustration.
            </p>
            <p>
              What started as creating mixtape covers for local artists quickly grew into a full-fledged career as my
              distinctive style caught the attention of bigger names in the industry. My work is characterized by bold
              contrasts, gritty textures, and authentic representation of street culture.
            </p>

            <h2 className="text-2xl font-bold text-white">The Art</h2>
            <p>
              Each piece I create tells a story - not just about the music it represents, but about the culture,
              struggles, and triumphs of urban life. I blend photography, digital illustration, and typography to create
              visuals that are as powerful and impactful as the music itself.
            </p>
            <p>
              {message2}
            </p>
          </div>

          <div className="text-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/shop">Shop My Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

