"use client"

import Image from "next/image"
import { Star } from "lucide-react"

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
  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">What Our Collectors Say</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-red-600">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                  }`}
                />
              ))}
            </div>

            <blockquote className="mb-4 text-gray-300 text-sm">
              &quot;{testimonial.text}&quot;
            </blockquote>

            <div>
              <p className="font-medium text-lg text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

