"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return
      containerRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Simplified particles for better performance
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-64 md:w-72 md:h-72 transition-transform duration-200 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full bg-primary/20 backdrop-blur-sm"></div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-accent/70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="relative w-5/6 h-5/6 rounded-full bg-primary border-4 border-accent flex items-center justify-center overflow-hidden"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,rgba(128,32,32,0)_70%)]"></div>

          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Aurorahan Logo"
                width={160}
                height={160}
                className="object-cover rounded-full"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>

        {/* Rosary beads - reduced number for better performance */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180
          const x = Math.cos(angle)
          const y = Math.sin(angle)
          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 rosary-bead"
              style={{
                left: `calc(50% + ${x * 50}%)`,
                top: `calc(50% + ${y * 50}%)`,
                transformOrigin: "center",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
