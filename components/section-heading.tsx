import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: "left" | "center" | "right"
  className?: string
}

export default function SectionHeading({ title, subtitle, eyebrow, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{title}</h2>

      {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}

      <div
        className={cn("decorative-line w-24 my-2", align === "center" && "mx-auto", align === "right" && "ml-auto")}
      ></div>
    </div>
  )
}
