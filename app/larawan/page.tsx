import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import ImageGallery from "@/components/image-gallery"

export default function LarawanPage() {
  // Sample gallery images
  const galleryImages = [
    {
      src: "/images/Prusisyon.png?height=600&width=600",
      alt: "Prusisyon ng Aurorahan",
      width: 600,
      height: 600,
    },
    {
      src: "/images/Andas.png?height=600&width=600",
      alt: "Pagdarasal sa Kapilya",
      width: 600,
      height: 600,
    },
   
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Larawan ng <span className="text-accent">Pananampalataya</span>
            </h1>

            <p className="text-lg md:text-xl mb-0">
              Isang gallery ng mga larawan ng nobena, prusisyon, kainan, at iba pang mahahalagang tagpo sa Aurorahan.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Mga Larawan ng Aurorahan"
              subtitle="Mga makabuluhang sandali ng tradisyong Aurorahan na nakunan sa iba't ibang barangay ng Daet."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ImageGallery images={galleryImages} />
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Mga Kategorya"
              subtitle="Ang mga larawan ay nahahati sa iba't ibang kategorya upang ipakita ang iba't ibang aspeto ng tradisyong Aurorahan."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Prusisyon</h3>
                <p className="text-muted-foreground mb-4">
                  Mga larawan ng prusisyon ng imahe ng patron sa iba't ibang barangay.
                </p>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <img
                    src="/images/Prusisyon.png?height=400&width=600"
                    alt="Prusisyon"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pagdarasal</h3>
                <p className="text-muted-foreground mb-4">Mga larawan ng pagdarasal at pag-awit ng dalit sa kapilya.</p>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <img
                    src="/iamges/Andas.png?height=400&width=600"
                    alt="Pagdarasal"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>

          
          </div>
        </div>
      </section>
    </div>
  )
}
