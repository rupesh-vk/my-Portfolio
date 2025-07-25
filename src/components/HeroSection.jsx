"use client"
import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Your Name" />
          <AvatarFallback className="text-2xl">RK</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"> Venkata Rupesh Konduru</h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Full-Stack Software Engineer | Problem Solver | AI/ML Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Passionate about building meaningful digital experiences and solving real-world problems through code.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/api/downloadResume" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
