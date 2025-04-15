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
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      {/* Other sections remain unchanged */}

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

              <p className="text-lg mb-10">
                Bukod sa Aurorahan, narito ang ilan pang yaman ng Daet na dapat mong tuklasin.
              </p>

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
