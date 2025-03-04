import Link from "next/link"
import { Instagram, Mail, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-zinc-950 text-gray-300">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block text-2xl font-bold text-white">
              <span className="text-red-600">NICK</span>MEDIA
            </Link>
            <p className="mb-4 text-sm">Premium rap cover art posters from the streets to your walls.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-red-600">
                  All Posters
                </Link>
              </li>
              <li>
                <Link href="/shop?category=limited" className="hover:text-red-600">
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bestsellers" className="hover:text-red-600">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/shop?category=new" className="hover:text-red-600">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-600">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-red-600">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe to get updates on new releases and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-gray-800 bg-zinc-900 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="submit"
                className="rounded-r-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NickMedia. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

