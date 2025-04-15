import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import { DecorativeElements } from "@/components/decorative-elements"

export default function GahononPage() {
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
              Barangay <span className="text-accent">Gahonon</span>
            </h1>
            <p className="text-lg md:text-xl mb-0">Patron: San Jose</p>
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
                  Sa pusod ng bayan ng Daet, sa pagitan ng mga puno ng niyog at palayan, nananahan ang isang barangay na
                  tahimik ngunit matatag, ang Barangay Gahonon. Bago pa man bumagtas ang konkretong daan, may isang
                  panalanging tila ihip ng hangin tuwing hapon, ang Aurorahan.
                </p>

                <p>
                  Sa mga unang panahon, wala pang sariling kapilya sa Gahonon. Ngunit hindi ito naging dahilan upang
                  mawaglit ang tradisyong Aurorahan, na nagmula pa sa mga sinaunang lahi, na sumasalalim sa
                  pananampalataya ng mga tao sa Gahonon.
                </p>

                <p>
                  Tuwing sasapit ang buwan ng Mayo, nagsasama-sama ang mga mamamayan sa pagsasagawa ng Aurorahan. Higit
                  pa sa isang tradisyon ang Aurorahan, isa itong panatang kanilang isinasabuhay.
                </p>

                <p>
                  Sa sentro ng kanilang pananalig, tampok ang isang banal, si San Jose, ang patron ng mga manggagawa.
                  Para sa mga taga-Gahonon, siya ang simbolo ng lakas sa kanilang araw-araw na pagharap sa mga hamon ng
                  buhay, dala ang panalangin.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Barangay Gahonon"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading
              title="Tradisyon ng Aurorahan sa Gahonon"
              subtitle="Ang Aurorahan sa Gahonon ay isang mahalagang bahagi ng kanilang kultura at pananampalataya."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Tuwing sasapit ang buwan ng Mayo, nagsasama-sama ang mga mamamayan sa pagsasagawa ng Aurorahan. Higit
                  pa sa isang tradisyon ang Aurorahan, isa itong panatang kanilang isinasabuhay.
                </p>

                <p>
                  Sa sentro ng kanilang pananalig, tampok ang isang banal, si San Jose, ang patron ng mga manggagawa.
                  Para sa mga taga-Gahonon, siya ang simbolo ng lakas sa kanilang araw-araw na pagharap sa mga hamon ng
                  buhay, dala ang panalangin.
                </p>

                <p>
                  Ang Aurorahan sa Gahonon ay isinasagawa sa loob ng tatlong yugto ng pasiyam, kung saan sama-samang
                  nagdarasal at umaawit ng mga dalit ang mga mamamayan. Ito ay isang pagkakataon para sa komunidad na
                  magkaisa at ipakita ang kanilang debosyon kay San Jose.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Aurorahan sa Gahonon"
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
