import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="E-AURA Logo" width={40} height={40} />
              <span className="text-accent font-playfair text-2xl font-bold">E-AURA</span>
            </div>
            <p className="text-sm">
              Aurorahan sa Daet, Camarines Norte
              <br />
              Pagkakaisa. Pananampalataya. Kultura.
            </p>
            <p className="text-sm">Isang paglalakbay ng puso, panata, at paniniwala.</p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-medium mb-4 text-accent">Mga Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/tungkol" className="text-sm hover:text-accent transition-colors">
                  TUNGKOL SA AURORAHAN
                </Link>
              </li>
              <li>
                <Link href="/larawan" className="text-sm hover:text-accent transition-colors">
                  MGA LARAWAN
                </Link>
              </li>
              <li>
                <Link href="/barangay" className="text-sm hover:text-accent transition-colors">
                  MGA BARANGAY
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-medium mb-4 text-accent">Mga Barangay</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/barangay/gahonon" className="text-sm hover:text-accent transition-colors">
                  Gahonon
                </Link>
              </li>
              <li>
                <Link href="/barangay/mancruz" className="text-sm hover:text-accent transition-colors">
                  Mancruz
                </Link>
              </li>
              <li>
                <Link href="/barangay/pamorangon" className="text-sm hover:text-accent transition-colors">
                  Pamorangon
                </Link>
              </li>
              <li>
                <Link href="/barangay/barangay-v" className="text-sm hover:text-accent transition-colors">
                  Barangay V
                </Link>
              </li>
              <li>
                <Link href="/barangay/barangay-viii" className="text-sm hover:text-accent transition-colors">
                  Barangay VIII
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-medium mb-4 text-accent">Tungkol sa Amin</h3>
            <p className="text-sm mb-4">Isang paglalakbay ng puso, panata, at paniniwala.</p>
            <Link href="/amin" className="text-sm text-accent hover:underline">
              Alamin ang higit pa tungkol sa amin
            </Link>
          </div>
        </div>

        <div className="decorative-line w-full my-6"></div>

        <div className="text-center text-sm">
          <p>
            Ang nilalaman ng website na ito ay mula sa isinagawang pananaliksik at panayam sa mga barangay ng Gahonon,
            Mancruz, Pamorangon, Barangay V, at Barangay VIII.
          </p>
        </div>
      </div>
    </footer>
  )
}
