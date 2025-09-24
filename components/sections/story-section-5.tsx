import { Card } from "@/components/ui/card"

export function StorySection5() {
  return (
    <section id="parte5" className="story-section relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual elements */}
        <div className="space-y-6">
          <Card className="bg-card border p-6">
            <img
              src="/placeholder-3v0pi.png"
              alt="Plantas del territorio Muisca"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Flora Sagrada</h3>
            <p className="text-sm text-muted-foreground">
              Las plantas medicinales y sagradas que conectaban a los Muisca con el mundo espiritual
            </p>
          </Card>

          <Card className="bg-card border p-6">
            <img
              src="/placeholder-pogab.png"
              alt="Bachué - Diosa Madre"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Bachué - La Madre Primordial</h3>
            <p className="text-sm text-muted-foreground">
              La diosa que emergió de la laguna de Iguaque para poblar la tierra
            </p>
          </Card>
        </div>

        {/* Content */}
        <div>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Parte 5
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">El Nacimiento de la Humanidad</h2>
          </div>

          <Card className="bg-card border p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              De las aguas sagradas de la laguna de Iguaque emergió Bachué, la madre de toda la humanidad. Con su
              compañero, pobló la tierra de hijos que se convertirían en el pueblo Muisca, enseñándoles los secretos de
              la agricultura, la orfebrería y la conexión con lo divino.
            </p>
            <p className="text-muted-foreground">
              Bachué estableció las leyes sagradas y los rituales que mantendrían el equilibrio entre el mundo terrenal
              y el espiritual, creando una civilización en armonía con la naturaleza.
            </p>
          </Card>

          <Card className="bg-card border p-6">
            <h3 className="text-xl font-semibold mb-4">El Territorio Sagrado</h3>
            <p className="text-muted-foreground text-sm mb-4">
              El panorama del territorio Muisca se extendía desde las montañas hasta los valles fértiles, cada lugar
              imbuido de significado espiritual y conectado por una red de caminos sagrados que unían los centros
              ceremoniales.
            </p>
            <img
              src="/placeholder-1g0ws.png"
              alt="Panorama del territorio Muisca"
              className="w-full h-32 object-cover rounded"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
