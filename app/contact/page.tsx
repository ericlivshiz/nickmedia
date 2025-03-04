import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            Get in <span className="text-red-600">Touch</span>
          </h1>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">info@nickmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Studio</h3>
                    <p className="text-gray-400">
                      123 Urban Arts District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="mr-4 h-6 w-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Social Media</h3>
                    <p className="text-gray-400">@nickmediasm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Business Hours</h2>
                <p className="text-gray-400">Monday - Friday: 10am - 6pm</p>
                <p className="text-gray-400">Saturday: By appointment only</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="border-gray-800 bg-zinc-900 text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-gray-800 bg-zinc-900 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" className="border-gray-800 bg-zinc-900 text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="border-gray-800 bg-zinc-900 text-white"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

