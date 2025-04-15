import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import { DecorativeElements } from "@/components/decorative-elements"

export default function BarangayVIIIPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/Peniafrancia.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>
        <DecorativeElements variant="corner" className="top-20 left-4" />
        <DecorativeElements variant="corner" className="top-20 right-4 rotate-90" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Barangay <span className="text-accent">VIII (Salcedo)</span>
            </h1>
            <p className="text-lg md:text-xl mb-0">Patron: Nuestra Señora de Peñafrancia</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="flex mb-6">
            <Button variant="ghost" asChild className="flex items-center gap-2">
              <Link href="/barangay">
                <ArrowLeft className="h-4 w-4" />
                Bumalik sa Mga Barangay
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="space-y-6">
                <p>
                  Isa ang Barangay VIII, na mas kilala bilang Salcedo, sa mga barangay sa bayan ng Daet na patuloy na
                  nagtataguyod ng tradisyong Aurorahan bilang pagpaparangal kay Nuestra Señora de Peñafrancia.
                </p>

                <p>
                  Tuwing buwan ng Agosto, isinasagawa ito sa loob ng tatlong yugto ng pasiyam, kung saan sama-samang
                  nagtitipon ang mga mamamayan upang mag-alay ng panalangin at mga awit ng papuri.
                </p>

                <p>
                  Sa bawat tahimik na panalangin, sa bawat kandilang sinindihan, at sa bawat awit ng papuri, masasalamin
                  ang malalim na kultura ng pag-asa, pananalig, at pagkakaisa ng mga tao.
                </p>

                <p>
                  Itinuturing ito ng mga taga-Barangay VIII bilang isang panatang ipinasa mula sa matatanda hanggang sa
                  kabataan. Sa bawat taon, patuloy itong isinasagawa bilang simbolo ng pag-asa, pananampalataya, at
                  pagkakaisa ng buong pamayanan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/Peniafrancia.png?height=720&width=1280"
                  alt="Barangay VIII (Salcedo)"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading
              title="Tradisyon ng Aurorahan sa Barangay VIII"
              subtitle="Ang Aurorahan sa Barangay VIII ay isang mahalagang bahagi ng kanilang kultura at pananampalataya."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Ang Aurorahan sa Barangay VIII ay isinasagawa sa loob ng tatlong yugto ng pasiyam, kung saan
                  sama-samang nagdarasal at umaawit ng mga dalit ang mga mamamayan. Ito ay isang pagkakataon para sa
                  komunidad na magkaisa at ipakita ang kanilang debosyon kay Nuestra Señora de Peñafrancia.
                </p>

                <p>
                  Sa bawat tahimik na panalangin, sa bawat kandilang sinindihan, at sa bawat awit ng papuri, masasalamin
                  ang malalim na kultura ng pag-asa, pananalig, at pagkakaisa ng mga tao.
                </p>

                <p>
                  Itinuturing ito ng mga taga-Barangay VIII bilang isang panatang ipinasa mula sa matatanda hanggang sa
                  kabataan. Sa bawat taon, patuloy itong isinasagawa bilang simbolo ng pag-asa, pananampalataya, at
                  pagkakaisa ng buong pamayanan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/Peniafrancia.png?height=720&width=1280"
                  alt="Aurorahan sa Barangay VIII"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
