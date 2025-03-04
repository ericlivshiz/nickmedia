"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart()

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col bg-zinc-900 sm:max-w-md">
        <SheetHeader className="border-b border-gray-800 pb-4">
          <SheetTitle className="flex items-center text-xl">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <ShoppingCart className="mb-4 h-16 w-16 text-gray-600" />
            <h3 className="mb-2 text-xl font-medium">Your cart is empty</h3>
            <p className="mb-6 text-center text-gray-400">Looks like you haven't added any posters to your cart yet.</p>
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md bg-zinc-800">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-400">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>

                      <div className="mt-2 flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>

                        <span className="w-8 text-center">{item.quantity}</span>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 border-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="mt-2 h-7 w-7 text-gray-400 hover:text-white"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>

              <div className="mb-6 flex items-center justify-between border-t border-gray-800 pt-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-red-600 hover:bg-red-700">Proceed to Checkout</Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-800 hover:bg-zinc-800"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

