import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Share2, Github, Twitter, Instagram } from "lucide-react"

export function InfoSection() {
  return (
    <section id="informacion" className="story-section relative min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">Explora Más Sobre Los Muisca</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubre recursos adicionales, investigaciones y sitios de interés para profundizar en el conocimiento de
            esta fascinante cultura precolombina.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Museo del Oro</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Colección más importante de orfebrería precolombina del mundo, con piezas excepcionales de la cultura
              Muisca.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visitar Sitio
            </Button>
          </Card>

          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Laguna de Guatavita</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Sitio sagrado donde se realizaba la ceremonia de El Dorado, corazón espiritual del territorio Muisca.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Conocer Más
            </Button>
          </Card>

          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Investigación Académica</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Estudios recientes sobre la cultura Muisca, arqueología y preservación del patrimonio cultural.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Estudios
            </Button>
          </Card>

          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Parque Arqueológico</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Sitios arqueológicos preservados donde puedes caminar por los senderos ancestrales Muisca.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Planear Visita
            </Button>
          </Card>

          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Lengua Muisca</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Recursos para aprender sobre el idioma Muisca y los esfuerzos de revitalización lingüística.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Aprender Idioma
            </Button>
          </Card>

          <Card className="bg-card border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Comunidades Actuales</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Conoce las comunidades descendientes que mantienen vivas las tradiciones Muisca en la actualidad.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Conectar
            </Button>
          </Card>
        </div>

        {/* Acknowledgments and Social */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-muted/30 border p-8">
            <h3 className="text-2xl font-semibold mb-4">Agradecimientos</h3>
            <p className="text-muted-foreground mb-6">
              Este proyecto fue posible gracias a la colaboración de investigadores, comunidades indígenas,
              instituciones culturales y todos aquellos que trabajan por preservar y compartir el legado Muisca.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Apoyar Proyecto
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </Card>

          <Card className="bg-muted/30 border p-8">
            <h3 className="text-2xl font-semibold mb-4">Redes Sociales</h3>
            <p className="text-muted-foreground mb-6">
              Síguenos en nuestras redes sociales para mantenerte actualizado sobre nuevos contenidos y descubrimientos
              sobre la cultura Muisca.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Legado Muisca. Creado con respeto y admiración por la cultura ancestral.
          </p>
        </div>
      </div>
    </section>
  )
}
