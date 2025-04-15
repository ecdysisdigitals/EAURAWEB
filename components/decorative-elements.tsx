import { cn } from "@/lib/utils"

interface DecorativeElementsProps {
  variant?: "corner" | "divider" | "accent" | "rosary"
  className?: string
}

export function DecorativeElements({ variant = "corner", className }: DecorativeElementsProps) {
  if (variant === "corner") {
    return (
      <div className={cn("absolute w-16 h-16 pointer-events-none", className)}>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-accent/70 transform origin-left"></div>
        <div className="absolute top-0 left-0 h-full w-[3px] bg-accent/70 transform origin-top"></div>
      </div>
    )
  }

  if (variant === "divider") {
    return (
      <div className={cn("flex items-center w-full my-8", className)}>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        <div className="mx-4 text-accent">✦</div>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      </div>
    )
  }

  if (variant === "accent") {
    return (
      <div className={cn("absolute -z-10 blur-[100px] rounded-full bg-accent/20 opacity-70", className)}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 mix-blend-overlay"></div>
      </div>
    )
  }

  if (variant === "rosary") {
    return (
      <div className={cn("relative", className)}>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-64 h-64">
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i * 36 * Math.PI) / 180
              const x = 120 * Math.cos(angle)
              const y = 120 * Math.sin(angle)
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-accent/80 shadow-lg shadow-accent/30 rosary-bead"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              )
            })}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-accent/80 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-4 bg-accent/80 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
