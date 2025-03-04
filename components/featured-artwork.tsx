"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

// Sample featured artwork data
const featuredArtworks = [
  {
    id: 1,
    title: "Urban Legends",
    price: 49.99,
    image: "/assets/placeholder.svg?height=600&width=600",
    slug: "urban-legends",
  },
  {
    id: 2,
    title: "Street Dreams",
    price: 59.99,
    image: "/assets/placeholder.svg?height=600&width=600",
    slug: "street-dreams",
  },
  {
    id: 3,
    title: "Concrete Jungle",
    price: 44.99,
    image: "/assets/placeholder.svg?height=600&width=600",
    slug: "concrete-jungle",
  },
]

export default function FeaturedArtwork() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addToCart } = useCart()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredArtworks.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredArtworks.length - 1 : prevIndex - 1))
  }

  const currentArtwork = featuredArtworks[currentIndex]

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-800">
          <Image
            src={currentArtwork.image || "/placeholder.svg"}
            alt={currentArtwork.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous artwork</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next artwork</span>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-2xl font-bold">{currentArtwork.title}</h3>
          <p className="mb-4 text-xl text-red-600">${currentArtwork.price}</p>
          <p className="mb-6 text-gray-300">
            Limited edition poster print featuring iconic rap-inspired artwork. Each piece is printed on premium
            archival paper with vibrant colors that will last for years to come.
          </p>

          <div className="flex space-x-4">
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() =>
                addToCart({
                  id: currentArtwork.id,
                  title: currentArtwork.title,
                  price: currentArtwork.price,
                  image: currentArtwork.image,
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </Button>

            <Button asChild variant="outline" className="border-slate-700 hover:bg-gray-300 bg-black">
              <Link href={`/shop/${currentArtwork.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {featuredArtworks.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-700"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

