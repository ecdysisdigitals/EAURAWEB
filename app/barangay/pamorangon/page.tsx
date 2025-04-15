import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import { DecorativeElements } from "@/components/decorative-elements"

export default function PamorangonPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/Nuestra-Senora-de-Antipolo.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>
        <DecorativeElements variant="corner" className="top-20 left-4" />
        <DecorativeElements variant="corner" className="top-20 right-4 rotate-90" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Barangay <span className="text-accent">Pamorangon</span>
            </h1>
            <p className="text-lg md:text-xl mb-0">Patron: Nuestra Señora de Antipolo</p>
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
                  Sa Barangay Pamorangon, nagsisilbing pagkakataon ang pagdiriwang ng pista upang muling buhayin ang
                  isang tradisyon ng pananampalataya, na tinatawag na Aurorahan. Isinasagawa ito tuwing Agosto sa loob
                  ng tatlong yugto ng pasiyam.
                </p>

                <p>
                  Isang simbolo ng pag-asa at gabay para sa mga taga-Pamorangon ang kanilang patron na si Nuestra Señora
                  de Antipolo. Pinaniniwalaang mapagkandiling patrona ng kapayapaan at mga manlalakbay si Nuestra Señora
                  de Antipolo, lalo na noong panahon ng mga galyon sa ilalim ng pananakop ng mga Kastila.
                </p>

                <p>
                  Sa bawat dasal at awit na iaalay sa kanya, may nakatagong malalim na dahilan, ang pasasalamat,
                  paghingi ng biyaya, kagalingan, at gabay sa pang araw-araw na pamumuhay.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/Nuestra-Senora-de-Antipolo.png?height=720&width=1280"
                  alt="Barangay Pamorangon"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading
              title="Tradisyon ng Aurorahan sa Pamorangon"
              subtitle="Ang Aurorahan sa Pamorangon ay isang mahalagang bahagi ng kanilang kultura at pananampalataya."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Ang Aurorahan sa Pamorangon ay isinasagawa sa loob ng tatlong yugto ng pasiyam, kung saan sama-samang
                  nagdarasal at umaawit ng mga dalit ang mga mamamayan. Ito ay isang pagkakataon para sa komunidad na
                  magkaisa at ipakita ang kanilang debosyon kay Nuestra Señora de Antipolo.
                </p>

                <p>
                  Sa bawat dasal at awit na iaalay sa kanya, may nakatagong malalim na dahilan, ang pasasalamat,
                  paghingi ng biyaya, kagalingan, at gabay sa pang araw-araw na pamumuhay.
                </p>

                <p>
                  Ang tradisyong ito ay patuloy na isinasabuhay ng mga mamamayan bilang pagpapakita ng kanilang malalim
                  na pananampalataya at pagpapahalaga sa kanilang kultura at tradisyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/Nuestra-Senora-de-Antipolo.png?height=720&width=1280"
                  alt="Aurorahan sa Pamorangon"
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
