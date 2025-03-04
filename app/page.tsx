import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import FeaturedArtwork from "@/components/featured-artwork";
import { ArtistIntro } from "@/components/artist-intro";
import { TestimonialSlider } from "@/components/testimonial-slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90">
          <Image
            src="/assets/red-black-gif.gif"
            alt="Hero Image"
            className="hero-image hero-image-small absolute inset-0 object-cover w-full h-full opacity-50"
            width={640}
            height={640}
          />
          <Image
            src="/assets/red-black-img.jpg"
            alt="Hero Image"
            className="hero-image hero-image-large absolute inset-0 object-cover w-full h-full opacity-50"
            width={640}
            height={640}
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center mx-auto">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="text-red-600">NICK</span>MEDIA
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-300">
            Premium rap cover art posters from the streets to your walls
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/shop">
                Shop Collection <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-black border-gray-700 text-white"
            >
              <Link href="/about">
                About the Artist{" "}
                <ArrowRight className="ml-2 h-5 w-5 hover:bg-black" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="bg-zinc-900 py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Featured <span className="text-red-600">Artwork</span>
          </h2>
          <FeaturedArtwork />
          <div className="mt-12 text-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/shop">View All Posters</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Intro */}
      <ArtistIntro />

      {/* Testimonials */}
      <section className="bg-zinc-900 py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What <span className="text-red-600">Collectors</span> Say
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-900 to-black py-20">
        <div className="container px-4 text-center mx-auto">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Get exclusive rap cover art posters shipped directly to your door.
            Limited editions available.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
          >
            <Link href="/shop">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
