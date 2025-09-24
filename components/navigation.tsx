"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Info } from "lucide-react"

const sections = [
  { id: "inicio", label: "Inicio", icon: "🏔️" },
  { id: "parte1", label: "Parte 1", icon: "🎨" },
  { id: "parte2", label: "Parte 2", icon: "🌅" },
  { id: "parte3", label: "Parte 3", icon: "🦅" },
  { id: "parte4", label: "Parte 4", icon: "🌽" },
  { id: "parte5", label: "Parte 5", icon: "🌿" },
  { id: "parte6", label: "Parte 6", icon: "🐍" },
  { id: "parte7", label: "Parte 7", icon: "🐍" },
  { id: "parte8", label: "Parte 8", icon: "🌙" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [musicEnabled, setMusicEnabled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".story-section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const bottom = top + element.offsetHeight

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(element.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-card/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {sections.slice(0, 5).map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              title={section.label}
            >
              {section.icon}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-border" />

        <div className="flex items-center gap-2">
          {sections.slice(5).map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              title={section.label}
            >
              {section.icon}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-border" />

        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("informacion")}
          className="w-8 h-8 p-0"
          title="Información"
        >
          <Info className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="sm" onClick={() => setMusicEnabled(!musicEnabled)} className="w-8 h-8 p-0">
          {musicEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
      </div>
    </nav>
  )
}
