import Image from "next/image"
import { cn } from "@/lib/utils"

interface AdvisorCardProps {
  name: string
  role: string
  description: string
  imageSrc: string
  className?: string
}

export default function AdvisorCard({ name, role, description, imageSrc, className }: AdvisorCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-6 bg-secondary rounded-lg overflow-hidden border border-border p-6 card-hover",
        className,
      )}
    >
      <div className="w-32 h-32 relative mx-auto md:mx-0 shrink-0">
        <div className="absolute inset-0 rounded-full border-2 border-accent"></div>
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover rounded-full p-1" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-primary text-center md:text-left">{name}</h3>
        <p className="text-accent font-medium mb-3 text-center md:text-left">{role}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
