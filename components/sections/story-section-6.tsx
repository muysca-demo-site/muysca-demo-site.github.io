import { Card } from "@/components/ui/card"

export function StorySection6() {
  return (
    <section id="parte6" className="story-section relative min-h-screen flex items-center bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 6
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">La Primera Serpiente</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              En los mitos Muisca, la serpiente representa la sabiduría ancestral y la conexión entre los mundos. La
              primera serpiente emergió de las profundidades de la tierra para enseñar a los humanos los secretos de la
              medicina y la transformación espiritual.
            </p>
            <p className="text-muted-foreground">
              Su presencia marcaba los lugares sagrados y su imagen se convirtió en símbolo de poder y conocimiento,
              adornando los objetos ceremoniales más importantes de la cultura Muisca.
            </p>
          </Card>

          <Card className="bg-card border p-6">
            <h3 className="text-xl font-semibold mb-4">Simbolismo de la Serpiente</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Sabiduría:</strong> Guardiana de los conocimientos ancestrales
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Transformación:</strong> Símbolo de renovación y cambio espiritual
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Conexión:</strong> Puente entre el mundo terrenal y el espiritual
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual elements */}
        <div className="space-y-6">
          <Card className="bg-card border p-6">
            <img
              src="/placeholder-36t6n.png"
              alt="Serpiente 1 - Sabiduría Ancestral"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">La Serpiente de la Sabiduría</h3>
            <p className="text-sm text-muted-foreground">
              Primera guardiana de los conocimientos sagrados, emergió de las profundidades para guiar a la humanidad
              hacia la iluminación espiritual.
            </p>
          </Card>

          <Card className="bg-card border p-4">
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/placeholder-j2g8p.png"
                alt="Artefacto serpiente"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/placeholder-j94ik.png"
                alt="Diseño ceremonial"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/placeholder-o9jct.png"
                alt="Petroglifos serpiente"
                className="w-full h-16 object-cover rounded"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Representaciones de la serpiente en el arte Muisca</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
