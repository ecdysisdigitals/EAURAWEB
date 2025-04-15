import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4 font-playfair">404</h1>
        <h2 className="text-2xl font-bold mb-4">Hindi Natagpuan ang Pahina</h2>
        <p className="text-muted-foreground mb-8">
          Paumanhin, ngunit hindi namin mahanap ang pahina na iyong hinahanap. Maaaring ito ay inalis na o mali ang URL
          na iyong inilagay.
        </p>
        <Button asChild>
          <Link href="/">Bumalik sa Pangunahing Pahina</Link>
        </Button>
      </div>
    </div>
  )
}
