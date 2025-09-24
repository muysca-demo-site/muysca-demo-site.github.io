import { Card } from "@/components/ui/card"

export function StorySection3() {
  return (
    <section id="parte3" className="story-section relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('/bogota-savanna-landscape-daytime-golden-sunlight-m.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual elements */}
        <div className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img src="/placeholder.svg?key=condor1" alt="Cóndor 1" className="w-full h-24 object-cover rounded" />
              <img src="/placeholder.svg?key=condor2" alt="Cóndor 2" className="w-full h-24 object-cover rounded" />
              <img src="/placeholder.svg?key=condor3" alt="Cóndor 3" className="w-full h-24 object-cover rounded" />
              <img src="/placeholder.svg?key=condor4" alt="Cóndor 4" className="w-full h-24 object-cover rounded" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Los Cuatro Cóndores Sagrados</h3>
            <p className="text-white/80 text-sm">
              Guardianes de los cuatro puntos cardinales, los cóndores representan la conexión entre el mundo terrenal y
              el espiritual.
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <img src="/placeholder.svg?key=chia" alt="Chía" className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Chía - La Luna Sagrada</h3>
            <p className="text-white/80 text-sm">
              En la mitología Muisca, Chía representa la luna y las fuerzas femeninas del universo.
            </p>
          </Card>
        </div>

        {/* Content */}
        <div className="text-white">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4">
              Parte 3
            </span>
            <h2 className="text-4xl font-bold mb-6 text-balance">Los Guardianes del Cielo</h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 mb-8">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              En la cosmogonía Muisca, los cóndores no eran simples aves, sino mensajeros divinos que conectaban los
              diferentes planos de existencia. Cada uno custodiaba un punto cardinal y llevaba las oraciones del pueblo
              hacia los dioses.
            </p>
            <p className="text-white/90">
              Chía, la diosa luna, iluminaba sus vuelos nocturnos y guiaba a los chamanes en sus viajes espirituales a
              través del vacío cósmico, ese espacio sagrado donde nacen todas las posibilidades.
            </p>
          </Card>

          {/* Void representation */}
          <Card className="bg-black/40 backdrop-blur-md border-white/10 p-6">
            <div className="h-24 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded mb-4 flex items-center justify-center">
              <span className="text-white/60 text-sm">El Vacío Primordial</span>
            </div>
            <p className="text-white/80 text-sm">
              El vacío no era ausencia, sino potencial infinito. De él emergían todas las formas de vida y hacia él
              regresaban en el ciclo eterno de la existencia.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
