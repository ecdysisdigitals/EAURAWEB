"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface HistoryTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export default function HistoryTimeline({ events, className }: HistoryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div ref={containerRef} className={cn("relative py-10", className)}>
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>

      <div className="relative">
        {events.map((event, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "relative mb-12 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center",
                isEven ? "md:text-right" : "",
              )}
            >
              <div className={cn("hidden md:block", isEven ? "order-1" : "order-3", isEven ? "pr-12" : "pl-12")}>
                <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                <p className="text-accent font-medium mb-2">{event.year}</p>
                <p className="text-muted-foreground">{event.description}</p>
              </div>

              <div className="order-2 flex justify-center">
                <div className="relative w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
              </div>

              <div className={cn("md:hidden pl-12 mb-6", isEven ? "order-1" : "order-3")}>
                <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                <p className="text-accent font-medium mb-2">{event.year}</p>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
