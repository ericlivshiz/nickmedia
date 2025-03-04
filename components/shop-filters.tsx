"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([20, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const categories = ["Album Covers", "Artist Portraits", "Street Art", "Typography", "Limited Edition"]

  const sizes = ['12" x 18"', '18" x 24"', '24" x 36"', '30" x 40"']

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size))
    } else {
      setSelectedSizes([...selectedSizes, size])
    }
  }

  return (
    <div className="rounded-lg border border-gray-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button variant="link" className="h-auto p-0 text-red-600">
          Reset All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "size"]} className="space-y-4">
        <AccordionItem value="categories" className="border-b-0">
          <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <button
                    className="flex w-full items-center space-x-2 rounded-md p-2 hover:bg-zinc-800"
                    onClick={() => toggleCategory(category)}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded border ${
                        selectedCategories.includes(category) ? "border-red-600 bg-red-600" : "border-gray-600"
                      }`}
                    >
                      {selectedCategories.includes(category) && <Check className="h-3.5 w-3.5 text-white" />}
                    </div>
                    <span>{category}</span>
                  </button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[20, 100]}
                max={200}
                min={0}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <div className="rounded-md border border-gray-800 bg-zinc-800 px-3 py-1">${priceRange[0]}</div>
                <div className="rounded-md border border-gray-800 bg-zinc-800 px-3 py-1">${priceRange[1]}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size" className="border-b-0">
          <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center">
                  <button
                    className="flex w-full items-center space-x-2 rounded-md p-2 hover:bg-zinc-800"
                    onClick={() => toggleSize(size)}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded border ${
                        selectedSizes.includes(size) ? "border-red-600 bg-red-600" : "border-gray-600"
                      }`}
                    >
                      {selectedSizes.includes(size) && <Check className="h-3.5 w-3.5 text-white" />}
                    </div>
                    <span>{size}</span>
                  </button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
      </div>
    </div>
  )
}

