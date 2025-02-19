import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Building2, GraduationCap, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">ZimPolyStay</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Accommodations
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Perfect Campus Accommodation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure comfortable and convenient accommodation for your academic journey. Easy booking process
                  designed for polytechnic students.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="w-full pl-8" placeholder="Search accommodations..." type="search" />
                  </div>
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Available Accommodations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our variety of accommodation options to suit your needs and budget.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <Image
                    alt="Standard Hostel"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-2xl font-bold">Standard Hostel</h3>
                  <p className="text-muted-foreground">Comfortable shared rooms with basic amenities</p>
                  <Button className="w-full">View Details</Button>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <Image
                    alt="Premium Hostel"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-2xl font-bold">Premium Hostel</h3>
                  <p className="text-muted-foreground">Modern facilities with enhanced comfort</p>
                  <Button className="w-full">View Details</Button>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                  <Image
                    alt="Private Apartment"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-2xl font-bold">Private Apartment</h3>
                  <p className="text-muted-foreground">Self-contained units for independent living</p>
                  <Button className="w-full">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Why Choose Us</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Making Student Life Easier
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  We provide a seamless accommodation booking experience for polytechnic students.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Quality Accommodation</h3>
                    <p className="text-muted-foreground">Verified and well-maintained living spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Student Community</h3>
                    <p className="text-muted-foreground">Connect with fellow students and build lasting friendships</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Academic Focus</h3>
                    <p className="text-muted-foreground">Environments designed to support your studies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-bold">ZimPolyStay</span>
            </div>
            <p className="text-sm text-muted-foreground">Making student accommodation simple and accessible</p>
          </div>
          <div className="flex gap-12">
            <nav className="flex flex-col gap-2">
              <h3 className="font-semibold">Links</h3>
              <Link href="#" className="text-sm hover:underline">
                About Us
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contact
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Privacy
              </Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h3 className="font-semibold">Support</h3>
              <Link href="#" className="text-sm hover:underline">
                FAQs
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Help Center
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Student Guide
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex h-14 items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ZimPolyStay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

