"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { CandlestickChartIcon as Candle, Church, Users, BookOpen, MapPin, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroLogo from "@/components/hero-logo"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"
import FeatureCard from "@/components/feature-card"
import ResearcherCard from "@/components/researcher-card"
import AdvisorCard from "@/components/advisor-card"
import BarangayCard from "@/components/barangay-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PrayerCandle from "@/components/prayer-candle"
import HistoryTimeline from "@/components/history-timeline"
import { DecorativeElements } from "@/components/decorative-elements"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9])
  const heroY = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    // Initialize scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sample testimonials
  const testimonials = [
    {
      quote:
        "Ang Aurorahan ay hindi lamang isang tradisyon para sa akin, ito ay isang paraan ng pagpapahayag ng aking malalim na pananampalataya at pasasalamat sa ating Panginoon.",
      author: "Maria Reyes",
      role: "Cantora",
      barangay: "Barangay Gahonon",
    },
    {
      quote:
        "Bilang isang parapa'san, naramdaman ko ang bigat ng responsibilidad na dalhin ang imahe ng aming patron. Ngunit kasabay nito ang karangalan at pagpapala.",
      author: "Juan Santos",
      role: "Parapa'san",
      barangay: "Barangay Mancruz",
    },
    {
      quote:
        "Ang tradisyong ito ay nagbibigkis sa aming komunidad. Sa bawat pagdiriwang ng Aurorahan, lumalago ang aming pagkakaisa at pananampalataya.",
      author: "Elena Cruz",
      role: "Cabo Mayor",
      barangay: "Barangay V",
    },
  ]

  // Sample timeline events
  const historyEvents = [
    {
      year: "1800s",
      title: "Pinagmulan ng Aurorahan",
      description:
        "Nagsimula ang tradisyon ng Aurorahan sa mga unang panahon ng Espanyol sa Pilipinas, bilang bahagi ng pagpapalaganap ng Katolisismo.",
    },
    {
      year: "1900s",
      title: "Paglaganap sa Kabikulan",
      description:
        "Kumalat ang tradisyon sa buong rehiyon ng Bikol, na may iba't ibang bersyon depende sa lokal na kultura at patron.",
    },
    {
      year: "1950s",
      title: "Pagbabago ng Oras",
      description:
        "Mula sa orihinal na pagdaraos sa bukang-liwayway (aurora), naging gabi na ang karaniwang oras ng pagdiriwang.",
    },
    {
      year: "1980s",
      title: "Pagbabago at Modernisasyon",
      description:
        "Sa kabila ng modernisasyon, napanatili pa rin ang esensya ng tradisyon, bagaman may ilang pagbabago sa paraan ng pagdiriwang.",
    },
    {
      year: "2000s",
      title: "Pagpapalakas ng Tradisyon",
      description: "Nagkaroon ng mga hakbang upang palakasin at ipreserba ang tradisyon para sa susunod na henerasyon.",
    },
    {
      year: "Kasalukuyan",
      title: "Dokumentasyon at Preserbasyon",
      description:
        "Patuloy na idinodokumento at pinangangalagaan ang tradisyon ng Aurorahan bilang mahalagang bahagi ng kulturang Bikol.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 bg-[url('/images/Andas.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="hero-gradient absolute inset-0"></div>

        {/* Decorative elements */}
        <DecorativeElements variant="corner" className="top-20 left-4" />
        <DecorativeElements variant="corner" className="top-20 right-4 rotate-90" />
        <DecorativeElements variant="corner" className="bottom-4 left-4 -rotate-90" />
        <DecorativeElements variant="corner" className="bottom-4 right-4 rotate-180" />
        <DecorativeElements variant="accent" className="top-1/4 left-1/4 w-64 h-64" />
        <DecorativeElements variant="accent" className="bottom-1/4 right-1/4 w-80 h-80" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container relative z-10 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block mb-2"
              >
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Tradisyon ng Pananampalataya
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
                Aurorahan: <span className="text-accent">Panata, Panalangin, Pamana</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Malugod kang inaanyayahan na tuklasin ang Aurorahan, isang mahalagang debosyonal na tradisyon sa Daet,
                Camarines Norte. Sa bawat hakbang ng panata at dasal, sumasalamin ang lalim ng pananampalataya at
                pagkakakilanlan ng mamamayan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group relative overflow-hidden"
                  asChild
                >
                  <Link href="/tungkol">
                    <span className="relative z-10">Simulan ang Paglalakbay</span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 group relative overflow-hidden"
                  asChild
                >
                  <Link href="/larawan">
                    <span className="relative z-10">Tingnan ang Mga Larawan</span>
                    <span className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <HeroLogo />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Mag-scroll pababa</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <DecorativeElements variant="accent" className="top-1/3 right-0 w-72 h-72 opacity-30" />

        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tungkol sa Aurorahan"
              title="Kasaysayan ng Tradisyon"
              subtitle="Ang Aurorahan ay isang tradisyong panrelihiyon sa rehiyong Bikol na nakaugat sa pananampalatayang Katoliko ng mga mamamayan."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  Ipinagdiriwang ito bilang panalangin at paghingi ng tulong sa patron ng bayan—gaya nina San Roque
                  (patron ng mga maysakit), San Jose (patron ng mga manggagawa), Nuestra Señora de Antipolo (patron ng
                  mga manlalakbay), at Nuestra Señora de Peñafrancia (patron ng Kabikulan).
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

                <div className="pt-4">
                  <Button asChild className="group relative overflow-hidden">
                    <Link href="/tungkol">
                      <span className="relative z-10">Alamin ang Higit Pa</span>
                      <span className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-video group">
                 <video
                    src="/videos/bidyo1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors group">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-secondary relative">
        <DecorativeElements variant="accent" className="bottom-1/4 left-0 w-64 h-64 opacity-30" />

        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Kasaysayan"
              title="Ang Paglalakbay ng Aurorahan sa Panahon"
              subtitle="Alamin ang mahahalagang pangyayari sa kasaysayan ng tradisyong Aurorahan."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <HistoryTimeline events={historyEvents} />
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <DecorativeElements variant="rosary" className="absolute -z-10 opacity-10 top-0 right-0 w-full h-full" />

        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Gawi sa Aurorahan"
              title="Pagsasama-sama para sa Iisang Panata"
              subtitle="Sa bayan ng Daet, ang Aurorahan ay higit pa sa isang panrelihiyosong gawain. Ito ay isang pagkakataon ng sama-samang panalangin, pagtitipon ng pamilya, pagkakapitbahay, at pagkakabuklod ng komunidad."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <FeatureCard
                icon={<Candle className="h-6 w-6" />}
                title="Tatlong Yugto ng Pasiyam"
                description="Ang Aurorahan ay isinasagawa sa loob ng tatlong yugto ng pasiyam, na nagpapakita ng dedikasyon at tiyaga ng mga deboto."
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Pagpupulong at Pagtatalaga"
                description="Bago magsimula ang Aurorahan, nagpupulong ang mga miyembro ng komunidad para italaga ang mga may kabig o sponsor."
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <FeatureCard
                icon={<BookOpen className="h-6 w-6" />}
                title="Pagdarasal at Pag-awit"
                description="Ang pag-awit ng mga dalit at taimtim na pagdarasal ay sentro ng tradisyong Aurorahan, na nagpapakita ng malalim na pananampalataya."
              />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <FeatureCard
                icon={<Church className="h-6 w-6" />}
                title="Munting Misa sa Kapilya"
                description="Bahagi ng tradisyon ang pagdaraos ng munting misa sa kapilya, na nagsisilbing sentro ng debosyon ng komunidad."
              />
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <FeatureCard
                icon={<Heart className="h-6 w-6" />}
                title="Pagbabahagi ng Pagkain"
                description="Pagkatapos ng gawain, nagbabahagi ng pagkain ang mga kalahok, na nagpapakita ng diwa ng bayanihan at pagkakaisa."
              />
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <FeatureCard
                icon={<MapPin className="h-6 w-6" />}
                title="Prusisyon sa Barangay"
                description="Ang prusisyon ng imahe ng patron sa bawat purok ay mahalagang bahagi ng Aurorahan, na nagdadala ng biyaya sa buong komunidad."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prayer Candle Section */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <DecorativeElements
          variant="accent"
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30"
        />

        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Interaktibo"
              title="Magsindi ng Kandila ng Panalangin"
              subtitle="Mag-alay ng panalangin at magsindi ng birtwal na kandila bilang simbolo ng iyong debosyon."
              className="text-primary-foreground"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <PrayerCandle />
                <PrayerCandle />
                <PrayerCandle />
              </div>

              <p className="text-center mt-8 max-w-xl mx-auto text-primary-foreground/80">
                Ang pagsindi ng kandila ay isang simbolo ng iyong panalangin at debosyon. Ito ay nagsisilbing liwanag sa
                gitna ng kadiliman, isang paalala ng presensya ng Diyos sa ating buhay.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <DecorativeElements variant="accent" className="bottom-1/3 right-0 w-64 h-64 opacity-30" />

        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Mga Patotoo"
              title="Mga Kuwento ng Pananampalataya"
              subtitle="Pakinggan ang mga kuwento ng mga deboto ng Aurorahan mula sa iba't ibang barangay ng Daet."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <DecorativeElements variant="corner" className="top-4 left-4" />
        <DecorativeElements variant="corner" className="top-4 right-4 rotate-90" />
        <DecorativeElements variant="corner" className="bottom-4 left-4 -rotate-90" />
        <DecorativeElements variant="corner" className="bottom-4 right-4 rotate-180" />

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                  Bisitahin ang <span className="text-accent">Daet</span>
                </h2>
              </motion.div>

              <p className="text-lg mb-8">
                Bukod sa Aurorahan, narito ang ilan pang yaman ng Daet na dapat mong tuklasin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/10 p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
                >
               
                  <h3 className="text-accent font-bold mb-2">Simbahan ni San Juan Bautista</h3>
                  <p className="text-sm">Itinatag noong 1611, isa sa pinakamatandang simbahan sa rehiyon.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/10 p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
                >
                  
                  </div>
                  <h3 className="text-accent font-bold mb-2">Unang Monumento ni Rizal</h3>
                  <p className="text-sm">Inilunsad noong 1898, ang pinakaunang alaala kay Dr. José Rizal.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/10 p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
                >
                
                  </div>
                  <h3 className="text-accent font-bold mb-2">Bagasbas Beach</h3>
                  <p className="text-sm">Para sa mga mahilig sa dagat at surfing.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-primary-foreground/10 p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
                >
                 
                  <h3 className="text-accent font-bold mb-2">Bicol Natural Park</h3>
                  <p className="text-sm">Likas na kagubatan na mayaman sa halaman at hayop.</p>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group relative overflow-hidden"
                  asChild
                >
                  <Link href="/barangay">
                    <span className="relative z-10">Tuklasin ang Mga Barangay</span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
