"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LandingSection() {
  const scrollToFirstSection = () => {
    const element = document.getElementById("parte1")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="story-section relative flex items-center justify-center min-h-screen">
      {/* Background with cultural pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30" />
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('/ancient-rock-paintings-cave-art-muisca-indigenous-.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-3xl">🏔️</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-balance">Muisca</h1>
          <p className="text-xl text-white/90 font-light">Cultura Ancestral</p>
        </div>

        {/* Hook/Gancho */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-balance">Descubre la sabiduría ancestral del pueblo Muisca</h2>
          <p className="text-lg text-white/90 leading-relaxed text-pretty">
            Un viaje interactivo a través de la rica cultura, tradiciones y cosmovisión de una de las civilizaciones más
            importantes de los Andes colombianos. Explora sus mitos, territorio sagrado y legado que perdura hasta hoy.
          </p>
        </Card>

        {/* CTA Button */}
        <Button
          onClick={scrollToFirstSection}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Empezar el Viaje
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
