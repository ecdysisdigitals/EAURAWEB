"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  author: string
  role: string
  barangay: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

// Simplify testimonials to remove specific names that aren't in the document
const testimonials = [
  {
    quote:
      "Ang Aurorahan ay hindi lamang isang tradisyon para sa akin, ito ay isang paraan ng pagpapahayag ng aking malalim na pananampalataya at pasasalamat sa ating Panginoon.",
    author: "Cantora",
    role: "Cantora",
    barangay: "Barangay Gahonon",
  },
  {
    quote:
      "Bilang isang parapa'san, naramdaman ko ang bigat ng responsibilidad na dalhin ang imahe ng aming patron. Ngunit kasabay nito ang karangalan at pagpapala.",
    author: "Parapa'san",
    role: "Parapa'san",
    barangay: "Barangay Mancruz",
  },
  {
    quote:
      "Ang tradisyong ito ay nagbibigkis sa aming komunidad. Sa bawat pagdiriwang ng Aurorahan, lumalago ang aming pagkakaisa at pananampalataya.",
    author: "Cabo Mayor",
    role: "Cabo Mayor",
    barangay: "Barangay V",
  },
]

export default function TestimonialCarousel({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current, autoplay, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <div
      className={cn("relative overflow-hidden py-12", className)}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-accent">
        <Quote className="w-12 h-12 opacity-50" />
      </div>

      <div className="relative h-[300px] max-w-3xl mx-auto px-12">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          >
            <p className="text-lg md:text-xl mb-6 italic">{testimonials[current].quote}</p>
            <div>
              <p className="font-bold text-primary">{testimonials[current].author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}, {testimonials[current].barangay}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              current === index ? "bg-accent w-6" : "bg-accent/30",
            )}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
