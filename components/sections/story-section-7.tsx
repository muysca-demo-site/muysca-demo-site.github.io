import { Card } from "@/components/ui/card"

export function StorySection7() {
  return (
    <section id="parte7" className="story-section relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual elements */}
        <div className="space-y-6">
          <Card className="bg-card border p-6">
            <img
              src="/placeholder-sy60m.png"
              alt="Serpiente 2 - Guardiana Lunar"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">La Serpiente Lunar</h3>
            <p className="text-sm text-muted-foreground">
              Segunda guardiana, conectada con los ciclos lunares y los misterios de la noche, protectora de los sueños
              y las visiones proféticas.
            </p>
          </Card>

          <Card className="bg-card border p-4">
            <h4 className="font-semibold text-sm mb-3">Dualidad Serpentina</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primera Serpiente:</span>
                <span>Día • Sol • Sabiduría</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Segunda Serpiente:</span>
                <span>Noche • Luna • Intuición</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 7
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">La Segunda Serpiente</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              Cuando la primera serpiente hubo compartido su sabiduría, emergió su complemento: la serpiente lunar,
              guardiana de los misterios nocturnos y los sueños proféticos. Juntas, estas dos fuerzas crearon el
              equilibrio perfecto entre la razón y la intuición.
            </p>
            <p className="text-muted-foreground">
              La segunda serpiente enseñó a los chamanes Muisca a interpretar los sueños, a comunicarse con los
              espíritus ancestrales y a navegar por los mundos invisibles que se revelan bajo la luz de la luna.
            </p>
          </Card>

          <Card className="bg-card border p-6">
            <h3 className="text-xl font-semibold mb-4">Los Ciclos Sagrados</h3>
            <p className="text-muted-foreground text-sm mb-4">
              La dualidad de las serpientes reflejaba la comprensión Muisca de los ciclos naturales: día y noche, sol y
              luna, siembra y cosecha. Esta sabiduría dual guiaba tanto las actividades cotidianas como las ceremonias
              más sagradas.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="text-center p-3 bg-muted/50 rounded">
                <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                <p className="font-medium">Serpiente Solar</p>
                <p className="text-muted-foreground">Conocimiento • Acción</p>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded">
                <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2"></div>
                <p className="font-medium">Serpiente Lunar</p>
                <p className="text-muted-foreground">Intuición • Reflexión</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
