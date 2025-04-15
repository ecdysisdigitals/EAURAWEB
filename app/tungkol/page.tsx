import Image from "next/image"
import { CandlestickChartIcon as Candle, BookOpen, Church, Users, Heart } from "lucide-react"

import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import FeatureCard from "@/components/feature-card"

export default function TungkolPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/Prusisyon.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Tungkol sa <span className="text-accent">Aurorahan</span>
            </h1>

            <p className="text-lg md:text-xl mb-0">Kasaysayan, Kaparaanan, at Kahalagahan ng Tradisyon</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Kasaysayan ng Tradisyon"
              subtitle="Ang Aurorahan ay isang tradisyong panrelihiyon sa rehiyong Bikol na nakaugat sa pananampalatayang Katoliko ng mga mamamayan."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <p>
                  Ipinagdiriwang ito bilang panalangin at paghingi ng tulong sa patron ng bayan—gaya nina San Roque
                  (patron ng mga maysakit), San Jose (patron ng mga manggagawa), Nuestra Señora de Antipolo (patron ng
                  mga manlalakbay), at Nuestra Señora de Peñafrancia (patrona ng Kabikulan).
                </p>

                <p>
                  Tinawag itong Aurorahan dahil unang isinagawa ito tuwing bukang-liwayway (aurora sa wikang Kastila).
                  Sa kasalukuyan, isinasagawa na ito tuwing ika-anim ng gabi. Ipinagdiriwang ito sa buong buwan ng Mayo
                  o Agosto (depende sa lugar) at nahahati sa tatlong yugto ng pasiyam.
                </p>

                <p>
                  Gabi-gabi, nagtitipon ang mga kalahok upang magdasal at umawit ng dalit—isang sagutang awit na inaawit
                  ng mga cantoras (paradasal). Kasabay nito, inililibot sa barangay ang andas na may dalang imahen ng
                  mga santo, na binubuhat ng mga parapa'san.
                </p>

                <p>
                  Bahagi rin ng tradisyon ang paghahanda ng pagkain ng may kabig (sponsor), lalo na sa huling gabi na
                  pinangungunahan ng Cabo Mayor (pangunahing sponsor) ng selebrasyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Aurorahan Tradition"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang Aurorahan ay hindi lamang isang gawaing panrelihiyon kundi isang pagpapahayag ng sama-samang
                pananampalataya at pasasalamat ng komunidad. Iniaalay ito bilang panalangin para sa masaganang ani,
                proteksyon sa sakuna, biyaya sa mga manggagawa, at gabay para sa buong pamayanan sa pamamagitan ng
                pananampalataya sa kanilang mga patron.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Kaparaanan"
              title="Ang Proseso ng Debosyon"
              subtitle="Ang bawat hakbang sa Aurorahan ay may malalim na simbolismo."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <FeatureCard
                icon={<Church className="h-6 w-6" />}
                title="Pagnonobena sa Kapilya"
                description="Bilang paghahanda sa prusisyon, nagsasagawa ng pagnonobena sa kapilya ang mga deboto."
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <FeatureCard
                icon={<BookOpen className="h-6 w-6" />}
                title="Pagpapatunog ng Kampana"
                description="Ang pagpapatunog ng kampana ay hudyat ng pagsisimula ng Aurorahan sa komunidad."
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Prusisyon ng Imahe"
                description="Inililibot ang imahe ng patron sa bawat purok upang ipaabot ang biyaya sa buong komunidad."
              />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <FeatureCard
                icon={<Heart className="h-6 w-6" />}
                title="Pag-awit ng mga Dalit"
                description="Ang pag-awit ng mga dalit sa makalumang himig ay pinangungunahan ng matatanda at sinasagutan ng mga bata."
              />
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <FeatureCard
                icon={<Candle className="h-6 w-6" />}
                title="Paggamit ng Sagradong Kagamitan"
                description="Ginagamit ang mga sagradong kagamitan gaya ng krus, kandila, rosaryo, andas, at imahe ng patron."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang mga elementong ito ay hindi lamang dekorasyon, kundi mahalagang simbolo ng pananampalataya na
                nagbibigay ng malalim na kahulugan sa tradisyon ng Aurorahan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Batay sa Paniniwala"
              title="Panata, Patron, at Pananalig"
              subtitle="Bawat barangay ay may sariling patron na siyang sentro ng pananalig."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Barangay VIII</h3>
                <p className="text-accent mb-4">Debosyon sa Mahal na Ina ng Peñafrancia</p>
                <p className="text-muted-foreground">
                  Sagisag ng pag-asa at proteksyon ng pamilya. Ang Mahal na Ina ng Peñafrancia ay itinuturing na patrona
                  ng Kabikulan at simbolo ng pag-asa at proteksyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Gahonon</h3>
                <p className="text-accent mb-4">Paggalang kay San Jose</p>
                <p className="text-muted-foreground">
                  Patron ng mga manggagawa at kabuhayan. Si San Jose ay simbolo ng sipag at tiyaga, na nagbibigay
                  inspirasyon sa mga manggagawa.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Barangay V at Mancruz</h3>
                <p className="text-accent mb-4">Pananalig kay San Roque</p>
                <p className="text-muted-foreground">
                  Simbolo ng pag-asa at kagalingan. Si San Roque ay kilala bilang patron ng mga maysakit at
                  tagapagtanggol laban sa mga salot.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pamorangon</h3>
                <p className="text-accent mb-4">Pagkakaisa sa ilalim ng debosyon kay Nuestra Señora de Antipolo</p>
                <p className="text-muted-foreground">
                  Patron ng mga manlalakbay at simbolo ng kaligtasan. Si Nuestra Señora de Antipolo ay kilala bilang
                  tagapagtanggol ng mga manlalakbay.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang pakikilahok sa Aurorahan ay itinuturing na panata para sa masaganang buhay, proteksyon, at katuparan
                ng mga mithiin. Ito ay pagsasalin ng debosyon mula henerasyon sa henerasyon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spiritual Implications Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Espirituwal na Implikasyon"
              title="Pagpapalalim ng Pananampalataya"
              subtitle="Mula sa bawat barangay, isang temang paulit-ulit na lumitaw—ang pagpapalalim ng ugnayan sa Diyos."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Mas Matibay na Pananampalataya</h3>
                <p className="text-muted-foreground">
                  Ang Aurorahan ay nakatutulong upang mas mapalalim ang ugnayan ng tao sa Diyos. Sa pamamagitan ng
                  panalangin at mga dalit, natututo ang mga kalahok ng mga aral ng pananampalataya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Kagalingan mula sa Karamdaman</h3>
                <p className="text-muted-foreground">
                  Naniniwala ang ilan na ang debosyon sa Aurorahan ay may hatid na kagalingan. Minsan, hindi lang
                  pisikal na kagalingan kundi pati emosyonal.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Kaginhawaan</h3>
                <p className="text-muted-foreground">
                  Sa gitna ng problema, nagbibigay ang Aurorahan ng panandaliang kaginhawaan. Ang sama-samang panalangin
                  ay nagpapagaan ng loob.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Katuparan ng Kahilingan</h3>
                <p className="text-muted-foreground">
                  Maraming kalahok ang naniniwala na tinutugon ng Diyos ang kanilang panalangin sa pamamagitan ng
                  Aurorahan. Kapag sila ay tapat sa kanilang panata, dumarating ang biyaya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Kusang-loob na Pananampalataya</h3>
                <p className="text-muted-foreground">
                  Ang pakikilahok sa Aurorahan ay bukal sa kalooban. Maraming magulang ang isinasama ang kanilang anak
                  taon-taon. Nagiging parte ito ng kanilang pamumuhay at tradisyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Komunal na Espirituwalidad</h3>
                <p className="text-muted-foreground">
                  Hindi lang personal na panata, kundi pananalig ng buong komunidad ang Aurorahan. Kapag ito'y
                  isinasagawa, alam ng lahat na nalalapit na ang pista.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang bawat dasal sa Aurorahan ay isang hakbang palapit sa pag-asa, kapanatagan, at biyaya.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cultural Implications Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Kultural na Implikasyon"
              title="Pagpapayabong ng Tradisyon at Pagkakakilanlan"
              subtitle="Hindi lamang relihiyoso, ang Aurorahan ay isang kultural na pamana."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pagkakaisa sa Komunidad</h3>
                <p className="text-muted-foreground">
                  Ang Aurorahan ay isang pagkakataon para magsama-sama ang mga tao sa komunidad. Nagiging daan ito para
                  magtulungan sa paghahanda at pagdiriwang, na nagpapalakas ng ugnayan at nagbubuklod sa bawat isa.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pagpapahalaga sa Tradisyon</h3>
                <p className="text-muted-foreground">
                  Ang Aurorahan ay hindi lang isang relihiyosong gawain kundi bahagi na ng kultura at pagkakakilanlan ng
                  komunidad. Sa pagpapasa nito mula sa nakatatanda patungo sa mga kabataan, ipinapakita ang
                  pagpapahalaga sa kasaysayan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Kultural na Transmisyon</h3>
                <p className="text-muted-foreground">
                  Ang Aurorahan ay isang paraan ng pagpapasa ng kultura at tradisyon mula sa isang henerasyon patungo sa
                  iba. Habang lumilipas ang panahon, tinitiyak nito na magpapatuloy ang mga tradisyon sa mga kabataan,
                  at maging bahagi pa rin ng buhay ng mga susunod na henerasyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Organisasyon at Disiplina ng Kabataan</h3>
                <p className="text-muted-foreground">
                  Ang pakikilahok sa Aurorahan ay hindi lamang tungkol sa pananampalataya, kundi pati na rin sa
                  pagpapalaganap ng tamang asal at disiplina sa mga kabataan. Sa mga ganitong aktibidad, natututo ang
                  mga bata ng mga mahalagang aral.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Kamalayan sa Komunidad</h3>
                <p className="text-muted-foreground">
                  Ang Aurorahan ay isang mahalagang pagkakataon upang mapalalim ang kamalayan ng komunidad tungkol sa
                  kanilang mga tradisyon. Sa pamamagitan nito, ang mga tao ay nagkakaroon ng mas malalim na ugnayan sa
                  kanilang kultura at relihiyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Diwang Bayanihan</h3>
                <p className="text-muted-foreground">
                  Sa Aurorahan, makikita ang diwa ng bayanihan, kung saan ang lahat ay nagtutulungan para maisagawa ang
                  mga tradisyon at ritwal. Mula sa mga donasyon hanggang sa boluntaryong paglilinis, makikita ang
                  malasakit at pagkakaisa ng komunidad.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Sa gitna ng modernisasyon, nananatiling buhay ang tradisyong ito—isang patunay ng tatag ng kultura at
                pananampalataya ng mga taga-Daet.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
