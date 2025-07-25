"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/rupesh-vk" target="_blank">
            <Github className="h-8 w-8 text-white hover:text-indigo-400 transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupesh--konduru/" target="_blank">
            <Linkedin className="h-8 w-8 text-white hover:text-indigo-400 transition-colors" />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-lg font-light">
          &copy; {new Date().getFullYear()} Rupesh Konduru. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
