"use client"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">About Me</h2>
        <Card>
          <CardContent className="p-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a recent Computer Science graduate with a passion for software development and tech innovation.
              I&apos;ve developed a strong foundation in algorithms, design, and full-stack engineering.
            </p>
            <p>
              I love solving real-world problems, and I enjoy working on both frontend and backend systems.
              I&apos;m especially passionate about building clean UIs and scalable APIs.
            </p>
            <p>
              I&apos;m now looking to grow in a collaborative team, contribute meaningfully, and keep learning.
              Let&apos;s build something great together.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
