"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    location: "Brooklyn, NY",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The quality of these prints is insane. The colors pop just like in the digital versions, and they look even better in person. Definitely worth every penny.",
  },
  {
    id: 2,
    name: "Alicia Rodriguez",
    location: "Los Angeles, CA",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've been following Nick's work for years on social media. Finally got my hands on one of his limited edition prints and couldn't be happier. The packaging was top-notch too.",
  },
  {
    id: 3,
    name: "Tyrone Williams",
    location: "Atlanta, GA",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "These posters bring serious energy to my studio space. The urban aesthetic is exactly what I was looking for. Will definitely be copping more in the future.",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-zinc-800 p-4 sm:p-6 md:p-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full shrink-0 px-2 sm:px-4 text-center flex flex-col items-center"
            >
              <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mb-4 text-gray-300 text-sm sm:text-base max-w-full sm:max-w-xl mx-auto">
                &quot;{testimonial.text}&quot;
              </blockquote>

              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 sm:h-2 w-6 sm:w-8 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-700"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}

