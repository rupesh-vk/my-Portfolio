import Header from "@/components/Header"

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"

import ContactSection from "@/components/ContactSection"
import EducationSection from "@/components/EducationSection"
import Footer from "@/components/Footer";  



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
  {/* Add more sections as needed */}

      </main>
    </div>
  )
}


