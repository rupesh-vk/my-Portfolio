"use client"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Realtime Collaborative Document Editor */}
          <Card className="flex flex-col">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg"
                alt="Realtime Collaborative Editor"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Realtime Collaborative Document Editor</CardTitle>
              <CardDescription>
                Multi-user NestJS+MongoDB editor with real-time sync and JWT auth.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">NestJS</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">WebSocket</Badge>
                <Badge variant="outline">JWT</Badge>
              </div>
            </CardContent>
            <div className="p-6 pt-0 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://demo.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </div>
          </Card>

          {/* Library Management Services */}
          <Card className="flex flex-col">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg"
                alt="Library Management Services"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Library Management Services</CardTitle>
              <CardDescription>
                Full-stack library system with Spring Boot + React, deployed on AWS.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Spring Boot</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">EC2</Badge>
                <Badge variant="outline">RDS</Badge>
                <Badge variant="outline">S3</Badge>
              </div>
            </CardContent>
            <div className="p-6 pt-0 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://demo.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </div>
          </Card>

          {/* Concurrent Task Queue */}
          <Card className="flex flex-col">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg"
                alt="Concurrent Task Queue"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Concurrent Task Queue</CardTitle>
              <CardDescription>
                Lightweight job processor in Go using goroutines and channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Go</Badge>
                <Badge variant="outline">Goroutines</Badge>
                <Badge variant="outline">Concurrency</Badge>
              </div>
            </CardContent>
            <div className="p-6 pt-0 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://demo.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </div>
          </Card>

          {/* Dnd Manager */}
          <Card className="flex flex-col">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg"
                alt="Dnd Manager"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Dnd Manager</CardTitle>
              <CardDescription>
                Web app for managing D&D campaigns with custom DB design and UI.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">SQL</Badge>
                <Badge variant="outline">UI/UX</Badge>
                <Badge variant="outline">Data Modeling</Badge>
              </div>
            </CardContent>
            <div className="p-6 pt-0 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://demo.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
