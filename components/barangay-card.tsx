"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BarangayCardProps {
  name: string
  patron: string
  description: string
  imageSrc: string
  href: string
  className?: string
}

export default function BarangayCard({ name, patron, description, imageSrc, href, className }: BarangayCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={cn("bg-secondary rounded-lg overflow-hidden border border-border relative", className)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className={cn("absolute inset-0 bg-muted/50 animate-pulse", isLoaded ? "hidden" : "block")}></div>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className={cn(
            "object-cover transition-transform duration-700",
            isLoaded ? "scale-100 hover:scale-110" : "scale-105",
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-accent">{patron}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Link href={href} className="inline-flex items-center text-accent hover:underline group">
          <span>Alamin ang higit pa</span>
          <motion.div
            className="ml-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatType: "loop", ease: "easeInOut" }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent hover:border-accent/20 transition-colors duration-300 rounded-lg pointer-events-none"></div>
    </motion.div>
  )
}
