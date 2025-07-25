"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-2xl">
          <span>Rupesh Konduru</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xl font-medium">
          <Link href="#about" className="hover:text-foreground/80 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-foreground/80 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-foreground/80 transition-colors">Projects</Link>
          <Link href="#education" className="hover:text-foreground/80 transition-colors">Education</Link>
          <Link href="#contact" className="hover:text-foreground/80 transition-colors">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/rupesh-vk" target="_blank">
              <Github className="h-10 w-10" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/rupesh--konduru/" target="_blank">
              <Linkedin className="h-10 w-10" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
