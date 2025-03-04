import { ShopFilters } from "@/components/shop-filters"
import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-24">
      <div className="container px-4">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
          Shop <span className="text-red-600">Collection</span>
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-1/4">
            <ShopFilters />
          </div>

          <div className="w-full lg:w-3/4">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

