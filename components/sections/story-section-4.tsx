import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function StorySection4() {
  return (
    <section id="parte4" className="story-section relative min-h-screen flex items-center bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 4
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">El Despertar de la Tierra</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              Cuando el mundo era solo hielo y silencio, los dioses Muisca decidieron despertar la vida. Sue, el sol
              dorado, extendió sus rayos sobre la tierra congelada, derritiendo el hielo primordial y creando los
              primeros ríos y lagos sagrados.
            </p>
            <p className="text-muted-foreground">
              De esta unión entre el fuego solar y el agua primordial nació el maíz, el alimento sagrado que sustentaría
              a la humanidad y conectaría a los Muisca con sus dioses para siempre.
            </p>
          </Card>

          {/* Video description */}
          <Card className="bg-card border p-6">
            <h3 className="text-xl font-semibold mb-4">Descripción del Video</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Este video muestra la transformación cósmica: desde las partículas de luz danzando en el espacio hasta el
              momento en que Sue toca la tierra congelada, despertando la vida y creando las condiciones para el
              florecimiento de la civilización Muisca.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Duración: 3:45</span>
              <span>•</span>
              <span>Animación cósmica</span>
            </div>
          </Card>
        </div>

        {/* Visual elements */}
        <div className="space-y-6">
          {/* Main video */}
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
            <h3 className="text-xl font-semibold mb-2">El Despertar Cósmico</h3>
          </Card>

          {/* Supporting images */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border p-4">
              <img
                src="/placeholder.svg?key=sue-sun"
                alt="Sue - El Sol"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm">Sue - El Sol Dorado</h4>
              <p className="text-xs text-muted-foreground">Dios del sol y la vida</p>
            </Card>
            <Card className="bg-card border p-4">
              <img
                src="/frozen-planet-ice-earth-space-cosmic.jpg"
                alt="Tierra congelada"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm">Tierra Primordial</h4>
              <p className="text-xs text-muted-foreground">El mundo antes del despertar</p>
            </Card>
          </div>

          <Card className="bg-card border p-4">
            <img
              src="/corn-maize-golden-grain-agriculture-muisca.jpg"
              alt="Maíz sagrado"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h4 className="font-semibold text-sm">El Maíz Sagrado</h4>
            <p className="text-xs text-muted-foreground">
              Primer regalo de los dioses a la humanidad, símbolo de vida y abundancia
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
