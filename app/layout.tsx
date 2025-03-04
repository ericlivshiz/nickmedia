import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NickMedia - Premium Rap Cover Art Posters",
  description: "Exclusive rap-inspired artwork and posters by @nickmediasm",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

