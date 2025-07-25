"use client"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Database, Smartphone } from "lucide-react"

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-16 md:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Go</Badge>
              <Badge variant="secondary">C</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">C#</Badge>
              <Badge variant="secondary">.NET</Badge>
            </CardContent>
          </Card>

          {/* Frontend & Frameworks*/}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">RESTful</Badge>
              <Badge variant="secondary">GraphQL</Badge>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">NextJS</Badge>
              <Badge variant="secondary">SpringBoot</Badge>
              <Badge variant="secondary">Django</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
               <Badge variant="secondary">SQL</Badge>
            </CardContent>
          </Card>

          {/* Tools & DevOps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Tools & Others
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">GitHub</Badge>
              <Badge variant="secondary">Jira</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Azure</Badge>
              <Badge variant="secondary">Agile</Badge>
              <Badge variant="secondary">Scrum</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">Terraform</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
