import { Card } from "@/components/ui/card"

export function StorySection8() {
  return (
    <section id="parte8" className="story-section relative min-h-screen flex items-center bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 8
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">El Ciclo Eterno</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              Al final del día, cuando Sue se retira hacia el horizonte, la sabana de Bogotá se transforma bajo la luz
              plateada de la luna. Este momento sagrado representa el ciclo eterno de la vida, muerte y renacimiento que
              los Muisca comprendían profundamente.
            </p>
            <p className="text-muted-foreground">
              En esta transición entre el día y la noche, entre lo conocido y lo misterioso, se revela la verdadera
              sabiduría Muisca: que todo está conectado en un ciclo infinito de transformación y renovación.
            </p>
          </Card>

          <Card className="bg-card border p-6">
            <h3 className="text-xl font-semibold mb-4">La Sabiduría Eterna</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Los Muisca entendían que cada final es también un comienzo, que cada puesta de sol promete un nuevo
              amanecer. Esta comprensión cíclica del tiempo y la existencia permeaba todos los aspectos de su cultura y
              espiritualidad.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">El ciclo eterno continúa...</p>
          </Card>
        </div>

        {/* Visual elements */}
        <div className="space-y-6">
          <Card className="bg-card border p-6">
            <img
              src="/bogota-savanna-night-moonlight-peaceful-landscape-.jpg"
              alt="Sabana de Bogotá de noche con luna"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">La Sabana Nocturna</h3>
            <p className="text-sm text-muted-foreground">
              Bajo la luz de la luna, el territorio Muisca revela sus misterios más profundos, conectando el mundo
              visible con el reino de los espíritus.
            </p>
          </Card>

          <Card className="bg-card border p-4">
            <h4 className="font-semibold text-sm mb-3">El Legado Continúa</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Aunque los tiempos han cambiado, la sabiduría Muisca perdura en la memoria de la tierra y en el corazón de
              quienes honran sus enseñanzas.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Pasado • Presente • Futuro</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
