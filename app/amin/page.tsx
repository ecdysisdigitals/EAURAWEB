import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import ResearcherCard from "@/components/researcher-card"
import AdvisorCard from "@/components/advisor-card"

export default function AminPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Tungkol sa <span className="text-accent">Amin</span>
            </h1>

            <p className="text-lg md:text-xl mb-0">Kilalanin ang mga taong nasa likod ng proyektong E-AURA.</p>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Ang Proyektong E-AURA"
              subtitle="Isang paglalakbay ng puso, panata, at paniniwala."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg">
                Ang E-AURA ay isang proyektong naglalayong idokumento at ipreserba ang mayamang tradisyon ng Aurorahan
                sa bayan ng Daet, Camarines Norte. Ito ay isang pagsisikap na mapanatili ang kulturang ito para sa
                susunod na henerasyon.
              </p>

              <p className="text-lg">
                Ang nilalaman ng website na ito ay mula sa isinagawang pananaliksik at panayam sa mga barangay ng
                Gahonon, Mancruz, Pamorangon, Barangay V, at Barangay VIII. Ito ay produkto ng masusing pag-aaral at
                pakikipag-ugnayan sa mga komunidad.
              </p>

              <p className="text-lg">
                Layunin ng proyektong ito na maipaabot sa mas maraming tao ang kahalagahan ng tradisyong Aurorahan at
                ang malalim na kahulugan nito sa buhay ng mga taga-Daet.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Mananaliksik"
              title="Ang mga Nagpapanatili ng Tradisyon"
              subtitle="Kilalanin ang mga mananaliksik na nagsumikap upang mapanatili at maipasa ang mayamang tradisyon ng Aurorahan sa susunod na henerasyon."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ResearcherCard
                name="GRACE JOY A. BAYANI"
                role="Mananaliksik"
                description="Si Grace Joy Andaya Bayani ay mag-aaral mula sa Camarines Norte State College at kasalukuyang nasa ikatlong taon ng kursong Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino."
                imageSrc="/images/man1.jpg?height=400&width=600"
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ResearcherCard
                name="JOMEL H. RECTO"
                role="Mananaliksik"
                description="Si Jomel Hernandez Recto ay kasalukuyang nasa ikatlong taon ng kanyang kursong Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino sa Camarines Norte State College."
                imageSrc="/images/man2.jpg?height=400&width=600"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang mga mananaliksik ay naglaan ng maraming oras at pagsisikap upang maitala ang tradisyong Aurorahan sa
                pinaka-awtentikong paraan. Sila ay nakipag-ugnayan sa mga komunidad at nakiisa sa mga pagdiriwang upang
                lubos na maunawaan ang kahalagahan ng tradisyong ito.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tagapagpayo"
              title="Gabay sa Pananaliksik"
              subtitle="Ang tagapagpayo ay nagbigay ng mahalagang direksyon at pananaw sa pananaliksik tungkol sa tradisyong Aurorahan."
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <AdvisorCard
              name="Edwin R. Ichiano"
              role="Tagapagpayo"
              description="Ang tagapagpayo ay nagbigay ng mahalagang direksyon at pananaw sa pananaliksik tungkol sa tradisyong Aurorahan."
              imageSrc="/images/tag1.jpg?height=400&width=400"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <AdvisorCard
              name="RYAN S. RODRIGUEZ, PhD"
              role="Tagapagpayo"
              description="Nagtapos ng kolehiyo sa La Consolacion College-Daet sa kursong Batsilyer sa Pansekondaryang Edukasyon major sa Filipino noong 2005. "
              imageSrc="/images/tagapayo2.jpg?height=400&width=400"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg">
                Ang tagapagpayo ay nagsilbing mahalagang gabay sa buong proseso ng pananaliksik. Ang kanyang kaalaman at
                karanasan ay nakatulong upang matiyak na ang proyektong ito ay nakatuon sa pagpapanatili ng awtentikong
                tradisyon ng Aurorahan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Metodolohiya ng Pananaliksik"
              subtitle="Ang pananaliksik ay isinagawa gamit ang mga sumusunod na pamamaraan."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pakikipanayam</h3>
                <p className="text-muted-foreground">
                  Nagsagawa ng mga pakikipanayam sa mga deboto, cantoras, parapa'san, at iba pang kalahok sa Aurorahan
                  upang maunawaan ang kanilang karanasan at pananaw.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Obserbasyon</h3>
                <p className="text-muted-foreground">
                  Dumalo sa mga pagdiriwang ng Aurorahan sa iba't ibang barangay upang direktang maobserbahan ang
                  proseso at mga ritwal.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Dokumentasyon</h3>
                <p className="text-muted-foreground">
                  Kumuha ng mga larawan at video ng mga pagdiriwang upang maitala ang bawat hakbang ng tradisyon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pagsusuri ng Literatura</h3>
                <p className="text-muted-foreground">
                  Nagsagawa ng pagsusuri ng mga naunang pag-aaral at dokumentasyon tungkol sa Aurorahan upang magkaroon
                  ng mas malalim na pag-unawa.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Pakikilahok</h3>
                <p className="text-muted-foreground">
                  Aktibong nakiisa sa mga pagdiriwang ng Aurorahan upang maranasan ang tradisyon mula sa loob.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">Konsultasyon</h3>
                <p className="text-muted-foreground">
                  Nagkonsulta sa mga eksperto sa kultura at tradisyon upang matiyak ang katumpakan ng mga nakalap na
                  impormasyon.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Pasasalamat"
              subtitle="Ang proyektong ito ay hindi magiging posible kung wala ang suporta at tulong ng mga sumusunod."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg">Nais naming pasalamatan ang mga sumusunod:</p>

              <ul className="space-y-2 text-left mx-auto max-w-xl">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    Ang mga komunidad ng Gahonon, Mancruz, Pamorangon, Barangay V, at Barangay VIII sa kanilang
                    bukas-palad na pagtanggap at pakikiisa sa pananaliksik.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    Ang mga cantoras, parapa'san, at iba pang kalahok sa Aurorahan na nagbahagi ng kanilang karanasan at
                    kaalaman.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Ang mga lider ng komunidad na nagbigay ng pahintulot at suporta sa pananaliksik.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Ang mga eksperto sa kultura at tradisyon na nagbigay ng mahalagang pananaw at gabay.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    Ang aming mga pamilya at kaibigan na nagbigay ng suporta at pag-unawa sa buong proseso ng
                    pananaliksik.
                  </span>
                </li>
              </ul>

              <p className="text-lg pt-4">
                Ang proyektong ito ay iniaalay sa lahat ng deboto ng Aurorahan at sa mga susunod na henerasyon na
                magpapatuloy ng tradisyong ito.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
