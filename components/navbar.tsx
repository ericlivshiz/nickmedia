"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartItems, isCartOpen, setIsCartOpen } = useCart()

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-red-600">NICK</span>MEDIA
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-300 hover:text-white">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-900 p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-gray-800 p-4">
                    <Link href="/" className="text-xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-red-600">NICK</span>MEDIA
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4 p-4">
                    <Link
                      href="/"
                      className="py-2 text-lg font-medium hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/shop"
                      className="py-2 text-lg font-medium hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/about"
                      className="py-2 text-lg font-medium hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="py-2 text-lg font-medium hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <CartDrawer />
    </>
  )
}

