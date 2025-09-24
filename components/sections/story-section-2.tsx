import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Volume2 } from "lucide-react"

export function StorySection2() {
  return (
    <section id="parte2" className="story-section relative min-h-screen flex items-center bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Video/Media Section */}
        <div className="relative">
          <Card className="bg-card border p-6">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-black/10 flex items-center justify-center relative">
              <img
                src="/cosmic-space-particles-stars-nebula-universe-spiri.jpg"
                alt="Video de partículas espaciales"
                className="w-full h-full object-cover"
              />
              <Button
                size="lg"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>
            <h3 className="text-xl font-semibold mb-2">La Cosmogonía Muisca</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Descubre cómo los Muisca entendían el universo y su lugar en él a través de sus mitos de creación.
            </p>

            {/* Audio element */}
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                <Volume2 className="w-4 h-4" />
              </Button>
              <div className="flex-1">
                <div className="h-1 bg-muted-foreground/20 rounded-full">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2:34</span>
            </div>
          </Card>
        </div>

        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 2
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">El Universo Según los Muisca</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              Para los Muisca, el cosmos era un sistema interconectado donde cada elemento tenía su lugar sagrado. Desde
              las partículas de luz que danzaban en el cielo hasta la tierra que los sustentaba, todo formaba parte de
              un gran tejido cósmico.
            </p>
            <p className="text-muted-foreground">
              Sus mitos hablan de un tiempo primordial cuando la luz y la oscuridad se separaron, dando origen a los
              mundos que conocemos.
            </p>
          </Card>

          {/* Additional elements */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border p-4">
              <img
                src="/frozen-planet-ice-earth-space-cosmic.jpg"
                alt="Planeta congelado"
                className="w-full h-20 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm">Tierra Primordial</h4>
            </Card>
            <Card className="bg-card border p-4">
              <img
                src="/corn-maize-golden-grain-agriculture-muisca.jpg"
                alt="Maíz sagrado"
                className="w-full h-20 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm">Maíz Sagrado</h4>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
