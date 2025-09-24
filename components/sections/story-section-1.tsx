import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function StorySection1() {
  return (
    <section id="parte1" className="story-section relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('/bogota-savanna-landscape-daytime-golden-sunlight-m.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-white">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4">
              Parte 1
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">Los Orígenes en la Sabana Sagrada</h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty">
              En las tierras altas de la Cordillera Oriental, donde el sol baña la extensa sabana de Bogotá, floreció
              una de las culturas más sofisticadas de América precolombina. Los Muisca, conocidos como los "hombres" en
              su lengua ancestral, desarrollaron una compleja sociedad que dominó estos territorios sagrados durante más
              de mil años.
            </p>
          </Card>

          {/* Interactive elements */}
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/20">
              <ExternalLink className="w-4 h-4 mr-2" />
              Información del Lenguaje Muisca
            </Button>
          </div>
        </div>

        {/* Visual element */}
        <div className="relative">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src="/ancient-rock-paintings-cave-art-muisca-indigenous-.jpg"
                alt="Pinturas rupestres Muisca"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pinturas Rupestres</h3>
            <p className="text-white/80 text-sm">
              Las pinturas rupestres Muisca nos revelan su cosmovisión y conexión espiritual con la naturaleza.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
