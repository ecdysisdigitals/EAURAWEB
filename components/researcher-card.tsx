import Image from "next/image"
import { cn } from "@/lib/utils"

interface ResearcherCardProps {
  name: string
  role: string
  description: string
  imageSrc: string
  className?: string
}

export default function ResearcherCard({ name, role, description, imageSrc, className }: ResearcherCardProps) {
  return (
    <div className={cn("bg-secondary rounded-lg overflow-hidden border border-border card-hover", className)}>
      <div className="aspect-[4/3] relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-accent font-medium mb-3">{role}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
