"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("bg-secondary p-6 rounded-lg border border-border relative overflow-hidden group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

      <motion.div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 relative z-10"
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold mb-2 text-primary relative z-10">{title}</h3>

      <p className="text-muted-foreground relative z-10">{description}</p>

      <div className="absolute bottom-0 left-0 h-1 bg-accent/50 w-0 group-hover:w-full transition-all duration-300"></div>
    </motion.div>
  )
}
