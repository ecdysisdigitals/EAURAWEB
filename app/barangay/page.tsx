import Link from "next/link"
import { ArrowRight } from "lucide-react"

import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import BarangayCard from "@/components/barangay-card"

export default function BarangayPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Mga <span className="text-accent">Barangay</span> ng Daet
            </h1>

            <p className="text-lg md:text-xl mb-0">Mga piling barangay na nagsasagawa ng Aurorahan sa bayan ng Daet.</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Mayaman sa kultura at tradisyon ang bayan ng Daet, at isang mahalagang bahagi ng buhay ng mga tao rito
                ang mga relihiyosong gawain tulad ng Aurorahan, na sumasalamin sa kanilang malalim na debosyon,
                pananampalataya, at pagkakaisa.
              </p>

              <p className="text-lg mb-8">
                Bilang espirituwal na paghahanda bago ang kapistahan ng bawat barangay, isinasagawa ang Aurorahan sa
                loob ng tatlong yugto ng pasiyam, na karaniwang ginaganap tuwing buwan ng Mayo o Agosto bilang pag-alala
                at pasasalamat sa kani-kanilang patron.
              </p>

              <p className="text-lg">
                Ang mga sumusunod ay ang mga piling barangay sa Daet na patuloy na nagpapahalaga at nagsasagawa ng
                Aurorahan, na siyang nagpapatunay na buhay na buhay pa rin ang diwa ng pananampalataya at tradisyon sa
                puso ng mga mamamayan sa kabila ng modernisasyon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Barangay Cards Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Mga Barangay na Nagsasagawa ng Aurorahan"
              subtitle="Kilalanin ang mga barangay na patuloy na nagpapanatili ng tradisyong Aurorahan."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <BarangayCard
                name="Gahonon"
                patron="San Jose"
                description="Sa pusod ng bayan ng Daet, sa pagitan ng mga puno ng niyog at palayan, nananahan ang isang barangay na tahimik ngunit matatag, ang Barangay Gahonon."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/barangay/gahonon"
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <BarangayCard
                name="Mancruz"
                patron="San Roque"
                description="Isang tahimik ngunit makulay na pamayanan sa bayan ang Barangay Mancruz. Sa gitna ng luntiang kapaligiran at simpleng kabuhayan, namamayani ang pagkakaisa at matibay na pananampalataya ng mga mamamayan."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/barangay/mancruz"
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <BarangayCard
                name="Pamorangon"
                patron="Nuestra Señora de Antipolo"
                description="Sa Barangay Pamorangon, nagsisilbing pagkakataon ang pagdiriwang ng pista upang muling buhayin ang isang tradisyon ng pananampalataya, na tinatawag na Aurorahan."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/barangay/pamorangon"
              />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <BarangayCard
                name="Barangay V"
                patron="San Roque"
                description="Isa ang Barangay V, na mas kilala bilang Pandan, sa mga barangay sa bayan ng Daet, na patuloy na nagtataguyod ng tradisyong Aurorahan."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/barangay/barangay-v"
              />
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <BarangayCard
                name="Barangay VIII"
                patron="Nuestra Señora de Peñafrancia"
                description="Isa ang Barangay VIII, na mas kilala bilang Salcedo, sa mga barangay sa bayan ng Daet na patuloy na nagtataguyod ng tradisyong Aurorahan bilang pagpaparangal kay Nuestra Señora de Peñafrancia."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/barangay/barangay-viii"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Barangay Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading title="Gahonon" subtitle="Patron: San Jose" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal delay={200}>
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

                <div className="pt-4">
                  <Link href="/barangay/gahonon" className="inline-flex items-center text-accent hover:underline">
                    Alamin ang higit pa tungkol sa Gahonon
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Barangay Gahonon"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <SectionHeading title="Mancruz" subtitle="Patron: San Roque" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
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

                <div className="pt-4">
                  <Link href="/barangay/mancruz" className="inline-flex items-center text-accent hover:underline">
                    Alamin ang higit pa tungkol sa Mancruz
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Barangay Mancruz"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
