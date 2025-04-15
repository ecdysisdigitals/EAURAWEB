"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: React.ReactNode
  className?: string
}

export default function AnimatedIcon({ icon, className }: AnimatedIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-in")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={iconRef}
      className={cn(
        "opacity-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary",
        className,
      )}
    >
      {icon}
    </div>
  )
}
