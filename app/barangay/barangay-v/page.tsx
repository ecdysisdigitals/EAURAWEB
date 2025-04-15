import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import { DecorativeElements } from "@/components/decorative-elements"

export default function BarangayVPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>
        <DecorativeElements variant="corner" className="top-20 left-4" />
        <DecorativeElements variant="corner" className="top-20 right-4 rotate-90" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Barangay <span className="text-accent">V (Pandan)</span>
            </h1>
            <p className="text-lg md:text-xl mb-0">Patron: San Roque</p>
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
                  Isa ang Barangay V, na mas kilala bilang Pandan, sa mga barangay sa bayan ng Daet, na patuloy na
                  nagtataguyod ng tradisyong Aurorahan. Taon-taon, tuwing buwan ng Agosto, isinasagawa ito sa loob ng
                  tatlong yugto ng pasiyam, kung saan sabay-sabay na nag-aalay ng dasal at awit ang mga komunidad.
                </p>

                <p>
                  Isa itong makalumang kaugalian ng pananampalataya na matagal nang nakatanim sa kanilang kultura at
                  araw-araw na pamumuhay. Nag-ugat ang tradisyong ito noong panahong hindi pa uso ang kuryente, panahong
                  ang liwanag ng tukarol lamang ang siyang nagsilbing tanglaw, hindi lamang sa madilim na paligid kundi
                  sa pananalig ng bawat mamamayan.
                </p>

                <p>
                  Sa katahimikan ng hapon, umaalingawngaw ang mga tinig ng panalangin at awitin, parang dasal na
                  inaakyat sa langit mula sa puso ng isang nagkakaisang pamayanan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Barangay V (Pandan)"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading
              title="Tradisyon ng Aurorahan sa Barangay V"
              subtitle="Ang Aurorahan sa Barangay V ay isang mahalagang bahagi ng kanilang kultura at pananampalataya."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Ang Aurorahan sa Barangay V ay isinasagawa sa loob ng tatlong yugto ng pasiyam, kung saan sama-samang
                  nagdarasal at umaawit ng mga dalit ang mga mamamayan. Ito ay isang pagkakataon para sa komunidad na
                  magkaisa at ipakita ang kanilang debosyon kay San Roque.
                </p>

                <p>
                  Nag-ugat ang tradisyong ito noong panahong hindi pa uso ang kuryente, panahong ang liwanag ng tukarol
                  lamang ang siyang nagsilbing tanglaw, hindi lamang sa madilim na paligid kundi sa pananalig ng bawat
                  mamamayan.
                </p>

                <p>
                  Sa katahimikan ng hapon, umaalingawngaw ang mga tinig ng panalangin at awitin, parang dasal na
                  inaakyat sa langit mula sa puso ng isang nagkakaisang pamayanan. Ang tradisyong ito ay patuloy na
                  isinasabuhay ng mga mamamayan bilang pagpapakita ng kanilang malalim na pananampalataya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Aurorahan sa Barangay V"
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
