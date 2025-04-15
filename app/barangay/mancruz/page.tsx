import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import { DecorativeElements } from "@/components/decorative-elements"

export default function MancruzPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/San-Roque.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>
        <DecorativeElements variant="corner" className="top-20 left-4" />
        <DecorativeElements variant="corner" className="top-20 right-4 rotate-90" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Barangay <span className="text-accent">Mancruz</span>
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
                  Isang tahimik ngunit makulay na pamayanan sa bayan ang Barangay Mancruz. Sa gitna ng luntiang
                  kapaligiran at simpleng kabuhayan, namamayani ang pagkakaisa at matibay na pananampalataya ng mga
                  mamamayan.
                </p>

                <p>
                  Sa bawat tahanan, makikita ang kultura ng malasakit at pananalig na patuloy na isinasabuhay ng mga
                  tao, ang tradisyong Aurorahan. Tuwing Agosto, buong-puso nila itong ipinagdiriwang bilang papuri sa
                  kanilang patron na si San Roque, ang patron ng mga maysakit.
                </p>

                <p>
                  Kinikilala siya bilang tagapangalaga ng mga maysakit at tagapagtanggol laban sa mga salot. Sa kanyang
                  imahe, makikita ang isang mapagpakumbabang alagad ng Diyos na may sugat sa hita at isang asong
                  nagdadala ng tinapay, isang paalala ng sakripisyo at kagalingan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/San-Roque.png?height=720&width=1280"
                  alt="Barangay Mancruz"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading
              title="Tradisyon ng Aurorahan sa Mancruz"
              subtitle="Ang Aurorahan sa Mancruz ay isang mahalagang bahagi ng kanilang kultura at pananampalataya."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Sa barangay, hindi lamang siya kinikilalang banal, kundi itinuturing na katuwang sa pagharap sa mga
                  hamon ng buhay. Bilang paghahanda, isinasagawa ang Aurorahan sa loob ng tatlong yugto ng pasiyam, kung
                  saan nag-aalay ng mga kandila at panalangin ang mga deboto.
                </p>

                <p>
                  Sa araw ng kapistahan ni San Roque, ginaganap ang misa, prusisyon, at iba't ibang palatuntunan bilang
                  pagpapakita ng pasasalamat at pananampalataya dahil para sa mga taga-Mancruz, simbolo si San Roque ng
                  kabutihan at pagiging mapagbigay sa kapuwa.
                </p>

                <p>
                  Ang Aurorahan sa Mancruz ay isang pagkakataon para sa komunidad na magkaisa at ipakita ang kanilang
                  debosyon kay San Roque. Ito ay isang tradisyon na patuloy na isinasabuhay ng mga mamamayan bilang
                  pagpapakita ng kanilang malalim na pananampalataya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/San-Roque.png?height=720&width=1280"
                  alt="Aurorahan sa Mancruz"
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
