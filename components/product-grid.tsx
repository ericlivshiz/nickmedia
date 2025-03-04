"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

// Sample product data
const products = [
  {
    id: 1,
    title: "Urban Legends",
    price: 49.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "urban-legends",
    category: "Album Covers",
    size: '18" x 24"',
  },
  {
    id: 2,
    title: "Street Dreams",
    price: 59.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "street-dreams",
    category: "Street Art",
    size: '24" x 36"',
  },
  {
    id: 3,
    title: "Concrete Jungle",
    price: 44.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "concrete-jungle",
    category: "Typography",
    size: '18" x 24"',
  },
  {
    id: 4,
    title: "Midnight in the City",
    price: 54.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "midnight-in-the-city",
    category: "Street Art",
    size: '24" x 36"',
  },
  {
    id: 5,
    title: "Lyrical Genius",
    price: 49.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "lyrical-genius",
    category: "Artist Portraits",
    size: '18" x 24"',
  },
  {
    id: 6,
    title: "Rhythm & Poetry",
    price: 64.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "rhythm-and-poetry",
    category: "Typography",
    size: '24" x 36"',
  },
  {
    id: 7,
    title: "Underground Kings",
    price: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "underground-kings",
    category: "Limited Edition",
    size: '30" x 40"',
  },
  {
    id: 8,
    title: "Beats & Rhymes",
    price: 39.99,
    image: "/placeholder.svg?height=600&width=600",
    slug: "beats-and-rhymes",
    category: "Album Covers",
    size: '12" x 18"',
  },
]

export function ProductGrid() {
  const [sortOption, setSortOption] = useState("featured")
  const { addToCart } = useCart()

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name-asc":
        return a.title.localeCompare(b.title)
      case "name-desc":
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-400">Showing {products.length} results</p>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm text-gray-400">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-md border border-gray-800 bg-zinc-900 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <div key={product.id} className="group overflow-hidden rounded-lg border border-gray-800 bg-zinc-900">
            <Link href={`/shop/${product.slug}`} className="block">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <Link href={`/shop/${product.slug}`} className="hover:text-red-600">
                  <h3 className="font-medium">{product.title}</h3>
                </Link>
                <span className="font-medium text-red-600">${product.price}</span>
              </div>

              <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
                <span>{product.category}</span>
                <span>{product.size}</span>
              </div>

              <Button
                className="w-full bg-zinc-800 hover:bg-zinc-700"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

